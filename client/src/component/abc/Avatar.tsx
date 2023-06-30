import { useAppSelector } from "../../redux/hook"

export default function Avatar({size}:{size:string}) {
  const avatar = useAppSelector((state) => state.auth.currentUser?.avatar);
  return (
    <div className={`${size} aspect-ratio rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 cursor-pointer overflow-hidden`}>
            <img
              className="object-cover w-full"
              src={avatar}
            />
          </div>
  )
}
