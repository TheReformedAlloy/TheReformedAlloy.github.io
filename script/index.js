const header = document.getElementsByTagName('header')[0];
    let originalHeaderSize;
const mainPage = document.getElementById('page').children;
const footer = document.getElementsByTagName('footer')[0];

const setInitialSizes = () => {
    originalHeaderSize = window.innerHeight / 10 + "px";
    header.style.height = originalHeaderSize;
    
    mainPage[0].style.minHeight = window.innerHeight + "px";
    mainPage[0].style.paddingTop = Number(header.style.height.split("px")[0]) + "px";
    mainPage[1].style.minHeight = window.innerHeight / 4 + "px";
    mainPage[2].style.minHeight = window.innerHeight + "px";
    
    footer.style.height = window.innerHeight / 5 + "px";
};

setInitialSizes();

window.onresize = setInitialSizes;

const resizeHeader = (event) => {
    if(event.target.scrollTop >= Number(header.style.height.split("px")[0])) {
        header.style.height = originalHeaderSize / 2;
    } else {
        header.style.height = originalHeaderSize;
    }
}

document.documentElement.onscroll = resizeHeader;