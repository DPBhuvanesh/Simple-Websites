
const btns = document.querySelectorAll('.btn')
const contain = document.querySelector('.container');

btns.forEach((element) => {
    element.addEventListener('click',() => {

        let color = element.value
        console.log(color)
        contain.style.background = color;
        
    
    });
});

