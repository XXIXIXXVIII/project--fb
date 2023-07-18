import { useParams } from "react-router-dom";

import ShotFooter from "../../component/footer/ShotFooter";
import HeaderUserDetail from "../../component/userDetail/HeaderUserDetail";
import ImageUser from "../../component/userDetail/ImageUser";
import Introduction from "../../component/userDetail/Introduction";
import MainUserDetail from "../../component/userDetail/MainUserDetail";
import publicAxios from "../../fetchConfig/publicAxios";
import { useState } from "react";
import { useEffect } from "react";
import { PostDto, userData } from "../../Dto/Dto";
import { useAppSelector } from "../../redux/hook";
import privateAxios from "../../fetchConfig/privateAxios";
import ListImg from "../../component/userDetail/ListImg";
import MutualFriends from "../../component/userDetail/MutualFriends";

export default function UserDetail({
  idFriends,resetStatus
}: {
  idFriends: number | null | undefined,resetStatus?:()=>void
}) {
  const { id } = useParams();
  const [userData, setUserData] = useState<userData>();
  const [pickNav, setPickNav] = useState<string>("Bài viết");
  // const [listFriendsData, setListFriendsData] = useState<userData[]>()
  const [posts, setPostsData] = useState<PostDto[]>();
  const [userIsWho, setUserIsWho] = useState<string>();
  const [sentFriendRequest, setSentFriendRequest] = useState<string>();
  const [dataAllFriends, setDataAllFriends] = useState<userData[]>();
  const [dataReqAllFriends, setDataReqAllFriends] = useState<userData[]>();
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const [dataListImg, setDataListImg] = useState()

  const fetchDataUser = async () => {
    try {
      const result = await publicAxios.get(`/user/${id || idFriends}`);
      setUserData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataPost = async () => {
    try {
      const result = await publicAxios.get(`/post/user/${id || idFriends}`);
      setPostsData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllFriends = async () => {
    try {
      const result = await privateAxios.get(`user/friends/${currentUser.id}`);
      setDataAllFriends(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchReqAllFriends = async () => {
    try {
      const result = await privateAxios.get(`/user/friends/request`);
      setDataReqAllFriends(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchsentFriendRequest =async ()=>{
    try {
      const result = await privateAxios.post('user/sentFriendRequest',{friendId: id})
      console.log(result);
      if(result.data=="sent"){
        setSentFriendRequest('sentFriendRequest')
      }
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    fetchAllFriends();
    fetchReqAllFriends()
    fetchsentFriendRequest()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, idFriends]);


    const fetchListImg = async ()=>{
      try {
        const result = await publicAxios.get(`/user/allImgForUser/${id||idFriends}`)
        setDataListImg(result.data)
      } catch (error) {
        console.log(error);
      }
    }

    
    console.log(posts);

  useEffect(() => {
    fetchDataUser();
    fetchDataPost();
    fetchListImg()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ id, idFriends]);


  useEffect(()=>{
    if (userIsWho&&currentUser.id == id) {
      setUserIsWho("me");
    } else if (
      dataAllFriends?.some(
        (friend) => friend.id == id || friend.id == idFriends
      )
    ) {
      setUserIsWho("friend");
    }else if(dataReqAllFriends?.some(
      reqfriend=>  reqfriend.id == id || reqfriend.id == idFriends
    )){
      setUserIsWho("acceptFriendRequest");
    } else if(sentFriendRequest==='sentFriendRequest'){
      setUserIsWho('sentFriendRequest')
    }
    else {
      setUserIsWho("unknow");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentUser.id, dataAllFriends, dataReqAllFriends, id, idFriends, sentFriendRequest])

  const agreeFriends = ()=>{
    setUserIsWho("friend")
    if (resetStatus) {
      resetStatus();
  }
  }



  return (
    <div className=" mt-0">
      <div className="border-b border-gray-200 shadow-2xl">
        <HeaderUserDetail
          dataAllFriends={dataAllFriends} 
          userIsWho={userIsWho}
          coverImage={userData?.coverImage}
          id={id || idFriends}
          avarta={userData?.avatar}
          firstName={userData?.firstName}
          lastName={userData?.lastName}
          agreeFriends={agreeFriends}
          setUserIsWho={setUserIsWho}
          setPickNav={setPickNav}
          pickNav={pickNav}
          currentUser={currentUser}
          fetchDataUser={fetchDataUser}
        />
      </div>
      <div className="bg-gray-200 relative min-h-screen">
      {pickNav==='Bài viết'&&
        <div className="flex w-[1030px] mx-auto pt-5 ">
          <div className=" basis-[41%] mt-6 left-0 inset-0 sticky h-fit overflow-y-auto">
            <div className=" shadow-lg border border-gray-100 bg-white p-3 rounded-xl w-full">
              <Introduction userData={userData} fetchDataUser={fetchDataUser} userIsWho={userIsWho}/>
            </div>
            {dataListImg?.length!==0&&<div className="mt-5  shadow-lg border border-gray-100 bg-white p-3 rounded-xl w-full">
              <ImageUser dataListImg={dataListImg} setPickNav={setPickNav}/>
            </div>}

            {(id&&currentUser.id!=+id)||(idFriends&&currentUser.id!=idFriends)&&<div className="mt-5  shadow-lg border border-gray-100 bg-white p-3 rounded-xl w-full">
              <MutualFriends/>
            </div>}

            <div className="mt-5">
              <ShotFooter />
            </div>
          </div>
          <div className="flex-1 ml-3">
         <MainUserDetail posts={posts} fetchDataPost={fetchDataPost} userIsWho={userIsWho}/>
            
          </div>
        </div>}
        {pickNav==='Ảnh'&&<div className=" w-[1030px] mx-auto pt-5"><ListImg dataListImg={dataListImg}/></div>}
      </div>
    </div>
  );
}
