"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "repo", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {


const githubRepo = 'https://api.github.com/repos/An340452/dalink-MD;
const img = 'https://telegra.ph/file/51b27187dc4d679244c56.png';


    const response = await fetch(githubRepo); 
        const data = await response.json(); 

        if (data) {
            const repoInfo = {
                stars: data.stargazers_count,
                forks: data.forks_count,
                lastUpdate: data.updated_at,
                owner: data.owner.login
            };
const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
            const lastUpdateDate = new Date(repoInfo.lastUpdate).toLocaleDateString('en-GB');

const gitdata = `This is *DALINK-MD* 🐐🔵
*Repository:* ${data.html_url}
✨ *STARS:* ${repoInfo.stars}
🧧 *FORKS:* ${repoInfo.forks}
📅 *RELEASED ON:* ${releaseDate}
🕐 *LAST UPDATED:* ${lastUpdateDate}
👨‍💻 *OWNER:* ${repoInfo.owner}`;


await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });

} else {
console.log("Could not fetch data")

}


});

   /* let z = 'Hello This is  *DALINK-MD* \n\n ' + "The Following is *DALINK-MD Repo.*";
    let d = ' https://github.com/An340452/dalink-MD';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/51b27187dc4d679244c56.png';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");*/
