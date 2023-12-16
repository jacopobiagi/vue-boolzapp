import { contact } from "../model/object.js";

console.log(contact);

const { createApp } = Vue;

createApp({
    data(){
        return{
            contact : contact,
            mySms : 'green-message d-flex flex-column align-items-end position-relative',
            otherSms : 'white-message d-flex',
            indiceChat : 0,
            myMessage : ""
        }
    },
    methods: {
        selezionaChat(num){

            this.myMessage = ""; 
            return this.indiceChat = num;  
        },

        invio(contatto){
            let myText = {
                message: this.myMessage,
                status: 'sent'
            }

            let contactText = {
                message: 'ok',
                status: 'received'
            }

            this.contact[contatto].messages.push(myText);

            setTimeout(() => {
                this.contact[contatto].messages.push(contactText);
            }, 1000);
            

            this.myMessage = "";
        }
    } 
}).mount('#app');