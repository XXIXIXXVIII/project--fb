import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { userData } from "../../Dto/Dto";

export default function RequestNavBar({
  reqFriendsData,
  setIdFriends,
}: {
  reqFriendsData: userData[];
  setIdFriends: React.Dispatch<React.SetStateAction<number | null | undefined>>;
}) {
  return (
    <div>
      <div className="mx-2 mt-3 pb-3 flex gap-2 items-center border-b border-gray-300">
        <Link
          to={"/friends"}
          className="text-gray-600 w-9 h-9 rounded-full flex items-center justify-center hover:bg-slate-200"
        >
          <IoMdArrowBack size={22} />
        </Link>
        <div>
          <div className="text-[13px] text-[#65676B]">Bạn bè</div>
          <div className="text-2xl font-bold">Lời mời kết bạn</div>
        </div>
      </div>
      <div className="mt-4 w-full overflow-y-scroll h-[590px]">
        <div className="mx-2">
          <div className="text-[17px] font-semibold">{reqFriendsData.length} lời mời kết bạn</div>
          <div className="text-[13px] text-blue-500 cursor-pointer hover:text-blue-600 mt-1">
            Lời mời kết bạn
          </div>
        </div>

        {/* ===========item=============== */}
        {reqFriendsData?.map((user) => (
          <div
            key={user.id}
            onClick={()=>setIdFriends(user.id)}
            className="flex gap-4 items-start hover:bg-slate-100 p-2 rounded-lg cursor-pointer mt-2"
          >
            <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full overflow-hidden">
              <img
                className="object-cover aspect-square w-full"
                src={user.avatar}
              />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm">
                {user.firstName} {user.lastName}
              </div>
              {user.mutualFriends && user.mutualFriends?.length > 0 && (
                <div className="mt-2 flex items-center">
                  {user.mutualFriends?.slice(0, 3).map((item, index) => (
                    <div
                      key={item.id}
                      style={{ zIndex: `${100 - index}` }}
                      className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center relative -ml-2 border-2 border-white box-content"
                    >
                      <img
                        className="object-cover w-full h-full"
                        src={item.avatar}
                      />
                    </div>
                  ))}

                  <div className="text-[#65676B] text-[13px] ml-2">
                    {user.mutualFriends?.length} bạn chung
                  </div>
                </div>
              )}
              <div className="grid grid-cols-2 gap-3 w-full mt-2">
                <button className="btn-primary flex items-center justify-center">
                  Xác nhận
                </button>
                <button className="btn-second">Xóa</button>
              </div>
            </div>
          </div>
        ))}


      </div>
    </div>
  );
}
