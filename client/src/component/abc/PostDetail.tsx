import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import privateAxios from "../../fetchConfig/privateAxios";
import "../../index.css";
import Post from "./Post";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { hidePost } from "../../redux/showDetailPost";
import Avatar from "./Avatar";
import Tippy2 from "@tippyjs/react/headless";
import IconInput from "./IconInput";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import CommentDetail from "./CommentDetail";


export default function PostDetail() {
  const [dataPost, setDataPost] = useState();
  const [dataComment, setDataComment] = useState<any>();
  const [value, setValue] = useState<string>();
  const [flag, setFlag] = useState(true);
  const textareaRef = useRef<HTMLDivElement | null>(null);
  const contentCreatePostRef = useRef<HTMLParagraphElement | null>(null);
  const [showIcon, setShowIcon] = useState(false);

  const element = document.getElementById("PPPP")


  const dispatch = useAppDispatch();
  const postId = useAppSelector((state) => state.showDetailPost.postId);
  const currentUser = useAppSelector((state) => state.auth.currentUser);

  const fetchPost = async () => {
    try {
      const result = await privateAxios.get(`/post/postdetail/${postId}`);
      setDataPost(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchGetComment = async () => {
    try {
      const result = await privateAxios.get(`/comment/${postId}`);
      setDataComment(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
    fetchGetComment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleHidePost = () => {
    dispatch(hidePost());
  };

  const handleSetUrl = (url: string) => {
    if (contentCreatePostRef.current) {
      const span = document.createElement("span");
      span.style.backgroundImage = `url(${url})`;
      span.style.width = "15px";
      span.style.height = "15px";
      span.style.backgroundSize = "cover";
      span.style.display = "flex";
      span.style.paddingLeft = "15px";
      contentCreatePostRef.current.appendChild(span);
      setFlag(true);
    }
    const htmlContent = contentCreatePostRef?.current?.innerHTML;
    setValue(htmlContent);
  };

  const handleFocus = () => {
    const span = document.createElement("span");
    if (contentCreatePostRef.current && flag) {
      span.style.minWidth = "15px";
      span.style.minHeight = "15px";
      span.style.display = "flex";

      contentCreatePostRef.current.appendChild(span);
      setFlag(false);
    }
  };

  const handleInput = () => {
    const htmlContent = contentCreatePostRef?.current?.innerHTML;
    setValue(htmlContent);
  };

  const handleSendComment = async()=>{
    await privateAxios.post('comment', {content:value, postId})
    setValue('')
    fetchGetComment()
    
    if(element){
      element.innerHTML=""
    }
  }


console.log("vvalie",element?.textContent);

  return (
    <>
      <div
        onClick={handleHidePost}
        className="fixed w-screen h-screen bg-white z-40 opacity-50"
      ></div>
      <div className="fixed w-1/2 z-40 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[94%] iconComponent bg-white rounded-lg overflow-y-auto ">
        <div className="text-xl font-bold text-center py-3 sticky z-10 top-0 shadow-sm border-b border-gray-200 bg-white flex items-center justify-between px-6">
          <div></div>
          <div>
            Bài viết của {dataComment?.user?.firstName}{" "}
            {dataComment?.user?.lastName}
          </div>
          <div
            onClick={handleHidePost}
            className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 hover:bg-gray-300 cursor-pointer"
          >
            <AiOutlineClose size={18} />
          </div>
        </div>
        {dataPost && <Post post={dataPost} />}
        <div className="p-4">
          {dataComment?.map((dataComment:any)=><div key={dataComment.id} className="mt-2"><CommentDetail dataComment={dataComment} fetchGetComment={fetchGetComment}/></div>)}

          <div className="text-[#65676B] text-[15px] flex items-center justify-between mt-2">
            <div className="font-semibold hover:underline cursor-pointer">
              Xem thêm bình luận
            </div>
            <div>40/928</div>
          </div>

        </div>
          <div style={{boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} className="flex items-start z-10 gap-2 sticky w-full bottom-0 bg-white px-4 py-2 border-t border-gray-200">
            <Avatar size="w-8 h-8" avarta={currentUser.avatar} />
            <div className="p-2 bg-gray-200 rounded-2xl flex-1 flex relative">
              <div
                contentEditable={true}
                data-lexical-editor="grammar-checker"
                aria-hidden="true"
                onInput={handleInput}
                onFocus={handleFocus}
                ref={textareaRef}
                className="w-full overflow-auto max-h-[240px] text-[15px] min-h-[40px] outline-none bg-no-repeat bg-center"
              >
                <p
                  id="PPPP"
                  data-lexical-editor="grammar-checker"
                  className="flex flex-wrap items-center text-[15px]"
                  ref={contentCreatePostRef}
                ></p>
              </div>
              {!element?.textContent && (
              <div
                className="left-4 absolute pointer-events-none top-5 -translate-y-1/2 text-base text-gray-600"
              >
                Viết bình luận...
              </div>
            )}
              <div className="flex flex-col items-center gap-1">
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
                <div onClick={handleSendComment} className="text-blue-600 w-8 h-8 rounded-full hover:bg-gray-300 flex items-center justify-center cursor-pointer"><PiPaperPlaneRightFill size={22}/></div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
