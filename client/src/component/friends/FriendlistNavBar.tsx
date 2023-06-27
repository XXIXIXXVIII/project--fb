import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import { RiFileUserFill } from "react-icons/ri";
import { FaBan, FaStar } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi";

export default function FriendlistNavBar() {
  return (
    <div>
      <div className="mx-2 mt-3 pb-3 flex gap-2 items-center">
      <Link to={'/friends'} className="text-gray-600 w-9 h-9 rounded-full flex items-center justify-center hover:bg-slate-200">
        <IoMdArrowBack size={22} />
      </Link>
      <div>
        <div className="text-[13px] text-[#65676B]">Bạn bè</div>
        <div className="text-2xl font-bold">Danh sách tùy chỉnh</div>
      </div>
    </div>
    <div className=" w-full overflow-y-scroll h-[590px]">
      <div className='flex items-center gap-3 p-2 hover:bg-gray-50 cursor-pointer rounded-lg'><div className='w-[60px] h-[60px] rounded-full bg-gray-200 flex items-center justify-center'><FaBan size={24}/></div><div className='text-[17px] font-semibold'>Bị hạn chế</div></div>
      <div className='flex items-center gap-3 p-2 hover:bg-gray-50 cursor-pointer rounded-lg'><div className='w-[60px] h-[60px] rounded-full bg-gray-200 flex items-center justify-center'><FaStar size={24}/></div><div className='text-[17px] font-semibold'>Bạn thân</div></div>
      <div className='flex items-center gap-3 p-2 hover:bg-gray-50 cursor-pointer rounded-lg'><div className='w-[60px] h-[60px] rounded-full bg-gray-200 flex items-center justify-center'><RiFileUserFill size={24}/></div><div className='text-[17px] font-semibold'>Người quen</div></div>
      <div className='flex items-center gap-3 p-2 hover:bg-gray-50 cursor-pointer rounded-lg text-blue-500'><div className='w-[60px] h-[60px] rounded-full bg-blue-50 flex items-center  justify-center'><HiOutlinePlus size={24}/></div><div className='text-[17px] font-semibold'>Tạo danh sách</div></div>
      </div>
    </div>
  )
}
