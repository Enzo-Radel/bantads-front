import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
    standalone: true,
    imports: [CommonModule]
})
export class ModalComponent {
    @Input() modalId : string = "withdrawModal";
    @Input() title : string = "Título";
    @Input() formButton : string | null = null;

    @Output() btnClicked = new EventEmitter<void>();

    emitEvent() {
        this.btnClicked.emit();
    }
}
