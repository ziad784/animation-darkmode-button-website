let btn = document.getElementById("btn");
let mode = document.getElementById("mode");
let icon = document.getElementById("icon");
let isdark = false;

mode.textContent = "Dark";

btn.addEventListener("click",()=>{
    modeChanger();
    
    
});




function modeChanger(){
    if(isdark == false){
        mode.textContent = "Light";
        icon.className = "fas fa-sun";
        document.body.classList.add("dark");
        mode.classList.add("anime");
        icon.classList.remove("change-sun");
        icon.classList.add("change-moon");
        isdark = true;

    }else{
        mode.textContent = "Dark";
        icon.className = "fas fa-moon";
        document.body.classList.remove("dark");
        mode.classList.remove("anime");
        icon.classList.add("change-sun");
        icon.classList.remove("change-moon");
        isdark = false;
    }
}