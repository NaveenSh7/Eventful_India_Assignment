interface Artist {
  name: string;
  category: string;
  location: string;
  price: string;
}

export default function ArtistCard({ name, category, location, price }: Artist) {
  return (
    <div className="p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 ease-in-out border border-gray-100">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <div className="text-sm text-gray-600 flex flex-wrap gap-x-3">
          <span className="inline-block bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">
            {category}
          </span>
          <span className="text-gray-500">📍 {location}</span>
        </div>
        <p className="mt-2 text-sm text-gray-800">
          <span className="font-medium text-gray-900">Fee:</span> ₹{price}
        </p>
        <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 rounded-lg transition duration-200">
          Ask for Quote
        </button>
      </div>
    </div>
  );
}
