import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    count : 0
  };

  add = () => {
    // this.setState({count : this.state.count + 1 }); 
    // 해당 함수를 나간 후 state가 refresh됨. 해당 코드는 state에 의존적이기 때문에 좋은 코드가 아님
    this.setState(current => ({count : current.count + 1})); // react에서 외부의 상태에 의존하지 않는 가장 좋은 방법
  }

  minus = () => {
    this.setState(current => ({count : current.count - 1 }));
  }

  render(){
    return(
      <div>
        <h1>The number is : {this.state.count}</h1>  
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    ) 
  }
}

export default App;
