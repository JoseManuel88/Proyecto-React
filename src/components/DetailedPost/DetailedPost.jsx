import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIndividualPost } from "../../redux/post/post.actions";
import "../../styles/DetailedPost.scss";
import Comment from "../Comment/Comment";
import Formulario from "../Formulario/Formulario";


const DetailedPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, detailPost, error } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getIndividualPost(id));
  }, []);
 console.log(detailPost)
  return (
    <div>
      {isLoading && <h2>Cargando datos...</h2>}
      {error && <h2>{error.message}</h2>}
      {detailPost.title && (
        <div className="detailed-post">
          <div className="detailed-post--img">
            <img src={detailPost.img} alt={detailPost.title} />
          </div>
          <div className="detailed-post--underDiv">
            <div className="detailed-post--text">
              <h2>{detailPost.title}</h2>
              <h3>{detailPost.subtitle}</h3>
              <p dangerouslySetInnerHTML={{ __html: detailPost.text }}></p>
            </div>
            <div className="detailed-post--ingredients">
              <h3>Ingredientes</h3>
              <ul>
                {detailPost.ingredients.map((ingredient) => {
                  return (
                    <div key={ingredient._id} className="detailed-post--ingredients--list">
                      <li>{ingredient.name}</li>
                      <li>{ingredient.quantity}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="detailed-post--comments">
            {detailPost.comments &&
                  <div>
                  {console.log(detailPost.comments)}
                    <Comment ids={detailPost.comments} />
                  </div>
            }
               
          </div>
         <Formulario type='comment' postId={id}/>
            
        </div>
      )}
    </div>
  );
};

export default DetailedPost;
