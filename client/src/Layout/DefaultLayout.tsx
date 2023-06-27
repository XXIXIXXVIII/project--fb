import HeaderDefault from "../component/header/HeaderDefault";
import ListFriends from "../component/home/ListFriends";
import NavBar from "../component/navBar/NavBar";

export default function DefaultLayout({ children }: { children: JSX.Element }) {
  return (
    <div>
      <div className="bg-white shadow-lg sticky top-0 z-30">
        <HeaderDefault />
      </div>
      <div className="flex bg-gray-100">
        <div className="basis-[23%]">
        <div className="w-[23%] fixed mt-4">
          <NavBar />
        </div>
        </div>
        
        <div className="flex-1">{children}</div>
        <div className="basis-[23.8%]"><div className="w-[23.8%] fixed mt-6"><ListFriends/></div></div>
      </div>
    </div>
  );
}
