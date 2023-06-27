import Avatar from "../header/Avatar";

export default function AvatarUserStatus({
  size,
  border,
  sizeBig,
}: {
  size: number;
  border: number;
  sizeBig: number;
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
        <Avatar size={`w-[${size}px]`} />
      </div>
    </div>
  );
}
