import React, { useState, useEffect } from 'react';
import './Repositories.css'
import axios from 'axios';
const Repositories = ({ reposUrl }) => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get(reposUrl);
        setRepositories(response.data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepositories();
  }, [reposUrl]);

  return (
    <div className="repository-list">
      
        {repositories.map(repository => (
          <div className="repository-display" key={repository.name}>
          <div className="repository-header"><h2 className="repository-name">
          <a href={repository.html_url} target="_blank" rel="noopener noreferrer">{repository.name}</a><br></br><span>{repository.description}</span></h2>
          </div>
          <div className="repository-details">
            <div className="repository-meta">
              <p>Language: {repository.language}</p>
              {/* <p>Stars: {repository.stargazers_count}</p>
              <p>Watchers: {repository.watchers_count}</p>
              <p>Forks: {repository.forks_count}</p> */}
            </div>
            <div className="repository-links">
              {repository.has_pages  || (repository.homepage != null && 
                <a href={repository.homepage} target="_blank" rel="noopener noreferrer">View Live Page</a>)
              }
              {/* <a href={`${repository.html_url}/issues`} target="_blank" rel="noopener noreferrer">Issues</a> */}
            </div>
          </div>
        </div>
          
        ))}
      
    </div>
  );
}

export default Repositories