const error = document.getElementById("error-button");
error.addEventListener('click', function(){
    console.error('Console error: SDA');
});

const info = document.getElementById("info-button");
info.addEventListener('click', function(){
    console.info('Console info: SDA');
});

const log = document.getElementById("log-button");
log.addEventListener('click', function(){
    console.log('Console log: SDA');
});

const warn = document.getElementById("warn-button");
warn.addEventListener('click', function(){
    console.warn('Console warn: SDA');
});

const alertbutton = document.getElementById("alert-button");
alertbutton.addEventListener('click', function(){
    alert('Okienko alert');
});

const confirmbutton = document.getElementById("confirm-button");
confirmbutton.addEventListener('click', function(){
    confirm('Okienko confirm');
});

const promptbutton = document.getElementById("prompt-button");
promptbutton.addEventListener('click', function(){
    prompt('Okienko prompt');
});