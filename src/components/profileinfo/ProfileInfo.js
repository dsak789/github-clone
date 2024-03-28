import React from 'react'
import './ProfileInfo.css'
const ProfileInfo = ({ data}) => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={data.avatar_url} alt="Profile Avatar" />
        <div className="profile-info">
          <h2>{data.name}</h2>
          <h3>@{data.login}</h3>
          <p>{data.bio}</p>
          <div className="followers-info">
            <p>{data.followers} Followers - {data.following} Following</p>
          </div>
          <div className="additional-info">
            <p><strong>Company:</strong> {data.company}</p>
            <p><strong>Location:</strong> {data.location}</p>
            {data.email && <p><strong>Email:</strong> {data.email}</p>}
            <p><strong>Blog:</strong> <a href={data.blog}>{data.blog}</a></p>
          </div>
        </div>
      </div>
    </div>


  )
}

export default ProfileInfo