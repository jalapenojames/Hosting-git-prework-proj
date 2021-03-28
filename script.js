// const h2 = document.createElement('h2');
// h2.textContent = "This content added by JavaScript";

// document.querySelector('body').appendChild(h2);

const pageCover = document.getElementById('pageCover');

function slideAwayCover() {
    let cover = document.querySelector('#pageCover');
    cover.style.visibility = 'hidden';
}

function putCoverBack() {
    let cover = document.querySelector('#pageCover');
    cover.style.visibility = 'visible';
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        slideAwayCover();
    }
    if (e.key === "ArrowLeft") {
        putCoverBack();
    }
});

