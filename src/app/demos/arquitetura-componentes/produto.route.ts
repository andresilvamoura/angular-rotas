import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarProdutosComponent } from './editar-produtos/editar-produtos.component';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoAppComponent } from './produto.app.component';
import { ProdutoResolve } from './services/produto.resolve';

const produtoRouterConfig: Routes = [
    {
        path: '', component: ProdutoAppComponent,
        children: [
            { path: '', redirectTo: 'todos' },
            {
                path: ':estado',
                component: ProdutoDashboardComponent,
                resolve: { produtos: ProdutoResolve }
            },
            { path: 'editar/:id', component: EditarProdutosComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports: [RouterModule]
})
export class ProdutoRoutingModule { }