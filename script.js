var myststus =document.querySelector("h5")


var addfriend = document.querySelector(".first-btn");

var message = document.querySelector(".second-btn");

var check = 0;




addfriend.addEventListener("click",function(){
    if(check == 0){
        myststus.innerHTML ="Friends"
        myststus.style.color="green"
        addfriend.innerHTML = "Un friend "
        check = 1
    }else{
        myststus.innerHTML ="stranger"
        myststus.style.color="red"
        addfriend.innerHTML = " Add friend "
        check = 0
    }
})

message.addEventListener("click",function(){
    if(check == 0){
        myststus.innerHTML ="Friends"
        myststus.style.color="green"
        message.innerHTML = " send Hi "
        check = 1
    }else{
        myststus.innerHTML ="stranger"
        myststus.style.color="red"
        message.innerHTML = " unsend "
        check = 0
    }
})
