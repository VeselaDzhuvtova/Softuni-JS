function attachGradientEvents() {

    let gradientElement = document.getElementById('gradient');
    gradientElement.addEventListener('mousemove', gradientMousemoveHandler);
    let resultElement = document.getElementById('result');

    function gradientMousemoveHandler(e) {
        resultElement.textContent = Math.floor(e.offsetX / gradientElement.clientWidth * 100) + '%';
    }
}