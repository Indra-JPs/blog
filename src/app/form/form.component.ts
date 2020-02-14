import { Component, OnInit } from '@angular/core';

import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  post: Post = new Post();

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onSubmit() {
    //console.log(this.post);
    this.postService.salvar(this.post);
  }

}
