function benIndex() {
    const purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
    const monthlyRent = parseFloat(document.getElementById('monthlyRent').value);

    if (isNaN(monthlyRent) || isNaN(purchasePrice)) {
        alert('Please enter valid numeric values');
        return;
    }

    const imputedRent = purchasePrice * 0.05;

    const resultElement = document.getElementById('result');
    if(imputedRent/12 > monthlyRent){
        resultElement.innerHTML = `<p>Renting is cheaper</p>`;
    }
    else{
        resultElement.innerHTML = `<p>Purchasing a home is cheaper</p>`;
    }
}