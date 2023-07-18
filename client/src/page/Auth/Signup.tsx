import TippyInput from "../../component/auth/TippyInput";
import { IoIosHelpCircle } from "react-icons/io";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from "../../redux/hook";
import { signupRedux } from "../../redux/authSlice";
import { useAppSelector } from "../../redux/hook";
import { showSignupRedux } from "../../redux/showSignup";

export default function Signup() {
  const [showHelpBirth, setShowHelpBirth] = useState(false);
  const [showGender, setShowGender] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gmail, setGmail] = useState('');
  const [birthday, setBirthDay] = useState('');
  const [password, setPassword] = useState('');
  const [sex, setSex] = useState("male");

  const navigate = useNavigate()
  const currentUser = useAppSelector(state=>state.auth.currentUser)

  const distpatch = useAppDispatch()

  useEffect(()=>{
    if(currentUser){
      if(Object.keys(currentUser).length>0){navigate('/')}
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentUser])

  const handleSigup = ()=>{
    distpatch(signupRedux({ firstName, lastName, gmail, birthday, password, sex }))
  }
  
  const handleHideSignup = ()=>{
    distpatch(showSignupRedux({showSignup:false}))
  }

  return (
    <div className="bg-white rounded-lg shadow-2xl w-[432px] relative">
      <div onClick={handleHideSignup} className="absolute w-6 h-6 overflow-hidden top-2 right-2"><img className="w-full object-cover cursor-pointer" src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/C6QZ-pcv3Bd.png"/></div>
      <div className="text-center px-4 py-[10px] border-b border-gray-300">
        <div>
          <h2 className="text-[25px] font-semibold">Tạo tài khoản mới</h2>
        </div>
        <div>
          <p className="text-[#606770] text-[15px]">Nhanh chóng và dễ dàng.</p>
        </div>
      </div>

      <div>
        <div className="p-4">
          <div className="flex gap-3 leading-3">
            <TippyInput placeholder={"Họ"} content={"Họ của bạn là gì?"} setValue={setFirstName} value={firstName}/>
            <TippyInput placeholder={"Tên"} content={"Tên của bạn là gì?"} setValue={setLastName} value={lastName}/>
          </div>
          <div className="mt-3">
            <TippyInput
              placeholder={"Số di động hoặc gmail"}
              content={
                "Bạn sẽ sử dụng thông tin này khi đăng nhập và khi cần đặt mật khẩu."
              }
              setValue={setGmail} value={gmail}
            />
          </div>
          <div className="mt-3">
            <TippyInput
            type="password"
              placeholder={"Mật khẩu mới"}
              content={
                "Nhập mật khẩu bao gồm 6 ký tự bao gồm số, chữ cái và dấu chấm câu như ( ! và & )."
              }
              setValue={setPassword} value={password}
            />
          </div>
          <div>
            <div className="block text-sm font-normal text-[#606770]">
              <div className="flex items-center gap-1 mt-3">
                <div className="mb-1">Sinh nhật</div>
                <div className="cursor-pointer text-xs">
                  <Tippy
                    onClickOutside={() => setShowHelpBirth(false)}
                    placement="left"
                    visible={showHelpBirth}
                    content={
                      <span>
                        Cung cấp sinh nhật của bạn giúp đảm bảo bạn có được trải
                        nghiệm Facebook phù hợp với độ tuổi của mình. Nếu bạn
                        muốn thay đổi người nhìn thấy thông tin này, hãy đi tới
                        phần Giới thiệu trên trang cá nhân của bạn. Để biết thêm
                        chi tiết, vui lòng truy cập vào Chính sách quyền riêng
                        tư của chúng tôi.
                      </span>
                    }
                  >
                    <div onClick={() => setShowHelpBirth(true)}>
                      <IoIosHelpCircle size={14} />
                    </div>
                  </Tippy>
                </div>
              </div>
            </div>
            <input
              id="birthday"
              type="date"
              value={birthday}
              onChange={(e)=>setBirthDay(e.target.value)}
              className="rounded-[5px] bg-[#f5f6f7] w-full text-base border p-[11px] border-[#dddfe2] outline-none placeholder:text-gray-400"
            />
          </div>

          <div>
            <div>
              <div className="flex items-center gap-1 mt-3">
                <div className="block text-sm font-normal text-[#606770] mb-1">
                  Giới tính
                </div>
                <div className="cursor-pointer text-xs">
                  <Tippy
                    onClickOutside={() => setShowGender(false)}
                    placement="left"
                    visible={showGender}
                    content={
                      <span>
                        Bạn có thể thay đổi ai nhìn thấy giới tính của mình trên
                        trang cá nhân vào lúc khác. Chọn Tùy chỉnh nếu bạn thuộc
                        giới tính khác hoặc không muốn tiết lộ.
                      </span>
                    }
                  >
                    <div
                      className="text-[#606770]"
                      onClick={() => setShowGender(true)}
                    >
                      <IoIosHelpCircle size={14} />
                    </div>
                  </Tippy>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="rounded border border-gray-300 px-2 flex justify-between w-1/3">
                <label className="flex-1 px-2 py-1" htmlFor="Male">Nữ</label>
                <input onChange={(e)=>setSex(e.target.value)} value={'male'} checked={sex==='male'} id="Male" name="sex" type="radio" />
              </div>
              <div className="rounded border border-gray-300 px-2 flex justify-between w-1/3"> 
                <label className="flex-1 px-2 py-1" htmlFor="Men"> Nam</label>
                <input onChange={(e)=>setSex(e.target.value)} value={'men'} checked={sex==='men'} id="Men" name="sex" type="radio" />
              </div>
            </div>

            <div className="text-[#777] text-[11px] mt-2">Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên Facebook.<Link to={'/'} className="linkNobg"> Tìm hiểu thêm</Link>.</div>
            <div className="text-[#777] text-[11px] mt-2">Bằng cách nhấp vào Đăng ký, bạn đồng ý với <Link to={'/'} className="linkNobg">Điều khoản</Link>, <Link to={'/'} className="linkNobg">Chính sách quyền riêng tư </Link>và <Link to={'/'} className="linkNobg">Chính sách cookie</Link> của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.</div>
            <div className="my-[10px]"><button className="py-2 px-16 bg-[#00a400] text-[17px] text-white font-semibold rounded-lg focus:outline-none mx-auto block text-center" onClick={handleSigup}>Đăng ký</button></div>
            <div className="text-center pb-[10px]"><Link className="text-[#1877f2] cursor-pointer text-[17px] " to={'/login'}>Bạn Đã có tài khoản ư?</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
}
