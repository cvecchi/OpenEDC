import * as admindataHelper from "./helper/admindatahelper.js";

const $ = query => document.querySelector(query);
const $$ = query => document.querySelectorAll(query);

window.addSite = function() {
    admindataHelper.addSite();

    // TODO: Reload the list of sites
}