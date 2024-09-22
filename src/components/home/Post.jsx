import { BiWorld } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { IoHeartCircle } from "react-icons/io5";
import { MdOutlineRepeat } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { TfiCommentAlt } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../app/features/posts/posts";
import { useState } from "react";

export default function Post({ post, index }) {
  const dispatch = useDispatch();
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const login = useSelector((state) => state.login.value);

  function deletePostHandler() {
    setShowDeletePopup(() => !showDeletePopup);
    if (showDeletePopup) {
      localStorage.setItem(
        "posts",
        JSON.stringify(
          JSON.parse(localStorage.getItem("posts")).filter(
            (p, i) => i !== index
          )
        )
      );
      dispatch(setPosts(JSON.parse(localStorage.getItem("posts"))));
    }
  }

  return (
    <li className="bg-white rounded-lg mt-2 px-3 pt-3 pb-1 ">
      <div className="head flex justify-between">
        <div className="user-info flex items-center">
          <img
            src={login.user ? login.user.photoURL : "/public/user.jpg"}
            alt="User Photo"
            className="w-[50px] rounded-full p-2"
          />
          <div className="flex flex-col">
            <h3 className="font-medium">
              {login.user ? login.user.displayName : "Full Name"}
            </h3>
            <span className="text-gray-500 text-xs">
              {JSON.parse(localStorage.getItem("user-information"))
                ? JSON.parse(localStorage.getItem("user-information")).title
                : "About"}
            </span>
            <p className="text-gray-500 flex items-center gap-1 text-xs">
              2d • <BiWorld />
            </p>
          </div>
        </div>
        <div className="post-settings flex gap-4">
          <BsThreeDots className="cursor-pointer text-gray-500 text-lg " />
          <FaXmark
            onClick={deletePostHandler}
            className="cursor-pointer text-gray-500 text-lg"
          />
        </div>
      </div>
      <div className="post-content p-2">
        <p>{post.postContent}</p>
        {post.postImage && (
          <img
            src={post.postImage}
            alt="Post Img"
            className="rounded-xl mt-3"
          />
        )}
      </div>
      <div className="post-reactions flex items-center justify-between px-2 text-gray-500 text-xs">
        <div className="flex items-center gap-1">
          <IoHeartCircle className="text-red-600 text-sm" />
          <span>User and 11 others</span>
        </div>
        <span>2 reposts</span>
      </div>
      <div className="post-interactions flex justify-between mx-2 border-t border-t-gray-200 border-solid mt-2 pt-1 font-medium">
        <PostInteractionButton icon={<SlLike />} name="Like" />
        <PostInteractionButton icon={<TfiCommentAlt />} name="Comment" />
        <PostInteractionButton icon={<MdOutlineRepeat />} name="Repost" />
        <PostInteractionButton icon={<IoIosSend />} name="Send" />
      </div>
      {showDeletePopup && (
        <div className="delete-post-popup fixed w-lvw h-lvh bg-black/50 left-0 top-0 flex items-center justify-center">
          <div className="popup bg-white p-4 rounded-lg">
            <p className="font-medium">
              Are You Sure You Want To Delete Your Post?
            </p>
            <div className="flex gap-2 justify-end mt-4 font-medium">
              <button
                onClick={() => {
                  deletePostHandler();
                }}
                className="bg-gray-500 text-white rounded-full px-4 py-1"
              >
                Yes
              </button>
              <button
                onClick={() => setShowDeletePopup(false)}
                className="bg-primaryBlue text-white rounded-full px-4 py-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}

function PostInteractionButton(props) {
  return (
    <div className="flex items-center gap-2 text-lg text-gray-700 cursor-pointer px-6 py-3 hover:bg-gray-100">
      {props.icon}
      <span className="text-xs max-sm:hidden">{props.name}</span>
    </div>
  );
}
