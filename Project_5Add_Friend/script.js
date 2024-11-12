const heading=document.getElementById("head");

const add=document.getElementById("add");
var check=0;

add.addEventListener("click",function(){

    if(check === 0){
        heading.innerHTML = "Friends";
       heading.style.color="green";
       add.innerHTML="Remove Friend"
       check=1;
    }
    else{
        heading.innerHTML = "Stranger";
        heading.style.color="Red";
        add.innerHTML="Add Friend";
        check=0;
    }
})

// const remove=document.getElementById("remove");
// remove.addEventListener("click",function(){
//     heading.innerHTML = "Stranger";
//     heading.style.color="red";
// })