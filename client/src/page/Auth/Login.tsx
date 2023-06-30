import { useEffect } from "react";
import facebookLogo from "../../assets/Auth/fbLogo.png";
import plusIcon from "../../assets/Auth/plusIcon.svg";
import "./index.css";
import Signup from "./Signup";
import { useAppSelector } from "../../redux/hook";
import { useNavigate } from "react-router-dom";
import FormLogin from "./FormLogin";


export default function Login() {
  const showSignup = useAppSelector(state=>state.showSignup.showSignup)
  const navigate = useNavigate()
  const currentUser = useAppSelector(state=>state.auth.currentUser)

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      if(currentUser){
        if(Object.keys(currentUser).length>0){console.log("object");navigate('/')}
      }
      }
      ,500)
   return ()=>clearTimeout(timeout)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentUser])


  return (
    <div>
      {showSignup && (
        <div className="fixed z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Signup />
        </div>
      )}
      {showSignup && (
        <div className="absolute w-full h-full bg-[rgba(255,255,255,.8)] z-10"></div>
      )}
      <div className="bg-[#f0f2f5] w-screen overflow-hidden pt-[92px] pb-[132px] ">
        <div className="w-[980px] mx-auto flex justify-between">
          <div>
            <img className="w-[198px] -mx-5" src={facebookLogo} />
            <div className="text-[28px] font-normal">
              <span>Đăng nhập gần đây</span>
            </div>
            <div className="mb-3 pb-3">
              <span className="text-[#606770] text-[15px]">
                Nhấp vào ảnh của bạn hoặc thêm tài khoản.
              </span>
            </div>
            <div className="flex flex-wrap gap-5">
              <div className="rounded-lg shadow-lg w-40 overflow-hidden cursor-pointer">
                <div className="flex w-40 h-40 overflow-hidden items-center justify-center">
                  <img
                    className="object-cover"
                    src="https://img.meta.com.vn/Data/image/2021/10/12/hinh-anh-lisa-blackpink-2.jpg"
                  />
                </div>
                <div className="p-3 text-center text-[18px] text-[#4b4f56] leading-[22px] bg-white">
                  Lisa
                </div>
              </div>
              <div className="rounded-lg hover:shadow-2xl hover:duration-500 w-40 overflow-hidden ease-in-out duration-300 border border-gray-300 cursor-pointer">
                <div className="flex w-40 h-40 overflow-hidden items-center justify-center bg-[#f5f6f7]">
                  <img
                    className="object-cover w-[42px] h-[42px]"
                    src={plusIcon}
                  />
                </div>
                <div className="p-3 text-center text-[18px] leading-[22px] text-[#385898] bg-white">
                  Thêm tài khoản
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div className="w-[396px] mt-16">
            <FormLogin/>
            <div className="text-center mt-[28px] text-sm">
                <span className="font-bold hover:underline cursor-pointer">
                  Tạo Trang
                </span>
                dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.
              </div>
          </div>




        </div>
      </div>
    </div>
  );
}
