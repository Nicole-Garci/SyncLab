import Form from '../Model/Form.js';
import ValidatorRegex from '../Validators/ValidatorRegex.js'
import ValidatorStrMinLen from '../Validators/ValidatorStrMinLen.js';

window.onload = () => {
    let formData = {
        id: "login-form",
        fields: [
            {
                id: 'username',
                validators: [
                    new ValidatorRegex(/\w+/, "Deve possuir apenas letras minúsculas e maiúsculas sem acento!"),
                    new ValidatorStrMinLen(3, "Deve possuir ao menos 3 letras")
                ]
            },
            {
                id: 'password',
                validators: [
                    new ValidatorRegex(/\w+/, "Deve possuir apenas letras minúsculas e maiúsculas sem acento!")
                ]
            }
        ],
        onSubmit: e => {
            e.preventDefault();
            console.log("AQUI!");
        }
    }

    let form = new Form(formData);

}