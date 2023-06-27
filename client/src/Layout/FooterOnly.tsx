import Footer from "../component/footer/Footer";


export default function FooterOnly({ children }: { children: JSX.Element }) {
  return (
    <div>
      {children}
      <Footer/>
    </div>
  )
}
