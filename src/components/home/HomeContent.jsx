import LeftHomeContent from "./LeftHomeContent";
import MiddleHomeContent from "./MiddleHomeContent";
import RightHomeContent from "./RightHomeContent";

export default function HomeContent() {
  return (
    <div className="container">
      <div className="wrapper flex gap-6 mt-7 text-sm max-md:flex-col">
        <LeftHomeContent />
        <MiddleHomeContent />
        <RightHomeContent />
      </div>
    </div>
  );
}
