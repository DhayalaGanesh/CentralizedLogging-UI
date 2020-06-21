import { Component, OnInit, Input } from '@angular/core';
import { LogViewModel } from '../models/log-model';

@Component({
    selector: 'app-logcard',
    templateUrl: './log-card.component.html',
    styleUrls:['./log-card.component.scss']
})

export class LogCardComponent implements OnInit{
    @Input() public logs: LogViewModel[];

    ngOnInit(){
        console.log(this.logs[0]);
    }
}