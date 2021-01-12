import { render } from '@testing-library/react';
import React from 'react';
class Form extends React.Component{
  constructor(props){
    super(props);
    this.state={
      wikipedia:"",
      result:[]
    }
  }
  handleChange=(e)=>{
    this.setState({
      wikipedia:e.target.value
    })
  }
  handleButton=(props)=>{
this.props.getValue(this.state.wikipedia)
  }
render(){
  return(
  <div>
    <h2>Wikipedia Search App</h2>
    <input type="search" onChange={this.handleChange}/>
    <button type="button"onClick={this.handleButton}>Search</button>
   
    <ul>
     { this.props.result.map((item,index)=>{
        return( <a href={this.state.wikipedia[index]} target='_blank'>
        <li>{item}</li></a>)
})}

    </ul>
    
  </div>)
}
}
export default Form;