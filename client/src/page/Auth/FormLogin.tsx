
import { useEffect, useState } from 'react';
import { loginRedux, resetAuthRedux } from "../../redux/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { showSignupRedux } from '../../redux/showSignup';
import Error from "../../component/Alert/Error";
import Loading from "../../component/Alert/Loading";

export default function FormLogin() {
  const [eyePassword, setEyePassword] = useState(true);
  const [password, setPassword] = useState("");
  const [gmail, setGmail] = useState("");
  const dispatch = useAppDispatch()

  const {currentUser,error , isFetching} = useAppSelector(state=>state.auth)

  const handleLogin = ()=>{
    dispatch(loginRedux({gmail, password}))
  }
  
const handleShowSignup =()=>{
  dispatch(showSignupRedux({showSignup:true}))
}

useEffect(()=>{
  const timeout = setTimeout(()=>{
    if(error||isFetching){
      dispatch(resetAuthRedux())
    }
    }
    ,4000)
 return ()=>clearTimeout(timeout)
// eslint-disable-next-line react-hooks/exhaustive-deps
},[error, isFetching])
    
  return (

            <div>
                    {error&&<div className="fixed top-[5%] left-1/2 -translate-x-1/2 w-80"><Error error={error}/></div>}
      {isFetching&&<div className="fixed top-[10%] left-1/2 -translate-x-1/2 w-1/3"><Loading/></div>}
              <div className="pt-[10px] pb-6 rounded-lg bg-white">
                <div className="px-4">
                  <div className="border-b border-gray-300 pb-5">
                    <div className="py-[6px]">
                      <input
                      onChange={(e)=>setGmail(e.target.value)}
                        className="input-auth w-full h-[51.6px] mx-auto"
                        placeholder="Email hoặc số điện thoại"
                      />
                    </div>
                    <div className="py-[6px] relative z-0">
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type={eyePassword ? "password" : "text"}
                        className="input-auth w-full h-[51.6px] mx-auto"
                        placeholder="Mật khẩu"
                      />
                      <div
                        onClick={() => setEyePassword(!eyePassword)}
                        className="w-[28px] h-[28px] absolute z-0 right-4 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full hover:bg-[rgba(0,0,0,.05)] cursor-pointer active:bg-[background-color: rgba(0,0,0,.15)]"
                      >
                        <img
                          className=""
                          src={
                            password.trim().split("").length > 1 ? eyePassword
                              ? "https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/je5FEJkU1_K.png"
                              : "https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/swFqSxKYa5M.png"
                          :""}
                        />
                      </div>
                    </div>
                    <div className="pt-[6px]">
                      <button onClick={handleLogin} className="btn-primary w-full text-xl ">
                        Đăng nhập
                      </button>
                    </div>
                    <button className="text-[#1877f2] text-sm mt-4 text-center w-full hover:underline">
                      Quên mật khẩu?
                    </button>
                  </div>
                  <div className="w-full py-5">
                    <button
                      onClick={handleShowSignup}
                      className="py-3 px-4 bg-[#42b72a] text-[17px] text-white font-semibold rounded-lg focus:outline-none mx-auto block text-center"
                    >
                      Tạo tài khoản mới
                    </button>
                  </div>
                </div>
              </div>
            </div>


  )
}
