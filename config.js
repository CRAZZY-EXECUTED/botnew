const fs = require('fs')
const chalk = require('chalk')

global.apikey = 'isi sendiri'
global.rosekey = '-' //https://api.itsrose.life
//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'B彡⃢hotCra⃢sh'
global.namaowner = 'Cracker'

//—————「 Setting Owner 」—————//
global.owner = '6285321859292'
global.nomorlu = '623113441185'
global.ownernomer = ["6283856351273"]
global.premium = ['6283856351273']

//—————「 Set Wm 」—————//
global.packname = 'Chika Bot by'
global.author = 'CrackerGanas'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    done: 'Done ✅',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Feature Only for _*owner*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Admin Group*_',
    wait: 'Wait a Moment, for Process',
    endLimit: 'Your imit has run out, Wait at 12 at night',
    error: '*!!!Feature Error!!!*',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 25,
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/c3b6882ed6aee6b409198.jpg'
global.isLink = `https://youtube.com/@candracracker`
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
