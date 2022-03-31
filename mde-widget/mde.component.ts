// FIXME move to separate component
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mde-dialog',
  templateUrl: './mde.html'
})
export class MDEComponent  implements OnInit{


  image = require("./MDE.png");

  constructor(
  ) { }

  ngOnInit () {}
}