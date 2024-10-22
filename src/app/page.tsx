import Link from "next/link";
import {db} from "~/server/db";
import {headers} from "next/headers";
import {SignedIn, SignedOut} from "@clerk/nextjs";

export const dynamic = "force-dynamic"

async function Images() {
    headers()
    const images = await db.query.images.findMany({
        orderBy: (model, { asc }) => asc(model.id)
    })
    return (<div className={"flex flex-wrap gap-4 items-center justify-between p-4"}>
        {images.map((image) => (
            <div key={image.id} className="w-48 flex flex-col">
                <img src={image.url} />
                <div>{image.name}</div>
            </div>
        ))
        }</div>)
}

export default async function HomePage() {
    headers()

    return (
    <main>
        <SignedOut>
            <div className={"w-full text-center h-full text-2xl"}>Please sign in</div>
        </SignedOut>
        <SignedIn><Images /></SignedIn>
    </main>
    );
}
