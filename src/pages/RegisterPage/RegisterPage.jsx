import { RegisterForm } from "components/RegisterForm/RegisterForm";
import css from "./RegisterPage.module.css";

export default function RegisterPage() {
    return (
        <div>
            <h2 className={css.title}>Register Form</h2>
            <RegisterForm />
        </div>
    )
}