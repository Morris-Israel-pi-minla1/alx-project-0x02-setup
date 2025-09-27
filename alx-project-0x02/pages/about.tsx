import Head from 'next/head'
import Header from '../components/layout/Header'
import Button from '../components/common/Button'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>ALX Project - About</title>
      </Head>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About Page</h1>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Button Sizes</h2>
            <div className="flex space-x-4 items-center">
              <Button size="small">Small Button</Button>
              <Button size="medium">Medium Button</Button>
              <Button size="large">Large Button</Button>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Button Shapes</h2>
            <div className="flex space-x-4 items-center">
              <Button shape="rounded-sm">Rounded Small</Button>
              <Button shape="rounded-md">Rounded Medium</Button>
              <Button shape="rounded-full">Rounded Full</Button>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Combinations</h2>
            <div className="flex space-x-4 items-center">
              <Button size="small" shape="rounded-full">Small & Round</Button>
              <Button size="large" shape="rounded-sm">Large & Sharp</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}