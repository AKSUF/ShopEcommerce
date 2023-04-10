
import SearchIcon from '@mui/icons-material/Search';
import BadgeIcon from '@mui/icons-material/Badge';
import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const style =
    'text-[14px], cursor-pointer, ml-[25px] mobile:ml-[5px]';
  return (


    <div className="navbar h-[60px] shadow-md relative z-10  hover:bg-gray-100">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0">


          <div className=" left flex flex-1  items-center">
            <div className="cursor-pointer text-[16px] mobile:hidden">
                En
            </div>

            {/* Search Input */}
            <div className="SearchContainer flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px] hover:text-red-500">
                <input type='text' className="border-none mobile:w-[50px]" placeholder="Search"/>
                <SearchIcon className="text-[#8a4af3] m" style={{fontSize: '16px'}}/>
            </div>
          </div>


          {/* Logo */}
          <div className="center flex-1 text-center  mobile:ml-6">
          <NavLink to="/">
              <div className = "logo font-bold mobile:text-sm">Winter Kings</div>
              </NavLink>
          </div>

          {/* Right Side */}
          <div className="right flex flex-1 items-center justify-end mobile:justify-center mobile:flex-[2]">
            
              <NavLink to="/register">
              <div className={style}> Register</div>
                  </NavLink>
                  <NavLink to="/login">

              <div className={style}>Sign In</div>  </NavLink>
              <NavLink to="/cart">
              <div className={style}>
                <BadgeIcon badgeContent={4} color='primary'>
                  <AddShoppingCartIcon/>
                </BadgeIcon>
              
              </div>
              </NavLink>
          </div>

      </div>
    </div>
  );
};

export default Navbar;
