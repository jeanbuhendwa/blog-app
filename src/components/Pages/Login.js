import "./form.css";

const Login = () => {
  return (
    <section className="form section">
      <form className="form__container">
        <h2 className="form__title">Login</h2>
        <div className="form__group">
          <input className="input" type="text" placeholder="Email" />
          <input className="input" type="password" placeholder="Password" />
          <button className="btn">Login</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
