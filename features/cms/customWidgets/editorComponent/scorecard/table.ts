import { registerCustomDirective } from "features/cms/utils/customDirectiveUtils";

interface Row {
  ["scorecard-attribute"]?: string;
  ["categories"]?: string;
  ["self-assessment"]?: string;
  ["comments"]?: string;
}

export const registerScorecardTable = () =>
  registerCustomDirective("scorecard-table", {
    label: "Table",
    fields: [
      {
        name: "rows",
        label: "Rows",
        widget: "list",
        label_singular: "row",
        fields: [
          {
            label: "Scorecard Attribute",
            name: "scorecard-attribute",
            widget: "string",
          },
          {
            name: "categories",
            label: "Categories",
            widget: "select",
            options: [
              "Governance",
              "Validator market",
              "Security",
              "Validator set",
            ],
          },
          {
            label: "Self-Assessment",
            name: "self-assessment",
            widget: "select",
            options: ["Good", "Okay", "Needs improvement"],
          },
          {
            label: "Comments",
            name: "comments",
            widget: "markdown",
            buttons: ["link"],
            editor_components: [],
            modes: ["rich_text"],
          },
        ],
      },
    ],
    toPreview: ({ rows = [] }: { rows: Row[] }) => {
      let rowsString = "";
      rows.forEach((row: Row) => {
        rowsString = `
      ${rowsString}
      ${`
        <tr>
          <td>${row["scorecard-attribute"] || ""}</td>
          <td>${row["categories"] || ""}</td>
          <td>${row["self-assessment"] || ""}</td>
          <td>${row["comments"] || ""}</td>
        </tr>    
      `}
    `;
      });

      return `
        <table>
          <thead>
            <tr>
              <th>Scorecard Attribute</th>
              <th>Category</th>
              <th>Self-Assessment</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            ${rowsString}
          </tbody>
        </table>
      `;
    },
  });
