import { contact } from "../model/object.js";

console.log(contact);

const { createApp } = Vue;

createApp({
    data(){
        return{
            contact : contact
        }
    },
    methods: {
        
    } 
}).mount('#app');