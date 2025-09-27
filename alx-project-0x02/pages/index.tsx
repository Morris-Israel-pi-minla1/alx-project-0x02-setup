import Head from 'next/head'
import Header from '../components/layout/Header'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>ALX Project - Welcome</title>
        <meta name="description" content="Next.js project setup and basics" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to ALX Project
          </h1>
          <p className="text-lg text-gray-600">
            This is a Next.js project with TypeScript and Tailwind CSS
          </p>
        </div>
      </main>
    </div>
  )
}