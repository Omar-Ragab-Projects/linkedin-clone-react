import HomeNavBar from "./../components/home/HomeNavBar";
import UserProfileCard from "../components/profile/UserProfileCard";
import SideBarProfile from "../components/profile/SideBarProfile";

export default function Profile() {
  return (
    <>
      <HomeNavBar />
      <div className="container lg:flex gap-6 mt-6">
        <UserProfileCard />
        <SideBarProfile />
      </div>
    </>
  );
}
