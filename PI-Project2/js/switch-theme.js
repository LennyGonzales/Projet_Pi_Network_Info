function darkTheme (){
        var head = document.getElementsByTagName('HEAD')[0]; 
        var link = document.createElement('link');
        link.rel = 'stylesheet'; 
        link.id = 'dark-theme';
        link.type = 'text/css';
        link.href = 'css/alternate.css'; 
        head.appendChild(link);
}

function lightTheme () {
        sheet = document.getElementById("dark-theme")
        sheet.parentNode.removeChild(sheet)
}
