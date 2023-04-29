import { Component } from "react";
// import { ContactForm } from "./ContactsForm/ContactsForm";
import { LogicForm } from "./LogicForm/LogicForm";
// import { nanoid } from "nanoid";
import ContactsList from "./ContactsList/ContactsList";
// import { Filter } from "./Filter/Filter";
import './App.css';




export class App extends Component {
   state = {
     contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
       
     filter: '',
   };
  
  deleteContacts = (contactsId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contacts => contacts.id !== contactsId),
    }));
  };
  
  // deleteTodo = todoid => {

  // };

  // handleNameChange = event => {
  //   // console.log(event.currentTarget.value);

  //   this.setState({name: event.currentTarget.value});

  // }
  //  handleNumberChange = event => {
  //   // console.log(event.currentTarget.value);

  //   this.setState({number: event.currentTarget.value});

  // }
  getFilteredContacts = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };



  render() {
    // const { contacts } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (

      // <div>
      //   <input type='text' value={this.state.filter}
      //     // будет обновлять state при каждом вводе текста
      //     onChange={this.handleInputChange} />
      // </div>
      
      <div className="App__container">
        <h1>Phonebook</h1>
        {/* <ContactForm /> */}
        <LogicForm />
        {/* <ContactForm addContact={this.addContact} /> */}
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
