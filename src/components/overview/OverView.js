import React, { useState, useEffect } from 'react';
import './OverView.css'
import axios from 'axios';
import RepositoryList from '../repositories/Repositories';
import ProfileInfo from '../profileinfo/ProfileInfo';

const OverView = () => {
    const [userData, setUserData] = useState(null);

    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/dsak789');
        setUserData(response.data);
        console(userData)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    useEffect(() => {
  
      fetchData();
    }, []);

  return (
    <div>
     {/* {userData && (
        <>
          <ProfileInfo
            company={userData.company}
            location={userData.location}
            email={userData.email}
            blog={userData.blog}
          />
          <RepositoryList
            reposUrl={userData.repos_url}
          />
        </>
      )} */}{userData?
      <div className='github-overview-page'>
        <div className='header-bar'>
          <div className='header-logo'>
            <a href='#'>
              <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
            <a href='#'>
              <h4>{userData.login}</h4>
            </a>
          </div>
          <input type='text' className='search-user' placeholder='Search user by username' />
          <div className='hearder-right'>
            <div>
              <img className='bar-profile-pic' src={userData.avatar_url} alt={userData.name} height={50} width={50}/>
            </div>
          </div>
        </div>

        <div className='container'>
          <ProfileInfo data ={userData}/>
        </div>
      </div>
      :
      <div>
        <h1 align='center'>User Not Found</h1>
      </div>
      }
    </div>
  )
}

export default OverView