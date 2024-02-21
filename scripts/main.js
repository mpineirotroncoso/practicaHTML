var dark = false;

function switchDarkMode() {
    if (!dark) {
        dark = !dark;
        enableDarkStyles();
    } else {
        dark = !dark;
        enableLightStyles();
    }
}

function enableDarkStyles() {
    const dmodeicon = document.getElementById('dmode');
    const columna = document.getElementById('columna');
    const posts = document.getElementsByClassName('post');
    const posttitle = document.getElementsByClassName('posttitle');
    const postbottomrow = document.getElementsByClassName('bottomrowpost');
    const pie = document.getElementById('pie');
    const background = document.body;
    background.style.backgroundColor = '#1e1e1e'

    dmodeicon.src = "./media/icons/Dmode.svg"

    columna.style.color = '#ffffff'
    columna.style.backgroundColor = '#282828'

    for (var i=0; i<posts.length; i++) {
        posts[i].style.backgroundColor = '#282828'
    }

    for (var i=0; i<posttitle.length; i++) {
        posttitle[i].style.color = '#ffffff'
    }

    for (var i=0; i<postbottomrow.length; i++) {
        console.log(i)
        postbottomrow[i].style.color = '#ffffff'
    }

    pie.style.backgroundColor = '#282828'
    pie.style.color = '#ffffff'
}

function enableLightStyles() {
    const dmodeicon = document.getElementById('dmode');
    const columna = document.getElementById('columna');
    const posts = document.getElementsByClassName('post');
    const posttitle = document.getElementsByClassName('posttitle');
    const postbottomrow = document.getElementsByClassName('bottomrowpost');
    const pie = document.getElementById('pie');
    const background = document.body;

    dmodeicon.src = "./media/icons/Lmode.svg"

    background.style.backgroundColor = 'antiquewhite'

    columna.style.color = 'black'
    columna.style.backgroundColor = 'lightblue'

    for (var i=0; i<posts.length; i++) {
        posts[i].style.backgroundColor = 'white'
    }
    for (var i=0; i<posttitle.length; i++) {
        posttitle[i].style.color = 'black'
    }
    for (var i=0; i<postbottomrow.length; i++) {
        postbottomrow[i].style.color = 'black'
    }
    pie.style.backgroundColor = 'aliceblue'
    pie.style.color = 'black'
}