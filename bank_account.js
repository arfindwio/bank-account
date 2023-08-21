let saldo = 0;

const updateSaldoDisplay = () => {
  const saldoDisplay = document.getElementById("saldoDisplay");
  saldoDisplay.textContent = saldo;
};

const tambahSaldo = () => {
  let menambahSaldo = window.prompt("Masukkan angka untuk menambah saldo:");
  if (menambahSaldo !== null) {
    saldo += parseInt(menambahSaldo);
    updateSaldoDisplay();
  }
};

const kurangiSaldo = () => {
  let mengurangSaldo = window.prompt("Masukkan angka untuk mengurangi saldo:");
  if (mengurangSaldo !== null) {
    mengurangSaldo = parseInt(mengurangSaldo);
    if (saldo >= mengurangSaldo) {
      saldo -= mengurangSaldo;
      updateSaldoDisplay();
    } else {
      console.log("Saldo tidak mencukupi.");
    }
  }
};

updateSaldoDisplay();
