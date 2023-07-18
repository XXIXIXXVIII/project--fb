import NavBarLayout from "../../component/navBar/NavBarLayout";
import NavHomePage from "../../component/page/NavHomePage";
import MainHomePage from "../../component/page/MainHomePage";


export default function Page() {
  return (
    <div className="flex">
      <div className="basis-[23.5%]"></div>
      <div className="w-[23.5%] fixed">
        <NavBarLayout>
          <NavHomePage/>
        </NavBarLayout>
      </div>
      <div className="flex-1">
        <MainHomePage/>
      </div>
    </div>
  )
}
