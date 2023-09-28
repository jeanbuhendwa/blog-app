import { format } from "date-fns";
import "./post.css";
import { NavLink } from "react-router-dom";
const Post = ({ _id, title, summary, content, cover, createdAt, author }) => {
  return (
    <div className="post">
      <div className="post__image">
        <NavLink to={`/post/${_id}`}>
          <img src={"http://localhost:5000/" + cover} alt="Img Bg Post" />
        </NavLink>
      </div>
      <div className="post__content">
        <NavLink to={`/post/${_id}`}>
          <h2>{title}</h2>
        </NavLink>
        <p className="post__date">
          <a className="author">{author.username}</a>
          <time>{format(new Date(createdAt), "MMMM dd, yyyy h:mm a")}</time>
        </p>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default Post;
