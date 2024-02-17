import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import "./../../assets/smtp.js"; //file path may change → 
declare let Email: any;

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class contactComponent {
	public name = '';
	public email = '';
	public message = '';
	public messageSent = false;
	public messageSuccess = false;
	public sending = false;
	private pass = "9B8BD69FB45757F9C2E0555F51624C4EB005";
	private myEmail = 'lixx2937@umn.edu';

	form = new UntypedFormGroup({
		name: new UntypedFormControl('', Validators.required),
		email: new UntypedFormControl('', [Validators.required, Validators.email]),
		message: new UntypedFormControl('', Validators.required)
	})

	constructor() { }

	public submitForm() {
		this.form.get('name')?.markAsTouched();
		this.form.get('email')?.markAsTouched();
		this.form.get('message')?.markAsTouched();
		if (this.form.valid) {
			this.sending = true;
			Email.send({
				Host : "smtp.elasticemail.com",
				Username : this.myEmail,
				Password : this.pass,
				To : this.myEmail,
				From : this.myEmail,
				Subject : "Message from '" + this.name + "' on website. Email: " + this.email,
				Body : this.message
			}).then(
				  (message: any) => this.handleResponse(message)
			);
		}
	}

	public resetFormValues() {
		this.name = '';
		this.email = '';
		this.message = '';
		this.form.get('name')?.markAsUntouched();
		this.form.get('email')?.markAsUntouched();
		this.form.get('message')?.markAsUntouched();
	}

	public handleResponse(message: string) {
		console.log(message)
		this.messageSent = true;
		this.sending = false;
		if (message == 'OK') {
			this.resetFormValues();
			this.messageSuccess = true;
		} else {
			this.messageSuccess = false;
		}
	}
}
