export default function Avatar({size, avarta}:{size:string,avarta?:string}) {
  return (
    <div className={`${size} aspect-ratio rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 cursor-pointer overflow-hidden`}>
            <img
              className="object-cover w-full"
              src={avarta}
            />
          </div>
  )
}
