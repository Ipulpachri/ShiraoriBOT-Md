import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
 conn.reply(m.chat, `––––––『 *R U N T I M E* 』––––––\n${muptime}\n`, m, {
contextInfo: { externalAdReply :{
                        mediaUrl: 'https://ipulpachri.github.io/home',
                        mediaType: 2,
                        description: 'FachriBot-MD',
                        title: bottime,
                        body: wm2,          previewType: 0,
                        thumbnail: fs.readFileSync("https://telegra.ph/file/b87f4a8f68fb59ce2c59e.jpg"),
                        sourceUrl: snh
                      }}
})
}


handler.help = ['runtime']
handler.tags = ['info']
handler.command = ['runtime', 'rt']
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}
