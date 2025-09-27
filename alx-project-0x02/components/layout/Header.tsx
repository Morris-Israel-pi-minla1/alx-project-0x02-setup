import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            ALX Project
          </Link>
          <div className="space-x-4">
            <Link href="/" className="hover:text-blue-200 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-200 transition-colors">
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}