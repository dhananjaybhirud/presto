import {Component, HostListener, OnInit} from '@angular/core';
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
  itemsPerSlide;
  innerWidth:number ;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 1200){
      this.itemsPerSlide = 4;
    } else if (  this.innerWidth <= 1200 && this.innerWidth >= 768 ){
      this.itemsPerSlide = 3;
    } else if(this.innerWidth >= 575 && this.innerWidth <= 767){
      this.itemsPerSlide = 2;
    } else {
      this.itemsPerSlide = 1;
    }

    // console.log(this.innerWidth);
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
