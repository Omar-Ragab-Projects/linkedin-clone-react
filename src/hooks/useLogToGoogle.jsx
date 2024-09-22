import { useNavigate } from "react-router-dom";
import { addLoginState } from "../app/features/login/login";
import { signInWithGooglePopup } from "../utils/firebase.utils";
import { useDispatch } from "react-redux";

export default function useLogToGoogle() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
    dispatch(addLoginState(response));
    localStorage.setItem("login", JSON.stringify(response));
    navigate("/home");
  };

  return logGoogleUser;
}
