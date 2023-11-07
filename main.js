const form = document.getElementById('form-valido');

let formvalid = false;

function numbervalid(valorA, valorB) {
    return valorB > valorA;
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valorA = parseFloat(document.getElementById('n1').value);
    let valorB = parseFloat(document.getElementById('n2').value);

    if (numbervalid(valorA, valorB)){
        document.querySelector('.error-message').style.display = 'none';
        document.querySelector('.success-message').style.display = 'block';
        valorA.value = '';
        valorB.value = '';
    } 
    else {
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
        
    }
});