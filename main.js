const { WAConnection, Browsers } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
baterai = 'unknown'
charging = 'unknown'

//nocache
require('./shin.js')
nocache('../shin.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))
require('./message/group.js')
nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))

const starts = async (shin = new WAConnection()) => {
	shin.logger.level = 'warn'
	console.log(color(figlet.textSync('© Shino', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[ Shino ]', 'red'), color('Hello Owner'));
	shin.browserDescription = ["Shino", "Chrome", "3.0.0"];

	// Menunggu QR
	shin.on('qr', () => {
		console.log(color('[', 'pink'), color('!', 'red'), color(']', 'pink'), color('Silahkan Scan kak'))
	})

	// Menghubungkan
	fs.existsSync(`./${setting.sessionName}.json`) && shin.loadAuthInfo(`./${setting.sessionName}.json`)
	shin.on('connecting', () => {
		console.log(color('[ Shino ]', 'red'), color('Menyambungkan'));
	})
const spinner = { 
  "interval": 120,
  "frames": [
    "S",
    "Sh",
    "Shi",
    "Shin",
    "Shino"
  ]}

	//connect
	shin.on('open', () => {
		console.log(color('[ Shino ]', 'yellow'), color('BOT SUDAH AKTIF'));
	})

	// session
	await shin.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(shin.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	shin.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	shin.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// welcome
	shin.on('group-participants-update', async (anu) => {
		await welcome(shin, anu)
	})

	shin.on('chat-update', async (message) => {
		require('./shin.js')(shin, message)
	})
}

starts()
