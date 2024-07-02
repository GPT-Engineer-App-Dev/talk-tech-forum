import { useParams } from "react-router-dom";

const posts = [
  { id: 1, author: "Admin", date: "2023-10-01", content: "Welcome to the forum!" },
  { id: 2, author: "User123", date: "2023-10-02", content: "How do I learn JavaScript?" },
];

const Topic = () => {
  const { topicId } = useParams();
  const topic = topics.find((top) => top.id === parseInt(topicId));

  return (
    <div>
      <h1 className="text-3xl mb-4">{topic?.title}</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded">
            <p>Author: {post.author}</p>
            <p>Date: {post.date}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
      <form className="mt-4">
        <textarea className="w-full border p-2 rounded" rows="4" placeholder="Add a reply..."></textarea>
        <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Reply</button>
      </form>
    </div>
  );
};

export default Topic;