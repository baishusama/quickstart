import {Component} from '@angular/core';

import {Pair} from './pair';

// const HEROES: Hero[] = [
//     {id: 11, name: 'Mr. Nice'},
//     {id: 12, name: 'Narco'},
//     {id: 13, name: 'Bombasto'},
//     {id: 14, name: 'Celeritas'},
//     {id: 15, name: 'Magneta'},
//     {id: 16, name: 'RubberMan'},
//     {id: 17, name: 'Dynama'},
//     {id: 18, name: 'Dr IQ'},
//     {id: 19, name: 'Magma'},
//     {id: 20, name: 'Tornado'}
// ];

const PAIRS: Pair[] = [
    {
        id: 1,
        name: 'Right/Bad',
        hero: {
            id: 1,
            name: 'Mr. Right',
            enemy: 'Mr. Bad'
        },
        boss: {
            id: 1,
            name: 'Mr. Bad',
            enemy: 'Mr. Right'
        }
    },
    {
        id: 2,
        name: 'Hello/Hi',
        hero: {
            id: 2,
            name: 'Mr. Hello',
            enemy: 'Mr. Hi'
        },
        boss: {
            id: 2,
            name: 'Mr. Hi',
            enemy: 'Mr. Hello'
        }
    },
    {
        id: 3,
        name: 'Sun/Moon',
        hero: {
            id: 3,
            name: 'Mr. Sun',
            enemy: 'Mr. Moon'
        },
        boss: {
            id: 3,
            name: 'Mr. Moon',
            enemy: 'Mr. Sun'
        }
    }
];

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>My Pairs List</h2>
        <ul class="pairs">
            <li *ngFor="let pair of pairs"
                [class.selected]="pair === selectedPair"
                (click)="onSelect(pair)"
            >
                <span class="badge">{{pair.id}}.</span> {{pair.name}}
            </li>
        </ul>
        <hero-detail
            *ngIf="selectedPair"
            [hero]="selectedPair.hero"
        ></hero-detail>
        <boss-detail
            *ngIf="selectedPair"
            [boss]="selectedPair.boss"
        ></boss-detail>
    `,
    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }

        .heroes {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
        }

        .heroes li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
        }

        .heroes li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
        }

        .heroes li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
        }

        .heroes .text {
            position: relative;
            top: -3px;
        }

        .heroes .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
        }
    `]
})
export class AppComponent {
    title = 'Tour of pairs';
    pairs = PAIRS;
    selectedPair: Pair;

    onSelect(pair: Pair): void {
        this.selectedPair = pair;
    };
}
