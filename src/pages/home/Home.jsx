import "./home.css"
import Header from "../../components/header/Header"
import Post from "../../components/post/Post"
import Proo from "../../components/homeproduct/Proo"
import Footer from "../../components/footer/Footer"

export default function Home() {
  return (
    <div className='home'>
      <Header/>
      <Post/>
      <Proo/>
      <Footer/> 
    </div>
  )
}
