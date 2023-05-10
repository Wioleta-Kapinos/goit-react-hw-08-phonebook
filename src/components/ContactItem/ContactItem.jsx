import { useDispatch } from "react-redux";
import { deleteContact } from "redux/phonebook/contactsSlice/operations";
import css from "./ContactItem.module.css";
import PropTypes from "prop-types";

const ContactItem = ({ contact }) => {
    
    const dispatch = useDispatch();
    const handleDelete = id => {
        dispatch(deleteContact(id));
    }

    return (
        <li className={css.itemList}>
            <p className={css.itemName}>{contact.name}</p>
            <p className={css.itemPhone}>{contact.number}</p>
                <button
                className={css.btnDelete}
                type="button"
                name="Delete"
                onClick={() => handleDelete(contact.id)}>Delete contact
                </button>
        </li>  
    )
} 

ContactItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
    })
}

export default ContactItem;