import React from "react";

export const ContactShortDisplay = (props: { contact: any; }) => {
	let item = props.contact;
	return (
		<span>
			{item.firstName}, {item.lastName} ,{item.gender} ,{item.email}
		</span>
	);
};
