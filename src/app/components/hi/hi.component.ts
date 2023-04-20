import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataServiceService } from 'src/app/services/data.service.service';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css'],
})
export class HiComponent implements OnInit {
  @Input() text!: string;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();
  onButtonClicked() {
    this.buttonClicked.emit();
    this.text = 'Da change2';
    this._dataService.setTextFromHello(this.text);
  }

  constructor(private _dataService: DataServiceService) {}

  ngOnInit(): void {
    this._dataService.setTextFromHello(this.text);
  }
}
