import Post from "@/components/Post";
import prisma from "@/lib/prisma";

// export const dynamic = "force-dynamic"

export default async function HomePage() {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
    include: {
      author: true,
    },
  });

  return (
    <main>
      <h1>Latest Posts</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  );
}
