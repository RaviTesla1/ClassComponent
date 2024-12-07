import React from "react";
import PropTypes from "prop-types";

class ChildClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      followers: ""
    };
    console.log(this.props.name + "Child Class constructor");
}

async componentDidMount() {
    // console.log(this.props.name + "ChildClass componentDidMount");
    const response = await fetch('https://api.github.com/users/RaviTesla1');
    const data = await response.json();
    console.log(data);
    this.setState({
        name: data?.login,
        followers: data?.followers
      });
    
}

render() {
    //   console.log(this.props.name + "Child Class render");
    const {name,followers} = this.state

    return (
      <div>
        <h1>{name}</h1>
        <h1>{followers}</h1>
      </div>
    );
  }
}

export default ChildClass;

ChildClass.propTypes = {
  name: PropTypes.string,
  teacher: PropTypes.string,
};
