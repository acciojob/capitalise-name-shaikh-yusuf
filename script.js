//your JS code here. If required.
const fnameInput = document.getElementById('fname');

            fnameInput.addEventListener('blur', function () {
                // Convert the content to uppercase
                fnameInput.value = fnameInput.value.toUpperCase();
            });