import { BsThreeDots } from "react-icons/bs";


export default function ListImg({dataListImg}:{dataListImg:any}) {

  return (
    <div className="w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">Ảnh</div>
        <div className="flex items-center gap-4">
          <div className="text-[#1877F2] text-[15px] font-semibold">Thêm ảnh/video</div>
          <div>
            <button className="btn-second">
              <BsThreeDots />
            </button>
          </div>
        </div>
      </div>
      {dataListImg.length==0&&<div className="w-full flex text-center justify-center border border-gray-200 rounded-md py-10 font-bold mt-5">Bạn chưa có ảnh nào</div>}
      <div className="mt-4 grid grid-cols-5 gap-2">
        {dataListImg&&dataListImg?.map((img:any)=><div key={img.id} className="rounded-lg overflow-hidden"><img src={img.url}/></div>)}
      </div>
    </div>
  );
}
