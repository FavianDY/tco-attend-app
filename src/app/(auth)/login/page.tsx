"use client";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function AdminDashboardPage() {
  const { data: session, status }: { data: any; status: string } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    } else {
      if (session !== undefined && session?.user.role !== "admin") {
        signIn();
      }
    }
  }, [router, session, session?.user.role, status]);
  useEffect(() => {
    router.push("/admin/dashboard");
  }, [router]);
  return null;
}
