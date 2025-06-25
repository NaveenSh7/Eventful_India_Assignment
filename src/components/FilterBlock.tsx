type FilterData = {
  category: string;
  setCategory: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
  price: string;
  setPrice: (value: string) => void;
};

export default function FilterBlock({
  category,
  setCategory,
  location,
  setLocation,
  price,
  setPrice,
}: FilterData) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded px-3 py-2"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border rounded px-3 py-2"
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border rounded px-3 py-2"
      />
    </div>
  );
}
