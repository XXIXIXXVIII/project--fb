import { BsDot } from "react-icons/bs";
import '../home/index.css'

export default function ShotFooter() {
  return (
    <div className="text-[13px] text-gray-600 px-1 mt-2">
      <span className="mr-1">Quyền riêng tư</span>
      <span><BsDot size={12} className="inline"/> Điều khoản</span>
      <span><BsDot className="inline ml-1"/> Quảng cáo</span>
      <span><BsDot className="inline ml-1"/> Lựa chọn quảng cáo <span style={{backgroundPosition: "-176px -86px"}} className="settingUserIcon items-center justify-center w-3 h-3"></span></span>
     
      <span><BsDot className="inline ml-1"/> Cookie</span>
      <span><BsDot className="inline ml-1"/> Xem thêm</span>
      <span><BsDot className="inline ml-1"/> Meta © 2023</span>
    </div>
  );
}
