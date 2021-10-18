const {
	MessageType
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")

const { getBuffer } = require('../lib/myfunc')
const { color, bgcolor } = require('../lib/color')
join = 'Selamat Datang'
leave = 'Selamat Tinggal'

teks = `Selamat Datang`
let setting = JSON.parse(fs.readFileSync('./setting.json'))

module.exports = welcome = async (shino, anu) => {
	    const welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
	    const isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
		try {
			    mem = anu.participants[0]
			    console.log(anu)
                try {
                pp_user = await shino.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
                try {
                pp_grup = await shino.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            if (anu.action == 'add' && mem.includes(shino.user.jid)) {
            shino.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot Ketik !menu', 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(shino.user.jid)) {
             if (!welkom.includes(anu.jid)) return
                mdata = await shino.groupMetadata(anu.jid)
           
                memeg = mdata.participants.length
            	num = anu.participants[0]
                let v = shino.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
            buff = await getBuffer(`https://api.lolhuman.xyz/api/base/welcome?apikey=${setting.lolkey}&img1=${pp_user}&img2=${pp_grup}&background=https://telegra.ph/file/559d40a73f54e257b0b2e.jpg&username=${encodeURI(anu_user)}&member=${memeg}&groupname= ${encodeURI(mdata.subject)}`)
        buttons = [

          { buttonId: `!selamatdatang`, buttonText: { displayText: "Welcome👋" }, type: 1 },

        ];

        imageMsg = (

          await shino.prepareMessageMedia(buff, "imageMessage", {

            thumbnail: buff,

          })

        ).imageMessage;

        buttonsMessage = {

          contentText: `${teks}`,

          footerText: "© Shino",

          imageMessage: imageMsg,

          buttons: buttons,

          headerType: 4,

        };

        prep = await shino.prepareMessageFromContent(

          mdata.id,

          { buttonsMessage },

          {}

        );

        shino.relayWAMessage(prep);

      }

      if (anu.action == "remove" && !mem.includes(shino.user.jid)) {

        mdata = await shino.groupMetadata(anu.jid);

        num = anu.participants[0];

        let w = shino.contacts[num] || { notify: num.replace(/@.+/, "") };

        anu_user = w.vname || w.notify || num.split("@")[0];

        memeg = mdata.participants.length;

        out = `${leave}`;

        buff = await getBuffer(`https://api.lolhuman.xyz/api/base/leave?apikey=${setting.lolkey}&img1=${pp_user}&img2=${pp_grup}&background=https://telegra.ph/file/559d40a73f54e257b0b2e.jpg&username=${encodeURI(anu_user)}&member=${memeg}&groupname= ${encodeURI(mdata.subject)}`)
            
        buttons = [

          { buttonId: `!bay`, buttonText: { displayText: "Sayonara👋" }, type: 1 },];

        imageMsg = (

          await shino.prepareMessageMedia(buff, "imageMessage", {

            thumbnail: buff,

          })

        ).imageMessage;

        buttonsMessage = {

          contentText: `Selamat Tinggal`,

          footerText: "© Shino",

          imageMessage: imageMsg,

          buttons: buttons,

          headerType: 4,

        };

        prep = await shino.prepareMessageFromContent(

          mdata.id,

          { buttonsMessage },

          {}

        );

        shino.relayWAMessage(prep);
        }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}
