import { LightningElement } from 'lwc';
import getRandomCat from '@salesforce/apex/getRandomCatImages.getRandomCat';
export default class GetRandomImageRest extends LightningElement {
    imageURL
    connectedCallback(){
        getRandomCat({}).then(response=>{
            console.log(response)
            var parseData = JSON.parse(response)
            this.imageURL = parseData[0].url
            });
    }
   
}