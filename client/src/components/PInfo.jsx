import "./personalInfo.css";

const PInfo = ({ state }) => {
  const adduser = async (event) => {
    event.preventDefault();
    const { contract } = state;
    console.log(contract);

    const name = document.querySelector("#name").value;
    const gender = document.querySelector("#gender").value;
    const bloodgrp = document.querySelector("#blood").value;
    const birthcir = document.querySelector("#birthCir").value;
    const dofbirth = document.querySelector("#date").value;
    const pofbirth = document.querySelector("#Place").value;

    const Fname = document.querySelector("#FName").value;
    const fnid = document.querySelector("#FNID").value;
    const Mname = document.querySelector("#MName").value;
    const Mnid = document.querySelector("#MNID").value;
    const Hname = document.querySelector("#HName").value;
    const Hnid = document.querySelector("#HNID").value;

    const eduStatus = document.querySelector("#Edu").value;
    const profession = document.querySelector("#Prof").value;
    const tin = document.querySelector("#tin").value;
    const dln = document.querySelector("#DLN").value;
    const pn = document.querySelector("#PN").value;
    const religion = document.querySelector("#RL").value;
    const mo = document.querySelector("#MO").value;

    const ADD = await contract.addUserpersonal(
      name,
      gender,
      bloodgrp,
      birthcir,
      dofbirth,
      pofbirth
    );
    ADD.wait();
    alert("Adding is successul");
    const ADDfam = await contract.addUserGuardian(
      Fname,
      fnid,
      Mname,
      Mnid,
      Hname,
      Hnid
    );
    ADDfam.wait();
    alert("Adding family info is successul");

    const ADDedu = await contract.addUserEducation(
      eduStatus,
      profession,
      tin,
      dln,
      pn,
      religion,
      mo
    );

    ADDedu.wait();
    alert("Educational information added successfully.");
    const country = document.querySelector("#country").value;
    const division = document.querySelector("#division").value;
    const upazila = document.querySelector("#upazila").value;
    const rmo = document.querySelector("#rmo").value;
    const union = document.querySelector("#union").value;
    const moholla = document.querySelector("#moholla").value;
    const village = document.querySelector("#village").value;
    const homeHoldingNumber = document.querySelector("#homeHoldingNumber").value;
    const postalCode = document.querySelector("#postalCode").value;

    const ADDaddress = await contract.addUserAddress(
      country,
      division,
      upazila,
      rmo,
      union,
      moholla,
      village,
      homeHoldingNumber,
      postalCode
    );
    ADDaddress.wait();
    alert("Address information added successfully.");

  };

  return (
    <>
      <header className="head-area">
        <div className="container fix">
          <h2>Welcome, Please Fill Out These Fields </h2>
        </div>
      </header>

      <div className="container">
        <div className="Info-headline">
          <p>PERSONAl INFORMATION</p>
        </div>

        <div className="form-section">
          <form onSubmit={adduser}>
            <div className="peron-info">
              <div className="col-6">
                <div className="inputbox">
                  <div className="label-div">
                    <label htmlFor="">Name</label>
                  </div>

                  <input type="text" required="required" id="name" />
                </div>
                <div className="inputbox">
                  <div className="label-div">
                    <label htmlFor="">Gender</label>
                  </div>
                  <input type="text" required="required" id="gender" />
                </div>
                <div className="inputbox">
                  <div className="label-div">
                    <label htmlFor="">Blood Group</label>
                  </div>
                  <input type="text" required="required" id="blood" />
                </div>
              </div>

              <div className="col-6">
                <div className="inputbox">
                  <div className="label-div">
                    <label htmlFor="">Birth Cirtificate Number</label>
                  </div>

                  <input type="text" required="required" id="birthCir" />
                </div>
                <div className="inputbox">
                  <div className="label-div">
                    <label htmlFor="">Date Of Birth</label>
                  </div>

                  <input type="date" required="required" id="date" />
                </div>
                <div className="inputbox">
                  <div className="label-div">
                    <label htmlFor="">Place Of Birth</label>
                  </div>

                  <input type="text" required="required" id="Place" />
                </div>
              </div>
            </div>

            <div className="Info-headline">
              <p>FAMILY INFORMATION</p>
            </div>
            <div className="family-info">
              <div className="col-6">
                <div className="inputbox">
                  <div className="label-div">
                    <label htmlFor="">Father Name</label>
                  </div>

                  <input type="text" required="required" id="FName" />
                </div>
                <div className="inputbox">
                  <div className="label-div">
                    <label htmlFor="">Father NID</label>
                  </div>

                  <input type="text" required="required" id="FNID" />
                </div>
                <div className="inputbox">
                  <div className="label-div">
                    <label htmlFor="">Mother Name</label>
                  </div>

                  <input type="text" required="required" id="MName" />
                </div>
              </div>
              <div className="col-6">
                <div className="inputbox">
                  <div className="label-div">
                    <label htmlFor="">Mother NID</label>
                  </div>

                  <input type="text" required="required" id="MNID" />
                </div>
                <div className="inputbox">
                  <div className="label-div">
                    <label htmlFor="">Husband Name</label>
                  </div>

                  <input type="text" required="required" id="HName" />
                </div>
                <div className="inputbox">
                  <div className="label-div">
                    <label htmlFor="">Husband NID</label>
                  </div>

                  <input type="text" required="required" id="HNID" />
                </div>
              </div>
            </div>

            <div className="Info-headline">
              <p>EDUCATIONAL INFORMATION</p>
            </div>
            <div className="edu-info">
              <div className="col-6">
                <div className="inputbox">
                  <div className="label-div">
                    <label htmlFor="">Education</label>
                  </div>

                  <input type="text" required="required" id="Edu" />
                </div>
                <div className="inputbox">
                  <div className="label-div">
                    <label htmlFor="">Profession</label>
                  </div>

                  <input type="text" required="required" id="Prof" />
                </div>
                <div className="inputbox">
                  <div className="label-div">
                    <label htmlFor="">TIN</label>
                  </div>

                  <input type="text" required="required" id="tin" />
                </div>
                <div className="inputbox">
                  <div className="label-div">
                    <label htmlFor="">Derivin Licence Number</label>
                  </div>

                  <input type="text" required="required" id="DLN" />
                </div>
              </div>
              <div className="col-6">
                <div className="inputbox">
                  <div className="label-div">
                    <label htmlFor="">Passport Number</label>
                  </div>

                  <input type="text" required="required" id="PN" />
                </div>
                <div className="inputbox">
                  <div className="label-div">
                    <label htmlFor="">Religion</label>
                  </div>

                  <input type="text" required="required" id="RL" />
                </div>
                <div className="inputbox">
                  <div className="label-div">
                    <label htmlFor="">Mobile Number</label>
                  </div>

                  <input type="text" required="required" id="MO" />
                </div>
              </div>
            </div>
            <div className="Info-headline">
              <p>ADDRESS INFORMATION</p>
            </div>
            <div className="address-info">
  <div className="col-6">
    <div className="inputbox">
      <div className="label-div">
        <label htmlFor="">Country</label>
      </div>
      <input type="text" required="required" id="country" />
    </div>
    <div className="inputbox">
      <div className="label-div">
        <label htmlFor="">Division</label>
      </div>
      <input type="text" required="required" id="division" />
    </div>
    <div className="inputbox">
      <div className="label-div">
        <label htmlFor="">Upazila</label>
      </div>
      <input type="text" required="required" id="upazila" />
    </div>
    <div className="inputbox">
      <div className="label-div">
        <label htmlFor="">RMO</label>
      </div>
      <input type="text" required="required" id="rmo" />
    </div>
    <div className="inputbox">
      <div className="label-div">
        <label htmlFor="">Union</label>
      </div>
      <input type="text" required="required" id="union" />
    </div>
  </div>
  <div className="col-6">
   
    <div className="inputbox">
      <div className="label-div">
        <label htmlFor="">Moholla</label>
      </div>
      <input type="text" required="required" id="moholla" />
    </div>
    <div className="inputbox">
      <div className="label-div">
        <label htmlFor="">Village</label>
      </div>
      <input type="text" required="required" id="village" />
    </div>
    <div className="inputbox">
      <div className="label-div">
        <label htmlFor="">Home Holding Number</label>
      </div>
      <input type="text" required="required" id="homeHoldingNumber" />
    </div>
    <div className="inputbox">
      <div className="label-div">
        <label htmlFor="">Postal Code</label>
      </div>
      <input type="text" required="required" id="postalCode" />
    </div>
  </div>
</div>


            <div className="inputbox">
              <input type="submit" value="ADD" id="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PInfo;

// string gender;
//         string bloodGroup;
//         string birthCertificateNumber;
//         string dateOfBirth;
//         string placeOfBirth;
