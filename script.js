
let $ = document;
const eye = $.getElementById("eye-icon")
const pass = $.getElementById("pass")


// eye.classList.add("disable");

// alert(eye.classList)

// elem.classList.remove('disable');



// function Enable(elem) {
//     elem.classList.remove('disable');
// }
// function Disable(elem) {
//     elem.classList.add('disable');
// }

eye.addEventListener('click', () => {
    pass.type = pass.type === 'text' ? 'password' : 'text';
    eye.classList.toggle("Enable")


    console.log(eye.classList)
})




