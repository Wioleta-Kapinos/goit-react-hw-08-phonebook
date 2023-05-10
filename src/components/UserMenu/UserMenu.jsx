import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { useAuth } from "hooks/useAuth";
import css from "./UserMenu.module.css";

export function UserMenu() {
    const dispatch = useDispatch();
    const { user } = useAuth();
        return (
              <div className={css.user}>
                  <p className={css.userName}>Welcome, {user.name}</p>
                  <button className={css.btnLogOut} type="button" onClick={() => dispatch(logOut())}>
                    Logout
                  </button>
              </div>
        );
}