function myFunction(){
    var inp = document.getElementById("input");
    var txt = inp.value
    var inputText = document.getElementById("passage");
    var innerHTML = inputText.innerHTML;
    innerHTML = innerHTML.replace(/<.*?>/g, "");
    var re = new RegExp(`(${txt})`,"g");
    innerHTML = innerHTML.replace(re,'<span class="highlight">$1</span>')
    inputText.innerHTML = innerHTML;
}