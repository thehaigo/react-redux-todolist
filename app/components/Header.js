import React, {Component,PropTypes} from 'react';
import TodoTextInput from './TodoTextInput';

class Header extends Component {
  handleSave(text){
    if(text.length !== 0){
      this.props.addTodo(text);
    }
  }
  render() {
    return(
      <header className="header">
        <h1>Todos</h1>
        <TodoTextInput
          onSave={::this.handleSave}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}

export default Header;
