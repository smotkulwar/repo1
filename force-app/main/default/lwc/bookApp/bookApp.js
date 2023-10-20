import { LightningElement } from 'lwc';
const book_url='https://www.googleapis.com/books/v1/volumes?q='
export default class BookApp extends LightningElement {
    query = 'Man'
    books
    connectedCallback(){
        this.fetchBookData()
    }
    fetchBookData(){
        fetch(book_url+this.query)
        .then(response=> response.json())
        .then(data=>{
            console.log(data)
            this.books= data
        })
        .catch(error=>console.error(error))
    }
}