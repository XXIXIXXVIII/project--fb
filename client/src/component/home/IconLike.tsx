import like from "../../assets/Home/like.gif";
import wow from "../../assets/Home/wow.gif";
import angry from "../../assets/Home/angry.gif";
import care from "../../assets/Home/care.gif";
import haha from "../../assets/Home/haha.gif";
import love from "../../assets/Home/love.gif";
import sad from "../../assets/Home/sad.gif";
import './index.css'
import privateAxios from "../../fetchConfig/privateAxios";

export default function IconLike({postId, setCurrenUserLikePost, setShowIcon, fetchStatusLikePost}:{postId:number, setCurrenUserLikePost: React.Dispatch<React.SetStateAction<string>> ,setShowIcon :React.Dispatch<React.SetStateAction<boolean>>, fetchStatusLikePost:() => Promise<void>}) {

  const icon =[
    {id:1, icon:like, name:'like'},
    {id:2, icon:love, name:'love'},
    {id:3, icon:care, name:'dear'},
    {id:4, icon:haha, name:'haha'},
    {id:5, icon:wow, name:'wow'},
    {id:6, icon:sad, name:'sad'},
    {id:7, icon:angry, name:'angry'},
  ]

  const handleLike = async (name:string)=>{
    await privateAxios.post(`/post/${name}`, {postId})
    await fetchStatusLikePost()
    setShowIcon(false)
    setCurrenUserLikePost(name)
  }

  return (
    <div>
      <div className="flex">
        {icon.map(icon=>
          <div onClick={()=>handleLike(icon.name)} key={icon.id} className="w-[50px] h-[50px] ">
          <img className="w-full object-cover hover:scale-150 transition duration-300 ease-in-out" src={icon.icon} />
        </div>
          )}
        
      </div>
    </div>
  );
}
