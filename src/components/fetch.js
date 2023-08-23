
export async function request(method, api, params) {
    let fetchinput = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      }
    };
    if (method === "post") {
      params.authkey = sessionStorage.getItem("authkey");
      fetchinput.body = JSON.stringify(params);
    }
  
    const data = await fetch(`http://localhost:160${api}`, fetchinput)
      .then((res) => {
        if (res){
          console.log(res)
          return res.json();
        }
  
      })
      .then((res) => {
        return res;
      })
    return data;
  }