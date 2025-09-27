import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/layout/Header'
import Card from '../components/common/Card'
import PostModal from '../components/common/PostModal'
import { PostData } from '../interfaces'

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [posts, setPosts] = useState<PostData[]>([])

  const handleAddPost = (post: PostData) => {
    setPosts([...posts, post])
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>ALX Project - Home</title>
      </Head>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Home Page</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Add Post
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card 
              key={index}
              title={post.title} 
              content={post.content} 
            />
          ))}
          
          {posts.length === 0 && (
            <Card 
              title="No Posts Yet" 
              content="Click the 'Add Post' button to create your first post." 
            />
          )}
        </div>
      </main>

      <PostModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddPost={handleAddPost}
      />
    </div>
  )
}