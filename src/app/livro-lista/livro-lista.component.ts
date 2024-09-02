import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
  standalone: true,
  imports: [CommonModule] 
})
export class LivroListaComponent implements OnInit {
  public livros: Livro[] = [];
  public editoras: any[] = [];

  constructor(
    private servLivros: ControleLivrosService,
    private servEditora: ControleEditoraService
  ) {}

  ngOnInit(): void {
    this.livros = this.servLivros.obterLivros();
    this.editoras = this.servEditora.getEditoras();
  }

  excluir = (codigo: number): void => {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros(); 
  }

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  }
}
