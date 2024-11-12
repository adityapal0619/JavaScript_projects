var count=0;

function update(){
    document.querySelector("h3").innerHTML=count;
}
document.getElementsByClassName("Decrease")[0].addEventListener('click', () => {
    count--;
    update();
});

document.getElementsByClassName("Reset")[0].addEventListener('click',() =>{
    count=0;
    update();
});

document.getElementsByClassName("Increase")[0].addEventListener('click',() =>{
    count++;
    update();
});

update();

