const {
    WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const ggs = require('google-it')
const request = require('request');
const crypto = require('crypto')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');

// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp');

const { downloadMenu, infoMenu, gameMenu, groupMenu, funMenu, wibuMenu, ownerMenu, stickerMenu, otherMenu, rulesBot } = require('./message/help.js')
const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { simih } = require('./lib/functionss')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythd } = require('./lib/ytdl')
const premium = require("./lib/premium");
const afk = require("./lib/afk");
const level = require("./lib/level");
const atm = require("./lib/atm");

const _sewa = require("./lib/sewa");

var kuis = false
hit_today = []
ky_ttt = []
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game");
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]

join = 'Selamat datang'
leave = 'Selamat tinggal'
const simple = require('./lib/simple.js')
let fakeimage = fs.readFileSync("./media/wpmobile.png")
let errorImg = 'https://i.ibb.co/GR4y4Mq/b3ec6b1bd4c4.jpg'
let setting = JSON.parse(fs.readFileSync('./setting.json'))
banChats = true;
owner = setting.owner
gamewaktu = setting.gamewaktu


// Database
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json'))

let _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let register = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let nsfw = JSON.parse(fs.readFileSync('./lib/nsfw.json'))
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'));
let _update = JSON.parse(fs.readFileSync('./database/bot/update.json'))
let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))
let adm = JSON.parse(fs.readFileSync('./database/user/admin.json'))
let ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))

// GAME
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let family100 = [];

// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}



const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}


module.exports = shino = async (shino, shin) => {
	try {
        if (!shin.hasNewMessage) return
        shin = shin.messages.all()[0]
		if (!shin.message) return
		if (shin.key && shin.key.remoteJid == 'status@broadcast') return
		if (shin.key.id.startsWith('3EB0') && shin.key.id.length === 12) return
		const { Functions }= require('./lib/functions.js');
       global.ky_ttt
		global.blocked
		shin.message = (Object.keys(shin.message)[0] === 'ephemeralMessage') ? shin.message.ephemeralMessage.message : shin.message
        const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const content = JSON.stringify(shin.message)
		const from = shin.key.remoteJid
		const type = Object.keys(shin.message)[0]        
        const cmd = (type === 'conversation' && shin.message.conversation) ? shin.message.conversation : (type == 'imageMessage') && shin.message.imageMessage.caption ? shin.message.imageMessage.caption : (type == 'videoMessage') && shin.message.videoMessage.caption ? shin.message.videoMessage.caption : (type == 'extendedTextMessage') && shin.message.extendedTextMessage.text ? shin.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
    const prefix = '!'
  
			
          body = (type === 'conversation' && shin.message.conversation.startsWith(prefix)) ? shin.message.conversation : (type == 'imageMessage') && shin.message[type].caption.startsWith(prefix) ? shin.message[type].caption : (type == 'videoMessage') && shin.message[type].caption.startsWith(prefix) ? shin.message[type].caption : (type == 'extendedTextMessage') && shin.message[type].text.startsWith(prefix) ? shin.message[type].text : (type == 'listResponseMessage') && shin.message[type].singleSelectReply.selectedRowId ? shin.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && shin.message[type].selectedButtonId ? shin.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(shin.message[type].fileSha256.toString('base64')) !== null && getCmd(shin.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(shin.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? shin.message.conversation : (type === 'extendedTextMessage') ? shin.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
       budy = (type === 'conversation') ? shin.message.conversation : (type === 'extendedTextMessage') ? shin.message.extendedTextMessage.text : ''
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')
const Bfake = fs.readFileSync ('./media/image/fake.jpeg','base64')
  
        const botNumber = shino.user.jid
        const ownerNumber = setting.ownerNumber
		const ownerName = setting.ownerName
		const botName = setting.botName
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? shin.participant : shin.key.remoteJid
		let senderr = shin.key.fromMe ? shino.user.jid : shin.key.remoteJid.endsWith('@g.us') ? shin.participant : shin.key.remoteJid
		const totalchat = await shino.chats.all()
		
		const groupMetadata = isGroup ? await shino.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = shin.key.fromMe ? shino.user.jid : shino.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = shin.key.fromMe ? shino.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && shin.message.extendedTextMessage.contextInfo != null ? shin.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && shin.message.extendedTextMessage.contextInfo != null ? shin.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        const isOwner = ownerNumber.includes(senderr)
        const isRegister = register.includes(sender)
        const isPremium = premium.checkPremiumUser(sender, _premium)
        const isBanned = ban.includes(sender)
        const isAdmin = adm.includes(sender)
        const isSewa = _sewa.checkSewaGroup(from, sewa)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
const isNsfw = isGroup ? nsfw.includes(from) : false
      const isSimi = isGroup ? samih.includes(from) : false
       let d = new Date
       let locale = 'id'
       let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
     let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
        let week = d.toLocaleDateString(locale, { weekday: 'long' })
			let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
			let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })



        // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? shin.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? shin.message.listResponseMessage.title : ''

        const gcount = setting.gcount
        
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = shino.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","listType": "SINGLE_SELECT","sections": list}}, {})
            return shino.relayWAMessage(po, {waitForAck: true})
        }
        
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const reply = (teks) => {
	      shino.sendMessage(from, teks, text, {quoted:shin, thumbnail: fakeimage})
        }
        const sendMess = (hehe, teks) => {
           shino.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? shino.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : shino.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, quoted: shin, contextInfo: { "mentionedJid": memberr } })
        }
        const sendText = (from, text) => {
           shino.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return shino.sendMessage(from, teks, text, {quoted: shin, thumbnail: fs.readFileSync('./media/wpmobile.png')})
        }
        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/Nakano.jpg')
        }}}
       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       shino.groupRemove(from, [i])
        }
        }
       const kickMember = async(id, target = []) => {
           let group = await shino.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = shino.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await shino.groupRemove(to, [i])
        } else {
           await shino.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}
       const add = function(from, orangnya){
	       shino.groupAdd(from, orangnya)
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       shino.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: shin})
}
      const hideTag = async function(from, text){
	       let anu = await shino.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       shino.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/Nakano.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           shino.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:shin})
           fs.unlinkSync(asw)
});
});
});
}

const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }
        
        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        ////
        
        ///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await shino.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
shino.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await shino.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
shino.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
    const isRegistered = checkRegisteredUser(sender)
/////Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      shino.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
    
////
  /// 
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           shino.sendMessage(to, media, type, {quoted: shin, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       shino.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       shino.sendMessage(from, hasil, type, options).catch(e => {
	       shino.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
      const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await shino.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = shino.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await shino.groupMakeAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
var hayuk0 = '[NOT VERIFIED]'
			if (isRegistered) {
			hayuk0 = '[√ VERIFIED]'
			}
}
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            }) 
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
             
        
      const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await shino.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = shino.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await shino.groupDemoteAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
}
          let authorname = shino.contacts[from] != undefined ? shino.contacts[from].vname || shino.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}
