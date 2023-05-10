import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { fetchContacts } from "redux/phonebook/contactsSlice/operations";
import { selectContacts, selectIsLoading, selectError } from "redux/phonebook/contactsSlice/selectors";
import { Loader } from "components/Loader/Loader";
import css from "./PhonebookPage.module.css";

export default function PhonebookPage() {

    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const contacts = useSelector(selectContacts);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className={css.phonebookPage}>
            <ContactForm />
            <Filter />
            {isLoading && <Loader />}
            {error && <p>Something went wrong...</p>}
            {contacts.length > 0 && <ContactList />}
        </div>
    )
}