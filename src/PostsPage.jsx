import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";
import { useState, useEffect } from "react";

export function PostsPage() {
  let name = "Test";

  const [posts, setPosts] = useState([]);

  const getPostData = () => {
    console.log('hello');
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setPosts(response.data);
    })}
useEffect(getPostData, []);
  return (
    <main>
      <PostsNew />
      <PostsIndex name={name} posts={posts} />
      {/* <button onClick={getPostData}>get the data</button> */}
    </main>
  );
}
