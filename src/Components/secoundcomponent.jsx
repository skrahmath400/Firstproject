import secoundcomponent from '../Components/secoundcomponent.css';
import { Router,Link, useNavigate } from 'react-router-dom';
function Secoundcompundfirst() {

      return (<>
        <div className="card-title">
            <h1>State</h1>
        </div>
        <div className="card-description">
            <p> State ,City, Campus.</p>
        </div>
    </>)
}
function Secoundcompundsecound() {


    return (<>
        <div className="card-title">
            <h1 >City</h1>
        </div>
        <div className="card-description">
            <p>Fee payment Year,Fee Head</p>
            <p>Organization,Card Type.</p>
        </div>

    </>)
}
function Secoundcompundthird() {
    let navigate=useNavigate();
  let  handleevent=()=>{
        navigate('/course')
  }

    return (<>
        <div className="card-title" >
          
      <h1 onClick={handleevent} >Campus</h1>
        
        </div>

        <div className="card-description">

         <p> Stream, Program Name, Exam program, Course Track, Batch, Section.</p>
        </div>

    </>)
}
function Secoundcompundfourth() {


    return (<>
        <div className="card-title">
            <h1 >Fee Payment Year</h1>
        </div>
        <div className="card-description">
            <p>Description Reason, Paymode</p>
        </div>


    </>)
}
function Secoundcompundfifth() {


    return (<>
        <div className="card-title">
            <h1>Fee Heads</h1>
        </div>
        <div className="card-description">
            <p>Mandal</p>
        </div>
    </>)
}
function Secoundcompundsixth() {


    return (<>
        <div className="card-title">
            <h1>Organization</h1>
        </div>
        <div className="card-description">
            <p> Sponsored By, Sponsored Dist, School State, School District, School Type, Marks</p>
        </div>
    </>)
}
function Secoundcompundseventh() {


    return (<>
        <div className="card-title">
            <h1 >Card Type</h1>
        </div>
        <div className="card-description">
            <p> Reservation, Standard, Sibling Type.  </p>
        </div>


    </>)
}
function Secoundcompundeigth() {


    return (<>
        <div className="card-title">
            <h1 >Stream</h1>
        </div>
        <div className="card-description">
            <p > Second Language, Nationality, Religion, Exam Type, Appearing Year</p>
        </div>
    </>)
}
function Secoundcompundnineth() {


    return (<>
        <div className="card-title">
            <h1>Program Name</h1>
        </div>
        <div className="card-description">
            <p > Account Type</p>
        </div>
    </>)
}
function Secoundcompundtenth() {


    return (<>
        <div className="card-title">
            <h1  >Exam Program</h1>
        </div>
        <div className="card-description">
            <p> Payment Status, Books for Class</p>
        </div>
    </>)
}
function Secoundcompund11() {


    return (<>
        <div className="card-title">
            <h1 >Course Track</h1>
        </div>
        <div className="card-description">
            <p> Route From, Stages, Bus No., Route</p>
        </div>
    </>)
}
export default Secoundcompundfirst;
export { Secoundcompundsecound, Secoundcompundthird, Secoundcompundfourth, Secoundcompundfifth, Secoundcompundsixth, Secoundcompundseventh, Secoundcompundeigth, Secoundcompundnineth, Secoundcompundtenth, Secoundcompund11 }