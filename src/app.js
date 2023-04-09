const amount = document.getElementById('amount');
const guest = document.getElementById('guest');
const quality = document.getElementById('quality');
const tipAmount = document.getElementById('tip-amount');
const calculate = document.getElementById('calculate');

(function () {
    calculate.addEventListener('click', () => {
        let tip = ((amount.value * quality.value) / (guest.value)).toFixed(2);
        if (isNaN(tip)) {
            tipAmount.innerHTML = 'Tip $0 each';
            showTipAmount();
        } else {
            tipAmount.innerHTML = `Tip $${tip} each`;
            showTipAmount();
        }
    })
})()

const showTipAmount = () => {
    tipAmount.className = 'show';
    setTimeout(function () {
        tipAmount.className = tipAmount.className.replace("show", "");
    }, 3000)
}
