import React from 'react';

const SocialLinks = props => {
  return (
    <div className="social">
      <a
        href="http://tiktok.com/@asrorbek_developer"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Tiktok profile"
      >
        {' '}
        <i className="fab fa-tiktok" />
      </a>
      <a
        id="profile-link"
        href="https://github.com/Asroriddin"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's GitHub Profile"
      >
        {' '}
        <i className="fab fa-github" />
      </a>
      <a
        href="https://www.instagram.com/asrorbek_dev"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Instagram Profile"
      >
        {' '}
        <i className="fab fa-instagram" />
      </a>
      <a
        href="https://www.facebook.com/asroriddin.ahmadaliyev.3"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Facebook profile"
      >
        {' '}
        <i className="fab fa-facebook" />
      </a>
    </div>
  );
};

export default SocialLinks;