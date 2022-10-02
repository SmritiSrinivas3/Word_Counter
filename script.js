let textBox = document.getElementById('text-field')
let countButton = document.getElementById('count-button')



function ChangePosition(){
    console.log('Button clicked')
document.getElementById('text-ar').classList.remove('text-field-area')
document.getElementById('text-ar').classList.add('text-field-area-final')
document.getElementById('button-ar').classList.remove('count-button-area')
document.getElementById('button-ar').classList.add('count-button-area-final')
document.getElementById('result').style.display = "block";
}

