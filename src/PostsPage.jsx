import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";



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
      <Modal show={true}>
        <p>Here is my mowdullll</p>
        </Modal>
      {/* <button onClick={getPostData}>get the data</button> */}
    </main>
  );
}
