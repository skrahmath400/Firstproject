import logo from './logo.svg'; import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

import Firstcomponent from './Components/firstcomponent';
import CourseDetails from './Pages/Course';
import Secoundcompundfirst, { Secoundcompund11, Secoundcompundeigth, Secoundcompundfifth, Secoundcompundfourth, Secoundcompundnineth, Secoundcompundsecound, Secoundcompundseventh, Secoundcompundsixth, Secoundcompundtenth, Secoundcompundthird } from './Components/secoundcomponent';
import Addnewfeild from './Pages/Addnewfeild';
import sr from "../src/images/sr.png"
import { tab } from '@testing-library/user-event/dist/tab';
import books from '../src/images/books.jpg'
import empolyee from '../src/images/employee.jpg'
import fleet from '../src/images/fleet.jpg'
import warehouese from '../src/images/warehouse.jpg'
import sms from '../src/images/sms.jpg'
import questionbank from '../src/images/questionbank.jpg'
import asserts from '../src/images/asserts.jpg'
import payment from '../src/images/payment.jpg'
import cctv from '../src/images/cctv.jpg'
import hrms from '../src/images/hrms.jpg'
import Group from '../src/images/Group.jpg';
import selectbuttom from '../src/images/selectbutton.png';
import bell from '../src/images/bell.png';
import state from '../src/images/state.png';
import city from '../src/images/city.png';
import campus from '../src/images/campus.png';
import feepayment from '../src/images/feepayment.png';
import feeheads from '../src/images/feeheads.png';
import organization from '../src/images/organization.png';
import cardtype from '../src/images/cardtype.png';
import stream from '../src/images/steam.png';
import programname from '../src/images/programname.png';
import exams from '../src/images/exams.png'
import bus from '../src/images/bus.png';
import back from '../src/images/back.png'
import navbar from '../src/images/navbar.png'
import profile from '../src/images/profile.png';
function App() {

  return (
    <Router>
      <div className='app-container'>
        <header>
          <div className='container'>

            <div className='inside'>
              <img src={sr} alt="Logo" className='srlogo' />
            </div>


            <div className="other">
              <div className='insidesearch'>
                <img src={Group} alt='search' className='se' />
                <input type="text" placeholder='Ask for anything' className='some' />

              </div>
            </div>
            <div className='profile'>

              <div className='profilelogo'>

                <div className='notification'>
                  <img className='bell' src={bell} alt='bell' />
                </div>
                <img src={profile} alt='theprofile' className='propile' />
                <div className='profilename'>
                  <p className='first'>HYD 256789</p>
                  <p className='secound'>Casher</p>
                </div>
                <img src={selectbuttom} className='downIcon' alt='selectbuttom' />

              </div>

            </div>
          </div>
        </header>
        <div className='main-container'>

          <nav>
            {/* <img src={navbar} alt='sidebarbackground' className='navbarback' /> */}
            <div className='bblack'>
              <div className='black'>
                < img src={back} alt='somebutton' className='blacksymbol' />
                <p className='blackdata' >Back to dashborad</p>
              </div>
            </div>
            <div className='ap' id='s'>
              {/* <img src={student} alt='student'/> */}
              <div className='simgs'>
              <div className='simg'>
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6804 15.8336C16.6137 15.5314 16.2992 15.3373 15.9779 15.4001C15.6566 15.4628 15.4503 15.7586 15.517 16.0607C15.543 16.1789 15.5112 16.3008 15.4295 16.3952C15.3847 16.447 15.2858 16.5338 15.1264 16.5338H11.1809L12.7853 12.6756C13.3695 12.9603 13.8979 13.3485 14.3384 13.8266C14.5532 14.0598 14.9284 14.0851 15.1765 13.883C15.4244 13.681 15.4513 13.3281 15.2365 13.0949C14.507 12.303 13.5813 11.7124 12.5557 11.364C13.2998 10.7742 13.7734 9.89172 13.7734 8.90706C13.7734 8.32868 13.6118 7.77402 13.3092 7.28801L15.1398 6.65367V9.40995C15.1398 9.71854 15.4058 9.96868 15.734 9.96868C16.0621 9.96868 16.3281 9.71854 16.3281 9.40995V5.88991C16.3281 5.88441 16.3274 5.87904 16.3272 5.87357C16.3275 5.8665 16.3281 5.85946 16.3281 5.85233V5.82091C16.3281 5.58886 16.1756 5.38096 15.9449 5.29857L10.5849 3.38406C10.4496 3.33573 10.3002 3.33551 10.1646 3.38348L4.77105 5.29279C4.53952 5.37475 4.38624 5.58305 4.38624 5.81571V5.84714C4.38624 6.08172 4.54204 6.29133 4.77631 6.3719L7.41123 7.27803C7.1046 7.76626 6.94092 8.32432 6.94092 8.90708C6.94092 9.89284 7.41559 10.7761 8.16107 11.3659C7.47284 11.6004 6.82685 11.9445 6.25596 12.3874C5.12093 13.268 4.33179 14.4962 4.03386 15.8458C3.93548 16.2915 4.0538 16.7491 4.35852 17.1013C4.66099 17.4508 5.10907 17.6513 5.58787 17.6513H15.1264C15.6019 17.6513 16.0483 17.4506 16.3512 17.1005C16.6595 16.7442 16.7795 16.2824 16.6804 15.8336ZM6.64327 5.82406L10.373 4.50374L14.0831 5.82895L12.4117 6.40814C11.8278 6.1531 10.9203 6.10723 10.3637 6.10606C9.80699 6.1043 8.89878 6.14662 8.31471 6.39886L6.64327 5.82406ZM8.12919 8.90708C8.12919 8.3457 8.36206 7.81942 8.78474 7.42331C8.8995 7.3574 9.42717 7.2235 10.3413 7.2235C10.3483 7.2235 10.3553 7.2235 10.3623 7.2235C11.29 7.22557 11.8235 7.364 11.9379 7.43107C12.3552 7.82624 12.5851 8.34977 12.5851 8.90706C12.5851 10.0624 11.5856 11.0023 10.3571 11.0023C9.12865 11.0023 8.12919 10.0624 8.12919 8.90708ZM5.58787 16.5338C5.42396 16.5338 5.32474 16.4475 5.28021 16.396C5.23434 16.3429 5.16257 16.2305 5.19733 16.0729C5.52674 14.5806 6.56271 13.3551 7.93162 12.682L9.53333 16.5338H5.58787ZM9.03998 12.2791C9.46323 12.1751 9.90493 12.1198 10.3571 12.1198C10.8065 12.1198 11.2489 12.1738 11.6752 12.277L10.3571 15.4467L9.03998 12.2791Z" fill="white" />
              </svg>
              </div>
              </div>
              <div className='sdiv'>
              <Link to="/students" className='stud'>Students</Link>
              </div>
            </div>
            <div className='ap'>
              <img src={books} alt='imge' />
              <Link to="/Applications">Applications</Link>
            </div>
            <div className='ap'>
              <img src={empolyee} alt='employee' />
              <Link to="/Empolyee" className='emp'>Empolyee</Link>
            </div>

            <div className='ap'>
              <img src={fleet} alt='fleet' />
              <Link to="/course">Fleet</Link>
            </div>

            <div className='ap'>
              <img src={warehouese} alt='warehouse' />
              <Link to="/warehouse">warehouse</Link>
            </div>
            <div className='ap'>
              <img src={sms} alt='sms' />
              <Link to="/sms">SMS</Link>
            </div>
            <div className='ap'>
              <img src={questionbank} alt='questionbank' />
              <Link to="/course">Question Bank</Link>
            </div>
            <div className='ap'>
              <img src={asserts} alt='asserts' />
              <Link to="/asserts"> Assets Management</Link>
            </div>
            <div className='ap'>
              <img src={payment} alt='Payment' />
              <Link to="/Payment"> Payment Services</Link>
            </div>
            <div className='ap'>
              <img src={cctv} alt='CCTV' />
              <Link to="/CCTV"> CCTV</Link>
            </div>
            <div className='ap'>
              <img src={hrms} alt='HRMS' />
              <Link to="/HRMS"> HRMS</Link>
            </div>
          </nav>
          <section className='main-section'>
            <Routes>
              <Route path="/course" element={<CourseDetails />} />
              <Route path='/addnewfeild' element={<Addnewfeild />} />
              <Route path="/" element={<>
                <div className='bodys'>
                  <div className='component'>
                    <Firstcomponent />
                  </div>
                  <div className='card-grid-section'>

                    <div className='card'>
                      <div className='logodivs'>
                        <img src={state} alt='state' />
                      </div>
                      <Secoundcompundfirst />
                    </div>
                    <div className='card'>
                      <div className='logodivs'>
                        <img src={city} alt='citylogo' />
                      </div>

                      <Secoundcompundsecound />
                    </div>



                    <div className='card'>
                      <div className='logodivs'>
                        <img src={campus} alt='campus' />
                      </div>
                      <Secoundcompundthird />

                    </div>
                    <div className='card'>
                      <div className='logodiv'>
                        <img src={feepayment} alt='feepayment' />
                      </div>
                      <Secoundcompundfourth />
                    </div>

                    <div className='card'>
                      <div className='logodiv'>
                        <img src={feeheads} alt='feeheads' />
                      </div>
                      <Secoundcompundfifth />
                    </div>

                    <div className='card'>
                      <div className='logodiv'>
                        <img src={organization} alt='organization' />
                      </div>
                      <Secoundcompundsixth />
                    </div>

                    <div className='card'>
                      <div className='logodiv'>
                        <img src={cardtype} alt='cardtype' />
                      </div>
                      <Secoundcompundseventh />
                    </div>
                    <div className='card'>
                      <div className='logodiv'>
                        <img src={stream} alt='stream' />
                      </div>
                      <Secoundcompundeigth />
                    </div>
                    <div className='card'>
                      <div className='logodivs'>
                        <img src={programname} alt='programname' />
                      </div>
                      <Secoundcompundnineth />
                    </div>
                    <div className='card'>
                      <div className='logodivs'>
                        <img src={exams} alt='exams' />
                      </div>
                      <Secoundcompundtenth />
                    </div>

                    <div className='card'>
                      <div className='logodivs'>
                        <img src={bus} alt='bus' />
                      </div>
                      <Secoundcompund11 />
                    </div>
                  </div>
                </div>
              </>} />
            </Routes>
          </section>
        </div>
      </div>
    </Router>



  );
}

export default App;
