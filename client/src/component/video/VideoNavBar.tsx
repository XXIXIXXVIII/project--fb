import searchIcon from "../../assets/HeaderDefault/searchIcon.svg";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { RiSettings5Fill } from "react-icons/ri";
import {
  BsCollectionPlayFill,
  BsFillRocketTakeoffFill,
  BsBookmarkFill,
} from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { GiVideoConference } from "react-icons/gi";
import { FaPhotoVideo } from "react-icons/fa";

export default function VideoNavBar() {
  const { nav } = useParams();

  const [pick, setPick] = useState<string>();

  useEffect(() => {
    if (nav === "live") {
      setPick("Trực tiếp");
    } 
    if (nav === "shows") {
      setPick("Chương trình");
    } 
    if (nav === "topic") {
      setPick("Khám phá");
    } 
    if (nav === "saved") {
      setPick("Video đã lưu");
    } 
    if(nav===undefined) {
      setPick('Trang chủ')
    }
    
  }, [nav]);

  const navIcon = [
    {
      icon: <BsCollectionPlayFill size={20} />,
      title: "Trang chủ",
      stylePick: 'bg-blue-500 text-white',
      link: "/watch",
    },
    {
      icon: <FaVideo size={20} />,
      title: "Trực tiếp",
      stylePick: 'bg-[hsl(350,87%,55%)] text-white',
      link: "/watch/live",
    },
    {
      icon: <FaPhotoVideo size={20} />,
      title: "Reels",
      link: "/reel",
    },
    
    {
      icon: <GiVideoConference size={20} />,
      title: "Chương trình",
      stylePick: 'bg-[#2ABBA7] text-white',
      link: "/watch/shows",
    },
    {
      icon: <BsFillRocketTakeoffFill size={20} />,
      title: "Khám phá",
      stylePick: 'bg-[#9360F7] text-white',
      link: "/watch/topic",
    },
    {
      icon: <BsBookmarkFill size={20} />,
      title: "Video đã lưu",
      stylePick: 'bg-[#F7B928] text-white',
      link: "/watch/saved",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between p-2">
        <div className="text-2xl font-bold">Watch</div>
        <div className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center cursor-pointer">
          <RiSettings5Fill size={24} />
        </div>
      </div>
      <div className="w-full mt-3 px-1">
        <label
          htmlFor="searchUser"
          className=" relative rounded-full bg-[#F0F2F5]  flex items-center justify-center cursor-pointer"
        >
          <div className=" w-4 h-4 absolute top-1/2 -translate-y-1/2 left-4">
            <img className="w-full object-cover" src={searchIcon} />
          </div>
          <input
            id="searchUser"
            className="bg-transparent outline-none w-full ml-10 py-2 placeholder:text-gray-600 placeholder:text-[15px]"
            autoComplete="off"
            placeholder="Tìm kiếm video"
          />
        </label>
      </div>
      <div className="mt-4">
        {navIcon.map((item, index) => (
          <Link
            key={index}
            to={item.link || "/"}
            onClick={() => setPick(item.title)}
            className="flex items-center justify-between p-2 hover:bg-slate-100 rounded-lg cursor-pointer"
          >
            <div className=" flex items-center gap-3 ">
              <div
                className={`w-10 h-10  rounded-full  flex items-center justify-center ${
                  pick === item.title ? `${item.stylePick}` : "bg-gray-200"
                }`}
              >
                {item.icon}
              </div>
              <div className="text-[17px] font-semibold">{item.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
