const allSeatList = document.getElementsByClassName('btn-seat');
let totalSelectedSeat = 0;
let canAdd = true;

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

function calculateDiscountAndGrandTotal(total, discountValue) {
    const discount = total * (discountValue / 100);
    return discount;
}

function setActiveOrDeActiveButton(btnId, active) {
    const btn = document.getElementById(btnId).disabled = active;
}

function addClassById(id, className) {
    const btn = document.getElementById(id).classList.add(className);
}

function removeClassById(id, className) {
    const btn = document.getElementById(id).classList.remove(className);
}


for (const seat of allSeatList) {
    seat.addEventListener('click', function () {
        if (canAdd) {
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
                if (totalSelectedSeat === 4) {
                    document.getElementById('btn-coupon').disabled = false;
                    removeClassById('btn-coupon', 'opacity-60');
                }

            } else {
                alert('Sorry You Can Not Select More Than 4.')
            }
        } else {
            alert('Your cannot add more ticket. Because your already added coupon code.');
        }
    })
}


function appendNewRow(seat) {
    const element = document.getElementById('tbody');
    let row = document.createElement("tr")

    let c1 = document.createElement("td")
    let c2 = document.createElement("td")
    let c3 = document.createElement("td")

    c1.innerText = seat.innerText;
    c1.classList.add('text-left')
    c1.classList.add('secondary-black')
    c2.innerText = "Economy"
    c2.classList.add('text-left');
    c2.classList.add('secondary-black');
    c3.innerText = 550
    c3.classList.add('text-right')
    c3.classList.add('secondary-black')

    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    table.appendChild(row)

    const total = getInnerTextNumberById('total');
    const newTotal = total + 550;
    setInnerTextNumberById('total', newTotal);
    setInnerTextNumberById('grand-total', newTotal);

}


function getCouponDiscount(event) {
    const inputValue = getInputFieldValueById('coupon-input');
    if (inputValue) {
        if (inputValue === 'NEW15') {
            removeClassById('discount-row', 'hidden');
            const total = getInnerTextNumberById('total');
            const discountValue = calculateDiscountAndGrandTotal(total, 15);
            setInnerTextNumberById('discount', discountValue);
            setInnerTextNumberById('grand-total', total - discountValue);
            setActiveOrDeActiveButton('btn-coupon', false);
            addClassById('coupon-row', 'hidden');
            canAdd = false;
        } else if (inputValue === 'Couple 20') {
            removeClassById('discount-row', 'hidden');
            const total = getInnerTextNumberById('total');
            const discountValue = calculateDiscountAndGrandTotal(total, 20);
            setInnerTextNumberById('discount', discountValue);
            setInnerTextNumberById('grand-total', total - discountValue);
            setActiveOrDeActiveButton('btn-coupon', false);
            addClassById('coupon-row', 'hidden');
            canAdd = false;
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
        removeClassById('btn-next', 'opacity-60');
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

