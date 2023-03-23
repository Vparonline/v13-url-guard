const { Client } = require('discord.js-selfbot-v13');
let client = new Client({ checkUpdate: false })
const request = require('request');
let token = ""
let proxy = ""
let urlyigeçir = "";
let urlsunucusuişte = "";
client.on('ready', async () => {
    request.defaults({'proxy': proxy});
    setInterval(async () => {
        await sikanasını(token, urlyigeçir, "0001")
    }, 1000)
})

client.on('guildUpdate', async (oldGuild, newGuild) => {
    if(oldGuild && oldGuild.id != urlsunucusuişte) return;
    if (newGuild.vanityURLCode && (newGuild.vanityURLCode !== oldGuild.vanityURLCode)) {
       return await sikanasını(token, urlyigeçir, oldGuild.vanityURLCode, proxy)
    }
})

client.login(token)


async function sikanasını(token, sunucuymuş, url, proxy) {
   
    sunucuymuş = client.guilds.cache.get(sunucuymuş)
    if(!sunucuymuş) return;
    if(sunucuymuş.vanityURLCode != url) {
      
        await request({
            method: "PATCH", 
            
            url: `https://discord.com/api/v10/guilds/${guild.id}/vanity-url`,
            headers: { 
                "Authorization": `${token}`,
                "User-Agent": `Created by elchâvo.py`,
                "X-Audit-Log-Reason": `xd`
            },
            body: { "code": `${url}` },
            json: true,
            

    });
    } else {
        console.log(`Başarıyla ${url} URL'si Alındı!`)
    }

}
