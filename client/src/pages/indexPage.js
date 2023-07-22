import Post from "../post";
import {useEffect, useState} from "react";


export default function IndexPage() {
 
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch("/post").then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);

  return (
    <>
    <hr></hr>
      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
      
    </>
  );
}