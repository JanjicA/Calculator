// dohvatanje svih dugmica
const btns = document.querySelectorAll('.btn');

// ovde ce se prikazivati
const screen = document.querySelector('.screen');

const equalbtn = document.querySelector('.btn-equal');
const btnClear = document.querySelector('.btn-clear');

for (let i = 0; i<btns.length; i++){
    btns[i].addEventListener('click', function(){
        let number = btns[i].getAttribute('data-num');
        screen.value += number;
    })
}

// eval funkcija za prikazivanje sta god da se nalazi na ekranu
equalbtn.addEventListener('click', function(){

    if(screen.value === ''){
        alert("Enter number!");
    }else{
        let value = eval(screen.value);
        screen.value = value;
    }
    
})

btnClear.addEventListener('click', function(){
    screen.value = "";
})