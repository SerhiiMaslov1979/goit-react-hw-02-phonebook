import { Component } from "react";
// import { Form } from "./ContactsForm/ContactsForm";
import { LogicForm } from "./LogicForm/LogicForm";



export class App extends Component {
   state = {
     contacts: [],
     filter: '',
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



  render() {
    return (

      // <div>
      //   <input type='text' value={this.state.filter}
      //     // будет обновлять state при каждом вводе текста
      //     onChange={this.handleInputChange} />
      // </div>
      
      <div>
        {/* <Form /> */}
        <LogicForm />

      </div>
)

  }

}
