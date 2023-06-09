import React, { Component } from 'react'
import axios from 'axios'

export class ForApi extends Component {

    constructor(props) 
    {
        super(props)
      
        this.state = {
           posts:[]
        }
    }
        
        componentDidMount()
        {
            axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response=>{
                    this.setState({posts:response.data});
                console.log(response);
                
            })
            .catch(error=>{
                console.log("Error Found.................")
            });
        }
      

  render() {
     
    const {posts}=this.state;
    return (
      <div>
            {
                posts.map(post=><div key={post.id}> {post.title}</div>)
            }
      </div>
    )
  }
}

export default ForApi
