import { useEffect, FC } from "react";
import { GetServerSideProps } from "next";
import getConfig from "next/config";
import { githubApp } from "features/auth";

const { publicRuntimeConfig } = getConfig();

interface CallbackProps {
  message: string;
  content: string;
}

const Callback: FC<CallbackProps> = ({ message, content }) => {
  useEffect(() => {
    const oauthProvider = "github";
    function recieveMessage(event: MessageEvent) {
      console.log("recieveMessage %o", event);
      const originHost = new URL(event.origin).host;
      const baseUrlHost = new URL(publicRuntimeConfig.baseUrl).host;
      if (originHost !== baseUrlHost) {
        console.log("Invalid origin: %s", event.origin);
        return;
      }
      // send message to main window with da app
      window.opener?.postMessage(
        `authorization:${oauthProvider}:${message}:${JSON.stringify(content)}`,
        event.origin
      );
    }
    window.addEventListener("message", recieveMessage, false);
    // Start handshare with parent
    console.log("Sending message: %o", oauthProvider);
    window.opener?.postMessage(`authorizing:${oauthProvider}`, "*");
  }, [message, content]);

  return <>Loading...</>;
};

export default Callback;

const getAccessToken = async (options: { code: string }) => {
  try {
    const authenticationResult = await githubApp.createToken(options);
    return {
      message: "success",
      content: {
        token: authenticationResult.authentication.token,
        provider: "github",
      },
    };
  } catch (error) {
    return {
      message: "error",
      content: JSON.stringify(error),
    };
  }
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.query.code == null || Array.isArray(context.query.code)) {
    throw new Error("code wasn't specified");
  }
  const { message, content } = await getAccessToken({
    code: context.query.code,
  });
  return {
    props: {
      message,
      content,
    },
  };
};
