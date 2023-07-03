export default function Success({title}:{title:string}) {
  return (
    <div>
      <div
        className="bg-[#DFF2BF] border border-green-200 text-[#270] px-4 py-3 rounded relative"
        role="alert"
      >
        <span className="block sm:inline">{title}.</span>
      </div>
    </div>
  );
}