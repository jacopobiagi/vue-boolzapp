import { contact } from "../model/object.js";

const { createApp } = Vue;

createApp({
    data(){
        return{
            contact : contact,
            srContact: contact,
            mySms : 'green-message d-flex flex-column align-items-end position-relative',
            otherSms : 'white-message d-flex',
            indiceChat : 0,
            myMessage : "",
            srcMessage: ""
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

            if(this.myMessage){
                
                this.contact[contatto].messages.push(myText);

                setTimeout(() => {
                    this.contact[contatto].messages.push(contactText);
                }, 1000);
            }
            
            

            this.myMessage = "";
        },

        selContact(){
            this.srContact = this.contact.filter(contactItem => contactItem.name.toLowerCase().includes(this.srcMessage.toLowerCase()));
        }
        
    } 
}).mount('#app');