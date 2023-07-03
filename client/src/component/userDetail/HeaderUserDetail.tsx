import "./index.css";
import {FaUserPlus} from 'react-icons/fa'
import {BsMessenger, BsChevronDown, BsFillCaretDownFill, BsThreeDots} from 'react-icons/bs'
import {useState} from 'react'
import AvatarUserStatus from "./AvatarUserStatus";


export default function HeaderUserDetail({coverImage, avarta, firstName, lastName}:{coverImage:string|undefined, avarta:string|undefined, firstName:string|undefined, lastName:string|undefined}) {
  const [pickNav, setPickNav] = useState<string>("Bài viết")

  const navUserDetail:{id:number, name:string, icon?:JSX.Element}[] = [
    {id:1, name: "Bài viết" },
    {id:2, name: "Giới thiệu" },
    {id:3, name: "Bạn bè" },
    {id:4, name: "Ảnh" },
    {id:5, name: "Video" },
    {id:6, name: "Thể thao" },
    {id:7, icon:<BsFillCaretDownFill/>, name: "Xem thêm" },
  ];
  console.log(avarta);

  const navUserCss = 'text-[#65676B] rounded hover:bg-gray-200' 
  const navUserCssPick = 'text-[hsl(214,89%,52%)] border-b-4 border-[hsl(214,89%,52%)]' 
  
  return (
    <div>
      <div className="h-[430px] relative flex items-center justify-center overflow-hidden">
        <div
          style={{
            filter:"blur(10px)",
            backgroundImage:
              `url(${coverImage})`,
          }}
          className="coverPhoto w-full h-full absolute -z-20 "
        ></div>
        <div className="abc absolute w-full h-full -z-10 "></div>
        <div className="w-[1095px] h-full flex items-center mx-auto justify-center overflow-hidden rounded-b-lg">
          <img
            className="object-cover w-full"
            src={`${coverImage}`}
          />
        </div>
      </div>
      <div className="w-[1030px] mx-auto ">
        <div className=" relative flex justify-between items-center mb-5 ">
          <div className=" flex items-center gap-5  min-h-[84px]">
            <div className=" absolute bottom-0"><AvatarUserStatus avarta={avarta} size={164} border={5} sizeBig={16}/></div>


            <div className="w-[180px]"></div>
            <div className="text-[32px] font-bold mt-8 mb-4">{firstName} {lastName} <span className="text-[28px] font-normal">(Lili)</span></div>
          </div>
          <div className="flex gap-2 items-center text-[15px]"><div><button className="btn-primary flex items-center gap-2 "><FaUserPlus size={20}/> Thêm bạn bè</button></div>
          <div><button className="btn-second flex items-center gap-2"><BsMessenger/> Nhắn tin</button></div>
          <div><button className="btn-second flex items-center gap-2"><BsChevronDown/></button></div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-2 flex justify-between items-center">
          <div className="w-[583px] h-full grid grid-flow-col gap-2">
          {navUserDetail.map((item, index) => (
            <div key={index} onClick={()=>setPickNav(item.name)}>
              <button className={`${pickNav===item.name?navUserCssPick:navUserCss} text-[15px] font-semibold p-3 flex items-center gap-1 whitespace-nowrap`}>{item.name} {item.icon}</button>
            </div>
          ))}
        </div>
        <div><button className="btn-second"><BsThreeDots/></button></div>
        </div>
      </div>

      
    </div>
  );
}
