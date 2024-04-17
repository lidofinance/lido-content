#!/usr/bin/env -S yarn zx

class CheckError {
  constructor(message, line) {
    this.message = message;
    this.line = line;
  }
}

/**
 * @param {string} content
 * @returns {CheckError[]}
 */
const checkDomainMention = (content) => {
  const result = [];

  const lines = content.split("\n");
  for (const [index, line] of lines.entries()) {
    if (line.includes("lido.fi")) {
      result.push(new CheckError(`There is lido.fi mention`, index + 1));
    }
  }

  return result;
};

const KNOWN_VARIABLES = [
  "landing_url",
  "landing",
  "ethereum_stake_url",
  "ethereum_stake",
  "ethereum_docs_url",
  "ethereum_docs",
  "polygon_stake_url",
  "polygon_stake",
  "polygon_docs_url",
  "polygon_docs",
  "operatorportal_url",
  "operatorportal",
  "vote_url",
  "vote",
  "easytrack_url",
  "easytrack",
  "help_url",
  "help",
  "opportunities_url",
  "opportunities",
  "dao_agreements_url",
  "dao_agreements",
  "research_url",
  "research",
  "blog_url",
  "blog",
  "lego_url",
  "lego",
];
/**
 *
 * @param {string} content
 * @returns {CheckError[]}
 */
const checkVariablesUsage = (content) => {
  const result = [];

  const lines = content.split("\n");
  for (const [index, line] of lines.entries()) {
    const variables = Array.from(line.matchAll(/\{\{([^}]+)\}\}/g))
      .map((match) => match[1])
      .map((match) => match.trim());
    for (let variable of variables) {
      if (!KNOWN_VARIABLES.includes(variable)) {
        result.push(
          new CheckError(`Unknown variable "${variable}"`, index + 1),
        );
      }
    }
  }

  return result;
};

const main = async () => {
  const pages = await glob([
    "lido-landing/audits.md",
    "lido-landing/faq.md",
    "lido-landing/scorecard.md",
    "lido-landing/termsOfUse.md",
    "lido-landing/l2-audits.md",
  ]);

  let errors = false;
  await Promise.all(
    pages.map(async (page) => {
      const content = await fs.readFile(page, "utf-8");

      const results = [
        ...checkDomainMention(content),
        ...checkVariablesUsage(content),
      ];

      if (results.length != 0) {
        for (let result of results) {
          console.error(`${page}:${result.line}: 🚨 ${result.message}`);
        }
        errors = true;
      } else {
        console.log(`${page}: ✅ Ok`);
      }
    }),
  );
  if (errors) {
    process.exit(1);
  }
};

void main();
