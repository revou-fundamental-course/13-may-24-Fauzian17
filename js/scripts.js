// ini javascripts

let switchSegitiga = false;

function hideOrShow() {
  if (switchSegitiga == false) {
    switchSegitiga = true;
    document.getElementsByClassName("").style.display = "none";
    document.getElementsByClassName("").style.display = "block";
  } else {
    switchSegitiga = false;
    document.getElementsByClassName("").style.display = "block";
    document.getElementsByClassName("").style.display = "none";
  }
}

function validation() {}
