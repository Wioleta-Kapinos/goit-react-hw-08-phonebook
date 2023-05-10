import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import css from "./LoginForm.module.css";

export const LoginForm = () => {
    const dispatch = useDispatch();

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
               <label className={css.label}>
                    Email
                </label>
                    <input
                    className={css.input} 
                    type="email" 
                    name="email" 
                    required />
                <label className={css.label}>
                    Password
                </label>
                    <input 
                    className={css.input}
                    type="password" 
                    name="password" 
                    required />
                <button className={css.btnLogIn} type="submit">Log In</button>
            </form>
        </div>
    )
}