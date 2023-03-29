import { Input } from 'antd'
import React, { useState } from 'react'
import "./Screen3.css"

const Screen3 = () => {

  const [inputData,setInputData]=useState('');
  const [items,setItems]=useState([]);

  const addItems=()=>
  {
    if(inputData)
    {
      setItems([...items,inputData]);
      setInputData('');
    }
    
  }

  const deleteItem=(id)=>
  {
      const updatedItems=items.filter((elem,index)=>{
      return index!=id;
    });
    setItems(updatedItems);
  }

  return (

    <>
      <div className='mainDiv'>
        <div class="form-group">
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Here..." 
            value={inputData}
            onChange={(e)=>{setInputData(e.target.value)}}
          />
        </div>

        <button type="submit" class="btn-btn-primary" onClick={addItems}>Submit</button>

          {
            items.map((elem,index)=>{
              return (
                <div className='showItems'  onClick={()=>deleteItem(index)}>
                  <div className='eachItem' key={index}>{elem}</div>
                </div>
              )
            })
          }

      </div>




    </>
  )

}

export default Screen3
