import {
    
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"

import { Doc } from "../../convex/_generated/dataModel";

export default function DocumentCard({ document }: { document: Doc<"documents"> }) {
    return ( 
        <Card>
            <CardHeader>
                <CardTitle>{document.title}</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <Button variant="secondary">View</Button>
            </CardFooter>
        </Card>
    );
}
