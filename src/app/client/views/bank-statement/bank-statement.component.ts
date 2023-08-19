import { Component } from '@angular/core';
import Movement from 'src/app/entities/Movement';
import {MovementTypes} from 'src/app/entities/Movement';
import Account from 'src/app/entities/Account';

@Component({
    selector: 'app-bank-statement',
    templateUrl: './bank-statement.component.html',
    styleUrls: ['./bank-statement.component.css']
})
export class BankStatementComponent {
    // TODO criar lógia para mostrar o saldo de cada dia
    // TODO validar cliente para saber se a transferência foi feita para ele ou a partir dele
    days: Array<MovementsByDay>;
    types = MovementTypes;
    getDaysBetweenDates(startDate: Date, endDate: Date): Date[] {
        const daysArray: Date[] = [];
        const currentDate = new Date(startDate);
      
        while (currentDate <= endDate) {
          daysArray.push(new Date(currentDate));
          currentDate.setDate(currentDate.getDate() + 1);
        }
      
        return daysArray;
    }

    constructor()
    {
        let account = Account.findAccount(1);

        const startDate = account.created_at;
        const endDate = new Date();
        
        const daysBetween: Date[] = this.getDaysBetweenDates(startDate, endDate);

        let allMovements = Movement.getByAccount(1);

        this.days = [];

        console.log(allMovements);

        daysBetween.forEach(day => {
            this.days.push({
                date: day,
                movements: []
            });
            allMovements.forEach(movement => {
                if (movement.date.toDateString() == day.toDateString()) {
                    this.days[this.days.length -1].movements.push(movement);
                }
            });
        });

        console.log(this.days);
    }
}

interface MovementsByDay{
    date: Date;
    movements: Movement[];
}