import { LightningElement } from 'lwc';
import { NavigationMixin} from 'lightning/navigation';

export default class NavigateToRecordRelationshipPage extends NavigationMixin( LightningElement ) {
    navigateHandler(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordRelationshipPage',
            attributes:{
                recordId:'0011m00000m2G83AAE',
                objectApiName:'Account',
                relationshipApiName:'Contacts',
                actionName:'view'
            }
        })
    }
}