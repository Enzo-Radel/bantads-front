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

        console.log(formData.get("withdraw_value"));

        // TODO Recuperar "action" da variável form e fazer requisição async
    }
}
