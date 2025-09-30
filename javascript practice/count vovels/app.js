function countVowels() {
  let str = document.getElementById("text").value.toLowerCase();
  let count = str.match(/[aeiou]/g);
  document.getElementById("result").innerText =
    "vowels" + " " + (count ? count.length : 0);
}
