import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data.service.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  textFromHello!: string;

  constructor(private _dataService: DataServiceService) {}

  ngOnInit(): void {
    // this.textFromHello = this._dataService.textFromHello;
    this._dataService.textFromHello$.subscribe(
      (text) => (this.textFromHello = text)
    );
  }
}
