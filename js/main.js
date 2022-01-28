window.addEventListener('load', () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = 1;
    let finalYear = year + 10;
    let yearInput = "";
    let monthInput = "";
    let card = document.querySelector('.card-number');
    let cardInput = document.querySelector('.card-number-box');
    let name = document.querySelector('.card-holder');
    let nameInput = document.querySelector('.card-holder-name');
    let monthSelect = document.querySelector('.month-input');
    let monthSelected = document.querySelector('.month-input-box');
    let yearSel = document.querySelector('.year-input');
    let yearSelect = document.querySelector('.year-input-box');
    let cvv = document.querySelector('.cvv-input');
    let cvvInput = document.querySelector('.cvv-box');

    let visa = document.querySelector('.visa');

    for (let i = year; i <= finalYear; i++) {
        yearInput += "<option>" + year + "</option>";
        year += 1;
    }
    for (let j = month; j <= 12; j++) {
        let monthName = "";
        if (month < 10) {
            monthInput += "<option class='month'>" + "0" + month + "</option>";
        } else {
            monthInput += "<option class='month'>" + month + "</option>";
        }
        month += 1;
    }
    cvv.addEventListener('mouseenter', () => {
        document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
        document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
    });
    cvv.addEventListener('mouseleave', () => {
        document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
        document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
    });

    visa.addEventListener('mouseenter', () => {
        visa.style.opacity = "0";
    });
    visa.addEventListener('mouseleave', () => {
        visa.style.opacity = "1";
    });

    card.addEventListener('input', () => {
        if (card.value == "") {
            cardInput.textContent = "#### #### #### ####"
        } else {
            cardInput.textContent = card.value
        }
    });

    name.addEventListener('input', () => {
        if (name.value) {
            nameInput.textContent = name.value;
        } else nameInput.textContent = "full name";

    });
    monthSelect.addEventListener('input', () => {
        monthSelected.textContent = monthSelect.value;
    });
    yearSel.addEventListener('input', () => {
        yearSelect.textContent = yearSel.value;
    });
    cvv.addEventListener('input', () => {
        cvvInput.textContent = cvv.value
    });

    document.querySelector('.month-input').innerHTML += monthInput;
    document.querySelector('.year-input').innerHTML += yearInput;
});