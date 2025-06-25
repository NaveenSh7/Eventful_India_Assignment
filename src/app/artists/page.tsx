"use client";

import { useEffect, useState } from "react";
import FilterBlock from "@/components/FilterBlock";
import data from "@/sampleData/artists.json";
import Header from "@/components/Header";
//lazy laoding
import dynamic from "next/dynamic";
const ArtistCard = dynamic(() => import("@/components/ArtistCard"), {
  loading: () => <p className="text-gray-400 text-sm">Loading artist...</p>,
  ssr: false, // optional, in case ArtistCard uses `window` or is client-only
});

interface Artist {
  id: number;
  name: string;
  category: string;
  location: string;
  price: string;
}

export default function ArtistListPage() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [filtered, setFiltered] = useState<Artist[]>([]);

  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
const [price, setPrice] = useState("");

function normalize(str: string) {
  return str.toLowerCase().replace(/[^a-z]/g, "");
}

  useEffect(() => {
    setArtists(data);
    setFiltered(data);
  }, []);

useEffect(() => {
  const filteredArtists = artists.filter((artist) => {
    const [minP, maxP] = artist.price.split("-").map(p => parseInt(p.trim()));
    const p = parseInt(price);

    const categoryMatch = normalize(artist.category).includes(normalize(category));
    const locationMatch = normalize(artist.location).includes(normalize(location));
    const priceMatch = !price || (p >= minP );

    return categoryMatch && locationMatch && priceMatch;
  });

  setFiltered(filteredArtists);
}, [category, location, price, artists]);



  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50">
        <Header/>
      <h1 className="text-2xl font-bold mb-6 text-center mt-10">Explore Artists</h1>

    <FilterBlock
  category={category}
  setCategory={setCategory}
  location={location}
  setLocation={setLocation}
  price={price}
  setPrice={setPrice}
/>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((artist) => (
          <ArtistCard key={artist.id} {...artist} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No matching artists found.</p>
      )}
    </div>
  );
}
