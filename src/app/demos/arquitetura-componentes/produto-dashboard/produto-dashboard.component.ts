import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { ProdutoCountComponent } from '../componentes/produto-count.component';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: []
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {

  produtos: Produto[]

  @ViewChild(ProdutoCountComponent, { static: false }) contador: ProdutoCountComponent;
  @ViewChild('elemento', { static: false }) mensagemTela: ElementRef;

    constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.produtos = this.route.snapshot.data['produtos'];
    console.log(this.route.snapshot.data['teste']);
  }

  ngAfterViewInit(): void {
    console.log('Onjeto do contafor: ', this.contador.produtos);
    
   
    let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click')
    clickTexto.subscribe(() => {
      alert('Clicou no texto');
      return;
    })
  } 

  mudarStatus(event: Produto) {
    event.ativo = !event.ativo;
  }



}
