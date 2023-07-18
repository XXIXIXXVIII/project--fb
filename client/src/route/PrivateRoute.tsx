// import { useSelector } from "react-redux";
// import { Outlet } from "react-router";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import FormLogin from "../page/Auth/FormLogin";
import Signup from "../page/Auth/Signup";
import PostDetail from "../component/abc/PostDetail";

const PrivateRoute = () => {
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const showSignUp = useAppSelector((state) => state.showSignup.showSignup);
  const postId = useAppSelector(state=>state.showDetailPost.postId)

  return currentUser && Object.keys(currentUser).length > 0 ? (
   <>
      {postId!==0&&<PostDetail/>}
      <Outlet />
   </>
  ) : (
    <div>
      
      <div className="fixed w-screen h-screen bg-gray-300 opacity-90 z-40"></div>
      {!showSignUp && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[30%] bg-white rounded-lg py-8 px-4 loginHome">
          <div className="mb-5 text-center font-bold text-3xl">
            Kết nối với Facebook
          </div>
          <FormLogin />
        </div>
      )}
      {showSignUp && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[30%]">
          <Signup />
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default PrivateRoute;
