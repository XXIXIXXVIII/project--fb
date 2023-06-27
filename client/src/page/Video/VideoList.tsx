import NavBarLayout from "../../component/navBar/NavBarLayout";
import VideoNavBar from "../../component/video/VideoNavBar";
import { useParams } from 'react-router-dom';
import Home from "../../component/video/Home";


export default function VideoList() {
  const {nav} = useParams()
  console.log(nav);
  return (
    <div className="flex">
      <div className="basis-[23.5%]"></div>
      <div className="w-[23.5%] fixed">
        <NavBarLayout>
          <div><VideoNavBar/></div>
        </NavBarLayout>
      </div>
      <div className="flex-1 bg-gray-200 min-h-screen">
        {nav===undefined&&<Home/>}
      </div>
    </div>
  )
}
