import "../../index.css";
import { useAppSelector } from "../../redux/hook";
import Avatar from "./Avatar";
import { FaEarthAsia } from "react-icons/fa6";
import { AiFillCaretDown } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { useRef, useState, useEffect } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import IconInput from "./IconInput";
import Tippy2 from "@tippyjs/react/headless";

export default function CreatePost() {
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const [value, setValue] = useState("");
  const [showBg, setShowBg] = useState(false);
  const [flag, setFlag] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const [bgPost, setBgPost] = useState('white');
  const textareaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Đặt lại chiều cao về giá trị mặc định
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      if (value.length > 200) {
        textareaRef.current.style.fontSize = "14px";
        textareaRef.current.style.lineHeight = "20px";
      } else {
        textareaRef.current.style.fontSize = "24px";
        textareaRef.current.style.lineHeight = "32px";
      }
    }
  }, [value]);

  const pushCreatePost = [
    {
      id: 1,
      urlImg: "https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png",
      title: "Ảnh/video",
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

  const backGround = [
    {id:1, bgColor: '#F0F2F5'},
    {id:2, bgColor: 'rgb(198,0,255)'},
    {id:3, bgColor: 'rgb(226,1,59)'},
    {id:4, bgColor: 'rgb(17,17,17)'},
    {id:5, bgImgUrl: 'linear-gradient(45deg, rgb(255, 0, 71), rgb(44, 52, 199))'},
    {id:6, bgImgUrl: 'linear-gradient(45deg, rgb(93, 63, 218), rgb(252, 54, 253))'},
    {id:7, bgImgUrl: 'url(https://scontent.fhan3-1.fna.fbcdn.net/v/t39.16376-6/27971368_423110001455136_5789798837665136640_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=a86453&_nc_ohc=Sk0MxZkajS8AX90J46U&_nc_ht=scontent.fhan3-1.fna&oh=00_AfDpxxhpTbSYEBJKwD9VKj6ox73sV1jsgZEA-T70eqPE9g&oe=64A39629)'},
    {id:8, bgImgUrl: 'linear-gradient(45deg, rgb(93, 99, 116), rgb(22, 24, 29))'},
    {id:9, bgImgUrl: 'url("https://scontent.fhan3-1.fna.fbcdn.net/v/t39.16376-6/29160588_435684666861727_3152817560781586432_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=a86453&_nc_ohc=xGf68MDbZC0AX9FM4zC&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBuLljWZbIAk6noDTFFx6UVaq1KB-8MTdITstsA8098wQ&oe=64A3CF47")'},
  ]

  useEffect(() => {
    const arrValue = value.split(" ");
    const newArr = arrValue.map((item) => (item === ":v" ? "😙" : item));

    setValue(newArr.join(" ").trim());
  }, [value]);

  const handleSetUrl=(url:string)=>{
    if(textareaRef.current){
      const span = document.createElement("span");
      span.style.backgroundImage = `url(${url})`;
      span.style.width = "20px";
      span.style.height = "20px";
      // span.style.display = "inline";
      span.style.backgroundSize = "cover";
      span.style.display = "flex";
      span.style.paddingLeft = "20px";
      textareaRef.current.appendChild(span);
      const htmlContent = textareaRef.current.innerHTML;
      setValue(htmlContent.replace(/&quot;/g, "'"));
      setFlag(true)
    }

  }

  const handleInput = ()=>{
    let span: HTMLSpanElement | null = null;
    if(textareaRef.current){
      if(flag&&span !== null){
        span= document.createElement("span");
        textareaRef.current.appendChild(span);
        setFlag(false)
      }
      const htmlContent = textareaRef.current.innerHTML;
      setValue(htmlContent)
      setFlag(true)
    }
  }

  const handleBgPost = (item:{id:number,bgImgUrl?:string, bgColor?:string})=>{
    if(item.bgColor){
      setBgPost(item.bgColor)
    }
    if(item.bgImgUrl){
      setBgPost(item.bgImgUrl)
    }
  }

  console.log(bgPost);
  return (
    <div  className="">
      <div className="fixed w-screen h-screen bg-gray-100 opacity-80 top-0 left-0 z-30 "></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 w-[500px]  max-h-[600px] bg-white z-40 rounded-lg loginHome">
        <div className="h-[60px] border-b border-gray-300 flex items-center justify-between px-6">
          <div> </div>
          <div className="text-xl font-bold">Tạo bài viết</div>
          <div className="w-9 h-9 rounded-full bg-[#E4E6EB] flex items-center justify-center cursor-pointer">
            <div className="delete"></div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-3">
            <Avatar size={"w-10"} />
            <div>
              <div className="text-[15px] font-semibold">
                {currentUser.firstName} {currentUser.lastName}
              </div>
              <button className="px-2 py-1 flex items-center bg-[#E4E6EB] gap-2 text-[13px] rounded-lg font-semibold">
                <FaEarthAsia size={12} /> <div>Công khai</div>{" "}
                <AiFillCaretDown size={12} />
              </button>
            </div>
          </div>
        </div>
        <div className="px-4 pb-10 overflow-hidden ">
          <div className="relative flex flex=row">
            <div
              contentEditable={true}
              onInput={handleInput}
              ref={textareaRef}
              style={bgPost!=="white"?{background:`${bgPost}`, minHeight:"350px", textAlign:"center"}:{}}
              className="w-full overflow-auto max-h-[240px] min-h-[40px] outline-none "
            ></div>
            {!value && (
              <div style={bgPost!=="white"?{left:'50%', transform:"translateX(-50%)", color:"white", fontSize:30, fontWeight:600}:{}} className="absolute pointer-events-none top-1/2 -translate-y-1/2 text-2xl text-gray-600">
                Bạn đang nghĩ gì
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center px-4">
          <div className="basis-[90%] h-[38px]">
            {showBg?<div onClick={()=>setShowBg(false)} className="w-[38px] h-full overflow-hidden cursor-pointer">
              <img
                className="object-cover w-full"
                src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
              />
            </div>:
            <div className="flex items-center">
              <div onClick={()=>setShowBg(true)} className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center cursor-pointer">
                <div className="backIcon"></div>
                </div>
                <div className="flex gap-2 mx-2 items-center">
                  {backGround.map(item=><div key={item.id} onClick={()=>handleBgPost(item)}><div className="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer bg-cover" style={item.bgImgUrl?{backgroundImage:`${item.bgImgUrl}`}:{backgroundColor:`${item.bgColor}`}}></div></div>)}
                </div>
                <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center cursor-pointer"><div className="moreBgPost"></div></div>
            </div>
            }
          </div>
          <Tippy2
            visible={showIcon}
            interactive
            onClickOutside={()=>setShowIcon(!showIcon)}
            render={(attrs) => (
              <div className="box" {...attrs}>
               <IconInput handleSetUrl={handleSetUrl}/>
              </div>
            )}
          >
            <div onClick={()=>setShowIcon(!showIcon)} className="text-gray-400 hover:text-gray-600 cursor-pointer ml-2 flex-1">
              <HiOutlineFaceSmile size={26} />
            </div>
          </Tippy2>
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
                    <div className="w-6 h-6 overflow-hidden">
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
            style={
              value.length <= 0
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
