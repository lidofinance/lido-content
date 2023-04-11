import { GetStaticProps } from "next";
import { FC } from "react";

const Index: FC = () => {
  return <>Redirecting...</>;
};

export default Index;

export const getServerSideProps: GetStaticProps = async () => {
  return {
    redirect: {
      permanent: false,
      destination: "/admin",
    },
  };
};
