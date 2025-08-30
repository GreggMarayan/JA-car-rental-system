import { Link } from 'react-router-dom';

function CustomerHeader() {
  const userPhoto = '/jude.jpg'; // replace with actual user photo path
  const firstName = 'Jude'; // replace with dynamic user first name later

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '70px',
    backgroundColor: 'black',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // logo left, user right
    padding: '0 20px',
  };

  return (
    <header style={headerStyle}>
      {/* Left: Logo */}
      <div style={{ lineHeight: 1 }}>
        <Link
          to="/"
          style={{
            fontFamily: '"Merriweather", serif',
            fontSize: '30px',
            color: '#FF0000',
            fontStyle: 'italic',
            fontWeight: 'bolder',
            textShadow: '2px 2px 0 rgba(255,255,255,.85)',
            textDecoration: 'none',
          }}
        >
          J&amp;A
        </Link>
        <br />
        <Link
          to="/customer-dashboard"
          style={{
            fontFamily: '"Merriweather", serif',
            fontSize: '18px',
            color: '#FF0000',
            fontStyle: 'italic',
            fontWeight: 'bolder',
            textShadow: '2px 2px 0 rgba(255,255,255,.85)',
            textDecoration: 'none',
          }}
        >
          CAR RENTAL
        </Link>
      </div>

      {/* Right: User Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginRight: '60px' }}>
        <img
          src={userPhoto}
          alt="User"
          style={{
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            border: '2px solid white',
            objectFit: 'cover',
            cursor: 'pointer',
          }}
        />
        <span
          style={{
            color: 'white',
            fontSize: '16px',
            fontWeight: 'bold',
            fontFamily: '"Merriweather", serif',
          }}
        >
          {firstName}
        </span>
      </div>
    </header>
  );
}

export default CustomerHeader;
