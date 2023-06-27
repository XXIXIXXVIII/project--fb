import { IoEarth } from "react-icons/io5";
import { BsDot } from "react-icons/bs";

export default function Comment() {
  return (
    <div className="w-[360px] h-full bg-white">
        <div className="mt-16 p-4 border-t border-gray-300">

          <div className="flex items-center gap-3">
              <div className="w-10 h-10 overflow-hidden rounded-full flex items-center justify-center">
                <img
                  className="object-cover w-full h-full"
                  src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/332478214_987462458883352_7524400638173794967_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PdV_h0hrMSQAX8JJZls&_nc_ht=scontent.fhan15-1.fna&oh=00_AfA8S5l4ao15oypksfZBcXAN5T71KYK-FkeO7EK6XjahYg&oe=649D90BE"
                />
              </div>
              <div>
                <div className="text-[15px] font-semibold flex items-center">
                  Mikaylah <BsDot /> Theo dõi
                </div>
                <div className="text-[13px] flex items-center gap-1">
                  <IoEarth /> Công khai
                </div>
              </div>
            </div>

            <div className="flex gap-2 items-center py-2 border-b border-gray-300">
              <div>Lộ ác 😂😂😂 </div>
              <div className="text-[15px] font-bold hover:underline cursor-pointer">
                #mikaylah
              </div>
            </div>
        </div>
        </div>
  )
}
