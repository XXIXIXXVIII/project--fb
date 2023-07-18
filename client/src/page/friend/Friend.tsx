import FriendlistNavBar from "../../component/friends/FriendlistNavBar";
import FriendsNavBar from "../../component/friends/FriendsNavBar";
import Home from "../../component/friends/Home";
import ListAllFriendsNavBar from "../../component/friends/ListAllFriendsNavBar";
import RequestNavBar from "../../component/friends/RequestNavBar";
import SuggestionsNavbar from "../../component/friends/SuggestionsNavbar";
import NavBarLayout from "../../component/navBar/NavBarLayout";
import { useParams } from "react-router-dom";
import UserDetail from "../userDetail/UserDetail";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hook";
import privateAxios from "../../fetchConfig/privateAxios";

export default function Friend() {
  const { nav } = useParams()
  const [reqFriendsData, setReqFriendsData] = useState([])
  const [idFriends, setIdFriends] = useState<number|null|undefined>()
  const id = useAppSelector(state=>state.auth.currentUser.id)

  const fetchReqFriend = async()=>{
    try {
      const result = await privateAxios.get('user/friends/request')
      setReqFriendsData(result.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    if(!nav||nav=='requests'){
      fetchReqFriend()
    }

  },[nav])

  const resetStatus = ()=>{
    fetchReqFriend()
  }

console.log(reqFriendsData);
  return (
    <div className="flex">
      <div className="basis-[23.5%]"></div>
      <div className="w-[23.5%] fixed">
        <NavBarLayout>
          <>
            {nav === undefined && (
              <div>
                <FriendsNavBar/>
              </div>
            )}
            {nav === "requests" && (
              <div>
                <RequestNavBar reqFriendsData={reqFriendsData} setIdFriends={setIdFriends}/>
              </div>
            )}
            {nav === "suggestions" && (
              <div>
                <SuggestionsNavbar />
              </div>
            )}
            {nav === "list" && (
              <div>
                <ListAllFriendsNavBar setIdFriends={setIdFriends} id={id}/>
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
            <Home reqFriendsData={reqFriendsData} setIdFriends={setIdFriends}/>
          </div>
        )}
        {nav === "requests"&& idFriends && (
          <div>
            <UserDetail idFriends={idFriends} resetStatus={resetStatus}/>
          </div>
        )}
        {nav === "suggestions"&& idFriends && (
          <div>
            <UserDetail idFriends={idFriends}/>
          </div>
        )}
        {nav === "list"&& idFriends && (
          <div>
            <UserDetail idFriends={idFriends}/>
          </div>
        )}
      </div>
    </div>
  );
}
