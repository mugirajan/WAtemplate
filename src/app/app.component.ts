import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formData = {
    selectedNumber: '',
    header: '',
    message: ''
  };

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    // this.onSubmit();
  }

  

  onSubmit(): void {


    const apiUrl = 'https://graph.facebook.com/v18.0/214842615044313/messages'; 

    const whatsappNumber = this.formData.selectedNumber;
    const header = this.formData.header;
    const message = this.formData.message;

    
    const postData = {
      "messaging_product": "whatsapp",
      "to": whatsappNumber,
      "type": "template",
      "template": {
          "name": "birthday_wishes",
          "language": {
              "code": "en"
          },
           "components": [
          {
            "type": "header",
            "parameters": [
              {
                "type":"text",
                "text": header
              }
            ]
          },
          {
            "type": "body",
            "parameters": [
              {
                "type": "text",
                "text": message
              }
            ]
          }
        ]
      }
  }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer EAACjvShlPAsBO9I9AYn8A8vuwKtL2WUQ5NfHkCtwEXY4fCcQOCOn0xUHHFZAQu6zy2IsCT2wb9pBeDvpB74CdUhaGJvlqD2VZA12I4UOZCj31NRGI1fOJkyaG10WdyQEJDz8otGBpos2SzLxEfakFD90C5YcCTH24ch6YdbiiT9rraJoAJ2aaYbmfi0sIGZBsxR1AE6AUV68eWS3ZBTsZD' 
      })
    };

    this.http.post(apiUrl, postData, httpOptions)
      .subscribe(
        (response) => {
          console.log('success:', response);
        },
        (error) => {
          console.log('Error:', error);
        }
      );
  }
}
