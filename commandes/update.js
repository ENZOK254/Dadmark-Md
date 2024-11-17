"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "wagroup", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*ENZO BOT*\n\n👋Hello,,Click The link below to Join *ENZO BOT* WhatsApp Testing Group\n\n';
    let d = 'https://chat.whatsapp.com/IwT9XmuZKhy61cLbsM1M6H\n\nJoin the group and wait for updates from the admin,Thank you. \n\n\n> I AM ENZO KE';
    let varmess = z + d;
    var img = 'https://i.ibb.co/g78wQN8/IMG-20241116-WA0005.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");

const { zokou } = require("../framework/zokou");
zokou({ nomCom: "channel", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*ENZO BOT*\n\n👋Hello,,Click The link below to Join *ENZO BOT* WhatsApp channel\n\n';
    let d = 'https://whatsapp.com/channel/0029VadQrNI8KMqo79BiHr3l\n\nMAKE SURE YOU FOLLOW FOR MORE UPDATES,Thank you. \n\n\n> I AM ENZO';
    let varmess = z + d;
    var img = 'https://i.ibb.co/g78wQN8/IMG-20241116-WA0005.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");



const { zokou } = require("../framework/zokou");
zokou({ nomCom: "repo", reaction: "♻️", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '👋Hello,I am *ENZO BOT* developed by enzo🍂\n*FORK AND STAR MY REPO FOR COURAGE*\n\n';
    let d = '★FORKS : 241\n★STARS : 456\n★RELEASED : 15.07.24\n★REPO:https://github.com/ENZOK254/ENZO-V2\n★DEVELOPER : ENZO KE\n╚═══════════════╝';
    let varmess = z + d;
    var img = 'https://i.ibb.co/g78wQN8/IMG-20241116-WA0005.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
