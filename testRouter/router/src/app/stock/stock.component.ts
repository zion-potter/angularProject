import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  private stockId: number;

  private isPro: boolean;

  private focus: false;

  constructor(private  routerInfo: ActivatedRoute) {
  }

  ngOnInit() {
    this.routerInfo.params.subscribe((params: Params) => this.stockId = params['id']);
    this.isPro = this.routerInfo.snapshot.data[0]['isPro'];
  }

  isFocus() {
    return this.focus;
  }

}
