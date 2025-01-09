import React from 'react';
import { useLocation } from 'react-router-dom';

const FooterComponent: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  
  return (
    <footer className="">
      
      
      {!isLoginPage && (
        <div className="container">
        <p className="text-black text-center" style={{fontSize:'10px'}}>Release Notes | Privacy | Important Notices | Contact Us</p>
        {/* <footer className="footer mt-auto py-3 text-center" >
            <hr style={{ marginBottom: '0', color: 'white' }} />
            <h5 className="text-white" style={{fontSize:'10px'}}>Release Notes | Privacy | Important Notices | Contact Us</h5>
        </footer> */}
        </div>
      )}
      
    </footer>
  );
};

export default FooterComponent;