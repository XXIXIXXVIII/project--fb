export default function Step2({
  namePage,
  setWebName,
  setPhone,
  setEmail,
  setAddress,
  setCityTown,
  setZipCode,
  setStep,
}: {
  namePage: string;
  setWebName: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setCityTown: React.Dispatch<React.SetStateAction<string>>;
  setZipCode: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="mt-6 mx-3">
      <div className="text-gray-500 font-semibold text-[13px]">Bước 1/2</div>
      <div className="font-bold text-2xl">
        Hoàn tất quá trình thiết lập Trang
      </div>
      <div className="text-[#65676B] text-[17px] mt-2">
        Thành công rồi! Bạn đã tạo được <strong>{namePage}</strong>. Hãy bổ sung
        chi tiết ngay để mọi người dễ kết nối với bạn nhé.
      </div>
      <div className="mt-2">
        <div className="text-[17px] font-semibold my-1">Thông tin liên hệ</div>
        <div className="border border-gray-300 py-2 px-4 rounded-lg mt-4">
          <div className="text-xs text-gray-500">Trang web</div>
          <div>
            <input
              onChange={(e) => setWebName(e.target.value)}
              className="outline-none w-full"
            />
          </div>
        </div>

        <div className="border border-gray-300 py-2 px-4 rounded-lg mt-4">
          <div className="text-xs text-gray-500">Số điện thoại</div>
          <div>
            <input
              onChange={(e) => setPhone(e.target.value)}
              className="outline-none w-full"
            />
          </div>
        </div>

        <div className="border border-gray-300 py-2 px-4 rounded-lg mt-4">
          <div className="text-xs text-gray-500">Email</div>
          <div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none w-full"
            />
          </div>
        </div>

        <div className="text-[17px] font-semibold mt-4">Vị trí</div>
        <div className="border border-gray-300 py-2 px-4 rounded-lg mt-4">
          <div className="text-xs text-gray-500">Địa chỉ</div>
          <div>
            <input
              onChange={(e) => setAddress(e.target.value)}
              className="outline-none w-full"
            />
          </div>
        </div>

        <div className="border border-gray-300 py-2 px-4 rounded-lg mt-4">
          <div className="text-xs text-gray-500">Thành phố/Thị xã</div>
          <div>
            <input
              onChange={(e) => setCityTown(e.target.value)}
              className="outline-none w-full"
            />
          </div>
        </div>

        <div className="border border-gray-300 py-2 px-4 rounded-lg mt-4">
          <div className="text-xs text-gray-500">Mã zip</div>
          <div>
            <input
              onChange={(e) => setZipCode(e.target.value)}
              className="outline-none w-full"
            />
          </div>
        </div>

        <div className="flex gap-2 absolute w-[90%] bottom-2">
          <div onClick={()=>setStep(1)} className="w-full py-2 text-center bg-gray-300 hover:bg-gray-400 rounded-lg text-black font-semibold cursor-pointer">
            Trước
          </div>
          <div onClick={()=>setStep(3)} className="w-full py-2 text-center bg-blue-200 hover:bg-blue-300 rounded-lg text-blue-600 font-semibold cursor-pointer">
            Tiếp
          </div>
        </div>
      </div>
    </div>
  );
}
