//getElementByID()
const p = document.getElementById('name');
console.log(p);


//getElementsByName
let btn = document.getElementById('btnRate');
let output = document.getElementById('output');

btn.addEventListener('click', () => {
    let rates = document.getElementsByName('rate');
    rates.forEach((rate) => {
        if (rate.checked) {
            output.innerText = `Ratingmu : ${rate.value}`;
        }
    });

});

//getElementsByTagName
let btntag = document.getElementById('btntag');
btntag.addEventListener('click', () => {
    let headings = document.getElementsByTagName('h2');
    alert(`Jumlah Tag ada :  ${headings.length}`);
});
