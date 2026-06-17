// template id: template_ycx0add
// serivce key: service_452pqhf
// public key: mefr3HBKrPkw_e80L

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"

    emailjs
    .sendForm(
        'service_452pqhf',
        'template_ycx0add',
        event.target,
        'mefr3HBKrPkw_e80L'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
        console.log('It worked 1')
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable - Please contact me directly via map13jun@gmail.com"
        )
    })
   
    loading.classList += " modal__overlay--visible"
    setTimeout(() => {
    }, 1000);
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}