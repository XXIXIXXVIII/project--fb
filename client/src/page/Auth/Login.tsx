import { useState } from "react";
import facebookLogo from "../../assets/Auth/fbLogo.png";
import plusIcon from "../../assets/Auth/plusIcon.svg";
import "./index.css";
import Signup from "./Signup";

export default function Login() {
  const [eyePassword, setEyePassword] = useState(true);
  const [showSignup, setShowSignup] = useState(false);
  const [password, setPassword] = useState("");

  console.log(password.trim().split("").length > 1);

  return (
    <div>
      {showSignup && (
        <div className="fixed z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Signup showSignup={showSignup} setShowSignup={setShowSignup} />
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
            <div className="pt-[10px] pb-6 rounded-lg formLogin bg-white">
              <div className="px-4">
                <div className="border-b border-gray-300 pb-5">
                  <div className="py-[6px]">
                    <input
                      className="input-auth w-full h-[51.6px] mx-auto"
                      placeholder="Email hoặc số điện thoại"
                    />
                  </div>
                  <div className="py-[6px] relative z-0">
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      type={eyePassword ? "password" : "text"}
                      className="input-auth w-full h-[51.6px] mx-auto"
                      placeholder="Mật khẩu"
                    />
                    <div
                      onClick={() => setEyePassword(!eyePassword)}
                      className="w-[28px] h-[28px] absolute z-0 right-4 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full hover:bg-[rgba(0,0,0,.05)] cursor-pointer active:bg-[background-color: rgba(0,0,0,.15)]"
                    >
                      <img
                        className=""
                        src={
                          password.trim().split("").length > 1 ? eyePassword
                            ? "https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/je5FEJkU1_K.png"
                            : "https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/swFqSxKYa5M.png"
                        :""}
                      />
                    </div>
                  </div>
                  <div className="pt-[6px]">
                    <button className="btn-primary w-full text-xl ">
                      Đăng nhập
                    </button>
                  </div>
                  <button className="text-[#1877f2] text-sm mt-4 text-center w-full hover:underline">
                    Quên mật khẩu?
                  </button>
                </div>
                <div className="w-full py-5">
                  <button
                    onClick={() => setShowSignup(true)}
                    className="py-3 px-4 bg-[#42b72a] text-[17px] text-white font-semibold rounded-lg focus:outline-none mx-auto block text-center"
                  >
                    Tạo tài khoản mới
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center mt-[28px] text-sm">
              <span className="font-bold hover:underline cursor-pointer">
                Tạo Trang
              </span>{" "}
              dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
