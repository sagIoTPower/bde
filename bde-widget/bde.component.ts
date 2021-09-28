// FIXME move to separate component
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bde-dialog',
  templateUrl: './bde.html'
})
export class BDEComponent  implements OnInit{


  image = require("./BDE.png");

  constructor(
  ) { }

  ngOnInit () {}
}