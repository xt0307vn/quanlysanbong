import React from 'react'
import Text_Singup from '../Text_Singup';
import './Form_Signup.scss'

const Form_Signup = () => {
  return (
    <div className="input_signup">
        <form>
        <h3>Đăng ký thành viên</h3>
          <div className='d-flex'> 
          <Text_Singup lable='Họ và tên'/>
          <input style={{marginLeft:'50px'}} type="text" placeholder="Họ và tên" />
          </div>
          <div className='d-flex'>
          <Text_Singup lable='Tên đăng nhập: '/>
          <input style={{marginLeft:'15px'}} type="text" placeholder="Tên đăng nhập" />
          </div>
          <div className='d-flex'>
          <Text_Singup  lable='Mật khẩu: '/>
          <input style={{marginLeft:'48px'}} type="text" placeholder="Mật khẩu" />
          </div>
          <div className='d-flex'>
          <Text_Singup lable='Nhập lại mật khẩu: '/>
          <input style={{marginLeft:'-5px'}} type="text" placeholder="Nhập lại mật khẩu"  />
          </div>
          <div className='d-flex'>
          <Text_Singup lable='SĐT: '/>
          <input style={{marginLeft:'83px'}} type="text" placeholder="SĐT"/>
          </div>
          <div className='d-flex'>
          <Text_Singup lable='Địa chỉ: '/>
          <input style={{marginLeft:'65px'}} type= "text" placeholder="Địa chỉ" />
          </div>
          <div className='d-flex'>
          <Text_Singup lable='Email: '/>
          <input style={{marginLeft:'73px'}} type="text" placeholder="Email"/>
          </div>
          <div className='d-flex'>
            <button >Đăng ký</button>
            <h5>Yêu cầu đăng ký chủ sân bóng</h5> 
          </div> 
        </form>
    </div>
  )
}

export default Form_Signup