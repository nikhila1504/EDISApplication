import React, { useEffect, useState  } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const HomePage: React.FC = () => {

  const [userData, setUserData] = useState({
    userName: '',
    userRole: '',
    lastLogin: ''
});



    // Fetch data from the service or API
    useEffect(() => {
       
        setUserData({
            userName: 'Tammy Marshall',
            userRole: 'Division Director',
            lastLogin: '10/31 10:14:34AM'
        });
       
         
    }, []); // Empty dependency array to run once when component mounts

 
  return (

      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '75vh' }}>
          <div className="text-center w-100">
              <hr className="line" />
              <div className="welcome-message">
                  <strong>Welcome: {userData.userName}</strong>
              </div>
              <div className="role-message">
                  <strong>Role: {userData.userRole}</strong>
              </div>
              <div className="">
                  Last login on  {userData.lastLogin}
              </div>
              <hr className="line" />
          </div> 
      </div>
);
   
};

export default HomePage;