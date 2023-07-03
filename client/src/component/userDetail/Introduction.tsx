import { AiFillHeart } from "react-icons/ai";
// import ReactPlayer from 'react-player'
import { BsHouseFill } from "react-icons/bs";
import { MdCastConnected } from "react-icons/md";
import { GiHandBag, GiGraduateCap } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import Lisa from "../../assets/UserDetail/Lisa.mp4";

export default function Introduction({bio}:{bio:string|undefined}) {

  return (
    <div className="">
      <div className="text-xl font-bold">Giới thiệu</div>
      <div className="text-center text-[15px] p-[6px] pb-4 border-b border-gray-300">
        {bio}
      </div>
      <div className="">
        <div className="flex items-center gap-2 mt-[16px]">
          <span className="text-gray-400">
            <BsHouseFill size={24} />
          </span>
          Sống tại<strong>Hà Nội</strong>
        </div>
        <div className="flex items-center gap-2 mt-[16px]">
          <span className="text-gray-400">
            <IoLocationSharp size={24} />
          </span>
          Đến từ <strong>Ha-Nam, Hà Nam, Vietnam</strong>
        </div>
        <div className="flex items-center gap-2 mt-[16px]">
          <span className="text-gray-400">
            <AiFillHeart size={24} />
          </span>
          Độc thân
        </div>
        <div className="flex items-center gap-2 mt-[16px]">
          <span className="text-gray-400">
            <GiHandBag size={24} />
          </span>
          Đã làm việc tại <strong>VINGROUP</strong>
        </div>
        <div className="flex items-start gap-2 mt-[16px]">
          <span className="text-gray-400 inline">
            <GiGraduateCap size={24} />
          </span>
          <span>
            Học Tin học tài chính kế toán tại{" "}
            <strong>Học viện Tài Chính (Academy Of Finance)</strong>
          </span>
        </div>
        <div className="flex items-start gap-2 mt-[16px]">
          <span className="text-gray-400 inline">
            <MdCastConnected size={24} />
          </span>
          <span>
            {" "}
            Có <strong>142 người</strong> theo dõi
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-3 gap-2">
        <div className="flex flex-col">
          <div  className="h-56 cursor-pointer flex items-center justify-center overflow-hidden rounded-xl">
            <img className="w-full h-full object-cover" src="https://www.iloveasia.su/wp-content/uploads/2021/02/lisa.jpg"/>
          </div>
          <div className="text-center">Bộ sưu tập</div>
        </div>
        <div className="flex flex-col">
          <div  className="h-56 cursor-pointer flex items-center justify-center overflow-hidden rounded-xl">
            <img className="w-full h-full object-cover" src="https://pbs.twimg.com/media/Ex0Glp_WEAAcQ46?format=jpg&name=large"/>
          </div>
          <div className="text-center">Bộ sưu tập</div>
        </div>
        <div className="flex flex-col">
          <div  className="h-56 cursor-pointer flex items-center justify-center overflow-hidden rounded-xl">
            <img className="w-full h-full object-cover" src="https://thuthuatnhanh.com/wp-content/uploads/2021/06/hinh-anh-Lisa-Black-Pink-o-concert.jpg"/>
          </div>
          <div className="text-center">Bộ sưu tập</div>
        </div>

      </div>
    </div>
  );
}
