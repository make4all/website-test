document.addEventListener('DOMContentLoaded', () => {
    const counterButton = document.getElementById('counterButton');
    let count = 0;

    counterButton.addEventListener('click', () => {
        count++;
        counterButton.textContent = `Click me: ${count}`;
    });
});

