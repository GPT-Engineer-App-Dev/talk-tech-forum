import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const topics = [
  { id: 1, title: "Welcome to the forum", author: "Admin", replies: 10, lastPost: "2023-10-01" },
  { id: 2, title: "How to learn JavaScript", author: "User123", replies: 5, lastPost: "2023-10-02" },
];

const posts = [
  { id: 1, author: "Admin", date: "2023-10-01", content: "Welcome to the forum!" },
  { id: 2, author: "User123", date: "2023-10-02", content: "How do I learn JavaScript?" },
];

const schema = z.object({
  title: z.string().min(2, { message: "Title must be at least 2 characters." }),
  content: z.string().min(10, { message: "Content must be at least 10 characters." }),
});

const Topic = () => {
  const { topicId } = useParams();
  const topic = topics.find((top) => top.id === parseInt(topicId));
  const [postList, setPostList] = useState(posts);
  const form = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    const newPost = {
      id: postList.length + 1,
      author: "CurrentUser", // Replace with actual user data
      date: new Date().toISOString().split("T")[0],
      content: data.content,
    };
    setPostList([...postList, newPost]);
    toast("Post created successfully!", { description: "Your post has been added." });
    form.reset();
  };

  return (
    <div>
      <h1 className="text-3xl mb-4">{topic?.title}</h1>
      <div className="grid gap-4">
        {postList.map((post) => (
          <div key={post.id} className="border p-4 rounded">
            <p>Author: {post.author}</p>
            <p>Date: {post.date}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <textarea className="w-full border p-2 rounded" rows="4" placeholder="Content" {...field}></textarea>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">Create Post</Button>
        </form>
      </Form>
    </div>
  );
};

export default Topic;