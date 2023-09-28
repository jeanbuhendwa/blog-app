import { format } from "date-fns";
import "./post.css";
const Post = ({ title, summary, content, cover, createdAt, author }) => {
  return (
    <div className="post">
      <div className="post__image">
        <img src={"http://localhost:5000/" + cover} alt="Img Bg Post" />
      </div>
      <div className="post__content">
        <h2>{title}</h2>
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
