import { useEffect, useState } from "react";
import Post from "./Post/Post";
import "./Post/post.css";
const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <section className="post__container section">
      {posts.length > 0 && posts.map((post) => <Post {...post} />)}
    </section>
  );
};

export default IndexPage;
