import { Link } from "react-router-dom";
import { useState } from "react";
import NavRight from "../../component/header/NavRight";
import {
  BsX,
  BsMessenger,
  BsBookmarkHeartFill,
  BsFillCaretDownFill,
  BsFillCollectionPlayFill,
  BsFillInfoCircleFill,
  BsFillSignTurnRightFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import logoFb from "../../assets/HeaderDefault/logoFb.svg";
import NavBarLayout from "../../component/navBar/NavBarLayout";
import "../../index.css";
import Avatar from "../../component/abc/Avatar";
import Step1 from "../../component/page/creationPage/Step1";
import Step2 from "../../component/page/creationPage/Step2";
import Step3 from "../../component/page/creationPage/Step3";
import privateAxios from "../../fetchConfig/privateAxios";
import { useAppDispatch } from "../../redux/hook";
import { loginPage } from "../../redux/authSlice";

export default function PageCreation() {
  const [step, setStep] = useState(1);
  const [namePage, setNamePage] = useState("");
  const [categoryPage, setCategoryPage] = useState("");
  const [story, setStory] = useState("");
  const [webName, setWebName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [avartaPage, setAvartaPage] = useState("");
  const [coverImgPage, setCoverImgPage] = useState("");
  const [cityTown, setCityTown] = useState("");
  const [zipCode, setZipCode] = useState("");
  const dispatch = useAppDispatch()

  const handleComplete = async (avartaUrl: string, coverImgUrl: string) => {
    try {
      const result = await privateAxios.post("/page/createPage", {
        namePage,
        categoryPage,
        story,
        webName,
        phone,
        email,
        address,
        avartaUrl,
        coverImgUrl,
        cityTown,
        zipCode,
      });
      if(result.status===201){
        dispatch(loginPage({pageId:result.data.id}))
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex ">
      <div className="flex items-center gap-3 fixed top-2 left-4 z-30 ">
        <Link
          to={"/watch"}
          className="cursor-pointer w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white"
        >
          <BsX size={34} />
        </Link>
        <Link to={"/"} className="w-10 h-10 overflow-hidden cursor-pointer">
          <img className="object-cover w-full h-full" src={logoFb} />
        </Link>
      </div>
      <div className="fixed top-2 right-4 z-30">
        <NavRight />
      </div>
      <div className="basis-[23.5%]"></div>
      <div className="w-[23.5%] fixed">
        <NavBarLayout>
          <div className="mt-14 border-t border-gray-200">
            {step === 1 && (
              <Step1
                setNamePage={setNamePage}
                setCategoryPage={setCategoryPage}
                setStory={setStory}
                setStep={setStep}
              />
            )}
            {step === 2 && (
              <Step2
                setStep={setStep}
                namePage={namePage}
                setWebName={setWebName}
                setPhone={setPhone}
                setEmail={setEmail}
                setAddress={setAddress}
                setCityTown={setCityTown}
                setZipCode={setZipCode}
              />
            )}
            {step === 3 && (
              <Step3
                setStep={setStep}
                setAvartaPage={setAvartaPage}
                avartaPage={avartaPage}
                coverImgPage={coverImgPage}
                setCoverImgPage={setCoverImgPage}
                handleComplete={handleComplete}
              />
            )}
          </div>
        </NavBarLayout>
      </div>
      <div className="flex-1 bg-gray-200 relative min-h-screen">
        <div className="w-[70%] left-[27%] top-16 bg-white rounded-xl loginHome p-4 overflow-y-auto fixed h-screen">
          <div className="text-[15px] font-semibold">
            Xem trước trên máy tính
          </div>
          <div className="my-4 rounded-lg border border-gray-200 mt-10 pointer-events-none">
            <div className="w-full rounded-lg h-80 bg-gray-100 relative">
              {coverImgPage && (
                <div className="absolute w-full h-full rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover"
                    src={coverImgPage}
                  />
                </div>
              )}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 z-20 border-4 border-white rounded-full">
                <div className="rounded-full border border-gray-400">
                  <Avatar
                    avarta={
                      avartaPage ||
                      "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/7051cc1d4a798b7d8be07e255e153af5~c5_720x720.jpeg?x-expires=1689260400&x-signature=JHwynp7cMevbC%2FtOKh0ozMZjH4o%3D"
                    }
                    size="w-52 h-52"
                  />
                </div>
              </div>
            </div>

            <div className="pb-3">
              {namePage && (
                <div className="text-3xl font-bold text-center mt-14 h-6 ">
                  {namePage}
                </div>
              )}
              {!namePage && (
                <div className="text-3xl font-bold text-center mt-14 h-6 text-[#65676B]">
                  Tên Trang
                </div>
              )}
            </div>
            <div className="text-lg text-center my-3 border-b border-gray-300 mx-4">
              {story}
            </div>
            <div className="border-b border-gray-300 py-2">
              <div className="grid grid-cols-7 mx-4 gap-3">
                <div className="font-semibold text-gray-600 text-center flex items-center justify-center gap-2 p-2">
                  Bài viết
                </div>
                <div className="font-semibold text-gray-600 text-center flex items-center justify-center gap-2 p-2">
                  Giới thiệu
                </div>
                <div className="font-semibold text-gray-600 text-center flex items-center justify-center gap-2 p-2">
                  Người theo dõi
                </div>
                <div className="font-semibold text-gray-600 text-center flex items-center justify-center gap-2 p-2">
                  Ảnh
                </div>
                <div className="font-semibold text-gray-600 text-center flex items-center justify-center gap-2 p-2">
                  <div>xem thêm</div>
                  <div>
                    <BsFillCaretDownFill size={14} />
                  </div>
                </div>
                <div className="font-semibold text-gray-600 text-center flex items-center justify-center gap-2 p-2 bg-gray-300 rounded-lg opacity-50">
                  <div>
                    <BsBookmarkHeartFill />
                  </div>
                  <div>Theo dõi</div>
                </div>
                <div className="font-semibold text-gray-600 text-center flex items-center justify-center gap-2 p-2 bg-gray-300 rounded-lg opacity-50">
                  <div>
                    <BsMessenger />
                  </div>
                  <div>Nhắn tin</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 w-full min-h-[500px] flex gap-6">
              <div className="basis-[40%] mt-5">
                <div className="p-4 rounded-lg border border-gray-200  bg-white w-[90%] mx-auto">
                  <div className="font-bold text-xl">Giới thiệu</div>
                  <div className="text-gray-500 flex items-center gap-3 mt-5">
                    <div>
                      <BsFillCollectionPlayFill size={22} />
                    </div>
                    <div className="text-black font-semibold">
                      0 người theo dõi
                    </div>
                  </div>
                  <div className="text-black flex items-center gap-3 mt-5">
                    <div className="text-gray-500">
                      <BsFillInfoCircleFill size={22} />
                    </div>
                    <div className="text-black font-semibold">Trang</div>
                    <div className="">
                      {categoryPage ? categoryPage : "Hạng Mục"}
                    </div>
                  </div>
                  {address && (
                    <div className="text-black flex items-center gap-3 mt-5">
                      <div className="text-gray-500">
                        <BsFillSignTurnRightFill size={22} />
                      </div>
                      <div className="">{address}</div>
                    </div>
                  )}
                  {phone && (
                    <div className="text-black flex items-center gap-3 mt-5">
                      <div className="text-gray-500">
                        <BsFillTelephoneFill size={22} />
                      </div>
                      <div className="">{phone}</div>
                    </div>
                  )}
                  {email && (
                    <div className="text-black flex items-center gap-3 mt-5">
                      <div className="text-gray-500">
                        <MdEmail size={22} />
                      </div>
                      <div className="">{email}</div>
                    </div>
                  )}
                  {webName && (
                    <div className="text-black flex items-center gap-3 mt-5">
                      <div className="text-gray-500">
                        <TbWorld size={22} />
                      </div>
                      <div className="">{webName}</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <div className="mt-5 w-[90%] bg-white rounded-lg p-4 flex items-center justify-between">
                  <div className="font-bold text-xl">Bài viết</div>
                  <button className="text-base flex items-center gap-2 p-2 bg-gray-200 rounded-md">
                    <div>
                      <LuSettings2 />
                    </div>
                    <div className="font-semibold text-sm">Bộ lọc</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
