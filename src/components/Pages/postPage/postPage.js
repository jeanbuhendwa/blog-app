import { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./postPage.css";
import { format } from "date-fns";
import { userContext } from "../../UserContext";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(userContext);
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
        {userInfo.id === postInfo.author._id && (
          <NavLink className="post__edit" to={`/edit/${postInfo._id}`}>
            Edit the Post <i class="fa-solid fa-pen-to-square"></i>
          </NavLink>
        )}
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
