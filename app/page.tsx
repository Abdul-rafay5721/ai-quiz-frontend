"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";

type Props = {};

const Index = (props: Props) => {
  const router = useRouter();

  router.push("/login");

  return (
    <>
      <Head>
        <title>Register | About Scripture</title>
      </Head>
      <div>Main Page</div>
    </>
  );
};

export default Index;
