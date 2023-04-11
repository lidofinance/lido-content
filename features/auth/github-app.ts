import { OAuthApp } from "octokit";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

export const githubApp = new OAuthApp({
  clientId: serverRuntimeConfig.oauthClientId,
  clientSecret: serverRuntimeConfig.oauthClientSecret,
});
