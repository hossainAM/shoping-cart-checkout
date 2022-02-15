//product increament/decreament uisng function
function updateProductNumber (product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing) {
        productNumber = parseInt(productNumber) + 1;
    } else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;//asign the updated value to input.value;

    //product price increament/decreament
    const productTotal = document.getElementById(product + '-price');
    productTotal.innerText = productNumber * price;  

    //update total price
    calculateTotal();
}

function getInputValue (product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal () {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal; 
    const taxAmount = subTotal / 10;
    const grandTotal = subTotal + taxAmount;
    //update on html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('grand-total').innerText = grandTotal;
}

//phone plus
document.getElementById('phone-plus').addEventListener('click', function() {
    updateProductNumber('phone', 1219, true);
});

//phone minus
document.getElementById('phone-minus').addEventListener('click', function() {
    updateProductNumber('phone', 1219, false)
});

//case plus
document.getElementById('case-plus').addEventListener('click', function() {
    updateProductNumber('case', 59, true);
});

//case minus
document.getElementById('case-minus').addEventListener('click', function() {
    updateProductNumber('case', 59, false)
});

