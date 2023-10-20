import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigateToObjectPage extends NavigationMixin(LightningElement){
    handleClick(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            }
        })
    }
    handleObjectWithDefaultValues(){
        const defaultValue = encodeDefaultFieldValues({
            FirstName: 'sumeet',
            LastName: 'M',
            LeadSource:'other'

        })
       
            this[NavigationMixin.Navigate]({
                type:'standard__objectPage',
                attributes:{
                    objectApiName:'Contact',
                    actionName:'new',
                    
                },
                state:{
                    defaultFieldValues: defaultValue
                }
            })
  
    }
    handleListView(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Account',
                actionName:'list'
            },
            state:{
                filterName:'Recent'
            }
        })
    }

    handleFile(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'ContentDocument',
                actionName:'home'
            }
        })
    }
    
}