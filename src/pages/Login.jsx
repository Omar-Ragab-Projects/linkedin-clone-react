import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { FcGoogle } from "react-icons/fc";
import { signInWithGooglePopup } from "../utils/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import { addLoginState } from "../app/features/login/login";
import { useEffect } from "react";
import useLogToGoogle from "../hooks/useLogToGoogle";

export default function Login() {
  const login = useSelector((state) => state.login.value);
  const navigate = useNavigate();

  useEffect(() => {
    if (login.user) {
      navigate("/home");
    }
  }, []);

  return (
    <section className="bg-white min-h-lvh w-full">
      <LoginNavBar />
      <LoginHero />
    </section>
  );
}

function LoginNavBar() {
  const logGoogleUser = useLogToGoogle();

  return (
    <div className="container">
      <nav className=" flex justify-between items-center py-4 gap-4 max-sm:flex-wrap ">
        <Link to={"/"} className="logo w-40">
          <img src="/linkedin-logo-png.webp" alt="" />
        </Link>
        <div className="nav-left flex items-center gap-3 max-sm:ml-auto">
          <Button
            onClick={logGoogleUser}
            className=" border-transparent text-gray-700 hover:bg-gray-100"
          >
            Join now
          </Button>
          <Button
            onClick={logGoogleUser}
            className=" border-white bg-primaryBlue text-white hover:bg-primaryHover"
          >
            Sign in
          </Button>
        </div>
      </nav>
    </div>
  );
}

function LoginHero() {
  const logGoogleUser = useLogToGoogle();

  return (
    <div className="container">
      <div className="login-hero-wrapper flex justify-between mt-24 max-lg:flex-col max-lg:items-center max-lg:text-center max-lg:mt-4">
        <div className="content lg:w-1/2 max-lg:flex max-lg:items-center max-lg:flex-col">
          <h1 className="text-6xl text-blueGray mb-10 max-lg:text-4xl">
            Welcome to your professional community
          </h1>
          <button
            onClick={logGoogleUser}
            className="flex items-center gap-3 text-lg px-24 py-2 rounded-full border border-blueGray   hover:bg-gray-100 transition-all max-lg:px-12 "
          >
            <FcGoogle />
            <span>Continue With Google</span>
          </button>
        </div>
        <div className="image relative w-1/2 max-lg:mt-10  max-lg:w-full">
          <img
            className="block relative left-[30%] top-[10%] max-lg:inset-0"
            src="/illustrator.svg"
            alt="illustrator image"
          />
        </div>
      </div>
    </div>
  );
}
