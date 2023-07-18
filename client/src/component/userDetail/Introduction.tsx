import { AiFillHeart } from "react-icons/ai";
// import ReactPlayer from 'react-player'
import { BsHouseFill } from "react-icons/bs";
import { MdCastConnected } from "react-icons/md";
import { GiHandBag, GiGraduateCap } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { userData } from "../../Dto/Dto";
import { useState } from "react";
import privateAxios from "../../fetchConfig/privateAxios";

export default function Introduction({
  userData,
  fetchDataUser,
  userIsWho
}: {
  userData: userData | undefined;
  fetchDataUser:() => Promise<void>
  userIsWho:string | undefined
}) {
  const [story, setStory] = useState(false);
  const [valueStory, setValueStory] = useState('');

  // changestory
  const handleChangeStory = async () =>{
    try {
      const result = await privateAxios.post('user/changestory', {story:valueStory})
      if(result.status===201){
        setStory(false)
        fetchDataUser()
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="">
      <div className="text-xl font-bold">Giới thiệu</div>
      <div className="text-center text-[15px] p-[6px] pb-4 border-b border-gray-300 font-semibold">
        {userData?.bio}
      </div>
      {userIsWho==="me"&&<button
        onClick={() => setStory(true)}
        className="w-full py-2 rounded bg-gray-300 font-semibold text-sm"
      >
        Chỉnh sửa tiểu sử
      </button>}
      <div className="">
        {userData?.liveAt && (
          <div className="flex items-center gap-2 mt-[16px]">
            <span className="text-gray-400">
              <BsHouseFill size={24} />
            </span>
            Sống tại<strong>{userData?.liveAt}</strong>
          </div>
        )}
        {userIsWho==="me"&&<>
          {!story ? (
            <button className="w-full py-2 rounded bg-gray-300 font-semibold text-sm mt-2">
              Chỉnh sửa chi tiết
            </button>
          ) : (
            <>
              <textarea value={valueStory} onChange={(e)=>setValueStory(e.target.value)} placeholder="Mô tả về bạn" className="w-full resize-none p-2 border border-gray-400 placeholder:text-center rounded outline-none h-20 bg-gray-200 mt-2 placeholder:text-gray-400 placeholder:font-semibold" />
              <div className="flex items-center justify-end gap-2 mt-2 text-sm">
                <button onClick={()=>setStory(false)} className="p-2 bg-gray-400 rounded-lg font-semibold">Hủy</button>
                <button onClick={handleChangeStory} className="btn-primary">Lưu</button>
              </div>
            </>
          )}
        </>}
        {userData?.from && (
          <div className="flex items-center gap-2 mt-[16px]">
            <span className="text-gray-400">
              <IoLocationSharp size={24} />
            </span>
            Đến từ <strong>{userData?.from}</strong>
          </div>
        )}

        {userData?.Wordplace && (
          <div className="flex items-center gap-2 mt-[16px]">
            <span className="text-gray-400">
              <GiHandBag size={24} />
            </span>
            Làm việc tại <strong>{userData?.Wordplace}</strong>
          </div>
        )}
        {userData?.university && (
          <div className="flex items-start gap-2 mt-[16px]">
            <span className="text-gray-400 inline">
              <GiGraduateCap size={24} />
            </span>
            <span>
              Học tại
              <strong>{userData?.university}</strong>
            </span>
          </div>
        )}
      </div>
      <div className="grid grid-cols-3 mt-3 gap-2">
        <div className="flex flex-col">
          <div className="h-56 cursor-pointer flex items-center justify-center overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover"
              src="https://www.iloveasia.su/wp-content/uploads/2021/02/lisa.jpg"
            />
          </div>
          <div className="text-center">Bộ sưu tập</div>
        </div>
        <div className="flex flex-col">
          <div className="h-56 cursor-pointer flex items-center justify-center overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover"
              src="https://pbs.twimg.com/media/Ex0Glp_WEAAcQ46?format=jpg&name=large"
            />
          </div>
          <div className="text-center">Bộ sưu tập</div>
        </div>
        <div className="flex flex-col">
          <div className="h-56 cursor-pointer flex items-center justify-center overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover"
              src="https://thuthuatnhanh.com/wp-content/uploads/2021/06/hinh-anh-Lisa-Black-Pink-o-concert.jpg"
            />
          </div>
          <div className="text-center">Bộ sưu tập</div>
        </div>
      </div>
    </div>
  );
}
