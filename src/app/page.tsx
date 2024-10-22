import Link from "next/link";
import {db} from "~/server/db";
import {headers} from "next/headers";

export const dynamic = "force-dynamic"

export default async function HomePage() {
    headers()
    const images = await db.query.images.findMany({
        orderBy: (model, { asc }) => asc(model.id)
    })
    return (
    <main>
        <div className={"flex flex-wrap gap-4 items-center justify-between p-4"}>
            {images.map((image, index) => (
                <div key={image.id + "-" + index} className="w-48 flex flex-col">
                    <img src={image.url} />
                    <div>{image.name}</div>
                </div>
            ))
        }</div>
    </main>
    );
}
