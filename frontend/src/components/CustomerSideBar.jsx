import { NavLink } from 'react-router-dom';
import '../styles/customercss/customersidebar.css';
import { HiCalendar, HiOutlineClipboardDocumentCheck, HiOutlineUserCircle } from 'react-icons/hi2';
import { HiChartBar } from 'react-icons/hi2';
import { HiBookOpen } from 'react-icons/hi2';
import { HiOutlineUserGroup } from 'react-icons/hi2';
import { HiCog8Tooth } from 'react-icons/hi2';
import { HiDocumentCurrencyDollar } from 'react-icons/hi2';
import { HiTruck } from 'react-icons/hi2';
import { HiMiniSquaresPlus } from 'react-icons/hi2';
import { HiArrowLeftStartOnRectangle } from 'react-icons/hi2';

export default function CustomerSideBar() {
  return (
    <div id="customer-sidebar" className="customer-sidebar">
      <NavLink to="/customer-dashboard">
        <HiMiniSquaresPlus style={{ verticalAlign: '-3px', marginRight: '5px' }} />
        DASHBOARD
      </NavLink>
      <br />
      <hr />
      <NavLink to="/customer-profile">
        <HiOutlineUserCircle style={{ verticalAlign: '-3px', marginRight: '5px' }} />
        MY PROFILE
      </NavLink>
      <br />
      <hr />
      <NavLink to="/customer-bookings">
        <HiBookOpen style={{ verticalAlign: '-3px', marginRight: '5px' }} />
        MY BOOKINGS
      </NavLink>
      <br />
      <hr />
      <NavLink to="/customer-history">
        <HiOutlineClipboardDocumentCheck style={{ verticalAlign: '-3px', marginRight: '5px' }} />
        BOOKING HISTORY
      </NavLink>
      <br />
      <hr />
      <NavLink to="/customer-cars">
        <HiTruck style={{ verticalAlign: '-3px', marginRight: '5px' }} />
        CARS
      </NavLink>
      <br />
      <hr />
      <NavLink to="/customer-schedule">
        <HiCalendar style={{ verticalAlign: '-3px', marginRight: '5px' }} />
        SCHEDULE
      </NavLink>
      <br />
      <hr />
      <NavLink to="/customer-account">
        <HiCog8Tooth style={{ verticalAlign: '-3px', marginRight: '5px' }} />
        ACCOUNT SETTINGS
      </NavLink>
      <br />
      <hr />
      <NavLink to="/customer-logout">
        <HiArrowLeftStartOnRectangle style={{ verticalAlign: '-3px', marginRight: '5px' }} />
        LOGOUT
      </NavLink>
      <br />
      <hr />
    </div>
  );
}
