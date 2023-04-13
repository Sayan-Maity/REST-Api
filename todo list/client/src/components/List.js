import axios from 'axios';
import React from 'react'
import { BiEditAlt } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';
import { baseURL } from '../utils/constant';


const List = ({id, task, setUpdateUI, updateMode}) => {

    const removeTask = () => {
        axios.delete(`${baseURL}/delete/${id}`)
        .then((res) => {
            console.log(res)
            setUpdateUI((prevState) => !prevState)
        })
    }
  return (
    <>
    <div className="list">
        <li>
            <p>{task}</p>
            
            <div className="icon-holder">
                <p className='edit'>
                    <BiEditAlt onClick={() => updateMode(id, task)} />
                </p>
                <p className="delete">
                    <BsTrash onClick={removeTask}/>
                </p>
            </div>
        </li>
        
    </div>
      
    </>
  )
}

export default List
