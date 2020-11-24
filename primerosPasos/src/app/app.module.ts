import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';//creado para que angular importe una pantilla formularios
import {RouterModule, Routes} from '@angular/router';
import{LibroclikedService} from './librocliked.service';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TesteoComponent } from './testeo/testeo.component';
import { RandomComponent } from './random/random.component';
import { ColoresComponent } from './colores/colores.component';
import { FirmaComponent } from './firma/firma.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { LibrosComponent } from './libros/libros.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';
import { InformacionComponent } from './informacion/informacion.component';
import { RenderdemoComponent } from './renderdemo/renderdemo.component';


const rutas: Routes =[
  {path: "",component: InicioComponent, pathMatch:'full'}, //direccion raiz
  {path: 'listado-libros',component: LibrosComponent},
  {path: 'renderer2', component: RenderdemoComponent},
  {path: 'informacion/:libroId',component: InformacionComponent},//Informacion una pagina aparte y varible libroId , cada libro tiene un id que mardara a otr pagina cada libro
  {path: 'informacion', redirectTo: '/'},
  {path: '**',redirectTo: '/'} //en caso de una direccion erronea vuelve a raiz
]

@NgModule({
  declarations: [
    AppComponent,
    TesteoComponent,
    RandomComponent,
    ColoresComponent,
    FirmaComponent,
    SobreNosotrosComponent,
    LibrosComponent,
    CabeceraComponent,
    InicioComponent,
    InformacionComponent,
    RenderdemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,//esto va con en el import de arriba angular formularios
    HttpClientModule,//para el jason
    RouterModule.forRoot(rutas)
  ],
  providers: [
    LibroclikedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
