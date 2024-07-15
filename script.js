document.addEventListener('DOMContentLoaded', () => {
    const redLight = document.getElementById('redLight');
    const yellowLight = document.getElementById('yellowLight');
    const greenLight = document.getElementById('greenLight');

    function switchLight(lightElement) {
        redLight.classList.remove('active');
        yellowLight.classList.remove('active');
        greenLight.classList.remove('active');
        lightElement.classList.add('active');
    }

    function trafficLightSequence() {
        switchLight(greenLight);
        setTimeout(() => {
            switchLight(yellowLight);
            setTimeout(() => {
                switchLight(redLight);
                setTimeout(trafficLightSequence, 4000);
            }, 500);
        }, 3000);
    }

    trafficLightSequence();
});
