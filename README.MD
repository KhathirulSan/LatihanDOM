# ChallangeClass-Javascript-DOM

---

## Section 2 
3 Contoh &n 1 Use Case

in section2.html
```
...
    <!-- getElementById -->
        <p id="name">Hey it's Khathirul Ihsan!</p>

...
```
...
 <!-- getElementsByName -->
    <p>Tolong Beri Rating Pada Website Ini:</p>
    <p>
        <label for="very-poor">
            <input type="radio" name="rate" value="Sangat Buruk" id="very-poor"> Sangat Buruk
        </label>
        <label for="poor">
            <input type="radio" name="rate" value="Buruk" id="poor"> Buruk
        </label>
        <label for="ok">
            <input type="radio" name="rate" value="Bolehlah" id="ok"> Bolehlah
        </label>
        <label for="good">
            <input type="radio" name="rate" value="Keren"> Keren
        </label>
        <label for="very-good">
            <input type="radio" name="rate" value="Keren Banget" id="very-good"> Keren Banget
        </label>
    </p>
    <p>
        <button id="btnRate">Kasih Rating</button>
    </p>
    <p id="output"></p>
...

```
...
  <!-- getElementsByTagName -->
    <h1>Ini Adalah Contoh getElementsByTagName()</h1>
    <h2>Paragraf 1</h2>
    <p>Ini Paragraf Pertama</p>
    <h2>Paragraf 2</h2>
    <p>Ini Paragraf Kedua.</p>
    <h2>Paragraf 3</h2>
    <p>Paragraf Ketiga</p>

    <button id="btntag">Count H2</button>
...
```
in section2.js
```
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

...

---

## section 3
3 Contoh $ 1 Use Case

in section3.html
```
...
     <!-- Parent Node -->
    <div id="parent">
        <h1 class="title">Section 3</h1>
<hr>
        <!-- Child Node -->
        <p>Sekarang adalah Section 3</p>
    </div>
...
```

in section3.js
```
...
//Parent Node
const title = document.querySelector('.title');
console.log(title.parentNode);
//Child Node
const parent = document.getElementById('parent');
let firstchild = parent.firstchild;
console.log(firstchild);
//Get Child Sibling
let nextchild = title.nextElementSibling;
console.log(nextchild);
...
```

--- 

## Section 4
3 Contoh & 1 Use Case

in section4.html
```
...
   <!-- textContent -->
    <div id ='ini_catatan'>
        Ini contoh textContent
        <span style="display: none">Teks Ini Tersembunyi!</span>
    </div>

    <!-- CreateElement -->


    <!-- innerHTML -->
    <ul id="contoh_innerHtml">
        <li>Pilihan 1 (innerHTML) </li>
        <li>Pilihan 2 (innerHTML) </li>
    </ul>
...
```

in section4.js
```
...
//CreateElement
let div = document.createElement('div');
div.id = 'ini Create Element'
div.innerHTML = '<p>Ini contoh Create Element </p>';
document.body.appendChild(div);

//textContent
let ini_catatan = document.getElementById('ini_catatan');
console.log (ini_catatan.textContent);

//innerHTML

let contoh_innerHtml = document.getElementById ('contoh_innerHtml');

    //Membuat Element list baru
    let li = document.createElement ('li');
    li.textContent = 'Pilihan 3 (innerHTML)';
    //Menggabungkan ke Element OL
    contoh_innerHtml.appendChild(li);
    
    console.log(contoh_innerHtml.innerHtml);
...
```