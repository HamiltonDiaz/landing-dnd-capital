import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextarea } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

import { environment } from 'src/environments/environment';

interface AccordionItem {
  value: string;
  header: string;
  content: string;
}

@Component({
  selector: 'app-contact-us',
  imports: [
    CommonModule,
    AccordionModule, 
    DividerModule, 
    ReactiveFormsModule,
    InputTextModule,
    InputTextarea,
    ButtonModule,
    CardModule
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;
  address: string = environment.address;
  contactEmail: string = environment.contactEmail;
  phoneNumber: string = environment.phoneNumber;
  isLoading = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      phone: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      message: ['', [Validators.required,Validators.maxLength(800)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isLoading = true;
      this.successMessage = '';
      this.errorMessage = '';

      // Preparar los datos para Web3Forms
      const formData = {
        access_key: environment.web3formsKey, // Tu Access Key de Web3Forms
        name: this.contactForm.get('name')?.value,
        email: this.contactForm.get('email')?.value,
        phone: this.contactForm.get('phone')?.value,
        message: this.contactForm.get('message')?.value,
        subject: `New Contact Form Submission from ${this.contactForm.get('name')?.value}`
      };

      // Enviar a Web3Forms API
      this.http.post('https://api.web3forms.com/submit', formData)
        .subscribe({
          next: (response: any) => {
            this.isLoading = false;
            if (response.success) {
              this.successMessage = 'Thank you! Your message has been sent successfully.';
              this.contactForm.reset();
              console.log('Form submitted successfully:', response);
            } else {
              this.errorMessage = 'Something went wrong. Please try again.';
              console.error('Form submission failed:', response);
            }
          },
          error: (error) => {
            this.isLoading = false;
            this.errorMessage = 'Failed to send message. Please try again later.';
            console.error('Error submitting form:', error);
          }
        });
    } else {
      // Marcar todos los campos como touched para mostrar errores
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
  
  accordionItems: AccordionItem[] = [
    {
      value: '0',
      header: 'Who lead your Rooms?',
      content: `Each DND property is led by a dedicated Hospitality Manager, 
      responsible for maintaining premium standards in every detail — from preparation to guest experience. 
      Our team works behind the scenes to guarantee that your stay is as seamless as it is memorable.`,
    },
    {
      value: '1',
      header: 'Do all staff members speak English?',
      content: `Yes, of course. All our team members speak fluent English 
      and are trained to communicate clearly and professionally with every guest.`,
    },
    {
      value: '2',
      header: 'Do your team adapt to different guests?',
      content: `Absolutely. Our team always adapts to the needs and preferences of each guest.
      Whether you’re a solo traveller, a family, a student, or a business professional,
      we tailor every detail — from check-in to in-room setup — to make your stay comfortable and personal.
      At DND, every guest is unique, and we make sure your experience feels that way too.`,
    },
    {
      value: '3',
      header:
        'Do you offer any discounts for longer stays or multiple bookings?',
      content: `Yes, we do! DND Capital offers special rates for extended stays, group bookings, and returning guests.
      Whether you’re staying for a few weeks or managing several reservations at once, 
      we’ll be happy to provide a tailored offer that fits your needs.
      Simply contact our team, and we’ll prepare the best possible rate for your stay.`,
    },
    {
      value: '4',
      header: 'What if I need to cancel my reservation?',
      content: `We understand that plans can change.
      If you need to cancel your stay, simply contact our team as soon as possible.
      Cancellation terms depend on the type of booking and the length of your stay, 
      but we always aim to be flexible and fair.
      Full details are provided at the time of booking, 
      and our team will guide you through any changes or refunds if applicable.`,
    },
  ];
}
