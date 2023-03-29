// import React from 'react'

// const Screen2 = () => {
//   return (
//     <div style={{fontSize:'30px'}}>
//       Screen 2
//     </div>
//   )
// }

// export default Screen2
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import "./Screen2.css"

const PostList = () => {

  const path = "https://jsonplaceholder.typicode.com/posts";
  const [title, setTitle] = useState([]);

  console.log(title);

  useEffect(() => {
    axios.get(path).then(function(response){
      setTitle(response.data.map((e)=>{
        console.log(response);
        return e.title;
      }))
    }).catch(function(err){})
  }, [path]);
  
  return (
    <div className="mainDiv">
        {title.map((elem) => {
        return (
          <>
            <Link to="/postdetails" className="innerDiv">{elem}</Link>
            <br />
          </>
        );
      })
      }
    </div>
  )
}

export default PostList
