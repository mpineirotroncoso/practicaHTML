const urlParams = new URLSearchParams(window.location.search);
const mode = urlParams.get('mode');
var dark = false;

if (!urlParams.has('mode')) {
    urlParams.set('mode','light');
    window.location.search = urlParams;
}

if (mode == 'light') {
    dark = false;
    setTimeout(() => {
        enableLightStyles();    
    }, 100);
} else {
    dark = true;
    setTimeout(() => {
        enableDarkStyles();    
    }, 100);
}

function switchDarkMode() {
    if (dark==false) {
        dark = true;
        urlParams.set('mode','dark');
        window.history.pushState(null,null,window.location.pathname+'?'+urlParams)
        enableDarkStyles();
    } else {
        dark = false;
        urlParams.set('mode','light');
        window.history.pushState(null,null,window.location.pathname+'?'+urlParams)
        enableLightStyles();
    }
}

function enableDarkStyles() {
    const dmodeicon = document.getElementById('dmode');
    const columna = document.getElementById('columna');
    const posts = document.getElementsByClassName('post');
    const portada = document.getElementsByClassName('portada');
    const posttitle = document.getElementsByClassName('posttitle');
    const postbottomrow = document.getElementsByClassName('bottomrowpost');
    const pie = document.getElementById('pie');
    const user = document.getElementById('user');
    const password = document.getElementById('password');
    const logbutton = document.getElementById('logbutton');
    const soporte = document.getElementsByClassName('soporte');
    const tablerow = document.getElementsByClassName('row');
    const table = document.getElementsByClassName('table');
    const background = document.body;
    background.style.backgroundColor = '#1e1e1e'

    dmodeicon.src = "./media/icons/Dmode.svg"

    columna.style.color = '#ffffff'
    columna.style.backgroundColor = '#282828'

    for (var i = 0; i < posts.length; i++) {
        posts[i].style.backgroundColor = '#282828'
    }
    for (var i = 0; i < soporte.length; i++) {
        soporte[i].style.backgroundColor = '#282828'
    }

    for (var i = 0; i < portada.length; i++) {
        portada[i].style.backgroundColor = '#282828'
    }

    for (var i = 0; i < posttitle.length; i++) {
        posttitle[i].style.color = '#ffffff'
    }

    for (var i = 0; i < postbottomrow.length; i++) {
        postbottomrow[i].style.color = '#ffffff'
    }
    for (var i = 0; i < tablerow.length; i++) {
        tablerow[i].style.color = '#ffffff'
    }
    for (var i = 0; i < table.length; i++) {
        table[i].style.color = '#c8c8c8'
    }

    pie.style.backgroundColor = '#282828'
    pie.style.color = '#ffffff'

    user.style.backgroundColor = '#323232'
    user.style.borderColor = '#323232'
    user.style.color = '#ffffff'
    password.style.backgroundColor = '#323232'
    password.style.borderColor = '#323232'
    password.style.color = '#ffffff'

    logbutton.style.backgroundColor = '#373737'
    logbutton.style.borderColor = '#373737'
    logbutton.style.Color = '#ffffff'
}

function enableLightStyles() {
    const dmodeicon = document.getElementById('dmode');
    const columna = document.getElementById('columna');
    const posts = document.getElementsByClassName('post');
    const portada = document.getElementsByClassName('portada');
    const posttitle = document.getElementsByClassName('posttitle');
    const postbottomrow = document.getElementsByClassName('bottomrowpost');
    const pie = document.getElementById('pie');
    const user = document.getElementById('user');
    const password = document.getElementById('password');
    const logbutton = document.getElementById('logbutton');
    const soporte = document.getElementsByClassName('soporte');
    const tablerow = document.getElementsByClassName('row');
    const table = document.getElementsByClassName('table');
    const background = document.body;

    dmodeicon.src = "./media/icons/Lmode.svg"

    background.style.backgroundColor = 'antiquewhite'

    columna.style.color = 'black'
    columna.style.backgroundColor = 'lightblue'

    for (var i = 0; i < posts.length; i++) {
        posts[i].style.backgroundColor = 'white'
    }
    for (var i = 0; i < soporte.length; i++) {
        soporte[i].style.backgroundColor = 'white'
    }
    for (var i = 0; i < portada.length; i++) {
        portada[i].style.backgroundColor = 'white'
    }
    for (var i = 0; i < posttitle.length; i++) {
        posttitle[i].style.color = 'black'
    }
    for (var i = 0; i < postbottomrow.length; i++) {
        postbottomrow[i].style.color = 'black'
    }
    for (var i = 0; i < tablerow.length; i++) {
        tablerow[i].style.color = 'black'
    }
    for (var i = 0; i < table.length; i++) {
        table[i].style.color = 'black'
    }
    pie.style.backgroundColor = 'aliceblue'
    pie.style.color = 'black'

    user.style.backgroundColor = '#ffffff'
    user.style.borderColor = '#ffffff'
    user.style.color = 'black'
    password.style.backgroundColor = '#ffffff'
    password.style.borderColor = '#ffffff'
    password.style.color = 'black'

    logbutton.style.backgroundColor = '#ffffff'
    logbutton.style.borderColor = '#ffffff'
    logbutton.style.Color = 'black'
}