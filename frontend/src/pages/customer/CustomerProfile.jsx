import React from 'react';
import CustomerHeader from '../../components/CustomerHeader';
import CustomerSideBar from '../../components/CustomerSideBar';
import { HiOutlineUserCircle } from 'react-icons/hi';
import '../../styles/customercss/customerprofile.css';

export default function CustomerProfile() {
  return (
    <>
      <CustomerHeader />
      <CustomerSideBar />

      <div className="page-content">
        <title>My Profile</title>
        <h1 className="profile-title">
          <HiOutlineUserCircle className="profile-icon" />
          My Profile
        </h1>
        <div className="customer-profile-page">
          <div className="profile-container">
            {/* Left: Profile + License */}
            <div className="left-section">
              <img src="/jude.jpg" alt="Profile" className="profile-img" />

              <div className="license-card-pill">
                <p>
                  <strong>LICENSE NUMBER:</strong> K01-17-002807
                </p>
                <p>
                  <strong>RESTRICTIONS:</strong> A,A1,A2,B,B1,B2
                </p>
                <p>
                  <strong>EXPIRATION:</strong> APRIL 18, 2032
                </p>
              </div>
            </div>

            {/* Right: Info + Favorite Car */}
            <div className="right-section">
              {/* Personal Info */}
              <div className="info-card modern-card">
                <div className="info-field line-field">
                  <span className="label">First Name:</span>
                  <span className="value">Jude Christian</span>
                </div>
                <div className="info-field line-field">
                  <span className="label">Last Name:</span>
                  <span className="value">Amoguis</span>
                </div>
                <div className="info-field line-field">
                  <span className="label">Address:</span>
                  <span className="value">P3 Lawaan, R.Calo Street, Butuan City</span>
                </div>
                <div className="info-field line-field">
                  <span className="label">Email:</span>
                  <span className="value">judechristian.amoguis@gmail.com</span>
                </div>
              </div>

              {/* Favorite Car */}
              <div className="favorite-car-card modern-card">
                <h3>FAVORITE CAR:</h3>
                <div className="favorite-car-details">
                  <img src="/terra.png" alt="Favorite Car" className="favorite-car-img" />
                  <div>
                    <h4>Nissan Terra</h4>
                    <p>SUV</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
