// import _ from "lodash";
// import dayjs from 'dayjs';
import "../style/explore.css";

document.getElementById("main_container").style.visibility="hidden";

document.getElementById("explore_more").addEventListener("click",()=>{
    document.getElementById("main_container").style.visibility = "visible";
});

// document.getElementById("date").innerHTML = 
//     `Data and Time: ${dayjs().format('YYYY MM-DD HH:mm A')}`;

// document.getElementById("result").innerHTML = 
//     `Thank you for visit. Total bill ${_.add(200,300)}`;





