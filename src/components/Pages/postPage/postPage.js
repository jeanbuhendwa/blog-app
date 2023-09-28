import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./postPage.css";
import { format } from "date-fns";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return "";
  return (
    <section className="singlePost__container section">
      <h1 className="singlePost__title">{postInfo.title}</h1>
      <div className="singlePost__date">
        <time className="time">
          {format(new Date(postInfo.createdAt), "MMMM dd, yyyy h:mm a")}
        </time>
        <p className="username">
          <span className="username_span">by</span> @{postInfo.author.username}
        </p>
      </div>

      <div className="singlePost__image__container">
        <img
          src={`http://localhost:5000/${postInfo.cover}`}
          alt="Img Bg Post"
          className="singlePost__image"
        />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
        className="singlePost__content"
      ></div>
    </section>
  );
};

export default PostPage;
