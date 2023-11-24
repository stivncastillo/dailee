"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { LoadingPage } from "@/components/Loading";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <LoadingPage />;
  }

  if (status === "authenticated") {
    router.push("/dashboard");
    return;
  }

  if (status === "unauthenticated") {
    router.push("/login");
    return;
  }

  return false;
}
