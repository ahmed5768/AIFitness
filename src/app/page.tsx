import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
import React from "react";

function HomePage() {
  return (
    <div>
      HomePage<br/>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  );
}

export default HomePage;
