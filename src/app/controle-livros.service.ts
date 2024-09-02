import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    { codigo: 1, codEditora: 101, titulo: 'Livro 1', resumo: 'Resumo do Livro 1', autores: ['Autor 1', 'Autor 2'] },
    { codigo: 2, codEditora: 102, titulo: 'Livro 2', resumo: 'Resumo do Livro 2', autores: ['Autor 3'] },
    { codigo: 3, codEditora: 103, titulo: 'Livro 3', resumo: 'Resumo do Livro 3', autores: ['Autor 4', 'Autor 5'] }
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index >= 0) {
      this.livros.splice(index, 1);
    }
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map(livro => livro.codigo)) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }
}
