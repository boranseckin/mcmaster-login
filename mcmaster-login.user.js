// ==UserScript==
// @name         McMaster Login
// @namespace    https://github.com/boranseckin/mcmaster-login/
// @version      0.1
// @description  Login to McMaster websites with your Mac ID.
// @author       Boran Seckin
// @match        http://avenue.mcmaster.ca/
// @match        https://avenue.cllmcmaster.ca/d2l/login?sessionExpired=*&target=*
// @match        https://cap.mcmaster.ca/mcauth/login.jsp?app_id=*&app_name=*
// @match        https://sso.mcmaster.ca/*
// @match        https://epprd.mcmaster.ca/*
// @match        https://www.childsmath.ca/childsa/forms/main_login.php*
// @match        https://loncapa.mcmaster.ca/*
// @match        https://app.crowdmark.com/sign-in
// @match        https://login.echo360.ca/*
// @match        https://www.oscarplusmcmaster.ca/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const username = 'macid';
    const email = 'macid@mcmaster.ca';
    const password = 'supersecretpassword';

    window.addEventListener('load', function() {
        const url = window.location.href;

        // MACID Login
        if (url.indexOf('cap.mcmaster') > -1) {
            console.log('MACID');
            document.querySelector('#user_id').value = username;
            document.querySelector('#pin').value = password;
            document.querySelector('#submit').click();
        }
        else if (url.indexOf('sso.mcmaster') > -1) {
            console.log('MACID - 2');
            document.querySelector('#username').value = username;
            document.querySelector('#password').value = password;
            document.querySelector('#submit').click();
        }

        // Avenue
        else if (url.indexOf('avenue.mcmaster') > -1) {
            console.log('Avenue Login');
            document.querySelector('#login_button').click();
        }
        else if (url.indexOf('avenue.cllmcmaster.ca/d2l/login?sessionExpired') > -1) {
            console.log('Avenue Redirect');
            window.location.href = 'https://cap.mcmaster.ca/mcauth/login.jsp?app_id=1505&app_name=Avenue';
        }

        // Mosaic
        else if (url.indexOf('mosaic.mcmaster.ca/psp/prepprd/?cmd=login') > -1) {
            console.log('Mosaic');
            document.querySelector('#userid').value = username;
            document.querySelector('#pwd').value = password;
            document.querySelector('#login > div > div.ps_signinentry > div:nth-child(6) > span > input').click();
        }

        // Childsmath
        else if (url.indexOf('childsmath.ca/childsa/forms/main_login') > -1) {
            console.log('Childsmath');
            document.querySelector('#submit').click();
        }

        // Echo360
        else if (url.indexOf('login.echo360.ca') > -1) {
            console.log('Echo360');
            document.querySelector('#email').value = email;
            document.querySelector('#submitBtn').click();
        }

        // LONCAPA
        else if (url.indexOf('loncapa.mcmaster.ca/adm/roles') > -1) {
            console.log('LONCAPA Select');
            try {
                document.querySelector('body > form:nth-child(12) > table > tbody > tr:nth-child(2) > td.LC_roles_is > input[type=button]').click();
            } catch (error) {}
            try {
                document.querySelector('body > form:nth-child(12) > table > tbody > tr:nth-child(2) > td.LC_roles_selected > input[type=button]').click();
            } catch (error) {}
        }
        else if (url.indexOf('loncapa.mcmaster.ca/public/macphys/') > -1) {
            console.log('LONCAPA Content');
            document.querySelector('#LC_secondary_menu > li:nth-child(2) > a').click();
        }
        else if (url.indexOf('loncapa.mcmaster.ca/adm') > -1) {
            console.log('LONCAPA Login');
            try {
                document.querySelector('#uname').value = username;
                document.querySelector('body > div > div:nth-child(3) > div:nth-child(1) > form > input[type=password]:nth-child(9)').value = password;
                document.querySelector('body > div > div:nth-child(3) > div:nth-child(1) > form > input[type=submit]:nth-child(15)').click();
            } catch (error) {}
        }

        // Crowdmark
        else if (url.indexOf('app.crowdmark.com/sign-in') > -1) {
            console.log('Crowdmark');
            document.querySelector('#user_email').value = email;
            document.querySelector('#user_password').value = password;
            document.querySelector('#new_user > div > input').click();
        }

        // OSCARplus
        else if (url.indexOf('oscarplusmcmaster.ca/home') > -1) {
            console.log('OSCARplus Home');
            document.querySelector('#a11y-menu > ul > li:nth-child(2) > a').click();
        }
        else if (url.indexOf('oscarplusmcmaster.ca/studentLogin') > -1) {
            console.log('OSCARplus Student');
            document.querySelector('#main > div > div > table > tbody > tr > td > div > a').click();
        }
    });
})();
