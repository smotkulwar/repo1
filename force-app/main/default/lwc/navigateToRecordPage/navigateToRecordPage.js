import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {
    handleRecordPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId :'0031m00000VyCFAAA3',
                objectApiName:'Contact',
                actionName:'edit'
                
            }
        })
    }
}