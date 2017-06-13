import {Component, Input} from '@angular/core';

import {Pair} from './pair';

@Component({
    selector: 'pair-detail',
    template: `
        <div>
            <h2>Pair-{{pair.id}}. details!</h2>
            <div><label>id: </label>{{pair.id}}</div>
            <div>
                <label>name: </label>
                <input type="text"
                       [(ngModel)]="pair.name"
                       placeholder="pair's name">
            </div>
        </div>
    `
})
export class PairDetailComponent {
    @Input() pair: Pair;
}
