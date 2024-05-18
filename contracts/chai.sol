// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract chai {
    //Userapplicaation Section

    struct UserPersonal {
        string name;
        string gender;
        string bloodGroup;
        string birthCertificateNumber;
        string dateOfBirth;
        string placeOfBirth;
    }

   
    mapping(address => UserPersonal) public personalInfos;

    uint256 public totalUsers;

    function addUserpersonal(
        string memory _name,
        string memory _gender,
        string memory _bloodGroup,
        string memory _birthCertificateNumber,
        string memory _dateOfBirth,
        string memory _placeOfBirth
    ) public {
        personalInfos[msg.sender] = UserPersonal(
            _name,
            _gender,
            _bloodGroup,
            _birthCertificateNumber,
            _dateOfBirth,
            _placeOfBirth
        );
   
        totalUsers++;
    }

    function updatePersonalInfo(
        address add,
        string memory _name,
        string memory _gender,
        string memory _bloodGroup,
        string memory _birthCertificateNumber,
        string memory _dateOfBirth,
        string memory _placeOfBirth
    ) public {
        personalInfos[add] = UserPersonal(
            _name,
            _gender,
            _bloodGroup,
            _birthCertificateNumber,
            _dateOfBirth,
            _placeOfBirth
        );
    }

 
    // GuardianInfo

    struct UserGuardian {
        string Faname;
        string FNID;
        string MAname;
        string MNID;
        string husbandName;
        string husbandNID;
    }

    mapping(address => UserGuardian) public guardianInfos;

    function addUserGuardian(
        string memory _Faname,
        string memory _FNID,
        string memory _MAname,
        string memory _MNID,
        string memory _husbandName,
        string memory _husbandNID
    ) public {
        guardianInfos[msg.sender] = UserGuardian(
            _Faname,
            _FNID,
            _MAname,
            _MNID,
            _husbandName,
            _husbandNID
        );
       
    }

    function updateGuardianInfo(
        address add,
        string memory _Faname,
        string memory _FNID,
        string memory _MAname,
        string memory _MNID,
        string memory _husbandName,
        string memory _husbandNID
    ) public {
        guardianInfos[add] = UserGuardian(
            _Faname,
            _FNID,
            _MAname,
            _MNID,
            _husbandName,
            _husbandNID
        );
    }

 

    // EducationInfo

    struct UserEducation {
        string educationalStatus;
        string profession;
        string tinNumber;
        string drivingLicenseNumber;
        string passportNumber;
        string religion;
        string mobileNumber;
    }

   
    mapping(address => UserEducation) public educationInfos;

    function addUserEducation(
        string memory _educationalStatus,
        string memory _profession,
        string memory _tinNumber,
        string memory _drivingLicenseNumber,
        string memory _passportNumber,
        string memory _religion,
        string memory _mobileNumber
    ) public {
        educationInfos[msg.sender] = UserEducation(
            _educationalStatus,
            _profession,
            _tinNumber,
            _drivingLicenseNumber,
            _passportNumber,
            _religion,
            _mobileNumber
        );
     
    }

    function updateEducationInfo(
        address add,
        string memory _educationalStatus,
        string memory _profession,
        string memory _tinNumber,
        string memory _drivingLicenseNumber,
        string memory _passportNumber,
        string memory _religion,
        string memory _mobileNumber
    ) public {
        educationInfos[add] = UserEducation(
            _educationalStatus,
            _profession,
            _tinNumber,
            _drivingLicenseNumber,
            _passportNumber,
            _religion,
            _mobileNumber
        );
    }

  

    // AddressInfo

    struct UserAddress {
        string countryName;
        string division;
        string upozila;
        string rmo;
        string unionName;
        string moholla;
        string village;
        string homeHoldingNumber;
        string postCode;
    }

   
    mapping(address => UserAddress) public addressInfos;

    function addUserAddress(
        string memory _countryName,
        string memory _division,
        string memory _upozila,
        string memory _rmo,
        string memory _unionName,
        string memory _moholla,
        string memory _village,
        string memory _homeHoldingNumber,
        string memory _postCode
    ) public {
        addressInfos[msg.sender] = UserAddress(
            _countryName,
            _division,
            _upozila,
            _rmo,
            _unionName,
            _moholla,
            _village,
            _homeHoldingNumber,
            _postCode
        );
    
    }

    function updateAddressInfo(
        address add,
        string memory _countryName,
        string memory _division,
        string memory _upozila,
        string memory _rmo,
        string memory _unionName,
        string memory _moholla,
        string memory _village,
        string memory _homeHoldingNumber,
        string memory _postCode
    ) public {
        addressInfos[add] = UserAddress(
            _countryName,
            _division,
            _upozila,
            _rmo,
            _unionName,
            _moholla,
            _village,
            _homeHoldingNumber,
            _postCode
        );
    }





    // make request for edit data
    struct EditData {
        address add;
        string section;

    
        string division;
  
  
    }

    EditData[] editInfo;

    function editAddressInfo(
        address _add,
        string memory _section,
          
        string memory _division
  
     
    ) public {
        editInfo.push(
            EditData(
                _add,
                _section,
                _division
             
               
            )
        );
    }

 //get your Status 

 function get_status(address _add) public view returns(Status memory){
    return status[_add];
 }



 //put your wallet address and get your NID 
  function getNID(address addr) public view returns (string memory) {
        return NIDS[addr];
    }




    //local government work
   
 function getUserInfo(address _user)
        public
        view
        returns (
            UserPersonal memory,
            UserGuardian memory,
            UserEducation memory,
            UserAddress memory
        )
    {
        return (
            personalInfos[_user],
            guardianInfos[_user],
            educationInfos[_user],
            addressInfos[_user]
        );
    }



  function getEditInfo() public view returns (EditData[] memory) {
         return editInfo;
     }
  
  
  //creating giving status section
   struct Status{
      bool isDocumentVerified;
      bool call_for_biometric;
      bool is_NID_assigned;
   }

   mapping (address=>Status) public status;

   function give_status(address add, bool _isDocumentVerified, bool _call_for_biometric, bool _is_NID_assigned) public{
        status[add]=Status(
            _isDocumentVerified,
            _call_for_biometric,
            _is_NID_assigned
        );
}

   
 









    //Main Election commissioner work

    mapping(address => string) NIDS;
    mapping(string => address) NID_Holder;

    //can call the get user Info from here


    function setNID(address addr, string memory _NID) public {
        NIDS[addr] = _NID;
        NID_Holder[_NID] = addr;
    }

    //can call the set status function from here too

 


    //Other Governmental Body Work

    function getNID_Holder(string memory _NID) public view returns (address) {
        return NID_Holder[_NID];
    }
    //call for user get userinfo function here 
}
