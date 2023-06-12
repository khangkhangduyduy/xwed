import "./navBar.css"
import { Link } from "react-router-dom";


export default function NavBar(props) {  
const { isLoggedIn, handleLogout} = props;
  return (
    <div className="navBar">
      <div className="navleft">
      <Link className="link" to="/"><img className="ImgNavleft" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwey4T0SXf_fi486nlJwuPJqRboVNWIwaQnQ&usqp=CAU" alt="" /></Link>
      </div>
      <div className="navcenter">
        <ul className="ulcenter">
        
          <li className="searchneba">
                        <input type="text" placeholder="Tìm kiếm sản phẩm cần tìm..." />
                      
          </li>               
      </ul>
      </div>
      <div className="navright">
        <div className="logout">
        {isLoggedIn ? (
              <li><Link className="link" onClick={handleLogout}><i style={{fontSize:'28px',margin:'0 0 0 0'}} className="fa-solid fa-right-from-bracket"></i> </Link></li>
          ):(
              <li><Link className="link" to="/login">
              <img className="navImg" 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdXOcPjXox2hG1Qr2yJ0PKUM5QjAbkZnjSTw&usqp=CAU" 
              alt="" 
              /></Link></li>
                  )}
        
        </div>       
          <Link className="link" to="/cart"><i className="carrr fa-solid fa-cart-shopping"></i></Link>
      </div>
    </div>
  )
}

