"use client"

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { title } from "process";
import { Header } from "./header";
import Head from "next/head";
import DocumentCard from "./document-card"
import CreateDocumentButton from "./createDocumentButton";
export default function Home() {
  const documents = useQuery(api.documents.getDocuments)
  const createDocument = useMutation(api.documents.createDocument);

  return (
    <>
      <Header />

        <main className="p-24 space-y-8">
          <div className="flex justify-between items-center">

            <h1 className="text-4xl font-bold py-4">MY DOCUMENTS</h1>
            <CreateDocumentButton />
          </div>
          <div className="grid sm:grid-cols-4 grid-cols-1 gap-4">
            {documents?.map((doc) => <DocumentCard
              document={doc}
            />)}
          </div>
        </main>
    </>
  );
}
