import Head from 'next/head'
import Header from '../components/layout/Header'
import Card from '../components/common/Card'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>ALX Project - Home</title>
      </Head>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Home Page</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card 
            title="First Card" 
            content="This is the first card with some sample content." 
          />
          <Card 
            title="Second Card" 
            content="This is the second card with different content." 
          />
          <Card 
            title="Third Card" 
            content="This is the third card demonstrating the reusable component." 
          />
        </div>
      </main>
    </div>
  )
}