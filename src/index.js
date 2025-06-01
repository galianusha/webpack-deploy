// import _ from "lodash";
// import dayjs from 'dayjs';
import logo from './assets/images/logo.jpg';
import Image2 from './assets/images/pic1.png';
import '../style/style.css';
import './assets/fonts/DancingScript-VariableFont_wght.ttf';


const element =document.getElementById("title")
document.getElementById('toast').style.visibility="hidden";

document.getElementById("title").addEventListener("click",()=>{

    import("lodash").then(({default:_})=>{
    element.innerHTML = 
 `Thank you for visit on ${dayjs().format('YYYY MM-DD HH:mm A')}. your bill is 500`
     element.style.visibility="visible"

    })
})


document.getElementById('logo').src = logo
document.getElementById('bg_image').src = Image2

export function unused_function_1(){
    console.log("unsed function 1");
}

export function unused_function_2(){
    console.log("unsed function 2");
}
// document.getElementById("toast").innerHTML = 
// `Thank you for visit on ${dayjs().format('YYYY MM-DD HH:mm A')}. your bill is 500`