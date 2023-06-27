import { useState } from "react";
import IconLike from "../home/IconLike";
import { IoEarth } from "react-icons/io5";
import { BsDot } from "react-icons/bs";
import SomebodyThatIUsedToKnow from '../../assets/video/videoplayback.mp4'

export default function VideoDetail() {
  const [showIcon, setShowIcon] = useState(false);

  return (
    <div className="w-[740px] mx-auto bg-white rounded-lg mt-4">
      <div className="p-2">
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://i1.sndcdn.com/artworks-000045855174-0o70io-t500x500.jpg"
            />
          </div>

          <div>
            <div className="text-[15px] font-semibold flex gap-1 items-center">
              <span className="hover:underline cursor-pointer">
                Gotye ft Kimbra
              </span>
              <div className="text-gray-700">
                <BsDot size={10} />
              </div>
              <span className="text-blue-500 font-semibold hover:underline cursor-pointer">
                Theo dõi
              </span>
            </div>
            <div className="text-[#65676B] text-xs flex items-center gap-2">
              26 tháng 4, 2022 <IoEarth />
            </div>
          </div>
        </div>
      </div>


      <div className="px-2 text-[17px] pb-2">The official music video for “Somebody That I Used To Know” by Gotye, featuring Kimbra. From the album Making Mirrors.</div>
      <div>
        <video className="aspect-video w-full h-full" controls >
          <source src={SomebodyThatIUsedToKnow} type="video/mp4"/>
        </video>
      </div>



      <div className="flex items-center justify-between text-[13px] text-[#65676B]">
        <div className="grid grid-cols-3 h-11 basis-[40%] mx-auto border-t border-gray-300 relative">
          <div
            onMouseOver={() => setShowIcon(true)}
            onMouseLeave={() => setShowIcon(false)}
            className="text-gray-500 font-semibold flex items-center justify-center gap-2 cursor-pointer py-2 h-[80%] my-auto hover:bg-gray-300 rounded"
          >
            <div className="like font-semibold"></div>Thích
            {showIcon && (
              <div className="absolute -top-[45px] left-0 bg-white rounded-3xl shadow-xl border border-gray-300">
                <IconLike />
              </div>
            )}
          </div>
          <div className="text-gray-500 font-semibold flex items-center justify-center gap-2 cursor-pointer py-2 h-[80%] my-auto hover:bg-gray-300 rounded">
            <div className="comment font-semibold"></div>Bình luận
          </div>
          <div className="text-gray-500 font-semibold flex items-center justify-center gap-2 cursor-pointer py-2 h-[80%] my-auto hover:bg-gray-300 rounded">
            <div className="share font-semibold"></div>Chia sẻ
          </div>
        </div>
<div className="flex-1 flex items-center justify-end mr-4">
          <div className="w-[18px] h-[18px] overflow-hidden mr-1"><img className="object-cover w-full" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"/></div>
          <div className="flex items-center gap-1">4,9k <BsDot/> 68 bình luận <BsDot/> 475k lượt xem</div>
</div>      </div>
    </div>
  );
}
