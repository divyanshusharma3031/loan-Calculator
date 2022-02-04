let form=document.querySelector("#loan-form");

form.addEventListener('submit',function(e)
{
    document.querySelector('.results').style.display="none";

    document.querySelector('.gif').style.display="block";

    setTimeout(calculateresult, 2000);

    e.preventDefault();
});

function calculateresult()
{
    console.log("calculating....");
    let amount=document.getElementById('amount');

    let interest=document.getElementById('interest');

    let ytp=document.getElementById('ytp');

    let monthlyPayment=document.getElementById('monthly-payment');

    let totalPayment=document.getElementById('total-payment');

    let totalInt=document.getElementById('total-interests');

    let principal=parseFloat(amount.value);

    let i=parseFloat(interest.value);

    let y=parseFloat(ytp.value);

    let calInt=(i/100)/12;

    let calPro=y*12;

    let x=  Math.pow(1+calInt,calPro);

    let monthly=(principal*x*calInt)/(x-1);

    if(isFinite(monthly))
    {
        monthlyPayment.value=monthly.toFixed(2);
        totalPayment.value=(monthly*calPro).toFixed(2);
        totalInt.value=((monthly*calPro)-principal).toFixed(2);
        document.querySelector('.results').style.display="block";
        document.querySelector('.gif').style.display="none";
    }
    else{
        console.log("ooops something wrong")
        showError("Please Check Your Numbers");
        document.querySelector('.gif').style.display="none";
    }
}
function showError(message)
{
    const errordiv=document.createElement('div');
    
    const card=document.querySelector(".card");
    
    const heading=document.querySelector(".heading");
    
    errordiv.className='alert alert-danger';
    
    errordiv.appendChild(document.createTextNode(message));
    
    card.insertBefore(errordiv,heading);
    setTimeout(() => {
        document.querySelector(".alert").remove();
    }, 2000);

}