"use client"

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { title } from "process";
import { Button } from "@/components/ui/button"
import { Header } from "./header";
import Head from "next/head";

export default function Home() {
  const documents=useQuery(api.documents.getDocuments)
  const createDocument = useMutation(api.documents.createDocument);

  return (
    <>
    <Header/>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      
        <Button onClick={()=>{
          createDocument({ title: "hello" }).catch((error) => {
            console.error("Failed to create document:", error);
          });
        }}>click me</Button>


        {documents?.map((doc)=>(
          <div key={doc._id}>{doc.title}</div>
        ))}
      </main> 
    </div>
    </>
  );
}
