import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

async function AuthRedirect() {
  const { isAuthenticated } = await auth();
  redirect(isAuthenticated ? "/editor" : "/sign-in");
  return null;
}

export default function Home() {
  return (
    <Suspense>
      <AuthRedirect />
    </Suspense>
  );
}
