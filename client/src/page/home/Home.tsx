import { useState, useEffect } from "react";

import newFeed from "../../assets/Home/newFeed.svg";
import newFeedPick from "../../assets/Home/newFeedPick.svg";
import reels from "../../assets/Home/Reels.svg";
import reelsPick from "../../assets/Home/reelsPick.svg";
import HeaderPick from "../../component/header/HeaderPick";
import Slick from "../../component/home/Slick";
import NewPost from "../../component/home/NewPost";
import Post from "../../component/abc/Post";
import CreatePost from "../../component/abc/CreatePost";
import privateAxios from "../../fetchConfig/privateAxios";
import Loading from "../../component/Alert/Loading";
import Success from "../../component/Alert/Success";

export interface PostDto {
  id: number,
  typePost:string,
  content:string,
  createdAt:string,
  view:number,
  background:string
  user:{
    id:number,
    avatar:string,
    firstName:string,
    lastName:string
  }
}

const icon = [
  { icon: newFeed, iconPick: newFeedPick, name: "Tin", tippy: "News feed" },
  { icon: reels, iconPick: reelsPick, name: "Reels", tippy: "Videos" },
];

const jwtTokent = localStorage.getItem('jwtToken')
console.log(jwtTokent);

export default function Home() {
  const [pick, setPick] = useState("/src/assets/Home/newFeed.svg");
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [dataPost, setDataPost] = useState<PostDto[]>();
  const [loaddingData, setLoaddingData] = useState(true);
  const [successCreatePost, setSuccessCreatePost] = useState(false);

  const fetchPost = async () => {
    try {
      const result = await privateAxios.get("post");
      setDataPost(result.data);
      setLoaddingData(false)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchPost();
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);


  const parendOffCreatePost = () => {
    if (showCreatePost) {
      setShowCreatePost(false);
    } else {
      setShowCreatePost(true);
    }
  };

  useEffect(()=>{
    if(successCreatePost==true){
      setShowCreatePost(false)
      const timeout = setTimeout(()=>{
        setSuccessCreatePost(false)
      },4000)
      return ()=>clearTimeout(timeout)
    }
  },[successCreatePost])


  return (
    <div className="min-h-screen">
      {successCreatePost&&<div className="fixed w-1/3 -translate-x-1/2 left-1/2 top-[15%] z-50"><Success title="Tạo bài post thành công" /></div>}
      {loaddingData&&<div className="fixed left-1/2 -translate-x-1/2 top-[13%]"><Loading/></div>}
      {showCreatePost && (
        <div>
          <CreatePost parendOffCreatePost={parendOffCreatePost} fetchData={fetchPost} setSuccessCreatePost={setSuccessCreatePost}/>
        </div>
      )}
      <div className="mt-6 w-[590px] mx-auto ">
        <div className="h-[292px] bg-white rounded-xl shadow-xl border border-gray-200">
          <div className=" flex items-center justify-around px-3  ">
            {icon.map((item, index) => (
              <div
                key={index}
                className="h-[60px] w-full border-b border-gray-300"
              >
                <HeaderPick
                  icon={item.icon}
                  iconPick={item.iconPick}
                  pick={pick}
                  setPick={setPick}
                  name={item.name}
                  tippy={item.tippy}
                />
              </div>
            ))}
          </div>
          <div>
            <Slick />
          </div>
        </div>
        <div className="mt-6">
          <NewPost parendOffCreatePost={parendOffCreatePost} />
        </div>
        <div className="mt-6">
          {dataPost?.map((item) => (
            <div key={item.id}>
              <Post post={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
