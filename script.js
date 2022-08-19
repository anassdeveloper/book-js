const about = document.getElementById('about');
const input = document.getElementById('input');
const send = document.getElementById('send');
const myBtn = document.querySelector('.my-btn');



//_____-SCROLL-______//
myBtn.addEventListener('click', () => {
    about.scrollIntoView({ behavior: 'smooth' });
})

send.addEventListener('click', getUserEmail)

function getUserEmail(e){
    e.preventDefault();
    if(input.value !== ""){
        document.querySelector('.pop-image').style.display = "block";
    }else{
        document.querySelector('.error').textContent = "أدخل بريدك إلكتروني من فضلك";
    }
}
