const cal = new Calculator;
const calInputWindow = document.getElementById('cal_value');
const inputs = document.querySelectorAll('.inputs');
const action = document.querySelectorAll('.action');



inputs.forEach((item)=>{
    item.addEventListener('click',()=>{
        var btnval = item.innerText;
        cal.getNumberInput(btnval);
    })
})


action.forEach((action)=>{
    action.addEventListener('click',(e)=>{
        cal.getFuntionCall(action);
        e.preventDefault();
    })
})

