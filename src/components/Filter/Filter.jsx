import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { filterContact } from "redux/phonebook/filterSlice";
import css from "./Filter.module.css";

export const Filter = () => {
    
    const filterInputId = nanoid();
    const dispatch = useDispatch();

    const handleChangeFilter = event => {
        dispatch(filterContact(event.target.value));
    }

    return (
        <div className={css.filter}>
            <label 
            htmlFor={filterInputId}
            className={css.filterLabel}>
            Find contacts by name
            </label>
                <input
                    id={filterInputId}
                    className={css.filterInput}
                    type="search"
                    onChange={handleChangeFilter}>
                </input>
        </div>
    )
}