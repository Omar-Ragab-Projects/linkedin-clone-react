import { useState } from "react";
import { FaBookmark, FaChevronDown, FaChevronUp, FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function LeftHomeContect() {
  const login = useSelector((state) => state.login.value);
  const [showMore, setShowMore] = useState(true);
  const [newPhoto, setNewPhoto] = useState();

  function changeProfileHandler(e) {
    const newPhoto = URL.createObjectURL(e.target.files[0]);
    setNewPhoto(newPhoto);
    localStorage.setItem("newPhoto", newPhoto);
  }
  return (
    <div className="flex-1 ">
      <div className="user-welcome bg-white rounded-lg overflow-hidden  relative  ">
        <div>
          <div className="cover-photo">
            <img src="/empty-cover.jpg" alt="Cover photo" />
          </div>
          <div
            className="profile-photo absolute w-[70px] h-[70px] overflow-hidden
          top-[40px] left-1/2 -translate-x-1/2 bg-white p-1 rounded-full border-[2px] border-solid border-white"
          >
            <img
              src={
                newPhoto || login.user
                  ? login.user.photoURL
                  : "/add-new-photo.png"
              }
              alt="User Photo"
              className="max-w-full w-[60px] h-[60px] rounded-full"
            />
          </div>
          <div className="user-info text-center mt-14 pb-5  border-b border-solid border-b-gray-200">
            <h3 className="font-bold text-xl">
              {login.user ? login.user.displayName : "Welcome, there!"}
            </h3>
            <input
              type="file"
              name=""
              id="change-photo"
              hidden
              onChange={changeProfileHandler}
            />
            <label htmlFor="change-photo">
              <a className="text-primaryBlue font-medium cursor-pointer">
                Add a photo
              </a>
            </label>
          </div>
        </div>
        <div
          className={`py-3 border-b border-solid border-b-gray-200  ${
            showMore ? "max-md:hidden" : "max-md:block"
          }`}
        >
          <span className="text-gray-500  hover:bg-gray-300 cursor-pointer block py-1 px-3 mb-1">
            Connections
          </span>
          <span className=" font-medium hover:bg-gray-300 cursor-pointer block py-1 px-3">
            Manage your network
          </span>
        </div>
        <div
          className={`p-4 flex items-center gap-2 hover:bg-gray-300 cursor-pointer  ${
            showMore ? "max-md:hidden" : "max-md:flex"
          }`}
        >
          <FaBookmark className="text-gray-500" />
          <span>Saved items</span>
        </div>
      </div>
      <div
        className={`user-subscriptions bg-white mt-2 rounded-lg overflow-hidden ${
          showMore ? "max-md:hidden" : "max-md:block"
        }`}
      >
        <div className="top p-4">
          <span className="text-gray-500 font-medium block mb-2">Recent</span>
          <span className="text-primaryBlue font-medium py-2 block hover:underline cursor-pointer ">
            Groups
          </span>
          <div className="flex text-primaryBlue items-center justify-between py-2  hover:underline cursor-pointer ">
            <span className=" font-medium">Events</span>
            <FaPlus className="text-gray-500" />
          </div>
          <span className="text-primaryBlue font-medium hover:underline cursor-pointer block py-2">
            Followed Hashtags
          </span>
        </div>
        <div className="py-3 hover:bg-gray-300 text-center border-t border-solid border-t-gray-200 cursor-pointer">
          Discover more
        </div>
      </div>
      <button
        className="md:hidden w-full hover:bg-gray-200 transition-all mt-2 py-1 -mb-1 flex justify-center items-center gap-1"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? <span>Show more</span> : <span>Show less</span>}
        {showMore ? (
          <FaChevronDown className="mt-1" />
        ) : (
          <FaChevronUp className="mt-1" />
        )}
      </button>
    </div>
  );
}
