//var msg = ` This site is under construction. The final version will be available in late August 2024.`
var msg = "";

function close_msg() {
    document.getElementById('msg_bar').style.display='none';
    localStorage.setItem('msg',msg)
}

document.addEventListener('DOMContentLoaded', function () {

    if (localStorage.msg != msg && msg != "") {
        //document.getElementById('msg_bar').innerHTML = `<a href="javascript:close_msg();" class="ex">X</a>`+ msg;
        document.getElementById('msg_bar').innerHTML = msg;
        document.getElementById('msg_bar').style.display='block';    
    }

});
