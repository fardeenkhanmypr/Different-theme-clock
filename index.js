const themes = document.querySelectorAll('.theme')
setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    dx=new Date();
    h=dx.getHours();
    m=dx.getMinutes();
    s=dx.getSeconds();
    document.getElementById('dgclock').innerText=h+":"+m+":"+s;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

}, 1000);
themes.forEach(theme => {
    theme.addEventListener('click', ()=>{
        currentTheme = theme.getAttribute('data-theme')
        const body = document.body
        if(currentTheme == 1){
            body.classList.remove('theme2')
            body.classList.remove('theme3')
        }else if(currentTheme == 2){
            body.classList.toggle('theme2')
            body.classList.remove('theme3')
        }else if(currentTheme == 3){
            body.classList.toggle('theme3')
        }
    })
})
