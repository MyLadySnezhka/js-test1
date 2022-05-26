const el = document.querySelector('.test');
el.innerHTML = 'fgh';

const el2 = document.querySelector('input[name="test2"]');
console.log(el2);

el2.addEventListener('change', (ev) => {
    const text = ev.target.value;

    console.log(text);

});