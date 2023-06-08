import React, { useState, useEffect } from 'react';

const ProfileEditor = () => {
  const [profileImage, setProfileImage] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Load saved profile data from local storage on initial render
    const savedProfileData = JSON.parse(localStorage.getItem('profileData'));

    if (savedProfileData) {
      setProfileImage(savedProfileData.profileImage);
      setName(savedProfileData.name);
      setAge(savedProfileData.age);
      setUsername(savedProfileData.username);
    }
  }, []);

  useEffect(() => {
    // Save profile data to local storage whenever it changes
    const profileData = {
      profileImage,
      name,
      age,
      username,
    };

    localStorage.setItem('profileData', JSON.stringify(profileData));
  }, [profileImage, name, age, username]);

  const handleProfileImageChange = (event) => {
    const imageFile = event.target.files[0];
    setProfileImage(URL.createObjectURL(imageFile));
  };

  return (
    <div style={{paddingTop:'4rem'}}>
      <h1>Profile Editor</h1>
      <div>
        <label htmlFor="profileImage">Profile Picture:</label>
        <input
          type="file"
          id="profileImage"
          accept="image/*"
          onChange={handleProfileImageChange}
        />
        {profileImage && <img src={profileImage} alt="Profile" style={{ width: '200px' }} />}
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <h2>Preview</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Username: {username}</p>
        {profileImage && <img src={profileImage} alt="Profile" style={{ width: '100px' }} />}
      </div>
    </div>
  );
};

export default ProfileEditor;