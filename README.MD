# ChallangeClass-Javascript-DOM

---

## Section 2 
3 Contoh &n 1 Use Case

in section2.html
```
...
    <!-- getElementById -->
        <p id="name">Hey it's Khathirul Ihsan!</p>

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
```
```
```
## Section 3
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
## Section 4
2 Contoh & 1 Use Case

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
## Section 5
2 Contoh & 1 Use Case
in section5.html
```
...
  <!-- setAttribute -->
       <a id="youtube" href="https://www.youtube.com">Youtube</a>

        <hr>
        <!-- getAttribute -->
        <a id="github" href="https://github.com/KhathirulSan/LatihanDOM">
            Latihan DOM JavaScript
        </a>
...

```
in section5.js
```
...
//setAttribute
let youtube = document.getElementById("youtube");
youtube.setAttribute("href", "https://www.youtube.com");

//getAttribute
let github = document.querySelector('#github');
if (href) {
    let target = github.getAttribute('href');
    console.log(href);
}
...

```
## Section 6
2 Contoh & 1 Use Case
in section6.html
```
...
  <style>
        #judul {
            color : blue;
        }
    </style>
</head>
<body>
    <div id= "judul">
        <h1 id="header">Section 6</h1>
    </div>
...

```
in section6.js
```
...
// Style Property
let judul6 = document.getElementById("judul");
Judul.style.backgroundColor ="grey" ;
console.log(style.backgroundColor);
// getComputedStyle()
let header6 = document.getElementById("header");
let style = window.getComputedStyle(header6);
console.log(style.color);
...

```
## Section 7
2 Contoh & 2 Use Case
Use Case 1
in section7.html
```
...
   <style>
        #sect7 {
            width: 75px;
            height: 25px;
            text-align: center;
            color: red;
            background-color: white;
            cursor: pointer;
        } 
    </style>

</head>
<body>
    <h1>Section 7</h1>
    <hr>
        <div class="section7">
            <div id="sect7">Click Me!!</div>
            <hr>
            <a id="id7"  href="https://github.com/KhathirulSan/LatihanDOM">Masuk ke Webku</a>
        </div>
...

```
in section7.js
```
...
// Mouse Events
let sect7 = document.getElementById("sect7");

sect7.addEventListener("mouseover", function() {
	sect7.style.backgroundColor = "black";
});

sect7.addEventListener("mouseout", function() {
	sect7.style.backgroundColor = "gray";
});

// preventDefault()
let id7 = document.getElementById("id7");

id7.addEventListener("click", function(event) {
	event.preventDefault();
	alert("Link Mati");
});
...
```

Use Case 2
in section7-2.html
```
...
 <!-- Keyboard Events -->
    <input type="text" id="chat">
    
    <hr>

    <!-- Focus Events -->
    <p>Gerakan mouse berpindah ke password dan klik simbol mata:</p>

    <form id="form">
        <input type="text" placeholder="username">
        <input type="password" placeholder="password">
    </form>
...

```
in section7-2.js
```
...
//Keyboard Events
let chatbox = document.getElementById('chat');
textBox.addEventListener('keydown', (event) => {
    console.log(`key=${event.key},code=${event.code}`);

}); 

//focus events
const pwd = document.querySelector('input[type="password"]');

pwd.addEventListener('focus', (e) => {
    e.target.style.backgroundColor = 'yellow';
});

pwd.addEventListener('blur', (e) => {
    e.target.style.backgroundColor = '';
});
...
```
## Section 8
2 Contoh & 2 Use Case
Use Case 1
in section8.html
```
...
  <!-- Radio Button -->
    <p>Pilih Minuman Buka Puasa:</p>
    <div>
        <input type="radio" name="minuman" value="Air Putih" id="air-putih">
        <label for="air-putih">Air Putih</label>
    </div>
    <div>
        <input type="radio" name="minuman" value="Es Sirop" id="es-sirop">
        <label for="es-sirop">Es Sirop</label>
    </div>
    <div>
        <input type="radio" name="minuman" value="Es Campur" id="es-campur">
        <label for="es-campur">Es Campur</label>
    </div>
    <div>
        <input type="radio" name="minuman" value="Jus Buah" id="jus-buah">
        <label for="jus-buah">Jus Buah</label>
    </div>
  
    <hr>
<!-- Check Button -->
<label for="accept">
    <input type="checkbox" id="accept" name="accept" value="yes"> Centang Jika Setuju
</label>
<p>
    <button id="btn">Pilihan Kamu Adalah </button>
</p>
<p id="output"></p>
...

```
in section8.js
```
...
//Radio Button

const btn = document.querySelector('#btn');        
        const radioButtons = document.querySelectorAll('input[name="minuman"]');
        btn.addEventListener("click", () => {
            let pilihMinuman;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    pilihMinuman = radioButton.value;
                    break;
                }
            }
            output.innerText = pilihMinuman ? `Kamu Memilih ${pilihMinuman}` : `Kamu Belum Pilih Minuman`;
        });

        const cb = document.querySelector('#accept');
        console.log(cb.checked); // false
...
```

Use Case 2
in section8-2.html
```
...
<div class="section-8-2">
         <!-- Radio Button -->
        <label><input type="radio" name="gender" value="laki-laki" id="gender"> Laki-Laki</label>
        <label><input type="radio" name="gender" value="perempuan" id="gender"> Perempuan</label>

        <br>
    <!-- Check Button -->
        <label><input type="checkbox" name="verify" value="Verify" id="Pernyataan">Anda Menyetujui Bahwa Gender Manusia itu Cuma 2</label>
    </div>
...

```
in section8-2.js
```
...
// Radio Button 
let gender = document.getElementById("gender");
console.log(gender.checked);

// Checkbox 
let pernyataan = document.getElementById("pernyataan");
console.log(pernyataan.checked);
...
```