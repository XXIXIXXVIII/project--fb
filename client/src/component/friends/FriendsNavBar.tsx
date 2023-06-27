import {useState} from 'react'

import { RiSettings5Fill } from "react-icons/ri";
import { FaUserFriends, FaBirthdayCake } from "react-icons/fa";
import { GrNext } from "react-icons/gr";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { RiUserSharedFill, RiUserAddFill,RiUserSettingsFill } from "react-icons/ri";
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function FriendsNavBar() {
  const {nav} = useParams()

  const [pick, setPick] = useState<string>()

  useEffect(()=>{
    if(nav==='birthdays'){setPick("Sinh nhật")}else{setPick('Trang chủ')}
  },[nav])


  const navIcon = [
    { icon: <FaUserFriends size={20}/>, title: "Trang chủ", link:'/friends' },
    { icon: <RiUserSharedFill size={20}/>, title: "Lời mời kết bạn", iconNext: <GrNext size={20}/>, link:'/friends/requests' },
    { icon: <RiUserAddFill size={20}/>, title: "Gợi ý", iconNext: <GrNext size={20}/>, link:'/friends/suggestions' },
    { icon: <BsFillPersonLinesFill size={20}/>, title: "Tất cả bạn bè", iconNext: <GrNext size={20}/>, link:'/friends/list' },
    { icon: <FaBirthdayCake size={20}/>, title: "Sinh nhật", link:'/friends/birthdays'},
    { icon: <RiUserSettingsFill size={20}/>, title: "Danh sách tùy chỉnh", iconNext: <GrNext size={20}/>, link:'/friends/friendlist' },
  ];

  return (
    <div>
      <div className="flex items-center justify-between p-2">
        <div className="text-2xl font-bold">Bạn bè</div>
        <div className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center cursor-pointer">
          <RiSettings5Fill size={24} />
        </div>
      </div>
      {navIcon.map((item,index)=>(
        <Link key={index} to={item.link||'/'} onClick={()=>setPick(item.title)}  className="flex items-center justify-between p-2 hover:bg-slate-100 rounded-lg cursor-pointer">
          <div className=" flex items-center gap-3 ">
            <div className={`w-10 h-10  rounded-full  flex items-center justify-center ${pick===item.title?'bg-blue-500 text-white':'bg-gray-200'}`}>
              {item.icon}
            </div>
            <div className="text-[17px] font-semibold">{item.title}</div>
          </div>
          <div className='text-red-500'>{item.iconNext}</div>
        </Link>
      ))}
    </div>
  );
}
