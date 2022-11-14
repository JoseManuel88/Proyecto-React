import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/Comment.scss";
import { getComments } from "../../redux/comment/comment.actions";
import Author from "../Author/Author";

const Comment = ({ids}) => {
  const dispatch = useDispatch();
  const { isLoading, comments, error } = useSelector((state) => state.comment);

  useEffect(() => {
    dispatch(getComments(ids));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
    {isLoading && 
    <p>Cargando comentarios...</p>}
    {error &&
      <p>{error}</p>}
    {comments &&
    comments.map((comment => {
        return (
            <div className="comment" key={comment._id}>
                <Author id={comment.author}/>
                <p className="comment--text">{comment.text}</p>

            </div>
        )
    }))
    }
    </div>
  )
}

export default Comment