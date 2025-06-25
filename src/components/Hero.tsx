import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">Find the Perfect Performing Artist</h2>
      <p className="text-lg mb-6">Connecting event planners with top-tier talent.</p>
      <Link href="/artists">
        <button className="bg-white text-purple-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer">
          Explore Artists
        </button>
      </Link>
    </section>
  );
}
