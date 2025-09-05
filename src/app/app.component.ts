import { Component } from '@angular/core';

interface Convenio {
  idConvenio: string;
  nombreConvenio: string;
  compania: string;
  idCliente: string;
  formaPago: string;
  idCliente2: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchForm = {
    idConvenio: '12345678',
    nombreConvenio: 'Nombre por default precargado',
    estadoConvenio: '',
    compania: '',
    idCliente: '12345678'
  };

  estadoOptions = [
    { label: 'Activo', value: 'activo' },
    { label: 'Inactivo', value: 'inactivo' },
    { label: 'Pendiente', value: 'pendiente' }
  ];

  companiaOptions = [
    { label: 'Sura', value: 'sura' },
    { label: 'Bancolombia', value: 'bancolombia' },
    { label: 'Davivienda', value: 'davivienda' }
  ];

  convenios: Convenio[] = [
    {
      idConvenio: 'Lorem ipsum',
      nombreConvenio: 'Lorem ipsum',
      compania: 'Lorem ipsum',
      idCliente: 'Lorem ipsum',
      formaPago: 'Lorem ipsum',
      idCliente2: 'Lorem ipsum'
    },
    {
      idConvenio: 'Lorem ipsum',
      nombreConvenio: 'Lorem ipsum',
      compania: 'Lorem ipsum',
      idCliente: 'Lorem ipsum',
      formaPago: 'Lorem ipsum',
      idCliente2: 'Lorem ipsum'
    }
  ];

  showMenu(event: Event, overlayPanel: any) {
    overlayPanel.toggle(event);
  }
}
