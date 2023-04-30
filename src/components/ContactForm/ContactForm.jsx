import { nanoid } from "nanoid";
import { selectContacts } from "redux/selectors";
import { addContact } from "redux/operations";
import { useSelector, useDispatch} from "react-redux";
import css from "./ContactForm.module.css";

export const ContactForm = () => {

    const nameInputId = nanoid();
    const numberInputId = nanoid();
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.elements.name.value;
        const number = form.elements.number.value;

        if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            alert(`${name} is already in contacts.`);
            return;
        } 
        dispatch(addContact({name, number}));
        form.reset();
        }

    return (
        <div className={css.contactForm}>
            <form onSubmit={handleSubmit} className={css.form}>
                <label 
                    htmlFor={nameInputId}
                    className={css.label}>
                    Name
                </label>
                <input 
                    id={nameInputId}
                    className={css.input}
                    name="name"
                    type="text"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                ></input>
                <label 
                    htmlFor={numberInputId}
                    className={css.label}>
                    Number
                </label>
                <input
                    id={numberInputId}
                    className={css.input}
                    type="tel"
                    name="number"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                ></input>
                <button 
                    type="submit"
                    className={css.addContact}>Add contact</button>
            </form>
        </div>
    )
}