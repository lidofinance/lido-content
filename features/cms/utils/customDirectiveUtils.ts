import jsyaml from "js-yaml";

interface Options {
  id?: string;
  label?: string;
  fields: any;
  pattern?: RegExp;
  allow_add?: boolean;
  fromBlock?: (match: RegExpMatchArray) => any;
  toBlock?: (data: any) => string;
  toPreview: (data: any) => string;
}

export const renderCustomDirective = (name: string, object: object) =>
  `:::${name}\n` + (object ? jsyaml.dump(object) : "") + ":::";

export const customDirectivePattern = (name: string) =>
  new RegExp(`^:::${name}\\n([\\s\\S]+?\\n)?:::$`, "m");

export const registerCustomDirective = (name: string, options: Options) =>
  CMS.registerEditorComponent({
    id: name,
    label: options.label || `${name[0].toUpperCase()}${name.slice(1)}`,
    pattern: customDirectivePattern(name),
    fromBlock([, string]) {
      return {
        ...(jsyaml.load(string) as object),
      };
    },
    toBlock: (yaml) => renderCustomDirective(name, yaml),
    ...options,
  });
