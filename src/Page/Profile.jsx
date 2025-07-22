import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaSignOutAlt, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../Styles/Profile.css';

const auth = getAuth(app);

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    displayName: '',
    email: '',
    phone: '',
    address: '',
    bio: ''
  });
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setProfileData({
          displayName: currentUser.displayName || 'User Name',
          email: currentUser.email || '',
          phone: currentUser.phoneNumber || '',
          address: '',
          bio: 'Welcome to my profile!'
        });
      } else {
        navigate('/');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Here you would typically save to Firebase or your backend
    // TODO: Implement actual save functionality
    setEditing(false);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <div className="profile-loading">
        <div className="spinner"></div>
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-image-container">
          <div className="profile-image">
            {profileImage ? (
              <img src={profileImage} alt="Profile" />
            ) : (
              <FaUser className="default-avatar" />
            )}
          </div>
          {editing && (
            <label className="image-upload-btn">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
              <FaEdit />
            </label>
          )}
        </div>
        
        <div className="profile-info">
          <h1>{profileData.displayName}</h1>
          <p className="profile-email">{profileData.email}</p>
          <div className="profile-actions">
            <button 
              className="edit-btn"
              onClick={() => setEditing(!editing)}
            >
              <FaEdit /> {editing ? 'Cancel' : 'Edit Profile'}
            </button>
            <button className="signout-btn" onClick={handleSignOut}>
              <FaSignOutAlt /> Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="profile-details">
        <div className="profile-section">
          <h2>Personal Information</h2>
          <div className="profile-fields">
            <div className="field-group">
              <label>
                <FaUser className="field-icon" />
                Full Name
              </label>
              {editing ? (
                <input
                  type="text"
                  name="displayName"
                  value={profileData.displayName}
                  onChange={handleInputChange}
                />
              ) : (
                <p>{profileData.displayName}</p>
              )}
            </div>

            <div className="field-group">
              <label>
                <FaEnvelope className="field-icon" />
                Email Address
              </label>
              <p>{profileData.email}</p>
            </div>

            <div className="field-group">
              <label>
                <FaPhone className="field-icon" />
                Phone Number
              </label>
              {editing ? (
                <input
                  type="tel"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                />
              ) : (
                <p>{profileData.phone || 'Not provided'}</p>
              )}
            </div>

            <div className="field-group">
              <label>
                <FaMapMarkerAlt className="field-icon" />
                Address
              </label>
              {editing ? (
                <input
                  type="text"
                  name="address"
                  value={profileData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your address"
                />
              ) : (
                <p>{profileData.address || 'Not provided'}</p>
              )}
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h2>Bio</h2>
          {editing ? (
            <textarea
              name="bio"
              value={profileData.bio}
              onChange={handleInputChange}
              placeholder="Tell us about yourself..."
              rows="4"
            />
          ) : (
            <p className="bio-text">{profileData.bio}</p>
          )}
        </div>

        {editing && (
          <div className="save-section">
            <button className="save-btn" onClick={handleSave}>
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
