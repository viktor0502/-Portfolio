const swiper = new Swiper('.swiper', {
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
        // when window width is >= 320px
        320:{
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        769: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        
      }
  });


  // FORM

  const TOKEN = '5719979763:AAGGAOCn8OY5IYT-E0JDDxI81WO3Wlqc58Q';
const CHAT_ID = '-1001733852031';
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const success = document.getElementById('success')

const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    let message = `<b> Заявка с сайта! </b>\n`
    message += `<b> Имя: </b> ${ this.name.value } \n`
    message += `<b> Телефон: </b> ${ this.phone.value }`

    axios.post(URI_API, {
        chat_id: CHAT_ID, 
        parse_mode: 'html',
        text: message
    })
    .then((res) =>{
        this.name.value = ''
        this.phone.value = ''
        success.style.display = 'block'
    })
    .catch((err) => {
        console.warn(err);
    })
    .finally(() =>{
        console.log('Over')
    })
})