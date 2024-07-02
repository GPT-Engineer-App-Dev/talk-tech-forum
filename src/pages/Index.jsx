import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "General Discussion" },
  { id: 2, name: "Programming" },
  { id: 3, name: "Hardware" },
  { id: 4, name: "Software" },
];

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Tech Discussions</h1>
      <div className="grid gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/categories/${category.id}`}
            className="text-lg text-blue-500 hover:underline"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Index;