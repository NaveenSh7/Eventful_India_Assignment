interface Artist {
  name: string;
  category: string;
  location: string;
  price: string;
}

export default function ArtistCard({ name, category, location, price }: Artist) {
  return (
    <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
      <h3 className="text-lg font-bold mb-1">{name}</h3>
      <p className="text-sm text-gray-600">{category} – {location}</p>
      <p className="text-sm text-gray-700 mt-1">Fee: ₹{price}</p>
      <button className="mt-3 w-full text-sm bg-purple-600 text-white py-1.5 rounded hover:bg-purple-700 transition cursor-pointer">
        Ask for Quote
      </button>
    </div>
  );
}
