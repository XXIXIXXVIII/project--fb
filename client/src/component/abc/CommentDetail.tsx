import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import ReComment from "./ReComments";
import { PiArrowBendDownRightBold } from "react-icons/pi";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import "../../index.css";
import { useAppSelector } from "../../redux/hook";
import Tippy2 from "@tippyjs/react/headless";
import IconInput from "./IconInput";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import privateAxios from "../../fetchConfig/privateAxios";

export default function CommentDetail({ dataComment,fetchGetComment }: { dataComment: any, fetchGetComment: () => Promise<void> }) {
  const [showReComment, setShowComment] = useState(false);

  const timeAgo = moment(dataComment.createdAt).fromNow();

  const [value, setValue] = useState<string>();
  const [flag, setFlag] = useState(true);
  const textareaRef = useRef<HTMLDivElement | null>(null);
  const contentCreatePostRef = useRef<HTMLParagraphElement | null>(null);
  const [showIcon, setShowIcon] = useState(false);
  const element = document.getElementById("PPPP");

  const currentUser = useAppSelector((state) => state.auth.currentUser);
  console.log(currentUser);

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

  const handleSendReComment = async () => {
    await privateAxios.post("/comment/recomment", {
      content: value,
      commentId: dataComment.id,
    });
    setValue("");
    fetchGetComment()
    if (element) {
      element.innerHTML = "";
    }
  };

  return (
    <div className="flex items-start gap-2 ">
      <Link to={`/user/${dataComment?.user?.id}`}>
        <Avatar size="w-8 h-8" avarta={dataComment?.user.avatar} />
      </Link>
      <div className="w-full">
        <div className="py-1 px-3 bg-gray-200 rounded-2xl inline-block">
          <Link
            to={`/user/${dataComment?.user.id}`}
            className="text-[13px] font-semibold"
          >
            {dataComment?.user.firstName} {dataComment?.user.lastName}
          </Link>
          <div
            className="text-[15px] flex items-center flex-wrap"
            dangerouslySetInnerHTML={{ __html: dataComment?.content }}
          ></div>
        </div>
        <div className="flex gap-4 ml-2 cursor-pointer">
          <div className="text-xs text-[#65676B] font-bold">Thích</div>
          <div className="text-xs text-[#65676B] font-bold">Phản hồi</div>
          <div className="text-xs text-[#65676B]">{timeAgo}</div>
        </div>

        {dataComment?.reComments.length > 0 && !showReComment && (
          <div className="flex items-center gap-2 text-[#65676B] ml-4 mt-1">
            <PiArrowBendDownRightBold size={16} />
            <div
              onClick={() => setShowComment(true)}
              className="font-semibold cursor-pointer text-[15px]"
            >
              Xem tất cả {dataComment?.reComments.length} phản hồi
            </div>
          </div>
        )}
        {showReComment &&
          dataComment?.reComments.map((item: any) => (
            <>
              <div key={item.id} className="ml-1 mt-1">
                <ReComment dataReComment={item} />
              </div>
            </>

          ))}

{showReComment &&
        <div className="flex items-start z-10 gap-2 w-full px-4 py-2">
          <Avatar size="w-8 h-8" avarta={currentUser.avatar} />
          <div className="p-2 bg-gray-200 rounded-2xl flex-1 flex relative">
            <div
              contentEditable={true}
              data-lexical-editor="grammar-checker"
              aria-hidden="true"
              onInput={handleInput}
              onFocus={handleFocus}
              ref={textareaRef}
              className="w-full overflow-auto max-h-[240px] min-h-[40px] outline-none bg-no-repeat bg-center"
            >
              <p
                id="PPPP"
                data-lexical-editor="grammar-checker"
                className="flex flex-wrap items-center text-[15px]"
                ref={contentCreatePostRef}
              ></p>
            </div>
            {!element?.textContent && (
              <div className="left-4 absolute pointer-events-none top-5 -translate-y-1/2 text-base text-gray-600">
                Trả lời {dataComment.user.firstName} {dataComment.user.lastName}{" "}
                ...
              </div>
            )}

            <div className="flex flex-col items-center gap-1">
              <Tippy2
                visible={showIcon}
                interactive
                onClickOutside={() => setShowIcon(!showIcon)}
                render={(attrs) => (
                  <div className="box" tabIndex={-1} {...attrs}>
                    <div className="">
                      <IconInput handleSetUrl={handleSetUrl} />
                    </div>
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
              <div
                onClick={handleSendReComment}
                className="text-blue-600 w-8 h-8 rounded-full hover:bg-gray-300 flex items-center justify-center cursor-pointer"
              >
                <PiPaperPlaneRightFill size={22} />
              </div>
            </div>
          </div>
        </div>}
      </div>


    </div>
  );
}
