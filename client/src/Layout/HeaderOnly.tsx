import HeaderDefault from "../component/header/HeaderDefault";

export default function HeaderOnly({ children }: { children: JSX.Element }) {
  return (
    <div>
      <div className="bg-white shadow-lg sticky top-0 z-30"><HeaderDefault/></div>
      {children}
    </div>
  )
}



