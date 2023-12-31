import {navBar} from "../../assets/Const/Const"
import arrowDown from "../../assets/navBar/arrowDown.svg";
import arrowUp from "../../assets/navBar/arrowUp.svg";
import { useState } from "react";
import "../home/index.css"
import ShotFooter from "../footer/ShotFooter";
import Avatar from "../abc/Avatar";
import { useAppSelector } from "../../redux/hook";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [numberNav, setNumberNav] = useState(6);
  const [showScroll, setShowScroll] = useState(false);
  const curentUser = useAppSelector((state) => state.auth.currentUser);
  const avatar = useAppSelector((state) => state.auth.currentUser?.avatar);

  return (
    <div style={{overflowY:showScroll?'scroll':'hidden'}} onMouseOver={()=>setShowScroll(true)} onMouseOut={()=>setShowScroll(false)} className="navBar h-[690px]">
      <div className="pl-2 border-b border-gray-300 ">
      <div
            className="flex items-center pl-2 gap-2 h-11 hover:bg-gray-200 font-medium text-[15px] rounded cursor-pointer mt-2"
          >
            <Avatar size={'w-9 h-9'} avarta={avatar}/>
            {curentUser?.firstName} {curentUser?.lastName}
          </div>
        {navBar.slice(0, numberNav).map((item, index) => (
          <Link
          to={`${item.link}`}
            key={index}
            className="flex items-center pl-2 gap-2 h-11 hover:bg-gray-200 font-medium text-[15px] rounded cursor-pointer mt-2"
          >
            <div className="w-9 h-9 overflow-hidden rounded-full flex items-center justify-center ">
              <img className="object-cover w-full" src={item.img} />
            </div>
            {item.name}
          </Link>
        ))}
        {numberNav === 6 && (
          <div
            onClick={() => setNumberNav(16)}
            className="mb-5 my-2 pl-2 hover:bg-gray-200 h-11 font-medium text-[15px] rounded cursor-pointer flex items-center gap-2 "
          >
            <div className=" overflow-hidden  w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
              <img className="object-cover w-5 h-5" src={arrowDown} />
            </div>
            Xem thêm
          </div>
        )}
        {numberNav === 16 && (
          <div
            onClick={() => setNumberNav(6)}
            className="mb-5 my-2 pl-2 hover:bg-gray-200 h-11 font-medium text-[15px] rounded cursor-pointer flex items-center gap-2 "
          >
            <div className=" w-9 h-9 overflow-hidden rounded-full bg-gray-200 flex items-center justify-center ">
              <img className="object-cover w-5 h-5" src={arrowUp} />
            </div>
            Ẩn bớt
          </div>
        )}
      </div>

      <div className="pl-4">
        <div className="text-[17px] text-[#65676B] font-semibold pt-3 pb-1">Lối tắt của bạn</div>
        <div className="flex gap-2 items-center hover:bg-gray-200 cursor-pointer py-2"><div className="overflow-hidden  w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center"><img src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-1/346087826_814770883412128_4396235177764233449_n.jpg?stp=c127.83.95.95a_cp0_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=c6021c&_nc_ohc=R396ZtZzutYAX86EMmj&_nc_ht=scontent.fhan15-1.fna&oh=00_AfC0P-Ml5u2jSz_98B27AM4epXzVXgcHAfYZWAn96WWHiw&oe=6498F68E"/></div> Dân tộc mông7</div>
        <div className="flex gap-2 items-center hover:bg-gray-200 cursor-pointer py-2"><div className="overflow-hidden  w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center"><img src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-1/346087826_814770883412128_4396235177764233449_n.jpg?stp=c127.83.95.95a_cp0_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=c6021c&_nc_ohc=R396ZtZzutYAX86EMmj&_nc_ht=scontent.fhan15-1.fna&oh=00_AfC0P-Ml5u2jSz_98B27AM4epXzVXgcHAfYZWAn96WWHiw&oe=6498F68E"/></div> Dân tộc mông7</div>
        <div className="flex gap-2 items-center hover:bg-gray-200 cursor-pointer py-2"><div className="overflow-hidden  w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center"><img src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-1/346087826_814770883412128_4396235177764233449_n.jpg?stp=c127.83.95.95a_cp0_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=c6021c&_nc_ohc=R396ZtZzutYAX86EMmj&_nc_ht=scontent.fhan15-1.fna&oh=00_AfC0P-Ml5u2jSz_98B27AM4epXzVXgcHAfYZWAn96WWHiw&oe=6498F68E"/></div> Dân tộc mông7</div>
        <div className="flex gap-2 items-center hover:bg-gray-200 cursor-pointer py-2"><div className="overflow-hidden  w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center"><img src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-1/346087826_814770883412128_4396235177764233449_n.jpg?stp=c127.83.95.95a_cp0_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=c6021c&_nc_ohc=R396ZtZzutYAX86EMmj&_nc_ht=scontent.fhan15-1.fna&oh=00_AfC0P-Ml5u2jSz_98B27AM4epXzVXgcHAfYZWAn96WWHiw&oe=6498F68E"/></div> Dân tộc mông7</div>
        <div className="flex gap-2 items-center hover:bg-gray-200 cursor-pointer py-2"><div className="overflow-hidden  w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center"><img src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-1/346087826_814770883412128_4396235177764233449_n.jpg?stp=c127.83.95.95a_cp0_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=c6021c&_nc_ohc=R396ZtZzutYAX86EMmj&_nc_ht=scontent.fhan15-1.fna&oh=00_AfC0P-Ml5u2jSz_98B27AM4epXzVXgcHAfYZWAn96WWHiw&oe=6498F68E"/></div> Dân tộc mông7</div>
      </div>

      <div className="block pb-6"><ShotFooter/></div>
    </div>
  );
}
