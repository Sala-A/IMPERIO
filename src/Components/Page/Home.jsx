import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import Error from "./Error"

export default function Home() {
  return (
    <div className="home">
    <Navbar/>,
    <Error />
    <Footer/>
    </div>
  )
}
