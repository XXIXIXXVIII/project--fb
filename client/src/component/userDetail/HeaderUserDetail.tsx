import "./index.css";
import { FaUserPlus, FaUserTimes } from "react-icons/fa";
import { BiSolidPencil, BiSolidUserCheck } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import {
  BsMessenger,
  BsChevronDown,
  BsFillCaretDownFill,
  BsThreeDots,
  BsCameraFill,
} from "react-icons/bs";

import { currentUser, userData } from "../../Dto/Dto";
import privateAxios from "../../fetchConfig/privateAxios";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Alert/Loading";
import Avatar from "../abc/Avatar";
import { useAppDispatch } from "../../redux/hook";
import { avartaRedux, coverImgRedux } from "../../redux/authSlice";

export default function HeaderUserDetail({
  id,
  dataAllFriends,
  coverImage,
  avarta,
  firstName,
  lastName,
  userIsWho,
  agreeFriends,
  setUserIsWho,
  setPickNav,
  pickNav,
  currentUser,
  fetchDataUser
}: {
  id: string | number | null | undefined;
  dataAllFriends: userData[] | undefined;
  coverImage: string | undefined;
  avarta: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  userIsWho: string | undefined;
  agreeFriends: () => void;
  setUserIsWho: React.Dispatch<React.SetStateAction<string | undefined>>;
  setPickNav: React.Dispatch<React.SetStateAction<string>>;
  pickNav: string;
  currentUser: currentUser;
  fetchDataUser:() => Promise<void>
}) {
  const [coverImg1, setCoverImg1] = useState("");
  const [coverImgFile, setCoverImgFile] = useState<File>();
  const [coverImgUrl, setCoverImgUrl] = useState('');

  const [avarta1, setAvarta1] = useState("");
  const [avartaFile, setAvartaFile] = useState<File>();
  const [avartaUrl, setAvartaUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch()
  const navUserDetail: { id: number; name: string; icon?: JSX.Element }[] = [
    { id: 1, name: "Bài viết" },
    { id: 2, name: "Giới thiệu" },
    { id: 3, name: "Bạn bè" },
    { id: 4, name: "Ảnh" },
    { id: 5, name: "Video" },
    { id: 6, name: "Thể thao" },
    { id: 7, icon: <BsFillCaretDownFill />, name: "Xem thêm" },
  ];

  const navUserCss = "text-[#65676B] rounded hover:bg-gray-200";
  const navUserCssPick =
    "text-[hsl(214,89%,52%)] border-b-4 border-[hsl(214,89%,52%)]";

  const fetchAgreeFriend = async () => {
    try {
      await privateAxios.post("user/acceptreqfriend", { friendId: id });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAddFriend = async () => {
    try {
      await privateAxios.post("user/reqfriend", { friendId: id });
    } catch (error) {
      console.log(error);
    }
  };

  const agreeFriends1 = () => {
    fetchAgreeFriend();
    agreeFriends();
  };

  const postReqAddFriend1 = () => {
    fetchAddFriend();
    setUserIsWho("sentFriendRequest");
  };

  const handleCoverImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCoverImgFile(e.target.files[0]);
      const file = URL.createObjectURL(e.target.files[0]);
      setCoverImg1(file);
    }
  };

  const handleAvarta = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAvartaFile(e.target.files[0]);
      const file = URL.createObjectURL(e.target.files[0]);
      setAvarta1(file);
    }
  };

  useEffect(() => {
    if(coverImgUrl){
      const fetchImgCover = async ()=>{
        try {
          await privateAxios.post('/user/coverImg', {coverImg: coverImgUrl})
          await fetchDataUser()
          setLoading(false)
          setCoverImgUrl("")
          setCoverImg1("")
        } catch (error) {
          console.log(error);
        }
        
      }
      fetchImgCover()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coverImgUrl]);

  useEffect(() => {
    if(avartaUrl){
      const fetchAvarta = async ()=>{
        try {
          await privateAxios.post('/user/avarta', {avarta: avartaUrl})
          await fetchDataUser()
          setLoading(false)
          setAvartaUrl("")
          setAvarta1("")
        } catch (error) {
          console.log(error);
        }
        
      }
      fetchAvarta()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [avartaUrl]);

  const handlePostCoverImg = async ()=>{
    setLoading(true)
    if(coverImgFile){
      const formData = new FormData();
      formData.append('file', coverImgFile);
      formData.append('upload_preset', 'facebookImage');
      try {
        const [uploadMedia] = await Promise.all([
          axios.post('https://api.cloudinary.com/v1_1/dpztwoefq/image/upload', formData,)
        ])
        const media = uploadMedia.data.secure_url;
        setCoverImgUrl(media);
        dispatch(coverImgRedux({coverImg:media}))
      }catch(error){
        console.log(error);
      }
    }
  }

  const handlePostAvatar = async ()=>{
    setLoading(true)
    if(avartaFile){
      const formData = new FormData();
      formData.append('file', avartaFile);
      formData.append('upload_preset', 'facebookImage');
      try {
        const [uploadMedia] = await Promise.all([
          axios.post('https://api.cloudinary.com/v1_1/dpztwoefq/image/upload', formData,)
        ])
        const media = uploadMedia.data.secure_url;
        setAvartaUrl(media);
        dispatch(avartaRedux({avarta:media}))
      }catch(error){
        console.log(error);
      }
    }
  }

  console.log(userIsWho);

  return (
    <div>
     {loading&&<div className="fixed left-1/2 -translate-x-1/2 top-[13%] z-20"><Loading/></div>}
      {coverImg1 && (
        <>
          <div className="text-base absolute z-10 bg-black opacity-40 h-14 w-full"></div>
          <div className="bg-transparent absolute text-white z-20 flex justify-between items-center h-14 w-full px-6">
            <div className="flex gap-2">
              <BiWorld size={24} />
            <div className="font-semibold text-base">Ảnh bì của bạn hiển thị công khai.</div>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={()=>{setCoverImg1(""), setCoverImgUrl("");}} className="px-9 py-2 bg-gray-500 hover:bg-gray-600 rounded-md text-white font-semibold"> Hủy </button>
              <button onClick={handlePostCoverImg} className="px-9 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-semibold"> Lưu thay đổi </button>
            </div>
          </div>
        </>
      )}
      <div className="h-[430px] relative flex items-center justify-center overflow-hidden">
        <div
          style={{
            filter: "blur(10px)",
            backgroundImage: `url(${coverImage})`,
          }}
          className="coverPhoto w-full h-full absolute -z-20 "
        ></div>
        <div className="abc absolute w-full h-full -z-10 "></div>
        <div className="w-[1095px] h-full flex items-center mx-auto justify-center overflow-hidden rounded-b-lg relative cursor-pointer">
          <img
            className="object-cover w-full h-full"
            src={`${coverImg1 || coverImage}`}
          />

          {userIsWho==='me'&&<div className="absolute z-30 cursor-pointer px-4 py-3 rounded-lg bg-[rgb(0,0,0,0.4)] text-white  font-semibold text-base bottom-5 right-5">
            <label
              htmlFor="moreCoverImg"
              className="relative flex items-center gap-2 cursor-pointer"
            >
              <BsCameraFill /> Thêm ảnh bìa
              <input
                onChange={handleCoverImg}
                className="hidden"
                type="file"
                id="moreCoverImg"
              />
            </label>
          </div>}
        </div>
      </div>
      <div className="w-[1030px] mx-auto ">
        <div className=" relative flex justify-between items-center mb-5 ">
          <div className=" flex items-center gap-5  min-h-[84px]">
            <div className=" absolute bottom-0 ">
              <div className="relative border-2 border-white rounded-full">
                <Avatar
                  avarta={avarta1||avarta}
                  size={'w-44 h-44'}
                />
                {userIsWho==='me'&&<label htmlFor="avarta" className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer"><BsCameraFill size={20}/>
                  <input onChange={handleAvarta} id="avarta" type="file" className="hidden"/>
                </label>}
              </div>
              {avarta1&&<div className="flex items-center gap-2 ml-4">
                <button onClick={()=>{setAvarta1(""), setAvartaUrl("")}} className="px-6 py-1 rounded-lg bg-gray-300 text-black font-semibold">Hủy</button>
                <button onClick={handlePostAvatar} className="px-6 py-1 rounded-lg bg-blue-500 text-white font-semibold">Lưu</button>
              </div>}
            </div>
            <div className="w-[180px]"></div>
            <div className="text-[32px] font-bold mt-8 mb-4">
              {firstName} {lastName}
              {/* <span className="text-[28px] font-normal">(Lili)</span> */}
              {id && currentUser.id == +id && (
                <>
                  <div className="text-[#65676B] text-[15px] font-semibold">
                    {dataAllFriends?.length} bạn bè
                  </div>
                  <div className="flex mt-2">
                    {dataAllFriends?.slice(0, 8).map((friend, index) => (
                      <div
                        key={friend.id}
                        style={{ zIndex: `${dataAllFriends.length - index}` }}
                        className={`w-7 relative z-`}
                      >
                        <div className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center border-2 border-white">
                          <img
                            className="object-cover w-full h-full"
                            src={friend.avatar}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          {userIsWho && (
            <div className="flex gap-2 items-center text-[15px]">
              {userIsWho === "unknow" && (
                <>
                  <div>
                    <button
                      onClick={postReqAddFriend1}
                      className="btn-primary flex items-center gap-2 "
                    >
                      <FaUserPlus size={20} /> Thêm bạn bè
                    </button>
                  </div>
                  <div>
                    <button className="btn-second flex items-center gap-2">
                      <BsMessenger /> Nhắn tin
                    </button>
                  </div>
                </>
              )}
              {userIsWho === "acceptFriendRequest" && (
                <>
                  <div>
                    <button
                      onClick={agreeFriends1}
                      className="btn-primary flex items-center gap-2 "
                    >
                      Chấp nhận lời mời
                    </button>
                  </div>
                  <div>
                    <button className="btn-second flex items-center gap-2">
                      <BsMessenger /> Nhắn tin
                    </button>
                  </div>
                </>
              )}
              {userIsWho === "me" && (
                <>
                  <div>
                    <button className="btn-primary flex items-center gap-2 text-white">
                      <AiOutlinePlus size={16} /> Thêm vào tin
                    </button>
                  </div>
                  <div>
                    <button className="btn-second flex items-center gap-2">
                      <BiSolidPencil /> Chỉnh sửa trang cá nhân
                    </button>
                  </div>
                </>
              )}
              {userIsWho === "friend" && (
                <>
                  <div>
                    <button className="btn-second flex items-center gap-1 text-black">
                      <BiSolidUserCheck size={24} /> Bạn bè
                    </button>
                  </div>
                  <div>
                    <button className="btn-primary flex items-center gap-2">
                      <BsMessenger /> Nhắn tin
                    </button>
                  </div>
                </>
              )}

              {userIsWho === "sentFriendRequest" && (
                <>
                  <div>
                    <button className="btn-primary flex items-center gap-2 text-white">
                      <FaUserTimes size={20} /> Hủy lời mời
                    </button>
                  </div>
                  <div>
                    <button className="btn-primary flex items-center gap-2">
                      <BsMessenger /> Nhắn tin
                    </button>
                  </div>
                </>
              )}

              <div>
                <button className="btn-second flex items-center gap-2">
                  <BsChevronDown />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-gray-300 pt-2 flex justify-between items-center">
          <div className="w-[583px] h-full grid grid-flow-col gap-2">
            {navUserDetail.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setPickNav(item.name);
                }}
              >
                <button
                  className={`${
                    pickNav === item.name ? navUserCssPick : navUserCss
                  } text-[15px] font-semibold p-3 flex items-center gap-1 whitespace-nowrap`}
                >
                  {item.name} {item.icon}
                </button>
              </div>
            ))}
          </div>
          <div>
            <button className="btn-second">
              <BsThreeDots />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
