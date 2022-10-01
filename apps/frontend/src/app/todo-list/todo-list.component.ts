import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'youtube-poly-vs-mono-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  data;
  constructor(private appService: AppService, private router: Router, private activatedRoute: ActivatedRoute) { }
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    console.log('svelte');
    this.getData();
  }

  private getData(){
    this.appService.getData().subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }



}
