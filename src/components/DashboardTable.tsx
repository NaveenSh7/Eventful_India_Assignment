interface Artist {
  id: number;
  name: string;
  category: string;
  location: string;
  price: string;
}

interface Props {
  data: Artist[];
}

export default function DashboardTable({ data }: Props) {
  if (data.length === 0) {
    return <p className="text-center text-gray-500 mt-10">No submissions yet.</p>;
  }

  return (
    <div className="overflow-x-auto shadow border rounded">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2 font-medium">Name</th>
            <th className="px-4 py-2 font-medium">Category</th>
            <th className="px-4 py-2 font-medium">Location</th>
            <th className="px-4 py-2 font-medium">Fee</th>
       
          </tr>
        </thead>
        <tbody>
          {data.map((artist) => (
            <tr key={artist.id} className="border-t">
              <td className="px-4 py-2">{artist.name}</td>
              <td className="px-4 py-2">{artist.category}</td>
              <td className="px-4 py-2">{artist.location}</td>
              <td className="px-4 py-2">₹{artist.price}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
