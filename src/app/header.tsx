'use client'
import { ModeToggle } from "@/components/ui/mode-toggle";
import { HeaderActions } from "./header-actions";

export function Header() {
    return <div className="bg-slate-900 py-4 sticky top-0">
        <div className="container flex mx-auto justify-between items-center ">
            <div className="flex items-center px-2">
                BIG BRAIN
            </div>
            <div>
            <div className="flex gap-4 px-2">
            <ModeToggle />
            <HeaderActions/>
            </div>
            </div>
        </div>
    </div>
}