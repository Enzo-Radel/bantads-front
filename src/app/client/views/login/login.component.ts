import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    submitLoginForm() {
        let form = document.getElementById("loginForm")!;
        let emailInput = document.getElementById("emailInput")! as HTMLInputElement;
        let passwordInput = document.getElementById("passwordInput")! as HTMLInputElement;

        let formData = new FormData();

        formData.append("email", emailInput.value);
        formData.append("password", passwordInput.value);

        console.log("email: " + formData.get("email"));
        console.log("senha: " + formData.get("password"));

        // TODO Recuperar "action" da variável form e fazer requisição async (repetir para todos os formulários)
    }
}
