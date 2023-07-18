import "../../index.css";
import { useAppSelector } from "../../redux/hook";
import Avatar from "./Avatar";
import { FaEarthAsia } from "react-icons/fa6";
import { AiFillCaretDown } from "react-icons/ai";
import { BsThreeDots, BsXLg } from "react-icons/bs";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { useRef, useState, useEffect } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import IconInput from "./IconInput";
import Tippy2 from "@tippyjs/react/headless";
import { backGround } from "../../assets/Const/Const";
import privateAxios from "../../fetchConfig/privateAxios";
import axios from "axios";


export default function CreatePost({
  parendOffCreatePost,
  fetchData,
  setSuccessCreatePost,
  setLoadding,
  setShowCreatePost
}: {
  parendOffCreatePost: () => void;
  fetchData: () => Promise<void>;
  setSuccessCreatePost: React.Dispatch<React.SetStateAction<boolean>>;
  setLoadding: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCreatePost: React.Dispatch<React.SetStateAction<boolean>>;

}) {
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const [value, setValue] = useState<string>();
  const [flag, setFlag] = useState(true);
  const [showBg, setShowBg] = useState(false);
  const [flag1, setFlag1] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const [showMoreImg, setShowMoreImg] = useState(false);
  const [imgPost, setImgPost] = useState<string[]>();
  const [bgPost, setBgPost] = useState("#F0F2F5");
  const [showMoreImg1, setShowMoreImg1] = useState(false);
  const [imageData, setImageData] = useState<File[]>();
  const [videoData, setVideoData] = useState<File[]>();
  const textareaRef = useRef<HTMLDivElement | null>(null);
  const contentCreatePostRef = useRef<HTMLParagraphElement | null>(null);

  const handleMoreImg = () => {
    setShowMoreImg(true)
  }

  const pushCreatePost = [
    {
      id: 1,
      urlImg: "https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png",
      title: "Ảnh/video",
      onClick: handleMoreImg
    },
    {
      id: 2,
      urlImg: "https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/MqTJr_DM3Jg.png",
      title: "Gắn thẻ người khác",
    },
    {
      id: 3,
      urlImg: "https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png",
      title: "Cảm xúc/hoạt động",
    },
    {
      id: 4,
      urlImg: "https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/uywzfiZad5N.png",
      title: "Checkin",
    },
    {
      id: 5,
      urlImg: "https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/CenxFlWjtJO.png",
      title: "Sự kiện trong đời",
    },
  ];




  useEffect(() => {
    const contentLength = document.getElementById("PPPP")?.textContent?.length;
    if (textareaRef.current && typeof contentLength === "number") {
      textareaRef.current.style.height = "auto"; // Đặt lại chiều cao về giá trị mặc định
      // textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      if (contentLength > 71) {
        textareaRef.current.style.fontSize = "14px";
        textareaRef.current.style.lineHeight = "20px";
      } else {
        textareaRef.current.style.fontSize = "24px";
        textareaRef.current.style.lineHeight = "32px";
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [document.getElementById("PPPP")?.textContent?.length]);

  const handleSetUrl = (url: string) => {
    if (contentCreatePostRef.current) {
      const span = document.createElement("span");
      span.style.backgroundImage = `url(${url})`;
      span.style.width = "20px";
      span.style.height = "20px";
      span.style.backgroundSize = "cover";
      span.style.display = "flex";
      span.style.paddingLeft = "20px";
      contentCreatePostRef.current.appendChild(span);
      setFlag(true);
    }
    const htmlContent = contentCreatePostRef?.current?.innerHTML;
    setValue(htmlContent);
  };

  const handleFocus = () => {
    const span = document.createElement("span");
    if (contentCreatePostRef.current && flag) {
      span.style.minWidth = "20px";
      span.style.minHeight = "20px";
      span.style.display = "flex";

      contentCreatePostRef.current.appendChild(span);
      setFlag(false);
    }
    if (bgPost !== "#F0F2F5") {
      span.style.textAlign = "center";
    }
  };

  const handleBgPost = (item: {
    id: number;
    bgImgUrl?: string;
    bgColor?: string;
  }) => {
    if (item.bgColor) {
      setBgPost(item.bgColor);
    }
    if (item.bgImgUrl) {
      setBgPost(item.bgImgUrl);
    }
  };
  const handleInput = () => {
    const htmlContent = contentCreatePostRef?.current?.innerHTML;
    setValue(htmlContent);
  };

  const handleCreatePost = async () => {
    setLoadding(true)
    try {
      const escapedContent = JSON.stringify(value);
      const result = await privateAxios.post("post", {
        content: escapedContent,
        background: bgPost,
      });
      if(imageData){
        imageData.map(async img=>{
          const formData = new FormData();
          formData.append('file', img);
          formData.append('upload_preset', 'facebookImage');
              const [uploadMedia] = await Promise.all([
                  axios.post('https://api.cloudinary.com/v1_1/dpztwoefq/image/upload', formData,)
              ])
              const media = uploadMedia.data.secure_url;
              if(media&&result?.status == 201){
                try {
                  privateAxios.post('/post/mediaPost', {postId: result.data.id, imgPost: media, mediaType: 'image'})
                } catch (error) {
                  console.log(error)
                }    
              }
            })
          }
        
        if(videoData){
            const formVideo = new FormData();
            formVideo.append('file', videoData[0]);
            formVideo.append('upload_preset', 'facebookImage');
                const [uploadVideo] = await Promise.all([
                    axios.post('https://api.cloudinary.com/v1_1/dpztwoefq/video/upload', formVideo,)
                ])
                const video = uploadVideo.data.secure_url;

                if(video&&result?.status == 201){
                  try {
                    await privateAxios.post('/post/mediaPost', {postId: result.data.id, imgPost: video, mediaType: 'video'})
                    setLoadding(false)
                  } catch (error) {
                    console.log(error)
                  }    
                }
                
          }


      if (result?.status == 201) {
        fetchData(), setSuccessCreatePost(true);setLoadding(false)
        setShowCreatePost(false)
      }


    } catch (error) {
      console.log(error);
    }






 
  };

  const handleReviewImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files: File[] = Array.from(e.target.files);
      const img = files?.map(file=>URL.createObjectURL(file))
      setImgPost(prev=>[...(prev??[]),...img])

      const video = files.filter(item=>item.name.split('.')[item.name.split('.').length-1]==='mp4')
      const image = files.filter(item=>item.name.split('.')[item.name.split('.').length-1]!=='mp4')
      
      console.log(e.target.files);

      setImageData(image)
      setVideoData(video)
      
    }
  }


 

  useEffect(() => {
    return () => {
      imgPost && imgPost.map(item=>URL.revokeObjectURL(item))
    }
  }, [imgPost])

  useEffect(()=>{
    if(imgPost&&imgPost.length>0){
      setFlag1(false)
    }else{setFlag1(true)}
  },[imgPost])

  return (
    <div className="">
      
      <div
        onClick={() => parendOffCreatePost()}
        className="fixed w-screen h-screen bg-gray-100 opacity-80 top-0 left-0 z-30 "
      ></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 w-[500px]  max-h-[600px] bg-white z-40 rounded-lg loginHome">
        <div className="h-[60px] border-b border-gray-300 flex items-center justify-between px-6">
          <div> </div>
          <div className="text-xl font-bold">Tạo bài viết</div>
          <div
            onClick={() => parendOffCreatePost()}
            className="w-9 h-9 rounded-full bg-[#E4E6EB] flex items-center justify-center cursor-pointer"
          >
            <div className="delete"></div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-3">
            <Avatar size={"w-10"} avarta={currentUser.avatar} />
            <div>
              <div className="text-[15px] font-semibold">
                {currentUser.firstName}
              </div>
              <button className="px-2 py-1 flex items-center bg-[#E4E6EB] gap-2 text-[13px] rounded-lg font-semibold">
                <FaEarthAsia size={12} /> <div>Công khai</div>
                <AiFillCaretDown size={12} />
              </button>
            </div>
          </div>
        </div>
        <div className="pb-5 max-h-80 overflow-y-auto">
          <div className="relative flex ">
            <div
              contentEditable={true}
              data-lexical-editor="grammar-checker"
              aria-hidden="true"
              onInput={handleInput}
              onFocus={handleFocus}
              ref={textareaRef}
              style={
                bgPost !== "#F0F2F5"
                  ? {
                    background: `${bgPost}`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    color: "#F0F2F5",
                    display: "flex",
                    flexWrap: "wrap",
                    minHeight: "300px",
                    alignItems: "center",
                    justifyContent: "center",
                  }
                  : { padding: "0 16px", minHeight: "50px" }
              }
              className="w-full overflow-auto max-h-[240px] min-h-[40px] outline-none bg-no-repeat bg-center"
            >
              <p
                id="PPPP"
                data-lexical-editor="grammar-checker"
                style={
                  bgPost !== "#F0F2F5"
                    ? { alignItems: "center", justifyContent: "center" }
                    : {}
                }
                className="flex flex-wrap items-center"
                ref={contentCreatePostRef}
              ></p>
            </div>
            {!value && (
              <div
                style={
                  bgPost !== "#F0F2F5"
                    ? {
                      left: "50%",
                      transform: "translateX(-50%)",
                      color: "#F0F2F5",
                      fontSize: 30,
                      fontWeight: 600,
                    }
                    : {}
                }
                className="left-4 absolute pointer-events-none top-[40%] -translate-y-1/2 text-2xl text-gray-600"
              >
                Bạn đang nghĩ gì
              </div>
            )}
          </div>

          {/* backGround Post */}
          {showMoreImg === false && <div
            style={
              bgPost !== "#F0F2F5"
                ? { position: "absolute", bottom: "20px" }
                : { position: "static" }
            }
            className="flex items-center px-4 mt-4"
          >
            <div className="basis-[90%] h-[38px]">
              {!showBg ? (
                <div
                  onClick={() => setShowBg(true)}
                  className="w-[38px] h-full overflow-hidden cursor-pointer"
                >
                  <img
                    className="object-cover w-full"
                    src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
                  />
                </div>
              ) : (
                <div className="flex items-center">
                  <div
                    onClick={() => (setShowBg(false), setBgPost("#F0F2F5"))}
                    className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center cursor-pointer"
                  >
                    <div className="backIcon"></div>
                  </div>
                  <div className="flex gap-2 mx-2 items-center">
                    {backGround.map((item) => (
                      <div key={item.id} onClick={() => handleBgPost(item)}>
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer bg-cover"
                          style={
                            item.bgImgUrl
                              ? { backgroundImage: `${item.bgImgUrl}` }
                              : { backgroundColor: `${item.bgColor}` }
                          }
                        ></div>
                      </div>
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center cursor-pointer">
                    <div className="moreBgPost"></div>
                  </div>
                </div>
              )}
            </div>
            <Tippy2
              visible={showIcon}
              interactive
              onClickOutside={() => setShowIcon(!showIcon)}
              render={(attrs) => (
                <div className="box" tabIndex={-1} {...attrs}>
                  <div className=""><IconInput handleSetUrl={handleSetUrl} /></div>
                </div>
              )}
            >
              <div
                onClick={() => setShowIcon(!showIcon)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer ml-2 flex-1"
              >
                <HiOutlineFaceSmile size={26} />
              </div>
            </Tippy2>
          </div>}

          {/* gắn ảnh */}
         <div onMouseOver={()=>setShowMoreImg1(true)} onMouseOut={()=>setShowMoreImg1(false)}>
            {showMoreImg  && flag1&& <div className="mx-4 p-2 rounded-lg overflow-hidden bg-transparent border border-gray-300">
              <label htmlFor="moreImg" className="bottom-0 w-full h-48 bg-[#F7F8FA] hover:bg-gray-200 rounded-sm cursor-pointer relative flex flex-col gap-2 items-center justify-center">
                <div onClick={() => setShowMoreImg(false)} className="absolute top-2 right-2 w-7 h-7 rounded-full border border-gray-300  text-gray-600 hover:bg-gray-50 bg-white flex items-center justify-center"><BsXLg /></div>
                <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center"><div className="moreImg"></div></div>
                <div className="text-[17px] font-semibold">Thêm ảnh/video</div>
                <input multiple onChange={handleReviewImg} type="file" id="moreImg" className="hidden" />
              </label>
            </div>}
            {imgPost&&imgPost?.length>0 && <div className="mx-4 p-2  rounded-lg bg-transparent border border-gray-300 relative overflow-y-auto">
              <div onClick={() => { setImgPost([]), setShowMoreImg(false) }} className="absolute z-10 top-5 right-5 cursor-pointer hover:bg-gray-200 w-7 h-7 rounded-full border border-gray-300  text-gray-600 bg-white flex items-center justify-center"><BsXLg /></div>
  
              {showMoreImg1&&<label htmlFor="moreImg1" className="absolute top-5 left-5 text-[15px] bg-white rounded-lg p-2 font-semibold  gap-2 cursor-pointer hover:bg-gray-200 z-10"><div className="moreImg"></div> Thêm ảnh/video</label>}
              <input multiple onChange={handleReviewImg} type="file" id="moreImg1" className="hidden" />
              {imgPost.length==1&&<div className="">{imgPost.slice(0,2)?.map((item, index)=><div key={index} className="w-full h-full overflow-hidden flex items-center justify-center"><img className="object-cover" src={item} /></div>)}</div>}
              {imgPost.length>1&&<div className="grid grid-cols-2 items-center justify-center">{imgPost.slice(0,2)?.map((item, index)=><div key={index} className="w-full h-full overflow-hidden flex items-center justify-center"><img className="object-cover" src={item} /></div>)}</div>}
              <div className="grid grid-cols-3 relative"><div className="absolute w-full h-full bg-black opacity-20"></div>{imgPost.slice(2,5)?.map((item, index)=><div key={index} className="w-full h-full overflow-hidden flex items-center justify-center"><img className="object-cover" src={item} /></div>)}
              {imgPost.length>4 && <div className="absolute top-1/2 -translate-y-1/2 font-bold text-4xl text-white right-16">+{imgPost.length-4}</div>}
              </div>
              
            </div>}
         </div>


        </div>
        <div className="p-4 ">
          <div className=" rounded-xl border border-gray-600 px-4 py-2 flex items-center justify-between">
            <div className="font-semibold text-[15px]">
              Thêm vào bài viết của bạn
            </div>
            <div className="flex items-center gap-1">
              {pushCreatePost.map((item) => (
                <div
                  key={item.id}
                  className="w-9 h-9 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer"
                >
                  <Tippy
                    content={<span className="text-xs">{item.title}</span>}
                  >
                    <div onClick={item.onClick} className="w-6 h-6 overflow-hidden">
                      <img
                        className="object-cover w-full"
                        src={`${item.urlImg}`}
                      />
                    </div>
                  </Tippy>
                </div>
              ))}
              <div className="w-9 h-9 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer text-gray-600">
                <BsThreeDots size={24} />
              </div>
            </div>
          </div>
          <button
            onClick={handleCreatePost}
            style={
              value && value.length <= 0
                ? {
                  background: "#E4E6EB",
                  color: "#BCC0C4",
                  pointerEvents: "none",
                }
                : {}
            }
            className="btn-primary w-full mt-4"
          >
            Đăng
          </button>
        </div>
      </div>
    </div>
  );
}
