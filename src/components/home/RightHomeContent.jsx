import { BsFillInfoSquareFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import Button from "./../../ui/Button";
import { FaArrowRightLong } from "react-icons/fa6";
export default function RightHomeContect() {
  return (
    <div className="flex-1  hidden lg:block ">
      <div className="box-1 bg-white rounded-lg p-2">
        <div className="flex items-center justify-between mb-4">
          <span className="font-medium text-gray-700">Add to your feed</span>
          <BsFillInfoSquareFill className=" text-gray-700 cursor-pointer" />
        </div>
        <ul>
          <SuggetionFeedCard
            image="/hashtag.jpg"
            title="Title"
            about="About This Suggestion"
          />
          <SuggetionFeedCard
            image="/hashtag.jpg"
            title="Title"
            about="About This Suggestion"
          />
        </ul>
        <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 w-fit p-1 mt-4 text-gray-500 font-medium hover:text-gray-700 transition-all">
          <span>View all recommendations</span>
          <FaArrowRightLong className="mt-1" />
        </div>
      </div>
      <div className="box-2 bg-white rounded-lg p-2 mt-2"></div>
    </div>
  );
}

function SuggetionFeedCard({ image, title, about }) {
  return (
    <li className="mt-3">
      <div className="flex items-center gap-2">
        <img
          src={image}
          alt="Suggestion Image"
          className="w-[50px] h-[50px] rounded-full border border-solid"
        />
        <div className="content">
          <h3 className="font-medium">{title}</h3>
          <p className="text-gray-500 text-xs">{about}</p>
        </div>
      </div>
      <Button className="flex items-center gap-2 !py-[4px] !px-5 text-gray-600 border-gray-600 mt-1 ml-10 text-sm hover:bg-gray-100 transition-all">
        <FaPlus /> Follow
      </Button>
    </li>
  );
}
