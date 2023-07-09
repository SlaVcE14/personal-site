let privateRepos = document.getElementsByClassName('private-repo');
let msgDialog = document.getElementById('msg_dialog');
let msgTxt = document.getElementById('msg_txt');
let navBtn = document.getElementById('nav_btn');

let sections = document.querySelectorAll('.section');
let menu = document.querySelectorAll('#nav_ul li a');

let isMsgDialogOpen = false;
let isNavOpen = false;


window.onscroll = () => {

    document.body.style.setProperty(
        "--scroll",
        (window.scrollY /   window.innerHeight).toString()
    );

    sections.forEach(i => {
        let top = window.scrollY;
        let offset = i.offsetTop - 150;
        let height = i.offsetHeight;
        let id = i.getAttribute('id');
        if (top >= offset && top < offset + height){
            menu.forEach(link => {
                link.classList.remove('active');
                document.querySelector('#nav_ul li a[href*=' + id + ']').classList.add('active');
            })
        }
    });
}

for(let r of privateRepos){
    r.addEventListener('click',()=> {
        showDialog("This project is private");
    })
}
msgDialog.addEventListener('click',  function (e) {
    if (e.target !== this)
        return;
    hideDialog();
});
document.addEventListener("keydown",  (e)=>{
    if (e.key === "Escape"){

        if (isMsgDialogOpen){
            hideDialog();
            return false;
        }
        if (isNavOpen){
            showNav();
            return false;
        }
    }
}, false);
document.getElementById('main').addEventListener('click', function (e){

    if (!isNavOpen && e.target !== this)
        return;
    showNav();
})
function privateRepo(){

}
function showNav(){
    document.getElementById('nav_ul').classList.toggle("open");
    if (isNavOpen){
        navBtn.style.backgroundImage = "url('img/icons/menu.png') ";
    }else navBtn.style.backgroundImage = "url('img/icons/menu_close.png') ";
    isNavOpen = !isNavOpen;
}
function showDialog(str){
    msgTxt.innerHTML = str;
    msgDialog.style.visibility = "visible";
    msgDialog.style.opacity = "1";
    msgDialog.getElementsByTagName('div')[0].style.scale = "1";
    isMsgDialogOpen = true;
}
function hideDialog(){
    msgDialog.style.visibility = "hidden";
    msgDialog.style.opacity = "0";
    msgDialog.getElementsByTagName('div')[0].style.scale = "0";
    isMsgDialogOpen = false;
}

