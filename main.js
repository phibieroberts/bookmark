const tabItems=document.querySelectorAll('.tab-item');
const tabContentItems=document.querySelectorAll('.tab-content-item');

function selectItem(e){
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    //grabbing item from dom
    const tabContentItem= document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}
function removeBorder(){
    tabItems.forEach(item =>item.classList.remove('tab-border'));
}
//listen for tab click
tabItems.forEach(item =>item.addEventListener('click', selectItem));

function removeShow(){
    tabContentItems.forEach(item=> item.classList.remove('show'));
}
//validating email using regex
var submit=document.querySelector('#contact');

    // submit.addEventListener('click', function validateEmail(e){
    //           e.preventDefault();    

    // if(mail.match(regx)){
    //     console.log('yes')
    //     form.classList.add("valid")
    //             form.classList.remove("invalid")

    // }
    // else{
    //     console.log('no')

    //     form.classList.remove("valid");
    //     form.classList.add("invalid")

    // }
    function validateEmail(){
        var mail=document.getElementById("text").value;
// var reg=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var regx= /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+.)([a-z]+)(.[a-z]+)?$/;

    if(mail.match(regx)){
        console.log("correct")
        return true
    }
else{
    console.log("incorrect")
    return false
}
} // });
//openeing the navbar by clicking the hamburger
const hamBurger = document.querySelector(".mobile-navbar");
const openBar = document.getElementById("menu-bar");
const closeBar = document.querySelector(".close-bar");
openBar.addEventListener('click', function () {
    hamBurger.classList.add("show")})

closeBar.addEventListener('click', function () {
        hamBurger.classList.remove("show")
    
})
//closing the navbar by clicking the close bar.


