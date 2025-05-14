import './Firstcomponent.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import searching from '../images/searching.jpg'
function Firstcomponent(){
return(<>       
 <div className="students-wrapper">
      <div className="students-header-section">
        <div className='combined'>
        <h1 className="students-header">Students Masters</h1>
        <p className="students-subtext">
          Access and manage comprehensive student details seamlessly. View personalized profiles tailored to your campus.
        </p>
        </div>
        <div className="searchouter">
         <img src={searching} alt="search" className="searchicon" />
               <input type="text" className="searchbar" placeholder="Search for the module" />
              
                </div>
      </div>
      </div>

    </>)
}
export default Firstcomponent;
