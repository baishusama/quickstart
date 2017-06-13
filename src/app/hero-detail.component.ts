import {Component, Input} from '@angular/core';

// import {Pair} from './pair';
import {Hero} from './hero';

@Component({
    selector: 'hero-detail',
    template: `
        <div>
            <h2>Pair-{{hero.id}}. Hero : {{hero.name}} !（用的是 hero）</h2>
            <div><label>id: </label>{{hero.id}}</div>
            <div>
                <label>name: </label>
                <input type="text"
                       [(ngModel)]="hero.name"
                       placeholder="hero's name">
                <button
                    (click)="modifyHeroName()"
                >
                    点我变身 22 娘！
                </button>
            </div>
        </div>
    `
})
export class HeroDetailComponent {
    @Input() hero: Hero;
    // @Input() pair: Pair;

    modifyHeroName(): void {
        console.log('In hero-comp\'s modifyHeroName Func, before change hero : ', this.hero);
        console.log('\t\t\t\t\t\t modification start miao~!!');
        console.log('\t\t\t\t\t\t this : ', this);
        this.hero = {
            id: 22,
            name: '22娘',
            enemy: '33娘'
        };
    };
}
