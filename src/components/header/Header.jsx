import "./header.css"

export default function Header() {
  return (
    <div className='header'>
      <div className="lon9">
      <div class="menu">
    <label for="slide-dot-1"></label>
    <label for="slide-dot-2"></label>
    <label for="slide-dot-3"></label>
  </div>
  
  <input id="slide-dot-1" type="radio" name="slides" checked />
    <div class="slide slide-1"></div>
  
  <input id="slide-dot-2" type="radio" name="slides" />
    <div class="slide slide-2"></div>
  
  <input id="slide-dot-3" type="radio" name="slides"/>
    <div class="slide slide-3"></div>
      </div>


      <div className="nho3">
      <div class="box">
    <div class="box-item1"></div>
    <div class="box-item2"></div>
    <div class="box-item3"></div>
    <div class="box-item4"></div>
    </div>
      </div>
    </div>
  )
}
