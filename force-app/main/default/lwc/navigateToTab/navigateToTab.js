import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigateToTab extends NavigationMixin(LightningElement) {
    navigateToTabHandle(){
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                apiName:'wire_service'
            }
        })
    }
 
}