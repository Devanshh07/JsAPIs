let url = "https://catfact.ninja/fact";
// fetch(url)    //fetch for sending req & fetch by defualt return a Promises so we
//   //can use then catch method
//   .then((respone) => {
//     return respone.json()
//   })
//   .then((data) => {
//     console.log(data.fact);
//     return fetch(url)
//   })
//   .then((respone)=>{
//      return respone.json();
//   })
//   .then((data2)=>{
//     console.log(data2.fact);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   })

let btn  = document.querySelector("button");
let p = document.querySelector("p");

btn.addEventListener("click" , async ()=>{
   let fact = await getfact();
   console.log(fact);
   p.innerText =  fact;
  
});

async function getfact(){ //Axios Is a library of Java Script
  try{
    let res = await axios.get(url);
    return res.data.fact;                    
  } catch (err){
    return err;
  }
}