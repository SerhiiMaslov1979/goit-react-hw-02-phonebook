import React, { Component } from "react";


export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };
  //обновить состояние
  handleChange = event => {
    const { name, value } = event.currentTarget;
    
    this.setState({
      [name]: value
    })
    }
    
    handleSubmit = event => {
    // что бы не перегрузилась страница по умолчанию
    event.preventDefault();
    console.log(this.state);
      // this.props.addContact(this.state);
      // this.resetForm();
  }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
          <label>
            Name <input type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required />
          </label>
          <label>
            Number <input type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
                pattern="^\+380\d{9}$"
                title="Enter a valid Ukrainian mobile phone number"
                required />
          </label>
          <button type="submit">Add contact</button>
        </form>
        );
        
    }
}

// export default Form;

