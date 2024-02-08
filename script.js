let yes = document.querySelector('.yes')
let no = document.querySelector('.no')
let text = document.querySelector('.votes__line')

yes.addEventListener('click', choice)
no.addEventListener('click', choice)
function choice(){
    text.innerHTML='Ваш голос учтен! Спасибо за выбор!'
}
