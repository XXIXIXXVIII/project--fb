

export default function NavBarLayout({children}:{children:JSX.Element|undefined}) {
  return (
    <div style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }} className="bg-white  min-h-screen p-2"> 
      {children}
    </div>
  )
}
