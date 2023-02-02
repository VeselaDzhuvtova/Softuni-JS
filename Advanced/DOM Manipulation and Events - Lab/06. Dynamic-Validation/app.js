function validate() {
    let emailElement = document.getElementById('email');
    emailElement.addEventListener('change', onChanged);

    function onChanged(e) {
        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/g;

        if(pattern.test(e.target.value)) {
            e.target.classList.remove('error');
        } else {
            e.target.classList.add('error')
        }
    }
}