"use client";

import { useSession } from "next-auth/react";
const { useRouter } = require("next/navigation");
const { useEffect } = require("react");

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/admin/dashboard");
  }, [router]);
  return null;
};

export default Page;
