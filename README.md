# mcmaster-login
Automatically login to McMaster related websites with MacID using Userscript.

## Features
Being a student in McMaster (especially when everything is online) requires a lot of repetitive logging in to various websites. When this script is on, once you enter any of the [predefined websites](#supported-websites) below, it will automatically login with your credentials as fast as possible. And the best part is that you don't have to do anything at all.

#### Supported Websites
- Avenue
- Mosaic
- Childsmath
- Echo360
- LONCAPA 🤍
- CrowdMark
- OSCARplus

Note that, to login most of the websites you will be redirected to either `cap.mcmaster.ca` or `sso.mcmaster.ca` to use the regular MacID login. Both of these websites are already automated, so if a website is not on the list above but uses this method, it should work regardless.

I do not use all the websites, so if something doesn't work or you would like to add a new website, please let me know or make a pull request.

#### Disclaimer
This script is not affiliated with any of the services above nor McMaster University. Your credentials are stored locally by your extension and only used to fill the HTML forms.

## Installation
1. Install a compatible `Usercript` extension for your platform. I prefer using [Tampermonkey](https://www.tampermonkey.net/) on a Chromium browser but [here](https://github.com/OpenUserJs/OpenUserJS.org/wiki/Userscript-Beginners-HOWTO#how-do-i-get-going) is a list of options.

2. Once the extension is installed click this [link](https://github.com/boranseckin/mcmaster-login/raw/main/mcmaster-login.user.js) to automaticaly install the script. If it doesn't work, simply create a new script using the extension's web interface and copy the content of the file [mcmaster-login.user.js](mcmaster-login.user.js).

3. Change the credentials on lines [23-25](https://github.com/boranseckin/mcmaster-login/blob/main/mcmaster-login.user.js#L23-L25).

4. Once you enter any of the supported websites' login page, the script should do the thing.

## Author
- Boran Seckin

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
