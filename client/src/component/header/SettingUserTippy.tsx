import Avatar from "../abc/Avatar";
import "../home/index.css";
import {GrNext} from 'react-icons/gr'
import ShotFooter from "../footer/ShotFooter";
import { Link } from 'react-router-dom';
import { useAppDispatch } from "../../redux/hook";
import { logoutRedux } from "../../redux/authSlice";

export default function SettingUserTippy() {

  const distpatch = useAppDispatch()
  const handleLogout = ()=>{
    distpatch(logoutRedux())
  }

  return (
    <div className="bg-white p-[16px] ">
      <div className="shadowUser bg-white w-[338px] p-2 rounded-lg ">
        <Link to={'/user/1'} className="px-2 py-2 rounded-lg hover:bg-[rgba(0,0,0,0.05)] flex gap-2 items-center text-[15px] font-semibold cursor-pointer mb-1">
          <Avatar size={"w-9"}/>
          <div>Lalisa Manoban</div>
        </Link>
        <div className="border border-gray-300"></div>
        <div className="px-2 py-2 rounded-lg hover:bg-[rgba(0,0,0,0.05)] flex gap-2 items-center text-[15px] font-semibold cursor-pointer my-1 text-blue-500">
          Xem tất cả trang cá nhân
        </div>
      </div>

      <div className="mt-4 p-2 hover:bg-gray-200 rounded-lg flex items-center justify-between cursor-pointer">
        <div className="font-semibold text-[15px] flex gap-2 items-center">
          <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center  ">
            <div
              style={{ backgroundPosition: "-88px -110px" }}
              className="settingUserIcon "
            ></div>
          </div>
          Cài đặt & quyền riêng tư
        </div>
        <div className=""><GrNext size={24}/></div>
      </div>

      <div className="p-2 hover:bg-gray-200 rounded-lg flex items-center justify-between cursor-pointer">
        <div className="font-semibold text-[15px] flex gap-2 items-center">
          <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center  ">
            <div
            style={{ backgroundPosition: " 0px -344px" }}
              className="heplpUser"
            ></div>
          </div>
          Trợ giúp & hỗ trợ
        </div>
        <div className=""><GrNext size={24}/></div>
      </div>

      <div className="p-2 hover:bg-gray-200 rounded-lg flex items-center justify-between cursor-pointer">
        <div className="font-semibold text-[15px] flex gap-2 items-center">
          <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center  ">
            <div
              className="darkLight"
            ></div>
          </div>
          Màn hình & trợ năng
        </div>
        <div className=""><GrNext size={24}/></div>
      </div>

      <div className="p-2 hover:bg-gray-200 rounded-lg flex items-center justify-between cursor-pointer">
        <div className="font-semibold text-[15px] flex gap-2 items-center">
          <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center  ">
            <div
            style={{ backgroundPosition: " 0px -212px" }}
              className="heplpUser"
            ></div>
          </div>
          Đóng góp ý kiến
        </div>
      </div>


      <div onClick={handleLogout} className="p-2 hover:bg-gray-200 rounded-lg flex items-center justify-between cursor-pointer">
        <div className="font-semibold text-[15px] flex gap-2 items-center">
          <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center  ">
            <div
            style={{ backgroundPosition: "0px -492px" }}
              className="logOut"
            ></div>
          </div>
          Đăng xuất
        </div>
      </div>

      <div><ShotFooter/></div>
    </div>

    

    
  );
}
