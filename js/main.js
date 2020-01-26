document.querySelector('.menu-open').addEventListener('click', (e)=>{
    document.querySelector('#nav').classList.add('open');
    document.querySelector('.nav-container .menu').classList.add('show');    
    console.log('clicked')
})

document.querySelector('.menu-close').addEventListener('click', (e)=>{
    document.querySelector('#nav').classList.remove('open');
    document.querySelector('.nav-container .menu').classList.remove('show');    
})
