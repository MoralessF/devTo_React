import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Posts.scss';

const Posts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:8080/api/v1/posts')
      .then((response) => response.json())
      .then((post) => {
        setPosts([...post.payload]);
        setIsLoading(false);
      });
  }, []);
 
  if (isLoading) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  } else {
    return (
      <div className="Posts">
        <div className="Posts-Container">
          <div className="Posts-Content">
            {posts.map((post) => {
              return (
                <div className="card mb-2" key={post._id}>
                  <img
                    className="card-img-top"
                    src={post.image}
                    width="32px"
                    height="200px"
                  ></img>
                  <div className="d-flex">
                    <img
                      src={post.user.image}
                      width="32em"
                      height="32em"
                      className="rounded-pill ms-3 mt-3 gap-3"
                      alt="posts_avatar"
                    ></img>
                    <div className="d-flex flex-column mt-3 ms-1">
                      <span>{post.user.firstname}</span>
                      <small>
                        {post.day}/{post.month}/{post.year}
                      </small>
                    </div>
                  </div>
                  <div className="card-body">
                  <Link className="test"  to={'/BigPosts/'+post._id}>
                    <h4 className="card-title">{post.title}</h4>
                    </Link>
                    <p className="card-text">
                      {post.contentText.substring(0, 50)}...
                    </p>
                    <div className="d-flex justify-content-between">
                      <div>
                        <span>
                          <i className="bi bi-suit-heart"></i>{' '}
                          {post.counterReactions} Reactios
                        </span>
                        <span>
                          <i className="bi bi-chat-right"></i>{' '}
                          {post.counterComents} Comments
                        </span>
                      </div>
                      <div>
                        <a className="btn btn-secondary btn-sm">Update</a>
                        <a className="btn btn-secondary btn-sm">Delete</a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};
export default Posts;





