
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import { useEffect, useState } from 'react';
import privateAxios from '../../fetchConfig/privateAxios';
import { userData } from '../../Dto/Dto';
import Success from '../Alert/Success';

export default function SuggestionsNavbar() {
  const [users, setUsers] = useState<userData[]>()
  const [alert, setAlert] = useState(false)

  const fetchSuggestions = async ()=>{
    try {
      const result = await privateAxios.get('/user/alluser')
      setUsers(result.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchSuggestions()
  },[])

  const handleSentFriendRequest=async(userId:string|undefined)=>{
    const result = await privateAxios.post('/user/reqfriend', {friendId:userId})
    setAlert(true)
    fetchSuggestions()
  }

  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      setAlert(false)
    },4000)
    return ()=>clearTimeout(timeOut)
  },[alert])

  return (
    <div>
      {alert&&<div className='fixed left-1/2'><Success title='Đã gửi lời mời kết bạn'/></div>}
    <div className="mx-2 mt-3 pb-3 flex gap-2 items-center">
      <Link to={'/friends'} className="text-gray-600 w-9 h-9 rounded-full flex items-center justify-center hover:bg-slate-200">
        <IoMdArrowBack size={22} />
      </Link>
      <div>
        <div className="text-[13px] text-[#65676B]">Bạn bè</div>
        <div className="text-2xl font-bold">Gợi ý</div>
      </div>
    </div>
    <div className=" w-full overflow-y-scroll h-[760px]">
      <div className="mx-2">
        <div className="text-[17px] font-semibold">Những người bạn có thể biết</div>

      </div>

      {/* ===========item=============== */}
      {users&&users.map((user:userData)=><div key={user.id} className="flex gap-4 items-start hover:bg-slate-100 p-2 rounded-lg cursor-pointer mt-2">
        <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full overflow-hidden">
          <img
            className="object-cover aspect-square w-full h-full"
            src={user.avatar}
          />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-sm">{user.firstName} {user.lastName}</div>
          <div className="relative mt-2">
            <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center absolute z-50 border-2 border-white box-content">
              <img
                className="object-cover w-full h-full"
                src="https://znews-photo.zingcdn.me/w660/Uploaded/pnbcuhbatgunb/2023_04_25/taeyang_3348_1.jpg"
              />
            </div>
            <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center absolute left-4 z-40">
              <img
                className="object-cover w-full h-full"
                src="data:image/jpeg;base64,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"
              />
            </div>
            <div className="text-[#65676B] text-[13px] ml-11">
              3 bạn chung
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 w-full mt-2">
            <button onClick={()=>handleSentFriendRequest(user.id)} className="btn-primary flex items-center justify-center whitespace-nowrap">Thêm bạn bè</button>
            <button className="btn-second">Xóa, gỡ</button>
          </div>
        </div>
      </div>)}



    </div>
  </div>
  )
}
