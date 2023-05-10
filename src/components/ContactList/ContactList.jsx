import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/phonebook/contactsSlice/selectors";
import { selectFilter } from "redux/phonebook/filterSlice";
import ContactItem from "../ContactItem/ContactItem";

export const ContactList = () => {

    const contacts = useSelector(selectContacts);
    const statusFilter = useSelector(selectFilter);
    const filteredContactsBook = contacts.filter(contact => contact.name.toLowerCase().includes(statusFilter.status));
    
    return (
        <div>
            <ul className={css.contactList}>
                {filteredContactsBook.map(contact => {
                    return <ContactItem key={contact.id} contact={contact}/>
                })}
            </ul>
        </div>
    )
}