import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {
  temp= {
    title1: '',
    title2: '',
    align: ''
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.router.url === '/details' ){
      this.temp={
        title2: 'ALSO LIKE',
        title1: 'YOU MAY',
        align: 'text-left'
      }

    } else{
      this.temp={
        title2: 'SWEETS',
        title1: 'POPULAR',
        align: 'text-center'
      }
    }
  }

}
