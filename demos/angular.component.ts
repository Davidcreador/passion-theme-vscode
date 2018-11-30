import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-batido-creator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['batido-creator.component.scss'],
  template: `
    <div class="batido-creator">

      <h2>
        Escoge tu batido
        <button class="button" type="button" (click)="filterBatido('agua')">En agua</button>
        <button class="button" type="button" (click)="filterBatido('milk')">MilkShake</button>
        <button class="button" type="button" (click)="filterBatido('premium')">Premium</button>
        <button class="button right" type="button" (click)="addBatido()">
          <i class="fa fa-plus"></i>
          Agregar batido
        </button>
      </h2>

      <div *ngFor="let batido of batidos.controls; let i = index;">
        <div class="batido-creator__header" (click)="toggleBatido(i)">

          <i
            class="fa fa-fw batido-creator__icon"
            [class.fa-chevron-down]="openBatido !== i"
            [class.fa-chevron-up]="openBatido === i"></i>
          Batido {{ i + 1 }}
          <i
            class="fa fa-fw batido-creator__status"
            [class.fa-check]="batido.valid"
            [class.fa-times]="batido.invalid"></i>

          <div
            class="batido-creator__delete"
            *ngIf="batidos.controls.length > 1"
            (click)="removeBatido(i)">
            <i class="fa fa-trash fa-fw"></i>
          </div>

        </div>

        <div
          class="batido-creator__content"
          [class.batido-creator__content--open]="openBatido === i"
          [formGroup]="batido">

          <app-batido-menu
            formControlName="menu">
          </app-batido-menu>

          <h3>Escoge el tamaño <span class="required">*</span></h3>
          <app-batido-size
            formControlName="size">
          </app-batido-size>

          <h3>Escoge tus ingredientes</h3>
          <app-batido-toppings
            formControlName="toppings">
          </app-batido-toppings>
        </div>

      </div>
    </div>
  `
})
export class BatidoCreatorComponent {
  private visibleBatido = 0;

  @Input()
  batidos: FormArray;

  @Input()
  filter = new EventEmitter<any>();

  @Output()
  add = new EventEmitter<any>();

  @Output()
  remove = new EventEmitter<any>();

  @Output()
  toggle = new EventEmitter<number>();

  get openBatido() {
    return this.visibleBatido;
  }

  set openBatido(index: number) {
    this.visibleBatido = index;
    if (~index) {
      this.toggle.emit(index);
    }
  }

  addBatido() {
    this.add.emit();
    this.openBatido = this.batidos.length - 1;
  }

  filterBatido(filter) {
    console.log(filter);
    this.filter.emit(filter);
  }

  removeBatido(index: number) {
    this.remove.emit(index);
    this.openBatido = this.batidos.length - 1;
  }

  toggleBatido(index: number) {
    if (this.openBatido === index) {
      this.openBatido = -1;
      return;
    }
    this.openBatido = index;
  }
}
