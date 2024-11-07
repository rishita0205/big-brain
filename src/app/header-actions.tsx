"use client"

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { SignInButton, UserButton,ClerkLoading } from "@clerk/nextjs";

export function HeaderActions() {
    return (<>
        <SignedOut>
            <SignInButton />
        </SignedOut>

        <SignedIn>
            
            <UserButton />
            
        </SignedIn>

        <ClerkLoading>
            <div>loading...</div>
        </ClerkLoading>
    </>)
}