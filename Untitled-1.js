
const inputs = document.querySelectorAll(".quntiti");
const pluss = document.querySelectorAll(".plus");
const mainuss = document.querySelectorAll(".mainus");

var inc = [0, 0, 0];
var dec = inc;
for (let i = 0; i < inputs.length; i++) {
    pluss[i].addEventListener('click', (e) => {
        inc[i]++;
        inputs[i].value = inc[i];
        calculateTotal();
    });
}
for (let i = 0; i < inputs.length; i++) {

    mainuss[i].addEventListener('click', (e) => {
        dec[i]--;
        if (dec[i] >0) {
            inputs[i].value = dec[i];
            calculateTotal();
        } 
    });
}

const prexelement = document.querySelectorAll(".prix");
function calculateTotal() {
    var sum = 0;
    for (let j = 0; j < prexelement.length; j++) {
      const price = parseFloat(prexelement[j].textContent);
      const quantity = parseFloat(inputs[j].value);
      sum += price * quantity;
    }
    document.getElementById('total').textContent = sum;
  }

  const burger_menu = document.querySelector('#burger-menu').style;
  const openmenu = document.querySelector('#menu');
  const closmenu = document.querySelector('#clos');
  
  openmenu.addEventListener('click', () => {
      burger_menu.display = 'flex'; 
  })
  closmenu.addEventListener('click', () => {
      burger_menu.display = 'none'; 
  })





