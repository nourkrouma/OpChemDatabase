const prolog="https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/";
const imageElement = document.getElementById("imageElement");
const inputField=document.getElementById("searchQuery");
const button=document.getElementById("button");
button.addEventListener("click",() =>{
    const searchQuery=inputField.value;
    // alert(prolog+searchQuery+"/PNG")
    imageElement.src = prolog+searchQuery+"/PNG";
})