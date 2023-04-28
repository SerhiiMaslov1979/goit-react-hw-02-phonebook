import React from "react";
// import styled from "styled-components";
import './ContactsList.css';


const ContactsList = ({ contacts, onDeleteContacts }) => {
    return (
        <ul className="ContactsList__list">
           {contacts.map(({ id, name, number }) => (
            <li key={id} className="ContactsList__item">
                    <p className="ContactsList__text">{name}:  {number}</p>
                    <button onClick={() => onDeleteContacts(id)}>Delete</button>
                   
                
            </li>
            ))}
        </ul>
    );
}


// export const ContactsList = ({contacts, onDeleteContacts}) => {
//     console.log();
//     return (
//         <ul>
//             <li>
//                 <button>Vasya

//                 </button>
//             </li>
//         </ul>
//     );
// }


export default ContactsList;
