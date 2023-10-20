import { LightningElement } from 'lwc';
import AlarmClockAssets from '@salesforce/resourceUrl/AlarmClockAssets';
export default class AlarmClockApp extends LightningElement {
    imageClock = AlarmClockAssets+'/AlarmClockAssets/clock.png'
    currentTime=''
    hours = []
    minutes = []
    seconds =[]
    meridian = ["AM","PM"]
    selectedhours 
    selectedminutes 
    selectedmeridian 
    alarmTime
    isAlarmSet = false
    get isFieldNotSelected(){
        return !(this.selectedhours && this.selectedminutes && this.selectedmeridian)
    }
connectedCallback(){
    this.createHours()
    this.createMinutes()
    this.createSeconds()
    this.currentTimeHandler()
}
createHours(){
    for(let i=1;i<=12;i++){
        let val = i<10 ? "0"+i : i
        this.hours.push(val)
    }
    
}
createMinutes(){
    for(let i=1;i<=60;i++){
        let val = i<10 ? "0"+i : i
        this.minutes.push(val)
    }
    
}
createSeconds(){
    for(let i=1;i<=60;i++){
        let val = i<10 ? "0"+i : i
        this.seconds.push(val)
    }
    
}
currentTimeHandler(){
    setInterval(()=>{
        let datetime = new Date()
    let hour = datetime.getHours()
    let min = datetime.getMinutes()
    let sec = datetime.getSeconds()
    let ampm = 'am'
    if(hour==0){
        hour=12
    }else if(hour>=12){
        hour = hour-12
        ampm='pm'
    }
    hour = hour<10 ? "0"+hour:hour
    min=min<10 ? "0"+min:min
    sec=sec<10 ? "0"+sec:sec
    this.currentTime = `${hour}:${min}:${sec} ${ampm}`

    },1000)
    if(this.alarmTime === `${hour}:${min} ${ampm}`){
        console.log('alarm Triggered')
    }
    // console.log(this.currentTime)
 
}
   optionhandler(event){
    const {label,value} =event.detail
    if(label==="Hour(s)"){
        this.selectedhours= value
    }
    else if(label==="Minute(s)"){
        this.selectedminutes= value
}
else if(label==="AM/PM"){
    this.selectedmeridian= value
}
else{}
console.log("this.selectedHours",this.selectedhours)
console.log("this.selectedMinutes",this.selectedminutes)
console.log("this.meridian",this.selectedmeridian)

   }
   setAlarmHandler(){
    this.alarmTime = `${this.selectedhours}:${this.selectedminutes} ${this.selectedmeridian}`
    this.isAlarmSet=true

   }

}