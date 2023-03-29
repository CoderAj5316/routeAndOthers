import axios from 'axios'
import React, { Component } from 'react'
import "./FormComponent.css"

export class FormComponent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       userid:'',
       title:'',
       body:'',
    }
  }


    handleuserid=(event)=>
    {
      this.setState({userid:event.target.value});
    }

    handletitle=(event)=>
    {
      this.setState({title:event.target.value});
    }


    handlebody=(event)=>
    {
      this.setState({body:event.target.value});
     
    }

    handleSubmit=(event)=>
    {
      alert(`${this.state.userid} ${this.state.body} ${this.state.title}`)
      event.preventDefault();

      axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
      .then(response=>{

        console.log(response);
      })
      .catch(error=>{
        console.log(error);
      })
    }
  
  
  render() {

    
    return (

        <form onSubmit={this.handleSubmit}>
            <div>
                <label className="text">User Name :</label>
                <input className="inputField" placeholder='  Enter userid' type="text" value={this.state.userid} onChange={this.handleuserid}></input>
            </div>
            <div>
                <label className="text">title :</label>
                <input className="inputField" placeholder='  Enter title' type="text" value={this.state.title} onChange={this.handletitle}></input>
            </div>
            <div>
                <label className="text">body :</label>
                <input className="inputField" placeholder='  Enter body' type="text" value={this.state.body} onChange={this.handlebody}></input>
            </div>
        

            <button onClick={this.submitClick}> Submit</button>
            
        </form>
      
    )
  }
}

export default FormComponent
