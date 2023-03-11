// ==UserScript==
// @name         reddit  search on Google 2
// @version      1.0
// @description  Adds a button to search reddit posts with Google after the google's new search layout update in Feb 2023
// @author       JZ
// @namespace    https://github.com/IcyBearLovesSleep/reddit-search-on-google-2
// @match              https://*.google.com/search*
// @match              https://*.google.ad/search*
// @match              https://*.google.ae/search*
// @match              https://*.google.com.af/search*
// @match              https://*.google.com.ag/search*
// @match              https://*.google.com.ai/search*
// @match              https://*.google.al/search*
// @match              https://*.google.am/search*
// @match              https://*.google.co.ao/search*
// @match              https://*.google.com.ar/search*
// @match              https://*.google.as/search*
// @match              https://*.google.at/search*
// @match              https://*.google.com.au/search*
// @match              https://*.google.az/search*
// @match              https://*.google.ba/search*
// @match              https://*.google.com.bd/search*
// @match              https://*.google.be/search*
// @match              https://*.google.bf/search*
// @match              https://*.google.bg/search*
// @match              https://*.google.com.bh/search*
// @match              https://*.google.bi/search*
// @match              https://*.google.bj/search*
// @match              https://*.google.com.bn/search*
// @match              https://*.google.com.bo/search*
// @match              https://*.google.com.br/search*
// @match              https://*.google.bs/search*
// @match              https://*.google.bt/search*
// @match              https://*.google.co.bw/search*
// @match              https://*.google.by/search*
// @match              https://*.google.com.bz/search*
// @match              https://*.google.ca/search*
// @match              https://*.google.cd/search*
// @match              https://*.google.cf/search*
// @match              https://*.google.cg/search*
// @match              https://*.google.ch/search*
// @match              https://*.google.ci/search*
// @match              https://*.google.co.ck/search*
// @match              https://*.google.cl/search*
// @match              https://*.google.cm/search*
// @match              https://*.google.cn/search*
// @match              https://*.google.com.co/search*
// @match              https://*.google.co.cr/search*
// @match              https://*.google.com.cu/search*
// @match              https://*.google.cv/search*
// @match              https://*.google.com.cy/search*
// @match              https://*.google.cz/search*
// @match              https://*.google.de/search*
// @match              https://*.google.dj/search*
// @match              https://*.google.dk/search*
// @match              https://*.google.dm/search*
// @match              https://*.google.com.do/search*
// @match              https://*.google.dz/search*
// @match              https://*.google.com.ec/search*
// @match              https://*.google.ee/search*
// @match              https://*.google.com.eg/search*
// @match              https://*.google.es/search*
// @match              https://*.google.com.et/search*
// @match              https://*.google.fi/search*
// @match              https://*.google.com.fj/search*
// @match              https://*.google.fm/search*
// @match              https://*.google.fr/search*
// @match              https://*.google.ga/search*
// @match              https://*.google.ge/search*
// @match              https://*.google.gg/search*
// @match              https://*.google.com.gh/search*
// @match              https://*.google.com.gi/search*
// @match              https://*.google.gl/search*
// @match              https://*.google.gm/search*
// @match              https://*.google.gr/search*
// @match              https://*.google.com.gt/search*
// @match              https://*.google.gy/search*
// @match              https://*.google.com.hk/search*
// @match              https://*.google.hn/search*
// @match              https://*.google.hr/search*
// @match              https://*.google.ht/search*
// @match              https://*.google.hu/search*
// @match              https://*.google.co.id/search*
// @match              https://*.google.ie/search*
// @match              https://*.google.co.il/search*
// @match              https://*.google.im/search*
// @match              https://*.google.co.in/search*
// @match              https://*.google.iq/search*
// @match              https://*.google.is/search*
// @match              https://*.google.it/search*
// @match              https://*.google.je/search*
// @match              https://*.google.com.jm/search*
// @match              https://*.google.jo/search*
// @match              https://*.google.co.jp/search*
// @match              https://*.google.co.ke/search*
// @match              https://*.google.com.kh/search*
// @match              https://*.google.ki/search*
// @match              https://*.google.kg/search*
// @match              https://*.google.co.kr/search*
// @match              https://*.google.com.kw/search*
// @match              https://*.google.kz/search*
// @match              https://*.google.la/search*
// @match              https://*.google.com.lb/search*
// @match              https://*.google.li/search*
// @match              https://*.google.lk/search*
// @match              https://*.google.co.ls/search*
// @match              https://*.google.lt/search*
// @match              https://*.google.lu/search*
// @match              https://*.google.lv/search*
// @match              https://*.google.com.ly/search*
// @match              https://*.google.co.ma/search*
// @match              https://*.google.md/search*
// @match              https://*.google.me/search*
// @match              https://*.google.mg/search*
// @match              https://*.google.mk/search*
// @match              https://*.google.ml/search*
// @match              https://*.google.com.mm/search*
// @match              https://*.google.mn/search*
// @match              https://*.google.ms/search*
// @match              https://*.google.com.mt/search*
// @match              https://*.google.mu/search*
// @match              https://*.google.mv/search*
// @match              https://*.google.mw/search*
// @match              https://*.google.com.mx/search*
// @match              https://*.google.com.my/search*
// @match              https://*.google.co.mz/search*
// @match              https://*.google.com.na/search*
// @match              https://*.google.com.ng/search*
// @match              https://*.google.com.ni/search*
// @match              https://*.google.ne/search*
// @match              https://*.google.nl/search*
// @match              https://*.google.no/search*
// @match              https://*.google.com.np/search*
// @match              https://*.google.nr/search*
// @match              https://*.google.nu/search*
// @match              https://*.google.co.nz/search*
// @match              https://*.google.com.om/search*
// @match              https://*.google.com.pa/search*
// @match              https://*.google.com.pe/search*
// @match              https://*.google.com.pg/search*
// @match              https://*.google.com.ph/search*
// @match              https://*.google.com.pk/search*
// @match              https://*.google.pl/search*
// @match              https://*.google.pn/search*
// @match              https://*.google.com.pr/search*
// @match              https://*.google.ps/search*
// @match              https://*.google.pt/search*
// @match              https://*.google.com.py/search*
// @match              https://*.google.com.qa/search*
// @match              https://*.google.ro/search*
// @match              https://*.google.ru/search*
// @match              https://*.google.rw/search*
// @match              https://*.google.com.sa/search*
// @match              https://*.google.com.sb/search*
// @match              https://*.google.sc/search*
// @match              https://*.google.se/search*
// @match              https://*.google.com.sg/search*
// @match              https://*.google.sh/search*
// @match              https://*.google.si/search*
// @match              https://*.google.sk/search*
// @match              https://*.google.com.sl/search*
// @match              https://*.google.sn/search*
// @match              https://*.google.so/search*
// @match              https://*.google.sm/search*
// @match              https://*.google.sr/search*
// @match              https://*.google.st/search*
// @match              https://*.google.com.sv/search*
// @match              https://*.google.td/search*
// @match              https://*.google.tg/search*
// @match              https://*.google.co.th/search*
// @match              https://*.google.com.tj/search*
// @match              https://*.google.tl/search*
// @match              https://*.google.tm/search*
// @match              https://*.google.tn/search*
// @match              https://*.google.to/search*
// @match              https://*.google.com.tr/search*
// @match              https://*.google.tt/search*
// @match              https://*.google.com.tw/search*
// @match              https://*.google.co.tz/search*
// @match              https://*.google.com.ua/search*
// @match              https://*.google.co.ug/search*
// @match              https://*.google.co.uk/search*
// @match              https://*.google.com.uy/search*
// @match              https://*.google.co.uz/search*
// @match              https://*.google.com.vc/search*
// @match              https://*.google.co.ve/search*
// @match              https://*.google.vg/search*
// @match              https://*.google.co.vi/search*
// @match              https://*.google.com.vn/search*
// @match              https://*.google.vu/search*
// @match              https://*.google.ws/search*
// @match              https://*.google.rs/search*
// @match              https://*.google.co.za/search*
// @match              https://*.google.co.zm/search*
// @match              https://*.google.co.zw/search*
// @match              https://*.google.cat/search*
// @run-at       document-end
// ==/UserScript==

// put in desire site search filter
const site = 'reddit.com';
const Name = "Reddit";

const queryRegex = /q=[^&]+/g;
const siteRegex = /\+site(?:%3A|\:).+\.[^&+]+/g;
const Url = '+site%3A'+site;

(function () {
    'use strict';
    window.addEventListener("load", function () {
        const menu = document.querySelector('.nfdoRb')
        // creates reddit button
        let button = document.createElement('a')
        button.className = 'zItAnd FOU1zf'
        button.href = window.location.href.replace(queryRegex, (match) => {
            // Replaces the existing `site` flags
            return match.search(siteRegex) >= 0 ? match.replace(siteRegex, Url) : match + Url;
        });

        button.innerText = Name
        document.querySelector('.nfdoRb').append(button)
    }, false)

})();
