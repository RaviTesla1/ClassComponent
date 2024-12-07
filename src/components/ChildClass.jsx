import React from "react";
import PropTypes from "prop-types";

class ChildClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Anonymous",
    };
    console.log(this.props.name + "Child Class constructor");
}

componentDidMount() {
    console.log(this.props.name + "ChildClass componentDidMount");
}

render() {
      console.log(this.props.name + "Child Class render");

    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default ChildClass;

ChildClass.propTypes = {
  name: PropTypes.string,
  teacher: PropTypes.string,
};
