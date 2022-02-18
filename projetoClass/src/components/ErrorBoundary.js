import { Component } from "react/cjs/react.production.min";

class ErrorBoundary extends Component {
  constructor(){
    super();
    this.state = {hasError: false};
  }

  componentDidCatch(error) {
    this.setState({hasError: true}); 
  }
  componentWillUnmount(){
    this.setState({hasError: false});
  }

  render(){
    if(this.state.hasError){
      return(<p>Something went wrong.</p>)
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
