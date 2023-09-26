import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      alert("Successfully registered!");
    } else {
      alert("Something went wrong!");
    }
  }
  return (
    <section className="form section">
      <form className="form__container" onSubmit={register}>
        <h2 className="form__title">Register</h2>
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
          <button className="btn">Register</button>
        </div>
      </form>
    </section>
  );
};

export default Register;
