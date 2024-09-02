import { Component, OnInit } from '@angular/core';
import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service';
import { Livro } from '../livro';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = new Livro();
  public autoresForm: string = '';  
  public editoras: any[] = []; 
  public novaEditora: string = ''; 

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir(): void {
    if (this.livro.titulo && this.livro.resumo && this.livro.codEditora !== undefined && this.autoresForm.trim()) {
      this.livro.autores = this.autoresForm.split('\n'); 
      console.log('Livro antes de incluir:', this.livro);
      this.servLivros.incluir(this.livro); 
      this.router.navigateByUrl('/lista'); 
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }

  adicionarEditora(): void {
    if (this.novaEditora.trim()) {
      const novoCodEditora = this.editoras.length + 1; 
      this.editoras.push({ codEditora: novoCodEditora, nome: this.novaEditora });
      this.livro.codEditora = novoCodEditora; 
      this.novaEditora = ''; 
    }
  }
}
