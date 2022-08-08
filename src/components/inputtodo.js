import React from "react";

export default class InputTodo extends React.Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({
      title: ""
    });  
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type={"text"} placeholder="Add Todo..." value={this.state.title} onChange={this.onChange} name="title"/>
        <button>Submit</button>
      </form>
    )
  }
}
