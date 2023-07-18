
import { useEffect, useState } from 'react';
import { PostDto } from '../../Dto/Dto'
import CreatePost from '../abc/CreatePost'
import Post from '../abc/Post'
import Success from '../Alert/Success';
import NewPost from '../home/NewPost';
import '../../index.css'
import Loading from '../Alert/Loading';

export default function MainUserDetail({posts, fetchDataPost, userIsWho}:{posts:PostDto[]|undefined, fetchDataPost:()=>Promise<void>, userIsWho:string | undefined}) {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [successCreatePost, setSuccessCreatePost] = useState(false);
  const [loadding, setLoadding] =useState(false)

  const parendOffCreatePost = () => {
    if (showCreatePost) {
      setShowCreatePost(false);
    } else {
      setShowCreatePost(true);
    }
  };

  useEffect(()=>{
    if(successCreatePost==true){
      setShowCreatePost(false)
      const timeout = setTimeout(()=>{
        setSuccessCreatePost(false)
      },4000)
      return ()=>clearTimeout(timeout)
    }
  },[successCreatePost])

  console.log("object", posts);

  return (
    <div>
      {loadding&&<div  className="fixed left-1/2 -translate-x-1/2 top-[10%] z-50"><Loading/></div>}
      {successCreatePost&&<div className="fixed w-1/3 -translate-x-1/2 left-1/2 top-[15%] z-50"><Success title="Tạo bài post thành công" /></div>}
      {userIsWho==="me"&&<>
        {showCreatePost && (
          <div>
            <CreatePost setShowCreatePost={setShowCreatePost} setLoadding={setLoadding} parendOffCreatePost={parendOffCreatePost} fetchData={fetchDataPost} setSuccessCreatePost={setSuccessCreatePost}/>
          </div>
        )}
            <div className="mt-6">
            <NewPost parendOffCreatePost={parendOffCreatePost} />
          </div>
      </>}
      {posts?.length===0&&<div className='mt-6 font-semibold py-6 border border-gray-300 rounded-lg text-center'>Hiện tại chưa có bài viết nào</div>}
      {posts?.map(post=>
        <div key={post.id}>
        <div className='rounded-2xl overflow-hidden mt-5 post'><Post post={post}/></div>
      </div>
        )}
    </div>

  )
}
