var canvas = document.getElementsByTagName('canvas')[0];
function fitToContainer(canvas) {
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}
window.onresize = () => {
    fitToContainer(canvas)
    cw = canvas.width;
    ch = canvas.height;
    createContent()
    update()
}
fitToContainer(canvas)
var ctx = canvas.getContext('2d');
var skillSet
var cw = canvas.width;
var ch = canvas.height
var mouseX = cw / 2
var mouseY = ch / 2
var content = {
    rows: [['Vue', 'React', 'REST API', 'Mongodb'], ['Github', 'Node', 'AJAX', 'Vuex'], ['SASS', 'CSS3', 'JSX', 'Materialize'], ['Redux', 'Heroku', 'ES6', 'Bootstrap']],
    size: [16, 18, 22, 26],
    mvmnt: [0.1, 0.2, 0.3, 0.4],
    x: [0, 0.2, 0.5, 0.7],
    y: [0, 0.25, 0.5, 0.8]
}
function createContent() {
    skillSet = [];
    for (let i = 0; i < content.rows.length; i++) {
        for (j = 0; j < content.rows[i].length; j++)
            skillSet.push({
                skill: content.rows[i][j],
                size: content.size[rndBtwn(0, content.size.length)],
                mvmnt: content.mvmnt[rndBtwn(0, content.mvmnt.length)],
                posX: 0 + 20 + content.x[j] * cw,
                posY: 16 + 20 + content.y[i] * ch
            })
    }
}
createContent()
function render() {
    for (let i = 0; i < skillSet.length; i++) {
        drawSkill(skillSet[i])
    }
}
function drawSkill(skill) {
    ctx.font = skill.size + 'px ' + 'Ariel';
    var x = skill.posX + (mouseX - cw / 2) * skill.mvmnt;
    var y = skill.posY + (mouseY - ch / 2) * skill.mvmnt;
    ctx.fillText(skill.skill, x, y)
}
canvas.onmousemove = (ev) => {
    mouseX = ev.pageX - canvas.offsetLeft;
    mouseY = ev.pageY - canvas.offsetTop;
    update()
}
render()
function update() {
    clear();
    render()
}
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function rndBtwn(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
canvas.onmouseout = () => {
    mouseX = cw / 2
    mouseY = ch / 2
    update()
}



// function init() {
//     initCanvas()
// }
// window.onresize = () => {
//     clear()
//     initCanvas()
// }
// //CANVAS
// var canvas = document.getElementsByTagName('canvas')[0];
// var mouseX = canvas.width / 2;
// var mouseY = canvas.width / 2;
// var ctx = canvas.getContext('2d');
// var skillSet;
// var cw = canvas.width
// var ch = canvas.height
// console.log(ch)
// canvas.onmouseout = () => {
//     mouseX = canvas.width / 2;
//     mouseY = canvas.width / 2;

//     update()
// }
// var content = {
//     skills: [['Vue', 'React', 'ES6', 'Mongodb'], ['Github', 'Node', 'AJAX', 'Vuex'], ['SASS', 'CSS3', 'JSX', 'Materialize'], ['Redux', 'Heroku', 'Bootstrap']],
//     size: [26, 20, 16, 16, 16],
//     mvmnt: [0.1, 0.2, 0.3, 0.4],
//     x: [0, cw * 0.3, cw * 0.5, cw * 0.7],
//     y: [0, 0.5 * ch, , 0.7 * ch, 0.9 * ch]
// }
// function initCanvas() {
//     skillSet = []
//     fitToContainer()
//     createContent()
//     render()
// }
// init()
// function fitToContainer() {
//     // Make it visually fill the positioned parent
//     canvas.style.width = '100%';
//     canvas.style.height = '100%';
//     // ...then set the internal size to match
//     canvas.width = canvas.offsetWidth;
//     canvas.height = canvas.offsetHeight;
// }

// function createContent() {
//     for (let i = 0; i < content.skills.length; i++) {
//         for (let j = 0; j < content.skills[i].length; j++) {
//             skillSet.push({
//                 skill: content.skills[i][j],
//                 size: content.size[rndBtwn(0, 4)],
//                 mvmnt: content.mvmnt[i],
//                 // posX: rndBtwn(0, canvas.width * 0.7),
//                 posX: (content.x[j]),
//                 posY: content.y[i],
//                 // posY: rndBtwn(0, canvas.height * 0.7)
//             })
//         }
//     }
// }
// function drawSkill(skill) {
//     ctx.font = skill.size + 'px ' + 'Lato';
//     // var x = skill.posX + (mouseX - canvas.width / 2) * skill.mvmnt;
//     var x = skill.posX + (mouseX - canvas.width / 2);
//     // var y = skill.posY + (mouseY - canvas.height / 2) * skill.mvmnt;
//     var y = skill.posY + (mouseY - canvas.height / 2);
//     ctx.fillText(skill.skill, x, y)
// }
// function render() {
//     for (let i = 0; i < skillSet.length; i++) {
//         drawSkill(skillSet[i]);
//     }
// }

// canvas.onmousemove = function (ev) {
//     mouseX = ev.pageX - canvas.offsetLeft;
//     mouseY = ev.pageY - canvas.offsetTop;
//     console.log(mouseX, 'mousex', mouseY, ',ousey')
//     update()
// }
// function update() {
//     clear();
//     render()
// }
// function clear() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
// }

// function rndBtwn(min, max) {
//     return Math.floor(Math.random() * (max - min) + min)
// }






// SCROLLSPY
window.addEventListener('scroll', function () {
    const sectionList = document.querySelectorAll('#nav-list A')
    handleScroll(sectionList)
});
const offset = window.innerHeight + 42;
function handleScroll(sectionList) {
    let yPos = document.documentElement.scrollTop;
    let heightCheck = offset;
    let sections = document.getElementsByTagName('section');
    for (let i = 0; i < sections.length; i++) {
        if (yPos >= heightCheck) {
            let former = document.querySelector('.active-link')
            if (former) former.classList.remove('active-link')
            sectionList[i].classList.add('active-link')
        }
        heightCheck += sections[i].clientHeight
    }
}