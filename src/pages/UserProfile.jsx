const user = {
  name: "User123",
  email: "user123@example.com",
  joinDate: "2023-01-01",
  topics: [
    { id: 1, title: "How to learn JavaScript" },
  ],
  replies: [
    { id: 1, content: "You can start with online tutorials." },
  ],
};

const UserProfile = () => {
  return (
    <div>
      <h1 className="text-3xl mb-4">{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Join Date: {user.joinDate}</p>
      <h2 className="text-2xl mt-4">Topics</h2>
      <div className="grid gap-4">
        {user.topics.map((topic) => (
          <div key={topic.id} className="border p-4 rounded">
            <p>{topic.title}</p>
          </div>
        ))}
      </div>
      <h2 className="text-2xl mt-4">Replies</h2>
      <div className="grid gap-4">
        {user.replies.map((reply) => (
          <div key={reply.id} className="border p-4 rounded">
            <p>{reply.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;