import { BsImage } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiLayout2Fill } from "react-icons/ri";
import Posts from "./Posts";
import CreateNewPost from "./CreateNewPost";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function MiddleHomeContect() {
  return (
    <div className="flex-[2]">
      <CreatePost />
      <Posts />
    </div>
  );
}

function CreatePost() {
  const [postPopup, setPostPopup] = useState(false);
  const login = useSelector((state) => state.login.value);
  return (
    <div className="bg-white rounded-lg overflow-hidden py-2 px-4 ">
      <div className="start-post flex items-center gap-2">
        <img
          src={login.user ? login.user.photoURL : "/public/user.jpg"}
          alt="User Photo"
          className="w-[60px] rounded-full p-2"
        />
        <input
          onClick={() => setPostPopup(!postPopup)}
          type="text"
          readOnly
          className=" rounded-full p-[13px] border border-gray-300 w-full focus:outline-none cursor-pointer placeholder:font-medium hover:bg-gray-100 transition-all"
          placeholder="Start a post, try writing with AI"
        />
      </div>
      <div className="post-addons flex items-center justify-between px-6 py-1 max-sm:px-0">
        <div className="flex items-center gap-2 cursor-pointer px-4 py-2 hover:bg-gray-100 transition-all max-sm:px-2">
          <BsImage className="text-primaryBlue text-xl max-sm:text-lg" />
          <span className="text-sm font-medium text-gray-500 max-sm:text-xs">
            Media
          </span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer px-4 py-2 hover:bg-gray-100 transition-all max-sm:px-2 ">
          <FaRegCalendarAlt className="text-amber-800 opacity-75 text-xl max-sm:text-lg" />
          <span className="text-sm font-medium text-gray-500 max-sm:text-xs">
            Event
          </span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer px-4 py-2 hover:bg-gray-100 transition-all max-sm:px-2 ">
          <RiLayout2Fill className="text-orange-700 opacity-75 text-2xl max-sm:text-lg" />
          <span className="text-sm font-medium text-gray-500 max-sm:text-xs">
            Write article
          </span>
        </div>
      </div>
      <CreateNewPost
        postPopup={postPopup}
        setPostPopup={() => setPostPopup()}
      />
    </div>
  );
}
