const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#results')
    const reply=document.querySelector('#reply')
    const body=document.querySelector('body')
    if (height===''||height<0||isNaN(height)) {
        result.innerHTML=`Enter a Valid Height ${height}`
    }
    else if (weight===''||weight<0||isNaN(weight)) {
        result.innerHTML=`Enter a Valid weight ${weight}`;
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`<span> ${bmi} </span>`
        if (bmi<18.6) {
            reply.innerHTML=` OOps !You are Under Weighted`;
            body.style.backgroundColor=' rgb(193, 218, 66) '
        }
        else if (bmi>=18.6 && bmi<=24.9) {
            reply.innerHTML=` Congrats!You Are Healthy`
            body.style.backgroundColor='green'
        } else {
            reply.innerHTML=`OOps! You Are Over Weighted`
            body.style.backgroundColor='red'
        }
    }

})
