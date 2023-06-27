import { Link } from "react-router-dom";
import searchIcon from "../../assets/HeaderDefault/searchIcon.svg";
import { IoMdArrowBack } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

export default function ListNavBar() {
  return (
    <div>
      <div className="mx-2 mt-3 pb-3 border-b border-gray-300">
        <div className="flex gap-2 items-center ">
          <Link
            to={"/friends"}
            className="text-gray-600 w-9 h-9 rounded-full flex items-center justify-center hover:bg-slate-200"
          >
            <IoMdArrowBack size={22} />
          </Link>
          <div>
            <div className="text-[13px] text-[#65676B]">Bạn bè</div>
            <div className="text-2xl font-bold">Tất cả bạn bè</div>
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
              placeholder="Tìm kiếm bạn bè"
            />
          </label>
        </div>
      </div>

      <div className=" mt-4">
        <div className="text-[17px] font-semibold mx-2">123 người bạn</div>
        <div className="flex items-center justify-between p-2 mt-1 hover:bg-gray-200 cursor-pointer rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-[60px] h-[60px] overflow-hidden rounded-full flex items-center justify-center">
              <img src="https://beauty.phongkhamsaigonmekong.com/wp-content/uploads/2021/11/12-1.jpg" />
            </div>
            <div>
              <div className="text-[15px] font-semibold">Kim Yoo-jung</div>
              <div className="text-[13px] text-[#65676B]">8 bạn chung</div>
            </div>
          </div>
          <div className="w-9 h-9 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer">
            <BsThreeDots size={20} />
          </div>
        </div>
        <div className="flex items-center justify-between p-2 mt-1 hover:bg-gray-200 cursor-pointer rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-[60px] h-[60px] overflow-hidden rounded-full flex items-center justify-center">
              <img src="https://beauty.phongkhamsaigonmekong.com/wp-content/uploads/2021/11/12-1.jpg" />
            </div>
            <div>
              <div className="text-[15px] font-semibold">Kim Yoo-jung</div>
              <div className="text-[13px] text-[#65676B]">8 bạn chung</div>
            </div>
          </div>
          <div className="w-9 h-9 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer">
            <BsThreeDots size={20} />
          </div>
        </div>
        <div className="flex items-center justify-between p-2 mt-1 hover:bg-gray-200 cursor-pointer rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-[60px] h-[60px] overflow-hidden rounded-full flex items-center justify-center">
              <img src="https://beauty.phongkhamsaigonmekong.com/wp-content/uploads/2021/11/12-1.jpg" />
            </div>
            <div>
              <div className="text-[15px] font-semibold">Kim Yoo-jung</div>
              <div className="text-[13px] text-[#65676B]">8 bạn chung</div>
            </div>
          </div>
          <div className="w-9 h-9 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer">
            <BsThreeDots size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
