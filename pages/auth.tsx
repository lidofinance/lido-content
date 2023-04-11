import { githubApp } from "features/auth";
import { nanoid } from "nanoid";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export default function Auth() {
  return <>Redirecting...</>;
}

export const getServerSideProps = () => {
  const authResult = githubApp.getWebFlowAuthorizationUrl({
    redirectUrl: publicRuntimeConfig.baseUrl + "/callback",
    state: nanoid(32),
  });

  return {
    redirect: {
      destination: authResult.url,
    },
  };
};
