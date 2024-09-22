import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SideBarProfile() {
  const [editPath, setEditPath] = useState(false);
  const navigate = useNavigate();
  const [editedUrl, setEditedUrl] = useState("");
  return (
    <div className="sidebar-profile flex-[1] ">
      <div className="bg-white p-4 rounded-lg border relative">
        <h3 className="font-medium text-md">Public profile & URL</h3>
        <span className="text-gray-500 ">
          {window.location.origin}
          <span>
            <span className={`hidden ${!editPath && "!inline"}`}>
              {window.location.pathname}
            </span>
            <span className={`hidden ${editPath && "!inline"}  `}>
              /
              <input
                type="text"
                className="inline w-1/4"
                placeholder="edit"
                onChange={(e) => setEditedUrl(e.target.value)}
              />
            </span>
          </span>
        </span>
        <div className="absolute right-4 top-4">
          <FaPencilAlt
            onClick={() => setEditPath(!editPath)}
            className={`block ${editPath && "!hidden"}   cursor-pointer`}
            // className="absolute right-4 top-4 cursor-pointer"
          />
          <button
            onClick={() => {
              navigate(`/profile/${editedUrl}`);
              setEditPath(!editPath);
            }}
            className={`block ${
              !editPath && "!hidden"
            }   cursor-pointer bg-primaryBlue px-2  text-white rounded-full`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
