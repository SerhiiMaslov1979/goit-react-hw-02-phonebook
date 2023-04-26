import React, { Component } from "react";


export class Form extends Component {
    state = {
        name: '',
        number: '',
    }


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
    
  }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
          <label>
            Name <input type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange} />
          </label>
          <label>
            Number <input type="text"
              name="number"
              value={this.state.number}
              onChange={this.handleChange} />
          </label>
          <button type="submit">Add contact</button>
        </form>
        );
        
    }
}

// export default Form;

