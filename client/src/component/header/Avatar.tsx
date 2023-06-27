
export default function Avatar({size}:{size:string}) {
  return (
    <div className={`${size} aspect-ratio rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 cursor-pointer overflow-hidden`}>
            <img
              className="object-cover w-full"
              src="https://img.meta.com.vn/Data/image/2021/10/12/hinh-anh-lisa-blackpink-2.jpg"
            />
          </div>
  )
}
