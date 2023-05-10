import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import css from "./RegisterForm.module.css";

export function RegisterForm() {
    const dispatch = useDispatch();
  
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
                <label className={css.label}>
                    Username
                </label>
                    <input 
                        className={css.input}
                        type="text"
                        name="name"
                        required />
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
                <button className={css.btnRegister} type="submit">Register</button>
            </form>
        </div>
    )
}