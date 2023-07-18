import FooterOnly from "../Layout/FooterOnly";
import HeaderOnly from "../Layout/HeaderOnly";
import Login from "../page/Auth/Login";
import Page from "../page/Page/Page";
import PageCreation from "../page/Page/PageCreation";
import Reel from "../page/Reel/Reel";
import VideoList from "../page/Video/VideoList";
import Friend from "../page/friend/Friend";

import UserDetail from "../page/userDetail/UserDetail";

interface Route {
  component: () => JSX.Element;
  path: string;
  layout: ({ children }: { children: JSX.Element }) => JSX.Element;
}

const publicRoute: Route[] = [
  { component: Login, path: "/", layout: FooterOnly },
];

const privateRoute: Route[] = [
  { component: Login, path: "/reel", layout: Reel },
  { component: VideoList, path: "/watch/:nav", layout: HeaderOnly },
  { component: VideoList, path: "/watch", layout: HeaderOnly },
  { component: Login, path: "/page/creation", layout: PageCreation },
  { component: Page, path: "/page/:nav", layout: HeaderOnly },
  { component: Page, path: "/page/", layout: HeaderOnly },
  { component: UserDetail, path: "/user/:id", layout: HeaderOnly },
  { component: Friend, path: "/friends/:nav", layout: HeaderOnly },
  { component: Friend, path: "/friends", layout: HeaderOnly },
];


export { publicRoute, privateRoute };
