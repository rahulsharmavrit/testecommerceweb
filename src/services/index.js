import axios from "axios";

let getjsonplaceholder = async () => {
  let response = await  axios.get("https://jsonplaceholder.typicode.com/photos?_start=1&_limit=10" , );
  return response
}

let postContactInfo = async (data) => {
    let response = await  axios.post("https://jsonplaceholder.typicode.com/photos?_start=1&_limit=10" , data
    );
    return response
  }

export {
    getjsonplaceholder,
    postContactInfo
}