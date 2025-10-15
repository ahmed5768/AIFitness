import { SignUp } from "@clerk/nextjs";
import React from "react";

function SignUpPage() {
  return (
    <main className="flex h-full w-full items-center justify-center">
      <SignUp />
    </main>
  );
}

export default SignUpPage;
