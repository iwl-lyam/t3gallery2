import Link from "next/link";
import {db} from "~/server/db";

const mockUrls = [
    "https://utfs.io/f/S7crvkfPCEa3hjfB5WTmfea81QNWCowFJBdbV3njkApciIZy",
    "https://utfs.io/f/S7crvkfPCEa3WQhFwjmuLsrZg1TQBJVblHtGmz237DfM6Ueh",
    "https://utfs.io/f/S7crvkfPCEa3xDEv490GRjrVWgf13bB6svDUhEpSmZJq9Ile"
]

const mockImages = mockUrls.map((url, index) => ({
    id: index+1,
    url,
}))

export default async function HomePage() {
    const posts = await db.query.posts.findMany()
    console.log(posts)
    return (
    <main>
        <div className={"flex flex-wrap gap-4 items-center justify-between p-4"}>
            {posts.map((post) => (<div key={post.id}>{post.name}</div>))}
            {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
                <div key={image.id + "-" + index} className="w-48">
                    <img src={image.url} />
                </div>
            ))
        }</div>
    </main>
    );
}