const isImage = (type === 'imageMessage')
     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam'
}
         const levelRole = level.getLevelingLevel(sender, _level)
        var role = 'Warrior III'
        if (levelRole <= 5) {
            role = 'Warrior II'
        } else if (levelRole <= 10) {
            role = 'Warrior I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Master III'
        } else if (levelRole <= 35) {
            role = 'Master II'
        } else if (levelRole <= 40) {
            role = 'Master I'
        } else if (levelRole <= 45) {
            role = 'GrandMaster III'
        } else if (levelRole <= 50) {
            role = 'GrandMaster II'
        } else if (levelRole <= 55) {
            role = 'GrandMaster I'
        } else if (levelRole <= 60) {
            role = 'Epic III'
        } else if (levelRole <= 65) {
            role = 'Epic II'
        } else if (levelRole <= 70) {
            role = 'Epic I'
        } else if (levelRole <= 75) {
            role = 'Legend III'
        } else if (levelRole <= 80) {
            role = 'Legend II'
        } else if (levelRole <= 85) {
            role = 'Legend I'
        } else if (levelRole <= 90) {
            role = 'Mythic'
        } else if (levelRole <= 95) {
            role = 'Mythical Glory'
        } else if (levelRole >= 100) {
            role = 'Immortal'
        } 
        // autoread
        shino.chatRead(from, "read")

       // FUNCTION LEVELING
        if (isGroup && !shin.key.fromMe && !level.isGained(sender)) {
       try {
        level.addCooldown(sender)
        const checkATM = atm.checkATMuser(sender, _uang)
        if (checkATM === undefined) atm.addATM(sender, _uang)
        const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
        atm.addKoinUser(sender, uangsaku, _uang)
        const currentLevel = level.getLevelingLevel(sender, _level)
        const amountXp = Math.floor(Math.random() * (437 - 49 + 39) + 98)
        const requiredXp = 1200 * Math.pow(currentLevel, 2) + 2912 * currentLevel + 1988
        level.addLevelingXp(sender, amountXp, _level)
        if (requiredXp <= level.getLevelingXp(sender, _level)) {
        level.addLevelingLevel(sender, 1, _level)
        const userLevel = level.getLevelingLevel(sender, _level)
        const fetchXp = 1200 * Math.pow(userLevel, 2) + 2912 * userLevel + 1988
        reply(`*「 LEVEL UP 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉\n *Note:* mohon maaf jika level kalian kereset, sedang ada error di database kami`)
 } 
        } catch (err) {
        console.error(err)
 }
 }
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const { quotedMsg, isQuotedMsg, isBaileys } = shin
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isVideo = (type === 'videoMessage')
        const isSticker = (type == 'stickerMessage')
        const isListMsg = (type == 'listResponseMessage')
       const isQuotedemage = isQuotedMsg ? (quotedMsg.type === 'imageMessage') ? true : false : false
        const isQuotediudio = isQuotedMsg ? (quotedMsg.type === 'audioMessage') ? true : false : false
        const isQuotedoideo = isQuotedMsg ? (quotedMsg.type === 'videoMessage') ? true : false : false
        const isQuotedpticker = isQuotedMsg ? (quotedMsg.type === 'stickerMessage') ? true : false : false


      // Anti link
      const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                shino.groupRemove(from, [sender])
            }
        }
        
        // Sewa
             _sewa.expiredCheck(shino, sewa)
             
        // MUTE
             if (isMuted){
             if (!isGroupAdmins && !isPremium) return
 }
            
              const getWin = (userId) => {
              let position = false
              Object.keys(_win).forEach((i) => {
              if (_win[i].jid === userId) {
              position = i
       }
        })
              if (position !== false) {
              return _win[position].win
            }
        }
      // GAME 
             game.cekWaktuFam(shino, family100)
          
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var http = randomNomor(100)
                    atm.addKoinUser(sender, http, _uang)
                    await reply(`*_🎮 Tebak Gambar  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${http} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                }
            }
        if (game.isfam(from, family100)) {
            var anjuy = game.getjawaban100(from, family100)
            for (let i of anjuy){
                if (budy.toLowerCase().includes(i)){
                    var htgmp = Math.floor(Math.random() * 20) + 1
                    atm.addKoinUser(sender, htgmp, _uang)
                    await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
                    var anug = anjuy.indexOf(i)
                    anjuy.splice(anug, 1)
                }
            }
            if (anjuy.length < 1){
                shino.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
                family100.splice(game.getfamposi(from, family100), 1)
            }
       }
            if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmu = randomNomor(100)
                    atm.addKoinUser(sender, htgmu, _uang)
                    await reply(`*_🎮 Tebak Anime 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`)
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                }
            }
            if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklagu[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpl = randomNomor(100)
                    atm.addKoinUser(sender, htpl, _uang)
                    await reply(`*_🎮 Tebak Lagu 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpl} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`)
                    delete tebaklagu[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
                }
            }
            if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaktebakan[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpu = randomNomor(100)
                    atm.addKoinUser(sender, htpu, _uang)
                    await reply(`*_🎮 Tebak Tebakan 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`)
                    delete tebaktebakan[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))                    
                }
            }
            if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = kuismath[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htcc = randomNomor(100)
                    atm.addKoinUser(sender, htcc, _uang)
                    await reply(`*_🎮 Kuis Matematika  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}kuismath*`)
                    delete kuismath[sender.split('@')[0]]
                    fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
                }
            }
          if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = asahotak[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgm = randomNomor(100)
                    atm.addKoinUser(sender, htgm, _uang)
                    await reply(`*_🎮 Asah Otak  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
                    delete asahotak[sender.split('@')[0]]
                    fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
                }
            }
          if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmi = randomNomor(100)
                    atm.addKoinUser(sender, htgmi, _uang)
                    await reply(`*_🎮 Caklontong  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                }
            }
          if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakjenaka[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmuu = randomNomor(100)
                    atm.addKoinUser(sender, htgmuu, _uang)
                    await reply(`*_🎮 Tebak Jenaka  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
                    delete tebakjenaka[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
                }
            }
            if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmii = randomNomor(100)
                    atm.addKoinUser(sender, htgmii, _uang)
                    await reply(`*_🎮 Tebak Lirik 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
                    delete tebaklirik[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                }
            }
            if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakimia[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmcc = randomNomor(100)
                    atm.addKoinUser(sender, htgmcc, _uang)
                    await reply(`*_🎮 Tebak Kimia 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
                    delete tebakimia[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
                }
            }
          if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaksiapaaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmk = randomNomor(100)
                    atm.addKoinUser(sender, htgmk, _uang)
                    await reply(`*_🎮 Tebak Siapakah Aku  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`)
                    delete tebaksiapaaku[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
                }
            }
          if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakbendera[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var html = randomNomor(100)
                    atm.addKoinUser(sender, html, _uang)
                    await reply(`*_🎮 Tebak Bendera  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
                    delete tebakbendera[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
                }
            }
          if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmp = randomNomor(100)
                    atm.addKoinUser(sender, htmp, _uang)
                    await reply(`*_🎮 Susun Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                }
            }
          if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmu = randomNomor(100)
                    atm.addKoinUser(sender, htmu, _uang)
                    await reply(`*_🎮 Tebak Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
                    delete tebakata[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
                }
            }
            const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					shino.sendMessage(to, media, sticker)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
			
			//////
			let Levelnye = level.getLevelingLevel(sender, _level)
              let Xpluu = level.getLevelingXp(sender, _level)
              let requiredXplu = 1200 * Math.pow(Levelnye, 2) + 2912 * Levelnye + 1988
			ind = {
				wait: `⌛ Sedang di Prosess ⌛`,
				success: `✔️ Berhasil ✔️`,
				levelnol: `*LEVEL KAKAK KOK MASIH * 0 >_<`,
				me: `「 *REMOTE* 」Fitur Ini khusus Nomor Yang Di Scan.`,
				error: {
					stick: `❌ Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌`,
					Iv: `❌ Link tidak valid ❌`
				},
				only: {
					}
			}
			
			/////
let ikyads = await getBuffer(`https://telegra.ph/file/490b3820f53e78a98580a.jpg`)
fakelink = (tekslink) => { 
	return {"externalAdReply": { "title": tekslink, "thumbnail": ikyads, "sourceUrl": "https://wa.me/qr/UCVMNO2VLMDBK1" }}
}
// AFK
	if (isGroup) {
		if (!shin.key.fromMe && banChats === false) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
		}
	    }
	
	// Auto Read
        shino.chatRead(from, "read")
        
        
       // CMD
        if (isCmd && !isGroup)
		    atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)
            atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
            
        if (budy.toLowerCase() === `8473`){
		if (isRegister) return 
		    register.push(sender)
		    fs.writeFileSync('./database/user/registered.json', JSON.stringify(register))
		    teks = `Verification success\n\nPlease send *!menu* to view menu`
		    atm.addKoinUser(sender, randomNomor(100), _uang)
		    shino.sendMessage(from, teks, text, {quoted: shin })
}          if (!shin.key.fromMe && banChats === false) return
	              
           
switch (command) {
	case '%':
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Kudeta')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   shino.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                shino.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleep(1000)
                shino.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                shino.sendMessage(from, 'Succes Hacked', text, {quoted: shin})
					break
case 'sendbug':
                
                if (args.length < 2) return reply(`Penggunaan ${command} idgroup`)
                shino.sendBugGC(args[1], WA_DEFAULT_EPHEMERAL)
                shino.sendBugGC(args[1], 0)
                shino.sendBugGC(args[1], 999)
                textImg('done owner')
                break
        case 'owner':
        case 'creator':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
               sendKontak(from, `${owner}`, `${ownerName}`, 'Sibukk!!')
               await sleep(1000)
               txtt =`Hai Kak ${pushname}\nItu Ownerku, Mau tau soal apa ya?`

               buttons = [{buttonId: '!pcct',buttonText:{displayText: 'Private chat'},type:1},{buttonId:'!groupshino',buttonText:{displayText:'Group'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'Jangan Sungkan Chat Ya Kak',
               buttons: buttons,
               headerType: 1
}

               prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{})
               shino.relayWAMessage(prep)
               break      
               case 'pcct':
               reply('wa.me/62859194143712')
               break
      case 'groupshino':
      case 'groupserina':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
      reply ('https://chat.whatsapp.com/IfJzQDoD9DO9CpDe9bXqSy')
      break
               case 'spamcall':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (args.length > 2) return reply(`Cara penggunaan : ${command} no hp`)
                if (isNaN(args[1]) && args[1].startsWith('62')) return reply(`Harus berupa angka dan pastikan tidak memasukkan kode negara, contoh: ${command} 8127668234`)
                fetchJson(`https://api.zeks.xyz/api/spamcall?apikey=${zekskey}&no=${args[1]}`)
                .then((data) => {
                    textImg(data.result.logs)
                    })
               .catch((err) => {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                }
                break
                           case 'bucinstick':
                case 'bucinsticker':{
         
                    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
                    var wifegerak = ano.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                    var isGif = wifegerakx.endsWith('.gif') ? true : false
                    if (!isGif) {
                    var ngebuff = await getBuffer(wifegerakx)
                    var media = getRandom('.png')
                    fs.writeFileSync(media, ngebuff)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									shino.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: shin})
									limitAdd(sender, limit)
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    } else {
                     var ngebuff = await getBuffer(wifegerakx)
                 	let media = `./sticker/${sender}.gif`
                    fs.writeFileSync(media, ngebuff)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(err)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									shino.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: shin})
									
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                })
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    }
                    }
                    break
            case 'spamsms':{
                if (!isPremium) return reply(`khusus premium`)
                if (args.length > 2) return reply(`Cara penggunaan : ${command} no hp`)
   
  
                try {
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${setting.lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${setting.lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${setting.lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${setting.lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${setting.lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${setting.lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${setting.lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${setting.lolkey}&nomor=${args[1]}`)
                    reply("Success")
               } catch (err) {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
               }
                }
                break
                   
       case '!':
       case '#':
       case 'z':
       case '.':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: shin})
       break
       
     
                case 'bokep': case 'bkp': case 'randombokep':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                fetchJson(`https://pastebin.com/raw/k82VJzeP`).then((data) => {
                    var bokepp = JSON.parse(JSON.stringify(data))
                    var bokep2 =  bokepp[Math.floor(Math.random() * bokepp.length)]
                    textImg(bokep2.teks)
                })
                }
                break

      
      case 'menu22':
       thu = await shino.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
       groups = shino.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = shino.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await shino.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
       menu =` 
${ucapanWaktu} Kak ${pushname} 
  
「 *Calender* 」

 Day : ${week} ${weton} 
 Date : ${date}
        
「 *Your information* 」

 *Username:* ${pushname}
 *Bio Info:* ${thu.status}
 *Premium*: ${isPremium ? 'Ya' : 'No'}
 *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}
 *Level*: ${Levelnye}
 *XP*: ${Xpluu} / ${requiredXplu}

「 *Bot Information* 」

 Speed : *${latensie.toFixed(4)} _Second_*
 Active : *${runtime(process.uptime())}*
 
 
「 *LIST MENU* 」

 groupmenu
 animemenu
 stickermenu
 ownermenu
 gamemenu
 funmenu
 downloadmenu
 infomenu
 othermenu
 18+
 nsfwanime
`

              
                

                    shino.sendMessage(from, { contentText: `${menu}`, footerText: '© Shino', buttons: [{ buttonId: `!allmenu`, buttonText: { displayText: 'ALL MENU' }, type: 1 },{ buttonId: `!me`, buttonText: { displayText: 'INFO USER' }, type: 1 },{ buttonId: `!owner`, buttonText: { displayText: ' OWNER' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ikyads, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
              break
case 'menu':
case 'help':
case 'command':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
       thu = await shino.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
       groups = shino.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = shino.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await shino.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
       menubeta =` 
${ucapanWaktu} Kak ${pushname} 
  
「 *Calendar* 」

 Day : ${week} ${weton} 
 Date : ${date}
        
「 *Your information* 」

 *Username:* ${pushname}
 *Bio Info:* ${thu.status}
 *Premium*: ${isPremium ? 'Ya' : 'No'}
 *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}
 *Level*: ${Levelnye}
 *XP*: ${Xpluu} / ${requiredXplu}

「 *Bot Information* 」

 Speed : *${latensie.toFixed(4)} _Second_*
 Active : *${runtime(process.uptime())}*
 
 
「 *LIST MENU* 」

 groupmenu
 animemenu
 stickermenu
 ownermenu
 gamemenu
 funmenu
 downloadmenu
 infomenu
 othermenu
 18+
 nsfwanime
`

              
                

                    sendButMessage(from, menubeta, `Click Button Untuk Melihat Semua Menu`, [
          {
            buttonId: `${prefix}allmenu`,
            buttonText: {
              displayText: `All Menu`,
            },
            type: 1,
          },]);
              brea
case 'nhentaisearch':
case 'nhentais':
case 'ns':
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Shin`)

query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${setting.lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = "Result : \n"
for (var x of get_result) {
ini_txt += `Id : ${x.id}\n`
ini_txt += `Title English : ${x.title_english}\n`
ini_txt += `Title Japanese : ${x.title_japanese}\n`
ini_txt += `Native : ${x.title_native}\n`
ini_txt += `Upload : ${x.date_upload}\n`
ini_txt += `Page : ${x.page}\n`
ini_txt += `Favourite : ${x.favourite}\n\n`
}
reply(ini_txt)
break

case 'nsfw':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (!isGroupAdmins) return reply(mess.only.admin)
               if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply('pilih enable atau disable')
				if ((args[0]) === 'enable') {
				if (isNsfw) return reply('*Fitur nsfw sudah aktif sebelum nya*')
				nsfw.push(from)
				fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
				reply('Sukses mengaktifkan fitur nsfw')
				} else if ((args[0]) === 'disable') {
				nsfw.splice(from, 1)
				fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
				reply('Sukes menonaktifkan fitur nsfw')
				} else {
				reply(ind.satukos())
				}
				break 
case 'allmenu':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
groups = shino.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = shino.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              
           uptime = process.uptime();
              timestamp = speed();
              totalChat = await shino.chats.all()
              latensie = speed() - timestamp
              total = math(`${groups.length}*${privat.length}`)
  
kntrl = `┏─⬡「𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔」
├⊱ *Hari* : ${week} ${weton} 
├⊱ *Group Chats* : ${groups.length}
├⊱ *Private Chats* : ${privat.length}
├⊱ *Total Chats* : ${totalChat.length}
├⊱ *Speed* : *${latensie.toFixed(4)} _Second_* _Second_
╰──────────────╯
┏═══════════════
├⊱  _!donate_
├⊱  _!shino_
├⊱  _!bugreport_
├⊱  _!ping_
├⊱  _!rules_
├⊱  _!botstat_  
╰═══════════════
=_=_=_=_=_=_=_=_=_=_=_=_=
*_Group Menu_*

  !groupsetting
  !afk *[Alasan]*
  !ceksewa
  !kickall
  !infogroup
  !promote
  !demote
  !here
  !taggall *[Teks]*
  !leave
  !kick *[Tag/Reply]*
  !add *[Nomor]*
  !setgroupname *[Teks]*
  !setppgroup
  !setdesk *[Teks]*
  !sider *[Reply Bot]
  !nsfw
  !getpic

*_Anime Menu_*

  ${prefix}loli
  ${prefix}manga
  ${prefix}anime 
  ${prefix}lolivideo
  ${prefix}husbu
  ${prefix}waifu
  ${prefix}milf
  ${prefix}neko
  ${prefix}kanna
  ${prefix}sagiri
  ${prefix}hentai
  ${prefix}cosplay
  ${prefix}wallnime
  ${prefix}kusonime
  ${prefix}megumin
  ${prefix}otakudesu
  ${prefix}doujindesu
  ${prefix}storyanime
  ${prefix}nakanomiku
  ${prefix}nakanoshino
  ${prefix}nakanoitsuki
  ${prefix}otakuongoing
  ${prefix}nhentai *[code]*
  ${prefix}nekopoi *[link]*
  ${prefix}nekopoisearch

*_Sticker Menu_*

  ${prefix}dadu
  ${prefix}bucinstick
  ${prefix}toimg
  ${prefix}patrick
  ${prefix}ttg *[teks]*
  ${prefix}attp *[teks]*
  ${prefix}stickeranime
  ${prefix}semoji *[emoji]*
  ${prefix}sticker *[reply foto/video]*
  ${prefix}smeme *[teks|teks]*
  ${prefix}swm *[pack|author]*
  ${prefix}take *[pack|author]* 
  ${prefix}tovideo *[reply sgif]*

*_Owner Menu_*

  ${prefix}bc *teks*
  ${prefix}term
  ${prefix}eval
  ${prefix}reset
  ${prefix}clearall
  ${prefix}leaveall
  ${prefix}leaveall
  ${prefix}join *[link gc]*
  ${prefix}shutdown
  ${prefix}getquoted
  ${prefix}addupdate *[fiturnya]*
  ${prefix}exif *[nama|author]*
  ${prefix}sewa add/del *[waktunya]*
  ${prefix}premium add @tag|nomor
  ${prefix}premium del @tag|nomor

*_Fun Menu_*

  ${prefix}mining
  ${prefix}cekwatak
  ${prefix}wangy [nama]
  ${prefix}citacita
  ${prefix}toxic
  ${prefix}truth
  ${prefix}dare
  ${prefix}apakah
  ${prefix}bisakah
  ${prefix}kapankah
  ${prefix}rate

*_Download Menu_*

  ${prefix}fb 
  ${prefix}igdl 
  ${prefix}igdl2 
  ${prefix}twitter 
  ${prefix}tiktok 
  ${prefix}play 
  ${prefix}ythd 
  ${prefix}ytmp3 
  ${prefix}ytmp4 
  ${prefix}soundcloud 
  ${prefix}tiktoknowm 
  ${prefix}tiktokaudio
  ${prefix}mediafire 
  ${prefix}nhentaipdf *code*

*_Info Menu_*

  ${prefix}update
  ${prefix}level
  ${prefix}profile
  ${prefix}waktu
  ${prefix}sewabot
  ${prefix}listsewa
  ${prefix}owner
  ${prefix}runtime
  ${prefix}donasi
  ${prefix}leaderboard
  ${prefix}cekpremium
  ${prefix}listpremium

*_Other Menu_*

  ${prefix}brainly *query*
  ${prefix}shopee *product*
  ${prefix}playstore *query*
  ${prefix}ssweb *query*
  ${prefix}google *query*
  ${prefix}image *query*
  ${prefix}pinterest *query*
  ${prefix}nulis *teks*
  ${prefix}iguser *ussername*
  ${prefix}igstalk *username*
  ${prefix}githubstalk *username*
  ${prefix}tiktokstalk *ussername*
  ${prefix}img2url *reply foto*
  ${prefix}ytsearch *query*

*_Nsfw Menu_*

  !chiisaihentai
  !trap
  !blowjob
  !yaoi
  !ecchi
  !hentai
  !ahegao
  !hololewd
  !sideoppai
  !animefeets
  !animebooty
  !animethighss
  !hentaiparadise
  !animearmpits
  !hentaifemdom
  !lewdanimegirls
  !biganimetiddies
  !animebellybutton
  !hentai4everyone
  !cum
  !futanari
  !lewd
  !pussy

=_=_=_=_=_=_=_=_=_=_=_=_=
`
sendButMessage(from, kntrl, `© Shino`, [
          {
            buttonId: `${prefix}me`,
            buttonText: {
              displayText: `Info User`,
            },
            type: 1,
          },]);
              break

break


case 'f':
case 'lock':
 ikymemek = {
  "key": {
    "fromMe": false,
    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
  },
  "message": {
    "viewOnceMessage": {
      "message": {
        "imageMessage": {
          "url": "https://mmg.whatsapp.net/d/f/AjD3dQIM5hW3UkDfnnkice-eMcsMJJALEcgD9HnDGZEp.enc",
          "mimetype": "image/jpeg",
          "fileSha256": "aR3vWUsV9VZUiR+agYok8oM4UHiuhqEShMpQ6SgY9WM=",
          "fileLength": "675",
          "height": 41,
          "width": 52,
          "mediaKey": "6RDG8T+jOb0RfleWzLTclsaVn0EGRA/v78dnS+Y4S+o=",
          "fileEncSha256": "idNxqNtCaHRxuN+AX0uakPrBuiyvx84IksPUYMYgs7Y=",
          "directPath": "/v/t62.7118-24/13810909_985978368802545_7608967834334288292_n.enc?ccb=11-4&oh=359274a24041d97e91597ad1fb40e784&oe=61595B99",
          "mediaKeyTimestamp": "1630826390",
          "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACkANAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApgAAAAAAAAAAAf/EABQQAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQEAAT8AK//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQIBAT8AT//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQMBAT8AT//Z",
          "viewOnce": true
        }
      }
    }
  },
  "messageTimestamp": "1630826389",
  "status": "SERVER_ACK",
  "mediaData": {
    "localPath": "/data/user/0/com.gbwhatsapp/files/ViewOnce/IMG-20210905-WA0047.jpg"
  }
}
shino.sendMessage(from, { "degreesLatitude": '', "degreesLongitude": '', "jpegThumbnail": fakeimage}, MessageType.location, {quoted: ikymemek})
           break
   case 'kalender':
              reply(`
Day ${week} ${weton} 
Date : ${date}
`)
break
              
case 'textpro':

wibu = `
「 Text Pro Me 」

 ${prefix}blackpink text
 ${prefix}neon text
 ${prefix}greenneon text
 ${prefix}advanceglow text
 ${prefix}futureneon text
 ${prefix}sandwriting text
 ${prefix}sandsummer text
 ${prefix}sandengraved text
 ${prefix}metaldark text
 ${prefix}neonlight text
 ${prefix}holographic text
 ${prefix}text1917 text
 ${prefix}minion text
 ${prefix}deluxesilver text
 ${prefix}newyearcard text
 ${prefix}bloodfrosted text
 ${prefix}halloween text
 ${prefix}jokerlogo text
 ${prefix}fireworksparkle text
 ${prefix}natureleaves text
 ${prefix}bokeh text
 ${prefix}toxic text
 ${prefix}strawberry text
 ${prefix}box3d text
 ${prefix}roadwarning text
 ${prefix}breakwall text
 ${prefix}icecold text
 ${prefix}luxury text
 ${prefix}cloud text
 ${prefix}summersand text
 ${prefix}horrorblood text
 ${prefix}thunder text
 ${prefix}pornhub text1 text2
 ${prefix}glitch text1 text2
 ${prefix}avenger text1 text2
 ${prefix}space text1 text2
 ${prefix}ninjalogo text1 text2
 ${prefix}marvelstudio text1 text2
 ${prefix}lionlogo text1 text2
 ${prefix}wolflogo text1 text2
 ${prefix}steel3d text1 text2
 ${prefix}wallgravity text1 text2
 `
sendButMessage(from, wibu, `created Shino`, [
          {
            buttonId: `!menu`,
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
break
case 'fitnah':
                 
				 
				 				
					if (!isGroup) return reply('ONLY GRUP')              
					
                 
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag&pesan&balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
				var gh = body.slice(8)
				mentioned = shin.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var target = gh.split("|")[1];
					var bot = gh.split("|")[2];
					 shino.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
case 'wibu2':
case 'nsfwanime':
case 'nsfwmenu':
             if (!isNsfw) return reply('nsfw belum aktif')
wibu = `
MENU
 chiisaihentai
 trap
 blowjob
 yaoi
 ecchi
 hentai
 ahegao
 hololewd
 sideoppai
 animefeets
 animebooty
 animethighss
 hentaiparadise
 animearmpits
 hentaifemdom
 lewdanimegirls
 biganimetiddies
 animebellybutton
 lewd
 cum
 futanari
 cum
 hentai4everyone
`
                   sendButMessage(from, wibu, `Shino`, [
          {
            buttonId: `!menu`,
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
        break;
        case 'randomimage':
case 'randomimage':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
wibu = `
MENU
 bj
 ero
 ppcp
 cum
 feet
 yuri
 trap
 lewd
 feed
 eron
 solo
 gasm
 poke
 anal
 holo
 tits
 kuni
 kiss
 erok
 smug
 baka
 solog
 feetg
 lewdk
 waifu
 pussy
 femdom
 cuddle
 hentai
 eroyuri
 cum_jpg
 blowjob
 erofeet
 holoero
 classic
 erokemo
 fox_girl
 futanari
 lewdkemo
 wallpaper
 pussy_jpg
 kemonomimi
 nsfw_avatar
 ngif
 nsfw_neko_gif
 random_hentai_gif

`
                   sendButMessage(from, wibu, `Shino`, [
          {
            buttonId: `!menu`,
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
        break;
        
        case 'photoxy':
case 'photooky':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
wibu = `
𝐏𝐇𝐎𝐓𝐎 𝐎𝐗𝐘

 shadow text
 cup text
 cup1 text
 romance text
 smoke text
 burnpaper text
 lovemessage text
 undergrass text
 love text
 coffe text
 woodheart text
 woodenboard text
 summer3d text
 wolfmetal text
 nature3d text
 underwater text
 golderrose text
 summernature text
 letterleaves text
 glowingneon text
 fallleaves text
 flamming text
 harrypotter text
 carvedwood text
 tiktok text1 text2
 arcade8bit text1 text2
 battlefield4 text1 text2
 pubg text1 text2

`
                   sendButMessage(from, wibu, `Shino`, [
          {
            buttonId: `!menu`,
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
        break;
        case 'simi':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
if (args.length < 1) return reply('Textnya mana um?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break 
					case 'simih':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break

					case 'darkjoke': 
				
				buff = await getBuffer(`http://lolhuman.herokuapp.com/api/meme/darkjoke?apikey=${setting.lolkey}`, {method: 'get'})
				buttons = [{buttonId: `!groupshino`,buttonText:{displayText: `Group Shino`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText:`;-;`,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
break
        case 'ephoto':
case 'ephotomenu':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
wibu = `
「 𝐄𝐏𝐇𝐎𝐓𝐎 360 」

 wetglass text
 multicolor3d text
 watercolor text
 luxurygold text
 galaxywallpaper text
 lighttext text
 beautifulflower text
 puppycute text
 royaltext text
 heartshaped text
 birthdaycake text
 galaxystyle text
 hologram3d text
 greenneon text
 glossychrome text
 greenbush text
 metallogo text
 noeltext text
 glittergold text
 textcake text
 starsnight text
 wooden3d text
 textbyname text
 writegalacy text
 galaxybat text
 snow3d text
 birthdayday text
 goldplaybutton text
 silverplaybutton text
 freefire text

`
                   sendButMessage(from, wibu, `Shino`, [
          {
            buttonId: `!menu`,
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
        break;
        case 'wasted':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')					
var imgbb = require('imgbb-uploader')
					if ((isMedia && !shin.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : shin
						owgi = await shino.downloadAndSaveMediaMessage(ger)
						data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/wasted?url=${data.display_url}&apikey=`)
						shino.sendMessage(from, buff, image, {quoted: shin, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}wasted`)
					}
					break
					case 'tahta':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')					
buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${q}&apikey=IkyOgiwara`)
		      buttons = [{buttonId: `!groupshino`,buttonText:{displayText: `Jangan lupa donasi☕`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Grpup Shino', imageMessage: imageMsg,
              contentText:`Jangan lupa donasi☕`,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
break
				case 'quotesmaker':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')					
buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/quote-maker?text=${q}&apikey=IkyOgiwara`)
					shino.sendMessage(from, buff, image, {thumbnail: Buffer.alloc(0), quoted: shin})
				case 'tinyurl':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')					
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tinyurl?url=${q}&apikey=IkyOgiwara`)
					shino.sendMessage(from, `${anu.result}`, text, {quoted: shin})
					break
				case 'cuttly':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')					
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cuttly?url=${q}&apikey=IkyOgiwara`)
					shino.sendMessage(from, `• Hasil: ${anu.result.hasil}\n• Dibuat Pada: ${anu.result.create_at}`, text, {quoted: shin})
					break
				case 'shorturl':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')					
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/shrturl?url=${q}&apikey=IkyOgiwara`)
					shino.sendMessage(from, `${anu.result}`, text, {quoted: shin})
					break
        case 'imagemani':
case 'imageefek':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
wibu = `
𝐈𝐌𝐀𝐆𝐄 𝐌𝐀𝐍𝐈𝐏𝐔𝐋𝐀𝐓𝐈𝐎𝐍

 ${prefix}darkjoke
 ${prefix}meme
 ${prefix}joke
 ${prefix}wasted
 ${prefix}hitler
 ${prefix}wanted
 ${prefix}greyscale
 ${prefix}trash
 ${prefix}circle
 ${prefix}blur
 ${prefix}tinyurl
 ${prefix}cuttly
 ${prefix}affect
 ${prefix}picture

`
                   sendButMessage(from, wibu, `Shino`, [
          {
            buttonId: `!menu`,
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
        break;
        
        case '18+':
        case 'porno':
case '18':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
wibu = `
MENU INI BERISI FITUR 18+
SEBELUM MELANJUTKAN PASTIKAN ANDA BERUMUR 18+
`
                   sendButMessage(from, wibu, `Shino`, [
          {
            buttonId: `!pornmenu`,
            buttonText: {
              displayText: `⬡ LANJUTAN `,
            },
            type: 1,
          },]);
        break;
        
                   // Random Text //
                  ///// LOLHUMAN API
                  case 'spam':
                    if (!shin.key.fromMe) return reply('FITUR INI KHUSUS OWNER BOT')
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argsi = arg.split("|")
				if (!argsi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argsi[1]) >= 1000000) return reply('Kebanyakan!')
				if (isNaN(argsi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argsi[1]; i++){
					shino.sendMessage(from, argsi[0], MessageType.text)
				}
				break
				

	
                  case 'picture':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
var imgbb = require('imgbb-uploader')
					if ((isMedia && !shin.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : shin
						owgi = await shino.downloadAndSaveMediaMessage(ger)
						data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/picture?url=${data.display_url}&apikey=IkyOgiwara`)
						shino.sendMessage(from, buff, image, {quoted: shin, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}picture`)
					}
					break
					case 'addrespon':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')			
				if (args.length > 1) return reply(`Penggunaan ${prefix}addrespon hai|hai juga`)
				argz = arg.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return reply(`Udah ada`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				reply(`Sukses menambahkan respon ${argz[0]}`)
				break
			case 'delrespon':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')			
				if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon hai`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`Ga ada di database`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`Sukses menghapus respon ${body.slice(11)}`)
				break
				case 'affect':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
var imgbb = require('imgbb-uploader')
					if ((isMedia && !shin.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : shin
						owgi = await shino.downloadAndSaveMediaMessage(ger)
						data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/affect?url=${data.display_url}&apikey=IkyOgiwara`)
						shino.sendMessage(from, buff, image, {quoted: shin, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}affect`)
					}
					break
				case 'invert':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
var imgbb = require('imgbb-uploader')
					if ((isMedia && !shin.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : shin
						owgi = await shino.downloadAndSaveMediaMessage(ger)
						data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/invert?url=${data.display_url}&apikey=IkyOgiwara`)
						shino.sendMessage(from, buff, image, {quoted: shin, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}invert`)
					}
					break
				case 'firework':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
var imgbb = require('imgbb-uploader')
					if ((isMedia && !shin.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : shin
						owgi = await shino.downloadAndSaveMediaMessage(ger)
						data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
						anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/img/firework?url=${data.display_url}&apikey=IkyOgiwara`)
						buff = await getBuffer(anu.result.url)
						shino.sendMessage(from, buff, video, {quoted: shin, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}firework`)
					}
					break
				case 'sepia':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !shin.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : shin
						owgi = await shino.downloadAndSaveMediaMessage(ger)
						data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/sepia?url=${data.display_url}&apikey=IkyOgiwara`)
						shino.sendMessage(from, buff, image, {quoted: shin, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}sepia`)
					}
					break
			case 'blur':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
var imgbb = require('imgbb-uploader')
					if ((isMedia && !shin.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : shin
						owgi = await shino.downloadAndSaveMediaMessage(ger)
						data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/blur?url=${data.display_url}&level=20&apikey=IkyOgiwara`)
						shino.sendMessage(from, buff, image, {quoted: shin, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}blur`)
					}
					break
				case 'circle':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
var imgbb = require('imgbb-uploader')
					if ((isMedia && !shin.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : shin
						owgi = await shino.downloadAndSaveMediaMessage(ger)
						data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/circle?url=${data.display_url}&apikey=IkyOgiwara`)
						shino.sendMessage(from, buff, image, {quoted: shin, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}circle`)
					}
					break
                  case 'trash':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
var imgbb = require('imgbb-uploader')
					if ((isMedia && !shin.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : shin
						owgi = await shino.downloadAndSaveMediaMessage(ger)
						data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/trash?url=${data.display_url}&apikey=IkyOgiwara`)
						shino.sendMessage(from, buff, image, {quoted: shin, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}trash`)
					}
					break
					case 'wiki':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/wiki?kata=${q}&apikey=IkyOgiwara`)
					shino.sendMessage(from, `「 RESULT FOUND 」\n• Hasil Pencarian Dari: ${anu.result.from}\n• Hasil: ${anu.hasil}`, text, {quoted: shin})
					break
                  case 'wanted':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
var imgbb = require('imgbb-uploader')
					if ((isMedia && !shin.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : shin
						owgi = await shino.downloadAndSaveMediaMessage(ger)
						data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/wanted?url=${data.display_url}&apikey=IkyOgiwara`)
						shino.sendMessage(from, buff, image, {quoted: shin, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}wanted`)
					}
					break
					case 'joke':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
var imgbb = require('imgbb-uploader')
					if ((isMedia && !shin.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : shin
						owgi = await shino.downloadAndSaveMediaMessage(ger)
						data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/joke?url=${data.display_url}&apikey=IkyOgiwara`)
						shino.sendMessage(from, buff, image, {quoted: shin, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}joke`)
					}
					break
case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')          
   if (!isNsfw) return reply('nsfw belum aktif')
                reply (mess.wait)
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${setting.lolkey}`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText:`;-;`,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
       
                    break
case 'pussy':
case 'blowjob':
       case 'hentai':    
       case 'cum':
case 'trap':
      case 'nsfw_avatar':
                case 'lewd':
             if (!isNsfw) return reply('nsfw belum aktif')
       reply (mess.wait)
               buff = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${setting.lolkey}`)
                buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText:`;-;`,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
        
                    break
                case 'bj':
                case 'ero':
                case 'feet':
                case 'yuri':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'femdom':
                case 'cuddle':
                case 'eroyuri':
                case 'cum_jpg':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'lewdkemo':
                case 'waifuu':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
                reply (mess.wait)
               buff = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${setting.lolkey}`)
                buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText:`;-;`,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
        
                    break
case 'waifu':

query = args.join(" ")
 if (isBanned) return reply('Maaf kamu sudah terbenned!')
 if (args.length == 0) return reply(`Example: ${prefix + command} shino`)
                    
 buff = await getBuffer(`https://hadi-api.herokuapp.com/api/waifusrc?nama=${query}`)
 buttons = [{buttonId: `${prefix + command} ${query}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { jimp: buff, })).imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText:`*${query}*`,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)

break
case 'meme':
case 'memek':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')

 buff = await getBuffer ('https://leyscoders-api.herokuapp.com/api/memeindo?apikey=IkyOgiwara')

buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
    
break
                    // Textprome //
                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
                reply (mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                  buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${setting.lolkey}&text=${ini_txt}`)
                 buttons = [{buttonId: `!menu`,buttonText:{displayText: `BACK MENU`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText:`;-;`,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
        
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
                reply (mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                 buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${setting.lolkey}&text1=${txt1}&text2=${txt2}`)
                          buttons = [{buttonId: `!menu`,buttonText:{displayText: `BACK MENU`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText:`;-;`,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
        
                    break

                    // Photo Oxy //
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
                reply (mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                  buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${setting.lolkey}&text=${ini_txt}`)
                          buttons = [{buttonId: `!menu`,buttonText:{displayText: `BACK MENU`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText:`;-;`,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
        
                    break
                case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
                reply (mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${setting.lolkey}&text1=${txt1}&text2=${txt2}`)
                          buttons = [{buttonId: `!menu`,buttonText:{displayText: `BACK MENU`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText:`;-;`,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
        
                    break

                    // Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
                reply (mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
             buff = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${setting.lolkey}&text=${ini_txt}`)
               buttons = [{buttonId: `!menu`,buttonText:{displayText: `BACK MENU`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText:`;-;`,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
        
                    break
                   case 'setwelcome':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (isBanned) return reply('Maaf kamu sudah terbenned!')  
					  if (args.length < 1) return reply('*Teks nya mana gan?*')
                    shino.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					join = body.slice(11)
					shino.sendMessage(from ,`\`\`\`Welcome berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : shin})
				break 
				
                         case 'public':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
        	  if (!shin.key.fromMe) return 
              if (banChats === false) return 
              banChats = false
              textImg(`Sukses mode publik gan`)
              break
case "set":
case "mode":
        if (!shin.key.fromMe) return;
        sendButMessage(from, `SELF OR PUBLIC`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `⬡ SELF `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `⬡ PUBLIC`,
            },
            type: 1,
          },
        ]);
        break;
	      case 'self':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!shin.key.fromMe) return 
              if (banChats === true) return
        	  uptime = process.uptime()
        	  banChats = true
              textImg(`Success mode self gan`)
              break
 case 'quotes':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${setting.lolkey}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n*â€• ${author}*`)
                    break
                case 'quotesanime':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${setting.lolkey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*• ${char}*\n*• ${anime} ${episode}*`)
                    break
                case 'quotesdilan':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quotes/diLan?apikey=${setting.lolkey}`)
                     reply(get_result.result)

                   break
                    break
                case 'quotesimage':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${setting.lolkey}`)
                    buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText: ini_txt,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
                 break
                case 'faktaunik':
                case 'katabijak':
                case 'pantun':
                case 'bucin':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${setting.lolkey}`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break;
                    break
                case 'randomnama':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${setting.lolkey}`)
                    shini = anu.result
                   sendButMessage(from, shini, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break;
                    break
       // Movie & Story
                case 'lk21':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${setting.lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.Language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await shino.sendMessage(from, thumbnail, image, { quoted: shin, caption: ini_txt })
                    break
                case 'drakorongoing':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'wattpad':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpuLan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=${setting.lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    await shino.sendMessage(from, thumbnail, image, { quoted: shin, caption: ini_txt })
                    break
                case 'wattpadsearch':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${setting.lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cerpen':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    titid = ini_txt
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break;
                    break
                case 'ceritahoror':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    buff = await getBuffer(get_result.thumbnail)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText: ini_txt,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
        break

               case 'groupmenu':
        case 'menugroup':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              groups = shino.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = shino.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await shino.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`
  ɢʀᴏᴜᴘꜱᴇᴛᴛɪɴɢ
  ᴀꜰᴋ *ᴀʟᴀꜱᴀɴ*
  ᴄᴇᴋꜱᴇᴡᴀ
  ᴋɪᴄᴋᴀʟʟ
  ɪɴꜰᴏɢʀᴜᴘ
  ᴘʀᴏᴍᴏᴛᴇ
  ᴅᴇᴍᴏᴛᴇ
  ʟɪꜱᴛᴏɴʟɪɴᴇ
  ᴛᴀɢᴀʟʟ *ᴛᴇᴋꜱ*
  ʟᴇᴀᴠᴇ
  ᴋɪᴄᴋ *ʀᴇᴘʟʏ*
  ᴀᴅᴅ *+62xxxxxx*
  ꜱᴇᴛɢʀᴜᴘɴᴀᴍᴇ
  ꜱᴇᴛᴘᴘɢʀᴜᴘ
  ꜱᴇᴛᴅᴇꜱᴄ
  ꜱɪᴅᴇʀ *ʀᴇᴘʟʏ ᴄʜᴀᴛ ʙᴏᴛ*
  ʜɪᴅᴇᴛᴀɢ *ᴛᴇᴋꜱ/ʀᴇᴘʟʏ ᴛᴇᴋꜱ*
`

               sendButMessage(from, menu, `© Shino`, [
          {
            buttonId: `${prefix}rules`,
            buttonText: {
              displayText: `S&K`,
            },
            type: 1,
          },]);
              break


               prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin, contextInfo:{ forwardingScore:508, mentionedJid:[senderr]}})
                          shino.relayWAMessage(prep)
               break
        case 'storymenu':
        case 'moviemenu':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              groups = shino.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = shino.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await shino.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`${botName}


               
 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
 ${prefix}drakorongoing
 ${prefix}lk21 query
 ${prefix}wattpad url_wattpad
 ${prefix}wattpadsearch query
 ${prefix}cerpen
 ${prefix}ceritahoror
`

               buttons =  [
    {buttonId: `${prefix}rules`, buttonText: {displayText: 'S&K'}, type: 1},
]
               imageMsg = (await shino.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:Bfake, contextInfo:{forwardingScore: 989}})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `p`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin, contextInfo:{ forwardingScore:508, mentionedJid:[senderr]}})
                          shino.relayWAMessage(prep)
               break
        case 'randomtext':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
        
              groups = shino.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = shino.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await shino.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`${botName}


               
 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
 ${prefix}quotes
 ${prefix}quotesdiLan
 ${prefix}quotesanime
 ${prefix}quotesimage
 ${prefix}faktaunik
 ${prefix}katabijak
 ${prefix}pantun
 ${prefix}bucin
 ${prefix}randomnama


𝔍𝔞𝔫𝔤𝔞𝔫 𝔭𝔢𝔯𝔫𝔞𝔥 𝔪𝔢𝔫𝔠𝔦𝔫𝔱𝔞𝔦 𝔰𝔢𝔰𝔢𝔬𝔯𝔞𝔫𝔤 
 𝔶𝔞𝔫𝔤 𝔪𝔞𝔰𝔦𝔥 𝔪𝔢𝔫𝔠𝔦𝔫𝔱𝔞𝔦 𝔪𝔞𝔰𝔞𝔩𝔞𝔩𝔲𝔫𝔶𝔞
`

               sendButMessage(from, menu, `© Shino`, [
          {
            buttonId: `${prefix}rules`,
            buttonText: {
              displayText: `S&K`,
            },
            type: 1,
          },]);
              break


               prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin, contextInfo:{ forwardingScore:508, mentionedJid:[senderr]}})
                          shino.relayWAMessage(prep)
               break
        
        case 'ownermenu':
        case  'menuowner':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              groups = shino.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = shino.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await shino.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
           menu =`
  ${prefix}bc *teks*
  ${prefix}term
  ${prefix}self
  ${prefix}public
  ${prefix}eval
  ${prefix}reset
  ${prefix}clearall
  ${prefix}leaveall
  ${prefix}leaveall
  ${prefix}join *link gc*
  ${prefix}shutdown
  ${prefix}getquoted
  ${prefix}addupdate *fiturnya*
  ${prefix}exif *nama|author*
  ${prefix}sewa add/del *waktunya*
  ${prefix}premium add @tag|nomor
  ${prefix}premium del @tag|nomor
`

               sendButMessage(from, menu, `© Shino`, [
          {
            buttonId: `${prefix}rules`,
            buttonText: {
              displayText: `S&K`,
            },
            type: 1,
          },]);
              break


               prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin, contextInfo:{ forwardingScore:508, mentionedJid:[senderr]}})
                          shino.relayWAMessage(prep)
               break
        
       case 'animemenu':
        case  'menuwibu':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              groups = shino.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = shino.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await shino.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
           menu =`
  ${prefix}loli
  ${prefix}manga
  ${prefix}anime 
  ${prefix}lolivideo
  ${prefix}husbu
  ${prefix}waifu
  ${prefix}milf
  ${prefix}neko
  ${prefix}kanna
  ${prefix}sagiri
  ${prefix}hentai
  ${prefix}cosplay
  ${prefix}wallnime
  ${prefix}kusonime
  ${prefix}megumin
  ${prefix}otakudesu
  ${prefix}doujindesu
  ${prefix}storyanime
  ${prefix}nakanomiku
  ${prefix}nakanoshino
  ${prefix}nakanoitsuki
  ${prefix}otakuongoing
  ${prefix}nhentai *code*
  ${prefix}nekopoi *link*
  ${prefix}nekopoisearch
`

               sendButMessage(from, menu, `© Shino`, [
          {
            buttonId: `${prefix}rules`,
            buttonText: {
              displayText: `S&K`,
            },
            type: 1,
          },]);
              break


               prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin, contextInfo:{ forwardingScore:508, mentionedJid:[senderr]}})
                          shino.relayWAMessage(prep)
               break
        
       case 'downloadmenu':
        case  'menudownload':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              groups = shino.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = shino.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await shino.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
           menu =`
  ${prefix}fb 
  ${prefix}igdl 
  ${prefix}igdl2 
  ${prefix}twitter 
  ${prefix}tiktok 
  ${prefix}play 
  ${prefix}ythd 
  ${prefix}ytmp3 
  ${prefix}ytmp4 
  ${prefix}soundcloud 
  ${prefix}tiktoknowm 
  ${prefix}tiktokaudio
  ${prefix}mediafire 
  ${prefix}nhentaipdf *code*
 `

               sendButMessage(from, menu, `© Shino`, [
          {
            buttonId: `${prefix}rules`,
            buttonText: {
              displayText: `S&K`,
            },
            type: 1,
          },]);
              break


               prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin, contextInfo:{ forwardingScore:508, mentionedJid:[senderr]}})
                          shino.relayWAMessage(prep)
               break
   
     case 'othermenu':
        case  'menuother':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              groups = shino.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = shino.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await shino.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
           menu =`
  ${prefix}brainly *query*
  ${prefix}shopee *product*
  ${prefix}playstore *query*
  ${prefix}ssweb *query*
  ${prefix}google *query*
  ${prefix}image *query*
  ${prefix}pinterest *query*
  ${prefix}nulis *teks*
  ${prefix}iguser *ussername*
  ${prefix}igstalk *username*
  ${prefix}githubstalk *username*
  ${prefix}tiktokstalk *ussername*
  ${prefix}img2url *reply foto*
  ${prefix}ytsearch *query*
 `

               sendButMessage(from, menu, `© Shino`, [
          {
            buttonId: `${prefix}rules`,
            buttonText: {
              displayText: `S&K`,
            },
            type: 1,
          },]);
              break


               prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin, contextInfo:{ forwardingScore:508, mentionedJid:[senderr]}})
                          shino.relayWAMessage(prep)
               break
   case 'character':
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Shin`)

query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${setting.lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Name : ${get_result.name.full}\n`
ini_txt += `Native : ${get_result.name.native}\n`
ini_txt += `Favorites : ${get_result.favourites}\n`
ini_txt += `Media : \n`
ini_media = get_result.media.nodes
for (var x of ini_media) {
ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
}
ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
thumbnail = await getBuffer(get_result.image.large)
await shino.sendMessage(from, thumbnail, image, { quoted: shin, caption: ini_txt })
break

   case 'gamemenu':
        case  'menugame':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              groups = shino.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = shino.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await shino.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
           menu =`    
  ${prefix}slot
  ${prefix}limitgame
  ${prefix}gelud @tag
  ${prefix}tictactoe @tag
  ${prefix}siapaaku
  ${prefix}family100
  ${prefix}kuismath
  ${prefix}asahotak
  ${prefix}tebaklirik
  ${prefix}tebaklagu
  ${prefix}tebakkata
  ${prefix}susunkata
  ${prefix}kimiakuis
  ${prefix}caklontong
  ${prefix}tebakjenaka
  ${prefix}tebakanime
  ${prefix}tebaktebakan
  ${prefix}tebakgambar
  ${prefix}tebakbendera
  ${prefix}suit *batu/kertas/gunting*
 `

               sendButMessage(from, menu, `© Shino`, [
          {
            buttonId: `${prefix}rules`,
            buttonText: {
              displayText: `S&K`,
            },
            type: 1,
          },]);
              break


               prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin, contextInfo:{ forwardingScore:508, mentionedJid:[senderr]}})
                          shino.relayWAMessage(prep)
               break
               case 'stickermenu':
        case  'stikermenu':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              groups = shino.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = shino.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await shino.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
      
 menu =`
  ${prefix}dadu
  ${prefix}bucinstick
  ${prefix}doge
  ${prefix}toimg
  ${prefix}patrick
  ${prefix}ttg *teks*
  ${prefix}attp *teks*
  ${prefix}stickeranime
  ${prefix}semoji *emoji*
  ${prefix}sticker *reply foto/video*
  ${prefix}smeme *teks|teks*
  ${prefix}swm *pack|author*
  ${prefix}take *pack|author* 
  ${prefix}tovideo *reply sgif*
`



               sendButMessage(from, menubeta, `© Shino`, [
          {
            buttonId: `${prefix}rules`,
            buttonText: {
              displayText: `S&K`,
            },
            type: 1,
          },]);
              break
                    case 'funmenu':
        case  'menufun':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              groups = shino.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = shino.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await shino.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
      
 menu =`     
  ${prefix}mining
  ${prefix}cekwatak
  ${prefix}wangy [nama]
  ${prefix}citacita
  ${prefix}toxic
  ${prefix}truth
  ${prefix}dare
  ${prefix}apakah
  ${prefix}bisakah
  ${prefix}kapankah
  ${prefix}rate
`
               sendButMessage(from, menu, `© Shino`, [
          {
            buttonId: `${prefix}rules`,
            buttonText: {
              displayText: `S&K`,
            },
            type: 1,
          },]);
              break


               prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin, contextInfo:{ forwardingScore:508, mentionedJid:[senderr]}})
                          shino.relayWAMessage(prep)
               break
   case 'infomenu':
        case  'menuinfo':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              groups = shino.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = shino.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await shino.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
      
 menu =`   
  ${prefix}update
  ${prefix}level
  ${prefix}rules
  ${prefix}profile
  ${prefix}waktu
  ${prefix}botstat
  ${prefix}sewabot
  ${prefix}listsewa
  ${prefix}owner
  ${prefix}ping
  ${prefix}runtime
  ${prefix}donasi
  ${prefix}leaderboard
  ${prefix}cekpremium
  ${prefix}listpremium
  ${prefix}sourcecode
  ${prefix}bugreport *keluhan*
  `

               buttons =  [
    {buttonId: `${prefix}rules`, buttonText: {displayText: 'S&K'}, type: 1},
]
               imageMsg = (await shino.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:Bfake, contextInfo:{forwardingScore: 989}})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `© Shino`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}


               prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin, contextInfo:{ forwardingScore:508, mentionedJid:[senderr]}})
                          shino.relayWAMessage(prep)
               break
case 'pornmenu':
        case  '181+':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              groups = shino.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = shino.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await shino.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
      
 menu =`
 ${prefix}bokep1
 ${prefix}bokep2
 ${prefix}bokep3
 ${prefix}bokep4
 ${prefix}bokep5
 ${prefix}bokep6
 ${prefix}bokep7
 ${prefix}bokep8
 ${prefix}bokep9
 ${prefix}bokep10
 ${prefix}bokep11
 ${prefix}bokep12
 ${prefix}bokep13
 ${prefix}bokep14
 ${prefix}bokep15
 ${prefix}bokep16
 ${prefix}bokep17
 ${prefix}bokep18
 ${prefix}bokep19
 ${prefix}bokep20
 ${prefix}bokep21
 ${prefix}bokep22
 ${prefix}bokep23
 ${prefix}bokep24
 ${prefix}bokep25
 `

               sendButMessage(from, menu, `© Shino`, [
          {
            buttonId: `${prefix}rules`,
            buttonText: {
              displayText: `S&K`,
            },
            type: 1,
          },]);
              break


               prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin, contextInfo:{ forwardingScore:508, mentionedJid:[senderr]}})
                          shino.relayWAMessage(prep)
               break
   //addfiturbokep
                case 'bokep1':				 
            
				qute = fs.readFileSync('media/Menu.jpg') 
				  
				   shino.sendMessage(from, qute, image, { quoted: shin, caption: '*INGET DOSA KAK*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
				   break
				   case 'bokep2':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')

				qute = fs.readFileSync('media/Menu.jpg') 
				  
				   shino.sendMessage(from, qute, image, { quoted: shin, caption: '*INGET DOSA KAK*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
				   break
				   case 'bokep3':	

				qute = fs.readFileSync('media/Menu.jpg') 
				  
				   shino.sendMessage(from, qute, image, { quoted: shin, caption: '*INGET DOSA KAK*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    
				   break
				   case 'bokep4':	

				qute = fs.readFileSync('media/Menu.jpg') 
				
				   shino.sendMessage(from, qute, image, { quoted: shin, caption: '*INGET DOSA KAK*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   
				   break
				   case 'bokep5':	

				qute = fs.readFileSync('media/Menu.jpg') 
				
				   shino.sendMessage(from, qute, image, { quoted: shin, caption: '*INGET DOSA KAK*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   
				   break
				   case 'bokep6':	

				qute = fs.readFileSync('media/Menu.jpg') 
				
				   shino.sendMessage(from, qute, image, { quoted: shin, caption: '*INGET DOSA KAK*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   
				   break
                   case 'bokep7':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')

				qute = fs.readFileSync('media/Menu.jpg') 
				
				   shino.sendMessage(from, qute, image, { quoted: shin, caption: '*INGET DOSA KAK*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   
				   break
		           case 'bokep8':	

				qute = fs.readFileSync('media/Menu.jpg') 
				if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: shin})
				   shino.sendMessage(from, qute, image, { quoted: shin, caption: '*INGET DOSA KAK*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   
				   break
	
				   case 'bokep10':	

				qute = fs.readFileSync('media/Menu.jpg') 
				if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: shin})
				   shino.sendMessage(from, qute, image, { quoted: shin, caption: '*INGET DOSA KAK*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   
				   break
				   case 'bokep11':	

				qute = fs.readFileSync('media/Menu.jpg') 
				if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: shin})
				   shino.sendMessage(from, qute, image, { quoted: shin, caption: '*INGET DOSA KAK*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   
				   break
				   case 'bokep12':	
			    
				qute = fs.readFileSync('media/Menu.jpg') 
				if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: shin})
				   shino.sendMessage(from, qute, image, { quoted: shin, caption: '*INGET DOSA KAK*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   
				   break
				   case 'bokep13':	

				qute = fs.readFileSync('media/Menu.jpg')
                 
				   shino.sendMessage(from, qute, image, { quoted: shin, caption: '*INGET DOSA KAK*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   
				   break
				   case 'bokep14':	

				qute = fs.readFileSync('media/Menu.jpg') 
				if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: shin})
				   shino.sendMessage(from, qute, image, { quoted: shin, caption: '*INGET DOSA KAK*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
				   break
	               case 'bokep15':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')

				qute = fs.readFileSync('media/Menu.jpg') 
				if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: shin})
				   shino.sendMessage(from, qute, image, { quoted: shin, caption: '*INGET DOSA KAK*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
				   break
    	           case 'bokep16':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')

				qute = fs.readFileSync('media/Menu.jpg') 
				if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: shin})
				   shino.sendMessage(from, qute, image, { quoted: shin, caption: '*INGET DOSA KAK*\nLink Download \n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })				   
				   break
				   case 'bokep17':	

				qute = fs.readFileSync('media/Menu.jpg') 
				if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: shin})
				   shino.sendMessage(from, qute, image, { quoted: shin, caption: '*INGET DOSA KAK*\nLink Download \n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })				   
				   break
				   case 'bokep18':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')

				qute = fs.readFileSync('media/Menu.jpg') 
				if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: shin})
				   shino.sendMessage(from, qute, image, { quoted: shin, caption: '*INGET DOSA KAK*\nLink Download \n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })				   
				   break
				   case 'bokep19':				 
				
				qute = fs.readFileSync('media/Menu.jpg') 
				if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: shin})
				   shino.sendMessage(from, qute, image, { quoted: shin, caption: '*INGET DOSA KAK*\nLink Download \n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })				   
				   break
				   case 'bokep20':			

				qute = fs.readFileSync('media/Menu.jpg') 
				if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: shin})
				   shino.sendMessage(from, qute, image, { quoted: shin, caption: '*INGET DOSA KAK*\nLink Download \n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })				   
				   break
				   case 'bokep21':				 
				
				qute = fs.readFileSync('media/Menu.jpg') 
				if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: shin})
				   shino.sendMessage(from, qute, image, { quoted: shin, caption: '*INGET DOSA KAK*\nLink Download \n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })				   
				   break
				   case 'bokep22':		

				qute = fs.readFileSync('media/Menu.jpg')
                 
				   shino.sendMessage(from, qute, image, { quoted: shin, caption: '*INGET DOSA KAK*\nLink Download \n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })				   
				   break
				   case 'bokep23':	

				qute = fs.readFileSync('media/Menu.jpg') 
				if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: shin})
				   shino.sendMessage(from, qute, image, { quoted: shin, caption: '*INGET DOSA KAK*\nLink Download \n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })				   
				   break
				   case 'bokep24':				 
				
				qute = fs.readFileSync('media/Menu.jpg') 
				if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: shin})
				   shino.sendMessage(from, qute, image, { quoted: shin, caption: '*INGET DOSA KAK*\nLink Download \\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })				   
				   break
   
        case 'limitgame': 
        case 'balance': 
               const balance = atm.checkATMuser(sender, _uang)
               if (isPremium) return reply(`Limit Game : Unlimited\nBalance : Rp.${balance}`)
               textImg(`Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : Rp.${balance}`)
               break
         case 'gelud':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
               if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
               if (!isGroup) return reply(mess.only.group)
               if (shin.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
               if (!shin.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
               if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
               if (fs.existsSync(`./media/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)
					
               gelutSkuy = setGelud(`${from}`)
               gelutSkuy.status = false
               gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
               gelutSkuy.Y = args[0].replace("@", "");
               fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
               starGame = `👑 Memulai Game Baku Hantam ????

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

               shino.sendMessage(from, starGame, text, {quoted: shin, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
               gameAdd(sender, glimit)
               break
        case 'delsesigelud':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
               if (!isGroup) return reply(mess.only.group)
               if (fs.existsSync('./media/' + from + '.json')) {
               fs.unlinkSync('./media/' + from + '.json')
               reply('Berhasil Menghapus Sesi Gelud')
               } else {
               reply('Tidak ada sesi yang berlangsung')
}
               break
        case 'delsesittt':
        case 'resetgame':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
               if (!isGroup) return reply(mess.only.group)
               if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
               ky_ttt = naa 
               reply('Sukses Mereset Game')
               break
        case 'tictactoe':
        case 'ttt':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Tag Lawan Anda! ')
              if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
              if (shin.message.extendedTextMessage === undefined || shin.message.extendedTextMessage === null) return reply('Tag target Lawan!')
              ment = shin.message.extendedTextMessage.contextInfo.mentionedJid
              player1 = sender
              player2 = ment[0]
              angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
              id = from
              gilir = player2
              ky_ttt.push({player1,player2,id,angka,gilir})
           shino.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
     
     gameAdd(sender, glimit)
     break
     case 't':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
       titid =  `SILAHKAN PILIH DI BAWAH UNTUK MELANJUTKAN`
          
                   sendButMessage(from, titid, `crated Shino`, [
          {
            buttonId: `Y`,
            buttonText: {
              displayText: `Y`,
            },
            type: 1,
            
            
    },
          {
            buttonId: `N`,
            buttonText: {
              displayText: `N`,
            },
            type: 1,
          },
        ]);
            
             
              break
       case 'family100':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
              anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${setting.lolkey}`)
              titid =  `*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\nTotal Jawaban :* ${anu.data.result.answer.length}\n\nWaktu : ${gamewaktu}s `
          
                   sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
            buttonId: `${prefix}family100`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
            
              let anoh = anu.data.result.aswer
              let rgfds = []
              for (let i of anoh){
              let fefs = i.split('/') ? i.split('/')[0] : i
              let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
              let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
              rgfds.push(axsf.toLowerCase())
}
              game.addfam(from, rgfds, gamewaktu, family100)
              gameAdd(sender, glimit)
              break
       case 'tebakanime':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebakchara?apikey=${setting.lolkey}`)
              get_result = get_result.result
              ini_image = get_result.image
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_image)
              shino.sendMessage(from, ini_buffer, image, { quoted: shin, caption: '*+* ```Tebak Anime```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s' }).then(() => {
              tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
})
              await sleep(30000)
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              titid = "*Jawaban*: " + jawaban
                   sendButMessage(from, titid, `Klik Untuk Ke Game`, [
          {
            buttonId: `${prefix}tebakanime`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
              delete tebakanime[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
}
              gameAdd(sender, glimit)
              break
       case 'tebaklagu':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaklagu?apikey=${setting.xteamkey}&id=4mFuArYRh3SO8jfffYLSER`)
              get_result = get_result.result
              ini_audio = get_result.preview
              jawaban = get_result.judul
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_audio)
              reply('*+* ```Tebak Lagu```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s')
              shino.sendMessage(from, ini_buffer, audio, {quoted: shin}).then(() => {
              tebaklagu[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
})
              await sleep(30000)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              titid = "*Jawaban*: " + jawaban
                   sendButMessage(from, titid, `Klik Untuk Ke Game`, [
          {
            buttonId: `${prefix}tebaklagu`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
              delete tebaklagu[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
}
              gameAdd(sender, glimit)
              break
       case 'tebaktebakan':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaktebakan?APIKEY=${setting.xteamkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.soal
              shino.sendMessage(from, '*+* ```Tebak Tebakan```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: shin}).then(() => {
              tebaktebakan[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
})
              await sleep(30000)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              titid = "*Jawaban*: " + jawaban
                   sendButMessage(from, titid, `Klik Untuk Ke Game`, [
          {
            buttonId: `${prefix}tebaktebakan`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
              delete tebaktebakan[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
}
              gameAdd(sender, glimit)
              break
       case 'kuismath':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api-yogipw.herokuapp.com/api/kuis/math`)
              ini_image = get_result.soal
              jawaban = get_result.jawaban
              ini_buffer = await getBuffer(ini_image)
              shino.sendMessage(from, ini_buffer, image, { quoted: shin, caption: '*+* ```Kuis Matematika```\n\nSilahkan jawab soal berikut ini\n\n• *Waktu* : 50s' }).then(() => {
              kuismath[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
})
              await sleep(50000)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              titid = "*Jawaban*: " + jawaban
                   sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
            buttonId: `${prefix}kuismath`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
              delete kuismath[sender.split('@')[0]]
              fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
}
              gameAdd(sender, glimit)
              break
       case 'tebakgambar':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`http://zekais-api.herokuapp.com/tebakgambar`)
              ini_image = get_result.soal
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              buff = await getBuffer(ini_image)
              
            shino.sendMessage(from, buff, image, { quoted: shin, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+kisi_kisi+'\nWaktu : 30s' }).then(() => {
              tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
})
              await sleep(30000)
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
                           titid = "*Jawaban*: " + jawaban
                   sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
            buttonId: `${prefix}tebakgambar`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
              delete tebakgambar[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
}
              gameAdd(sender, glimit)
              break
       case 'siapaaku':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/siapaaku?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              shino.sendMessage(from, '*+* ```Tebak Siapakah Aku```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: shin}).then(() => {
              tebaksiapaaku[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
})
              await sleep(30000)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaksiapaaku[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
}
              gameAdd(sender, glimit)
              break
       case 'tebakkata':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/kata?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              shino.sendMessage(from, '*+* ```Tebak Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: shin}).then(() => {
              tebakata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
})
              await sleep(30000)
              if (tebakata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakata[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
}
              gameAdd(sender, glimit)
              break
       case 'tebaklirik':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/lirik?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              shino.sendMessage(from, '*+* ```Tebak Lirik```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: shin}).then(() => {
              tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
})
              await sleep(30000)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaklirik[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
}
              gameAdd(sender, glimit)
              break
      case 'tebakjenaka':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/jenaka?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              shino.sendMessage(from, '*+* ```Tebak Jenaka```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: shin}).then(() => {
              tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
})
              await sleep(30000)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakjenaka[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
}
              gameAdd(sender, glimit)
              break
       case 'kimiakuis':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/unsurkimia?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.lambang
              pertanyaan = get_result.nama
              shino.sendMessage(from, '*+* ```Tebak Kimia```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: shin}).then(() => {
              tebakimia[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
})
              await sleep(30000)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakimia[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
}
              gameAdd(sender, glimit)
              break
       case 'tebakbendera':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/bendera?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.flag
              shino.sendMessage(from, '*+* ```Tebak Bendera```\n\n• *Bendera* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: shin}).then(() => {
              tebakbendera[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
})
              await sleep(30000)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakbendera[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
}
              gameAdd(sender, glimit)
              break
       case 'susunkata':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/susunkata?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              shino.sendMessage(from, '*+* ```Susun Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: shin}).then(() => {
              susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
})
              await sleep(30000)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete susunkata[sender.split('@')[0]]
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
}
              gameAdd(sender, glimit)
              break
       case 'asahotak':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/asahotak?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.pertanyaan
              shino.sendMessage(from, '*+* ```Asah Otak```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: shin}).then(() => {
              asahotak[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
})
              await sleep(30000)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete asahotak[sender.split('@')[0]]
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
}
              gameAdd(sender, glimit)
              break
       case 'caklontong':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/caklontong2?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              shino.sendMessage(from, '*+* ```Caklontong```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: shin}).then(() => {
              caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
})
              await sleep(30000)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete caklontong[sender.split('@')[0]]
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
}
              gameAdd(sender, glimit)
              break
       case 'slot':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : ??','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','?? : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
              somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              if (somtoyy  == '🍌 : 🍌 : 🍌') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍒 : 🍒') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🔔 : 🔔 : 🔔') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍐 : 🍐') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍇 : 🍇 : 🍇') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
}
              break
       case 'suit': //nyolong dari zenz
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              break
//------------------< Sewa >-------------------
       case 'sewa':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!isGroup)return reply(mess.only.group)
              if (!isOwner) return reply(mess.only.owner)
              if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
              if (args[0].toLowerCase() === 'add'){
            _sewa.addSewaGroup(from, args[1], sewa)
              reply(`Success`)
              } else if (args[0].toLowerCase() === 'del'){
              sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
              fs.writeFileSync('./database/group/sewa.json', JSON.stringify(sewa))
              reply(mess.success)
              } else {
              reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
}
              break
       case 'sewalist': 
       case 'listsewa':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
              for (let i of sewa){
              let cekvipp = ms(i.expired - Date.now())
              txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
}
              reply(txtnyee)
              break
          
case 'sfire':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
{
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(shin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : shin
                    let yoooo = await shino.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    var firenya = await getBuffer(`https://api.zeks.xyz/api/burning-image?apikey=${zekskey}&image=${link}`)
                 	let media = `./sticker/${sender}.gif`
                    fs.writeFileSync(media, firenya)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(err)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
                                    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									shino.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: shin})
									limitAdd(sender, limit)
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                })
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                        } else if (isQuotedSticker && !quotedshin.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await shino.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    var firenya = await getBuffer(`https://api.zeks.xyz/api/burning-image?apikey=${zekskey}&image=${link}`)
                 	let media = `./sticker/${sender}.gif`
                    fs.writeFileSync(media, firenya)
                    fs.unlinkSync(ran)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
                                    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									shino.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: shin})
									limitAdd(sender, limit)
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                })
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               }
                    break
       case 'sewacheck':
       case 'ceksewa': 
              if (!isGroup) return reply(mess.only.group)
              if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
              let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
              let premiumnya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
              reply(premiumnya)
              break
//------------------< Premium >-------------------
       case 'premium': 
              if (!isOwner) return reply(mess.only.owner)
              if (args[0] === 'add') {
              if (shin.message.extendedTextMessage != undefined) {
              mentioned = shin.message.extendedTextMessage.contextInfo.mentionedJid

              premium.addPremiumUser(mentioned[0], args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
                        
              } else {
                            
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
}
              } else if (args[0] === 'del') {
              if (shin.message.extendedTextMessage != undefined) {
              mentioned = shin.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
              } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
}
              } else {
              reply(mess.wrongFormat)
}
              break
       case 'premiumcheck':
       case 'cekpremium': 
             
              const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
              reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
              break
       case 'listprem':
       case 'listpremium':          
              let txt = `「 *PREMIUM USER LIST* 」\n\n`
              let men = [];
              for (let i of _premium){
              men.push(i.id)
              const checkExp = ms(i.expired - Date.now())
              txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
}
              mentions(txt, men, true)
              break
       case 'belipremium':
       case 'buypremium':
       case 'sewabot':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              gopeynya = 'https://telegra.ph/file/490b3820f53e78a98580a.jpg'
            buff = await getBuffer(gopeynya)
            teksnya = `
┏━━⬣ PRICE LIST 1
┃⬡ SEWA 10K/MINGGU
┃⬡ SEWA 20K/BLN
┃⬡ SEWA + PREMIUM 25K
┃⬡ PERMANEN 30K
┃⬡ PERMANEN + PREM 35K
┃⬡ ALL PERMANEN 45K
┗━━⬣

┏━━⬣ PRICE LIST 2
┃⬡ JADI BOT 15K/BLN
┃⬡ JADI BOT + OWNER 35K
┃⬡ SC BOT TANYA OWNER
┗━━⬣

┏━━⬣ MINAT? PM
┃⬡ wa.me/62859194132712
┗━━⬣
NB : BOT ON 24 JAM KARNA DI RUN MENGGUNAKAN RDP
`
  buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: `OWNER`},type:1},{buttonId: `${prefix}payment`,buttonText:{displayText: `PAYMENT`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText: teksnya,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
      break
      
      case 'payment':
      list = await shino.prepareMessageFromContent(from, {
    "listMessage": {
      "title": "PAYMENT",
      "description": "CLICK",
      "buttonText": "",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "LIST CATALOG",
            "products": [
              {
                "productId": "4120139628109348"
              },
              {
              	"productId": "6431678466857362"
              },
              {
              	"productId": "4392524570816732"
              }
            ]
          }
        ],
        "headerImage": {
          "productId": "4120139628109348",
          "jpegThumbnail": fakeimage
        },
        "businessOwnerJid": sender
      },
      "footerText": "MINAT? PC OWNER"
    }
  }, {quoted: shin})
  shino.relayWAMessage(list, {waitForAck: true})
       
  
  break
//------------------< Sticker Cmd >-------------------
       case 'addcmd': 
       case 'setcmd':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = shin.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              reply('tag stickenya')
}
              break
       case 'delcmd':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = shin.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              break
       case 'listcmd':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
//------------------< Downloader/Search/Anime >-------------------
       
       case 'igdl': 
       case 'instagram':
       case 'instagramdownload':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('instagram')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await igDownloader(`${q}`)
             .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, shin) })
             .catch((err) => { reply(String(err)) })
              break
       case 'scplay': 
       case 'soundcloud':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('soundcloud')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await fetchJson(`https://api.lolhuman.xyz/api/soundcloud?apikey=${setting.lolkey}&url=${q}`)
             .then((data) => { sendMediaURL(from, data.result, shin) })
             .catch((err) => { reply(String(err)) })
              break
       case 'image':
       case 'gimage':
       case 'googleimage':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (args.length < 1) return reply('Apa Yang Mau Dicari?')
              reply(mess.wait)
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: shin, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
             break
      case 'ytmp3':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
           
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `
*Data Berhasil Didapatkan!*
\`\`\` Title : ${res[0].judul}\`\`\`
\`\`\` Ext : MP3\`\`\`
\`\`\` Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: shin}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: shin, mimetype: 'audio/mp3', filename: res[0].output})
})
            break
     case 'ytmp4':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
           
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] TerJadi Error Silahkan Coba Lagi  Nanti_')
})
            result = `
