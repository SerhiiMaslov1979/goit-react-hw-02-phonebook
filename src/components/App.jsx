import { Component } from "react";
export class App extends Component {
   state = {
     contacts: [],
     name: '',
     number:'',
    // filter: '',
   };
  
  deleteTodo = todoid => {

  };

  //обновить состояние
  handleChange = event => {
    const { name, value } = event.currentTarget;
   

    this.setState({
      [name]: value
    })
  }
  // handleNameChange = event => {
  //   // console.log(event.currentTarget.value);

  //   this.setState({name: event.currentTarget.value});

  // }
  //  handleNumberChange = event => {
  //   // console.log(event.currentTarget.value);

  //   this.setState({number: event.currentTarget.value});

  // }

  handleSubmit = event => {
    // что бы не перегрузилась страница по умолчанию
    event.preventDefault();
    console.log(this.state);
    
  }

  render() {
    return (

      // <div>
      //   <input type='text' value={this.state.filter}
      //     // будет обновлять state при каждом вводе текста
      //     onChange={this.handleInputChange} />
      // </div>
      
      <div>
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
      </div>
)

  }

}
