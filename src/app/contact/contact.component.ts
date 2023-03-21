import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
@ViewChild('myForm') myForm!: ElementRef;
@ViewChild('nameField') nameField!: ElementRef;
@ViewChild('mailField') mailField!: ElementRef;
@ViewChild('textField') textField!: ElementRef;
@ViewChild('sendButton') sendButton!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  onActivate(event:any) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  async sendMail(){
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let textField = this.textField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    nameField.disabled = true;
    mailField.disabled = true;
    textField.disabled = true;
    sendButton.disabled = true;

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('mail', mailField.value);
    fd.append('message', textField.value);

    await fetch('https://sebastian-benning.developerakademie.net/send_mail/send_mail.php',
    {
      method:'POST',
      body:fd
    }
    );
    this.sendPopUp();
    nameField.disabled = false;
    mailField.disabled = false;
    textField.disabled = false;
    sendButton.disabled = false;
    nameField.value = '';
    mailField.value = '';
    textField.value = '';
  }

  sendPopUp(){
    document.getElementById('request')?.classList.remove('d-none');
    setTimeout(() => {
      document.getElementById('request')?.classList.add('d-none');
    }, 2000);
  }
}


