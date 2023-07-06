const signUp = document.querySelector(".sign-up");
const signIn = document.querySelector(".sign-in");
const Home = document.querySelector(".home");
const start = document.querySelector(".web")
const About = document.querySelector(".about");
const Contact = document.querySelector(".contact");
function signup(){
    signUp.style.display = "block";
    signIn.style.display = "none";
    Home.style.display="none";
    start.style.display="none";
    About.style.display = "none";
    Contact.style.display = "none";
}
function less1(){
    signUp.style.display = "none";
    start.style.display="block";
}
function signin(){
    signIn.style.display = "block";
    signUp.style.display = "none";
    Home.style.display = "none";
    start.style.display="none";
    About.style.display = "none";
    Contact.style.display = "none";
}
function less2(){
    signIn.style.display = "none";
    start.style.display="block";
}
function home(){
    signUp.style.display = "none";
    signIn.style.display = "none";
    Home.style.display="block";
    start.style.display="none";
    About.style.display = "none";
    Contact.style.display = "none";

}
function less3(){
    Home.style.display = "none";
    start.style.display = "block"
}
function about(){
    signUp.style.display = "none";
    signIn.style.display = "none";
    Home.style.display="none";
    start.style.display="none";
    About.style.display = "block";
    Contact.style.display = "none";
}
function less4(){
    About.style.display = "none";
    start.style.display = "block"
}
function contact(){
    signUp.style.display = "none";
    signIn.style.display = "none";
    Home.style.display="none";
    start.style.display="none";
    About.style.display = "none";
    Contact.style.display = "block";
}
function less5(){
    Contact.style.display = "none";
    start.style.display = "block"
}