*Data Berhasil Didapatkan!*
\`\`\` Title : ${res[0].judul}\`\`\`
\`\`\` Ext : MP4\`\`\`
\`\`\` Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: shin}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: shin, mimetype: 'video/mp4', filename: res[0].output})
})
            break
     case 'ytmp4hd':
     case 'ythd':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
           
            if (args.length === 0) return reply(`Kirim perintah */ytmp4 _linkYt_*`)
            let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinkks2) return reply(mess.error.Iv)
            try {
            reply(mess.wait)
            ythd(args[0])
           .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
           .then((a) => {
            if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, 
`
*Data Berhasil Didapatkan!*
\`\`\` Title : ${title}\`\`\`
\`\`\` Kualitas* : 720p\`\`\`
\`\`\` Size* : ${filesizeF}\`\`\`
\`\`\` Link* : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam Bentuk link_`)

            const captionsYtmp4 = 
`
*Data Berhasil Didapatkan!*
\`\`\` Title : ${title}\`\`\`
\`\`\` Kualitas : 720p\`\`\`
\`\`\` Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

              sendMediaURL(from, thumb, captionsYtmp4)
              sendMediaURL(from, dl_link,`nih kak`).catch(() => reply(mess.error.api))
})		
})
              } catch (err) {
              reply(`eror`)
}
              break
        case 'google':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!q) return reply(mess.wrongFormat)
              ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=6f71d29574a942c4a13fa2c00062d5f2&url=http://google.com/search?q=${q}&oq={q}&aqs=chrome..69i57j0i433i512l2j0i512l2.858j0j4&client=ms-android-oppo&sourceid=chrome-mobile&ie=UTF-8`)
              reply(mess.wait)
              if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
              ggs({ 'query': q }).then(results => {
              vars = `_*Hasil Pencarian : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
} 
               shino.sendMessage(from, ss, image, {thumbnail: Buffer.alloc(0), caption: vars, quoted : shin})
               }).catch(e => {
               console.log(e)
               reply(`${e}`)
})
               break
               	
        case 'mediafire':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              
               if (args.length < 1) return reply('Link Nya Mana? ')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
               reply(mess.wait)
               teks = args.join(' ')
               res = await mediafireDl(teks)
               result = `
*Data Berhasil Didapatkan!*
\`\`\`Nama : ${res[0].nama}\`\`\`
\`\`\`Ukuran : ${res[0].size}\`\`\`
\`\`\`Link : ${res[0].link}\`\`\`

_*Tunggu Proses Upload Media......*_`
             reply(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: shin})
             break
       
       case 'tt':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
if (!q) return reply('Linknya?')
if (!q.includes('tiktok')) return
reply(mess.error.Iv)
reply(mess.wait)
anu = await TiktokDownloader(`${q}`)
shinyy ='hi.mp4'
kntl = 'hasil.mp4'
fs.writeFileSync(input,await getBuffer(data.result.watermark))
exec(`ffmpeg -i ${shinyy} -b:a 192K -vn  ${kntl}`,(err,res)=> {
if (err) return reply(`${err}`)
shino.sendMessage(from,{url:'./'+shinyy},audio,{mimetype:'audio/mpeg'})
})
      
       case 'ttdl':
       case 'tiktokdl':
       case 'tiktoknowm':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${setting.lolkey}&url=${q}`)
              result = `⚜️ *Nickname*: ${data.result.author.nickname}\n❤️ *Like*: ${data.result.statistic.diggCount}\n💬 *Komentar*: ${data.result.statistic.commentCount}\n🔁 *Share*: ${data.result.statistic.shareCount}\n🎞️ *Views*: ${data.result.statistic.playCount}\n?? *Desc*: ${data.result.title}`
              buttons = [{buttonId: `${prefix}tt1 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId:`${prefix}ttaudio ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
              imageMsg = ( await shino.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
      case 'tt1': 

             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break

  case 'xnxxsearch':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=genbotkey&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
       case 'randomcode':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (!isGroup) return reply(mess.only.group)
             if (!isNsfw) return reply('nsfw belum aktif')
              const xoden =['233888','290065','286493','276518','137716','331399','233547','251489','258212','262870','250029','211519','256097','163478','220376','240330','320732','332157','327052','259828','37659','313456','166126','120759','287963','311929','310502','233370','311423','280662','109745','226861','272298','286003','178968','255129','258212','221711','211648','236128','228708','192310','220958','243790','262158','255129','227675','234818','199425','259497','239595','199310','241254','322136','319529','232747','261928','110094','160556','209519','318370','34619','164043','232747','300508','306088','259433','195873','188469','197423','304192','216942','232976','204958','257892','236297','216039','221711','245304','166174','175220','244327','191049','220882','244859','227446','259328','259532','259634','259610','259348','258669','256097','118282','260028','260058','259557','259497','122220','260111','260088','259880','258977','260097','259765','259359','260138','259617','107965','197255','260276','260209','260210','260203','191360','191390','248933','257567','227913','211648','210240','260626','259622','257991','213966','260623','149112','257168','198203','114783','220958','244387','243734','223315','118069','136188','260686','241777','260912','142154','119798','261174','258301','256808','169134','220354','260271','261725','261378','252174','261928','114427','187003','147577','249458','157767','224316','175294','258450','233864','236128','261162','174036','187205','210873','193318','110232','199310','193816','220376','193814','193815','219068','220386','177642','188269','181837','220377','119293','257528','258926','262384','105951','259904','208174','268281','155850','297974','139577','298547','149809','118282','236157','290886','109745','177503','102659','303655','182843','173808','265918','212548','303893','304307','278832','210510','77054','275485','249743','280509','269673','103269','241790','255308','281709','211648','278153','269542','151436','109851','273447','60449','147746','195117','271062','255662','204958','250647','222798','250647','260605','114750','139732','222855','261174','206409','226861','245503','264298','179305','220901','92807','86879','148080','223146','223147','227020','243520','201704199827','271048','67462','255744','245737','170727','253993','272768','272298','151165','246448','182290','268793','179687','175852','187343','245131','234167','266987','123361','272129','277677','268920','129281','217727','218398','178468','277324','155365','274917','239463','245135','280297','253993','261063','267300','228708','112597','286003','209775','221287','285588','285627','285396','129071','16316','285275','116513','214054','182674','284566','178968','62287','284935','284907','263066','260217','240543','233321','245341','218162','218148','203367','233878','245942','246144','242056','255772','253992','283737','280890']
              const xok = xoden[Math.floor(Math.random() * xoden.length)]
              shino.sendMessage(from, 'Nih kak : '+ xok, text, { quoted: shin })
              break
                case 'xnxx':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=genbotkey&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await shino.sendMessage(from, thumbnail, image, { quoted: shin , caption: ini_txt })
                    break

              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://shino-chan02.github.io`)
              
      case 'ttaudio': 
      case 'tiktokmusic': 
      case 'tiktokaudio':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              reply(mess.wait)
             if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
             ini_link = args[0]
             get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${setting.lolkey}&url=${ini_link}`)
             shino.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: shin })
             break
      case 'fbdl':
      case 'fb':
      case 'facebok':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/facebook-dl?url=${q}&apikey=IkyOgiwara`)
					stringTime = new Date(`${anu.result.upload}`);
					stringTime2 = stringTime.getDate() + "/" + (stringTime.getMonth() + 1) + "/" + stringTime.getFullYear();
					teks = `「 RESULT FOUND 」\n\n• Title: ${anu.result.title}\n• Upload: ${stringTime2}\n• Like: ${convertToString(anu.result.reaction.like)}\n• Url: ${anu.result.link}`
					buff = await getBuffer(anu.result.thumb)
					shino.sendMessage(from, buff, image, {quoted: shin, caption: teks})
					break
      case 'twitter':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
             if (!q) return reply('Linknya?')
             ten = args[0]
             var res = await twitterGetUrl(`${ten}`)
            .then(g => {
             ren = `${g.download[2].url}`
             sendMediaURL(from,ren,'Done')
})
             break
      case 'brainly':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             reply(mess.wait)
             brainly(args.join(" ")).then(res => {
             hmm = '────────────\n'
             for (let Y of res.data) {
             hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
}
             reply(hmm)
             console.log(res)
})
             break
      case 'ssweb1':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/`)
             reply(mess.wait)
             ini_link = args[0]
             ini_buffer = await getBuffer(`https://hardianto-chan.herokuapp.com/api/tools/ssweb?url=${ini_link}&apikey=hardianto`)
             await shino.sendMessage(from, ini_buffer, image, { quoted: shin })
             break
 case 'ssweb':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
              ini_link = args[0]
             ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${setting.lolkey}&url=${ini_link}`)
             await shino.sendMessage(from, ini_buffer, image, { quoted: shin })
break
case 'nhentaipdf':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
            if (!isNsfw) return reply('nsfw belum aktif')
             if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 317986`)
             if (isNaN(Number(args[0]))) return await reply(mess.wrongFormat)
             try {
             henid = args[0]
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${setting.lolkey}`)
             get_result = get_result.result
             get_info = get_result.info
             teks = `*Doujinshi Downloader*
             
 Title Romaji : ${get_result.title_romaji}
 Title Native : ${get_result.title_native}
 Character : ${get_info.characters.join(", ")}\n`
             ini_image = await getBuffer(get_result.image[0])
             shino.sendMessage(from, ini_image, image, { caption: teks, quoted: shin, thumbnail: Buffer.alloc(0) })
             reply(mess.wait)
             anu = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${setting.lolkey}`)
             pdf = await getBuffer(anu.result)
             shino.sendMessage(from, pdf, document, { quoted: shin, mimetype: Mimetype.pdf, filename: `${get_result.title_romaji}.pdf`, thumbnail: ini_image })
             } catch (e) {
             console.log(e)
             reply(String(e))
}
             break
       case 'nhentai':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (!isNsfw) return reply('nsfw belum aktif')
              if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
              if (isNaN(Number(args[0]))) return await reply(mess.wrongFormat)
              reply(mess.wait)
              henid = args[0]
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${setting.lolkey}`)
              get_result = get_result.result
              ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
              ini_txt += `Title Native : ${get_result.title_native}\n`
              ini_txt += `Read Online : ${get_result.read}\n`
              get_info = get_result.info
              ini_txt += `Parodies : ${get_info.parodies}\n`
              ini_txt += `Character : ${get_info.characters.join(", ")}\n`
              ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
              ini_txt += `Artist : ${get_info.artists}\n`
              ini_txt += `Group : ${get_info.groups}\n`
              ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
              ini_txt += `Categories : ${get_info.categories}\n`
              ini_txt += `Pages : ${get_info.pages}\n`
              ini_txt += `Uploaded : ${get_info.uploaded}\n`
              reply(ini_txt)
              break
       case 'manga':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
              reply(mess.wait)
              query = args.join(" ")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${setting.lolkey}&query=${query}`)
              get_result = get_result.result
              ini_txt = `Id : ${get_result.id}\n`
              ini_txt += `Id MAL : ${get_result.idMal}\n`
              ini_txt += `Title : ${get_result.title.romaji}\n`
              ini_txt += `English : ${get_result.title.english}\n`
              ini_txt += `Native : ${get_result.title.native}\n`
              ini_txt += `Format : ${get_result.format}\n`
              ini_txt += `Chapters : ${get_result.chapters}\n`
              ini_txt += `Volume : ${get_result.volumes}\n`
              ini_txt += `Status : ${get_result.status}\n`
              ini_txt += `Source : ${get_result.source}\n`
              ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
              ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
              ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
              ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
              ini_txt += `Score : ${get_result.averageScore}%\n`
              ini_txt += `Characters : \n`
              ini_character = get_result.characters.nodes
              for (var x of ini_character) {
              ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
              ini_txt += `\nDescription : ${get_result.description}`
              buff = await getBuffer(get_result.coverImage.large)
              buttons = [{buttonId: `!menu`,buttonText:{displayText: `Back To Menu`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText: ini_txt,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
         break
       case 'doujindesu':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (!q) return reply(mess.wrongFormat)
             reply(mess.wait)
             try {
             doujinnya = await got.get(`http://api-melodicxt-2.herokuapp.com/api/doujindesu/search?query=${q}&apiKey=administrator`).json()
             let { data } = await doujinnya
             xixixai = `*Doujindesu Search*\n`
             for (let i = 0; i < data.length; i++) {
             xixixai += `\n*Urutan ${i+1}*\n*Title:* ${data[i].title}\n*Type:* ${data[i].type}\n*Status:* ${data[i].status}\n*Rating:* ${data[i].rating}\n*Followers:* ${data[i].followers}\n`
}
             buffer = await getBuffer(data[0].thumb)
             shino.sendMessage(from, buffer, image, {caption: xixixai, quoted: shin})
             } catch (e) {
             console.log(e)
             reply(String(e))
}
             break
      case 'anime':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
             reply(mess.wait)
             query = args.join(" ")
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${setting.lolkey}&query=${query}`)
             get_result = get_result.result
             ini_txt = `Id : ${get_result.id}\n`
             ini_txt += `Id MAL : ${get_result.idMal}\n`
             ini_txt += `Title : ${get_result.title.romaji}\n`
             ini_txt += `English : ${get_result.title.english}\n`
             ini_txt += `Native : ${get_result.title.native}\n`
             ini_txt += `Format : ${get_result.format}\n`
             ini_txt += `Episodes : ${get_result.episodes}\n`
             ini_txt += `Duration : ${get_result.duration} mins.\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Season : ${get_result.season}\n`
             ini_txt += `Season Year : ${get_result.seasonYear}\n`
             ini_txt += `Source : ${get_result.source}\n`
             ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
             ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
             ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
             ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
             ini_txt += `Score : ${get_result.averageScore}%\n`
             ini_txt += `Characters : \n`
             ini_character = get_result.characters.nodes
             for (var x of ini_character) {
             ini_txt += `- ${x.name.full} (${x.name.native})\n`
 }
             ini_txt += `\nDescription : ${get_result.description}`
             thumbnail = await getBuffer(get_result.coverImage.large)
             await shino.sendMessage(from, thumbnail, image, { quoted: shin, caption: ini_txt })
             break
      case 'kusonime':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
             reply(mess.wait)
             query = args.join(" ")
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${setting.lolkey}&query=${query}`)
             get_result = get_result.result
             ini_txt = `Title : ${get_result.title}\n`
             ini_txt += `Japanese : ${get_result.japanese}\n`
             ini_txt += `Genre : ${get_result.genre}\n`
             ini_txt += `Seasons : ${get_result.seasons}\n`
             ini_txt += `Producers : ${get_result.producers}\n`
             ini_txt += `Type : ${get_result.type}\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Total Episode : ${get_result.total_episode}\n`
             ini_txt += `Score : ${get_result.score}\n`
             ini_txt += `Duration : ${get_result.duration}\n`
             ini_txt += `Released On : ${get_result.released_on}\n`
             ini_txt += `Desc : ${get_result.desc}\n`
             link_dl = get_result.link_dl
             for (var x in link_dl) {
             ini_txt += `\n${x}\n`
             for (var y in link_dl[x]) {
             ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
             ini_buffer = await getBuffer(get_result.thumbnail)
             await shino.sendMessage(from, ini_buffer, image, { quoted: shin, caption: ini_txt })
             break
       case 'otakudesu':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
              reply(mess.wait)
              query = args.join(" ")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${setting.lolkey}&query=${query}`)
              get_result = get_result.result
              ini_txt = `Title : ${get_result.title}\n`
              ini_txt += `Japanese : ${get_result.japanese}\n`
              ini_txt += `Judul : ${get_result.judul}\n`
              ini_txt += `Type : ${get_result.type}\n`
              ini_txt += `Episode : ${get_result.episodes}\n`
              ini_txt += `Aired : ${get_result.aired}\n`
              ini_txt += `Producers : ${get_result.producers}\n`
              ini_txt += `Genre : ${get_result.genres}\n`
              ini_txt += `Duration : ${get_result.duration}\n`
              ini_txt += `Studios : ${get_result.status}\n`
              ini_txt += `Rating : ${get_result.rating}\n`
              ini_txt += `Credit : ${get_result.credit}\n`
              get_link = get_result.link_dl
              for (var x in get_link) {
              ini_txt += `\n\n*${get_link[x].title}*\n`
              for (var y in get_link[x].link_dl) {
              ini_info = get_link[x].link_dl[y]
              ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
              ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
              ini_txt += `\`\`\`Link : \`\`\`\n`
              down_link = ini_info.link_dl
              for (var z in down_link) {
              ini_txt += `${z} - ${down_link[z]}\n`
}
}
}
              reply(ini_txt)
              break
       case 'nekopoi':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
              ini_url = args[0]
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${setting.lolkey}&url=${ini_url}`)
              get_result = get_result.result
              ini_txt = `\`\`\` Title : ${get_result.anime}\`\`\`\n`
              ini_txt += `\`\`\` Porducers : ${get_result.producers}\`\`\`\n`
              ini_txt += `\`\`\` Duration : ${get_result.duration}\`\`\`\n`
              ini_txt += `\`\`\` Size : ${get_result.size}\`\`\`\n`
              ini_txt += `\`\`\` Sinopsis : ${get_result.sinopsis}\`\`\`\n`
              link = get_result.link
              for (var x in link) {
              ini_txt += `\n${link[x].name}\n`
              link_dl = link[x].link
              for (var y in link_dl) {
              ini_txt += `${y} - ${link_dl[y]}\n`
}
}
              buff = await getBuffer(get_result.thumb)
              
               buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText: ini_txt,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
         break
       case 'nekopoisearch':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
              query = args.join(" ")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${setting.lolkey}&query=${query}`)
              get_result = get_result.result
              ini_txt = ""
              for (var x of get_result) {
              ini_txt += `\`\`\` Title : ${x.title}\`\`\`\n`
              ini_txt += `\`\`\` Link : ${x.link}\`\`\`\n`
              ini_txt += `\`\`\` Thumbnail : ${x.thumbnail}\`\`\`\n\n`
}
              reply(ini_txt)
              break
       case 'neko':
       case 'kanna':
       case 'sagiri':
       case 'megumin':
       case 'wallnime':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              reply(mess.wait)
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${setting.lolkey}`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
    
              break
       
       
    
              break
       case 'nakanoitsuki':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
       reply (mess.wait)
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${setting.lolkey}&query=nakanoitsuki`)
                    ini_url = ini_url.result
                    buff = await getBuffer(ini_url)
                    buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
        break
       case 'nakanoshino':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
       reply (mess.wait)
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${setting.lolkey}&query=nakanoshino`)
                    ini_url = ini_url.result
                    buff = await getBuffer(ini_url)
                    buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
        break
       case 'storyanime':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              
              reply(mess.wait)
              anu = await fetchJson(`https://lolhuman.herokuapp.com/api/storynime?apikey=${setting.lolkey}`)
              buffer = await getBuffer(anu.result)
              shino.sendMessage(from, buffer, video, { quoted: shin })
              break
       case 'nekopoi3d':
       case '3dnekopoi':
       case '3dnekopoilast':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
      
              reply(mess.wait)
              try {
              bsangee = await axios.get(`https://api.vhtear.com/neko3d&apikey=${setting.vhtearkey}`)
              bsangee2 = bsangee.data
              keluarplay = `*List update 3D JAV*\n`
              for (let i = 0; i < bsangee2.result.length; i++) {
              keluarplay += `\n═════════════════\n\n*Judul* : ${bsangee2.result[i].title}\n*Deskripsi* : ${bsangee2.result[i].description}\n*Link* : ${bsangee2.result[i].url}\n`
}
              reply(keluarplay) 
              } catch (err) {
              console.log(err)
              reply('error!')
}
               break
        case 'nekopoijav':
        case 'javnekopoi':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
       
               reply(mess.wait)
               try {
               bsangce = await axios.get(`https://api.vhtear.com/nekojavlist&apikey=${setting.vhtearkey}`)
               bsangce2 = bsangce.data
               keluarplay = `*List update JAV*\n`
               for (let i = 0; i < bsangce2.result.length; i++) {
               keluarplay += `\n═════════════════\n\n*Judul* : ${bsangce2.result[i].title}\n*Serial JAV* : ${bsangce2.result[i].seri}\n*Link* : ${bsangce2.result[i].url}\n`
}
               reply(keluarplay)
               } catch (err) {
               console.log(err)
}
               break
        case 'nekopoicosplay':
        case 'cosplaynekopoi':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
       
               try {
               reply(mess.wait)
               bsangbe = await axios.get(`https://api.vhtear.com/nekojavcosplay&apikey=${setting.vhtearkey}`)
               bsangbe2 = bsangbe.data
               keluarplay = `*List update Cosplay JAV*\n`
               for (let i = 0; i < bsangbe2.result.length; i++) {
               keluarplay += `\n═════════════════\n\n*Judul* : ${bsangbe2.result[i].title}\n*Deskripsi* : ${bsangbe2.result[i].detail}\n*Link* : ${bsangbe2.result[i].url}\n`
}
               reply(keluarplay)
               } catch (err) {
               console.log(err)
}
               break
        case 'otakuongoing':              
               o = await onGoing()
               console.log(o)
               ot = '*「 Ongoing Otakudesu 」*'
               for (let i = 0; i < o.length; i++) {
               ot += `\n\n*Judul :* ${o[i].judul}\n*Episode :* ${o[i].eps}\n*Eps berikutnya pada hari :* ${o[i].hri}\n*Tanggal :* ${o[i].tgl}\n\n*Image :* ${o[i].thumb}`
}
               buff = await getBuffer(o[0].thumb)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
    
         
    
break
       
       case 'loli':
       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'wallml':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://shino-chan02.github.io`)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = ( await shino.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
        case 'playy':
case 'lagu':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
 *Link Channel :* ${res.all[0].author.url}
 
*File Sedang Di Kirim........*
`
/////////////sendFileFromUrl(res.all[0].image, image, {quoted: shin, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: shin, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botName}* 
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: shin, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: shin, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'play2':   
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply('Loading.... ')
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				shino.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:shin, caption: `*${anu.result.title}*`})
					break  
					
					case 'ytdl':
					case 'play':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
			  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://shino-chan02.github.io`)
              if (!q) return reply('Linknya?')
			 res = await yts(q)
			   let thumbInfo = ` 
*Youtube Download*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
 *Link Channel :* ${res.all[0].author.url}

*Silahkan pilih media yang akan di download*
`
buttons = [{buttonId:`${prefix}play2 ${q}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`${prefix}playy ${q}`,buttonText:{displayText:'🎵AUDIO'},type:1}]

imageMessage = (await shino.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}

prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{})

shino.relayWAMessage(prep)
break
					
          case 'lirik':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${setting.lolkey}&query=${query}`)
                    reply(get_result.result)
                    
               break
         case 'pinterest':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
		   if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                 reply (mess.wait)
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${setting.lolkey}&query=${query}`)
                    ini_url = ini_url.result
                    buff = await getBuffer(ini_url)
                    buttons = [{buttonId: `${prefix + command} ${query}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
        break
        case 'shopee':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
               try {
               if (args.length == 0) return reply(`Kirim perintah *${prefix}shopee [ query ]*\nContoh : ${prefix}shopee sepatu`)
               query = args.join(" ")
               reply(mess.wait)
               get_data = await fetchJson(`https://api.zeks.xyz/api/shopee?apikey=${setting.zekskey}&q=${query}`)
               get_data = get_data.data
               teks = `
*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_data.length; i++) {
teks += `\`\`\` Nama : ${get_data[i].name}\`\`\`
\`\`\` Harga : ${get_data[i].harga}\`\`\`
\`\`\` Terjual : ${get_data[i].terjual}\`\`\`
\`\`\` Lokasi : ${get_data[i].location}\`\`\`
\`\`\` Deskripsi*: ${get_data[i].desc}\`\`\`
\`\`\` Stok : ${get_data[i].stock}\`\`\`
\`\`\` Informasi : ${get_data[i].information}\`\`\`
\`\`\` Link : ${get_data[i].url}\`\`\``
}
              ini_buffer = await getBuffer(get_data[0].img_detail[0])
              shino.sendMessage(from, ini_buffer, image, { quoted: shin, caption: teks })
              } catch {
              reply(`Maaf produk ${query} tidak ditemukan`)
}
              break
       case 'playstore':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              try {
              if (args.length == 0) return reply(`Kirim perintah *${prefix}playstore [ apk ]*\nContoh : ${prefix}playstore pubg`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${setting.zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `
*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_result.length; i++) {
teks += `\`\`\` Title : ${get_result[i].title}\`\`\`
\`\`\` Harga : ${get_result[i].price}\`\`\`
\`\`\` Rate : ${get_result[i].rating}\`\`\`
\`\`\` Link : ${get_result[i].url}\`\`\`

`
}
              ini_buffer = await getBuffer(get_result[0].thumb)
              shino.sendMessage(from, ini_buffer, image, { quoted: shin, caption: teks })
              } catch {
              reply(`Maaf aplikasi ${query} tidak ditemukan`)
}
              break
       case 'yts':
       case 'ytsearch':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!q) return reply(mess.wrongFormat)
              reply(mess.wait)
              try {
              res = await yts(q)
              a = `
*Data Berhasil Didapatkan!*\n`
for (let i of res.all) {
a += `
═════════════════

*Title* : ${i.title}
*Views* : ${i.views}
*Upload* : ${i.ago}
*Durasi* : ${i.timestamp}
*Channel* : ${i.author.name}
*Link* : ${i.url}`
}
               b = a.trim()
               sendFileFromUrl(res.all[0].image, image, {quoted: shin, caption: b})
               } catch (e) {
               console.log(e)
               reply(`${e}`)
}
               break
       case 'tourl':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
               if ((isMedia && !shin.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               reply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : shin
               owgi = await shino.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               reply(res)
               } else {
               reply('kirim/reply gambar/video')
}
               break
               case 'what':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
  reply(mess.wait) 

         var imgbb = require('imgbb-uploader')
          var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : shin
               var media = await  shino.downloadAndSaveMediaMessage(encmedia)       
               imgbb('39d895963468b814fad0514bd28787e2', media)
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/wait?apikey=${setting.lolkey}&img=${data.display_url}`)
             get_result = get_result.result
             ini_txt = `Id : ${get_result.anilist_id}\n`
             ini_txt += `Id MAL : ${get_result.mal_id}\n`
             ini_txt += `English : ${get_result.title_english}\n`
             ini_txt += `Native : ${get_result.title_native}\n`
             ini_txt += `Romaji : ${get_result.title_romaji}\n`
             ini_txt += `Similarity : ${get_result.similarity}\n`
             ini_txt += `p : ${get_result.at}\n`
             ini_txt += `total episodes : ${get_result.episode}`
              video = await getBuffer(get_result.video)
             await shino.sendMessage(from, video, video, { quoted: shin, caption: ini_txt })               
             break
               
       case 'imgtourl':
       case 'img2url':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
               reply(mess.wait) 
               var imgbb = require('imgbb-uploader')
               var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : shin
               var media = await  shino.downloadAndSaveMediaMessage(encmedia)       
               imgbb('39d895963468b814fad0514bd28787e2', media)
              .then(data => {
               var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
               ibb = fs.readFileSync(media)
               shino.sendMessage(from, ibb, image, { quoted: shin, caption: caps})
})
              .catch(err => {
               throw err
})
               break
         case 'asupan': // shansekai                
              
               reply(mess.wait)
               asupan()
              .then(async (body) => {
               asupann = body.split('\n')
               asupanx = asupann[Math.floor(Math.random() * asupann.length)]
               sendMediaURL(from, `http://sansekai.my.id/ptl_repost/${asupanx}`, 'horny ya kak?.')
               console.log('Success sending video!')
})
              .catch(async (err) => {
               console.log(err)
               reply(`${err}`)
})
               break
        case 'nulis':
        case 'tulis':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
               if (args.length < 1) return reply('Yang mau di tulis apaan?')
               teks = args.join(' ')
               reply(mess.wait)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               shino.sendMessage(from, buff, image, {quoted: shin, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break
//------------------< Level >-------------------
      case 'level': 
              if (!isGroup) return reply(mess.only.group)
              let userLevel = level.getLevelingLevel(sender, _level)
              let userXp = level.getLevelingXp(sender, _level)
              let requiredXp = 10 * Math.pow(userLevel, 2) + 2912 * userLevel + 1988
              let userRank = level.getUserRank(sender, _level)
              try {
              profilePic = await shino.getProfilePicture(sender)
              } catch {
              profilePic = errorImg
}
              buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/rank?apikey=ZeroYT7&img=${profilePic}&background=https://telegra.ph/file/cd8132a44e735bb7e3d9f.jpg&username=${encodeURI(pushname)}&level=${userLevel}&ranking=${Number(userRank)}&currxp=${userXp}&xpneed=${requiredXp}`)
              teks = `*Nama :* ${pushname}\n*Xp :* ${userXp} / ${requiredXp}\n*Level :* ${userLevel}\n*Role*: *${role}*\n\n*Note : Kumpulin Xp Jika Ingin Menaikkan Level*`
              buttons = [{buttonId: `!shop`,buttonText:{displayText: `SHOP🛒`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText: `${teks}`,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
         break

case 'shop':
reply('*maaf, fitur shop belum tersedia*')
break
      
       case 'leaderboard': //Cek Leaderboard
       case 'lb':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!isGroup) return reply(mess.only.group) 
              const resp = _level
            _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
              let leaderboard =  '-----[ *LEADERBOARD* ]----\n\n'
              try {
              for (let i = 0; i < 10; i++) {
              var roles = 'Warrior III'
              if (resp[i].level <= 5) {
              roles = 'Warrior II'
              } else if (resp[i].level <= 10) {
              roles = 'Warrior I'
              } else if (resp[i].level <= 15) {
              roles = 'Elite III'
              } else if (resp[i].level <= 20) {
              roles = 'Elite II'
              } else if (resp[i].level <= 25) {
              roles = 'Elite I'
              } else if (resp[i].level <= 30) {
              roles = 'Master III'
              } else if (resp[i].level <= 35) {
              roles = 'Master II'
              } else if (resp[i].level <= 40) {
              roles = 'Master I'
              } else if (resp[i].level <= 45) {
              roles = 'GrandMaster III'
              } else if (resp[i].level <= 50) {
              roles = 'GrandMaster II'
              } else if (resp[i].level <= 55) {
              roles = 'GrandMaster I'
              } else if (resp[i].level <= 60) {
              roles = 'Epic III'
              } else if (resp[i].level <= 65) {
              roles = 'Epic II'
              } else if (resp[i].level <= 70) {
              roles = 'Epic I'
              } else if (resp[i].level <= 75) {
              roles = 'Legend III'
              } else if (resp[i].level <= 80) {
              roles = 'Legend II'
              } else if (resp[i].level <= 85) {
              roles = 'Legend I'
              } else if (resp[i].level <= 90) {
              roles = 'Mythic'
              } else if (resp[i].level <= 95) {
              roles = 'Mythical Glory'
              } else if (resp[i].level >= 100) {
              roles = 'Immortal'
} 

              leaderboard += `➸ ${i + 1}. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n➸ *Xp :* ${_level[i].xp}\n➸ *Level :* ${_level[i].level}\n➸ *Role :* ${roles}\n\n`
}
              reply(leaderboard)
              } catch (err) {
              console.error(err)
              reply('_Perlu setidaknya 10 user yang memiliki level di database!_')
}
              break
//------------------< Stalk >-------------------
      case 'stalkgithub':
      case 'githubstalk':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (args.length == 0) return reply(`Example: ${prefix + command} shino-chan02`)
              reply(mess.wait)
              username = args[0]
              ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${setting.lolkey}`)
              ini_result = ini_result.result
              ini_buffer = await getBuffer(ini_result.avatar)
              ini_txt = `
*Data Berhasil Didapatkan!*
\`\`\` Username : ${ini_result.name}\`\`\`
\`\`\` Public Repo : ${ini_result.public_repos}\`\`\`
\`\`\` Public Gists : ${ini_result.public_gists}\`\`\`
\`\`\` Pengikut : ${ini_result.followers}\`\`\`
\`\`\` Following : ${ini_result.following}\`\`\`
\`\`\` Mengikuti : ${ini_result.bio}\`\`\`
\`\`\` Link : ${ini_result.url}\`\`\`
`
             shino.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
      case 'stalkig':
      case 'igstalk':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (args.length == 0) return reply(`Example: ${prefix + command} shino.chan26`)
             reply(mess.wait)
             username = args[0]
             ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${setting.lolkey}`)
             ini_result = ini_result.result
             ini_buffer = await getBuffer(ini_result.photo_profile)
             ini_txt = `
*Data Berhasil Didapatkan!*
\`\`\` Username : ${ini_result.username}\`\`\`
\`\`\` Nama : ${ini_result.fullname}\`\`\`
\`\`\` Pengikut : ${ini_result.followers}\`\`\`
\`\`\` Mengikuti : ${ini_result.following}\`\`\`
\`\`\` Deskripsi : ${ini_result.bio}\`\`\`
\`\`\` Link : https://instagram.com/${ini_result.username}\`\`\`
`
             shino.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
      case 'stalktiktok':
      case 'tiktokstalk':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (args.length == 0) return reply(`Example: ${prefix + command} marz.hiatus`)
             reply(mess.wait)
             stalk_toktok = args[0]
             get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${stalk_toktok}?apikey=${setting.lolkey}`)
             get_result = get_result.result
             pp_tt = await getBuffer(get_result.user_picture)
             ini_txt = `
*Data Berhasil Didapatkan!*
\`\`\` Username : ${get_result.username}\`\`\`
\`\`\` Nama : ${get_result.nickname}\`\`\`
\`\`\` Pengikut : ${get_result.followers}\`\`\`
\`\`\` Mengikuti : ${get_result.followings}\`\`\`
\`\`\` Likes : ${get_result.likes}\`\`\`
\`\`\` Video : ${get_result.video}\`\`\`
\`\`\` Deskripsi : ${get_result.bio}\`\`\`
`
              shino.sendMessage(from, pp_tt, image, { quoted: shin, caption: ini_txt, thumbnail: Buffer.alloc(0) })
              break
       case 'iguser':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              try {
              if (args.length == 0) return reply(`Kirim perintah *${prefix}iguser [ username ]*\nContoh : ${prefix}iguser jessnolimit`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=${setting.zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `*「 INSTAGRAM USER 」*\n\n*Hasil Pencarian : ${query}*\n\n`
              for(let i = 0; i < get_result.length; i++) {
              teks += `*Username* : ${get_result[i].username}\n*Full name*: ${get_result[i].full_name}\n*Akun private* : ${get_result[i].private_user}\n*Verified*: ${get_result[i].verified_user}\n*Link*: https://instagram.com/${get_result[i].username}\n\n`
}
              ini_buffer = await getBuffer(get_result[0].profile_pic)
              shino.sendMessage(from, ini_buffer, image, { quoted: shin, caption: teks })
              } catch {
              reply(`Maaf username ${query} tidak ditemukan`)
}
              break
//------------------< Sticker/Tools >-------------------

       case 'dadu': // by CHIKAA CHANTEKKXXZZ
              reply(mess.wait)
              dadu()
             .then(async (body) => {
              dadugerak = body.split('\n')
              dadugerakx = dadugerak[Math.floor(Math.random() * dadugerak.length)]
              sendWebp(from, dadugerakx)
})
             .catch(async (err) => {
              console.error(err)
              reply('Error!')
})
              break
      case 'doge':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
case 'unblock':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (!isAdmin) return reply('*Only Admin bot*')
				    shino.blockUser (`${body.slice(10)}@c.us`, "remove")
					shino.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
case 'unblock':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (!isAdmin) return reply('*Only Admin bot*')
				    shino.blockUser (`${body.slice(10)}@c.us`, "add")
					shino.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
       case 'patrick':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'gura':
       case 'gawgura':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'animestick':
       case 'stickeranime':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              sendWebp(from, pjrr)
}
)
              break
       case 'telesticker': 
       case 'telestiker':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!q) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
              reply(mess.wait)
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${setting.lolkey}&url=${args[0]}`)
              ini_sticker = ini_url.result.sticker
              reply('Sending '+ ini_sticker.length +' stickers...')
              for (sticker_ in ini_sticker) {
              ini_buffer = await getBuffer(ini_sticker[sticker_])
              shino.sendMessage(from, ini_buffer, sticker, {})
}
              break
       case 'semoji':
       case 'emoji':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)
              emoji = args[0]
              try {
              emoji = encodeURI(emoji[0])
              } catch { 
              emoji = encodeURI(emoji)
 }
              ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${setting.lolkey}`)
              await shino.sendMessage(from, ini_buffer, sticker, { quoted: shin })
              break
case 'ttp':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
reply('wait....')
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
sendStickerUrl(from, anjay)
break
       case 'attp':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (args.length == 0) return reply(`Example: ${prefix + command} shino`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              shino.sendMessage(from, buffer, sticker, { quoted: shin })
              break
              case 'tg': 
              
reply('Loading.... ')
 encmedia = isQuotedImage ? JSON.parse(JSON.stringify(shin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : shin
media = await shino.downloadAndSaveMediaMessage(encmedia)
tolink = await uptotele(media)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${tolink}`
sendStickerUrl(from, `${anu1}`)

break

           case 'ttg':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
           teks = args.join(' ')
                mek = encodeURIComponent(teks)
                if (args.length < 2) return 
                let ane = await getBuffer(`https://api.lolhuman.xyz/api/attp?apikey=${setting.lolkey}&text=${mek}`)
                fs.writeFileSync('./sticker/ttg.webp', ane)
                exec(`webpmux -set exif ./sticker/data.exif ./sticker/ttg.webp -o ./sticker/ttg.webp`, async (error) => {
                    if (error) return reply(mess.error.api)
                    shino.sendSticker(from, fs.readFileSync(`./sticker/ttg.webp`), sticker, {quoted: shin})
                    limitAdd(sender, limit)
                    fs.unlinkSync(`./sticker/ttg.webp`)	
                })
            
              break
       case 'loliv':
       case 'lolivid':
       case 'lolivideo':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              reply(mess.wait)
              anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
             .then(async (body) => {
              anu = body.split('\n')
              anu = anu[Math.floor(Math.random() * anu.length)]
              sendMediaURL(from, anu)
})
             .catch(async (err) => {
              console.error(err)
              reply(`${err}`)
})
              break
       case 'gifstiker':
				case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')     
if ((isMedia && !shin.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(shin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : shin
            const media = await shino.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                shino.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: shin})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && shin.message.videoMessage.seconds < 11 || isQuotedVideo && shin.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(shin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : shin
                const media = await shino.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            shino.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: shin})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
       case 'take':
       case 'colong':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!isQuotedSticker) return reply('Stiker aja om')
              encmedia = JSON.parse(JSON.strngify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await shino.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : `${pushname}`
              dua = typeof anu[1] !== 'undefined' ? anu[1] : `UwU`
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, shino, shin, from)
              break
       case 'delwm':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!isQuotedSticker) return reply('Stiker aja om')
              encmedia = JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await shino.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : ``
              dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, shino, shin, from)
              break
       case 'stikerwm':
       case 'stickerwm':
       case 'swm':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              var a = arg.split("|")[0];
              var b = arg.split("|")[1];
              if (isMedia && !shin.message.videoMessage || isQuotedImage ) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : shin
              media = await shino.downloadAndSaveMediaMessage(encmedia)
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              shino.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: shin })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              shino.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: shin })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out) 
              } else if ((isMedia && shin.message.videoMessage.seconds < 11 || isQuotedVideo && shin.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : shin
              const media = await shino.downloadAndSaveMediaMessage(encmedia)
              pe = args.join('')
              var a = pe.split("|")[0];
              var b = pe.split("|")[1];
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              shino.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: shin })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              shino.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: shin })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out)       
              } else {
              reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
}
              break
      case 'toimg':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!isQuotedSticker) return reply('reply stickernya')
              reply(mess.wait)
              encmedia = JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await shino.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              shino.sendMessage(from, buffer, image, {quoted: shin, caption: 'Nih'})
              fs.unlinkSync(ran)
})
              break
       case 'smeme': 
