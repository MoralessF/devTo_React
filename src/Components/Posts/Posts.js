import React, { useEffect, useState, useContext } from 'react';
import './Posts.scss';
// const Context = React.createContext();
const Posts = () => {
  const [posts, setPosts] = useState('');
  // const [context, setContext] = useContext(Context);
  useEffect(() => {
    /* fetch('http://localhost:8080/api/v1/posts')
      .then((response) => response.json())
      .then((post) => {
        setPosts([...post.payload]);
        // setContext(post.payload);
        console.log(posts);
        // console.log(context);
      }); */
  }, []);
  return (
    <div className="Posts">
      <div className="Posts-Container">
        <div className="Posts-Content"></div>
      </div>
    </div>
  );
};

export default Posts;
