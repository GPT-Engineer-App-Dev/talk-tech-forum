import { Link, useParams } from "react-router-dom";

const categories = [
  { id: 1, name: "General Discussion" },
  { id: 2, name: "Programming" },
  { id: 3, name: "Hardware" },
  { id: 4, name: "Software" },
];

const topics = [
  { id: 1, title: "Welcome to the forum", author: "Admin", replies: 10, lastPost: "2023-10-01" },
  { id: 2, title: "How to learn JavaScript", author: "User123", replies: 5, lastPost: "2023-10-02" },
];

const Category = () => {
  const { categoryId } = useParams();
  const category = categories.find((cat) => cat.id === parseInt(categoryId));
  

  return (
    <div>
      <h1 className="text-3xl mb-4">{category?.name}</h1>
      <div className="grid gap-4">
        {topics.map((topic) => (
          <Link
            key={topic.id}
            to={`/topics/${topic.id}`}
            className="text-lg text-blue-500 hover:underline"
          >
            <div>
              <h2 className="text-xl">{topic.title}</h2>
              <p>Author: {topic.author}</p>
              <p>Replies: {topic.replies}</p>
              <p>Last Post: {topic.lastPost}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;