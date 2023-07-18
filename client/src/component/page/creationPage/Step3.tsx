import axios from "axios";
import { useEffect, useState } from "react";

export default function Step3({
  setStep,
  avartaPage,
  setAvartaPage,
  coverImgPage,
  setCoverImgPage,
  handleComplete,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  avartaPage: string;
  setAvartaPage: React.Dispatch<React.SetStateAction<string>>;
  coverImgPage: string;
  setCoverImgPage: React.Dispatch<React.SetStateAction<string>>;
  handleComplete: (avartaUrl: string, coverImgUrl: string) => Promise<void>;
}) {
  const [avartaUrl, setAvartaUrl] = useState("");
  const [coverImgUrl, setCoverImgUrl] = useState("");
  const [avartaFile, setAvartaFile] = useState<File>();
  const [coverImgFile, setCoverImgFile] = useState<File>();

  const handleImgAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAvartaFile(e.target.files[0]);
      const file = URL.createObjectURL(e.target.files[0]);
      setAvartaPage(file);
    }
  };

  const handleCoverImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCoverImgFile(e.target.files[0]);
      const file = URL.createObjectURL(e.target.files[0]);
      setCoverImgPage(file);
    }
  };

  useEffect(() => {
    return () => {
      avartaPage && URL.revokeObjectURL(avartaPage);
    };
  }, [avartaPage]);

  useEffect(() => {
    return () => {
      coverImgPage && URL.revokeObjectURL(coverImgPage);
    };
  }, [coverImgPage]);

  const handlePost = async () => {
    if (avartaFile && coverImgFile) {
      const formDataAvarta = new FormData();
      formDataAvarta.append("file", avartaFile);
      formDataAvarta.append("upload_preset", "facebookImage");

      const formDataCoverImg = new FormData();
      formDataCoverImg.append("file", coverImgFile);
      formDataCoverImg.append("upload_preset", "facebookImage");
      try {
        const [uploadMedia1, uploadMedia2] = await Promise.all([
          axios.post(
            "https://api.cloudinary.com/v1_1/dpztwoefq/image/upload",
            formDataAvarta
          ),
          axios.post(
            "https://api.cloudinary.com/v1_1/dpztwoefq/image/upload",
            formDataCoverImg
          ),
        ]);
        const avarta = uploadMedia1.data.secure_url;
        const coverImg = uploadMedia2.data.secure_url;
        setAvartaUrl(avarta);
        setCoverImgUrl(coverImg);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(()=>{
    if(avartaUrl && coverImgUrl){
      handleComplete( avartaUrl, coverImgUrl )
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[avartaUrl, coverImgUrl])

  return (
    <div className="mt-6 mx-3">
      <div className="text-gray-500 font-semibold text-[13px]">Bước 2/2</div>
      <div className="font-bold text-2xl">Tùy chỉnh Trang</div>
      <div className="text-[#65676B] text-[17px] mt-2">
        Ảnh đại diện của bạn là một trong những thứ đầu tiên mọi người nhìn
        thấy. Hãy thử dùng logo hoặc hình ảnh khiến họ dễ liên tưởng đến bạn.
      </div>

      <div className="mx-4 p-2 rounded-lg overflow-hidden bg-transparent border border-gray-300 mt-5">
        <label
          htmlFor="moreImg"
          className="bottom-0 w-full h-48 bg-[#F7F8FA] hover:bg-gray-200 rounded-sm cursor-pointer relative flex flex-col gap-2 items-center justify-center"
        >
          <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center">
            <div className="moreImg"></div>
          </div>
          <div className="text-[17px] font-semibold">Thêm ảnh đại diện</div>
          <input
            onChange={handleImgAvatar}
            type="file"
            id="moreImg"
            className="hidden"
          />
        </label>
      </div>

      <div className="mx-4 p-2 rounded-lg overflow-hidden bg-transparent border border-gray-300 mt-5">
        <label
          htmlFor="coverImg"
          className="bottom-0 w-full h-48 bg-[#F7F8FA] hover:bg-gray-200 rounded-sm cursor-pointer relative flex flex-col gap-2 items-center justify-center"
        >
          <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center">
            <div className="moreImg"></div>
          </div>
          <div className="text-[17px] font-semibold">Thêm ảnh bìa</div>
          <input
            onChange={handleCoverImg}
            type="file"
            id="coverImg"
            className="hidden"
          />
        </label>
      </div>

      <div className="flex gap-2 absolute w-[90%] bottom-4">
        <div
          onClick={() => setStep(2)}
          className="w-full py-2 text-center bg-gray-300 hover:bg-gray-400 rounded-lg text-black font-semibold cursor-pointer"
        >
          Trước
        </div>
        <div
          onClick={handlePost}
          className="w-full py-2 text-center bg-blue-200 hover:bg-blue-300 rounded-lg text-blue-600 font-semibold cursor-pointer"
        >
          Hoàn thành
        </div>
      </div>
    </div>
  );
}
