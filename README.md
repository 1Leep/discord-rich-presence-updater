# Discord Rich Presence Updater

An easy way to setup your Rich Presence on Discord

<br>

## Pre-Requisites
- **[NodeJS](https://nodejs.org)** *(recommended LTS version)*
- **[Git](https://git-scm.com/downloads)** *(optional to clone this repository)*

<br>

## Installation 

*Clone this repository with the following command*
```
git clone https://github.com/1Leep/discord-rich-presence-updater.git
```
*after that, install the dependencies using the following command*
```
npm install 
```

<br>

## Setting up Application

**1.** Create a **Rich Presence Application** in [Discord Developer Portal](https://discord.com/developers)

**2.** Make a **new application** *(The name of the app will be the main name for the Rich Presence)*

**3.** Go to `Art Assets` and add your images

<img height="220em" style="border-radius: 16px" src="https://cdn.discordapp.com/attachments/866809257167945771/964688602623782972/unknown.png" />


<br>
<br>

## Editing Config File

- Open the file `config.json` and put the activity information of your Rich Presence

```json
{
    "clientId": "CLIENT_ID_HERE",
    "activity": {
        "details": "Details text here",
        "state": "State text here",
        "largeImageKey": "large_image_key",
        "largeImageText": "Text from large image here",
        "smallImageKey": "small_image_key",
        "smallImageText": "Text from small image here",
        "buttons": [
            {
                "label": "Button Label 1",
                "url": "URL TO BUTTON 1 HERE"
            },
            {
                "label": "Button Label 2",
                "url": "URL TO BUTTON 2 HERE"
            }
        ]
    }
}
```

> Get the **Client ID** from your application in `General Information` from [Discord Developer Portal](https://discord.com/developers)

<br>
<br>

## Starting the App

- Run this code to start the application or open the file `start.bat`

```
npm start
```

**If all goes well, this will show up in your terminal**

<img height="300em" style="border-radius: 16px" src="https://cdn.discordapp.com/attachments/866809257167945771/964699768154628126/unknown.png">

<br>
<br>

## **Notes:**

- Make sure that you have enabled **Game-visibility** in your Discord Settings

- You are not redirected when clicking buttons, only other people

- You can add or remove activity options in **Config file**

- You can copy a **Shortcut** of the start file in the start up Folder, to automatically start the Rich-Presence when booting the PC. To get to this folder type `WIN + R` and then `shell:startup`

<br>
<br>
<br>

## **Author info**

## 

<a href="https://discord.com/users/590980167590084631">
    <img style="border-radius: 16px" src="https://lanyard.cnrad.dev/api/590980167590084631" />
</a>
<div>
  <a href="https://www.youtube.com/channel/UC-kNj8-UuaIV_2s3wZcTddg" target="_blank"><img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" target="_blank"></a>
  <a href="https://twitter.com/Leep__" target="_blank"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" target="_blank"></a>
  <a href="https://open.spotify.com/user/85ldqhfhkuwtm3a2nik4f15ly" target="_blank"><img src="https://img.shields.io/badge/Spotify-1DB954?style=for-the-badge&logo=spotify&logoColor=white" target="_blank"></a>
  <a href="https://www.twitch.tv/1leep" target="_blank"><img src="https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white" target="_blank"></a>
</div>

