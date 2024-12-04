import React from "react";
import PropTypes from 'prop-types';


class UserClass extends  React.Component{
    constructor(props){
        super(props);
        
        console.log("🚀 ~ UserClass ~ constructor ~ pr̥ops:", props)
    }
 
    render(){
        const {name,teacher} = this.props;

        return <div>
            <h2>Name : {name}</h2>
            <h3>Teacher : {teacher}</h3>
            <h3>Location : Dehradun</h3>
            <h4>Contact : @akshaymarch7</h4>
        </div>
    }
}

export default UserClass;


UserClass.propTypes = {
    name: PropTypes.string,
    teacher: PropTypes.string
};


