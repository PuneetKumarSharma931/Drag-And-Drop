
let imgBox = document.querySelector('div.imgBox');
let whiteBoxes = document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart', (e) => {

    e.target.classList.add('hold');

    setTimeout(() => {

        e.target.classList.add('hide');
    }, 0);
});

imgBox.addEventListener('dragend', (e) => {

    e.target.classList.remove('hide');
    e.target.classList.remove('hold');
});

for (let boxes of whiteBoxes) {

    boxes.addEventListener("dragover", (e) => {

        e.preventDefault();
    });

    boxes.addEventListener('dragenter', (e) => {

        e.target.className = 'whiteBox';
        e.target.className += ' dragOver';

    });

    boxes.addEventListener('dragleave', (e) => {

        e.target.className = 'whiteBox';
        e.target.className += ' dragLeaveTransit';

    });

    boxes.addEventListener('drop', (e) => {

        e.target.appendChild(imgBox);
        e.target.className = 'whiteBox';
        e.target.className += ' dropTransit';
    });
}