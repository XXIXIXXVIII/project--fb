import {RiSettings5Fill, RiFlag2Fill} from 'react-icons/ri'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom'
import Avatar from '../abc/Avatar';

export default function NavHomePage() {
  const {nav} = useParams()
  console.log(nav);
  return (
    <div className="w-full h-screen">
      <div>
      <div className="flex items-center justify-between p-2">
        <div className="text-2xl font-bold">Trang</div>
        <div className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center cursor-pointer">
          <RiSettings5Fill size={24} />
        </div>
      </div>
      <div className='p-2 rounded-lg flex items-center gap-3 bg-gray-200 cursor-pointer'>
        <div className='text-white w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center'>
          <div><RiFlag2Fill size={20}/></div>
        </div>
        <div className='font-semibold text-[17px]'>Trang của bạn</div>
      </div>
      <div style={{background:!nav?"rgb(229 231 235)":"white"}} className='p-2 rounded-lg flex items-center gap-3 hover:bg-gray-200 cursor-pointer ml-5'>
        <Avatar size='w-6 h-6' avarta='https://i.pinimg.com/474x/11/73/8e/11738eee4b0c2117659d35fcdb20e103.jpg'/>
        <div className='font-semibold text-[15px]'>Aaaaaaaaaaaaaaaaa</div>
      </div>

      <Link to={'/page/creation'} className='bg-blue-100 flex items-center justify-center  py-2 rounded text-blue-600 font-semibold cursor-pointer hover:bg-blue-200 my-4'><div className='flex items-center gap-2'><AiOutlinePlus/> Tạo Trang mới</div></Link>
      <div className='border-b border-gray-300'></div>
      </div>
    </div>
  )
}
