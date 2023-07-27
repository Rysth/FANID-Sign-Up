const formElement = document.querySelector('#form');

formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(formElement);

  /* Paso #1 */
  const email = formData.get('email');
  const cedula = formData.get('cedula');
  const name = formData.get('name');
  const lastname = formData.get('lastname');

  /* Paso #2 */
  const photoInput = document.getElementById('photo');
  const photoFile = photoInput.files[0];

  /* Paso #3 */
  const team = formData.get('team');
  const socio = formData.get('socio');

  console.log(photoFile);

  const requiredFields = [email, cedula, name, lastname, team, socio];
  const areAllFieldsFilled = requiredFields.every((fieldValue) => !!fieldValue);

  if (areAllFieldsFilled && photoFile) {
    const jsonObject = {
      email: email,
      cedula: cedula,
      nombres: name,
      apellidos: lastname,
      fotoPerfil: photoFile.name,
      equipo: team,
      socio: socio,
    };
    console.log(JSON.stringify(jsonObject, null, 2));
    // Now you can proceed with sending the JSON object to the server or performing other actions.
  } else {
    console.error('Porfavor, complete todos los campos');
  }
});
