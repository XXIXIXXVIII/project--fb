import {MdOutlineNavigateNext} from 'react-icons/md'


export default function Step1({setNamePage, setCategoryPage, setStory, setStep}:{setNamePage: React.Dispatch<React.SetStateAction<string>>, setCategoryPage:React.Dispatch<React.SetStateAction<string>>, setStory:React.Dispatch<React.SetStateAction<string>>, setStep:React.Dispatch<React.SetStateAction<number>>}) {




  return (
    <div className="mt-6 mx-3">
    <div className="text-xs flex items-center text-gray-500 gap-1">Trang <div className="mt-[1px]"><MdOutlineNavigateNext/></div> Tạo Trang</div>
    <div className="font-bold text-2xl">Tạo Trang</div>
    <div className="text-[#65676B] text-[17px]">
      Trang sẽ hiển thị thông tin về bạn để mọi người tìm hiểu thêm.
      Hãy chắc chắn là Trang của bạn có mọi thông tin cần thiết nhé.
    </div>
    <div className="border border-gray-300 py-2 px-4 rounded-lg">
      <div className="text-xs text-gray-500">
        Tên trang (bắt buộc)
      </div>
      <div>
        <input onChange={(e)=>setNamePage(e.target.value)} className="outline-none w-full" />
      </div>
    </div>

    <div className="text-xs text-[#65676B] mt-1">
      Dùng tên doanh nghiệp/thương hiệu/tổ chức của bạn hoặc tên góp
      phần giải thích về Trang của bạn.
      <span className="text-blue-500 cursor-pointer">
        Tìm hiểu thêm
      </span>
    </div>

    <div className="border border-gray-300 py-2 px-4 rounded-lg mt-4">
      <div className="text-xs text-gray-500">Hạng mục (bắt buộc)</div>
      <div>
        <input onChange={(e)=>setCategoryPage(e.target.value)} className="outline-none w-full" />
      </div>
    </div>

    <div className="text-xs text-[#65676B] mt-1">
      Hãy nhập hạng mục mô tả chính xác nhất về bạn nhé.
    </div>

    <div className="border border-gray-300 py-2 px-4 rounded-lg mt-4">
      <div className="text-xs text-gray-500">Tiểu sử (không bắt buộc)</div>
      <div>
        <textarea onChange={(e)=>setStory(e.target.value)} className="outline-none w-full resize-none" />
      </div>
    </div>
    <div className="text-xs text-[#65676B] mt-1">
      Hãy chia sẻ đôi nét về những gì bạn làm nhé.
    </div>
    <div className="text-center absolute bottom-8">
      <div onClick={()=>setStep(2)} className="btn-primary cursor-pointer">
        <div>Tạo Trang</div>
      </div>
      <div className="text-xs text-gray-500 mt-1">
        <span>Bằng việc tạo Trang, bạn đồng ý với </span>
        <span className="text-blue-500 cursor-pointer">
           Chính sách về Trang, Nhóm và Sự kiện
        </span>
      </div>
    </div>
  </div>
  )
}
