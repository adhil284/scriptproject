calcBtn = document.querySelector('#button_calculate');

calcBtn.addEventListener('click',function(e){

    txtA = document.querySelector('#value_radius');
    txtB = document.querySelector('#value_height');
    txtC = document.querySelector('#value_volume');

    let c;

    c = parseFloat(txtA.value) * parseFloat(txtB.value);

    txtC.value = c;
});