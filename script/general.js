const header = document.getElementsByTagName('header')[0];
    let originalHeaderSize;
const firstElement = document.getElementById('page').children[0];
const contentSections = document.getElementsByClassName('content');
const smallContentSections = document.getElementsByClassName('smallContent');
const largeDividers = document.getElementsByClassName('title');
const smallDividers = document.getElementsByClassName('subtitle');
const footer = document.getElementsByTagName('footer')[0];

const resizePage = () => {
    originalHeaderSize = window.innerHeight / 10;
    header.style.height = originalHeaderSize + "px";
    
    firstElement.style.paddingTop = Number(header.style.height.split("px")[0]) + "px";
    
    for(element of contentSections) {
        element.style.minHeight = window.innerHeight + "px";
    }
    
    for(element of smallContentSections) {
        element.style.minHeight = window.innerHeight / 4 + "px";
    }
    
    for(element of largeDividers) {
        element.style.minHeight = window.innerHeight / 4 + "px";
    }
    
    for(element of smallDividers) {
        element.style.minHeight = window.innerHeight / 8 + "px";
    }
    
    footer.style.minHeight = window.innerHeight / 5 + "px";
};

resizePage();

window.onresize = resizePage;

const shrinkHeader = (event) => {
    if(document.documentElement.scrollTop >= Number(header.style.height.split("px")[0])) {
        header.style.height = originalHeaderSize / 2 + "px";
    } else {
        header.style.height = originalHeaderSize + "px";
    }
}

window.onscroll = shrinkHeader;