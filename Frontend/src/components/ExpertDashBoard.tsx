import React from "react"; 
import PropTypes from "prop-types"; 
import { FaRegUserCircle } from "react-icons/fa"; 
// import Calendar from "react-calendar"; 
// import 'react-calendar/dist/Calendar.css'; 
 import logo from "./assets/logo.png"; 
// import CreateProduct from "./adminPage/CreateProducts.jsx"; 
// import UpdateProduct from "./adminPage/UpdateProduct.jsx"; 
// import GetAllUsers from "./adminPage/GetAllProducts.jsx"; 
// import Dealers from "./adminPage/Dealers.jsx"; 
// import Sales from "./adminPage/Sales.jsx"; 
// import { useNavigate } from "react-router-dom";

const ExpertDashBoard = () => { 
  const [activeComponent, setActiveComponent] = React.useState("home"); 
  const [showCalendar, setShowCalendar] = React.useState(false);
  

  const handleUserClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleLogout = () => {
      //navigate("/"); 
  };

  const renderComponent = () => {
    switch (activeComponent) {
    //   case "create-product":
    //     return <CreateProduct />;
    //   case "update-product":
    //     return <UpdateProduct />;
    //   case "get-all-users":
    //     return <GetAllUsers />;
    //   case "dealers":
    //     return <Dealers />;
    //   case "sales":
    //     return <Sales />;
      default:
        return <div className="p-4">Welcome to the Admin Dashboard! Please select an option from the menu.</div>;
    }
  };

  return (
    <div
      className="flex"
      style={{
        position: "relative",
        minHeight: "100vh",
      }}
    >
    
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/7887848/pexels-photo-7887848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
          zIndex: -1,
        }}
      />

      <aside className="w-64 h-screen bg-black opacity-100 p-4 flex flex-col justify-between bg-opacity-75">
        <div>
          <div className="flex items-center mb-8">
            <img src={logo} className="w-64" alt="Logo" />
          </div>
          <nav className="flex flex-col">
            <button 
              onClick={() => setActiveComponent("create-product")}
              className="py-2 bg-gray-500 px-4 text-white hover:bg-gray-300 rounded-md text-left"
            >
               Manage Guides
            </button>
            <button 
              onClick={() => setActiveComponent("update-product")}
              className="py-2 bg-gray-500 mt-2 px-4 text-white hover:bg-gray-300 rounded-md text-left"
            >
               Analytics
            </button>
            <button 
              onClick={() => setActiveComponent("get-all-users")}
              className="py-2 bg-gray-500 mt-2 px-4 text-white  hover:bg-gray-300 rounded-md text-left"
            >
              Profile Settings
            </button>
            {/* <button 
              onClick={() => setActiveComponent("dealers")}
              className="py-2 bg-gray-500 mt-2 px-4 text-white  hover:bg-gray-300 rounded-md text-left"
            >
             
            </button> */}
            {/*<button 
              onClick={() => setActiveComponent("sales")}
              className="py-2 bg-gray-500 mt-2 px-4 text-white  hover:bg-gray-300 rounded-md text-left"
            >
              Sales
            </button> */}
          </nav>
        </div>
        <button 
          onClick={handleLogout}
          className="mt-auto bg-red-700 text-white text-center py-2 px-4 text-red-600 hover:bg-red-100 rounded-md text-left"
        >
          Logout
        </button>
      </aside>
      <div className="flex-1 bg-black opacity-80">
        <nav className="flex bg-black opacity-80 h-16 justify-between items-center p-4 shadow relative">
          <div className="flex-1 flex justify-end items-center relative">
            <span className="text-black font-semibold mr-4">{}</span>
            <a href="#" onClick={handleUserClick} aria-label="Calendar">
              <div className="flex items-center  rounded-xl px-1 py-2 cursor-pointer">
                <FaRegUserCircle className="text-white" size={28} />
              </div>
            </a>
          
            {showCalendar && (
              <div className="absolute top-16 right-0 bg-white shadow-lg p-4 rounded-md z-10">
                {/* <Calendar /> */}
              </div>
            )}
          </div>
        </nav>

      
        <div className="p-4 mt-4">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

// AdminDashBoard.propTypes = {
//   adminName: PropTypes.string.isRequired,
// };

export default ExpertDashBoard;
