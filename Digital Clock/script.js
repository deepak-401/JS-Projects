const clock=document.getElementById('clock')
const hold_time=new Date().toLocaleTimeString();

setInterval(function(){                      //setInterval() is used to repeatedly execute a specified function or code block at a fixed interval of time, measured in milliseconds.
    const hold_time=new Date()
    clock.innerHTML=hold_time.toLocaleTimeString();
},1000)
