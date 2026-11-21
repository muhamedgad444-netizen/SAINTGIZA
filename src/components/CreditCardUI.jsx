export default function CreditCardUI({ number, name, expiry, cvc }) {
  // Format the visual components with sensible fallbacks
  const displayNum = number || '**** **** **** ****';
  const displayName = name || 'CARDHOLDER NAME';
  const displayExpiry = expiry || 'MM/YY';
  const displayCvc = cvc || '***';

  return (
    <>
      <style>{`
        /* From Uiverse.io by Praashoo7 */ 
        .flip-card {
          background-color: transparent;
          width: 240px;
          height: 154px;
          perspective: 1000px;
          color: white;
          margin: 0 auto;
        }
        
        .heading_8264 {
          position: absolute;
          letter-spacing: .2em;
          font-size: 0.5em;
          top: 2em;
          left: 18.6em;
        }
        
        .logo {
          position: absolute;
          top: 6.8em;
          left: 11.7em;
        }
        
        .chip {
          position: absolute;
          top: 2.3em;
          left: 1.5em;
        }
        
        .contactless {
          position: absolute;
          top: 3.5em;
          left: 12.4em;
        }
        
        .number {
          position: absolute;
          font-weight: bold;
          font-size: .6em;
          top: 8.3em;
          left: 1.6em;
          letter-spacing: 2px;
        }
        
        .valid_thru {
          position: absolute;
          font-weight: bold;
          top: 10.3em;
          font-size: 0.4em;
          left: 3.2em;
        }
        
        .date_8264 {
          position: absolute;
          font-weight: bold;
          font-size: 0.5em;
          top: 13.6em;
          left: 3.2em;
        }
        
        .name {
          position: absolute;
          font-weight: bold;
          font-size: 0.5em;
          top: 16.1em;
          left: 2em;
          text-transform: uppercase;
        }
        
        .strip {
          position: absolute;
          background-color: black;
          width: 15em;
          height: 1.5em;
          top: 2.4em;
          background: repeating-linear-gradient(
            45deg,
            #303030,
            #303030 10px,
            #202020 10px,
            #202020 20px
          );
        }
        
        .mstrip {
          position: absolute;
          background-color: rgb(255, 255, 255);
          width: 8em;
          height: 0.8em;
          top: 5em;
          left: .8em;
          border-radius: 2.5px;
        }
        
        .sstrip {
          position: absolute;
          background-color: rgb(255, 255, 255);
          width: 4.1em;
          height: 0.8em;
          top: 5em;
          left: 10em;
          border-radius: 2.5px;
        }
        
        .code {
          font-weight: bold;
          text-align: center;
          margin: .2em;
          color: black;
          font-size: 0.5em;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        .flip-card-front, .flip-card-back {
          box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
          position: absolute;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 1rem;
        }
        
        .flip-card-front {
          box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 2px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset;
          background-color: #171717;
        }
        
        .flip-card-back {
          box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 2px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset;
          background-color: #171717;
          transform: rotateY(180deg);
        }
      `}</style>
      
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="heading_8264">VISA</p>
            <svg className="logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48">
              <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"></path><path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"></path><path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"></path>
            </svg>
            <svg className="chip" id="Layer_1" enableBackground="new 0 0 64 64" height="60" viewBox="0 0 64 64" width="60" xmlns="http://www.w3.org/2000/svg">
              <g><path d="m2,4v56h60v-56zm58,54h-56v-52h56z" fill="#ccc"></path><path d="m20,10v44h24v-44zm22,42h-20v-40h20z" fill="#ccc"></path><path d="m42,18h16v4h-16z" fill="#ccc"></path><path d="m6,18h16v4h-16z" fill="#ccc"></path><path d="m42,30h16v4h-16z" fill="#ccc"></path><path d="m6,30h16v4h-16z" fill="#ccc"></path><path d="m42,42h16v4h-16z" fill="#ccc"></path><path d="m6,42h16v4h-16z" fill="#ccc"></path></g>
            </svg>
            <svg className="contactless" id="Layer_1" enableBackground="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="m30,28c3.309,0 6,2.691 6,6 0,2.569-1.579,4.864-4,5.65v4.444c4.619-1.127 8-5.321 8-10.094 0-5.514-4.486-10-10-10s-10,4.486-10,10c0,4.773 3.381,8.967 8,10.094v-4.444c-2.421-.786-4-3.081-4-5.65 0-3.309 2.691-6 6-6z" fill="white"></path><path d="m30,16c-9.925,0-18,8.075-18,18 0,8.125 5.378,15.155 12.996,17.279v-4.148c-5.46-1.89-9-7.228-9-13.131 0-7.72 6.28-14 14-14s14,6.28 14,14c0,5.903-3.54,11.241-9,13.131v4.148c7.618-2.124 13-9.154 13-17.279 0-9.925-8.075-18-18-18z" fill="white"></path><path d="m30,4c-16.542,0-30,13.458-30,30 0,13.067 8.351,24.321 20.301,28.375v-4.076c-9.743-3.754-16.301-13.407-16.301-24.299 0-14.336 11.664-26 26-26s26,11.664 26,26c0,10.892-6.558,20.545-16.301,24.299v4.076c11.95-4.054 20.301-15.308 20.301-28.375 0-16.542-13.458-30-30-30z" fill="white"></path>
            </svg>
            <p className="number">{displayNum}</p>
            <p className="valid_thru">VALID THRU</p>
            <p className="date_8264">{displayExpiry}</p>
            <p className="name">{displayName}</p>
          </div>
          <div className="flip-card-back">
            <div className="strip"></div>
            <div className="mstrip"></div>
            <div className="sstrip">
              <p className="code">{displayCvc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
