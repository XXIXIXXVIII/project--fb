import DefaultLayout from "../Layout/DefaultLayout";
import FooterOnly from "../Layout/FooterOnly";
import HeaderOnly from "../Layout/HeaderOnly";
import Login from "../page/Auth/Login";
import Reel from "../page/Reel/Reel";
import VideoList from "../page/Video/VideoList";
import Friend from "../page/friend/Friend";
import Home from "../page/home/Home";
import UserDetail from "../page/userDetail/UserDetail";

interface Route {
  component: () => JSX.Element;
  path: string;
  layout: ({ children }: { children: JSX.Element }) => JSX.Element;
}

const publicRoute: Route[] = [
  { component: Login, path: "/login", layout: FooterOnly },
  { component: Login, path: "/reel", layout: Reel },
  { component: VideoList, path: "/watch/:nav", layout: HeaderOnly },
  { component: VideoList, path: "/watch", layout: HeaderOnly },
  { component: UserDetail, path: "/user/:id", layout: HeaderOnly },
  { component: Friend, path: "/friends/:nav", layout: HeaderOnly },
  { component: Friend, path: "/friends", layout: HeaderOnly },
];

const privateRoute: Route[] = [
  { component: Home, path: "/", layout: DefaultLayout },
];

export { publicRoute, privateRoute };
