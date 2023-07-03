import {useParams} from 'react-router-dom'

import ShotFooter from "../../component/footer/ShotFooter";
import HeaderUserDetail from "../../component/userDetail/HeaderUserDetail";
import ImageUser from "../../component/userDetail/ImageUser";
import Introduction from "../../component/userDetail/Introduction";
import MainUserDetail from "../../component/userDetail/MainUserDetail";
import publicAxios from '../../fetchConfig/publicAxios';
import { useState } from 'react';
import { useEffect } from 'react';

interface userData{
  id:number,
  Wordplace?:string,
  avatar:string,
  birthday:string,
  coverImage:string,
  firstName:string
  from?:string,
  gmail:string,
  hightSchool?:string,
  language?:string,
  lastName:string,
  liveAt?:string,
  sex:string,
  university?:string,
  bio?:string
}

export default function UserDetail() {
  const {id} = useParams()
  const [userData, setUserData] = useState<userData>()
 const fetchDataUser = async ()=>{
  try {
    const result = await publicAxios.get(`/user/${id}`)
    setUserData(result.data)
  } catch (error) {
    console.log(error);
  }
  }

  useEffect(()=>{
    fetchDataUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  console.log(userData?.avatar);
  return (
    <div className=" mt-0">
      <div className="border-b border-gray-200 shadow-2xl">
        <HeaderUserDetail coverImage={userData?.coverImage} avarta={userData?.avatar} firstName={userData?.firstName} lastName={userData?.lastName}/>
      </div>
      <div className="bg-gray-200 relative">
        <div className="flex w-[1030px] mx-auto pt-5">
          <div className=" basis-[41%] mt-4 top-0 left-0 inset-0 sticky bottom-0 h-fit">
            <div className=" shadow-lg border border-gray-100 bg-white p-3 rounded-xl w-full"><Introduction bio={userData?.bio}/></div>
            <div className="mt-5  shadow-lg border border-gray-100 bg-white p-3 rounded-xl w-full"><ImageUser/></div>
            <div className="mt-5"><ShotFooter/></div>
          </div>
          <div className="flex-1 ml-3"><MainUserDetail/></div>
        </div>
      </div>
    </div>
  );
}
