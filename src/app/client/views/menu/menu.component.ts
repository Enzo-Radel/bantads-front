import { Component } from '@angular/core';
import Account from '../../entities/Account';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    standalone: true,
    imports: [ModalComponent]
})
export class MenuComponent {
    account = Account.findAccount(1);

    withdraw() {
        let form = document.getElementById("withdraw_form_id")!;
        let valueInput = document.getElementById("withdraw_value_input")! as HTMLInputElement;

        let formData = new FormData();

        formData.append("withdraw_value", valueInput.value);

        console.log("valor: " + formData.get("withdraw_value"));

        // TODO Recuperar "action" da variável form e fazer requisição async
    }

    deposit() {
        let form = document.getElementById("deposit_form_id")!;
        let valueInput = document.getElementById("deposit_value_input")! as HTMLInputElement;

        let formData = new FormData();

        formData.append("deposit_value", valueInput.value);

        console.log("valor: " + formData.get("deposit_value"));

        // TODO Recuperar "action" da variável form e fazer requisição async
    }

    transference() {
        let form = document.getElementById("transference_form_id")!;
        let valueInput = document.getElementById("transference_value_input")! as HTMLInputElement;
        let accountInput = document.getElementById("transference_account_input")! as HTMLInputElement;

        let formData = new FormData();

        formData.append("transference_value", valueInput.value);
        formData.append("transference_account", accountInput.value);

        console.log("conta: " + formData.get("transference_account"));
        console.log("valor: " + formData.get("transference_value"));

        // TODO Recuperar "action" da variável form e fazer requisição async
    }
}