reply('Loading.... ')
top = arg.split('|')[0]
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !shin.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : shin 
owgi = await  shino.downloadAndSaveMediaMessage(ger)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerUrl(from, `${anu1}`)
} else {
reply('Gunakan foto/stiker!')
}
break

       case 'memeimg':
       case 'memegen':                    
              top = arg.split('|')[0]
              bottom = arg.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if ((isMedia && !shin.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              reply(mess.wait)
              ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : shin 
              owgi = await shino.downloadAndSaveMediaMessage(ger)
              anu = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
              teks = `${anu.display_url}`
              ranp = getRandom('.gif')
              rano = getRandom('.webp')
              anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
              sendMediaURL(from, `${anu1}`, mess.success)
              } else {
              reply('Gunakan foto/stiker!')
}
               break
        case 'togif':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
               if ((isMedia && !shin.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : shin
               mediaaa = await shino.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               shino.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: shin, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tovideo':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
               if ((isMedia && !shin.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmedia = JSON.parse(JSON.stringify(shin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
               mediaaa = await shino.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               shino.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: shin, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tomp3':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
shino.updatePresence(from, Presence.composing)
if (!isQuotedVideo) return reply('Itu bukan video')
encmedia = JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await shino.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(mess.error)
buffer = fs.readFileSync(ran)
shino.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4'})
fs.unlinkSync(ran)
})
break

//------------------< Ingfo Bot >-------------------
      case 'runtime':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              textImg(`{runtime(process.uptime())`)
              break
       case 'donate': 
       case 'donasi':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              textImg(setting.txtDonasi)
              break
       
      case 'ping':
      case 'speed':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              timestampe = speed();
              latensie = speed() - timestampe
              reply(`\shino merespon dalam ${latensie.toFixed(4)} Sec`)
              break
      case 'botstat':
      case 'stats':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              groups = shino.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = shino.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await shino.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
teks = `\`\`\`BOT STATISTICS\`\`\`
\`\`\` Group Chats : ${groups.length}\`\`\`
\`\`\` Private Chats : ${privat.length}\`\`\`
\`\`\` Total Chats : ${totalChat.length}\`\`\`
\`\`\` Speed : ${latensie.toFixed(4)} _Second_\`\`\`

\`\`\`OTHER STATISTICS\`\`\`
\`\`\` Baterai : ${baterai}% ${charger}\`\`\`
\`\`\` Ram Usage : ${ram2}\`\`\`
\`\`\` Platform : ${os.platform()}\`\`\`
\`\`\` Hostname : ${os.hostname()}\`\`\`
\`\`\` Uptime : ${runtime(process.uptime())}\`\`\`
\`\`\` Wa Version: ${shino.user.phone.wa_version}\`\`\`
\`\`\` Os Version: ${shino.user.phone.os_version}\`\`\``
             reply(teks)
             break  
//------------------< Owner >-------------------
      case 'addupdate':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (!isOwner) return reply(mess.only.owner)
             if (!q) return reply(`Example: ${command} update fitur`)
           _update.push(q)
             fs.writeFileSync('./database/bot/update.json', JSON.stringify(_update))
             reply(`Update fitur berhasil ditambahkan ke database!`)
             break
      case 'update':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
             for (let i of _update) {
             updateList += `࿃ *${i.replace(_update)}*\n\n`
}
             textImg(updateList)
             break
      case 'reset':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (!isOwner) return reply(mess.only.owner)
             var reset = []
             glimit = reset
           _update = reset
             console.log('Hang tight, it\'s time to reset')
             fs.writeFileSync('./database/bot/glimit.json', JSON.stringify(glimit))
             fs.readFileSync('./database/bot/update.json', JSON.stringify(_update))
             textImg('Oke Desu ~')
             break
      case 'exif':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (!isOwner) return  reply(mess.only.owner)
             if (!q) return reply(mess.wrongFormat)
             if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
             exif.create(arg.split('|')[0], arg.split('|')[1])
             reply('sukses')
             break	
      case 'join': 
             if (!q) return reply('Linknya?')
             if (!isOwner) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = shino.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
      case 'eval':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             try {
             if (!isOwner) return
             sy = args.join(' ')
             return eval(sy)
             } catch(e) {
             reply(`${e}`)
}
             break
      case 'getquoted':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             reply(JSON.stringify(shin.message.extendedTextMessage.contextInfo, null, 3))
             break
      case 'bc':
      case 'broadcast':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu = await shino.chats.all()
             if (isMedia && !shin.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : shin
             bc = await shino.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             shino.sendMessage(_.jid, bc, image, {quoted:shin,caption: `*「  SHINO NEWS 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             sendMess(_.jid, `*「 Shino NEWS 」*\n\n${body.slice(4)}`)
}
             reply('Suksess broadcast')
}
             break
case 'admin':
				if (!isOwner) return reply(mess.only.owner)
				mentioned = shin.message.extendedTextMessage.contextInfo.mentionedJid
				admm = body.slice(7)
				adm.push(mentioned[0])
				fs.writeFileSync('./database/user/admin.json', JSON.stringify(adm))
				reply(`Berhasil menambahkan admin bot ${mentioned[0]}`)
				break
                case 'unadmin':
                mentioned = shin.message.extendedTextMessage.contextInfo.mentionedJid
				if (!isOwner) return reply(mess.only.owner)
				admm = body.slice(9)
				adm.splice(mentioned[0])
				fs.writeFileSync('./database/user/admin.json', JSON.stringify(adm))
				reply(`Berhasil menghapus admin bot ${mentioned[0]}`)
				break
case 'linkgroup':
case 'linkgc':
case 'linkgrup':
case 'gruplink':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await shino.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
             case 'bc2':
      case 'broadcast2':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu = await shino.chats.all()
             if (isMedia && !shin.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : shin
             bc = await shino.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             shino.sendMessage(_.jid, bc, image, {quoted:shin,caption: `*「 Shino NEWS 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
shino.sendMessage(_.jid, 
			{"contentText": `*「 Shino NEWS 」*\n\n${body.slice(4)}`,
			"footerText": 'Shino',
			"buttons": [
			{"buttonId": `#command`,
			"buttonText": {"displayText": "📙BACK TO MENU"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
             break
      case 'clearall':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (!isOwner) return  reply(mess.only.owner)
             anu = await shino.chats.all()
             shino.setMaxListeners(25)
             for (let _ of anu) {
             shino.deleteChat(_.jid)
}
             reply('Sukses delete all chat :)')
             break
      case 'term':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (!isOwner) return
             if (!q) return
             exec(q, (err, stdout) => {
             if (err) return reply(`${err}`)
             if (stdout) {
             reply(stdout)
}
})
             break 
      case 'shutdown':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (!isOwner) return 
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
      case 'restart':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (!isOwner) return 
             exec(`node main`)
             reply('_Restarting Bot Success_')
             break
      case 'leaveall':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (!isOwner) return  reply(mess.only.owner)
             let totalgroup = shino.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             shino.groupLeave(id)
}
             break
//------------------< G R U P >-------------------
      case 'kick':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          
             if (!isGroup) return reply(mess.only.group)
             kick(from, mentionUser)
             break
      case 'add':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (shin.message.extendedTextMessage === null || shin.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             shino.groupAdd(from, [entah])
             } else {
             entah = shin.message.extendedTextMessage.contextInfo.participant
             shino.groupAdd(from, [entah])
}
             break
      case 'promote':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (shin.message.extendedTextMessage === null || shin.message.extendedTextMessage === undefined) return;
             if (shin.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = shin.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             shino.groupMakeAdmin(from, mems_ids)
             } else {
             shino.groupMakeAdmin(from, entah)
}
             } else {
             entah = shin.message.extendedTextMessage.contextInfo.participant
             shino.groupMakeAdmin(from, [entah])
}
             break
      case 'demote':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (shin.message.extendedTextMessage === null || shin.message.extendedTextMessage === undefined) return;
             if (shin.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = shin.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             shino.groupDemoteAdmin(from, mems_ids)
             } else {
             shino.groupDemoteAdmin(from, [entah[0]])
}
             } else {
             entah = shin.message.extendedTextMessage.contextInfo.participant
             shino.groupDemoteAdmin(from, [entah])
}
             break
       case 'setgrupname':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              shino.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setdesc':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              shino.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setppgrup':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(shin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : shin
              let media = await shino.downloadMediaMessage(encmedia)
              shino.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
       case 'me':
       case 'profile':
       if (isBanned) return reply('Maaf kamu sudah terbenned!')
              shino.updatePresence(from, Presence.composing)
              try {
              profil = await shino.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = errorImg
}
              thu = await shino.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
              me = shino.user
              uptime = process.uptime()
              profile = `-----[ *USER INFO* ]-----\n\n➸ *Username:* ${pushname}\n➸ *Status:* ${thu.status}\n➸ *Premium*: ${isPremium ? 'Ya' : 'No'}\n➸ *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}\n➸ *Prefix :* !\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Level*: ${Levelnye}\n➸ *XP*: ${Xpluu} / ${requiredXplu}`
              buff = await getBuffer(profil)
              shino.sendMessage(from, buff, image, {quoted: shin, caption: profile})
              break
       case 'afk': 
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
              reply(aluty)
              break
  case 'shino':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
 buffer = await getBuffer(`https://telegra.ph/file/f7870353e725da523d3ae.jpg`)
 shino.sendMessage(from, buffer, image, {quoted: shin}) 
 break
       case 'infogrup':
       case 'infogrouup':
       case 'grupinfo':
       case 'groupinfo':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!isGroup) return reply(mess.only.group)
              try {
              var pic = await shino.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
              shino.sendMessage(from, await getBuffer(pic), image, {quoted: shin, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
       case 'tagall':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
       case 'kickall': // Anti Banned
              for (let i of groupMembers) {
              await kickMember(from, [i.jid])
}
              break
       case 'leave':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (!isOwner) return 
              if (!isGroup) return reply(mess.only.group)
              setTimeout( () => {
              shino.groupLeave(from) 
              }, 2000)
              setTimeout( () => {
              reply('Byee...')
              }, 0)
              break
       case 'online':
       case 'listonline':
       case 'here':                
       if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(shino.chats.get(ido).presences), shino.user.jid]
             shino.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: shin, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
      case 'sider':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await shino.messageInfo(from, shin.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Dibaca oleh:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Tersampaikan pada:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('Reply chat bot!')
}
             break
//------------------< Fun >-------------------
       case 'wangy':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
       case 'mining':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              var mining = randomNomor(1000)
              atm.addKoinUser(sender, mining, _uang)
              await reply(`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`)
              break
       case 'waktu':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
              break
       case 'cekmati':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!q) return reply(mess.wrongFormat)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
       case 'togel':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              reply(mess.wait)
              try {
              dataplai = await axios.get(`https://api.vhtear.com/togel&apikey=${setting.vhtearkey}`)
              dataplay = dataplai.data.result
              let tomgel = `*Huzzzzz*\n`
              for (let i = 0; i < dataplay.hasil.length; i++) {
              tomgel += `\n═════════════════\n\n*Negara* : ${dataplay.hasil[i].Negara}\n*Result* : ${dataplay.hasil[i].Senin}\n*Result* : ${dataplay.hasil[i].Selasa}\n*Result* : ${dataplay.hasil[i].Rabu}\n*Result* : ${dataplay.hasil[i].Kamis}\n*Result* : ${dataplay.hasil[i].Jumat}\n*Result* : ${dataplay.hasil[i].Sabtu}\n*Result* : ${dataplay.hasil[i].Minggu}\n`
}
              sendText(from, tomgel)
              } catch (err) {
              console.log(err)
}
              break
       case 'toxic':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              Toxic().then(toxic => {
              reply (toxic)
})
              break
        case 'citacita':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
              const cita3 = cita[Math.floor(Math.random() * cita.length)]
              cita2 = await getBuffer(cita3)
              shino.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted: shin})
              break
       case 'apakah':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              shino.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: shin })
              break
       case 'rate':
       case 'nilai':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              rate = body.slice(1)
              const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
              const te = ra[Math.floor(Math.random() * ra.length)]
              shino.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: shin })
              break
      case 'bay':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
      reply('Sayonara buat yang pergi😔\n Semoga amal ibadahnya di terima :)')
      break
      case 'selamatdatang':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
      reply('welcome kak jangan lupa patuhi peraturan  grup ya kaka \n Semoga betah👏')
      break
       case 'gantengcek':
       case 'cekganteng':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              shino.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: shin })
              break
       case 'cantikcek':
       case 'cekcantik':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              shino.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: shin })
              break
       case 'cekwatak':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              var namao = pushname
              var prfx = await shino.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colshin','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              break
       case 'hobby':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              hobby = body.slice(1)
              const by = hobby[Math.floor(Math.random() * hobby.length)]
              shino.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: shin })
              break
       case 'bisakah':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              shino.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: shin })
              break
       case 'kapankah':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              shino.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: shin })
              break
       case 'truth':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
              const ttrth = trut[Math.floor(Math.random() * trut.length)]
              truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              shino.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: shin })
              break
       case 'dare':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
              const der = dare[Math.floor(Math.random() * dare.length)]
              buff = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:'*Dare*\n\n'+ der,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
               break		
       case 'jadian':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
       case 'cantik':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              membr = []
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length)]
              const sips = pushname[Math.floor(Math.random() * msk.length)]
              teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              break
       case 'ganteng':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
       case 'babi':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'beban':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break
