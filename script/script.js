//layanan

document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('cari-button');
    const serviceContainer = document.getElementById('service-container');
    const policeServicesContainer = document.getElementById('police-services-container');
    const backToMainButton = document.getElementById('back-to-main');
    const kepolisianButton = document.getElementById('kepolisian');
    const formContainer = document.querySelector('.form-container');

    searchButton.addEventListener('click', function () {
        serviceContainer.style.display = 'block';
        policeServicesContainer.style.display = 'none';
        formContainer.style.display = 'none';
    });

    kepolisianButton.addEventListener('click', function () {
        serviceContainer.style.display = 'none';
        policeServicesContainer.style.display = 'block';
        formContainer.style.display = 'none';
    });

    backToMainButton.addEventListener('click', function () {
        serviceContainer.style.display = 'block';
        policeServicesContainer.style.display = 'none';
        formContainer.style.display = 'none';
    });    
});

function openPopup() {
    var popup = document.getElementById("popup-container");
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup-container");
    popup.style.display = "none";
}

// layanan

