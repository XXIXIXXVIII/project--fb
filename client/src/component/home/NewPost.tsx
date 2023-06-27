import Avatar from "../header/Avatar";

export default function NewPost() {
  return (
    <div className="rounded-xl bg-white border border-gray-200 shadow-xl">
      <div className="px-4 py-3">
        <div className="flex gap-2 items-center">
          <Avatar size={"w-10"}/>
          <div className="px-3 py-2 bg-gray-100 rounded-3xl w-full cursor-pointer text-[17px] text-[#65676B]">Lisa ơi bạn đang nghĩ gì thế?</div>
        </div>
        <div className="flex justify-between items-center mt-3 p-2 border-t border-gray-300">
          <div className="text-[#65676B] flex gap-2 cursor-pointer font-semibold text-[15px] p-2"><img className="w-6 h-6 " src="	https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v1iF2605Cb5.png"/><span>Video trực tiếp</span></div>
          <div className="text-[#65676B] flex gap-2 cursor-pointer font-semibold text-[15px] p-2"><img className="w-6 h-6 " src="		https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png"/><span>Ảnh/video</span></div>
          <div className="text-[#65676B] flex gap-2 cursor-pointer font-semibold text-[15px] p-2"><img className="w-6 h-6 " src="		https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png"/><span>Cảm xúc/hoạt động</span></div>
        </div>
      </div>
    </div>
  );
}
