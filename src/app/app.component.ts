import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  formGroup: FormGroup;
  ticketPattern = /^\d{5}$/;

  isTicketEntered: boolean = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this._initForm();
  }

  sendTicket() {
    this.isTicketEntered = true;
  }

  get ticket_number(): AbstractControl {
    return this.formGroup.get('ticket_number');
  }

  private _initForm(): void {
    this.formGroup = this.fb.group({
      ticket_number: ['', [Validators.required, Validators.pattern(this.ticketPattern)]]
    });
  }
}
