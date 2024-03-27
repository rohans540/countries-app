import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-flagcard',
  templateUrl: './flagcard.component.html',
  styleUrls: ['./flagcard.component.css']
})
export class FlagcardComponent implements OnInit {

  flagUrl: string = ""

  constructor() {}
  @Input() country: any;
  @Output() detailClick = new EventEmitter<any>();

  ngOnInit(): void {
    if(this.country && this.country?.cca2) {
      this.flagUrl = `https://countryflagsapi.netlify.app/flag/${this.country?.cca2}.svg`
    }
  }

  onDetailClick(): void {
    this.detailClick.emit(this.country)
  }
}
