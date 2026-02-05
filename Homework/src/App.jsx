import React,{Component} from "react";
class Counter extends Component{
  constructor(props){
    super(props);
    this.state={
      count : 0
    };
    console.log("Contructor called");
  }
  componentDidMount(){
    console.log("Component Mounted");
  }
  componentDidUpdate(prevProps,prevState){
    console.log("Componet Updated");
    console.log("Previous Count: ",prevProps.count);
    console.log("Current Count: ",this.state.count);
  }
  componentWillUnmount(){
    console.log("Component Will Unmount");
  }
  increment = () => {
    this.setState({count : this.state.count+1});
  };
  decrement = () => {
    this.setState({count:this.state.count-1})
;  }
render(){
  return(
    <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>Decrement</button>
    </div>
  )
}
}


export default Counter;

