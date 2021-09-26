const box = document.getElementById('box')
box.addEventListener('input', update)


function format(value) {
    value = value.toFixed(2)
    return '$ ' + value
}
function update() {

    const billInput = Number(document.getElementById('billInput').value)
    const tipInput = document.getElementById('tipInput').value
    const splitInput = document.getElementById('splitInput').value

    let tipValue = billInput * (tipInput / 100)
    let tipEach = tipValue / splitInput
    let billEach = (billInput + tipValue) / splitInput


    // show the range values
    document.getElementById('tipPercent').innerHTML = tipInput + '%'
    document.getElementById('splitValue').innerHTML = splitInput === '1' ? splitInput + ' person' : splitInput + ' People'

    // show tips
    document.getElementById('tipValue').innerHTML = format(tipValue)
    document.getElementById('totalBill').innerHTML = format(billInput + tipValue)

    document.getElementById('tipEach').innerHTML = format(tipEach)
    document.getElementById('billEach').innerHTML = format(billEach)


}
