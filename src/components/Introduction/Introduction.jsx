import React from 'react'
import "./Introduction.css"
import profileImage from "../../assets/profile.webp"

const Introduction = () => {
  return (
    <div className="main-container">
        <img src={profileImage} alt="profile" className='profile-image'/>
        <button>Click Me</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic pariatur nemo soluta quos accusamus. Officia dolorem sapiente nostrum expedita pariatur odit laborum vel. Ipsum obcaecati sit minima temporibus eligendi corporis in autem, fuga tempore deserunt pariatur ipsam, provident corrupti, maxime aperiam voluptatem porro laboriosam beatae veniam? Vel, sapiente. Suscipit, labore? Corporis alias sit nisi beatae voluptatum eos pariatur? Quisquam harum eaque dolor tempora ad ipsam quas sunt repudiandae natus totam aspernatur, dolorum recusandae ea autem perspiciatis suscipit magnam earum facere at, fugiat asperiores aliquid impedit expedita. Reprehenderit corrupti voluptas esse facilis magni libero distinctio debitis perferendis repudiandae. Suscipit, nihil voluptate!</p>
      </div>
  )
}

export default Introduction