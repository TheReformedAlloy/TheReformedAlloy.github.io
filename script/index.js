const header = document.getElementsByTagName('header')[0];
    let originalHeaderSize;
const mainPage = document.getElementById('page').children;
const footer = document.getElementsByTagName('footer')[0];

const setInitialSizes = () => {
    originalHeaderSize = window.innerHeight / 10;
    header.style.height = originalHeaderSize + "px";
    
    mainPage[0].style.minHeight = window.innerHeight + "px";
    mainPage[0].style.paddingTop = Number(header.style.height.split("px")[0]) + "px";
    mainPage[1].style.minHeight = window.innerHeight / 4 + "px";
    mainPage[2].style.minHeight = window.innerHeight + "px";
    
    footer.style.height = window.innerHeight / 5 + "px";
};

setInitialSizes();

window.onresize = setInitialSizes;

const resizeHeader = (event) => {
    console.log(document.documentElement.scrollTop);
    console.log(Number(header.style.height.split("px")[0]));
    console.log(document.documentElement.scrollTop >= Number(header.style.height.split("px")[0]));
    if(document.documentElement.scrollTop >= Number(header.style.height.split("px")[0])) {
        header.style.height = originalHeaderSize / 2 + "px";
    } else {
        header.style.height = originalHeaderSize + "px";
    }
}

window.onscroll = resizeHeader;