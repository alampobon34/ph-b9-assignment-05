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

function getInputFieldValueById(inputId) {
    const value = document.getElementById(inputId).value.trim();
    return value;
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
            seat.disabled = true;
            const availableSeat = getInnerTextNumberById('available-seat');
            setInnerTextNumberById('available-seat', availableSeat - 1)
            const selectedSeat = getInnerTextNumberById('selected-seat');
            setInnerTextNumberById('selected-seat', selectedSeat + 1)
            totalSelectedSeat += 1;
            appendNewRow(seat);
            document.getElementById('btn-coupon').disabled = false;

        } else {
            alert('Sorry You Can Not Select More Than 4.')
        }
    })
}


function calculateDiscountAndGrandTotal(total, discountValue) {
    const discount = total * (discountValue / 100);
    return discount;
}

function setActiveOrDeActiveButton(btnId, active) {
    const btn = document.getElementById(btnId).disabled = active;
}



function getCouponDiscount(event) {
    const inputValue = getInputFieldValueById('coupon-input');
    if (inputValue) {
        if (inputValue.toUpperCase() === 'NEW15') {
            document.getElementById('discount-row').classList.remove('hidden');
            const total = getInnerTextNumberById('total');
            const discountValue = calculateDiscountAndGrandTotal(total, 15);
            setInnerTextNumberById('discount', discountValue);
            setInnerTextNumberById('grand-total', total - discountValue);
            setActiveOrDeActiveButton('btn-coupon', false);
            const couponRow = document.getElementById('coupon-row').classList.add('hidden');
        } else if (inputValue.toUpperCase() === 'COUPLE 20') {
            document.getElementById('discount-row').classList.remove('hidden');
            const total = getInnerTextNumberById('total');
            const discountValue = calculateDiscountAndGrandTotal(total, 20);
            setInnerTextNumberById('discount', discountValue);
            setInnerTextNumberById('grand-total', total - discountValue);
            setActiveOrDeActiveButton('btn-coupon', false);
        } else {
            alert('Invalid Coupon.')
        }
    } else {
        alert('Please Enter The Coupon.')
    }
}


function validateForm() {
    const phoneNumber = document.getElementById('phone-number').value;
    if (phoneNumber && totalSelectedSeat > 0) {
        setActiveOrDeActiveButton('btn-next', false);
    }
}


function onSubmit() {
    const numberValue = getInputFieldValueById('phone-number');
    if (numberValue.length !== 11) {
        console.log(numberValue);
        alert('Phone number must be 11 digits.')
    } else {
        console.log('submit form');
        document.getElementById('my_modal_1').showModal();
    }
}


// document.getElementById('my_modal_1').showModal();