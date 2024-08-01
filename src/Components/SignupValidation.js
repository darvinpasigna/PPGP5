

const SignupValidation = (signUp) => {
    let error = {};

    if (!signUp.firstname) {
        error.firstname = "Please enter your first name!";
    }
    if (!signUp.lastname) {
        error.lastname = "Please enter your last name!";
    }
    if (!signUp.email) {
        error.email = "Please enter your email!";
    }
    if (!signUp.address) {
        error.address = "Please enter your address!";
    }
    if (!signUp.city) {
        error.city = "Please enter your city!";
    }
    if (!signUp.username) {
        error.username = "Please create username!";
    }
    if (!signUp.pass) {
        error.pass = "Please create password!";
    }
    if (!signUp.repass) {
        error.repass = "Please re-enter your password!";
    }
    if (signUp.pass !== signUp.repass) {
        error.repass = "Passwords do not match!";
    }

    return error;
}

export default SignupValidation;
