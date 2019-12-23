const setInitialSizes = () => {
    const header = document.getElementsByTagName('header')[0];
    header.style.height = window.innerHeight / 10 + "px";
    
    const mainPage = document.getElementById('page').children;
    
    mainPage[0].style.height = window.innerHeight + "px";
    mainPage[0].style.paddingTop = Number(header.style.height.split("px")[0]) + 20 + "px";
    console.log(Number(header.style.height.split("px")[0]) + 20 + "px");
    mainPage[1].style.height = window.innerHeight / 4 + "px";
    mainPage[2].style.minHeight = window.innerHeight + "px";
};

setInitialSizes();

window.onresize = setInitialSizes;