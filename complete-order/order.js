function order() {
    let button = document.querySelector('.order');
    if(!button.classList.contains('animate')) {
        button.classList.add('animate');
        setTimeout(() => {
            button.classList.remove('animate');
        }, 10000);
    }
}

