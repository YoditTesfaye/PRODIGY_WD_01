// select all nav items
const navitems = document.querySelectorAll('a');

// change color on hover
navitems.forEach(item => {
    item.addEventListener('mouseover' , () => {
        item.style.backgroundColor = '#FFC144';
    });
    item.addEventListener('mouseout' , () => {
        item.style.backgroundColor = '' ;
    });
})

// Select all elements with the class 'box'
const boxes = document.querySelectorAll('.box');

// Function to show the paragraph
function showParagraph() {
    const paragraph = this.querySelector('.para1');
    paragraph.classList.add('visible');
    this.style.height = 'auto';
}

// Function to hide the paragraph
function hideParagraph() {
    const paragraph = this.querySelector('.para1');
    paragraph.classList.remove('visible');
    this.style.height = 'auto';
}

// Add event listeners to handle hover for each box
boxes.forEach(box => {
    box.addEventListener('mouseenter', showParagraph);
    box.addEventListener('mouseleave', hideParagraph);
});
