import { Injectable } from '@angular/core';

import { Post } from '../models/post.model';

@Injectable()
export class PostService {

  constructor() { }

  salvar(post: Post) {
    //console.log(post);
    const posts = this.buscarTodos();
    posts.push(post);

    window.localStorage.setItem('posts', JSON.stringify(posts));
  }

  buscarPostPrincipal(): Post {
    return JSON.parse(window.localStorage.getItem('posts'))[0] || {
      autor: 'Autor',
      titulo: 'Titulo',
      data: '13/02/2020',
      conteudo: 'Conteudo'
    };
  }

  buscarTodos(): Post[] {
    return JSON.parse(window.localStorage.getItem('posts')) || [];
  }
}
