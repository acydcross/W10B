function addTank(){
    Cookies.set('role', 'tank');
    window.open('selection.html');
}

function addHealer(){
    Cookies.set('role', 'healer');
    window.open('selection.html');
}

function addDamage(){
    Cookies.set('role', 'damage');
    window.open('selection.html');
}