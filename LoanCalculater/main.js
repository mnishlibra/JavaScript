// Listen on submit 
document.getElementById('loan-form').addEventListener('submit',function(e){
    // Hide Results
    document.getElementById('results').style.display = 'none' ; 
    // Show Loader 
    document.getElementById('loading').style.display = 'block' ; 

    setTimeout(calculaeResults,1000);
 
    e.preventDefault();
});

// Calculate Results
function calculaeResults() {
    console.log("Calculating...");
    // UI vars 
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12  ; 
    const calculatedPayment = parseFloat(years.value) * 12 ; 
    
    // Compute montly payments
    const x = Math.pow(1 + calculatedInterest , calculatedPayment);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayment)-principal).toFixed(2);
        document.getElementById('results').style.display = 'block' ; 
        document.getElementById('loading').style.display = 'none' ; 

    } else {
        showError('Please Check your numbers');
    }
}

// Show Error
function showError(error) {
    // Hide Results
    document.getElementById('results').style.display = 'none' ; 
    // Show Loader 
    document.getElementById('loading').style.display = 'none' ; 
    // Create a div 
    const errorDiv = document.createElement('div');
    // get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    // Add class
    errorDiv.className = 'alert alert-danger';
    // Create text node and append to div 
    errorDiv.appendChild(document.createTextNode(error));
    // Insert erro above heading 
    card.insertBefore(errorDiv, heading);
    // Clear error after 3 seconds
    setTimeout(clearError,3000);
}

// CLear error
function clearError() {
    document.querySelector(".alert").remove();

}