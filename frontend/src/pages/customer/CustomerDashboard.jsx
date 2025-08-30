import CustomerSideBar from '../../components/CustomerSideBar';
import CustomerHeader from '../../components/CustomerHeader';
import { Link } from 'react-router-dom';
import '../../styles/customercss/customerdashboard.css';

function CustomerDashboard() {
  return (
    <>
      <CustomerHeader />
      <br />
      <CustomerSideBar />
      <div
        style={{
          marginTop: '55px',
          marginLeft: '15.2vw',
          height: 'calc(100vh - 15.5vh)',
          width: 'calc(100vw - 17vw)',
          overflowY: 'auto',
          padding: '10px',
        }}
      >
        <title>Dashboard</title>
        <div className="div-1">
          <div className="topmost-1">
            <h1 className="font-pathway">SCHEDULE</h1>
            <h3 className="font-pathway">TODAY</h3>
            <hr />
            <p className="font-pathway text-[24px] no-req">No schedule for today.</p>
            <Link to="/customer-schedule" className="more-details">
              More Details
            </Link>
          </div>
          <div className="topmost-2">
            <h1 className="font-pathway">MY BOOKINGS</h1>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '30px',
                paddingInlineStart: '80px',
                marginTop: '-20px',
              }}
            >
              <img src="/nissan.png" alt="nissan" className="w-[200px] h-[120px]" />
              <div>
                <h4 className="font-pathway text-[30px] m-0">
                  Nissan
                  <br />
                  Terra
                </h4>
                <h5 className="font-pathway text-[16px] mt-1 mb-0">SUV</h5>
              </div>
            </div>

            <h3 className="font-pathway total">TOTAL BOOKINGS: 4</h3>
            <Link to="/customer-bookings" className="more-details">
              More Details
            </Link>
          </div>
        </div>
        <br />
        <div className="div-2">
          <div className="topmost-1">
            <h1 className="font-pathway">UNPAID</h1>
            <h3 className="font-pathway">SETTLEMENTS</h3>
            <hr />
            <p className="font-pathway text-[24px] no-req">No unpaid settlements.</p>
            <Link to="/customer-bookings" className="more-details">
              More Details
            </Link>
          </div>
          <div className="topmost-2">
            <h1 className="font-pathway">FAVORITE CAR</h1>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '30px',
                paddingInlineStart: '80px',
                marginTop: '-20px',
              }}
            >
              <img src="/nissan.png" alt="nissan" className="w-[200px] h-[120px]" />
              <div>
                <h4 className="font-pathway text-[30px] m-0">
                  Nissan
                  <br />
                  Terra
                </h4>
                <h5 className="font-pathway text-[16px] mt-1 mb-0">SUV</h5>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

export default CustomerDashboard;
