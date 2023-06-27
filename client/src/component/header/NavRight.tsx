import {useState} from 'react'
import Tippy from '@tippyjs/react/headless';

import bell from "../../assets/HeaderDefault/bell.svg";
import mess from "../../assets/HeaderDefault/mess.svg";
import menu from "../../assets/HeaderDefault/menu.svg";
import Avatar from "./Avatar";
import SettingUserTippy from "./SettingUserTippy";
import Menu from "./Menu";



export default function NavRight() {
  const [showSettingUserTippy, setShowSettingUserTippy] = useState(false);
  const [showMenuTippy, setShowMenuTippy] = useState(false);
  console.log(showSettingUserTippy);

  return (
    <div className="flex gap-2 text-black">
    <Tippy content="Menu">
      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 cursor-pointer">
        <img src={menu} />
      </div>
    </Tippy>
    <Tippy content="Messenger">
      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 cursor-pointer">
        <img src={mess} />
      </div>
    </Tippy>
    <Tippy
            onClickOutside={() => setShowMenuTippy(false)}
            placement="bottom-end"
            interactive
            visible={showMenuTippy}
            render={attrs => (
              <div className="box -mt-2 border border-gray-200 rounded-xl overflow-hidden shadow-2xl -mr-12" {...attrs}>
                <Menu />
              </div>
            )}>
      <div onClick={() => setShowMenuTippy(!showMenuTippy)} className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 cursor-pointer">
        <img src={bell} />
      </div>
    </Tippy>

    <Tippy
    onClickOutside={() => setShowSettingUserTippy(false)}
    placement="bottom-end"
    interactive
    visible={showSettingUserTippy}
     render={attrs => (
      <div className="box rounded-lg w-[368px] -mt-2 border border-gray-200 overflow-hidden shadow-2xl" {...attrs}>
        <SettingUserTippy />
      </div>
    )}          
    >
      <div onClick={() => setShowSettingUserTippy(!showSettingUserTippy)}>
        <Avatar size={"w-10"}/>
      </div>
    </Tippy>
  </div>
  )
}
