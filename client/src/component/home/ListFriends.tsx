import videoCall from "../../assets/Home/videoCall.svg";
import threeDot from "../../assets/Home/threeDot.svg";
import searchIcon from "../../assets/Home/searchIcon.svg";
import Avatar from "../abc/Avatar";
import { RxDotFilled } from "react-icons/rx";
import { useState } from "react";

export default function ListFriends() {
  const [showScroll, setShowScroll] = useState(false)

  return (
    <div  style={{overflowY:showScroll?'scroll':'hidden'}} onMouseOver={()=>setShowScroll(true)} onMouseOut={()=>setShowScroll(false)}>
      <div className="text-[#65676B] font-semibold">Sinh nhật</div>
      <div className="flex w-[360px] items-center justify-center gap-1 hover:bg-gray-200 rounded-lg cursor-pointer px-2 overflow-hidden py-2">
        <div className="giftBox text-[15px] "></div>Hôm nay là sinh nhật của
        <div className="font-semibold">Võ Thị Tuyết Nhi</div>
      </div>
      <div>
        <div className="pt-5 pb-1 border-t border-gray-300 flex w-[360px] items-center justify-between px-1">
          <div className="text-[#65676B] font-semibold">Người liên hệ</div>
          <div className="flex items-center justify-center gap-5">
            <div className="w-8 h-8 rounded-full hover:bg-gray-300 flex items-center justify-center cursor-pointer">
              <img className="object-cover w-4" src={videoCall} />
            </div>
            <div className="w-8 h-8 rounded-full hover:bg-gray-300 flex items-center justify-center cursor-pointer">
              <img className="object-cover w-4" src={searchIcon} />
            </div>
            <div className="w-8 h-8 rounded-full hover:bg-gray-300 flex items-center justify-center cursor-pointer">
              <img className="object-cover w-4" src={threeDot} />
            </div>
          </div>
        </div>
        <div className="px-2 py-2 rounded-lg hover:bg-[rgba(0,0,0,0.05)] flex gap-2 items-center text-[15px] font-semibold cursor-pointer">
          <div className="relative">
            <Avatar size={"w-10"}/>
            <div className="text-green-500 absolute -bottom-4 -right-4">
              <RxDotFilled size={40} />
            </div>
          </div>
          <div>Lalisa Manoban</div>
        </div>
        
      </div>
    </div>
  );
}
