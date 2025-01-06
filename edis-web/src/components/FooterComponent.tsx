import React from 'react';

const FooterComponent: React.FC = () => {
  return (
    <footer className="mt-auto">
      
      <div className="container">
        <p className="text-white text-center" style={{fontSize:'10px'}}>Release Notes | Privacy | Important Notices | Contact Us</p>
        {/* <footer className="footer mt-auto py-3 text-center" >
            <hr style={{ marginBottom: '0', color: 'white' }} />
            <h5 className="text-white" style={{fontSize:'10px'}}>Release Notes | Privacy | Important Notices | Contact Us</h5>
        </footer> */}
      </div>
    </footer>
  );
};

export default FooterComponent;