import { useContext, useState } from "react";
import "./form.css";
import { Navigate } from "react-router-dom";
import { userContext } from "../UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(userContext);

  async function login(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("Wrong username or password!");
    }
  }

  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <section className="form section">
      <form className="form__container" onSubmit={login}>
        <h2 className="form__title">Login</h2>
        <div className="form__group">
          <input
            className="input"
            type="text"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn">Login</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
