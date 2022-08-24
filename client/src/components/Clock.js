import * as React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div
        style={{
          border: "solid 2px white",
          width: "100px",
          borderRadius: "15px",
          background: "lightgray",
        }}
      >
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}
