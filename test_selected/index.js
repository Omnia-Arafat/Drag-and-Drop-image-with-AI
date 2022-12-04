var photo;
window.onload= function(){
    photo = new Foto();
}

function selectImage(){
    document.getElementById("foto-file").click();
}

const image_input = document.querySelector("#foto-file");

image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    img.src = reader.result;
  });
  reader.readAsDataURL(this.files[0]);
});