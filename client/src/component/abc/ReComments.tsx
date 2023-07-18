
import "../../index.css";

import Avatar from "./Avatar";
import moment from "moment";
import { Link } from "react-router-dom";



export default function ReComment({ dataReComment }: { dataReComment: any }) {

  const timeAgo = moment(dataReComment.createdAt).fromNow();

  return (
    <div className="">
      <div className="flex items-start gap-2 ">
        <Link to={`/user/${dataReComment?.user?.id}`}>
          <Avatar size="w-8 h-8" avarta={dataReComment?.user.avatar} />
        </Link>
        <div className="flex flex-col">
          <div className="py-1 px-3 bg-gray-200 rounded-2xl">
            <Link
              to={`/user/${dataReComment?.user?.id}`}
              className="text-[13px] font-semibold"
            >
              {dataReComment?.user.firstName} {dataReComment?.user.lastName}
            </Link>
            <div
              className="text-[15px] flex items-center flex-wrap"
              dangerouslySetInnerHTML={{ __html: dataReComment?.content }}
            ></div>
          </div>
          <div className="flex gap-4 ml-2 cursor-pointer">
            <div className="text-xs text-[#65676B] font-bold">Thích</div>
            <div className="text-xs text-[#65676B] font-bold">Phản hồi</div>
            <div className="text-xs text-[#65676B]">{timeAgo}</div>
          </div>
        </div>
      </div>


    </div>
  );
}
