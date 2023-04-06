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