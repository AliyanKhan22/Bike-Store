
const companySelect = document.getElementById('company-select');
const bikeSelect = document.getElementById('bike-select');
const bikeCardsContainer = document.getElementById('bike-cards');
const bikes = {
    company1: [
        { name: 'Honda', price: 'RS 157,900', details: 'Atlas Honda has been the popular two wheeler motorcycle known among the consumers.', img: 'bike1.jpg' },
        { name: 'Super Power', price: 'RS 112,500', details: 'The Super Power 70cc bike is an ideal option for individuals looking for an economical and reliable mode of transportation in Pakistan.', img: 'bike3.webp' },
        { name: 'Unique', price: 'RS 114,500', details: 'The Unique 70cc bike is a popular choice in Pakistan due to its affordability and efficiency. Powered by a 70cc engine, this bike is designed for economical daily commuting.', img: 'bike6.jpg' },
        { name: 'Crown', price: 'RS 85,000', details: 'The Crown 70cc bike is an excellent option for those seeking a cost-effective and dependable means of transportation in Pakistan.', img: 'bike7.jpg' }
    ],
    company2: [
        { name: 'Honda CG 125', price: 'RS 292,900', details: 'The Honda 125 is a well-rounded motorcycle known for its reliability and efficiency. Equipped with a 125cc engine, it delivers 11.5 horsepower and 11 Nm of torque, ensuring a smooth and powerful ride. ', img: 'bike2.png' },
        { name: 'United CS 125', price: 'RS 165,000.', details: 'The United 125 is a versatile motorcycle known for its efficient performance and reliability. Powered by a 125cc engine, it produces 11 horsepower and 10 Nm of torque, ensuring a smooth and responsive ride.', img: 'bike4.jpg' },
        { name: 'Unique UD 125', price: 'RS 119,000.', details: 'The Unique 125 by Unique Bikes features a powerful 125cc engine that delivers 11 horsepower and 10 Nm of torque, ensuring a smooth and efficient ride.', img: 'bike5.png' }
    ],
    company3: [
        { name: 'Super Power Sultan SP 250', price: 'RS 386,000', details: 'This bike is favored for its balance of power, handling, and affordability, making it a great choice for both commuting and leisure rides. ', img: 'sp.jpg' },
        { name: 'Super Power SP 150 Archi 2024', price: 'RS 243,000',details:'The Super Power SP 150 Archi 2024 is designed to Owsm. Its features and specifications ensure a reliable and enjoyable riding experience. ', img: 'sp1.webp' },
        { name: 'Super Star Falcon 150 cc 2024', price: 'RS 400,000', details:'The Super Star Falcon 150 cc 2024 is a dynamic choice for riders seeking a blend of performance and style.', img: 'ss.jpg' },
        { name: 'Super Power SP 200cc', price: 'RS 535,000', details:'Ideal for riders seeking a powerful yet manageable motorcycle combines performance, comfort, and modern features.', img: 'sp2.webp' }
    ]
};
function displayAllBikes() {
    bikeCardsContainer.innerHTML = ''; 
    Object.keys(bikes).forEach(company => {
        bikes[company].forEach(bike => {
            const bikeCard = document.createElement('div');
            bikeCard.classList.add('bike-card');
            const bikeImg = document.createElement('img');
            bikeImg.src = bike.img;
            bikeImg.alt = bike.name;
            const bikeTitle = document.createElement('h3');
            bikeTitle.textContent = bike.name;
            const bikePrice = document.createElement('p');
            bikePrice.textContent = `Price: ${bike.price}`;
            const bikeDetails = document.createElement('p');
            bikeDetails.textContent = `Details: ${bike.details}`;
            bikeCard.appendChild(bikeImg);
            bikeCard.appendChild(bikeTitle);
            bikeCard.appendChild(bikePrice);
            bikeCard.appendChild(bikeDetails);
            bikeCardsContainer.appendChild(bikeCard);
        });
    });
}
function displaySelectedBike(company, bikeName) {
    bikeCardsContainer.innerHTML = ''; 
    const bike = bikes[company].find(b => b.name === bikeName);
    if (bike) {
        const bikeCard = document.createElement('div');
        bikeCard.classList.add('bike-card');
        const bikeImg = document.createElement('img');
        bikeImg.src = bike.img;
        bikeImg.alt = bike.name;
        const bikeTitle = document.createElement('h3');
        bikeTitle.textContent = bike.name;
        const bikePrice = document.createElement('p');
        bikePrice.textContent = `Price: ${bike.price}`;
        const bikeDetails = document.createElement('p');
        bikeDetails.textContent = `Details: ${bike.details}`;
        bikeCard.appendChild(bikeImg);
        bikeCard.appendChild(bikeTitle);
        bikeCard.appendChild(bikePrice);
        bikeCard.appendChild(bikeDetails);
        bikeCardsContainer.appendChild(bikeCard);
    }
}
companySelect.addEventListener('change', function() {
    const company = this.value;
    bikeSelect.innerHTML = '<option value="">Select a bike</option>'; 
    bikeSelect.disabled = !company;
    if (company) {
        bikes[company].forEach(bike => {
            const option = document.createElement('option');
            option.value = bike.name;
            option.textContent = bike.name;
            bikeSelect.appendChild(option);
        });
    }
    displayAllBikes(); 
});
bikeSelect.addEventListener('change', function() {
    const bikeName = this.value;
    const company = companySelect.value;
    if (bikeName && company) {
        displaySelectedBike(company, bikeName);
    } else {
        displayAllBikes(); 
    }
});
displayAllBikes();