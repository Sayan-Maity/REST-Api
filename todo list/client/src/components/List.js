import React from 'react'
import { BiEditAlt } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';


const List = ({id, task, setUpdateUI, updateMode}) => {
  return (
    <>
    <div className="list">
        <li>
            <p>{task}</p>
            
            <div className="icon-holder">
                <p className='edit'>
                    <BiEditAlt />
                </p>
                <p className="delete">
                    <BsTrash/>
                </p>
            </div>
        </li>
        
    </div>
      
    </>
  )
}

export default List
