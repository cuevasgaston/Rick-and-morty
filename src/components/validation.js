const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const reg = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

export function validation(input) {
    let errors = {};

    if (!input.username) {
        errors.username = 'Se requiere un username';
    }
    if (!regexEmail.test(input.username)) {
        errors.username = 'Debe ser un correo electrónico';
    }
    if (input.username.length > 35) {
        errors.username = "No puede tener mas de 35 caracteres";
    }
    if (input.password.length < 6) {
        errors.password = "La contraseña tiene que tener una longitud entre 6 y 10 caracteres";
    }
    if (input.password.length > 10) {
        errors.password = "La contraseña tiene que tener una longitud entre 6 y 10 caracteres";
    }
    if (!reg.test(input.password)) {
        errors.password = "La contraseña debe tener al menos 1 numero";
    }
    return errors;
}
