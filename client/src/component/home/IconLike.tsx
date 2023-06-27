import like from "../../assets/Home/like.gif";
import wow from "../../assets/Home/wow.gif";
import angry from "../../assets/Home/angry.gif";
import care from "../../assets/Home/care.gif";
import haha from "../../assets/Home/haha.gif";
import love from "../../assets/Home/love.gif";
import sad from "../../assets/Home/sad.gif";
import './index.css'

export default function IconLike() {
  const icon =[
    {id:1, icon:like},
    {id:2, icon:love},
    {id:3, icon:care},
    {id:4, icon:haha},
    {id:5, icon:wow},
    {id:6, icon:sad},
    {id:7, icon:angry},
  ]

  return (
    <div>
      <div className="flex">
        {icon.map(icon=>
          <div key={icon.id} className="w-[50px] h-[50px] ">
          <img className="w-full object-cover hover:scale-150 transition duration-300 ease-in-out" src={icon.icon} />
        </div>
          )}
        
      </div>
    </div>
  );
}
