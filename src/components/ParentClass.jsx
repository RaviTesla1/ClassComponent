import React from "react";
import PropTypes from 'prop-types';
import ChildClass from './ChildClass'



class ParentClass extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        console.log("ParentClasss constructor")
        
    }
    
   componentDidMount(){
    console.log("ParentClass componentDidMount")
   }
    
    render(){
        console.log("ParentClasss render")
        const {name,teacher} = this.props;
        const {count} = this.state;

        return <div>
            <h2>Count : {count}</h2>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count + 1
                })
            }}>Increase Count</button>
            <h2>Name : {name}</h2>
            <h3>Teacher : {teacher}</h3>
            <h3>Location : Dehradun</h3>
            <h4>Contact : @akshaymarch7</h4>
            <ChildClass  name={"First"}/>
            <ChildClass  name={"Second"}/>
        </div>
    }
}

export default ParentClass;


ParentClass.propTypes = {
    name: PropTypes.string,
    teacher: PropTypes.string
};


