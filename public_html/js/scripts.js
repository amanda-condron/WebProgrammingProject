/*!
* Start Bootstrap - Landing Page v6.0.4 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    const form = document.getElementById('newDogForm');

    if(form.style.display == 'none'){
        document.getElementById('btn').innerHTML = "Click to close Form";
        form.style.display = 'block';
    }
    else{
        form.style.display = 'none';
        document.getElementById('btn').innerHTML = "Click to view Form";
    }
});
