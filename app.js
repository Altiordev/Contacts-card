// const userNumbers = [10, 8, 9, 5, 7, 89, 5151, 9549, 100];

// let min = userNumbers[0];
// let max = userNumbers[0];

// // forof
// for (const number of userNumbers) {
//     min = Math.min(min, number);
//     max = Math.max(max, number);
// }

// // forloop
// for (let i = 0; i < userNumbers.length; i++) {
//     min = Math.min(min, userNumbers[i]);
//     max = Math.max(max, userNumbers[i]);

// }

// console.log(min, max);



// const info = {
//     userName: 'Akbar',
//     userAge: 17,
//     nameAndAge: function() {
//         console.log(`Assalomu alaykum mening ismim ${info.userName} men ${info.userAge} yoshdaman`);
//     }
// }

// info.nameAndAge()

const input = document.querySelectorAll('.input'),
    inputUserName = document.querySelector('.userName'),
    inputUserShip = document.querySelector('.userShip'),
    inputUserPhone = document.querySelector('.userPhone'),
    areaForm = document.querySelector('.areaForm'),
    areaContacts = document.querySelector('.areaContacts'),
    score = document.querySelector('.score');


let scoreS = 0

areaForm.addEventListener('submit', (e) => {
    e.preventDefault()

    if (inputUserName.value != '' || inputUserShip.value != '' || inputUserPhone.value != '') {
        const userName = input[0].value;
        const userShip = input[1].value;
        const userPhone = input[2].value;


        const newElement = document.createElement('div');
        newElement.classList.add('box');


        const newElementName = document.createElement('h3');
        newElementName.textContent = userName;
        newElement.appendChild(newElementName);


        const newElementShip = document.createElement('p');
        newElementShip.textContent = userShip;
        newElement.appendChild(newElementShip);


        const newElementPhone = document.createElement('span');
        newElementPhone.textContent = userPhone;
        newElement.appendChild(newElementPhone);


        const newElementBtn = document.createElement('button');
        // const newElementBtnI = document.createElement('i');
        newElementBtn.classList.add('delBtn');
        newElementBtn.innerHTML = `<img src="./remove.png" alt="remove">`
            // newElementBtnI.classList.add('fa-solid');
            // newElementBtnI.classList.add('fa-user-minus');
            // newElementBtn.appendChild(newElementBtnI);
        newElement.appendChild(newElementBtn);


        areaContacts.insertBefore(newElement, areaContacts.firstChild);
        // areaContacts.appendChild(newElement);

        newElementBtn.addEventListener('click', () => {
            newElement.remove()

            score.textContent = --scoreS;
        })

        score.textContent = ++scoreS;
    }


    // const userName = input[0].value
    // const userShip = input[1].value
    // const userPhone = input[2].value


    // const newElement = document.createElement('div');
    // newElement.classList.add('box');


    // const newElementName = document.createElement('h3');
    // newElementName.textContent = userName;
    // newElement.appendChild(newElementName);


    // const newElementShip = document.createElement('p');
    // newElementShip.textContent = userShip;
    // newElement.appendChild(newElementShip);


    // const newElementPhone = document.createElement('span');
    // newElementPhone.textContent = userPhone;
    // newElement.appendChild(newElementPhone);


    // const newElementBtn = document.createElement('button');
    // // const newElementBtnI = document.createElement('i');
    // newElementBtn.classList.add('delBtn');
    // newElementBtn.innerHTML = `<img src="./remove.png" alt="remove">`
    //     // newElementBtnI.classList.add('fa-solid');
    //     // newElementBtnI.classList.add('fa-user-minus');
    //     // newElementBtn.appendChild(newElementBtnI);
    // newElement.appendChild(newElementBtn);


    // areaContacts.insertBefore(newElement, areaContacts.firstChild);
    // // areaContacts.appendChild(newElement);

    // newElementBtn.addEventListener('click', () => {
    //     newElement.remove()

    //     score.textContent = --scoreS;
    // })



    areaForm.reset()
})




// let arr = ['0011', '1100', '0101', '1010']


// function invertZeroesAndOnes(array) {
//     const invertedArray = [];

//     for (let i = 0; i < array.length; i++) {
//         let item = array[i];
//         let invertedItem = "";
//         console.log(item);
//         for (let j = 0; j < item.length; j++) {
//             if (item[j] === "0") {
//                 invertedItem += "1";
//             } else {
//                 invertedItem += "0";
//             }
//         }

//         invertedArray.push(invertedItem);
//     }

//     return invertedArray;
// }

// console.log(invertZeroesAndOnes(arr));