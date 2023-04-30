import { Component } from "react";
import { LogicForm } from "./LogicForm/LogicForm";
import { nanoid } from "nanoid";
import ContactsList from "./ContactsList/ContactsList";
import './App.css';




export class App extends Component {
   state = {
     contacts: [
    {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
    {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
    {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
    {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'},
  ],
       
     filter: '',
   };
  
  addContact = ({ name, number }) => {
    if (this.state.contacts.some(contact => name.toLowerCase() === contact.name.toLowerCase())) {
      alert(`${name} is already in contacts`)
      return
    };
  const contact = { id: nanoid(), name, number };
  this.setState(prevState => ({
    contacts: [...prevState.contacts, contact],
     }));
};

  deleteContacts = (contactsId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contacts => contacts.id !== contactsId),
    }));
  };
  
  
  getFilteredContacts = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };



  render() {
    
    const filteredContacts = this.getFilteredContacts();
    return (

      
      <div className="App__container">
        <h1>Phonebook</h1>
         <LogicForm addContact={this.addContact} />
         <h2>Contacts</h2>
         <h3>Find contacts by name</h3>
        <Filter onChange={e => this.setState({ filter: e.target.value })} value={this.state.filter} />
      
        <ContactsList contacts={filteredContacts} onDeleteContacts={this.deleteContacts} />

      </div>
)

  }

}

function Filter ({ onChange, value }) {
  return <input type='text' onChange={onChange} value={value} />
}
