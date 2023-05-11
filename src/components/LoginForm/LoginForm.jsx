import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { nanoid } from "nanoid";
import css from "./LoginForm.module.css";

export const LoginForm = () => {
    const dispatch = useDispatch();
    const emailInputId = nanoid();
    const passwordInputId = nanoid();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    }
    
    return (
        <div className={css.loginForm}>
            <form className={css.form} onSubmit={handleSubmit}>
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
                <button className={css.btnLogIn} type="submit">Log In</button>
            </form>
        </div>
    )
}