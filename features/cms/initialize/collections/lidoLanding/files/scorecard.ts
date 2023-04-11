import type { CmsCollectionFile } from "netlify-cms-core";

export const scorecard: CmsCollectionFile = {
  name: "scorecard",
  label: "Scorecard",
  description: "Scorecard page",
  file: "lido-landing/scorecard.md",
  fields: [
    { label: "Title", name: "title", widget: "string" },
    { label: "Description", name: "description", widget: "text" },
    {
      label: "Body",
      name: "body",
      widget: "markdown",
      buttons: ["heading-two", "link"],
      editor_components: ["scorecard-table"],
      modes: ["rich_text"],
    },
  ],
};
