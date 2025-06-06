'use client';

import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author_name: string;
  created_at: string;
}

export default function ProjectsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/blog-posts/');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-white text-gray-800">
        <section className="py-20 px-8 text-center">
          <p>Loading posts...</p>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-white text-gray-800">
        <section className="py-20 px-8 text-center">
          <p className="text-red-500">Error: {error}</p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="py-20 px-8 text-center">
        <h1 className="text-4xl font-bold text-red-800 mb-4">Our Projects</h1>
        <p className="text-lg text-gray-700 mb-8">
          Here are the best blog.............
        </p>

        <div className="max-w-4xl mx-auto">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className="mb-12 p-6 bg-gray-50 rounded-lg shadow">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">
                  By {post.author_name} • {post.created_at}
                </p>
                <div 
                  className="prose max-w-none text-gray-700" 
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                />
              </div>
            ))
          ) : (
            <p className="text-gray-600">No blog posts found.</p>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}