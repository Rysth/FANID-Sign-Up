const imageInput = document.getElementById('photo');
const previewImage = document.getElementById('previewImage');

imageInput.addEventListener('change', function () {
  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      previewImage.src = event.target.result;
      previewImage.style.display = 'block';
    };
    reader.readAsDataURL(file);
  } else {
    previewImage.src = '#';
    previewImage.style.display = 'none';
  }
});
