"use client";
import { useAppDispatch } from "@/hook/redux.hook";
import { login } from "@/redux/slices/authSlice";
import { handleApiErrors } from "@/utils/api-endpoints";
import { registerApi } from "@/utils/api/auth";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

type Props = {};

const index = (props: Props) => {
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

export default index;
