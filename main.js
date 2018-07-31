class HelloMessage extends React.Component {
    render() {
      return React.createElement(
        "div",
        null,
        "current time: ",
        this.props.time
      );
    }
  }
  
  ReactDOM.render(React.createElement(HelloMessage, { name: Date.now() }), mountNode);