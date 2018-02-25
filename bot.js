const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs")

client.on('ready', () => {
    console.log('Hey Am i Human? can i be?');
    client.user.setGame("On, v.2.1.2 || %? for Help || https://discord.gg/chwtXW9");

});
client.on('message', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if(message.content.startsWith(config.prefix + "ping")) {
          message.channel.send({embed: {
            color: 2752220,
            description: (new Date().getTime() - message.createdTimestamp + "ms," + "  pong!")
          }}) //PING PONG, Command measures the time tasken to send the pong message by millesecounds.
  }
    if (message.content.startsWith(config.prefix + 'portal')){
     message.channel.send({embed: {
       color: 2752220,
       description: ("News from the great Boring City!\nMessage from my builder: idk if it's been bother y'all but my adf.ly links look kind of well shitty *excuse me for my language* but it's tru i'm removing them soon dw i wont bother y'all with it.\n(message being deleted and new news will be posted when it comes up!)")
     }})
   }//Just news sent by the bot, so bassically any news i need to send off here's the porpuse.
   if (message.content.startsWith(config.prefix + 'DS')){
    message.channel.send({embed: {
      color: 3066993,
      description: ("List of Discord Servers! do %?<servername> to get more details on the Discord Server!\n1.null.black\nInvite code: https://discord.gg/ZpdqbCh\n2.The Nebula\nInvite Code: <http://yabuilder.com/18350631/nebula>\n3. my discord server arborian development\nInvite Code: <http://yabuilder.com/18350631/arborian>")
    }}) //List of advertised servers, just a set up thing for ads for users or owners of certian discordservers.
  }
   if (message.content.startsWith(config.prefix + 'ads')){
    message.channel.send(':ballot_box_with_check: Please sign up here! <http://yabuilder.com/18350631/arbor>')
  } //An ad signup sheet.
   if (message.content.startsWith(config.prefix + 'ToS')){
    message.channel.send(':newspaper: My ToS (Terms Of Service) https://www.hastebin.com/raw/somunahohi')
  }//ToS just a sheet to record uses this bot can do within' legal preference.
   if (message.content.startsWith(config.prefix + 'donate')){
    message.channel.send('Donate here! <https://evanlange.us>')
  }//MULA.
   if (message.content.startsWith(config.prefix + 'websites')){
    message.channel.send({embed: {
      color: 3426654,
      description: ("List of cool websites and links to check out!\n1.<http://yabuilder.com/18350631/dev>\n2.https://null.black/arbor\n3.https://www.youtube.com/channel/UCMMuxyk4EVXdq01W_XQTyzw ( a bird told me to sub and like his videos so help him out by doing so!)")
    }})
  }//ADS for certain websites!
    if (message.content.startsWith(config.prefix + 'kill')) {

       let user = message.mentions.users.first();
       if (!user) {
           return message.channel.send(':x: Please mention a user to kill!');
       }

           message.channel.send({embed: {
             color: 2899536,
             description: (`${message.author}, Are on a killing spree they have first Killed, ${user}!`)
           }})

    }//FUN COMMAND. kill those idiots bothering you!
      if (message.content.startsWith(config.prefix + 'avatar')) {
            message.channel.send({embed: {
                color: 10181046,
                description: message.author.avatarURL
            }
            })
        }
         if (message.content.startsWith(config.prefix + '?')) {
              message.channel.send('',{embed: {
                color:11027200,
                description: ('Do %?<command>, to get information on that command!\nList Of Commands (LOC):\n1.%ping\n2.%?\n3.%avatar\n4.%invite\n5.%ban\n6.%kick\n7.%author\n8.%server\n9.%kill\n10.%DS\n11.%websites\n12.%portal\n13.%ads\n14.%Tos\n15.%parents\n16.%author\n17.%donate')
              }
            })
          }//Help command.

          if (message.content.startsWith(config.prefix + 'admin')) {

                   let user = message.mentions.users.first();
                   if (!user) {
                       return message.channel.send(':x: Please mention a user');
                   }
            client.sendmessage(channel)
           }//WIP
           if (message.content.startsWith(config.prefix + '?donate')){
            message.channel.send('Donate to keep me alive!')
          }//Continue-->
           if (message.content.startsWith(config.prefix + '?ping')){
            message.channel.send("just test weither it's fast or slow")
          }
           if (message.content.startsWith(config.prefix + '?The_Nebula')){
            message.channel.send('really sucky server which shouldnt have as many members as it does because it only consists of drama from other servers')
          }
           if (message.content.startsWith(config.prefix + '?parents')){
            message.channel.send('Credit to those who have help make me!')
          }
           if (message.content.startsWith(config.prefix + 'author')){
            message.channel.send('Owner and writer of this Bot Is Highly_Boring#6244!')
          }
           if (message.content.startsWith(config.prefix + '?author')){
            message.channel.send('The owner of this Bot for ToS reasons and Legal Reasons only! also for if you need MAJOR help with anything this bot has!')
          }
           if (message.content.startsWith(config.prefix + '?ToS')){
            message.channel.send("Just do ``%ToS`` you'll find out")
          }
           if (message.content.startsWith(config.prefix + '?ads')){
            message.channel.send('an Ad sign up sheet! allows you to put up and add on ``%discordservers`` and ``%websites``')
          }
           if (message.content.startsWith(config.prefix + '?portal')){
            message.channel.send('Do %portal inorder to get public updates on me!')
          }
           if (message.content.startsWith(config.prefix + '?null.black')){
            message.channel.send('a support server but we would love for you to come on by and chat with us!')
          }
           if (message.content.startsWith(config.prefix + '?Arborian_Developement')){
            message.channel.send("A support server but a chat group aswell we don't really mind if you all come on over!")
          }
           if (message.content.startsWith(config.prefix + '?Chat_With_Us')){
            message.channel.send('Owner: GoN! Plays#3740\nDescription: We just do it!')
          }
           if (message.content.startsWith(config.prefix + '?avatar')){
            message.channel.send('avatar link')
          }
           if (message.content.startsWith(config.prefix + '?invite')){
            message.channel.send("Invite link to the bot's discord server and a link to add the bot")
          }
           if (message.content.startsWith(config.prefix + '?ban')){
            message.channel.send('bans member you need the ban members permission!')
          }
           if (message.content.startsWith(config.prefix + '?kick')){
            message.channel.send('a kick command but you need the kick members permission!')
          }
          if (message.content.startsWith(config.prefix + 'author')){
            message.channel.send('the authors of me! *my parents*')
          }
           if(message.content.startsWith(config.prefix + '?server')){
            message.channel.send('this has details of your server!')
          }
            if (message.content.startsWith(config.prefix + '?kill')){
             message.channel.send("do %kill <user> and you've killed them so get that guy who makes you mad back!")
           }
            if (message.content.startsWith(config.prefix + '?DS')){
             message.channel.send('A list of cool discord servers to check out! also want to ghet your server on this advertisement? DM mmy creator Highly_Boring#6244 thank you!')
           }
            if (message.content.startsWith(config.prefix + '?websites')){
             message.channel.send('A list of cool links to go to! check them out!')
           }//Stop, all help/ discordserver bio's, help commands as in descriptions of those help commands
           if (message.content.startsWith(config.prefix + '%server')) { /* Avatar command */
                message.channel.send('',{embed: {
                  color: 15844367,
                  description: (`Members: ${message.guild.memberCount}\nGuild Name: ${message.guild.name}\nGuild ID: ${message.guild.id} Guild Avatar: `)

                }
              })
            }//DESCRIPTION of server details.

        if (message.content.startsWith(config.prefix + 'invite')) { /* Help command */
        message.channel.send('',{embed: new Discord.RichEmbed().setTitle('invite me to your guild here <https://discordapp.com/oauth2/authorize?&client_id=381872966868402176&scope=bot> also come on over to my support guild here! https://discord.gg/chwtXW9') });
    }//Invite, to my server, and to the bot's invite AUTHO2 code.

    if (message.content.startsWith(config.prefix + 'ban')) {
        if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.channel.send(':x: Error you do not have BanMembers permissions ask an admin maybe there is a problem please contact a developer if there is not an issue with your perms!');
        }

        let user = message.mentions.users.first();
        if (!user) {
            return message.channel.send(':x: Please mention a user to ban!');
        }

        message.guild.ban(user.id).catch(console.error).then(() => {
            message.channel.send(`Banned ${user.username}`)
        });
     }//Ban's a user.
      if (message.content.startsWith(config.prefix + 'kick')) {
         if (!message.member.hasPermission('KICK_MEMBERS')) {
             return message.channel.send(':x: Error you do not have KickMembers permissions ask an admin maybe there is a problem please contact a developer if there is not an issue with your perms!');
         }

         let user = message.mentions.users.first();
         if (!user) {
             return message.channel.send(':x: Please mention a user to kick!');
         }

        message.guild.members.get(user.id).kick().catch(console.error).then(() => {
             message.channel.send(`Kicked ${user.username}`)
         });
      }//
       if (message.content.startsWith(config.prefix + 'parents')){
        message.channel.send('My parents are Highly_Boring#6244 And Katten#5233, DM them for any questions or comments!')
      }
      if(message.author.id !== config.ownerID) return;
      if(message.content.startsWith(config.prefix + "prefix")) {
      // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
     let newPrefix = message.content.split(" ").slice(1, 2)[0];
     // change the configuration in memory
    config.prefix = newPrefix;

    // Now we have to save the file.
    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  };
});

client.login(config.token);
