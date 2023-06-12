import React, { useState } from 'react';
import "./login.css";
import Footer from "../../components/footer/Footer"

export default function Login(props) {
  const { email, setEmail, password, setPassword, handleLogin, errorMessage } = props;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers((prevUsers) => [...prevUsers, formData]);
    setFormData({ email: "", password: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <div style={{backgroundColor:'#eeeeee', height:'100%' }}>
      {/* ===================Form validation đăng nhập=================== */}

        <div style={{display: 'flex' ,height:'500px'}}>

            <div className="formloginne">
              <div className="formlogindk">
                  
                  <div className="formlogincon">
                    <form className='formlogincon1' onSubmit={handleLogin}>
                      <h4 style={{textAlign:'center',fontSize:'25px'}}>Đăng nhập</h4>
                      <p>Tên tài khoản hoặc địa chỉ email :
                          <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />
                      </p>
          
                      <p>Mật khẩu :
                          <input type="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
                      </p>
                      
                      <p><button style={{width:'100px', height:'40px',borderRadius:'10px' }} className="btn btn-secondary"  type="submit">ĐĂNG NHẬP</button> {errorMessage}</p>
                          
                      </form>
                  </div>
          
              </div>
          </div>
      {/* ===================Form validation đăng ký=================== */}
          <div className="formloginne1">
            <div className="formlogindk">
                
                <div className="formlogincon">
                  <form className='formlogincon1' onSubmit={handleSubmit}>
                    <h4>Đăng ký</h4>
                    <p>Địa chỉ email :
                        <input type="email" className="form-control" name="email" id="email" value={formData.email} onChange={handleChange} />
                    </p>
          
                    <p>Mật khẩu :
                        <input type="password" className="form-control" name="password" id="password" value={formData.password} onChange={handleChange} />
                    </p>
                      <p><button style={{width:'100px', height:'40px',borderRadius:'10px' }}  className="btn btn-secondary" type="submit">ĐĂNG KÝ</button></p>
                    </form>
                    {/* Bảng hiện ra thông tin đã đăng ký */}
                    <div className="banghienratn">
                      <h4 style={{fontSize:'20px'}}>Tài khoản đã được đăng ký</h4>
                        <table  className="table table-bordered" border="0">
                          <thead className="bg-secondary text-light">
                            <tr>
                            <th style={{width:'100%' ,margin:'0 0 0 - 500px'}}>Email</th>
                            <th >Mật khẩu</th>
                            </tr>
                          </thead>
                          {users.map((user, index) => (
                          <tbody key={index}> 
                            <tr>
                            <td >{user.email}</td>
                            <td >{user.password}</td>
                            </tr>
                          </tbody>
                          ))}
                        </table>
                        </div>
                  
                </div>
          
            </div>
          </div>
          
          </div>

          <div className="">
            <Footer/>
          </div>

    </div>
  );
}

