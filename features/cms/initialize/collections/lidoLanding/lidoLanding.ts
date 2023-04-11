import type { CmsCollection } from "netlify-cms-core";

import { scorecard } from "./files/scorecard";

export const lidoLanding: CmsCollection = {
  name: "lido-landing",
  label: "Lido landing",
  files: [scorecard],
};
