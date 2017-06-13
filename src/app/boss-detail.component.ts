import {Component, Input} from '@angular/core';

import {Boss} from './boss';

@Component({
    selector: 'boss-detail',
    template: `
        <div>
            <h2>Pair-{{boss.id}}. {{boss.name}} details!</h2>
            <div><label>id: </label>{{boss.id}}</div>
            <div>
                <label>name: </label>
                <input type="text"
                       [(ngModel)]="boss.name"
                       placeholder="boss's name">
            </div>
        </div>
    `
})
export class BossDetailComponent {
    @Input() boss: Boss;
}
