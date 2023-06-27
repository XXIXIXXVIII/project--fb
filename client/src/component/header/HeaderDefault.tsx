import { useState } from "react";


import logoFb from "../../assets/HeaderDefault/logoFb.svg";
import searchIcon from "../../assets/HeaderDefault/searchIcon.svg";
import HeaderPick from "./HeaderPick";
import homePick from "../../assets/HeaderDefault/homePick.svg";
import friendsPick from "../../assets/HeaderDefault/friendsPick.svg";
import videosPick from "../../assets/HeaderDefault/videosPick.svg";
import shopsPick from "../../assets/HeaderDefault/shopsPick.svg";
import gamesPick from "../../assets/HeaderDefault/gamesPick.svg";
import home from "../../assets/HeaderDefault/home.svg";
import friend from "../../assets/HeaderDefault/friend.svg";
import videos from "../../assets/HeaderDefault/videos.svg";
import shops from "../../assets/HeaderDefault/shops.svg";
import games from "../../assets/HeaderDefault/games.svg";

import { Link } from 'react-router-dom';
import NavRight from "./NavRight";

export default function HeaderDefault() {
  const [showSearchIcon, setShowSearchIcon] = useState(true);

  const [pick, setPick] = useState(()=>"/src/assets/HeaderDefault/home.svg");


  const navHome = [
    { icon: home, iconPick: homePick, tippy: "Trang chủ", link:'/' },
    { icon: friend, iconPick: friendsPick, tippy: "Bạn bè", link: '/friends' },
    { icon: videos, iconPick: videosPick, tippy: "Watch", link: '/watch' },
    { icon: shops, iconPick: shopsPick, tippy: "Marketplace" },
    { icon: games, iconPick: gamesPick, tippy: "Trò chơi" },
  ];



  return (
    <div className="w-[98%] h-14 mx-auto flex items-center justify-between ">
      <div className="flex gap-2 py-2">
        <Link to={'/'} className="w-10 overflow-hidden">
          <img className="w-full object-cover" src={logoFb} />
        </Link>
        <label
          htmlFor="search"
          className=" relative rounded-full bg-[#F0F2F5] flex items-center justify-center cursor-pointer w-72"
        >
          {showSearchIcon && (
            <div className=" w-4 h-4 absolute top-1/2 -translate-y-1/2 left-4">
              <img className="w-full object-cover" src={searchIcon} />
            </div>
          )}
          <input
            onFocus={() => setShowSearchIcon(false)}
            onBlur={() => setShowSearchIcon(true)}
            style={{ marginLeft: !showSearchIcon ? "" : "30px" }}
            id="search"
            className="bg-transparent outline-none px-4 w-full placeholder:text-gray-600 placeholder:text-[15px]"
            autoComplete="off"
            placeholder="Tìm kiếm trên Facebook"
          />
        </label>
      </div>
      <div className="w-[583px] h-full grid grid-flow-col mr-[8.5rem]">
        {navHome.map((item, index) => (
          <Link to={item.link||""} key={index}>
            <HeaderPick
              icon={item.icon}
              iconPick={item.iconPick}
              pick={pick}
              setPick={setPick}
              tippy={item.tippy}
            />
          </Link>
        ))}
      </div>

        <div>
          <NavRight/>
        </div>


    </div>
  );
}