//------------------< Lainnya >-------------------
        case 'getpp':
        case 'getpic':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
               if (shin.message.extendedTextMessage === null || shin.message.extendedTextMessage === undefined) {
               linkpp = await shino.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               shino.sendMessage(from, buffer, image, {caption: "Nih", quoted: shin })
               } else if (shin.message.extendedTextMessage.contextInfo.mentionedJid === null || shin.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
               mberr = shin.message.extendedTextMessage.contextInfo.participant
               linkpp = await shino.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               shino.sendMessage(from, buffer, image, { quoted: shin, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
               } else if (shin.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
               mberr = shin.message.extendedTextMessage.contextInfo.mentionedJid[0]
               linkpp = await shino.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               shino.sendMessage(from, buffer, image, { quoted: shin, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
               break
        case 'd':
        case 'del':
        case 'delete':
if (isBanned) return reply('Maaf kamu sudah terbenned!') // MR.CYSER
               try {
               if (shin.message.extendedTextMessage === undefined || shin.message.extendedTextMessage === null) return reply('Reply chat bot')
               shino.deleteMessage(from, {id: shin.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Reply chat bot')
}
               break
        case 'tes':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
               reply('Okeh nyala')
               break
case 'media':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
if (!q) return reply('Urlnya?')
reply(mess.wait)
sendMediaURL(from, `${args[0]}`, "").catch(() => reply('Error'))
break
      case 'get':
      case 'fetch': //ambil dari nuru
             if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
             res = await fetch(q)
             if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
             delete res
             throw `Content-Length: ${res.headers.get('content-length')}`
}
             if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
             txtx = await res.buffer()
             try {
             txtx = util.format(JSON.parse(txtx+''))
             } catch (e) {
             txtx = txtx + ''
             } finally {
             reply(txtx.slice(0, 65536) + '')
}
             break
      case 'searchmsg': 
case 'caripesan':  //by ANU TEAM
             if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${prefix + command} halo|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return reply('Harus berupa Angka!')
             batas = parseInt(sampai) + 1
             if (batas > 30) return reply('Maks 30!')
             reply(mess.wait)
             cok = await shino.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
             if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             shino.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
             } catch (e) {
             return reply(String(e))
}
             } else {
             reply(`Format salah tod, ini contoh format yang benar : ${prefix + command} halo|10`)
}
             break
       case 'lolkey':
       case 'cekapikey':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (args.length < 1) return reply(`Ketik ${prefix}lolkey [Apikeynya]`) 
              anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${q}`)
              teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://lolhuman.herokuapp.com`
              shino.sendMessage(from, teks, text, {quoted: shin})
              break
       case 'bugreport':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              shino.sendMessage('62859194143712@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              break
       case 'readall':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              totalchat.map( async ({ jid }) => {
              await shino.chatRead(jid)
})
              reply(`\`\`\`Berhasil membaca ${unread.length} Chat !\`\`\``)
              console.log(totalchat.length)
              break	

//------------------< Enable/Disable >-------------------
       case 'leveling':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!isGroup) return reply(mess.only.group)
              if (ar[0] === 'enable') {
              if (isLevelingOn) return reply('Fitur leveling telah diaktifkan sebelumnya.')
            _leveling.push(from)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              reply('Fitur leveling berhasil diaktifkan.')
              } else if (ar[0] === 'disable') {
              var anup = _leveling.indexOf(from)
            _leveling.splice(anup, 1)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              reply('Fitur leveling berhasil dimatikan.')
              } else {
              reply('Pilih enable atau disable!')
}
              break
       case 'antilink':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
              break
       case 'welcome':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
        case 'mute':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
               if (!isGroupAdmins) return reply(mess.only.admin)
               if (!isGroup) return reply(mess.only.group)
               if (isMuted) return reply(`udah di mute`)
               mute.push(from)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`_sukses mengaktifkan mode mute di group ini_`)
               break
               case 'unmute':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
               if (!isGroupAdmins) return reply(mess.only.admin)
               if (!isGroup) return reply(mess.only.group)
               anu = mute.indexOf(from)              
               mute.splice(anu, 1)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`_sukses menonaktifkan mode mute di group ini_`)
               break
        case 'grupsetting':
        case 'groupsetting':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins) return reply(mess.only.admin)
               list = []
               com = [`group enable`,`leveling enable`,`welcome enable`,`antilink enable`,`mute enable`]
               comm = [`group disable`,`leveling disable`,`welcome disable`,`antilink disable`,`mute disable`]
               listnya = [`Group open/close`,`Leveling enable/disable`,`Welcome enable/disable`,`Antilink enable/disable`,`Mute enable/disable`]
               suruh = [`Enable`, `Disable`]
               fiturname = [`Group`,`Leveling`,`Welcome`,`Antilink`,`Mute`]
               startnum = 0; let startnu = 0; let startn = 0;let start = 0
               startnumm = 1
               for (let x of com) {
               var yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        description: `\nMengaktifkan ${fiturname[startnu++]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        description: `\nMenonaktifkan ${fiturname[startn++]}`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        list.push(yy)
           }
             listmsg(from, `Group Setting`, `Atur Settingan Grup anda disini......`, list)
             break
case 'ban':
				if (!isAdmin) return reply('*ONLY BOT ADMIN*')
				mentioned = shin.message.extendedTextMessage.contextInfo.mentionedJid
				bnnd = body.slice(5)
				ban.push(mentioned[0])
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : ${mentioned[0]}`)
				break
		case 'unban':
				if (!isAdmin) return reply('*ONLY BOT ADMIN*')
				mentioned = shin.message.extendedTextMessage.contextInfo.mentionedJid
				bnnd = body.slice(7)
				ban.splice(mentioned[0])
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Nomor ${mentioned[0]} telah di unban!`)
				break
                case 'banlist':
                case 'listban':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
				shino.updatePresence(from, Presence.composing) 
				teks = 'This is list of banned number :\n'
				for (let benn of ban) {
					teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
				shino.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
				break
      case 'group':
      case 'grup':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (!isGroup) return reply(mess.only.group)
             if (!isGroupAdmins) return reply(mess.only.admin)
             if (!isBotGroupAdmins) return reply(mess.only.Badmin)
             if (args[0] === 'open') {
shino.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'close') {
shino.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
break
//------------------< Menunya 
//------------------< Menunya Bang:v >-------------------
      case 'jadibot':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (!isOwner) return  reply(mess.only.owner)
             const _0x5f10=['1ubdcbO','202171TkLMwo','284052dVVNCo','42JxCsde','24890OaehfM','./jadibot.js','26826mdmYhJ','176EqLcNV','55194kArISZ','6GRvhmu','314893OwJFDH'];const _0x470b71=_0x5476;function _0x5476(_0x56372d,_0x51b653){return _0x5476=function(_0x5f107a,_0x54761a){_0x5f107a=_0x5f107a-0xd8;let _0x336fbf=_0x5f10[_0x5f107a];return _0x336fbf;},_0x5476(_0x56372d,_0x51b653);}(function(_0x4b0f8a,_0x1f534e){const _0x1acfb6=_0x5476;while(!![]){try{const _0x55ab94=-parseInt(_0x1acfb6(0xdc))+parseInt(_0x1acfb6(0xe2))*parseInt(_0x1acfb6(0xde))+-parseInt(_0x1acfb6(0xe1))*parseInt(_0x1acfb6(0xdb))+parseInt(_0x1acfb6(0xda))+-parseInt(_0x1acfb6(0xdd))+parseInt(_0x1acfb6(0xdf))+parseInt(_0x1acfb6(0xd8))*parseInt(_0x1acfb6(0xd9));if(_0x55ab94===_0x1f534e)break;else _0x4b0f8a['push'](_0x4b0f8a['shift']());}catch(_0x4a8ec9){_0x4b0f8a['push'](_0x4b0f8a['shift']());}}}(_0x5f10,0x285aa));const {jadibot}=require(_0x470b71(0xe0));jadibot(shino,from,sender,reply,shin);
             break
      case 'stopjadibot':
      case 'stopbot':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             const _0x1427=['2584oRLTbU','3849mFwfyJ','./jadibot.js','71LvrzJG','286372cCrXrQ','1yPMtDu','1AjjlYF','456046PuhVDs','394eRcMph','746574pwCcoE','625699UVPwUh','1029671oWZdcF'];const _0x49a386=_0x39bb;function _0x39bb(_0x399e0b,_0x2d0c73){return _0x39bb=function(_0x1427be,_0x39bbc5){_0x1427be=_0x1427be-0x132;let _0x12e62d=_0x1427[_0x1427be];return _0x12e62d;},_0x39bb(_0x399e0b,_0x2d0c73);}(function(_0x49c476,_0x4d8227){const _0x22a1e5=_0x39bb;while(!![]){try{const _0x311704=parseInt(_0x22a1e5(0x138))*parseInt(_0x22a1e5(0x13c))+parseInt(_0x22a1e5(0x13b))*parseInt(_0x22a1e5(0x136))+-parseInt(_0x22a1e5(0x134))+-parseInt(_0x22a1e5(0x13d))*parseInt(_0x22a1e5(0x133))+parseInt(_0x22a1e5(0x137))+-parseInt(_0x22a1e5(0x139))+-parseInt(_0x22a1e5(0x13a))*parseInt(_0x22a1e5(0x135));if(_0x311704===_0x4d8227)break;else _0x49c476['push'](_0x49c476['shift']());}catch(_0x25e28b){_0x49c476['push'](_0x49c476['shift']());}}}(_0x1427,0x8b9f1));const {stopjadibot}=require(_0x49a386(0x132));stopjadibot(shino,from,sender,shin);
             break
default:

if (budy.includes(`cekprefix`)) {
                  reply(`prefix : !`)
                  }

                  
if (budy.includes("Numa")){

		shino.updatePresence(from, Presence.composing)

		const loli = fs.readFileSync('./assets/numa')

        shino.sendMessage(from, loli, MessageType.audio, {quoted: shin, mimetype: 'audio/mp4', ptt:true})

        const d = fs.readFileSync('./sticker/jget.webp');

        shino.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj numa numa yei", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})

        }
        if (budy.includes("#m")){
}
if (budy.includes("!m")){
}
        if (budy.includes("#a")){
}
if (budy.includes("!a")){
}
        if (budy.includes("#s")){
}
if (budy.includes("!s")){
}
if (budy.includes("bot")){
}
if (budy.includes("Bot")){
}



if (fs.existsSync(`./media/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   shino.sendMessage(from, starGame, text, {quoted: shin, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./media/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		shino.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: shin, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./media/" + from + ".json");
	}
}

if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  shino.sendMessage(from, ucapan, text, {quoted: shin, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
shino.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:shin,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
shino.sendMessage(from, ucapan1, text, {quoted: shin, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe ??*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
shino.sendMessage(from, ucapan, text, {quoted: shin, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
shino.sendMessage(from, ucapan1, text, {quoted:shin, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*??Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 shino.sendMessage(from, ucapan, text, {quoted: shin, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (/^=?>/.test(budy) && (isOwner || shin.key.fromMe)){

let parse = /^=>/.test(budy) ? budy.replace(/^=>/,'return') : budy.replace(/^>/,'')

try{

let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })

return reply(require('util').format(evaluate))

} catch(e){



 return reply(require('util').format(e))



}
}
if (isGroup && isCmd && !shin.key.fromMe){
	tek = `© Shino`
teks = `Maaf @${senderr.split('@')[0]}, command ${prefix + command} tidak ada dalam menu`
shino.sendMessage (from, teks, tek, 'extended text messages', {quoted:shin, mentionedJid:[senderr]})
}
	} 
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Pesan : ${budy} Dari`, color(pushname))
}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'cyan'))
        }
	}
}



