
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