import React from "react";

export const ContactShortDisplay = (props) => {
    let item = props.contact;

    return <span >{item.firstName}, {item.lastName} ,{item.gender} ,{item.email}</span>
}