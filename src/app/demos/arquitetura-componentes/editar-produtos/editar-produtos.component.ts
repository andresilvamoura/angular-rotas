import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-editar-produtos',
  templateUrl: './editar-produtos.component.html',
  styles: []
})
export class EditarProdutosComponent implements OnInit {
  produto: Produto;

  constructor(
    private route: ActivatedRoute,
    private service: ProdutoService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.produto = this.service.obterPorId(params['id']);
      });
  }

  salvar() {
    this.router.navigate(['/produtos']);
  }
}
