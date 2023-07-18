import Avatar from "../abc/Avatar";

export default function AvatarUserStatus({
  size,
  border,
  sizeBig,
  avarta
}: {
  size: number;
  border: number;
  sizeBig: number;
  avarta?:string
}) {

  return (
    <div
      style={{ border: `${border}px solid white`, width: `${size + sizeBig}px`, height:`${size + sizeBig}px` }}
      className={`rounded-full bg-blue-600 flex items-center justify-center box-content aspect-ratio`}
    >
      <div
        style={{ border: `${border}px solid white` }}
        className={`rounded-full  border-white box-content aspect-ratio `}
      >
        <Avatar avarta={avarta} size={`w-[${size}px]`} />
      </div>
    </div>
  );
}
