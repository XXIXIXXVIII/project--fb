import { useState, useEffect } from "react";

import newFeed from "../../assets/Home/newFeed.svg";
import newFeedPick from "../../assets/Home/newFeedPick.svg";
import reels from "../../assets/Home/Reels.svg";
import reelsPick from "../../assets/Home/reelsPick.svg";
import HeaderPick from "../../component/header/HeaderPick";
import Slick from "../../component/home/Slick";
import NewPost from "../../component/home/NewPost";
import Post from "../../component/abc/Post";
import { useAppSelector } from "../../redux/hook";
import { useNavigate } from "react-router-dom";
import CreatePost from "../../component/abc/CreatePost";

const icon = [
  { icon: newFeed, iconPick: newFeedPick, name:'Tin', tippy:"News feed"},
  { icon: reels, iconPick: reelsPick, name: 'Reels', tippy:"Videos" },
];

export default function Home() {
  const [pick, setPick] = useState("/src/assets/Home/newFeed.svg");
  const navigate = useNavigate()
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  useEffect(()=>{
    if(currentUser){
      if(Object.keys(currentUser).length === 0){
        navigate("/login")
      }
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentUser])

  return (
      <div>
        <div><CreatePost/></div>
        <div className="mt-6 w-[590px] mx-auto ">
          <div className="h-[292px] bg-white rounded-xl shadow-xl border border-gray-200">
            <div className=" flex items-center justify-around px-3  ">
              {icon.map((item, index) => (
                <div key={index} className="h-[60px] w-full border-b border-gray-300">
                  <HeaderPick
                    icon={item.icon}
                    iconPick={item.iconPick}
                    pick={pick}
                    setPick={setPick}
                    name={item.name}
                    tippy={item.tippy}
                  />
                </div>
              ))}
            </div>
            <div>
              <Slick/>
            </div>
          </div>
          <div className="mt-6">
            <NewPost/>
          </div>
          <div className="mt-6">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
          </div>
         
        </div>
      </div>

  );
}
