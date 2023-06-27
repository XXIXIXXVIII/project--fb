import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useEffect } from 'react';

export default function HeaderPick({
  icon,
  iconPick,
  pick,
  setPick,
  tippy,
  name
}: {
  icon: string;
  iconPick: string;
  pick: string;
  setPick: React.Dispatch<React.SetStateAction<string>>;
  tippy?:string,
  name?:string
}) {
  const currentURL = window.location.href;

  useEffect(()=>{
    if(currentURL==="http://localhost:5173/"){setPick("/src/assets/HeaderDefault/home.svg")}
    if(currentURL==="http://localhost:5173/friends"){setPick("/src/assets/HeaderDefault/friend.svg")}
    if(currentURL==="http://localhost:5173/watch"){setPick("/src/assets/HeaderDefault/videos.svg")}

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentURL])

// console.log(icon);
  return (
    <Tippy content={tippy}>
    <div
      style={{ borderBottom: pick === icon ?  "4px solid #1B74E4" :""}}
      className="flex items-center justify-center h-full cursor-pointer"
    >
      <div className='px-8 py-2 rounded-xl hover:bg-gray-200 flex items-center justify-center gap-2'><img src={pick === icon ? iconPick : icon} /> <span className='text-[15px] font-medium' style={{color:pick === icon ?"hsl(214, 89%, 52%)":"#65676B"}}>{name}</span></div>
    </div>
    </Tippy>
  );
}
