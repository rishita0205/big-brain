"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"

import UploadDocumentForm from "./upload-document-form"
export default function CreateDocumentButton() {
    const[isOpen,setIsOpen]=useState(false);

    return (
        <Dialog onOpenChange={setIsOpen} open={isOpen}>
            <DialogTrigger asChild>
                <Button >Upload Document</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Upload a Document</DialogTitle>
                    <DialogDescription>
                       Upload a team Document for you to search over in future.
                    </DialogDescription>
                    <UploadDocumentForm onUpload={()=> setIsOpen(false)}/>
                </DialogHeader>
            </DialogContent>
        </Dialog>


    );
}
