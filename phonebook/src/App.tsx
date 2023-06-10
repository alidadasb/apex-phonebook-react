import React, { useState } from "react";
import "./App.css";
import ContactsComponent from "./contact/contacts-component";
import ContactForm from "./contact/ContactForm";
function App() {
    const [savedContact, setSavedContact] = useState(null);
    const [error, setError] = useState(null);
    return (
        <div className="App">
            {error}
            <ContactForm
                onError={setError}
                onSuccess={setSavedContact}
                contact={savedContact}
            />
            <ContactsComponent />
        </div>
    );
}
export default App;
