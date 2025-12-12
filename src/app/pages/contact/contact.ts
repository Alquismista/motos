import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  FormGroup, 
  FormControl, 
  Validators, 
  ReactiveFormsModule 
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class Contact {

  contactForm: FormGroup<{
    nombre: FormControl<string | null>;
    email: FormControl<string | null>;
    telefono: FormControl<string | null>;
    asunto: FormControl<string | null>;
    mensaje: FormControl<string | null>;
  }>;

  submitting = false;

  constructor() {
    this.contactForm = new FormGroup({
      nombre: new FormControl('', {
        validators: [Validators.required, Validators.minLength(2)],
        nonNullable: false
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        nonNullable: false
      }),
      telefono: new FormControl('', {
        validators: [Validators.required, Validators.minLength(7)],
        nonNullable: false
      }),
      asunto: new FormControl('', {
        validators: [Validators.required],
        nonNullable: false
      }),
      mensaje: new FormControl('', {
        validators: [Validators.required, Validators.minLength(10)],
        nonNullable: false
      }),
    });
  }

  // Getter conveniente para acceder a los controles
  get f() {
    return this.contactForm.controls;
  }

  enviar() {
    // Marcar todos los campos como tocados para mostrar errores
    this.contactForm.markAllAsTouched();
    
    if (this.contactForm.invalid) {
      return;
    }

    this.submitting = true;

    // Crear el objeto con los datos del formulario
    const payload = {
      nombre: this.f.nombre.value,
      email: this.f.email.value,
      telefono: this.f.telefono.value,
      asunto: this.f.asunto.value,
      mensaje: this.f.mensaje.value,
      fecha: new Date().toISOString()
    };

    // Descargar como JSON
    const text = JSON.stringify(payload, null, 2);
    const blob = new Blob([text], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = `contacto_${new Date().getTime()}.json`;
    link.click();

    window.URL.revokeObjectURL(url);

    // Resetear estado
    this.submitting = false;
    this.contactForm.reset();
    
    // Opcional: Mostrar mensaje de éxito
    alert('¡Formulario enviado correctamente! Se ha descargado un archivo JSON con la información.');
  }
}