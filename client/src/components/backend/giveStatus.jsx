import "./giveStatus.css";

const giveStatus = ({ state }) => {

    const { contract } = state;
    console.log(contract);
    
    const giveSta = async (event) => {
        event.preventDefault();
        const { contract } = state;
        const ADD = document.querySelector("#ADD").value;
        const Docu = document.querySelector("#DOC").value;
        const Bio = document.querySelector("#BIO").value;
        const nid = document.querySelector("#NID").value;

        const give = await contract.give_status(
            ADD,
            Docu,
            Bio,
            nid
          
          );
          give.wait();
          alert("Adding is successul");



    }

  return (
    <>
      <header className="head-area">
        <div className="container fix">
          <h2>Give Status </h2>
        </div>
      </header>
      <div className="form-section">
        <form onSubmit={giveSta}>
          <div className="inputbox">
            <div className="label-div">
              <label htmlFor="">Address</label>
            </div>

            <input type="text" required="required" id="ADD" />
          </div>
          <div className="inputbox">
            <div className="label-div">
              <label htmlFor="">Document verified</label>
            </div>

            <input type="text" required="required" id="DOC" />
          </div>
          <div className="inputbox">
            <div className="label-div">
              <label htmlFor="">Call for Biometric</label>
            </div>

            <input type="text" required="required" id="BIO" />
          </div>
          <div className="inputbox">
            <div className="label-div">
              <label htmlFor="">NID Assigned</label>
            </div>

            <input type="text" required="required" id="NID" />
          </div>
          
          <div className="inputbox">
              <input type="submit" value="ADD" id="submit" />
            </div>

        </form>
      </div>
    </>
  );
};

export default giveStatus;
