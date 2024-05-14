// import axios from "axios"

// const ServerURL="http://localhost:4000"

// // const getData=async(url)=>{
// //     try{
// //         var response=await fetch(${ServerURL}/${url})
// //         var result=response.json()
// //         return(result)
// //     }
// //     catch(e){
// //         return(null)
// //     }
// // }




// const isValidAuth=async()=>{
//     try{
//       //alert(localStorage.getItem('token'))
//       var response=await axios.post(`${ServerURL}/signup`,{
//         headers:{'authorization':localStorage.getItem('token')}
//       })
//       var result=await response.json()
//       return(result)
  
//     }catch(e){
//         return(null)
//     }
  
//   }


// const postData=async(url,body)=>{
//     try{
//        /*  ****remove due to version change***** const headers={
//             headers:{
//                 "content-type":isFile?"multipart/form-data":"application/json",
//             }}*/
//             var response=await axios.post(`${ServerURL}/${url}`,body)
//             var result=await response.data
//             return(result)
//     }
//     catch(error){
//        // console.log(error)
//         return(false)
//     }
// }
// export{postData,ServerURL,isValidAuth}