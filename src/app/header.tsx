'use client'

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/ui/mode-toggle";

export function Header() {
    return <div className="bg-slate-900">
        <div className="flex mx-auto justify-between">
            <div className="div">
                BIG BRAIN
            </div>
            <div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>

                <SignedIn>
                    <UserButton />

                    <ModeToggle />

                </SignedIn>
            </div>
        </div>
    </div>
}