import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from "@ionic-native/social-sharing";
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private socialSharing: SocialSharing,private emailComposer: EmailComposer) {
    
  }
  sendMail(){
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
        let email = {
          to: 'rajamohanrnd@gmail.com',
          cc: 'rajamohanrnd@yahoo.com',
          //bcc: ['john@doe.com', 'jane@doe.com'],
          attachments: [
            'file://assets/img/app-share.png',
            'res://icon.png',
            'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
            
          ],
          subject: 'Cordova Icons',
          body: 'How are you? Nice greetings from Leipzig',
          isHtml: true
        };
        
        // Send a text message using default options
        this.emailComposer.open(email);
      }
     });
  }
  regularShare(){
    // share(message, subject, file, url)
    this.socialSharing.share("Testing, sharing this from inside an app I'm building right now", 
    null, "www/assets/img/app-share.png", null); 
  }
  twitterShare(){
    this.socialSharing.shareViaTwitter("Testing, sharing this from inside an app I'm building right now", 
    "www/assets/img/app-share.png", null); 
  }
  instagramShare(){
    this.socialSharing.shareViaInstagram(`Testing, sharing this from inside an app I'm building right now`, 
    "www/assets/img/app-share.png"); 
  }
  whatsappShare(){
    this.socialSharing.shareViaWhatsApp("Testing, sharing this from inside an app I'm building right now", 
    "www/assets/img/app-share.png", null); 
  }
}
