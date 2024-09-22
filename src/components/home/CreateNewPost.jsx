import EmojiPicker from "emoji-picker-react";
import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { GoFileMedia } from "react-icons/go";
import { IoHappyOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../app/features/posts/posts";

export default function CreateNewPost({ postPopup, setPostPopup }) {
  const posts = useSelector((state) => state.posts.value);
  const login = useSelector((state) => state.login.value);
  const [openEmoji, setOpenEmoji] = useState(false);
  const [textArea, setTextArea] = useState("");
  const [postImage, setPostImage] = useState();
  const dispatch = useDispatch();

  function addPostHandler() {
    if (textArea || postImage) {
      dispatch(addPost({ postContent: textArea, postImage }));
      setTextArea("");
      setPostImage();
      setPostPopup(false);
    }
  }

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <div
      className={`hidden ${
        postPopup && "!flex"
      } fixed w-lvw h-lvh bg-black/50 left-0 top-0 flex items-center justify-center z-20 flex-col`}
    >
      <div className="creation p-6 bg-white rounded-lg w-3/5 h-5/6 -mt-10 relative max-sm:w-5/6 overflow-y-scroll">
        <div className="head flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={login.user ? login.user.photoURL : "/public/user.jpg"}
              alt="User Photo"
              className="w-[60px] rounded-full p-2"
            />
            <div className="about">
              <h3 className="text-xl font-medium">
                {login.user ? login.user.displayName : "User Name"}
              </h3>
              <span className="text-gray-500 block">Post to Anyone</span>
            </div>
          </div>
          <FaXmark
            onClick={() => setPostPopup(false)}
            className="text-xl  mb-10 cursor-pointer text-gray-700"
          />
        </div>
        <div className="body">
          <textarea
            value={textArea}
            onChange={(e) => setTextArea(e.target.value)}
            onFocus={() => setOpenEmoji(false)}
            placeholder="What do you want to talk about?"
            className=" w-full h-[200px] pt-8 focus:outline-none placeholder:text-xl placeholder:text-gray-500 text-xl resize-none"
          ></textarea>
          <IoHappyOutline
            onClick={() => setOpenEmoji(!openEmoji)}
            className="text-2xl my-2 cursor-pointer"
          />
          <input
            type="file"
            id="upload-post-image"
            className="hidden"
            onChange={(e) =>
              setPostImage(URL.createObjectURL(e.target.files[0]))
            }
          />
          <label htmlFor="upload-post-image">
            <GoFileMedia className="text-2xl mt-8 cursor-pointer text-gray-900" />
          </label>
          {postImage && (
            <div className="relative">
              <img
                src={postImage}
                alt="Uploaded Image For The Post"
                className="relative -top-10 "
              />
              <FaXmark
                onClick={() => setPostImage()}
                className="text-red-400 text-4xl absolute right-4 top-0 border-2  rounded-full p-1 cursor-pointer"
              />
            </div>
          )}
        </div>

        <EmojiPicker
          className="relative -top-[80%] left-20"
          open={openEmoji}
          onEmojiClick={(e) => {
            setTextArea((t) => t + e.emoji);
            setOpenEmoji(false);
          }}
        />
      </div>
      <div className="post text-right bg-white border-t border-solid border-t-gray-200 relative bottom-[61px] w-3/5  max-sm:w-5/6 px-6 rounded-b-lg">
        <button
          onClick={addPostHandler}
          className={`bg-primaryBlue text-white font-medium rounded-full px-4 py-1 my-4 `}
        >
          Post
        </button>
      </div>
    </div>
  );
}
