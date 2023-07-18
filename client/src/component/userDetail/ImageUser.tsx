
export default function ImageUser({dataListImg, setPickNav}:{dataListImg:any,setPickNav: React.Dispatch<React.SetStateAction<string>>}) {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold hover:underline cursor-pointer">Ảnh</div>
        <button onClick={()=>setPickNav('Ảnh')} className="text-blue-600 p-2 hover:bg-gray-200 rounded-lg">Xem tất cả các ảnh</button>
      </div>

      <div className="grid grid-cols-3 rounded-xl overflow-hidden gap-2 mt-3">
        {dataListImg?.slice(0,9).map((img:any)=><div><img style={{aspectRatio: "1/1"}} className="w-full object-cover h-1/1" src={img.url}/></div>)}
      </div>
    </div>
  )
}
