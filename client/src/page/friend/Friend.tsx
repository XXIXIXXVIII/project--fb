import FriendlistNavBar from "../../component/friends/FriendlistNavBar";
import FriendsNavBar from "../../component/friends/FriendsNavBar";
import Home from "../../component/friends/Home";
import ListNavBar from "../../component/friends/ListNavBar";
import RequestNavBar from "../../component/friends/RequestNavBar";
import SuggestionsNavbar from "../../component/friends/SuggestionsNavbar";
import NavBarLayout from "../../component/navBar/NavBarLayout";
import { useParams } from "react-router-dom";
import UserDetail from "../userDetail/UserDetail";

export default function Friend() {
  const { nav } = useParams();

  return (
    <div className="flex">
      <div className="basis-[23.5%]"></div>
      <div className="w-[23.5%] fixed">
        <NavBarLayout>
          <>
            {nav === undefined && (
              <div>
                <FriendsNavBar />
              </div>
            )}
            {nav === "requests" && (
              <div>
                <RequestNavBar />
              </div>
            )}
            {nav === "suggestions" && (
              <div>
                <SuggestionsNavbar />
              </div>
            )}
            {nav === "list" && (
              <div>
                <ListNavBar />
              </div>
            )}
            {nav === "birthdays" && (
              <div>
                <FriendsNavBar />
              </div>
            )}
            {nav === "friendlist" && (
              <div>
                <FriendlistNavBar />
              </div>
            )}
          </>
        </NavBarLayout>
      </div>
      <div className="flex-1">
        {nav === undefined && (
          <div>
            <Home />
          </div>
        )}
        {nav === "requests"&& (
          <div>
            <UserDetail />
          </div>
        )}
        {nav === "suggestions"&& (
          <div>
            <UserDetail />
          </div>
        )}
        {nav === "list"&& (
          <div>
            <UserDetail />
          </div>
        )}
      </div>
    </div>
  );
}
