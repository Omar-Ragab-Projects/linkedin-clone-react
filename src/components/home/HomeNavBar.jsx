import { useState } from "react";
import { FaHome, FaSearch, FaSortDown } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { PiDotsNineBold } from "react-icons/pi";
import { RiMessage2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./../../utils/firebase.utils";
import { useNavigate } from "react-router-dom";
export default function HomeNavBar() {
  const login = useSelector((state) => state.login.value);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function signOutHandler() {
    signOut(auth)
      .then(() => localStorage.removeItem("login"))
      .then(() => {
        navigate("/");
        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <nav className="bg-white w-full">
      <div className="container flex justify-between items-center max-lg:justify-normal gap-3 ">
        <div className="left-nav flex items-center gap-3 max-sm:gap-0">
          <Link to="/home" className="w-[30px] h-[30px]  my-2">
            <img
              src="/LinkedIn.svg.webp"
              alt="LinkedIn Logo"
              className="w-[30px] h-[30px] "
            />
          </Link>
          <div className="searh  rounded bg-searchBG relative max-lg:bg-transparent max-lg:w-[40px] max-sm:w-[30px]">
            <FaSearch className="absolute block z-10 top-1/2 -translate-y-1/2 left-4 opacity-60 " />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent block relative z-20 pl-10 w-[200px] py-2 transition-all  lg:focus:w-[300px] max-lg:w-[40px] max-lg:cursor-pointer max-lg:focus:absolute max-lg:focus:bg-searchBG max-lg:focus:-top-[20px] max-lg:focus:w-[300px] rounded"
            />
          </div>
        </div>
        <div className="right-nav flex  gap-2 max-sm:gap-0">
          <div className="links flex gap-2 max-lg:items-center max-sm:gap-0">
            <NavLink
              icon={<FaHome />}
              name="Home"
              link="/home"
              active={location.pathname == "/home"}
            />
            <NavLink icon={<HiUsers />} name="My Network" link="/" />
            <NavLink icon={<MdOutlineWork />} name="Jobs" link="/" />
            <NavLink icon={<RiMessage2Fill />} name="Messaging" link="/" />
            <NavLink icon={<IoNotifications />} name="Notifications" link="/" />
          </div>
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="profile flex relative  items-center max-lg:justify-center flex-col cursor-pointer group w-[80px] border-r border-solid border-r-gray-200 max-lg:w-[50px] max-sm:w-[40px] max-sm:pr-1"
          >
            <div className="image w-[40px] h-[40px] p-1">
              <img
                src={login.user ? login.user.photoURL : "/user.jpg"}
                alt="user photo"
                className="rounded-full"
              />
            </div>

            <div className="me  flex -mt-[6px] text-xs text-gray-500 transition-all group-hover:text-black max-lg:hidden ">
              <span>Me</span>
              <FaSortDown className="text-sm text-gray-500 -mt-[2px] group-hover:text-black" />
            </div>
            {showMenu && (
              <ul className="absolute top-[100%] z-10 bg-white  font-medium  border border-solid border-black/10  right-0  text-xs">
                {login.user && (
                  <li>
                    <Link
                      to="/profile"
                      className="hover:bg-gray-100 py-2 px-10 block"
                    >
                      Profile
                    </Link>
                  </li>
                )}
                <li
                  className="hover:bg-gray-100 py-2 px-10"
                  onClick={signOutHandler}
                >
                  {login.user ? "Logout" : "login"}
                </li>
              </ul>
            )}
          </div>
          <div className="business flex items-center flex-col cursor-pointer group w-[90px] max-lg:w-[50px] max-sm:w-[40px] max-sm:pl-1">
            <PiDotsNineBold className="text-[40px] text-gray-500 group-hover:text-black" />
            <div className="me flex -mt-[6px] text-xs text-gray-500 transition-all group-hover:text-black max-lg:hidden">
              <span>For Bussiness</span>
              <FaSortDown className="text-sm text-gray-500 -mt-[2px] group-hover:text-black" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink(props) {
  return (
    <Link
      to={props.link}
      className={` flex flex-col items-center text-gray-500 hover:text-black transition-all relative nav-link py-2  w-[90px] max-lg:w-[50px] max-sm:w-[40px] ${
        props.active && "active"
      }`}
    >
      <span className="text-2xl">{props.icon}</span>{" "}
      <span className="text-xs max-lg:hidden">{props.name}</span>
    </Link>
  );
}
