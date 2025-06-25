interface Props {
  title: string;
  image: string;
}

export default function CategoryCard({ title, image }: Props) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition cursor-pointer">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-center">{title}</h3>
      </div>
    </div>
  );
}
