const panels = [...document.querySelectorAll('.panel')];

const panel1 = document.querySelector('.panel1');
const panel2 = document.querySelector('.panel2');
const panel3 = document.querySelector('.panel3');
const panel4 = document.querySelector('.panel4');
const panel5 = document.querySelector('.panel5');

function math() {
  const math = Math.floor(Math.random() * 2);
  if (math == 1) {
    panel1.style.backgroundImage = "url('https://shorturl.at/dsv36')";
    panel2.style.backgroundImage = "url('https://shorturl.at/gikmX')";
    panel3.style.backgroundImage = "url('https://shorturl.at/CGWX8')";
    panel4.style.backgroundImage = "url('https://shorturl.at/xCOWZ')";
    panel5.style.backgroundImage = "url('https://shorturl.at/qDGW8')";
  } else {
    panel1.style.backgroundImage = "url('https://rb.gy/liolg')";
    panel2.style.backgroundImage = "url('https://rb.gy/0u9qs')";
    panel3.style.backgroundImage = "url('https://rb.gy/zelzr')";
    panel4.style.backgroundImage = "url('https://rb.gy/k2q0c')";
    panel5.style.backgroundImage = "url('https://rb.gy/y4n6p')";
  }
}
panels.map((panel) =>
  panel.addEventListener('click', () => {
    panel.classList.toggle('open');
  })
);

panels.map((panel) =>
  panel.addEventListener('transitionend', (event) => {
    if (event.propertyName === 'flex-grow' || event.propertyName === 'flex') {
      panel.classList.toggle('open-active');
    }
  })
);

math();
