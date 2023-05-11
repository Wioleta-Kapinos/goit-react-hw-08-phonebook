import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import { nanoid } from "nanoid";
import css from "./RegisterForm.module.css";

export function RegisterForm() {
    const dispatch = useDispatch();
    const userNameInputId = nanoid();
    const emailInputId = nanoid();
    const passwordInputId = nanoid();
  
    const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
  
      form.reset();
    };
    return (
        <div className={css.registerForm}>
            <form className={css.form} onSubmit={handleSubmit}>
                <label
                    htmlFor={userNameInputId}
                    className={css.label}>
                    Username
                </label>
                    <input
                        id={userNameInputId} 
                        className={css.input}
                        type="text"
                        name="name"
                        required />
                <label 
                    htmlFor={emailInputId}
                    className={css.label}>
                    Email
                </label>
                    <input
                        id={emailInputId}
                        className={css.input} 
                        type="email"
                        name="email"
                        required />
                <label
                    htmlFor={passwordInputId} 
                    className={css.label}>
                    Password
                </label>
                    <input
                        id={passwordInputId}
                        className={css.input}
                        type="password"
                        name="password"
                        required />
                <button className={css.btnRegister} type="submit">Register</button>
            </form>
        </div>
    )
}