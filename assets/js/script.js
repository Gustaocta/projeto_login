const email = 'gustavo@gmail.com';

console.log(email);
console.log('O seu e-mail é: ' + email);
console.log(`O seu e-mail é: ${email}`);

document.getElementById('btn-submit').addEventListener('click', e => {

    console.log('O botão foi clicado!')

});

document.getElementById('form-login').addEventListener('mouseenter', e => {

    console.log('O mouse está sobre o fomulário!');

});

document.querySelector('#form-login').addEventListener('mouseleave', e => {

    console.log('O mouse saiu do fomulário!');

});

document.querySelector('#form-login').addEventListener('submit', e=> {

   e.preventDefault();

   let email = document.querySelector('#email').value;
   let password = document.querySelector('#password').value;

   let json = {
       email,
       password
   };

   if (!json.email) {

      console.error("O campo e-mail deve ser preenchido!");
   } else if (!json.password) {

             console.error("O campo senha deve ser preenchido!");
   } else {

          console.info("Dados validados com sucesso!");
   }

})