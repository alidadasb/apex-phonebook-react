import React, {Component} from 'react';
import {ContactShortDisplay} from "./ContactShortDisplay";

class ContactsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/contact/")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        items: result || []
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map( (item, index) => (
                        <li key={index}>
                           <ContactShortDisplay contact={item}/>
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

ContactsComponent.propTypes = {};

export default ContactsComponent;