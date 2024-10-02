import React from 'react'
import image1 from '../../assets/image.webp'
import image2 from '../../assets/image2.jpg'
import { FaWonSign } from "react-icons/fa";
import '../../styles/teacherList.css'

const teachers = [
    {
        image : image1,
        name: 'Batbaatar Tsetseg',
        duration: 'Web Designer',
        cost: 9680,
    },
    {
        image : image1,
        name: 'Batbaatar Tsetseg',
        duration: 'Web Designer',
        cost: 9800,
    },
    {
        image : image2,
        name: 'Hulan Oyuka',
        duration: 'Web Designer',
        cost: 9550,
    }
]

const index = () => {
  return (
    <div className="teacher--list">
        <div className="list--header">
            <h2>Employees</h2>
            <h2>3</h2>
            <select>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
            </select>
        </div>

        <div className="list--container">
            {teachers.map(teacher => (
                <div className="list">
                    <div className="teacher--detail">
                        <img src={teacher.image} alt={teacher.name}/>
                        <h2>{teacher.name}</h2>
                    </div>
                    <span className='duration--name'>{teacher.duration}</span>
                    <span className='won--icon'>{teacher.cost}<FaWonSign/>/hr</span>
                    <span className='teacher--todo'>:</span> 
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default index
