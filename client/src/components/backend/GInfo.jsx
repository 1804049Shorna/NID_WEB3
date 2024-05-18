//import React from 'react'

import { useState, useEffect } from "react";

import "./getInfo.css"



const GInfo = ({state,account}) => {

  console.log(account);

  const { contract } = state;
  console.log(contract);
  const [userInfo, setUserInfo] = useState({
    personal: {},
    guardian: {},
    education: {},
    address: {}
  });
  const [userAddress, setUserAddress] = useState('');

  const handleInputChange = (event) => {
    setUserAddress(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form submission reload
     // Exit if no address is provided

    // Fetching user info
    const userInfo = await contract.getUserInfo(userAddress);
    console.log(userInfo);
    setUserInfo({
      personal: userInfo[0],
      guardian: userInfo[1],
      education: userInfo[2],
      address: userInfo[3]
    });
  };


    
  return (
   <>
       <div>
      <h2>User Information</h2>

      <form onSubmit={handleSubmit}>
          <label htmlFor="userAddress">Enter User Address:</label>
          <input
            id="userAddress"
            type="text"
            value={userAddress}
            onChange={handleInputChange}
            placeholder="Ethereum Address"
          />
          <button type="submit">Get User</button>
        </form>
   
      <div>
        <h3>Personal Information</h3>
        <p>Name: {userInfo.personal.name}</p>
        <p>Gender: {userInfo.personal.gender}</p>
        <p>Blood Group: {userInfo.personal.bloodGroup}</p>
        <p>Birth Certificate Number: {userInfo.personal.birthCertificateNumber}</p>
        <p>Date of Birth: {userInfo.personal.dateOfBirth}</p>
        <p>Place of Birth: {userInfo.personal.placeOfBirth}</p>
      </div>
      <div>
        <h3>Guardian Information</h3>
        <p>Father Name: {userInfo.guardian.Faname}</p>
        <p>Father ID: {userInfo.guardian.FNID}</p>
        <p>Mother Name: {userInfo.guardian.MAname}</p>
        <p>Mother ID: {userInfo.guardian.MNID}</p>
        <p>Husband Name: {userInfo.guardian.husbandName}</p>
        <p>Husband ID: {userInfo.guardian.husbandNID}</p>
      </div>
      <div>
        <h3>Educational Information</h3>
        <p>Educational Status: {userInfo.education.educationalStatus}</p>
        <p>Profession: {userInfo.education.profession}</p>
        <p>TIN Number: {userInfo.education.tinNumber}</p>
        <p>Driving License Number: {userInfo.education.drivingLicenseNumber}</p>
        <p>Passport Number: {userInfo.education.passportNumber}</p>
        <p>Religion: {userInfo.education.religion}</p>
        <p>Mobile Number: {userInfo.education.mobileNumber}</p>
      </div>
      <div>
        <h3>Address Information</h3>
        <p>Country: {userInfo.address.countryName}</p>
        <p>Division: {userInfo.address.division}</p>
        <p>Upazila: {userInfo.address.upozila}</p>
        <p>RMO: {userInfo.address.rmo}</p>
        <p>Union: {userInfo.address.unionName}</p>
        <p>Moholla: {userInfo.address.moholla}</p>
        <p>Village: {userInfo.address.village}</p>
        <p>Home Holding Number: {userInfo.address.homeHoldingNumber}</p>
        <p>Post Code: {userInfo.address.postCode}</p>
      </div>
    </div>
   </>
  )
}

export default GInfo