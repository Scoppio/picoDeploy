import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SettingsProvider } from '../../../providers/settings/settings';

// Settings Modal
// How to: https://github.com/PaulHalliday/Ionic-3-Modal-Example/tree/master/src/pages
@IonicPage()
@Component({
  templateUrl: 'settings.html',
  providers: [SettingsProvider]
})
export class SettingsModal {

  isOpen: boolean

 constructor(private params: NavParams, private view: ViewController, public settingsProvider: SettingsProvider) {
 }

 // Function on sound click
 soundChange() {
   (<any>window).Module.pico8ToggleSound();
   this.settingsProvider.save();
 }

 closeModal() {
    this.view.dismiss();
    (<any>window).Module.pico8SetPaused(false);
    if(this.params.get('onClose')) {
      this.params.get('onClose')();
    }
  }
}
