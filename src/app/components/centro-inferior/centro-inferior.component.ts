import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-centro-inferior',
  templateUrl: './centro-inferior.component.html',
  styleUrls: ['./centro-inferior.component.css']
})
export class CentroInferiorComponent {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: [Validators.required, Validators.maxLength(10)],
      lastName: [Validators.required, Validators.maxLength(10)],
      email: [Validators.required, Validators.email],
      message: [Validators.required, Validators.maxLength(100)],
   
    });

    this.loadApi()
  }

  loadApi():any{
    const response = {
      firstName: "Carlos",
      lastName: "Portillo",
      email: "carlosportillo308@gmail.com",
      message: "Escribe tu mensaje"
    }

    this.userForm.patchValue(response);

  }

  submitForm() {
    console.log('Formulario enviado con el valor: ', this.userForm.value);
  }
}
