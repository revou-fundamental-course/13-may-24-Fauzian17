// Fungsi untuk menghitung luas segitiga
function hitungLuasSegitiga(event) {
  event.preventDefault();
  const alas = parseFloat(document.form.alas.value);
  const tinggi = parseFloat(document.form.tinggi.value);

  if (isNaN(alas) || isNaN(tinggi)) {
    alert("Please enter valid numbers for alas and tinggi.");
    return false;
  }
  // Rumus luas segitiga
  const luas = 0.5 * alas * tinggi;
  // Penulisan ke halaman html dari luas segitiga
  const hasil = `Diketahui :\n
  Alas = ${alas}\n
  Tinggi = ${tinggi}\n
  L = 1/2 x ${alas} x ${tinggi} = ${luas}\n
  Jadi luas dari segitiga adalah ${luas}`;
  document.getElementById("form-hasil").innerText = hasil;

  return false;
}

// Fungsi untuk menghitung keliling segitiga
function hitungKelilingSegitiga(event) {
  event.preventDefault();
  const sisiA = parseFloat(document.forms["keliling-form"].sisiA.value);
  const sisiB = parseFloat(document.forms["keliling-form"].sisiB.value);
  const sisiC = parseFloat(document.forms["keliling-form"].sisiC.value);

  if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
    alert("Silakan masukkan angka yang valid untuk panjang sisi.");
    return false;
  }
  //Rumus keliling segitiga
  const keliling = sisiA + sisiB + sisiC;
  // Penulisan hasil ke halaman html
  document.getElementById("keliling-hasil").innerText = `Diketahui:\n
  Sisi A = ${sisiA}\n
  Sisi B = ${sisiB}\n
  Sisi C = ${sisiC}\n
  K = ${sisiA} + ${sisiB} + ${sisiC} = ${keliling}\n
  Jadi keliling dari segitiga adalah ${keliling}`;

  return false;
}

// Fungsi untuk membersihkan formulir keliling segitiga
function clearKelilingForm() {
  document.forms["keliling-form"].sisiA.value = "";
  document.forms["keliling-form"].sisiB.value = "";
  document.forms["keliling-form"].sisiC.value = "";
  document.getElementById("keliling-hasil").innerText = "";
}
// Fungsi untuk membersihkan formulir luas segitiga
function clearForm() {
  document.form.alas.value = "";
  document.form.tinggi.value = "";
  document.getElementById("form-hasil").innerText = "";
}

// Fungsi button scroll
function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
