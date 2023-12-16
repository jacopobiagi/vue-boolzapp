import { contact } from "../model/object.js";

console.log(contact);

const { createApp } = Vue;

createApp({
    data(){
        return{
            contact : contact,
            mySms : 'green-message d-flex flex-column align-items-end position-relative',
            otherSms : 'white-message d-flex',
            indiceChat : 0
        }
    },
    methods: {
        selezionaChat(num){
            return this.indiceChat = num;
        }
    } 
}).mount('#app');