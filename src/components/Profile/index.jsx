import React from 'react'
import ProfileHeader from '../ProfileHeader'
import userImage from '../../assets/image2.jpg'

import '../../styles/profile.css'
import { BiBook } from 'react-icons/bi'

const courses = [
  {
    title : 'HTML CSS',
    duration : '2 Hourses',
    icon : <BiBook/>
  },
  {
    title : 'JavaScript',
    duration : '2 Hourses',
    icon : <BiBook/>
  },
  {
    title : 'React.js',
    duration : '2 Hourses',
    icon : <BiBook/>
  },
]

const index = () => {
  return (
    <div className='profile'>
      <ProfileHeader/>

      <div className="user--profile">
        <div className="user--detail">
          <img src={userImage} alt="" />
          <h3 className='username'>Hulan Oyuka</h3>
          <span className='profession'>Web Designer</span>
        </div>

        <div className="user-courses">
          {courses.map(course => (
            <div className="course">
              <div className="course--detail">
                <div className="course--cover">{course.icon}</div>
                <div className="course--name">
                  <h5 className='title'>{course.title}</h5>
                  <span className='duration'>{course.duration}</span>
                </div>
              </div>
              <div className="action">:</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default index
