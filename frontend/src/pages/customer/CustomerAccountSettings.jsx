import React, { useState } from 'react';
import CustomerSideBar from '../../components/CustomerSideBar';
import CustomerHeader from '../../components/CustomerHeader';
import '../../styles/customercss/customeraccountsettings.css';

export default function AccountSettings() {
  const [activeTab, setActiveTab] = useState('info');
  const [isEditingInfo, setIsEditingInfo] = useState(false);
  const [isEditingLicense, setIsEditingLicense] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [pendingSave, setPendingSave] = useState(null);

  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Mayer',
    address: 'Talamban, Mandaue City',
    email: 'johnmayer@gmail.com',
    birthdate: '1997-04-01',
    username: 'johnmayer97',
    password: '************',
    profilePicture: '/jude.jpg',
    licenseNo: 'K01-17-002807',
    restrictions: 'A, A1, B, B1, B2',
    expirationDate: '2032-04-18',
    licenseImage: '/dlicense.png',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: URL.createObjectURL(files[0]),
    }));
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Show confirmation modal before saving
  const handleEditInfo = () => {
    if (isEditingInfo) {
      setPendingSave('info');
      setShowConfirmModal(true);
    } else {
      setIsEditingInfo(true);
    }
  };

  const handleEditLicense = () => {
    if (isEditingLicense) {
      setPendingSave('license');
      setShowConfirmModal(true);
    } else {
      setIsEditingLicense(true);
    }
  };

  const confirmSave = () => {
    if (pendingSave === 'info') {
      setIsEditingInfo(false);
    } else if (pendingSave === 'license') {
      setIsEditingLicense(false);
    }
    setShowConfirmModal(false);
    setPendingSave(null);
  };

  const cancelSave = () => {
    setShowConfirmModal(false);
    setPendingSave(null);
  };

  return (
    <>
      <CustomerHeader />
      <CustomerSideBar />

      <div className="page-content">
        <title>Account Settings</title>

        <div className="account-page">
          {/* Tabs */}
          <div className="tabs">
            <button
              className={activeTab === 'info' ? 'tab active' : 'tab'}
              onClick={() => setActiveTab('info')}
            >
              INFORMATION
            </button>
            <button
              className={activeTab === 'license' ? 'tab active' : 'tab'}
              onClick={() => setActiveTab('license')}
            >
              LICENSE
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === 'info' && (
              <div className="info-content">
                {/* Left side */}
                <div className="info-fields">
                  <div className="field">
                    <span className="label">First Name:</span>
                    {isEditingInfo ? (
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span className="value">{formData.firstName}</span>
                    )}
                  </div>
                  <div className="field">
                    <span className="label">Last Name:</span>
                    {isEditingInfo ? (
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span className="value">{formData.lastName}</span>
                    )}
                  </div>
                  <div className="field">
                    <span className="label">Address:</span>
                    {isEditingInfo ? (
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span className="value">{formData.address}</span>
                    )}
                  </div>
                  <div className="field">
                    <span className="label">Email:</span>
                    {isEditingInfo ? (
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span className="value">{formData.email}</span>
                    )}
                  </div>
                  <div className="field">
                    <span className="label">Birthdate:</span>
                    {isEditingInfo ? (
                      <input
                        type="date"
                        name="birthdate"
                        value={formData.birthdate}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span className="value">{formData.birthdate}</span>
                    )}
                  </div>

                  {/* Edit Button */}
                  <button onClick={handleEditInfo} className="edit-btn">
                    {isEditingInfo ? 'Save' : 'Edit'}
                  </button>
                </div>

                {/* Right side */}
                <div className="profile-section">
                  <img
                    src={formData.profilePicture}
                    alt="profile"
                    className="account-profile-img"
                  />
                  {isEditingInfo && (
                    <input
                      type="file"
                      name="profilePicture"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  )}

                  <div className="credentials">
                    <div className="username">
                      {isEditingInfo ? (
                        <input
                          type="text"
                          name="username"
                          value={formData.username}
                          onChange={handleInputChange}
                        />
                      ) : (
                        formData.username
                      )}
                    </div>
                    <div className="password">
                      {isEditingInfo ? (
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                        />
                      ) : (
                        '************'
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'license' && (
              <div className="license-content">
                <div className="license-fields">
                  <div className="field">
                    <span className="label">License No.:</span>
                    {isEditingLicense ? (
                      <input
                        type="text"
                        name="licenseNo"
                        value={formData.licenseNo}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span className="value">{formData.licenseNo}</span>
                    )}
                  </div>
                  <div className="field">
                    <span className="label">Restrictions:</span>
                    {isEditingLicense ? (
                      <input
                        type="text"
                        name="restrictions"
                        value={formData.restrictions}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span className="value">{formData.restrictions}</span>
                    )}
                  </div>
                  <div className="field">
                    <span className="label">Expiration Date:</span>
                    {isEditingLicense ? (
                      <input
                        type="date"
                        name="expirationDate"
                        value={formData.expirationDate}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span className="value">{formData.expirationDate}</span>
                    )}
                  </div>

                  {/* Edit Button */}
                  <button onClick={handleEditLicense} className="edit-btn">
                    {isEditingLicense ? 'Save' : 'Edit'}
                  </button>
                </div>

                <div className="license-image">
                  <img src={formData.licenseImage} alt="Driver License" className="license-img" />
                  {isEditingLicense && (
                    <input
                      type="file"
                      name="licenseImage"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="confirm-modal-overlay">
          <div className="confirm-modal">
            <p>Are you sure you want to save changes?</p>
            <div className="modal-buttons">
              <button className="btn-yes" onClick={confirmSave}>
                Yes
              </button>
              <button className="btn-no" onClick={cancelSave}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
