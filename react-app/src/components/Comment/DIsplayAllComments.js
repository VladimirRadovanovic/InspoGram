import CommentModal from ".";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./DisplayComment.css";
import cat from "../../images/cat.jpg";

function DisplayAllComments(comments) {
  const posts = useSelector((state) => state.userPostsReducer);

  const { userId } = useParams();

  // useEffect(() => {

  // }, [userId])

  return (
    <>
      {comments.comments.map((comment) => (
        <div key={comment.id} className="singular-comment-container">
          <NavLink to={`/users/${comment.user.id}`} activeClassName="active">
            <img className="profile-pic-comment" src={cat} alt="cat" />
          </NavLink>
          <div className="singular-comment-info" >
            <NavLink
                to={`/users/${comment.user.id}`}
                className="comment-username"
            >
                {comment.user.full_name}
            </NavLink>
            <p className="actual-comment">{comment.comment}</p>
            <CommentModal comment={comment} />
          </div>
        </div>
      ))}
    </>
  );
}

export default DisplayAllComments;
