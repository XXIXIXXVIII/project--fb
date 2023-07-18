import { Link } from "react-router-dom";
import { userData } from "../../Dto/Dto";

export default function Home({
  reqFriendsData,
  setIdFriends,
}: {
  reqFriendsData: userData[];
  setIdFriends: React.Dispatch<React.SetStateAction<string | null | undefined>>;
}) {
  return (
    <div className="p-9 bg-slate-100 min-h-screen">
      <div className="pb-4 text-xl font-bold">Lời mời kết bạn</div>
      {reqFriendsData&&reqFriendsData.length===0&&<div className="text-xl font-semibold w-full p-4 border border-gray-300 rounded-md text-center">Bạn Chưa có lời mời kết bạn</div>}
      <div className="grid grid-cols-5 gap-2">
        {/* ==============item============== */}
        {reqFriendsData?.map((item) => (
          <Link
            to={"/friends/requests"}
            key={item.id}
            onClick={() => setIdFriends(item.id)}
            style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
            className="rounded-xl overflow-hidden border border-gray-300"
          >
            <div className="aspect-square flex items-center justify-center">
              <img
                className="object-cover w-full aspect-square"
                src={item.avatar}
              />
            </div>
            <div className="p-3 bg-white">
              <div className="text-[17px] font-semibold">
                {item.firstName} {item.lastName}
              </div>



              {/* ==bạn chung == */}
              <div className="flex items-center gap-1">
                <div className="flex items-center">
                  {item?.mutualFriends
                    ?.slice(0, 3)
                    .map((item1, index: number) => (
                      <div
                        style={{ zIndex: `${1000 - index}` }}
                        className="w-6 h-6 relative -ml-1 border-2 border-white rounded-full overflow-hidden"
                        key={index}
                      >
                        <img
                          className="w-full h-full object-cover"
                          src={item1.avatar}
                        />
                      </div>
                    ))}
                </div>
                {item.mutualFriends && item.mutualFriends.length > 0 ? (
                  <div className="text-[#65676B]">
                    {item?.mutualFriends?.length} bạn chung
                  </div>
                ):<div className="w-full h-6"></div>}
              </div>
              

              <div className="flex flex-col gap-2 mt-3">
                <button className="btn-primary">Xác nhận</button>
                <button className="btn-second">Xóa</button>
              </div>
            </div>
          </Link>
        ))}
        

      </div>
    </div>
  );
}
