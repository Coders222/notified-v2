import { useState } from 'react'


function Login() {

  const [user, setUser] = useState('');
  const [pswd, setPswd] = useState('')

  function onSubmit(){
    if (user === '' || pswd === ''){
      console.log("Incomplete fields")
    }
    else{
      
    }
  }

  return (
    <div className="bg-slate-700 h-screen content-center justify-center flex">
      <div class = "rounded-3xl p-8 w-3/5 h-3/5 md:w-2/5 md:h-2/3 lg:w-1/3 lg:h-2/3 m-auto bg-white">
        <h1 class = "text-center font-bold " style={{fontSize: "5vmin"}}>
          Sign in
        </h1>
        <div class = "grid px-4 grid-rows-3 gap-8 mt-4 justify-items-center">
          <div>
            <label class = "px-2 py-2 font-mono" style={{fontSize:"2.5vmin"}}>Username</label>
            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2" placeholder="Lebron" required/>        
          </div>
          <div>
            <label class = "px-2 py-2 font-mono" style={{fontSize:"2.5vmin"}}>Password</label>
            <input type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2" placeholder="James" required/>        
          </div>
          <div>
            <button type="submit" class="justify-center rounded-lg bg-indigo-600 px-16 py-5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </div>


      </div>
    </div>
  );
}
  
  export default Login;
  