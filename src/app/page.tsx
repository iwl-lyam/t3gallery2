import Link from "next/link";

const mockUrls = [
    "https://utfs.io/f/S7crvkfPCEa3hjfB5WTmfea81QNWCowFJBdbV3njkApciIZy",
    "https://utfs.io/f/S7crvkfPCEa3WQhFwjmuLsrZg1TQBJVblHtGmz237DfM6Ueh",
    "https://utfs.io/f/S7crvkfPCEa3xDEv490GRjrVWgf13bB6svDUhEpSmZJq9Ile"
]

const mockImages = mockUrls.map((url, index) => ({
    id: index+1,
    url,
}))

export default function HomePage() {
  return (
    <main>
        <div className={"flex flex-wrap gap-4 items-center justify-between p-4"}>{
            [...mockImages, ...mockImages, ...mockImages].map((image) => (
                <div key={image.id} className="w-48">
                    <img src={image.url} />
                </div>
            ))
        }</div>
    </main>
  );
}
