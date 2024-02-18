const allSeatList = document.getElementsByClassName('btn-seat');
let totalSelectedSeat = 0;

function getInnerTextNumberById(id) {
    const element = document.getElementById(id).innerText;
    const elementNumber = parseInt(element)
    return elementNumber;
}


function setInnerTextNumberById(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
}


function appendNewRow(seat) {
    const element = document.getElementById('tbody');
    let row = document.createElement("tr")

    let c1 = document.createElement("td")
    let c2 = document.createElement("td")
    let c3 = document.createElement("td")

    c1.innerText = seat.innerText;
    c1.classList.add('text-left')
    c2.innerText = "Economy"
    c2.classList.add('text-left');
    c3.innerText = 550
    c3.classList.add('text-right')

    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    table.appendChild(row)

    const total = getInnerTextNumberById('total');
    const newTotal = total + 550;
    setInnerTextNumberById('total', newTotal);
    setInnerTextNumberById('grand-total', newTotal);

}


for (const seat of allSeatList) {
    seat.addEventListener('click', function () {
        if (parseInt(totalSelectedSeat) < 4) {
            seat.style.backgroundColor = '#1DD100';
            seat.style.color = '#fff';
            const availableSeat = getInnerTextNumberById('available-seat');
            setInnerTextNumberById('available-seat', availableSeat - 1)
            const selectedSeat = getInnerTextNumberById('selected-seat');
            setInnerTextNumberById('selected-seat', selectedSeat + 1)
            totalSelectedSeat += 1;
            appendNewRow(seat);

        } else {
            alert('Sorry You Can Not Select More Than 4.')
        }
    })
}



function getCouponDiscount(event) {
    const inputValue = document.getElementById('coupon-input').value.trim();
    if (inputValue) {
        if (inputValue.toUpperCase() === 'NEW15') {
            console.log('NEW15')
        } else if (inputValue.toUpperCase() === 'COUPLE 20') {
            console.log('Couple 20');
        }else{
            alert('Invalid Coupon.')
        }
    } else {
        alert('Please Enter The Coupon.')
    }
}