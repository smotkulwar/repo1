import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigateToVfPage extends NavigationMixin(LightningElement) {
    navigateToVfPageMethod(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/apex/sam'
            }
            }).then(generatedUrl=>{
                console.log(generatedUrl)
                window.open(generatedUrl)
            })
        }
    }
