export default async function Post({ params }) {
    const id = params.id;
  
    // Fetch the post data server-side
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${id}`);
  
    const post = await res.json();
  
    return (
      <main className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
        <p className="text-gray-500">Published on {post.created_at_format}</p>
        <img src={post.image} alt="Post Image" className="my-4 w-full object-cover" />
        <p className="pb-10 text-gray-700">{post.description}</p>
      </main>
    );
  }
  