import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/post/post.actions";
import "../../styles/Posts.scss";

const Post = () => {
  const dispatch = useDispatch();
  const { isLoading, posts, error } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div className="posts">
      {isLoading && <h1>Cargando posts...</h1>}
      {posts &&
        posts.map((post) => {
          return (
            <Link to={`/post/${post._id}`} key={post._id}>
            <div className="post">
              <h2>{post.title}</h2>
              <img src={post.img} alt={post.title} />
              <h3>{post.subtitle}</h3>
            </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Post;
