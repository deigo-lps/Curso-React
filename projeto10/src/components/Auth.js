import classes from "./Auth.module.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
const Auth = () => {
  const passwordRef = useRef();
  const emailRef = useRef();
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      passwordRef.current.value.trim() !== "" &&
      emailRef.current.value.trim() !== ""
    ) {
      dispatch(authActions.login());
    }
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleSubmit}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input ref={emailRef} type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input ref={passwordRef} type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
