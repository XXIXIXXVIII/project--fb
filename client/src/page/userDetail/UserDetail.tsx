import {useParams} from 'react-router-dom'

import ShotFooter from "../../component/footer/ShotFooter";
import HeaderUserDetail from "../../component/userDetail/HeaderUserDetail";
import ImageUser from "../../component/userDetail/ImageUser";
import Introduction from "../../component/userDetail/Introduction";
import MainUserDetail from "../../component/userDetail/MainUserDetail";

export default function UserDetail() {
  const nav = useParams()

  return (
    <div className=" mt-0">
      <div className="border-b border-gray-200 shadow-2xl">
        <HeaderUserDetail />
      </div>
      <span style={{backgroundImage:"url('https://static.xx.fbcdn.net/images/emoji.php/v9/t0/1.5/20/1f600.png')"}}>abc</span>
      <div className="bg-gray-200 relative">
        <div className="flex w-[1030px] mx-auto pt-5">
          <div className=" basis-[41%] mt-4 top-0 left-0 inset-0 sticky bottom-0 h-fit">
            <div className=" shadow-lg border border-gray-100 bg-white p-3 rounded-xl w-full"><Introduction /></div>
            <div className="mt-5  shadow-lg border border-gray-100 bg-white p-3 rounded-xl w-full"><ImageUser/></div>
            <div className="mt-5"><ShotFooter/></div>
          </div>
          <div className="flex-1 ml-3"><MainUserDetail/></div>
        </div>
      </div>
    </div>
  );
}
