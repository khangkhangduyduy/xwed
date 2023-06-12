import "./cart.css"
import Footer from "../../components/footer/Footer"

export default function Cart(){

  return (
    <div className="cart">
      <div className="pading">

        <div className="thongtinspcart">
          <table className="" style={{border:'1px solid khaki',width:'100%',height:'50px',backgroundColor:'white',marginBottom:'100px'}}>
            <tr className="" style={{}} >
              <td className="" style={{textAlign:'left'}}><i className="fa-solid fa-truck-fast" style={{margin:'0 10px 0 15px',color:'rgb(0, 191, 165)',}}></i>
              Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!
              </td>
            </tr> 
          </table>
        </div>
        
          <table className="tablespcart"  style={{marginTop:'-80px'}}>
            <tr className="trcart" >
              <td className="tdcart">
              Sản Phẩm 
              </td>
              <td className="tdcart">
              Đơn Giá
              </td>
              <td className="tdcart">
              Số Lượng 
              </td>
              <td className="tdcart">
              Số Tiền
              </td>
              <td className="tdcart">
              Thao Tác
              </td>
            </tr> 
          </table>
  

      <h2 style={{margin:'0 0 0 30px'}}>Có thể bạn thích nó </h2>
      <div className="spto">
          
        <div className="sp1">
          <img
          className="spImg"
          src="https://github.com/khangkhangduyduy/mewmew/blob/master/maykhoan.jpg?raw=true" 
          alt="" />
          <div className="chune">
            <h5>mũi khoan fake</h5>
            <h5 className="giatien">20$</h5> 
          </div>
        </div>

        <div className="sp2">
          <img
          className="spImg"
          src="https://github.com/khangkhangduyduy/mewmew/blob/master/tra.jpg?raw=true" 
          alt="" />
          <div className="chune">
            <h5>Trà fake</h5>
            <h5 className="giatien">20$</h5> 
          </div>
        </div>

        <div className="sp3">
          <img
          className="spImg"
          src="https://github.com/khangkhangduyduy/mewmew/blob/master/pin.jpg?raw=true" 
          alt="" />
          <div className="chune">
            <h5>Pin fake</h5>
            <h5 className="giatien">20$</h5> 
          </div>
        </div>

        <div className="sp4">
          <img
          className="spImg"
          src="https://github.com/khangkhangduyduy/mewmew/blob/master/pc.jpg?raw=true" 
          alt="" />
          <div className="chune">
            <h5>PC fake</h5>
            <h5 className="giatien">20$</h5> 
          </div>
        </div>

        <div className="sp5">
          <img
          className="spImg"
          src="https://github.com/khangkhangduyduy/mewmew/blob/master/tapta.jpg?raw=true" 
          alt="" />
          <div className="chune">
            <h5>Laptop fake</h5>
            <h5 className="giatien">20$</h5> 
          </div>
        </div>

        <div className="sp6">
          <img
          className="spImg"
          src="https://github.com/khangkhangduyduy/mewmew/blob/master/tainghe.jpg?raw=true" 
          alt="" />
          <div className="chune">
            <h5>Tai nghe fake</h5>
            <h5 className="giatien">20$</h5> 
          </div>
        </div>
        </div>

        <div className="spto">
          
          <div className="sp1">
            <img
            className="spImg"
            src="https://github.com/khangkhangduyduy/mewmew/blob/master/maykhoan.jpg?raw=true" 
            alt="" />
            <div className="chune">
              <h5>mũi khoan fake</h5>
              <h5 className="giatien">20$</h5> 
            </div>
          </div>
  
          <div className="sp2">
            <img
            className="spImg"
            src="https://github.com/khangkhangduyduy/mewmew/blob/master/tra.jpg?raw=true" 
            alt="" />
            <div className="chune">
              <h5>Trà fake</h5>
              <h5 className="giatien">20$</h5> 
            </div>
          </div>
  
          <div className="sp3">
            <img
            className="spImg"
            src="https://github.com/khangkhangduyduy/mewmew/blob/master/pin.jpg?raw=true" 
            alt="" />
            <div className="chune">
              <h5>Pin fake</h5>
              <h5 className="giatien">20$</h5> 
            </div>
          </div>
  
          <div className="sp4">
            <img
            className="spImg"
            src="https://github.com/khangkhangduyduy/mewmew/blob/master/pc.jpg?raw=true" 
            alt="" />
            <div className="chune">
              <h5>PC fake</h5>
              <h5 className="giatien">20$</h5> 
            </div>
          </div>
  
          <div className="sp5">
            <img
            className="spImg"
            src="https://github.com/khangkhangduyduy/mewmew/blob/master/tapta.jpg?raw=true" 
            alt="" />
            <div className="chune">
              <h5>Laptop fake</h5>
              <h5 className="giatien">20$</h5> 
            </div>
          </div>
  
          <div className="sp6">
            <img
            className="spImg"
            src="https://github.com/khangkhangduyduy/mewmew/blob/master/tainghe.jpg?raw=true" 
            alt="" />
            <div className="chune">
              <h5>Tai nghe fake</h5>
              <h5 className="giatien">20$</h5> 
            </div>
          </div>
          </div>

          </div>
        <div className="footerne">
          <Footer/>
        </div>
    </div>

  )
}
