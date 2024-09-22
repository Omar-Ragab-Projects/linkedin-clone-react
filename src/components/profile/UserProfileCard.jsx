import { useEffect, useRef, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaCamera, FaXmark } from "react-icons/fa6";
import { useSelector } from "react-redux";

export default function UserProfileCard() {
  const login = useSelector((state) => state.login.value);
  const [newCover, setNewCover] = useState();
  const [userName, setUserName] = useState(
    login.user ? login.user.displayName : "User Name"
  );
  const [title, setTitle] = useState("Title");
  const [address, setAddress] = useState("address");
  const [showEditPopup, setShowEditPopup] = useState(false);

  function uploadCoverHandle(e) {
    setNewCover(URL.createObjectURL(e.target.files[0]));
  }

  useEffect(() => {
    const userInfoInLocal = JSON.parse(
      localStorage.getItem("user-information")
    );
    if (userInfoInLocal) {
      userInfoInLocal.name
        ? setUserName(userInfoInLocal.name)
        : login.user.displayName;
      userInfoInLocal.title ? setTitle(userInfoInLocal.title) : "Title";
      userInfoInLocal.address ? setAddress(userInfoInLocal.address) : "Address";
    }
  }, []);

  return (
    <div className="user-profile flex-[3] ">
      <div className="user-card rounded-xl overflow-hidden bg-white border pb-8">
        <div className="images relative w-full">
          <input
            type="file"
            id="upload-cover"
            hidden
            onChange={uploadCoverHandle}
          />
          <label htmlFor="upload-cover">
            <span className="rounded-full bg-white p-2 block w-fit border absolute right-6 top-4 cursor-pointer">
              <FaCamera className="text-primaryBlue " />
            </span>
          </label>
          <img
            className="h-[220px] m-auto max-w-full bg-cover"
            src={newCover ? newCover : "/empty-cover.jpg"}
            alt="profile-cover"
          />
          <img
            className="rounded-full absolute -bottom-8 left-8 border-4 border-solid border-white"
            src={login.user ? login.user.photoURL : "/add-new-photo.png"}
            alt="profile-photo"
          />
        </div>
        <div className="user-info pt-12 px-8 relative">
          <span className="block font-medium text-2xl">{userName}</span>
          <span className="block text-gray-800">{title}</span>
          <span className="block text-gray-500">{address}</span>
          <FaPencilAlt
            onClick={() => setShowEditPopup(!showEditPopup)}
            className="absolute right-8 top-6 cursor-pointer"
          />
        </div>
      </div>
      <EditPopup
        showEditPopup={showEditPopup}
        setShowEditPopup={setShowEditPopup}
        setUserName={setUserName}
        setTitle={setTitle}
        setAddress={setAddress}
      />
    </div>
  );
}

function EditPopup({
  showEditPopup,
  setShowEditPopup,
  setUserName,
  setTitle,
  setAddress,
}) {
  const nameInput = useRef("");
  const titleInput = useRef("");
  const addressInput = useRef("");

  function editUserHandler() {
    let userInformation = {
      name: nameInput.current,
      title: titleInput.current,
      address: addressInput.current,
    };
    if (nameInput.current.length) {
      setUserName(nameInput.current);
      nameInput.current = "";
    }
    if (titleInput.current.length) {
      setTitle(titleInput.current);
      titleInput.current = "";
    }
    if (addressInput.current.length) {
      setAddress(addressInput.current);
      addressInput.current = "";
    }

    localStorage.setItem("user-information", JSON.stringify(userInformation));
    setShowEditPopup(false);
  }
  return (
    <>
      {showEditPopup && (
        <div className="fixed z-50 inset-0 w-full h-full bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-4 w-[300px] sm:w-[600px]">
            <div className="intro flex items-center justify-between text-lg pb-2 mb-2 border-b border-b-black/10 border-solid">
              <span>Edit intro</span>
              <span>
                <FaXmark
                  className="cursor-pointer"
                  onClick={() => setShowEditPopup(false)}
                />
              </span>
            </div>
            <div className="edit-user-name">
              <label htmlFor="edit-name">Full Name*</label>
              <input
                onChange={(e) => (nameInput.current = e.target.value)}
                type="text"
                id="edit-name"
                className="block mt-1 w-full border border-black/80 rounded hover:outline-1 hover:outline px-2 py-1"
              />
            </div>
            <div className="edit-user-title mt-4">
              <label htmlFor="edit-title">Title*</label>
              <input
                onChange={(e) => (titleInput.current = e.target.value)}
                type="text"
                id="edit-title"
                className="block mt-1 w-full border border-black/80 rounded hover:outline-1 hover:outline px-2 py-1"
              />
            </div>
            <div className="edit-user-address mt-4">
              <label htmlFor="edit-address">Address*</label>
              <input
                onChange={(e) => (addressInput.current = e.target.value)}
                type="text"
                id="edit-address"
                className="block mt-1 w-full border border-black/80 rounded hover:outline-1 hover:outline px-2 py-1"
              />
            </div>
            <button
              onClick={editUserHandler}
              className="bg-primaryBlue text-white px-4 py-1 rounded-full ml-auto mt-6 block "
            >
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
}
