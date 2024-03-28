import React, { useState, useEffect } from 'react';

const ReadmeComponent = ({ owner, repo }) => {
  const [readmeContent, setReadmeContent] = useState('');

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/dsak789/dsak789/readme`);
        if (response.ok) {
          const data = await response.json();
          const readmeBase64 = data.content;
          // Decode Base64 content
          const decodedContent = atob(readmeBase64);
          setReadmeContent(decodedContent);
        } else {
          console.error('Failed to fetch README:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching README:', error);
      }
    };

    fetchReadme();
  }, [owner, repo]);

  return (
    <div>
      <h2>README</h2>
      <div dangerouslySetInnerHTML={{ __html: readmeContent }} />
    </div>
  );
};

export default ReadmeComponent;
