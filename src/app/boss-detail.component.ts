import {Component, Input} from '@angular/core';

import {Pair} from './pair';
// import {Boss} from './boss';

@Component({
    selector: 'boss-detail',
    template: `
        <div>
            <h2>Pair-{{pair.boss.id}}. Boss : {{pair.boss.name}} !（用的是 pair.boss）</h2>
            <div><label>id: </label>{{pair.boss.id}}</div>
            <div>
                <label>name: </label>
                <input type="text"
                       [(ngModel)]="pair.boss.name"
                       placeholder="boss's name">
                <button
                    (click)="modifyBossName()"
                >
                    点我变身 33 娘！
                </button>
            </div>
        </div>
    `
})
export class BossDetailComponent {
    // @Input() boss: Boss;
    @Input() pair: Pair;

    modifyBossName(): void {
        console.log('In boss-comp\'s modifyBossName Func, before change pair.boss : ', this.pair.boss);
        console.log('\t\t\t\t\t\t modification start miao~!!');
        console.log('\t\t\t\t\t\t this : ', this);
        this.pair.boss = {
            id: 33,
            name: '33娘',
            enemy: '22娘'
        };
    };
}
