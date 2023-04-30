import React, {  useEffect } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectError, selectIsLoading } from "redux/selectors";

export const App = () =>{
  
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

    return (
      <div className="App">
        <h1>Phonebook</h1>
          <ContactForm />
        <h2>Contacts</h2>
          <Filter />
          {isLoading && !error && <p className="custom-loader"></p>}
          <ContactList />
      </div>
    )
}