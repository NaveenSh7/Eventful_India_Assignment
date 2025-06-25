import Link from "next/link";

export default function Header() {
  return (
    <header className="backdrop-blur-md bg-white/40 border-b border-white/20 sticky top-0 z-50 px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold text-blue-600">Artistly.com</h1>
      <nav className="space-x-4 text-sm text-gray-700 bold font-bold gap-1">
        <Link href="/">Home</Link>
        <Link href="/artists">Explore Artists</Link>
        <Link href="/onboard">Onboard Artist</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}
