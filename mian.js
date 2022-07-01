
// check in localStorage color option
let maincolors = localStorage.getItem('color_option');
if(maincolors !== null){
    document.documentElement.style.setProperty('--main--color',maincolors)


    document.querySelectorAll("colors-list li").forEach(element => {

        element.classList.remove("active");

        if(element.dataset.color === maincolors){
            element.classList.add("active")

        }

    });





}

let logoo = document.getElementById("logo");
// toggel spin icon
 document.querySelector('.toggel-stting .fa-gear').onclick = function(){

this.classList.toggle("fa-spin")

document.querySelector(".setting-box").classList.toggle("open")

}

// switch colors
const colorli = document.querySelectorAll('.colors-list li');

colorli.forEach(li => {

    li.addEventListener("click",(e) => {

        document.documentElement.style.setProperty('--main--color', e.target.dataset.color);


        localStorage.setItem('color_option',e.target.dataset.color)


        // active
        e.target.parentElement.querySelectorAll(".active").forEach(element => {

            element.classList.remove("active");

        });

        e.target.classList.add("active");


    })
// on root color

});



// randome background option
let backgroundoption = true;

// clear the interval
 let backgroundInterva;

//  check if there's local storge randome background item
let backgroundlocalitem = localStorage.getItem("background_option");

if(backgroundlocalitem !== null){

    if(backgroundlocalitem === 'true'){
        backgroundoption = true;
    }else{
        backgroundoption = false;
    }
    // remove active  class all span
    document.querySelectorAll('.randome-backrounds span').forEach(element => {

        element.classList.remove('active');

    });

    if(backgroundlocalitem === 'true'){
        document.querySelector(".randome-backrounds .yes").classList.add("active");

    }else{
        document.querySelector(".randome-backrounds .no").classList.add("active");

    }
};
// start switch randome yes No 
const yesno = document.querySelectorAll('.randome-backrounds span');
yesno.forEach(span => {
    span.addEventListener('click',(e) => {
        e.target.parentElement.querySelectorAll('.active').forEach(element => {
            element.classList.remove('active');
        })
        e.target.classList.add("active");

        if(e.target.dataset.background === 'yes') {
            backgroundoption = true;
            randomizeimg()
            localStorage.setItem('background_option',true);

        }else{

            backgroundoption = false;
            clearInterval(backgroundInterva)
            localStorage.setItem('background_option',false);

           
        }

    })
})
// end switch yes no 

// select landing page element
let landinpadg = document.querySelector(".landing-page");
// get array imgs
let getimgArray = ["5.jpg","4.jpg","3.jpg","2.jpg","1.jpg"];
// function randomize imgs 
function randomizeimg(){

    if(backgroundoption === true){

        backgroundInterva = setInterval(() => {
            // get random numer
                let randomnuber = Math.floor(Math.random() * getimgArray.length);
            // chang background img url 
                landinpadg.style.backgroundImage = 'url("'+ getimgArray[randomnuber]+'")';
                
            },10000)
    }
}
randomizeimg()



// select skills seloctor
let ourskills = document.querySelector(".skills");
window.onscroll = function() {

    // skills offset top
    let skillsoffsetTop = ourskills.offsetTop;

    // skills outer height

let skillsouterHeight = ourskills.offsetHeight;

// window height
let windowheight = ourskills.innerHeight;

// window scrolltop 
let windowscrolltop = ourskills.pageYOffset;


if(windowscrolltop > (skillsoffsetTop + skillsouterHeight - windowheight)){

    let allskills = document.querySelectorAll('.skills-box .skills-progress span');

    allskills.forEach(skill =>{

        skill.style.width = skill.dataset.progress;

    });


};


};
