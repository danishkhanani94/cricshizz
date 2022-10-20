// globals PULSE, PULSE.app
(function(app,core){'use strict';app.templates={};app.common={};// SSO common helpers + widgets and constants
app.common.Helpers={};app.common.constants={};app.SSO={};app.defaultLanguage='EN';app.googleMapsKey='AIzaSyCXdb302utTvJrluU8cxRf1jeqjyXuxJMU';app.account='ICC';app.paths=[/* LOCAL */{label:'local',domain:'localhost',canary:'https://api.canary.platform.pulselive.com/dev/',api:'//api.dev.platform.pulselive.com',cricket:'//cricketapi.dev.platform.pulselive.com',cms:'//api.dev.platform.pulselive.com/content/icc',tournamentGroupId:5198,sso:{id:"icc-sso-web",auth:"https://sso.dev.icc-sso.pulselive.com/auth/"}},/* LOCAL WEBGEN */{label:'local-webgen',domain:'local.icc.com',canary:'https://api.canary.platform.pulselive.com/dev/',api:'//api.dev.platform.pulselive.com',cricket:'//cricketapi.dev.platform.pulselive.com',cms:'//api.dev.platform.pulselive.com/content/icc',tournamentGroupId:5198},/* DEVELOPMENT */{label:'development',domain:['dev-icc.pulselive.com','www.dev-worldtwenty20.pulselive.com','dev-cricketworldcup.pulselive.com','criiio.dev.icc.pulselive.com'],canary:'https://api.canary.platform.pulselive.com/dev/',api:'//api.dev.platform.pulselive.com',submitForm:'//register-api.dev.platform.pulselive.com/submit/form/',commentaryApi:'//cricketservices.dev.platform.pulselive.com',forms:'//form-api.dev.platform.pulselive.com/icc/forms/',cricket:'https://cricketapi.dev.platform.pulselive.com',cms:'//api.dev.platform.pulselive.com/content/icc',cmsSearch:'//api.dev.platform.pulselive.com/search/icc',playerImagePath:'//resources.pulse.icc-cricket.com/players/',greatestXi:'//resources.pulse.icc-cricket.com/ICC/greatestxi/',greatestXiWtc:'//resources.pulse.icc-cricket.com/ICC/greatestxi-wtc/',tournamentGroupId:5198,pollQuestions:'https://dynamic.pulselive.com/dynamic/data/icctest',pollAnswer:'https://canary2.pulselive.com/poll/vote',mcPollName:'iccpolls',trackingApi:"https://jkulhg7io5.execute-api.us-east-1.amazonaws.com/dev/interactions",reactionsApi:'https://reactions.dev.platform.pulselive.com/ICC/reactions',microsites:[{path:'media-zone',cms:'/media-zone/p_cms_api/content/icc'}],// cognito: {
//     region: 'us-east-1',
//     userPool: 'us-east-1_RRjS3X8N1',
//     clientId: '1ho73jiovh3t1nk0sc5ua2on1'
// },
// ssoApi: 'https://icc-sso-api.test.pulselive.com/api',
// ssoSocialRedirect: 'https://sso-icc.auth.us-east-1.amazoncognito.com/oauth2/authorize?redirect_uri=',
// ssoToken: 'https://sso-icc.auth.us-east-1.amazoncognito.com/oauth2/token',
crm:'/media-zone/p_crm_api',crmApi:'//crmapitest.pulselive.com',sso:{id:"icc-sso-web",auth:"https://sso.dev.icc-sso.pulselive.com/auth/"}},/* TEST */{label:'test',domain:['test-icc.pulselive.com','www.test-worldtwenty20.pulselive.com','test-cricketworldcup.pulselive.com','criiio.test.icc.pulselive.com'],canary:'https://api.canary.platform.pulselive.com/test/',api:'//api.test.platform.pulselive.com',submitForm:'//register-api.test.platform.pulselive.com/submit/form/',commentaryApi:'//cricketservices.test.platform.pulselive.com',forms:'//form-api.test.platform.pulselive.com/icc/forms/',cricket:'//cricketapi.test.platform.pulselive.com',cms:'//api.test.platform.pulselive.com/content/icc',trackingApi:"https://jkulhg7io5.execute-api.us-east-1.amazonaws.com/test/interactions",cmsSearch:'//api.test.platform.pulselive.com/search/icc',playerImagePath:'//resources.pulse.icc-cricket.com/players/',greatestXi:'//resources.pulse.icc-cricket.com/ICC/greatestxi/',greatestXiWtc:'//resources.pulse.icc-cricket.com/ICC/greatestxi-wtc/',tournamentGroupId:5198,pollQuestions:'https://dynamic.pulselive.com/dynamic/data/icctest',pollAnswer:'https://canary2.pulselive.com/poll/vote',reactionsApi:'https://reactions.test.platform.pulselive.com/ICC/reactions',mcPollName:'iccpolls',microsites:[{path:'media-zone',cms:'/media-zone/p_cms_api/content/icc'}],crm:'/media-zone/p_crm_api',crmApi:'//crmapitest.pulselive.com',// cognito: {
//     region: 'us-east-1',
//     userPool: 'us-east-1_RRjS3X8N1',
//     clientId: '1ho73jiovh3t1nk0sc5ua2on1'
// },
// ssoApi: 'https://icc-sso-api.test.pulselive.com/api',
// ssoSocialRedirect: 'https://sso-icc.auth.us-east-1.amazoncognito.com/oauth2/authorize?redirect_uri=',
// ssoToken: 'https://sso-icc.auth.us-east-1.amazoncognito.com/oauth2/token',
sso:{id:"icc-sso-web",auth:"https://sso.dev.icc-sso.pulselive.com/auth/"}},/* STAGING */{label:'staging',domain:['stage-icc.pulselive.com'],canary:'https://api.canary.platform.pulselive.com/production/',api:'//content-icc.pulselive.com',submitForm:'//register-api.staging.platform.pulselive.com/submit/form/',commentaryApi:'//api.icc.cdp.pulselive.com',forms:'//form-api.staging.platform.pulselive.com/icc/forms/',cricket:'//cricketapi-icc.pulselive.com',cms:'//content-icc.pulselive.com/content/icc',trackingApi:"https://jkulhg7io5.execute-api.us-east-1.amazonaws.com/prod/interactions",cmsSearch:'//content-icc.pulselive.com/search/icc',playerImagePath:'//resources.pulse.icc-cricket.com/players/',greatestXi:'//resources.pulse.icc-cricket.com/ICC/greatestxi/',greatestXiWtc:'//resources.pulse.icc-cricket.com/ICC/greatestxi-wtc/',tournamentGroupId:5198,pollQuestions:'https://dynamic.pulselive.com/dynamic/data/icc',pollAnswer:'https://canary2.pulselive.com/poll/vote',mcPollName:'iccpolls',reactionsApi:'https://reactions.prod.platform.pulselive.com/ICC/reactions',microsites:[{path:'media-zone',cms:'/media-zone/p_cms_api/content/icc'}],crm:'/media-zone/p_crm_api',crmApi:'//crmapitest.pulselive.com'},/* PRODUCTION */{label:'production',domain:['www.icc-cricket.com','icc.tv','www.worldtwenty20.com','www.cricketworldcup.com','cwc2019.cricketworldcup.com','criiio.stage.icc.pulselive.com','criiio.com'],canary:'https://api.canary.platform.pulselive.com/production/',api:'//content-icc.pulselive.com',submitForm:'//register-api.platform.pulselive.com/submit/form/',commentaryApi:'//api.icc.cdp.pulselive.com',forms:'//form-api.platform.pulselive.com/icc/forms/',cricket:'//cricketapi-icc.pulselive.com',cms:'//content-icc.pulselive.com/content/icc',trackingApi:"https://jkulhg7io5.execute-api.us-east-1.amazonaws.com/prod/interactions",playerImagePath:'//resources.pulse.icc-cricket.com/players/',greatestXi:'//resources.pulse.icc-cricket.com/ICC/greatestxi/',greatestXiWtc:'//resources.pulse.icc-cricket.com/ICC/greatestxi-wtc/',cmsSearch:'//content-icc.pulselive.com/search/icc',tournamentGroupId:5198,pollQuestions:'https://dynamic.pulselive.com/dynamic/data/icc',pollAnswer:'https://canary2.pulselive.com/poll/vote',reactionsApi:'https://reactions.prod.platform.pulselive.com/ICC/reactions',mcPollName:'iccpolls',microsites:[{path:'media-zone',cms:'/media-zone/p_cms_api/content/icc'}],crm:'/media-zone/p_crm_api',crmApi:'//crmapi.pulselive.com',// cognito: {
//     region: 'us-east-1',
//     userPool: 'us-east-1_spCWVbiBc',
//     clientId: '2euu0l3gc6sbp03seajf0oun5g'
// },
// ssoApi: 'https://sso-api.icc-cricket.com/api',
// ssoSocialRedirect: 'https://icc-sso-prod.auth.us-east-1.amazoncognito.com/oauth2/authorize?redirect_uri=',
// ssoToken: 'https://icc-sso-prod.auth.us-east-1.amazoncognito.com/oauth2/token',
sso:{"id":"icc-sso-web","auth":"https://sso.fanaccount.icc-cricket.com/auth/"}}];app.checkEnvironment=function(){var location=window.location.hostname;var pathname=window.location.pathname.split('/')[1];var environment;app.paths.map(function(path){if(Array.isArray(path.domain)){path.domain.forEach(function(domain){if(location===domain||location.match(new RegExp(domain))){// set the current domain on the path instead of the array
path.domain=domain;environment=path;environment.cdn="/resources/"+window.RESOURCE_VERSION+"/";}return environment;});}else{if(location===path.domain||location.match(new RegExp(path.domain))){environment=path;}return environment;}});if(environment.hasOwnProperty('microsites')){environment.microsites.forEach(function(microsite){if(microsite.path===pathname){environment=core.object.extend({},environment,microsite);}});}return environment||'There are no app.paths defined for this domain';};app.environment=app.checkEnvironment();app.tournamentIds={cricketworldcup:8191};app.apiPath={players:{// Lists all players in the system
all:app.environment.cricket+'/players',// Get details of a specific player
single:app.environment.cricket+'/players/{id}',// Lists players ranked by rating based on given matchType and role
ranked:app.environment.cricket+'/icc-ratings/ranked/players/{matchType}/{role}',// Lists players ranked by best all time rating based on a given matchType and role
bestPlayers:app.environment.cricket+'/icc-ratings/allTimeBestPlayers?playerRatingRole={role}&matchScope={matchType}&pageSize={pageSize}&dmsPlayerIdRequired={dmsPlayerIdRequired}'},teams:{ranked:app.environment.cricket+'/icc-ratings/ranked/teams/{matchType}'},fixtures:{all:app.environment.cricket+'/fixtures',single:app.environment.cricket+'/fixtures/{id}',meta:app.environment.cricket+'/fixtures/meta'},cms:{playlist:app.environment.cms+'/playlist/en/',text:app.environment.cms+'/text/en/',photo:app.environment.cms+'/photo/en/',video:app.environment.cms+'/video/en/',audio:app.environment.cms+'/audio/en/',document:app.environment.cms+'/document/en/',promo:app.environment.cms+'/promo/en/',bio:app.environment.cms+'/bios/en/'},events:{eventgroups:app.environment.api+'/eventmanagement/icc/events',event:app.environment.api+'/eventmanagement/icc/events/{id}/?fetchDepth={fetchDepth}'},tournaments:{single:app.environment.cricket+'/tournaments/{tournamentId}',squads:{all:app.environment.cricket+'/tournaments/{tournamentId}/squads/',single:app.environment.cricket+'/tournaments/{tournamentId}/squads/{teamId}'}},stats:{tournament:app.environment.cricket+'/tournaments/',players:app.environment.cricket+'/stats/players',perMatchStats:app.environment.cricket+'/stats/players/{id}/matches',ranked:{players:app.environment.cricket+'/stats/ranked/players/'},tournamentGroups:app.environment.cricket+'/stats/players/{id}?tournamentGroupIds={tournamentGroups}'},ratings:{players:app.environment.cricket+'/icc-ratings/players',playersId:app.environment.cricket+'/icc-ratings/players/{id}/{format}',rankingSummary:app.environment.cricket+'/icc-ratings/playerRankingSummary/{id}/'},winviz:'https://icc-cricviz-api.pulselive.com/winviz/{optaId}?feed=opta'// only prod environment available
};/**
   * Base Web Improvement to Rendering:
   * https://bitbucket.org/pulselive/base-web-project/pull-requests/75/critical-render-path-performance/diff
   *
   * https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
   * The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed,
   * without waiting for stylesheets, images, and subframes to finish loading.
   */var DOMReady=function DOMReady(){/**
     * Polyfill any object-fit images (for IE11) - if you want to target a specific class pass it as a parameter.
     * NB: This needs to be used in conjunction with the SASS mixin in the mixins.scss file
     */objectFitImages('poly-object-fit');app.I18N.setup();};document.addEventListener('DOMContentLoaded',DOMReady);})(PULSE.app,PULSE.core);// globals PULSE, PULSE.app
(function(app){'use strict';app.formats=['TEST','ODI','T20I','T20','LIST_A','FIRST_CLASS'];app.months=['January','February','March','April','May','June','July','August','September','October','November','December'];app.years=[2019,2018,2017,2016,2015,2014,2013,2012,2011];app.teams={womens:[{id:30,fullName:'Australia Women',shortName:'Australia'},{id:170,fullName:'Bangladesh Women',shortName:'Bangladesh'},{id:28,fullName:'England Women',shortName:'England'},{id:31,fullName:'India Women',shortName:'India '},{id:346,fullName:'INDIA Blue Women',shortName:'INDIA Blue'},{id:347,fullName:'INDIA Red Women',shortName:'INDIA Red'},{id:162,fullName:'Ireland Women',shortName:'Ireland '},{id:26,fullName:'New Zealand Women',shortName:'New Zealand'},{id:29,fullName:'Pakistan Women',shortName:'Pakistan '},{id:25,fullName:'South Africa Women',shortName:'South Africa '},{id:24,fullName:'Sri Lanka Women',shortName:'Sri Lanka '},{id:27,fullName:'West Indies Women',shortName:'West Indies '},{id:165,fullName:'Zimbabwe Women',shortName:'Zimbabwe'},{id:167,fullName:'Canada Women',shortName:'Canada'},{id:431,fullName:'China Women',shortName:'China'},{id:450,fullName:'Hong Kong Women',shortName:'Hong Kong'},{id:163,fullName:'Japan Women',shortName:'Japan'},{id:451,fullName:'Nepal Women',shortName:'Nepal'},{id:164,fullName:'Netherlands Women',shortName:'Netherlands'},{id:430,fullName:'Papua New Guinea Women',shortName:'Papua New Guinea'},{id:449,fullName:'Samoa Women',shortName:'Samoa'},{id:432,fullName:'Scotland Women',shortName:'Scotland'},{id:166,fullName:'Thailand Women',shortName:'Thailand'}],mens:[{id:17,fullName:'Afghanistan',shortName:'Afghanistan'},{id:15,fullName:'Australia',shortName:'Australia'},{id:22,fullName:'Bangladesh',shortName:'Bangladesh'},{id:11,fullName:'England',shortName:'England'},{id:14,fullName:'India',shortName:'India'},{id:12,fullName:'Ireland',shortName:'Ireland'},{id:16,fullName:'New Zealand',shortName:'New Zealand'},{id:20,fullName:'Pakistan',shortName:'Pakistan'},{id:19,fullName:'South Africa',shortName:'South Africa'},{id:13,fullName:'Sri Lanka',shortName:'Sri Lanka'},{id:21,fullName:'West Indies',shortName:'West Indies'},{id:18,fullName:'Zimbabwe',shortName:'Zimbabwe'},{id:65,fullName:'Bermuda',shortName:'Bermuda'},{id:66,fullName:'Canada',shortName:'Canada'},{id:91,fullName:'Denmark',shortName:'Denmark'},{id:102,fullName:'Guernsey',shortName:'Guernsey'},{id:103,fullName:'Hong Kong',shortName:'Hong Kong'},{id:109,fullName:'Italy',shortName:'Italy'},{id:111,fullName:'Jersey',shortName:'Jersey'},{id:67,fullName:'Kenya',shortName:'Kenya'},{id:124,fullName:'Namibia',shortName:'Namibia'},{id:125,fullName:'Nepal',shortName:'Nepal'},{id:68,fullName:'Netherlands',shortName:'Netherlands'},{id:126,fullName:'Nigeria',shortName:'Nigeria'},{id:128,fullName:'Oman',shortName:'Oman'},{id:133,fullName:'Papua New Guinea',shortName:'PNG'},{id:69,fullName:'Scotland',shortName:'Scotland'},{id:150,fullName:'Tanzania',shortName:'Tanzania'},{id:155,fullName:'United Arab Emirates',shortName:'UAE'},{id:156,fullName:'Uganda',shortName:'Uganda'},{id:158,fullName:'Vanuatu',shortName:'Vanuatu'}],championsTrophy:[{id:15,fullName:'Australia',shortName:'Australia'},{id:22,fullName:'Bangladesh',shortName:'Bangladesh'},{id:11,fullName:'England',shortName:'England'},{id:14,fullName:'India',shortName:'India'},{id:16,fullName:'New Zealand',shortName:'New Zealand'},{id:20,fullName:'Pakistan',shortName:'Pakistan'},{id:19,fullName:'South Africa',shortName:'South Africa'},{id:13,fullName:'Sri Lanka',shortName:'Sri Lanka'}],u19wc:[{id:171,fullName:'Afghanistan Under 19s',shortName:'AFGu19'},{id:172,fullName:'Australia Under 19s',shortName:'AUSu19'},{id:173,fullName:'Bangladesh Under 19s',shortName:'BANu19'},{id:175,fullName:'England Under 19s',shortName:'ENGu19'},{id:176,fullName:'India Under 19s',shortName:'INDu19'},{id:428,fullName:'Ireland Under 19s',shortName:'IREu19'},{id:178,fullName:'New Zealand Under 19s',shortName:'NZu19'},{id:179,fullName:'Pakistan Under 19s',shortName:'PAKu19'},{id:182,fullName:'South Africa Under 19s',shortName:'SAu19'},{id:183,fullName:'Sri Lanka Under 19s',shortName:'SLu19'},{id:185,fullName:'West Indies Under 19s',shortName:'WIu19'},{id:186,fullName:'Zimbabwe Under 19s',shortName:'ZIMu19'},{id:174,fullName:'Canada Under 19s',shortName:'CANu19'},{id:607,fullName:'Kenya Under 19s',shortName:'KENu19'},{id:177,fullName:'Namibia Under 19s',shortName:'NAMu19'},{id:180,fullName:'Papua New Guinea Under 19s',shortName:'PNGu19'}],championsTrophyVenues:[{id:68,fullName:'Cardiff Wales Stadium, Cardiff',shortName:'Cardiff Wales Stadium'},{id:40,fullName:'Edgbaston, Birmingham',shortName:'Edgbaston'},{id:82,fullName:'The Oval, London',shortName:'The Oval'}],wwcTeams:[{id:30,fullName:'Australia',shortName:'Australia'},{id:28,fullName:'England',shortName:'England'},{id:31,fullName:'India',shortName:'India'},{id:26,fullName:'New Zealand',shortName:'New Zealand'},{id:29,fullName:'Pakistan',shortName:'Pakistan'},{id:25,fullName:'South Africa',shortName:'South Africa'},{id:24,fullName:'Sri Lanka',shortName:'Sri Lanka'},{id:27,fullName:'West Indies',shortName:'West Indies'}],wwcVenues:[{id:223,fullName:'Bristol County Ground, Bristol',shortName:'Bristol County Ground'},{id:256,fullName:'County Ground, Derby',shortName:'County Ground'},{id:263,fullName:'Grace Road, Leicester',shortName:'Grace Road'},{id:71,fullName:"Lord's Cricket Ground, London",shortName:"Lord's"},{id:260,fullName:'The County Ground, Taunton',shortName:'The County Ground'}],wwt20Teams:[{id:30,fullName:'Australia Women',shortName:'Australia'},{id:170,fullName:'Bangladesh Women',shortName:'Bangladesh'},{id:28,fullName:'England Women',shortName:'England'},{id:31,fullName:'India Women',shortName:'India'},{id:162,fullName:'Ireland Women',shortName:'Ireland'},{id:26,fullName:'New Zealand Women',shortName:'New Zealand'},{id:29,fullName:'Pakistan Women',shortName:'Pakistan'},{id:25,fullName:'South Africa Women',shortName:'South Africa'},{id:24,fullName:'Sri Lanka Women',shortName:'Sri Lanka'},{id:27,fullName:'Windies Women',shortName:'Windies'}],wwt20Venues:[{id:99,fullName:'Guyana National Stadium',shortName:'Guyana National Stadium'},{id:100,fullName:'Daren Sammy National Cricket Stadium',shortName:'Daren Sammy National Cricket Stadium'},{id:65,fullName:'Sir Vivian Richards Stadium',shortName:'Sir Vivian Richards Stadium'}],cricketWorldCupVenues:[{id:223,fullName:'Bristol County Ground',shortName:'Bristol County Ground'},{id:68,fullName:'Cardiff Wales Stadium',shortName:'Cardiff Wales Stadium'},{id:260,fullName:'County Ground',shortName:'County Ground'},{id:40,fullName:'Edgbaston',shortName:'Edgbaston'},{id:72,fullName:'Hampshire Bowl',shortName:'Hampshire Bowl'},{id:73,fullName:'Headingley',shortName:'Headingley'},{id:71,fullName:"Lord's",shortName:"Lord's"},{id:39,fullName:'Old Trafford',shortName:'Old Trafford'},{id:82,fullName:'The Oval',shortName:'The Oval'},{id:38,fullName:'The Riverside',shortName:'The Riverside'},{id:70,fullName:'Trent Bridge',shortName:'Trent Bridge'}],cricketWorldCup:[{id:17,fullName:'Afghanistan',shortName:'Afghanistan'},{id:15,fullName:'Australia',shortName:'Australia'},{id:22,fullName:'Bangladesh',shortName:'Bangladesh'},{id:11,fullName:'England',shortName:'England'},{id:14,fullName:'India',shortName:'India'},{id:16,fullName:'New Zealand',shortName:'New Zealand'},{id:20,fullName:'Pakistan',shortName:'Pakistan'},{id:19,fullName:'South Africa',shortName:'South Africa'},{id:13,fullName:'Sri Lanka',shortName:'Sri Lanka'},{id:21,fullName:'West Indies',shortName:'Windies'}],worldTestChampionship:[{id:15,fullName:'Australia',shortName:'Australia',type:'CRICKET_TEAM'},{id:22,fullName:'Bangladesh',shortName:'Bangladesh',type:'CRICKET_TEAM'},{id:11,fullName:'England',shortName:'England',type:'CRICKET_TEAM'},{id:14,fullName:'India',shortName:'India',type:'CRICKET_TEAM'},{id:16,fullName:'New Zealand',shortName:'New Zealand',type:'CRICKET_TEAM'},{id:20,fullName:'Pakistan',shortName:'Pakistan',type:'CRICKET_TEAM'},{id:19,fullName:'South Africa',shortName:'South Africa',type:'CRICKET_TEAM'},{id:13,fullName:'Sri Lanka',shortName:'Sri Lanka',type:'CRICKET_TEAM'},{id:21,fullName:'West Indies',shortName:'Windies',type:'CRICKET_TEAM'}]};})(PULSE.app);(function(app,core){"use strict";/**
   * @namespace app.defaultData.private
   */var defaultData;// expiry set in days
var dataExpiry=1;/**
   * Map teams data response to structured model
   * @param  {Array} teams Array of team groups to be modelled
   * @return {Object} Teams object containing separate Arrays of teams ( all, full, affiliate, associate, womens )
   */var modelTeams=function modelTeams(teams){/** 
     * Model object for teams to be mapped to - labels must match grouping labels in teams data
     * @type {Object}
     */var model={all:{label:'All',teams:[]},full:{label:'Full Members',teams:[]},affiliate:{label:'Affiliate Members',teams:[]},associate:{label:'Associate Members',teams:[]},womens:{label:'Womens',teams:[]}};teams.forEach(function(type){var target=false;switch(type.label){case model.full.label:target=model.full.teams;break;case model.affiliate.label:target=model.affiliate.teams;break;case model.womens.label:target=model.womens.teams;break;case model.associate.label:target=model.associate.teams;}if(target){type.members.forEach(function(member){if(model.all.teams.indexOf(member)===-1){model.all.teams.push(member);}if(target.indexOf(member)===-1){target.push(member);}});}});return model;};/**
   * Function to request new Cricket Meta data based on the app.environment.tournamentGroupId
   * defaultData is set on retrieval of data
   */var getData=function getData(){var setDefaultData=function setDefaultData(data){defaultData={teams:modelTeams(data.teams),venues:data.venues,// Should be modelled as required
tournaments:data.tournaments// Should be modelled as required
};};var cricketSubscriber={url:app.apiPath.fixtures.meta+"?tournamentGroupIds="+app.environment.tournamentGroupId,target:this,method:"GET",callback:setDefaultData,constant:true,forceCallback:true};core.data.manager.add(cricketSubscriber);};/**
   * Check for existing defaultICCData in local storage
   * If it doesn't exist make a new request
   * @param  {Function} callback Function to return data response to
   */var checkData=function checkData(callback){var stored=core.localStorage.getStorage("defaultICCData");//var stored = false;
if(stored){defaultData=JSON.parse(stored);callback(defaultData);}else{getData();var checkForData=setInterval(function(){if(defaultData){callback(defaultData);clearInterval(checkForData);core.localStorage.setStorage("defaultICCData",JSON.stringify(defaultData),dataExpiry);}},500);}};/**
   * Public app.defaultData object providing methods to get constatnt ICC data
   * @type {Object}
   */app.defaultData={/**
     * get data from app.defaultData
     * should be called whenever defaultData is required app.defaultData.get( callback )
     * @param  {Function} callback Function to return data response to
     */get:function get(callback){if(!callback){return"ERROR defaultData.js - No callback method provided to pass default data to.";}if(defaultData){callback(defaultData);}else{checkData(callback);}}};})(PULSE.app,PULSE.core);/* globals PULSE.core */ /* eslint id-length: ["error", { "exceptions": ["LT", "LTS", "l", "L", "ll",
 * "LL", "lll", "LLL", "llll", "LLLL" ] }] */ /* eslint no-console: ["error", { allow: ["warn"] }] */(function(app,core){'use strict';app.I18N={};app.I18N.setup=function(){var reqLanguage=core.localStorage.getStorage('req_language',true);app.language=reqLanguage||app.defaultLanguage;var Translator=new app.I18N.Translator(PULSE.I18N);if(!PULSE.I18N){PULSE.I18N={};}PULSE.I18N.lookup=function lookup(){return Translator.lookup.apply(Translator,arguments);};PULSE.I18N.lookupKey=function lookupKey(){return Translator.lookupKey.apply(Translator,arguments);};if(typeof window.moment!=='undefined'){app.I18N.enOverride();moment.locale(app.language);}};app.I18N.enOverride=function(){moment.locale('en',{longDateFormat:{LT:'HH:mm',// LT: "h:mm A",
LTS:'h:mm:ss A',l:'DD/MM',L:'DD/MM/YYYY',ll:'D MMMM',LL:'D MMMM YYYY',lll:'MMM D YYYY LT',LLL:'MMMM Do YYYY LT',llll:'ddd MMM D YYYY',LLLL:'dddd, MMMM Do YYYY'},yearFirst:false});};app.I18N.Translator=function Translator(translationsData){var _self=this;_self.hasTranslations=false;_self.language=app.language;if(translationsData){_self.hasTranslations=true;if(_self.language!==translationsData.language){if(typeof translationsData.language==='undefined'){console.warn('Language mismatch! Using '+translationsData.language);}_self.language=translationsData.language;}_self.translations=translationsData.translations||{};_self.hasTranslations=true;}else{_self.hasTranslations=false;_self.translations={};}};app.I18N.Translator.prototype.lookup=function lookup(key){var replaceMap=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var _self=this;if(key&&replaceMap){var mapping=_self.lookupKey(key);for(var replaceKey in replaceMap){if({}.hasOwnProperty.call(replaceMap,replaceKey)){var regExp=new RegExp('\\${'+replaceKey+'}','gi');mapping=mapping.replace(regExp,replaceMap[replaceKey]);}}return mapping;}return'';};app.I18N.Translator.prototype.lookupKey=function lookupKey(key){var _self=this;if(_self.hasTranslations){return _self.translations[key]||key;}return key;};})(PULSE.app,PULSE.core);//globals PULSE, PULSE.app
/* global moment */(function(app){'use strict';app.loadTimezones=function(){moment.tz.load({version:'2016f',zones:['Africa/Abidjan|GMT|0|0||48e5','Africa/Khartoum|EAT|-30|0||51e5','Africa/Algiers|CET|-10|0||26e5','Africa/Lagos|WAT|-10|0||17e6','Africa/Maputo|CAT|-20|0||26e5','Africa/Cairo|EET EEST|-20 -30|010101010|1Cby0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0|15e6','Africa/Casablanca|WET WEST|0 -10|01010101010101010101010101010101010101010|1Cco0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0|32e5','Europe/Paris|CET CEST|-10 -20|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e6','Africa/Johannesburg|SAST|-20|0||84e5','Africa/Tripoli|EET CET CEST|-20 -10 -20|0120|1IlA0 TA0 1o00|11e5','Africa/Windhoek|WAST WAT|-20 -10|01010101010101010101010|1C1c0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0|32e4','America/Adak|HST HDT|a0 90|01010101010101010101010|1BR00 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326','America/Anchorage|AKST AKDT|90 80|01010101010101010101010|1BQX0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4','America/Santo_Domingo|AST|40|0||29e5','America/Araguaina|BRT BRST|30 20|010|1IdD0 Lz0|14e4','America/Argentina/Buenos_Aires|ART|30|0|','America/Asuncion|PYST PYT|30 40|01010101010101010101010|1C430 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0|28e5','America/Panama|EST|50|0||15e5','America/Bahia|BRT BRST|30 20|010|1FJf0 Rb0|27e5','America/Bahia_Banderas|MST CDT CST|70 50 60|01212121212121212121212|1C1l0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|84e3','America/Fortaleza|BRT|30|0||34e5','America/Managua|CST|60|0||22e5','America/Manaus|AMT|40|0||19e5','America/Bogota|COT|50|0||90e5','America/Denver|MST MDT|70 60|01010101010101010101010|1BQV0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5','America/Campo_Grande|AMST AMT|30 40|01010101010101010101010|1BIr0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10|77e4','America/Cancun|CST CDT EST|60 50 50|010101010102|1C1k0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4','America/Caracas|VET VET|4u 40|01|1QMT0|29e5','America/Cayenne|GFT|30|0||58e3','America/Chicago|CST CDT|60 50|01010101010101010101010|1BQU0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5','America/Chihuahua|MST MDT|70 60|01010101010101010101010|1C1l0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|81e4','America/Phoenix|MST|70|0||42e5','America/Los_Angeles|PST PDT|80 70|01010101010101010101010|1BQW0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6','America/New_York|EST EDT|50 40|01010101010101010101010|1BQT0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6','America/Rio_Branco|AMT ACT|40 50|01|1KLE0|31e4','America/Fort_Nelson|PST PDT MST|80 70 70|010101010102|1BQW0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2','America/Halifax|AST ADT|40 30|01010101010101010101010|1BQS0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4','America/Godthab|WGT WGST|30 20|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e3','America/Goose_Bay|AST ADT|40 30|01010101010101010101010|1BQQ1 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|76e2','America/Grand_Turk|EST EDT AST|50 40 40|0101010101012|1BQT0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2','America/Guayaquil|ECT|50|0||27e5','America/Guyana|GYT|40|0||80e4','America/Havana|CST CDT|50 40|01010101010101010101010|1BQR0 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5','America/La_Paz|BOT|40|0||19e5','America/Lima|PET|50|0||11e6','America/Mexico_City|CST CDT|60 50|01010101010101010101010|1C1k0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|20e6','America/Metlakatla|PST AKST AKDT|80 90 80|012121212121|1PAa0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2','America/Miquelon|PMST PMDT|30 20|01010101010101010101010|1BQR0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2','America/Montevideo|UYST UYT|20 30|010101010101|1BQQ0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0|17e5','America/Noronha|FNT|20|0||30e2','America/North_Dakota/Beulah|MST MDT CST CDT|70 60 60 50|01232323232323232323232|1BQV0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0','America/Paramaribo|SRT|30|0||24e4','America/Port-au-Prince|EST EDT|50 40|010101010|1GI70 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5','America/Santiago|CLST CLT|30 40|010101010101010101010|1C1f0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|62e5','America/Sao_Paulo|BRST BRT|20 30|01010101010101010101010|1BIq0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10|20e6','America/Scoresbysund|EGT EGST|10 0|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|452','America/St_Johns|NST NDT|3u 2u|01010101010101010101010|1BQPv 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4','Antarctica/Casey|CAST AWST|-b0 -80|0101|1BN30 40P0 KL0|10','Antarctica/Davis|DAVT DAVT|-50 -70|0101|1BPw0 3Wn0 KN0|70','Antarctica/DumontDUrville|DDUT|-a0|0||80','Antarctica/Macquarie|AEDT MIST|-b0 -b0|01|1C140|1','Antarctica/Mawson|MAWT|-50|0||60','Pacific/Auckland|NZDT NZST|-d0 -c0|01010101010101010101010|1C120 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|14e5','Antarctica/Rothera|ROTT|30|0||130','Antarctica/Syowa|SYOT|-30|0||20','Antarctica/Troll|UTC CEST|0 -20|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|40','Antarctica/Vostok|VOST|-60|0||25','Asia/Baghdad|AST|-30|0||66e5','Asia/Almaty|+06|-60|0||15e5','Asia/Amman|EET EEST|-20 -30|010101010101010101010|1BVy0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0|25e5','Asia/Anadyr|ANAT ANAST ANAT|-c0 -c0 -b0|0120|1BWe0 1qN0 WM0|13e3','Asia/Aqtobe|+05|-50|0||27e4','Asia/Ashgabat|TMT|-50|0||41e4','Asia/Baku|AZT AZST|-40 -50|0101010101010|1BWo0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5','Asia/Bangkok|ICT|-70|0||15e6','Asia/Barnaul|+06 +07|-60 -70|010101|1BWk0 1qM0 WM0 8Hz0 3rd0','Asia/Beirut|EET EEST|-20 -30|01010101010101010101010|1BWm0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0|22e5','Asia/Bishkek|KGT|-60|0||87e4','Asia/Brunei|BNT|-80|0||42e4','Asia/Kolkata|IST|-5u|0||15e6','Asia/Chita|YAKT YAKST YAKT IRKT|-90 -a0 -a0 -80|010230|1BWh0 1qM0 WM0 8Hz0 3re0|33e4','Asia/Choibalsan|CHOT CHOST|-80 -90|0101010101010|1O8G0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0|38e3','Asia/Shanghai|CST|-80|0||23e6','Asia/Dhaka|BDT|-60|0||16e6','Asia/Damascus|EET EEST|-20 -30|01010101010101010101010|1C0m0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0|26e5','Asia/Dili|TLT|-90|0||19e4','Asia/Dubai|GST|-40|0||39e5','Asia/Dushanbe|TJT|-50|0||76e4','Asia/Gaza|EET EEST|-20 -30|01010101010101010101010|1BVW1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1ny0 1220 1qm0 1220 1ny0 1220 1ny0 1220 1ny0|18e5','Asia/Hebron|EET EEST|-20 -30|0101010101010101010101010|1BVy0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1ny0 1220 1qm0 1220 1ny0 1220 1ny0 1220 1ny0|25e4','Asia/Hong_Kong|HKT|-80|0||73e5','Asia/Hovd|HOVT HOVST|-70 -80|0101010101010|1O8H0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0|81e3','Asia/Irkutsk|IRKT IRKST IRKT|-80 -90 -90|01020|1BWi0 1qM0 WM0 8Hz0|60e4','Europe/Istanbul|EET EEST|-20 -30|01010101010101010101010|1BWp0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|13e6','Asia/Jakarta|WIB|-70|0||31e6','Asia/Jayapura|WIT|-90|0||26e4','Asia/Jerusalem|IST IDT|-20 -30|01010101010101010101010|1BVA0 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0|81e4','Asia/Kabul|AFT|-4u|0||46e5','Asia/Kamchatka|PETT PETST PETT|-c0 -c0 -b0|0120|1BWe0 1qN0 WM0|18e4','Asia/Karachi|PKT|-50|0||24e6','Asia/Urumqi|XJT|-60|0||32e5','Asia/Kathmandu|NPT|-5J|0||12e5','Asia/Khandyga|VLAT VLAST VLAT YAKT YAKT|-a0 -b0 -b0 -a0 -90|010234|1BWg0 1qM0 WM0 17V0 7zD0|66e2','Asia/Krasnoyarsk|KRAT KRAST KRAT|-70 -80 -80|01020|1BWj0 1qM0 WM0 8Hz0|10e5','Asia/Kuala_Lumpur|MYT|-80|0||71e5','Asia/Magadan|MAGT MAGST MAGT MAGT|-b0 -c0 -c0 -a0|010230|1BWf0 1qM0 WM0 8Hz0 3Cq0|95e3','Asia/Makassar|WITA|-80|0||15e5','Asia/Manila|PHT|-80|0||24e6','Europe/Athens|EET EEST|-20 -30|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|35e5','Asia/Novokuznetsk|+07 +06|-70 -60|010|1Dp80 WM0|55e4','Asia/Novosibirsk|+06 +07|-60 -70|010101|1BWk0 1qM0 WM0 8Hz0 4eN0|15e5','Asia/Omsk|OMST OMSST OMST|-60 -70 -70|01020|1BWk0 1qM0 WM0 8Hz0|12e5','Asia/Pyongyang|KST KST|-90 -8u|01|1P4D0|29e5','Asia/Rangoon|MMT|-6u|0||48e5','Asia/Sakhalin|SAKT SAKST SAKT|-a0 -b0 -b0|010202|1BWg0 1qM0 WM0 8Hz0 3rd0|58e4','Asia/Tashkent|UZT|-50|0||23e5','Asia/Seoul|KST|-90|0||23e6','Asia/Singapore|SGT|-80|0||56e5','Asia/Srednekolymsk|MAGT MAGST MAGT SRET|-b0 -c0 -c0 -b0|01023|1BWf0 1qM0 WM0 8Hz0|35e2','Asia/Tbilisi|GET|-40|0||11e5','Asia/Tehran|IRST IRDT|-3u -4u|01010101010101010101010|1BTUu 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0|14e6','Asia/Thimphu|BTT|-60|0||79e3','Asia/Tokyo|JST|-90|0||38e6','Asia/Tomsk|+06 +07|-60 -70|010101|1BWk0 1qM0 WM0 8Hz0 3Qp0|10e5','Asia/Ulaanbaatar|ULAT ULAST|-80 -90|0101010101010|1O8G0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0|12e5','Asia/Ust-Nera|MAGT MAGST MAGT VLAT VLAT|-b0 -c0 -c0 -b0 -a0|010234|1BWf0 1qM0 WM0 17V0 7zD0|65e2','Asia/Vladivostok|VLAT VLAST VLAT|-a0 -b0 -b0|01020|1BWg0 1qM0 WM0 8Hz0|60e4','Asia/Yakutsk|YAKT YAKST YAKT|-90 -a0 -a0|01020|1BWh0 1qM0 WM0 8Hz0|28e4','Asia/Yekaterinburg|YEKT YEKST YEKT|-50 -60 -60|01020|1BWl0 1qM0 WM0 8Hz0|14e5','Asia/Yerevan|AMT AMST|-40 -50|01010|1BWm0 1qM0 WM0 1qM0|13e5','Atlantic/Azores|AZOT AZOST|10 0|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|25e4','Europe/Lisbon|WET WEST|0 -10|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e5','Atlantic/Cape_Verde|CVT|10|0||50e4','Atlantic/South_Georgia|GST|20|0||30','Atlantic/Stanley|FKST FKT|30 40|010|1C6R0 U10|21e2','Australia/Sydney|AEDT AEST|-b0 -a0|01010101010101010101010|1C140 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|40e5','Australia/Adelaide|ACDT ACST|-au -9u|01010101010101010101010|1C14u 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|11e5','Australia/Brisbane|AEST|-a0|0||20e5','Australia/Darwin|ACST|-9u|0||12e4','Australia/Eucla|ACWST|-8J|0||368','Australia/Lord_Howe|LHDT LHST|-b0 -au|01010101010101010101010|1C130 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu|347','Australia/Perth|AWST|-80|0||18e5','Pacific/Easter|EASST EAST|50 60|010101010101010101010|1C1f0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|30e2','Europe/Dublin|GMT IST|0 -10|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5','Etc/GMT+1|GMT+1|10|0|','Etc/GMT+10|GMT+10|a0|0|','Etc/GMT+11|GMT+11|b0|0|','Etc/GMT+12|GMT+12|c0|0|','Etc/GMT+2|GMT+2|20|0|','Etc/GMT+3|GMT+3|30|0|','Etc/GMT+4|GMT+4|40|0|','Etc/GMT+5|GMT+5|50|0|','Etc/GMT+6|GMT+6|60|0|','Etc/GMT+7|GMT+7|70|0|','Etc/GMT+8|GMT+8|80|0|','Etc/GMT+9|GMT+9|90|0|','Etc/GMT-1|GMT-1|-10|0|','Etc/GMT-10|GMT-10|-a0|0|','Etc/GMT-11|GMT-11|-b0|0|','Etc/GMT-12|GMT-12|-c0|0|','Etc/GMT-13|GMT-13|-d0|0|','Etc/GMT-14|GMT-14|-e0|0|','Etc/GMT-2|GMT-2|-20|0|','Etc/GMT-3|GMT-3|-30|0|','Etc/GMT-4|GMT-4|-40|0|','Etc/GMT-5|GMT-5|-50|0|','Etc/GMT-6|GMT-6|-60|0|','Etc/GMT-7|GMT-7|-70|0|','Etc/GMT-8|GMT-8|-80|0|','Etc/GMT-9|GMT-9|-90|0|','Etc/UCT|UCT|0|0|','Etc/UTC|UTC|0|0|','Europe/Astrakhan|+03 +04|-30 -40|010101|1BWn0 1qM0 WM0 8Hz0 3rd0','Europe/London|GMT BST|0 -10|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|10e6','Europe/Chisinau|EET EEST|-20 -30|01010101010101010101010|1BWo0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|67e4','Europe/Kaliningrad|EET EEST FET|-20 -30 -30|01020|1BWo0 1qM0 WM0 8Hz0|44e4','Europe/Kirov|+03 +04|-30 -40|01010|1BWn0 1qM0 WM0 8Hz0|48e4','Europe/Minsk|EET EEST FET MSK|-20 -30 -30 -30|01023|1BWo0 1qM0 WM0 8Hy0|19e5','Europe/Moscow|MSK MSD MSK|-30 -40 -40|01020|1BWn0 1qM0 WM0 8Hz0|16e6','Europe/Samara|SAMT SAMST SAMT|-40 -40 -30|0120|1BWm0 1qN0 WM0|12e5','Europe/Simferopol|EET EEST MSK MSK|-20 -30 -40 -30|01010101023|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0|33e4','Pacific/Honolulu|HST|a0|0||37e4','Indian/Chagos|IOT|-60|0||30e2','Indian/Christmas|CXT|-70|0||21e2','Indian/Cocos|CCT|-6u|0||596','Indian/Kerguelen|TFT|-50|0||130','Indian/Mahe|SCT|-40|0||79e3','Indian/Maldives|MVT|-50|0||35e4','Indian/Mauritius|MUT|-40|0||15e4','Indian/Reunion|RET|-40|0||84e4','Pacific/Majuro|MHT|-c0|0||28e3','MET|MET MEST|-10 -20|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00','Pacific/Chatham|CHADT CHAST|-dJ -cJ|01010101010101010101010|1C120 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|600','Pacific/Apia|SST SDT WSDT WSST|b0 a0 -e0 -d0|01012323232323232323232|1Dbn0 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|37e3','Pacific/Bougainville|PGT BST|-a0 -b0|01|1NwE0|18e4','Pacific/Chuuk|CHUT|-a0|0||49e3','Pacific/Efate|VUT|-b0|0||66e3','Pacific/Enderbury|PHOT|-d0|0||1','Pacific/Fakaofo|TKT TKT|b0 -d0|01|1Gfn0|483','Pacific/Fiji|FJST FJT|-d0 -c0|01010101010101010101010|1BWe0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0|88e4','Pacific/Funafuti|TVT|-c0|0||45e2','Pacific/Galapagos|GALT|60|0||25e3','Pacific/Gambier|GAMT|90|0||125','Pacific/Guadalcanal|SBT|-b0|0||11e4','Pacific/Guam|ChST|-a0|0||17e4','Pacific/Kiritimati|LINT|-e0|0||51e2','Pacific/Kosrae|KOST|-b0|0||66e2','Pacific/Marquesas|MART|9u|0||86e2','Pacific/Pago_Pago|SST|b0|0||37e2','Pacific/Nauru|NRT|-c0|0||10e3','Pacific/Niue|NUT|b0|0||12e2','Pacific/Norfolk|NFT NFT|-bu -b0|01|1PoCu|25e4','Pacific/Noumea|NCT|-b0|0||98e3','Pacific/Palau|PWT|-90|0||21e3','Pacific/Pitcairn|PST|80|0||56','Pacific/Pohnpei|PONT|-b0|0||34e3','Pacific/Port_Moresby|PGT|-a0|0||25e4','Pacific/Rarotonga|CKT|a0|0||13e3','Pacific/Tahiti|TAHT|a0|0||18e4','Pacific/Tarawa|GILT|-c0|0||29e3','Pacific/Tongatapu|TOT|-d0|0||75e3','Pacific/Wake|WAKT|-c0|0||16e3','Pacific/Wallis|WFT|-c0|0||94'],links:['Africa/Abidjan|Africa/Accra','Africa/Abidjan|Africa/Bamako','Africa/Abidjan|Africa/Banjul','Africa/Abidjan|Africa/Bissau','Africa/Abidjan|Africa/Conakry','Africa/Abidjan|Africa/Dakar','Africa/Abidjan|Africa/Freetown','Africa/Abidjan|Africa/Lome','Africa/Abidjan|Africa/Monrovia','Africa/Abidjan|Africa/Nouakchott','Africa/Abidjan|Africa/Ouagadougou','Africa/Abidjan|Africa/Sao_Tome','Africa/Abidjan|Africa/Timbuktu','Africa/Abidjan|America/Danmarkshavn','Africa/Abidjan|Atlantic/Reykjavik','Africa/Abidjan|Atlantic/St_Helena','Africa/Abidjan|Etc/GMT','Africa/Abidjan|Etc/GMT+0','Africa/Abidjan|Etc/GMT-0','Africa/Abidjan|Etc/GMT0','Africa/Abidjan|Etc/Greenwich','Africa/Abidjan|GMT','Africa/Abidjan|GMT+0','Africa/Abidjan|GMT-0','Africa/Abidjan|GMT0','Africa/Abidjan|Greenwich','Africa/Abidjan|Iceland','Africa/Algiers|Africa/Tunis','Africa/Cairo|Egypt','Africa/Casablanca|Africa/El_Aaiun','Africa/Johannesburg|Africa/Maseru','Africa/Johannesburg|Africa/Mbabane','Africa/Khartoum|Africa/Addis_Ababa','Africa/Khartoum|Africa/Asmara','Africa/Khartoum|Africa/Asmera','Africa/Khartoum|Africa/Dar_es_Salaam','Africa/Khartoum|Africa/Djibouti','Africa/Khartoum|Africa/Juba','Africa/Khartoum|Africa/Kampala','Africa/Khartoum|Africa/Mogadishu','Africa/Khartoum|Africa/Nairobi','Africa/Khartoum|Indian/Antananarivo','Africa/Khartoum|Indian/Comoro','Africa/Khartoum|Indian/Mayotte','Africa/Lagos|Africa/Bangui','Africa/Lagos|Africa/Brazzaville','Africa/Lagos|Africa/Douala','Africa/Lagos|Africa/Kinshasa','Africa/Lagos|Africa/Libreville','Africa/Lagos|Africa/Luanda','Africa/Lagos|Africa/Malabo','Africa/Lagos|Africa/Ndjamena','Africa/Lagos|Africa/Niamey','Africa/Lagos|Africa/Porto-Novo','Africa/Maputo|Africa/Blantyre','Africa/Maputo|Africa/Bujumbura','Africa/Maputo|Africa/Gaborone','Africa/Maputo|Africa/Harare','Africa/Maputo|Africa/Kigali','Africa/Maputo|Africa/Lubumbashi','Africa/Maputo|Africa/Lusaka','Africa/Tripoli|Libya','America/Adak|America/Atka','America/Adak|US/Aleutian','America/Anchorage|America/Juneau','America/Anchorage|America/Nome','America/Anchorage|America/Sitka','America/Anchorage|America/Yakutat','America/Anchorage|US/Alaska','America/Argentina/Buenos_Aires|America/Argentina/Catamarca','America/Argentina/Buenos_Aires|America/Argentina/ComodRivadavia','America/Argentina/Buenos_Aires|America/Argentina/Cordoba','America/Argentina/Buenos_Aires|America/Argentina/Jujuy','America/Argentina/Buenos_Aires|America/Argentina/La_Rioja','America/Argentina/Buenos_Aires|America/Argentina/Mendoza','America/Argentina/Buenos_Aires|America/Argentina/Rio_Gallegos','America/Argentina/Buenos_Aires|America/Argentina/Salta','America/Argentina/Buenos_Aires|America/Argentina/San_Juan','America/Argentina/Buenos_Aires|America/Argentina/San_Luis','America/Argentina/Buenos_Aires|America/Argentina/Tucuman','America/Argentina/Buenos_Aires|America/Argentina/Ushuaia','America/Argentina/Buenos_Aires|America/Buenos_Aires','America/Argentina/Buenos_Aires|America/Catamarca','America/Argentina/Buenos_Aires|America/Cordoba','America/Argentina/Buenos_Aires|America/Jujuy','America/Argentina/Buenos_Aires|America/Mendoza','America/Argentina/Buenos_Aires|America/Rosario','America/Campo_Grande|America/Cuiaba','America/Chicago|America/Indiana/Knox','America/Chicago|America/Indiana/Tell_City','America/Chicago|America/Knox_IN','America/Chicago|America/Matamoros','America/Chicago|America/Menominee','America/Chicago|America/North_Dakota/Center','America/Chicago|America/North_Dakota/New_Salem','America/Chicago|America/Rainy_River','America/Chicago|America/Rankin_Inlet','America/Chicago|America/Resolute','America/Chicago|America/Winnipeg','America/Chicago|CST6CDT','America/Chicago|Canada/Central','America/Chicago|US/Central','America/Chicago|US/Indiana-Starke','America/Chihuahua|America/Mazatlan','America/Chihuahua|Mexico/BajaSur','America/Denver|America/Boise','America/Denver|America/Cambridge_Bay','America/Denver|America/Edmonton','America/Denver|America/Inuvik','America/Denver|America/Ojinaga','America/Denver|America/Shiprock','America/Denver|America/Yellowknife','America/Denver|Canada/Mountain','America/Denver|MST7MDT','America/Denver|Navajo','America/Denver|US/Mountain','America/Fortaleza|America/Belem','America/Fortaleza|America/Maceio','America/Fortaleza|America/Recife','America/Fortaleza|America/Santarem','America/Halifax|America/Glace_Bay','America/Halifax|America/Moncton','America/Halifax|America/Thule','America/Halifax|Atlantic/Bermuda','America/Halifax|Canada/Atlantic','America/Havana|Cuba','America/Los_Angeles|America/Dawson','America/Los_Angeles|America/Ensenada','America/Los_Angeles|America/Santa_Isabel','America/Los_Angeles|America/Tijuana','America/Los_Angeles|America/Vancouver','America/Los_Angeles|America/Whitehorse','America/Los_Angeles|Canada/Pacific','America/Los_Angeles|Canada/Yukon','America/Los_Angeles|Mexico/BajaNorte','America/Los_Angeles|PST8PDT','America/Los_Angeles|US/Pacific','America/Los_Angeles|US/Pacific-New','America/Managua|America/Belize','America/Managua|America/Costa_Rica','America/Managua|America/El_Salvador','America/Managua|America/Guatemala','America/Managua|America/Regina','America/Managua|America/Swift_Current','America/Managua|America/Tegucigalpa','America/Managua|Canada/East-Saskatchewan','America/Managua|Canada/Saskatchewan','America/Manaus|America/Boa_Vista','America/Manaus|America/Porto_Velho','America/Manaus|Brazil/West','America/Mexico_City|America/Merida','America/Mexico_City|America/Monterrey','America/Mexico_City|Mexico/General','America/New_York|America/Detroit','America/New_York|America/Fort_Wayne','America/New_York|America/Indiana/Indianapolis','America/New_York|America/Indiana/Marengo','America/New_York|America/Indiana/Petersburg','America/New_York|America/Indiana/Vevay','America/New_York|America/Indiana/Vincennes','America/New_York|America/Indiana/Winamac','America/New_York|America/Indianapolis','America/New_York|America/Iqaluit','America/New_York|America/Kentucky/Louisville','America/New_York|America/Kentucky/Monticello','America/New_York|America/Louisville','America/New_York|America/Montreal','America/New_York|America/Nassau','America/New_York|America/Nipigon','America/New_York|America/Pangnirtung','America/New_York|America/Thunder_Bay','America/New_York|America/Toronto','America/New_York|Canada/Eastern','America/New_York|EST5EDT','America/New_York|US/East-Indiana','America/New_York|US/Eastern','America/New_York|US/Michigan','America/Noronha|Brazil/DeNoronha','America/Panama|America/Atikokan','America/Panama|America/Cayman','America/Panama|America/Coral_Harbour','America/Panama|America/Jamaica','America/Panama|EST','America/Panama|Jamaica','America/Phoenix|America/Creston','America/Phoenix|America/Dawson_Creek','America/Phoenix|America/Hermosillo','America/Phoenix|MST','America/Phoenix|US/Arizona','America/Rio_Branco|America/Eirunepe','America/Rio_Branco|America/Porto_Acre','America/Rio_Branco|Brazil/Acre','America/Santiago|Antarctica/Palmer','America/Santiago|Chile/Continental','America/Santo_Domingo|America/Anguilla','America/Santo_Domingo|America/Antigua','America/Santo_Domingo|America/Aruba','America/Santo_Domingo|America/Barbados','America/Santo_Domingo|America/Blanc-Sablon','America/Santo_Domingo|America/Curacao','America/Santo_Domingo|America/Dominica','America/Santo_Domingo|America/Grenada','America/Santo_Domingo|America/Guadeloupe','America/Santo_Domingo|America/Kralendijk','America/Santo_Domingo|America/Lower_Princes','America/Santo_Domingo|America/Marigot','America/Santo_Domingo|America/Martinique','America/Santo_Domingo|America/Montserrat','America/Santo_Domingo|America/Port_of_Spain','America/Santo_Domingo|America/Puerto_Rico','America/Santo_Domingo|America/St_Barthelemy','America/Santo_Domingo|America/St_Kitts','America/Santo_Domingo|America/St_Lucia','America/Santo_Domingo|America/St_Thomas','America/Santo_Domingo|America/St_Vincent','America/Santo_Domingo|America/Tortola','America/Santo_Domingo|America/Virgin','America/Sao_Paulo|Brazil/East','America/St_Johns|Canada/Newfoundland','Asia/Almaty|Asia/Qyzylorda','Asia/Aqtobe|Asia/Aqtau','Asia/Aqtobe|Asia/Oral','Asia/Ashgabat|Asia/Ashkhabad','Asia/Baghdad|Asia/Aden','Asia/Baghdad|Asia/Bahrain','Asia/Baghdad|Asia/Kuwait','Asia/Baghdad|Asia/Qatar','Asia/Baghdad|Asia/Riyadh','Asia/Bangkok|Asia/Ho_Chi_Minh','Asia/Bangkok|Asia/Phnom_Penh','Asia/Bangkok|Asia/Saigon','Asia/Bangkok|Asia/Vientiane','Asia/Dhaka|Asia/Dacca','Asia/Dubai|Asia/Muscat','Asia/Hong_Kong|Hongkong','Asia/Jakarta|Asia/Pontianak','Asia/Jerusalem|Asia/Tel_Aviv','Asia/Jerusalem|Israel','Asia/Kathmandu|Asia/Katmandu','Asia/Kolkata|Asia/Calcutta','Asia/Kolkata|Asia/Colombo','Asia/Kuala_Lumpur|Asia/Kuching','Asia/Makassar|Asia/Ujung_Pandang','Asia/Seoul|ROK','Asia/Shanghai|Asia/Chongqing','Asia/Shanghai|Asia/Chungking','Asia/Shanghai|Asia/Harbin','Asia/Shanghai|Asia/Macao','Asia/Shanghai|Asia/Macau','Asia/Shanghai|Asia/Taipei','Asia/Shanghai|PRC','Asia/Shanghai|ROC','Asia/Singapore|Singapore','Asia/Tashkent|Asia/Samarkand','Asia/Tehran|Iran','Asia/Thimphu|Asia/Thimbu','Asia/Tokyo|Japan','Asia/Ulaanbaatar|Asia/Ulan_Bator','Asia/Urumqi|Asia/Kashgar','Australia/Adelaide|Australia/Broken_Hill','Australia/Adelaide|Australia/South','Australia/Adelaide|Australia/Yancowinna','Australia/Brisbane|Australia/Lindeman','Australia/Brisbane|Australia/Queensland','Australia/Darwin|Australia/North','Australia/Lord_Howe|Australia/LHI','Australia/Perth|Australia/West','Australia/Sydney|Australia/ACT','Australia/Sydney|Australia/Canberra','Australia/Sydney|Australia/Currie','Australia/Sydney|Australia/Hobart','Australia/Sydney|Australia/Melbourne','Australia/Sydney|Australia/NSW','Australia/Sydney|Australia/Tasmania','Australia/Sydney|Australia/Victoria','Etc/UCT|UCT','Etc/UTC|Etc/Universal','Etc/UTC|Etc/Zulu','Etc/UTC|UTC','Etc/UTC|Universal','Etc/UTC|Zulu','Europe/Astrakhan|Europe/Ulyanovsk','Europe/Athens|Asia/Nicosia','Europe/Athens|EET','Europe/Athens|Europe/Bucharest','Europe/Athens|Europe/Helsinki','Europe/Athens|Europe/Kiev','Europe/Athens|Europe/Mariehamn','Europe/Athens|Europe/Nicosia','Europe/Athens|Europe/Riga','Europe/Athens|Europe/Sofia','Europe/Athens|Europe/Tallinn','Europe/Athens|Europe/Uzhgorod','Europe/Athens|Europe/Vilnius','Europe/Athens|Europe/Zaporozhye','Europe/Chisinau|Europe/Tiraspol','Europe/Dublin|Eire','Europe/Istanbul|Asia/Istanbul','Europe/Istanbul|Turkey','Europe/Lisbon|Atlantic/Canary','Europe/Lisbon|Atlantic/Faeroe','Europe/Lisbon|Atlantic/Faroe','Europe/Lisbon|Atlantic/Madeira','Europe/Lisbon|Portugal','Europe/Lisbon|WET','Europe/London|Europe/Belfast','Europe/London|Europe/Guernsey','Europe/London|Europe/Isle_of_Man','Europe/London|Europe/Jersey','Europe/London|GB','Europe/London|GB-Eire','Europe/Moscow|Europe/Volgograd','Europe/Moscow|W-SU','Europe/Paris|Africa/Ceuta','Europe/Paris|Arctic/Longyearbyen','Europe/Paris|Atlantic/Jan_Mayen','Europe/Paris|CET','Europe/Paris|Europe/Amsterdam','Europe/Paris|Europe/Andorra','Europe/Paris|Europe/Belgrade','Europe/Paris|Europe/Berlin','Europe/Paris|Europe/Bratislava','Europe/Paris|Europe/Brussels','Europe/Paris|Europe/Budapest','Europe/Paris|Europe/Busingen','Europe/Paris|Europe/Copenhagen','Europe/Paris|Europe/Gibraltar','Europe/Paris|Europe/Ljubljana','Europe/Paris|Europe/Luxembourg','Europe/Paris|Europe/Madrid','Europe/Paris|Europe/Malta','Europe/Paris|Europe/Monaco','Europe/Paris|Europe/Oslo','Europe/Paris|Europe/Podgorica','Europe/Paris|Europe/Prague','Europe/Paris|Europe/Rome','Europe/Paris|Europe/San_Marino','Europe/Paris|Europe/Sarajevo','Europe/Paris|Europe/Skopje','Europe/Paris|Europe/Stockholm','Europe/Paris|Europe/Tirane','Europe/Paris|Europe/Vaduz','Europe/Paris|Europe/Vatican','Europe/Paris|Europe/Vienna','Europe/Paris|Europe/Warsaw','Europe/Paris|Europe/Zagreb','Europe/Paris|Europe/Zurich','Europe/Paris|Poland','Pacific/Auckland|Antarctica/McMurdo','Pacific/Auckland|Antarctica/South_Pole','Pacific/Auckland|NZ','Pacific/Chatham|NZ-CHAT','Pacific/Chuuk|Pacific/Truk','Pacific/Chuuk|Pacific/Yap','Pacific/Easter|Chile/EasterIsland','Pacific/Guam|Pacific/Saipan','Pacific/Honolulu|HST','Pacific/Honolulu|Pacific/Johnston','Pacific/Honolulu|US/Hawaii','Pacific/Majuro|Kwajalein','Pacific/Majuro|Pacific/Kwajalein','Pacific/Pago_Pago|Pacific/Midway','Pacific/Pago_Pago|Pacific/Samoa','Pacific/Pago_Pago|US/Samoa','Pacific/Pohnpei|Pacific/Ponape']});};})(PULSE.app);(function(app){'use strict';/**
   * Map of media query size labels to screen widths
   * Mirrors what's in src/styles/layout/_mq.scss so the JS & CSS use the same values
   */app.measurements={mobile:400,phablet:640,tablet:840,desktop:1025,wide:1300};})(PULSE.app);/* global Keycloak */ /**
 * @typedef {Object} SSOConfig
 * @property {String} kcUrl Keycloak Authorisation URL
 * @property {String} kcRealm Keycloak Realm
 * @property {String} kcClientId Keycloak Client ID
 * @property {String} [loginRedirect] URL to redirect user to post login defaults to window.location.href
 * @property {String} [registerRedirect] URL to redirect user to post registering defaults to window.location.href
 * @property {String} [onReadyEventName] Event name to be dispatched once SSO ready, defaults to 'PULSELIVE.SSO.READY'
 * @property {Function} [onAuthSuccess] Callback function to be run on successful login
 * @property {Function} [onReadyCallback] Callback method to run once SSO ready
 */ /**
 * onReady
 *
 * When adapter is ready, render HTML
 *
 * @param { Bool } authenticated - Whether the user is authenticated with
 * SSO or not
 */var onReady=function onReady(authenticated){var _self=this;_self.SSO.ready=true;document.dispatchEvent(new CustomEvent(_self.settings.onReadyEventName||'PULSELIVE.SSO.READY',{detail:{ready:true}}));if(_self.settings.onReadyCallback){_self.settings.onReadyCallback(authenticated);}};/**
 * Error method triggered when SSO fails
 */var onAuthError=function onAuthError(){console.warn('SSO Authentication Error');localStorage.removeItem('kc_token');localStorage.removeItem('kc_refreshToken');};/**
 * Method to update access token on expiry
 */var onTokenExpired=function onTokenExpired(){var _self=this;_self.SSO.updateToken().success(function(){localStorage.setItem('kc_token',_self.SSO.token);localStorage.setItem('kc_refreshToken',_self.SSO.refreshToken);}).error(function(){console.warn('failed to update token on expired removing tokens from localStorage');localStorage.removeItem('kc_token');localStorage.removeItem('kc_refreshToken');});};/**
 * Method used to create a connection to the Pulselive SSO (Keycloak)
 * Initialises the SSO integration based on given configuration settings
 *
 * @param {SSOConfig} config configuration settings for SSO integration
 * @returns {Object} Instance of Pulselive SSO system (Keycloak)
 */ // eslint-disable-next-line
var PulseliveSSO=function PulseliveSSO(config){var _self=this;if(typeof Keycloak==='undefined'){console.warn('PulseliveSSO config error: window.Keycloak is not available');return;}if(typeof config.kcUrl!=='string'){console.warn('PulseliveSSO config error: config.kcUrl must be provided as a string');return;}if(typeof config.kcRealm!=='string'){console.warn('PulseliveSSO config error: config.kcRealm must be provided as a string');return;}if(typeof config.kcClientId!=='string'){console.warn('PulseliveSSO config error: config.kcClientId must be provided as a string');return;}_self.SSO=new Keycloak({url:config.kcUrl,realm:config.kcRealm,clientId:config.kcClientId});_self.settings=config;_self.SSO.onReady=onReady.bind(_self);_self.SSO.onAuthError=onAuthError.bind(_self);_self.SSO.onTokenExpired=onTokenExpired.bind(_self);if(typeof _self.settings.onAuthSuccess==='function'){_self.SSO.onAuthSuccess=_self.settings.onAuthSuccess;}var tokenfromStore=localStorage.getItem('kc_token');var refreshTokenfromStore=localStorage.getItem('kc_refreshToken');try{_self.SSO.init({onLoad:'check-sso',token:tokenfromStore,refreshToken:refreshTokenfromStore,timeSkew:0,silentCheckSsoRedirectUri:window.location.origin+'/sso-silent-check',silentCheckSsoFallback:false,checkLoginIframe:false}).success(function(success){if(success){localStorage.setItem('kc_token',_self.SSO.token);localStorage.setItem('kc_refreshToken',_self.SSO.refreshToken);}else{localStorage.removeItem('kc_token');localStorage.removeItem('kc_refreshToken');}_self.SSO.onReady(success);}).error(function(error){console.warn("SSO init error: ".concat(error));});}catch(error){console.warn("Error initiating SSO: ".concat(error));return;// Exit;
}return _self.SSO;};/* global PulseliveSSO */(function(app,common){'use strict';/**
   * Method to render SSO based elements once SSO onReady method is fired
   * @param {Bool} authenticated Boolean to indicate if user is authenticated or not
   */var renderSSO=function renderSSO(authenticated){var loginOptions={redirectUri:encodeURI(window.location.href)};var registerOptions={redirectUri:encodeURI(window.location.href),action:'register'};var containers=document.querySelectorAll('.js-sso-display');var template=authenticated?'authenticated':'unauthenticated';containers.forEach(function(container){container.innerHTML=app.common.templating.render({sso:app.SSO,loginOptions:loginOptions,registerOptions:registerOptions},template);});var ssoContainers=document.querySelectorAll('.js-sso-display-member-promo');var ssoTemplate=authenticated?'authenticated':'unauthenticated_member_promo';ssoContainers.forEach(function(container){container.innerHTML=app.common.templating.render({sso:app.SSO,loginOptions:loginOptions,registerOptions:registerOptions},ssoTemplate);});};document.addEventListener('DOMContentLoaded',function(){var ssoConfig={kcUrl:app.environment.sso.auth,kcRealm:'ICC',kcClientId:app.environment.sso.id,onReadyEventName:common.constants.SSO.ready,onReadyCallback:renderSSO};app.SSO=new PulseliveSSO(ssoConfig);});})(PULSE.app,PULSE.app.common);(function(app,core,common,cricket){'use strict';app.common.templating={};var SECONDS=3600;var MINUTES=60;var TEN=10;/**
   *  get generic date
   * @param {string} date date
   * @return {string} returns generic date
   */var getDateNice=function getDateNice(date){var momentDate=moment(date).utc();return momentDate.format('DD MMM YY');};app.common.templating.scoreToString=function(inningsSummaries){return inningsSummaries.map(function(summary){return cricket.utils.getInningsScore(summary.runs,summary.wkts,summary.allOut,summary.declared);}).join(' & ');};/**
   * image utils template helper functions
   *
   */var imageUtils={/**
     * get variant by tag
     * @param {array} variants image variants
     * @param {string} tag tag to filter variants
     * @return {string} returns either image url or false if not found
     */getVariantByTag:function getVariantByTag(variants,tag){var output=false;if(variants.length>0){variants.forEach(function(item){if(item.tag&&item.tag!==null){if(item.tag.label!==null&&item.tag.label===tag){output=item.url;}}});}return output;}};/**
   * content has tag function
   * @param {array} tags tags for a content item
   * @param {string} searchTag tag
   * @return {boolean} true if tag if found in item's tags
   */var contentHasTag=function contentHasTag(tags,searchTag){var hasTag=false;if(tags.length>0){tags.forEach(function(item){if(item.label&&item.label===searchTag){hasTag=true;}});}return hasTag;};/**
   * Stringifies & escapes strings so they can be put into HTML
   * @param  {String} string the string to clean
   * @return {String}        output
   */var cleanString=function cleanString(string){return _.escape(JSON.stringify(string||''));};/**
   * Produces the correct format for UI arguments required for a video modal
   *
   * @param {ContentResponse} video - the video object from the API
   * @return {String} - stringified JSON object for the UI arguments
   */var getVideoUIArgs=function getVideoUIArgs(video){if(!video){return;}var uiArgs={contentId:video.id,mediaId:video.mediaId,mediaTitle:video.title,link:common.getVideoPagePlaylistUrl(video),mediaDescription:video.summary||'',date:getDateNice(video.publishFrom)||'',duration:common.durationToTime(video.duration),subtitle:video.subtitle||''};return JSON.stringify(uiArgs);};/**
   * Returns 'st', 'nd', 'rd', 'th', based on the given number
   * @param  {Number} number the number to extract the ordinal from
   * @return {String}        the ordinal suffix
   */var getOrdinal=function getOrdinal(number){// special cases
var FIRST=1;var SECOND=2;var THIRD=3;var ELEVENTH=11;var TWELFTH=12;var THIRTEENTH=13;var DECIMAL_SPLIT=10;var DOUBLE_DIGIT_SPLIT=100;var lastDigit=number%DECIMAL_SPLIT;var lastTwoDigits=number%DOUBLE_DIGIT_SPLIT;if(lastDigit===FIRST&&lastTwoDigits!==ELEVENTH){return'st';}if(lastDigit===SECOND&&lastTwoDigits!==TWELFTH){return'nd';}if(lastDigit===THIRD&&lastTwoDigits!==THIRTEENTH){return'rd';}return'th';};/**
   * Prepends https at the beginning of url if it doesn't exist
   * This stops social share links breaking
   * @param {String} url - the number to base the logic off of
   * @return {String} url - the modified url
   */var prependProtocol=function prependProtocol(url){return url.slice(0,2)==='//'?'https:'+url:url;};/**
   * Strings together all the tags
   * @param {Array} tags - all the tags that are applied to an item
   * @return {String}      Returns a string of all the tags in a string
   */var getAllTags=function getAllTags(tags){var tagList='';if(tags){for(var index=0;index<tags.length;index++){tagList+=tags[index].label+' ';}}return tagList;};/**
   * Sort tags by priority in order to display them in thumbnails etc.
   * Changes text displayed for the tag if necessary
   * @param {Array} tags - all the tags that are applied to an item
   * @param {Boolean} isModifier - if the required value to return is the CSS modifying class version of the tag
   * @returns {Object} sortedTags - the tags sorted by priority and with any name alterations or modifying class added
   */var getTag=function getTag(tags,isModifier){// the earlier a tag appears in this list controls their priority
var tagNames=['Play of the Tournament','Play of the Day','world-test-championship','Cricket World Cup','WorldT20','Womens World Cup','Womens World T20','Champions Trophy','ICC Cricket 360','CWC-U19'];var tag,label;for(var i=0;i<tagNames.length;i++){if(contentHasTag(tags,tagNames[i])){if(!isModifier){switch(tagNames[i]){case'world-test-championship':return'world test championship';case'Womens World Cup':return'Women\'s Cricket World Cup';case'WorldT20':return'T20 World Cup';case'Womens World T20':return'Women\'s T20 World Cup';case'CWC-U19':return'U19 Cricket World Cup';default:break;}return tagNames[i];}return tagNames[i].replace(/ /g,'-').toLowerCase();}tag='none';}if(!isModifier){return label;}return tag;};/**
   * date age helper function
   * @param {string} date - expects date as string
   * @return {string}
   */var dateAge=function dateAge(date){if(typeof date!=='string'){date=new Date(date).toISOString();}var output='';if(date!==''){date=moment(core.date.parseString(date)).utc();output=getDateNice(new Date(date));return output;}return'';// return nothing in false case
};/**
   * Parses an HTML string to an actual element
   * @param {String} htmlString - HTML string you want to parse to an HTML element
   */var stringToElement=function stringToElement(htmlString){var container=document.createElement('div');container.innerHTML=htmlString.trim();return container.firstChild;};var scoreToString=function scoreToString(inningsSummaries){return inningsSummaries.map(function(summary){return cricket.utils.getInningsScore(summary.runs,summary.wkts,summary.allOut,summary.declared);}).join(' & ');};var getFormattedDate=function getFormattedDate(match,timezone,dateFormat,customDate){var date=customDate||match.getDate();if(date){var momentDate=moment(date);switch(timezone){case'local':return moment(date).utc().add(match.timezoneOffset,'hours').format(dateFormat);case'GMT':return momentDate.utc().format(dateFormat);default:return moment(date).tz(timezone).format(dateFormat);}}return'';};var getDaysUntilDate=function getDaysUntilDate(date){var now=moment().startOf('day');var diff=moment(date).startOf('day').diff(now,'days');var aux='';if(diff===0){aux='Today';}else if(diff===-1){aux='Yesterday';}else if(diff===1){aux='Tomorrow';}else if(diff<-1){aux=diff*-1+' days ago';}else if(diff>1){aux=diff+' days time';}return aux;};var buildDescription=function buildDescription(){var description='';if(arguments&&arguments.length){description=Array.prototype.filter.call(arguments,function(arg){return typeof arg!=='undefined'&&arg;}).join(', ');}return description;};var getVenueString=function getVenueString(venue,tournament){var venueString='TBC';if(!venue){return venueString;}if(tournament&&tournament.id&&venue.metadata&&venue.metadata['display_name_'+tournament.id]){venueString=venue.metadata['display_name_'+tournament.id];}else if(venue.fullName!=='TBC'){venueString=venue.shortName||venue.fullName;}if(venue.city){venueString+=', '+venue.city;}return venueString;};/**
   * Checks if it's a world test championship match
   * @param {Object} match - the cricket match object
   * @returns {Boolean}
   */var matchIsWtc=function matchIsWtc(match){if(match.metadata&&match.metadata['is-wtc']){return true;}return false;};/**
   * Checks if it's a u19 match
   * @param {Object} match - the cricket match object
   * @returns {Boolean}
   */var matchIsU19=function matchIsU19(match){if(match.metadata&&match.metadata['is-u19']){return true;}return false;};var getMatchTypeLabel=function getMatchTypeLabel(matchType){switch(matchType){case'TEST':return'Test';case'FIRST_CLASS':return'First Class';case'LIST_A':return'List A';case'ODI':return'ODI';case'T20':return'T20';case'T20I':return'T20I';case'WODI':return'ODI';case'WT20':return'T20';case'WT20I':return'T20I';default:return matchType;}};/**
   * Can only be used with Scoring Publication data, returns a user-friendly string for the
   * description of the innings (e.g., "England 1st Innings")
   * @param  {cricket.Match} match - the match
   * @param  {Number} inningsIndex - the index of the innings
   * @return {String}              - the user-facing string
   */var getInningsLabel=function getInningsLabel(match,inningsIndex){if(match&&match.getBattingOrder().length){inningsIndex=inningsIndex>-1?inningsIndex:match.currentState.currentInningsIndex||0;var team=match.getTeam(match.getBattingOrder()[inningsIndex]);if(match.isLimitedOvers()){return(team.shortName||team.fullName)+' Innings';}var inningsOrdinal=inningsIndex>1?' 2nd ':' 1st ';return(team.shortName||team.fullName)+inningsOrdinal+'Innings';}return'';};var getPlayerHeadshotUrl=function getPlayerHeadshotUrl(playerId,size,extension,bucket){playerId=playerId||'Photo-Missing';size=size||'284';extension=extension||'png';bucket=bucket||'';var domain='https://resources.pulse.icc-cricket.com/players/';if(bucket!==''){return domain+bucket+'/'+size+'/'+playerId+'.'+extension;}return domain+size+'/'+playerId+'.'+extension;};var getMatchDateRange=function getMatchDateRange(match,format){var dateFormatShort=format||'ddd D';var dateFormat=format||'ddd D MMMM';if(match.getEndDate&&match.getDate().getDate()!==match.getEndDate().getDate()){if(match.getDate().getMonth()===match.getEndDate().getMonth()){return moment(match.getDate()).format(dateFormatShort)+' - '+moment(match.getEndDate()).format(dateFormat);}return moment(match.getDate()).format(dateFormat)+' - '+moment(match.getEndDate()).format(dateFormat);}return moment(match.getDate()).format(dateFormat);};/**
   * Returns the relevant stat for what was requested
   * @param {Array} stats - Either the batting|bowlingStats array or fastestBalls/playerPoints
   * @param {String} statName - The name of the stat to retrieve
   * @returns {String}
   */ /* eslint-disable complexity */var getPlayerRelevantStat=function getPlayerRelevantStat(stats,statName){switch(statName){case'mostRuns':case'mostRunsOver':return stats.r;case'mostSixes':case'mostSixesInnings':return stats['6s'];case'mostFours':case'mostFoursInnings':return stats['4s'];case'mostFifties':return stats['50s'];case'mostCenturies':return stats['100s'];case'fastestFifties':case'fastestCenturies':return stats.balls;case'highestScores':case'highestScoresInnings':return stats.hs;case'bestBattingStrikeRate':case'bestBattingStrikeRateInnings':return stats.sr;case'bestBattingAverage':return stats.a;case'biggestSixes':return stats['biggestSix.sixDistance'];case'mostWickets':return stats.w;case'bestBowlingInnings':return stats.w+'/'+stats.r;case'bestBowlingAverage':return stats.a;case'bestBowlingEconomy':case'bestBowlingEconomyInnings':return stats.e;case'bestBowlingStrikeRate':case'bestBowlingStrikeRateInnings':return stats.sr;case'mostDotBalls':case'mostDotBallsInnings':return stats.d;case'mostMaidens':return stats.maid;case'mostRunsConcededInnings':return stats.r;case'fastestBalls':return stats.fastestBall;case'mostHatTricks':return stats.ht;case'mostFourWickets':return stats['4w'];case'playerPoints':return stats.pts;default:return'-';}};/* eslint-enable complexity */var getDateDiff=function getDateDiff(start,end,measurement){measurement=measurement||'days';var startDate=moment(start);var endDate=moment(end);return endDate.diff(startDate,measurement);};/**
   * Get duration in time format mm:ss
   *
   * @param {Int} number of seconds
   * @returns {String} output duration in format mm:ss
   */var durationToTime=function durationToTime(duration){var secNum=parseInt(duration,TEN);if(secNum){var hours=Math.floor(secNum/SECONDS);var minutes=Math.floor((secNum-hours*SECONDS)/MINUTES);var seconds=secNum-hours*SECONDS-minutes*MINUTES;if(hours<TEN){hours='0'+hours;}if(minutes<TEN){minutes='0'+minutes;}if(seconds<TEN){seconds='0'+seconds;}var minSec=minutes+':'+seconds;return hours>0?hours+':'+minSec:minSec;}return'00:00';};/**
   * Function that returns alternative player id (dmsPlayerId) is included
   * in the player object
   *
   * @param {Object} player the player object returned by the api
   * @return {String} returns pulse id if included on the player object
   */var getPlayerAltId=function getPlayerAltId(player){if(player.altIds&&player.altIds.pulse){return player.altIds.pulse;}return null;};/**
   * Helper for pluralisation of nouns
   *
   * @param {Number} number - the number to base the logic off of
   * @param {String} singular - the singular version of the noun
   * @param {String} plural - the plural version of the noun
   * @param {Boolean} includeNumber - whether to prepend the number to the output string or not
   * @return {String} pluralised noun
   */var pluralise=function pluralise(number,singular,plural,includeNumber){var string=includeNumber?number+' ':'';return string+(number===1?singular:plural);};var urlify=function urlify(str){return app.common.urlify(str);};/**
   * object with all helper functions for underscore templates
   */app.common.templating.helper={imageUtils:imageUtils,contentHasTag:contentHasTag,getDateNice:getDateNice,getAllTags:getAllTags,getTag:getTag,dateAge:dateAge,prependProtocol:prependProtocol,getPlayerHeadshotUrl:getPlayerHeadshotUrl,getPlayerRelevantStat:getPlayerRelevantStat,getDateDiff:getDateDiff,durationToTime:durationToTime,buildDescription:buildDescription,pluralise:pluralise,cleanString:cleanString,getVideoUIArgs:getVideoUIArgs,getOrdinal:getOrdinal,getDaysUntilDate:getDaysUntilDate,urlify:urlify,cricket:{getInningsLabel:getInningsLabel,getMatchTypeLabel:getMatchTypeLabel,getVenueString:getVenueString,scoreToString:scoreToString,getFormattedDate:getFormattedDate,buildDescription:buildDescription,getMatchDateRange:getMatchDateRange,matchIsWtc:matchIsWtc,matchIsU19:matchIsU19,getPlayerAltId:getPlayerAltId}};/**
   * Renders a template with the given data and returns the compiled template
   *
   * @param {Object}  model              - data to render in JSON format
   * @param {String}  templateName      - the name of the template (must match file name)
   * @param {Boolean} parseToHtmlObject - parse the rendered template string to an HTML object - default false
   * @return {(String|DOMElement)}      - Rendered template with model
   */app.common.templating.render=function(model,templateName,parseToHtmlObject){var renderedTemplate='';model=model||{};for(var func in app.common.templating){if(app.common.templating.hasOwnProperty(func)){model[func]=app.common.templating[func];model.urlUtil={generateUrl:app.common.generateUrl,generatePlayerRankingsUrl:app.common.generatePlayerRankingsUrl,generateCWCPlayerUrl:app.common.generateCWCPlayerUrl};}}if(templateName){var templateEngine=app.templates[templateName];if(templateEngine){try{renderedTemplate=templateEngine(model);}catch(error){if(error.message){error.message+=' in template '+templateName;}console.warn(error);}if(parseToHtmlObject){return stringToElement(renderedTemplate);}}else{console.warn('No template was rendered. Template not found: '+templateName);}}return renderedTemplate;};})(PULSE.app,PULSE.core,PULSE.app.common,PULSE.cricket);/*globals  PULSE.app, PULSE.core */(function(app,core){'use strict';app.webView=function(){var webview=core.url.getParam('webview');var webviewCookie=core.url.getParam('webview_cookie');var _self=this;_self.header=document.querySelector('.global-header__fixed-container');_self.nav=document.querySelector('.global-nav__fixed-container');_self.footer=document.querySelector('.footer');_self.mcNav=document.querySelector('.mc-nav');_self.mobileAppBanner=document.querySelector('.js-mobile-banner');if(webviewCookie&&webviewCookie==='true'){core.localStorage.setStorage('webviewCookie',true,100,true);}var webviewFromStorage=core.localStorage.getStorage('webviewCookie',true);if(webview&&webview==='true'||webviewFromStorage&&webviewFromStorage!==''){if(_self.header){_self.header.style.display='none';}if(_self.nav){_self.nav.style.display='none';}if(_self.footer){_self.footer.style.display='none';}if(_self.mcNav){_self.mcNav.style.display='none';}if(_self.mobileAppBanner){_self.mobileAppBanner.style.display='none';core.style.removeClass(_self.mobileAppBanner,'u-show');}core.style.addClass(document.body,'web-view');}};})(PULSE.app,PULSE.core);/*globals PULSE, PULSE.app */(function(app){'use strict';var loadedWidgets=[];app.widgetDeps=function(container){var environment=app.checkEnvironment();var thisContainer=container?container:document;var els=thisContainer.querySelectorAll('[data-script]');var scriptPrefix=app.environment.cdn+'widgets/';var scriptSuffix=app.environment.label==='production'?'.min.js':'.js';Array.prototype.map.call(els,function(elem){addDependancy(elem.dataset.script);});function addDependancy(dep){if(loadedWidgets.indexOf(dep)<0){loadedWidgets.push(dep);var script=document.createElement('script');script.type='text/javascript';script.src=scriptPrefix+dep+scriptSuffix;document.body.appendChild(script);}}};switch(document.readyState){case'interactive':case'complete':app.widgetDeps();app.webView();app.loadTimezones();break;default:document.addEventListener('DOMContentLoaded',function(){app.widgetDeps();app.webView();app.loadTimezones();});}})(PULSE.app);function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj;}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;},_typeof(obj);}PULSE.app.templates._article_modal=_.template('<article class="article article--modal"> <div class="article__container"> <div class="article-modal__splash-container"> <div class="article-modal__splash js-article-modal-splash"> <div class="article-modal__dtg"><%= dtg %> Days To Go</div> </div> </div> <% if ( leadMedia ) { %> <%\n            if ( leadMedia.variants !== null || leadMedia.variants.length > 0 ) {\n                imageUrl = helper.imageUtils.getVariantByTag( leadMedia.variants, \'Full Width\' );\n                imageUrlRetina = helper.imageUtils.getVariantByTag( leadMedia.variants, \'Full Width (Retina)\' );\n                imageMobileUrl = helper.imageUtils.getVariantByTag( leadMedia.variants, \'Full Width (Mobile)\' );\n                imageMobileRetina = helper.imageUtils.getVariantByTag( leadMedia.variants, \'Full Width (Retina Mobile)\' );\n            }\n        %> <header class="article__header <% if ( leadMedia.type ==\'video\' ) { %>article__header--video<% } %>"> <div class="article__image-container"> <picture class="article__image"> <source srcset="<%= imageMobileUrl %>, <%= imageMobileRetina %> 2x" media="(max-width: 640px)"> <source srcset="<%= imageUrl %>, <%= imageUrlRetina %> 2x"> <img src="<%= imageUrl %>" alt="<%= title %>"> </picture> <h1 class="article__title"><span class="article__title-text"><%= title %></span></h1> </div> </header> <% } else { %> <header class="article__header article__header--no-image"> <h1 class="article__title"><span class="article__title-text"><%= title %></span></h1> </header> <% } %> <div class="article__body"> <div class="article__content js-text-share-body"><%= body %></div> </div> </div> </article>'),PULSE.app.templates.authenticated=_.template('<a id="sso-my-account" href="<%= sso.createAccountUrl() %>" class="sso-nav__name"> <%= ( sso.tokenParsed && sso.tokenParsed.given_name ) ? `Hi ${sso.tokenParsed.given_name}` : \'My Account\' %> </a>'),PULSE.app.templates.paginator=_.template('<% for ( var i = 0; i < slideNum; i++ ) { %> <li class="pager__container js-pager-container"> <button class="pager__button js-pager" aria-label="Goto Page <%= i + 1 %>"> <span class="u-screen-reader"><%= i + 1 %></span> </button> </li> <% } %>'),PULSE.app.templates.sso_no_team=_.template('<div class="sso-promo__no-team"> <h3 class="sso-promo__no-team-title js-user-account-link"> Please select your favourite team! </h3> </div>'),PULSE.app.templates.unauthenticated=_.template('<a href="<%= sso.createLoginUrl(loginOptions) %>" class="sso-nav__login">login</a> <a href="<%= sso.createRegisterUrl(registerOptions) %>" class="sso-nav__register">Join For Free</a>'),PULSE.app.templates.unauthenticated_member_promo=_.template('<a href="<%= sso.createRegisterUrl(registerOptions) %>" class="member-promo__register">Sign up now</a> <a href="<%= sso.createLoginUrl(loginOptions) %>" class="member-promo__login">Already registered? Login here</a>'),PULSE.app.templates.blog_entry=_.template('<%\n    var icon = entry.icon ? entry.icon.html : \'microphone\';\n    var hideHeaderClass = icon === \'quote\' ? \'u-hide\' : \'\';\n%> <div class="blog-entry blog-entry--<%= icon %>"> <div class="blog-entry__header <%= hideHeaderClass %>"> <div class="blog-entry__header-details"> <div class="blog-entry__icon"> <% if (icon === \'wicket\') { %> <span>W</span> <% } else if (icon === \'run6\') { %> <span>6</span> <% } else if (icon === \'run4\') { %> <span>4</span> <% } else { %> <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/resources/<%= window.RESOURCE_VERSION %>/i/svg-output/icons.svg#icn-<%= icon %>"></use></svg> <% } %> </div> <div class="blog-entry__title"> <%= entry.title %> </div> </div> <div class="blog-entry__time"><%= moment( entry.timestamp ).format( \'HH:mm\' ) %></div> </div> <div class="blog-entry__content"> <% if (icon === \'quote\') { %> <svg class="icon quote"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/resources/<%= window.RESOURCE_VERSION %>/i/svg-output/icons.svg#icn-quote"></use></svg> <% } %> <%= entry.comment %> </div> <% if (entry.shareText) { %> <div class="blog-entry__footer share" data-share-message="<%= entry.shareText %>"> <div class="blog-entry__share js-twitter-share" data-social-service="twitter" role="button" tabindex="0"> Tweet <span> this</span> <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/resources/<%= window.RESOURCE_VERSION %>/i/svg-output/icons.svg#icn-twitter"></use></svg> </div> </div> <% } %> </div>'),PULSE.app.templates.blog_header_entry=_.template('<% _.forEach(headers, function(entry) { %> <li class="commentary__headline"><%= entry.title %></li> <% }); %>'),PULSE.app.templates.commentary_empty=_.template("<p><%= message %></p>"),PULSE.app.templates.commentary_loading=_.template('<div class="commentary__loader"> <p>Loading Stream</p> </div>'),PULSE.app.templates.entry_auto=_.template("<div class=\"commentary-block <%= tagsClasses %>\"> <div class=\"commentary-block__ball<% if (thisOver == 4) { %> commentary-block__ball--four<% } else if (thisOver == 6) { %> commentary-block__ball--six<% } %>\"> <%= thisOver === '.' ? \"&#149;\" : thisOver %> </div> <div class=\"commentary-block__over\"> <% if( countingProgress ) { %> <%= countingProgress.over + '.' + countingProgress.ball %> <% } else if( typeof timestamp !== 'undefined' ) { %> <%= moment( new Date( timestamp ) ).format( 'HH:MM' ) %> <% } %> </div> <div class=\"commentary-block__text\"> <p><%= autoText %></p> <%= typeof message !== 'undefined' ? message.text : '' %> </div> </div>"),PULSE.app.templates.entry_eov=_.template('<div class="commentary-block commentary-block--summary"> <div class="commentary-block__info"> <div class="commentary-block__over-details"> <span class="commentary-block__over-end">Over <%= over %></span> <span class="commentary-block__over-summary"> <% if (overRuns) { %> <b><%= overRuns %></b> run<%= overRuns > 1 ? \'s\' : \'\' %><%= overWickets ? \', \' : \'\' %> <% } %> <% if (overWickets) { %> <b><%= overWickets %></b> wicket<%= overWickets > 1 ? \'s\' : \'\' %> <% } %> </span> </div> <div class="commentary-block__score"> <% if (team) { %> <span class="commentary-block__team-flag flag-15 <%= team.abbreviation || \'\' %>"></span> <%= team.shortName %> <% } %> <b><%= PULSE.cricket.utils.getInningsScore( inningsRuns, inningsWickets, inningsAllOut ) %></b> </div> </div> <div class="commentary-block__play in-play"> <div class="in-play__inner-container"> <div class="in-play__team bowling t-<%= bowlingTeam.abbreviation %>"> <div class="in-play__team-title"> <span class="long"><%= bowlingTeam.fullName %></span><span class="short"><%= bowlingTeam.abbreviation %></span> Bowling </div> <div class="in-play__player bowling"> <div class="in-play__player-inner-content"> <div class="in-play__background bg-graphic bg-graphic--quarter"> <div class="bg-graphic__element"></div> </div> <% if ( bowlerSummary.bowler ) { %> <div class="in-play__player-name" title="<%= bowlerSummary.bowler.fullName %>"> <% var playerName = PULSE.cricket.utils.getPlayerNames( bowlerSummary.bowler.fullName ) %> <span class="in-play__player-name--first-name"><%= playerName.firstName %></span> <span class="in-play__player-name--last-name"><%= playerName.secondName %></span> </div> <% bowlerImageUrl = helper.getPlayerHeadshotUrl(bowlerSummary.bowler.id ? bowlerSummary.bowler.id : null, null, null) %> <div class="in-play__player-photo"> <img src="<%= bowlerImageUrl %>" alt="<%= bowlerSummary.bowler.fullName %>" data-widget="player-image" data-player="<%= bowlerSummary.bowler.id || null %>" data-size="284"> </div> <div class="in-play__player-score"> <%= bowlerSummary.wickets %>/<%= bowlerSummary.runs %> <div class="in-play__player-overs"> <%= bowlerSummary.overs %> ov </div> </div> <% } else { %> <div class="in-play__player-awaiting">Awaiting Player</div> <% } %> </div> </div> </div> <div class="in-play__versus"> <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/resources/<%= window.RESOURCE_VERSION %>/i/svg-output/icons.svg#icn-arrow-left-gallery"></use></svg> </div> <div class="in-play__team batting t-<%= team.abbreviation %>"> <div class="in-play__team-title"> <span class="long"><%= team.fullName %></span><span class="short"><%= team.abbreviation %></span> Batting <% if (partnership) { %> <div class="in-play__partnership"> <div class="in-play__partnership-border-box"></div> <span class="in-play__partnership-text"><%= partnership.runs %> (<%= partnership.balls %>)</span> </div> <% } %> </div> <% _.each( batsmanSummaries, function( batsmanSummary, index ) { %> <div class="in-play__player batting batter-<%= index %>"> <div class="in-play__player-inner-content"> <div class="in-play__background bg-graphic bg-graphic--quarter"> <div class="bg-graphic__element"></div> </div> <% if ( batsmanSummary.batsman ) { %> <% batsmanImageUrl = helper.getPlayerHeadshotUrl(batsmanSummary.batsman.id ? batsmanSummary.batsman.id : null, null, null) %> <% if (index === 0) { %> <div class="in-play__player-name long" title="<%= batsmanSummary.batsman.fullName %>"> <% var playerName = PULSE.cricket.utils.getPlayerNames( batsmanSummary.batsman.fullName ) %> <span class="in-play__player-name--first-name"><%= playerName.firstName %></span> <span class="in-play__player-name--last-name"><%= playerName.secondName %></span> </div> <div class="in-play__player-photo"> <img src="<%= batsmanImageUrl %>" alt="<%= batsmanSummary.batsman.fullName %>" data-widget="player-image" data-player="<%= batsmanSummary.batsman.id || null %>" data-size="284"> </div> <div class="in-play__player-name short" title="<%= batsmanSummary.batsman.fullName %>"><%= batsmanSummary.batsman.shortName %></div> <div class="in-play__player-score"> <span class="in-play__player-score-runs"><%= batsmanSummary.runs || 0 %></span> <span class="in-play__player-score-balls">(<%= batsmanSummary.balls || 0 %>)</span> </div> <% } else { %> <div class="in-play__player-name short" title="<%= batsmanSummary.batsman.fullName %>"><%= batsmanSummary.batsman.shortName %></div> <div class="in-play__player-score"> <span class="in-play__player-score-runs"><%= batsmanSummary.runs || 0 %></span> <span class="in-play__player-score-balls">(<%= batsmanSummary.balls || 0 %>)</span> </div> <div class="in-play__player-photo"> <img src="<%= batsmanImageUrl %>" alt="<%= batsmanSummary.batsman.fullName %>" data-widget="player-image" data-player="<%= batsmanSummary.batsman.id || null %>" data-size="284"> </div> <div class="in-play__player-name long" title="<%= batsmanSummary.batsman.fullName %>"> <% var playerName = PULSE.cricket.utils.getPlayerNames( batsmanSummary.batsman.fullName ) %> <span class="in-play__player-name--first-name"><%= playerName.firstName %></span> <span class="in-play__player-name--last-name"><%= playerName.secondName %></span> </div> <% } %> <% } else { %> <div class="in-play__player-awaiting">Awaiting Player</div> <% } %> </div> </div> <% } ); %> </div> </div> </div> </div>'),PULSE.app.templates.entry_manual=_.template('<div class="commentary-block <%= tagsClasses %>"> <div class="commentary-block__text"><%= message.text %></div> </div>'),PULSE.app.templates.dropdown_filter=_.template('<div class="dropdown-filter js-drop-down <%= filterClass %>"> <div class="dropdown-filter__clickzone js-dropdown-trigger" tabindex="0" role="button"></div> <div class="dropdown-filter__label js-drop-down-label" data-type="<%= type || \'\' %>" data-label="<%= label %>"><%= label %><% if (typeof optionCount !== \'undefined\') { %> <span class="dropdown-filter__label--count">(<%= optionCount %>)</span><% } %></div> <div class="dropdown-filter__current js-drop-down-current"><%= current %></div> <div class="dropdown-filter__caret-down"> <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/resources/<%= window.RESOURCE_VERSION %>/i/svg-output/icons.svg#icn-caret-down"></use></svg> </div> <ul class="dropdown-filter__dropdown-list js-drop-down-options"> <% options.forEach( function( item, key ) {  %> <li tabindex="0" role="button" class="dropdown-filter__dropdown-list__option <% if ( item.key === 18 || item.key === 165 || item.key === 186 ) { %>dropdown-filter__dropdown-list__option-divider<% } %>" role="button" data-option="<%= item.key %>"> <% if (item.flag) { %><span class="<%= item.flag %> flag-15"></span><% } %> <%= item.value %> </li> <% }); %> </ul> </div>'),PULSE.app.templates.filter_dropdown=_.template('<div class="drop-down js-drop-down <%= filterClass %>"> <div class="drop-down__clickzone js-dropdown-trigger" tabindex="0" role="button"></div> <div class="drop-down__label js-drop-down-label" data-type="<%= type %>"><%= label %><% if (typeof optionCount !== \'undefined\') { %> <span class="drop-down__label--count">(<%= optionCount %>)</span><% } %></div> <div class="drop-down__current js-drop-down-current" data-value="<%= value %>"><%= current %></div> <div class="drop-down__caret-down"> <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/resources/<%= window.RESOURCE_VERSION %>/i/svg-output/icons.svg#icn-caret-down"></use></svg> </div> <ul class="drop-down__dropdown-list js-drop-down-options"> <%= render( { options: options }, \'filter_options\' ) %> </ul> </div>'),PULSE.app.templates.filter_options=_.template('<% options.forEach( function( item, key ) {  %> <li tabindex="0" role="button" class="drop-down__dropdown-list__option <% if ( item.key === 18 || item.key === 165 || item.key === 186 ) { %>drop-down__dropdown-list__option-divider<% } %>" role="button" data-type="<%= item.type || \'\' %>" data-option="<%= item.key %>"> <% if (item.flag) { %><span class="<%= item.flag %> flag-15"></span><% } %> <%= item.value %> </li> <% }); %>'),PULSE.app.templates.photo_modal_picture_element=_.template('<picture class="js-modal-photo"> <% _.forEach(picture.srcset, function(set) { %> <source srcset="<%= set.src %>" <%= set.media ? \'media="\' + set.media + \'"\' : \'\' %>> <% }); %> <img src="<%= picture.img %>"> </picture>'),PULSE.app.templates.share=_.template('<div class="share" data-widget="share"> <div class="share__btn" role="button" tabindex="0"> <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/resources/<%= window.RESOURCE_VERSION %>/i/svg-output/icons.svg#icn-share"></use></svg> <div class="share__title">Share</div> </div> <ul class="share__list"> <li class="share__item share__item--twitter js-social-option" data-social-service="twitter" data-share-url="<%= canonicalUrl %>" role="button" tabindex="0"> <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/resources/<%= window.RESOURCE_VERSION %>/i/svg-output/icons.svg#icn-twitter"></use></svg> </li> <li class="share__item share__item--facebook js-social-option" data-social-service="facebook" data-share-url="<%= canonicalUrl %>" role="button" tabindex="0"> <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/resources/<%= window.RESOURCE_VERSION %>/i/svg-output/icons.svg#icn-facebook"></use></svg> </li> <li class="share__item share__item--url u-hide-tablet js-copy-button" data-share-url="<%= canonicalUrl %>" role="button" tabindex="0"> <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/resources/<%= window.RESOURCE_VERSION %>/i/svg-output/icons.svg#icn-url"></use></svg> <div class="share__copy-message js-copy-message">Url Copied</div> </li> <li class="share__item share__item--whatsapp js-social-option u-show-tablet" data-social-service="whatsapp" data-share-url="<%= canonicalUrl %>" role="button" tabindex="0"> <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/resources/<%= window.RESOURCE_VERSION %>/i/svg-output/icons.svg#icn-whatsapp"></use></svg> </li> <li class="share__item share__item--messenger u-show-tablet js-social-option" data-social-service="facebookMessenger" data-share-url="<%= canonicalUrl %>" role="button" tabindex="0"> <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/resources/<%= window.RESOURCE_VERSION %>/i/svg-output/icons.svg#icn-facebook-messenger"></use></svg> </li> </ul> </div>'),PULSE.app.templates.sso_country_dropdown=_.template('<p class="form-dropdown__current js-dropdown-current is-default" data-option=""> Please select one </p> <div class="form-dropdown__icon"> <svg class="icon" viewBox="0 0 898.75 533.751"><path d="M224.687 309.061L0 84.372l42.186-42.186L84.372 0l182.815 182.811L450 365.622l182.5-182.496L815 .63l41.874 41.874L898.75 84.38 674.062 309.065 449.373 533.751 224.687 309.06z"/></svg> </div> <div class="form-dropdown__clickzone js-dropdown-trigger" tabindex="0" role="button"></div> <ul class="form-dropdown__options-list js-dropdown-options"> <% options.forEach( function( item ) {  %> <li tabindex="0" role="button" class="form-dropdown__options-list__option" role="button" data-option="<%= item.key %>"><%= item.value %></li> <% }); %> </ul>'),PULSE.app.templates.sso_team_dropdown=_.template('<p class="form-dropdown__current js-dropdown-current is-default" data-option="" data-team-m="" data-team-w=""> <span class="form-dropdown__flag flag-15 u-hide"></span> Please select one </p> <div class="form-dropdown__icon"> <svg class="icon" viewBox="0 0 898.75 533.751"><path d="M224.687 309.061L0 84.372l42.186-42.186L84.372 0l182.815 182.811L450 365.622l182.5-182.496L815 .63l41.874 41.874L898.75 84.38 674.062 309.065 449.373 533.751 224.687 309.06z"/></svg> </div> <div class="form-dropdown__clickzone js-dropdown-trigger" tabindex="0" role="button"></div> <ul class="form-dropdown__options-list form-dropdown__options-list--long js-dropdown-options"> <% options.forEach( function( item, index ) {  %> <li tabindex="0" role="button" class="form-dropdown__options-list__option" role="button" data-option="<%= item.key %>" data-team-m="<%= item.teamM %>" data-team-w="<%= item.teamW %>" data-abbr="<%= item.abbr %>"> <span class="form-dropdown__flag flag-15 <%= item.abbr %>"></span> <%= item.value %> </li> <% if ( index === 11 ) { %> <div class="form-dropdown__divider"></div> <% } %> <% }); %> </ul>'),PULSE.app.templates.related_video_overlay=_.template('<div class="vjs-overlay__container"> <% _.each(videos, function(video) { %> <a href="/video/<%= video.id %>" class="vjs-overlay__content"> <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/resources/<%= window.RESOURCE_VERSION %>/i/svg-output/icons.svg#icn-play"></use></svg> <img src="<%= video.imageUrl %>" class="vjs-overlay__image"> <div class="vjs-overlay__title"><%= video.title %></div> </a> <% }); %> </div>');(function(app,core){'use strict';var ANIMATE_ICON='.animate-on-scroll';var ANIMATE='animate__animated';var SLIDE_FROM_LEFT='animate__slideInLeft';var SLIDE_FROM_RIGHT='animate__slideInRight';var LEFT_ICON='animate-on-scroll__icon-left';var RIGHT_ICON='animate-on-scroll__icon-right';var CHANGE_ON_MOBILE='animation-change-mobile';var BOUNCE_IN='animate__bounceIn';var IMAGE_ICON='animate-on-scroll__image';var TABLET_WIDTH=840;var ANIMATION_DELAY=250;var INITIAL_DELAY=500;var THRESHOLD=0.1;/**
   * Animation on page scroll
   *
   * @constructor AnimateOnScroll
   * @param {HTMLElement} container the element the widget manipulates/populates/affects
   */app.AnimateOnScroll=function(container){var _self=this;_self.container=container;_self.animateItems=_self.container.querySelectorAll(ANIMATE_ICON);_self.startingIcons=0;/**
     * Used to set a delay between iterations in a forEach loop
     *
     * @param {*} func function which is to be called in loop
     * @param {*} delay how long of a delay between function calls
     * @returns {Function} which delays loop
     */_self.delayLoop=function(func,delay){return function(target,i){setTimeout(function(){func(target);},i*delay);};};/**
     * Check elment is in viewport
     *
     * @param {HTMLElement} element element to check is within viewport
     * @returns {boolean} true if element is in current viewport.
     */_self.checkElInViewport=function(element){var position=element.getBoundingClientRect();return!(position.bottom<0||position.right<0||position.left>window.innerWidth||position.top>window.innerHeight);};/**
     * Add animation
     *
     * @param {HTMLElement} item item to add an animation class to.
     */_self.addAnimation=function(item){core.style.addClass(item,ANIMATE);item.style.opacity='1';if(item.classList.contains(LEFT_ICON)){if(item.classList.contains(CHANGE_ON_MOBILE)&&window.innerWidth<TABLET_WIDTH){core.style.addClass(item,SLIDE_FROM_RIGHT);}else{core.style.addClass(item,SLIDE_FROM_LEFT);}}else if(item.classList.contains(RIGHT_ICON)){if(item.classList.contains(CHANGE_ON_MOBILE)&&window.innerWidth<TABLET_WIDTH){core.style.addClass(item,SLIDE_FROM_LEFT);}else{core.style.addClass(item,SLIDE_FROM_RIGHT);}}else if(item.classList.contains(IMAGE_ICON)){core.style.addClass(item,BOUNCE_IN);}};/**
     * Apply initial animations
     *
     * Applies animation class to elements in starting viewport
     */_self.initialAnimations=function(){var count=0;_self.animateItems.forEach(function(item){if(_self.checkElInViewport(item)===true){count=count+1;}_self.startingIcons=count;});var array=Array.from(_self.animateItems);var initialIcons=array.slice(0,count);initialIcons.forEach(_self.delayLoop(_self.addAnimation,ANIMATION_DELAY));};/**
     * Applies animation class to elements when scrolling
     */_self.scrollingAnimations=function(){_self.observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting===true){_self.addAnimation(entry.target);}});},{threshold:[THRESHOLD]});for(var i=_self.startingIcons;i<_self.animateItems.length;i++){_self.observer.observe(_self.animateItems[i]);}};setTimeout(function(){_self.initialAnimations();_self.scrollingAnimations();},INITIAL_DELAY);};var widgets=document.querySelectorAll('[data-widget="animate-on-scroll"]');for(var i=0;i<widgets.length;i++){new app.AnimateOnScroll(widgets[i]);}})(PULSE.app,PULSE.core);// globals PULSE, PULSE.app
(function(app,common,core){'use strict';/**
   * @namespace common.ArticleModal.private
   */var initialInstance=true;var screenPos;/**
   * Set default config
   * @param {Object} config modal config
   * @returns {Object} the config
   */var setDefaults=function setDefaults(config){if(!config.wrap){config.wrap=document.querySelector('.js-article-modal');}if(!config.viewport){config.viewport=config.wrap.querySelector('.js-viewport');}if(!config.wrapper){config.wrapper=config.wrap.querySelector('.js-article-modal-wrapper');}if(!config.controls){config.controls={};}if(!config.controls.close){config.controls.close=config.wrap.querySelector('.js-close');}if(!config.controls.prev){config.controls.prev=config.wrap.querySelector('.js-btn-prev');}if(!config.controls.next){config.controls.next=config.wrap.querySelector('.js-btn-next');}if(!config.items){config.items=config.wrap.querySelector('.js-article-expand');}if(!config.hideClass){config.hideClass='is-hidden';}if(!config.prevUrl){config.prevUrl=window.location.href;}if(!config.shareModal){config.shareModal=config.wrap.querySelector('.js-share-modal');}return config;};var removeFacebookPostEmbed=function removeFacebookPostEmbed(){var child=document.querySelector('.fb-post-container');if(child){var fbEmbedWidget=child.parentElement;core.style.addClass(fbEmbedWidget,'u-hide');}};/**
   * Apply listeners to thumbs
   * @param {Object} thumbs of thumbs available
   * @param {Object} _self common.ArticleModal reference
   */var addThumbListeners=function addThumbListeners(thumbs,_self){for(var i=0;i<thumbs.length;i++){core.event.listenForMultiple(thumbs[i],['click','keypress'],function(event){// 13 enter
if((event.keyCode===13||event.type==='click')&&!_self.isViewportFullsize){if(event.preventDefault){event.preventDefault();}else{event.returnValue=false;}var id=event.currentTarget.dataset.articleId;_self.currentDtg=parseInt(event.currentTarget.dataset.articleDtg);_self.getArticle(id);_self.toggleExpand();}});}};/**
   * Build modal viewport
    * @param {Object} scope common.ArticleModal reference
   */var buildViewport=function buildViewport(scope){var newViewport=false;if(newViewport){scope.config.wrap.appendChild(scope.config.viewport);}};/**
   * Prevent background from scrolling when the modal is open
   * @param {Object} _self common.ArticleModal reference
   */var lockScreen=function lockScreen(_self){screenPos=window.pageYOffset;window.scrollTop=0;var navHeight=_self.navContainer.offsetHeight;core.style.addClass(document.body,'main-content--locked');_self.body.scrollTop=screenPos-navHeight;};/**
   * Close modal and unlock screen
   * @param {Object} _self common.ArticleModal reference
   */var unlockScreen=function unlockScreen(_self){core.style.removeClass(document.body,'main-content--locked');window.scrollTo(0,screenPos);};/**
   * Get the article model
   * @param {Object} data the article data
   * @param {Number} dtg the position of the article in days to go
   * @return {Object} returns article model
   */var getArticleModel=function getArticleModel(data,dtg){var article={id:data.id,title:data.title,subtitle:data.subtitle||'Article',publishFrom:data.publishFrom,duration:data.duration,leadMedia:data.leadMedia||null,summary:data.summary,body:data.body,dtg:dtg};var variants;if(data.leadMedia&&data.leadMedia.type!=='video'&&data.leadMedia.variants&&data.leadMedia.variants.length>0){variants=data.leadMedia.variants;}else if(data.leadMedia&&data.leadMedia.thumbnail&&data.leadMedia.type==='video'&&data.leadMedia.thumbnail.variants&&data.leadMedia.thumbnail.variants.length>0){variants=data.leadMedia.thumbnail.variants;}if(variants){article.images={};article.images.mobile=common.getPhotoByVariant(variants,'Article - Standard (Mobile)');article.images.mobileRetina=common.getPhotoByVariant(variants,'Article - Standard (Retina Mobile)');article.images.standard=common.getPhotoByVariant(variants,'Article - Standard');article.images.standardRetina=common.getPhotoByVariant(variants,'Article - Standard (Retina)');if(!article.images.mobile||!article.images.standard){article.images=null;}}if(data.related&&data.related.length>0){article.relatedContent=data.related;}else{article.relatedContent=null;}return article;};/**
   * Close modal event listener
   * @param {Object} event the close event object
   */var closeModal=function closeModal(event){var _self=this;// 13 enter, 27 escape
if(event.keyCode===13||event.keyCode===27||event.type==='click'){_self.isViewportFullsize=false;core.style.removeClass(_self.config.wrap,'expanded');core.style.removeClass(_self.config.wrapper,'active');_self.setUrl(true);if(core.style.hasClass(document.body,'main-content--locked')){unlockScreen(_self);}}};/**
   * Get videoPlayers placed on the modal
   * @param {HTMLElement} wrapper modal wrapper
   * @return {nodelist} modal wrappers list
   */var getVideoPlayers=function getVideoPlayers(wrapper){return wrapper.querySelectorAll('[data-widget="video-player"]');};/**
   * Constructor for the Article modal
   * @constructor
   * @param {Object} config modal config
   */common.ArticleModal=function(config){var _self=this;_self.config=setDefaults(config);_self.isViewportFullsize=false;_self.body=document.querySelector('.js-main-content');_self.navContainer=document.querySelector('.js-global-navigation');_self.currentDay=parseInt(document.querySelector('.js-next-day').dataset.articleDtg);addThumbListeners(_self.config.items,_self);_self.bindNavEvents();buildViewport(_self);if(initialInstance){core.event.listenForMultiple(_self.config.controls.close,['click','keypress'],closeModal.bind(_self));document.onkeydown=closeModal.bind(_self);}};/**
   * Activate modal
   */common.ArticleModal.prototype.bindNavEvents=function(){var _self=this;core.event.listenForMultiple(_self.config.controls.prev,['click','keypress'],function(event){// 13 enter
if(event.keyCode===13||event.type==='click'){event.preventDefault();var prevArticle=_self.body.querySelectorAll('.calendar-cards__block[data-article-dtg=\''+(_self.currentDtg+1)+'\']');_self.toggleNavButtons();_self.currentDtg=parseInt(prevArticle[0].dataset.articleDtg);_self.getArticle(prevArticle[0].dataset.articleId);_self.prevNextToggle=true;}});core.event.listenForMultiple(_self.config.controls.next,['click','keypress'],function(event){// 13 enter
if(event.keyCode===13||event.type==='click'){event.preventDefault();var nextArticle=_self.body.querySelectorAll('.calendar-cards__block[data-article-dtg=\''+(_self.currentDtg-1)+'\']');_self.toggleNavButtons();_self.currentDtg=parseInt(nextArticle[0].dataset.articleDtg);_self.getArticle(nextArticle[0].dataset.articleId);_self.prevNextToggle=true;}});};/**
   * Activate modal
   */common.ArticleModal.prototype.toggleExpand=function(){var _self=this;lockScreen(_self);if(core.style.hasClass(_self.config.wrap,'expanded')){_self.isViewportFullsize=false;core.style.removeClass(_self.config.wrap,'expanded');return;}_self.isViewportFullsize=true;core.style.addClass(_self.config.wrap,'expanded');};/**
   * Get article data based on the clicked thumb
   * @param {int} id Article id
   */common.ArticleModal.prototype.getArticle=function(id){var _self=this;var subscriberObject={url:app.apiPath.cms.text+id,method:'GET',callback:_self.updateViewport,forceCallback:true,target:_self};core.data.manager.add(subscriberObject);};/**
   * Enable / disable next / prev buttons
   */common.ArticleModal.prototype.toggleNavButtons=function(){var _self=this;core.style.removeClass(_self.config.controls.prev,'article-modal__btn--disabled');core.style.removeClass(_self.config.controls.next,'article-modal__btn--disabled');if(_self.currentDtg===50){core.style.addClass(_self.config.controls.prev,'article-modal__btn--disabled');}else if(_self.currentDtg===1||_self.currentDtg===_self.currentDay){core.style.addClass(_self.config.controls.next,'article-modal__btn--disabled');}else if(_self.currentDtg<_self.currentDay||_self.currentDtg>50||_self.currentDtg<1){core.style.addClass(_self.config.controls.prev,'article-modal__btn--disabled');core.style.addClass(_self.config.controls.next,'article-modal__btn--disabled');}};/**
   * Render article data
   * @param {Object} data Api response
   */common.ArticleModal.prototype.updateViewport=function(data){var _self=this;var articleId=data.id;var model=getArticleModel(data,_self.currentDtg);_self.toggleNavButtons();/*
        Script to fire twitter embed script when dynamically loaded
        https://dev.twitter.com/web/javascript/loading
    */ /* eslint-disable id-length */var twttr=function twttr(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],t={};js=d.createElement(s);js.id=id;js.src='https://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);t._e=[];t.ready=function(f){t._e.push(f);};return t;};_self.config.viewport.innerHTML=app.common.templating.render(model,'_article_modal');// if Facebook post embed present, hide it
removeFacebookPostEmbed();_self.setUrl(false,data.title,articleId);_self.initSocialShare(data.title,articleId);_self.hideImageExpand();app.widgetDeps(_self.config.viewport);app.setPlayerImages(_self.config.wrap);// get videoPlayers if any
_self.config.players=getVideoPlayers(_self.config.wrap);// initialise any videos that have been appended
app.videoPlayerManager.createScripts(false);twttr(document,'script','twitter-wjs');_self.animateModal();};/**
   * Animate the article inside the modal so it scrolls up from the bottom of the page.
   */common.ArticleModal.prototype.animateModal=function(){var _self=this;_self.config.splash=_self.config.wrapper.querySelector('.js-article-modal-splash');if(_self.prevNextToggle){core.style.removeClass(_self.config.splash,'pulse');core.style.addClass(_self.config.splash,'pulse');}else{_self.prevNextToggle=false;_self.config.wrapper.addEventListener('animationend',function(){core.style.removeClass(_self.config.wrapper,'fadeInUp');core.style.addClass(_self.config.splash,'pulse');},false);core.style.addClass(_self.config.wrapper,'fadeinup');core.style.addClass(_self.config.wrapper,'active');}};/**
   * set article url when opening the modal or the initial url when closing
   * @param {Boolean} resetUrl reset url to the initial one
   * @param {String} title title
   * @param {String} id id
   */common.ArticleModal.prototype.setUrl=function(resetUrl,title,id){var _self=this;var url;if(resetUrl){url=_self.config.prevUrl;}else{url=common.generateUrl('text',id,'',title);}history.replaceState(title,title,url);};/**
   * Init social share
   * @param {String} title title
   */common.ArticleModal.prototype.initSocialShare=function(title){var _self=this;if(_self.config.shareModal){_self.config.shareModal.setAttribute('data-body',title);if(!_self.share&&!_self.config.shareModal.dataset.hasListener){_self.config.shareModal.setAttribute('data-has-listener',true);_self.share=new common.PageShare(_self.config.shareModal);}}};/*
   * Search for embeddable pictures and hide the expand button
   */common.ArticleModal.prototype.hideImageExpand=function(){var _self=this;var photos=_self.config.viewport.querySelectorAll('.js-image-container');if(photos&&photos.length>0){for(var i=0;i<photos.length;i++){var expandButton=photos[i].querySelector('.js-expand');if(expandButton){core.style.addClass(expandButton,'u-hide');}}}};})(PULSE.app,PULSE.app.common,PULSE.core);(function(common){'use strict';common.ArticleTable=function(container){this.container=container;this.tables=this.container.querySelectorAll('table');for(var i=0;i<this.tables.length;i++){if(this.container.className===this.tables[i].parentElement.className){this.tables[i].outerHTML='<div class="table-scrollable">'+this.tables[i].outerHTML+'</div>';}}};// initialise on article pages
var articles=document.querySelectorAll('.js-article-content');Array.prototype.map.call(articles,function(article){new common.ArticleTable(article);});})(PULSE.app.common);// ( function( app, core, common ) {
//     'use strict';
//     var DEFAULT_JSON_HEADERS = [
//         {
//             label: 'Content-Type',
//             value: 'application/json'
//         }
//     ];
//     var EXCHANGE_CODE_HEADERS = [
//         {
//             label: 'Content-Type',
//             value: 'application/x-www-form-urlencoded'
//         }
//     ];
//     /**
//      * @constructor
//      */
//     app.Cognito = ( function() {
//         AWS.config.region = app.environment.cognito.region;
//         var poolData = {
//             UserPoolId: app.environment.cognito.userPool,
//             ClientId: app.environment.cognito.clientId
//         };
//         return {
//             userPool: new AmazonCognitoIdentity.CognitoUserPool( poolData ),
//             poolData: poolData,
//             serviceProvider: new AWS.CognitoIdentityServiceProvider()
//         };
//     }() );
//     /**
//      * Alert the dom the user has signed in
//      */
//     app.Cognito.dispatchUserSession = function() {
//         common.Helpers.dispatchEvent( common.constants.EVENT.SESSION );
//     };
//     /**
//      * Alert the dom the user has logged out
//      */
//     app.Cognito.endUserSession = function() {
//         common.Helpers.dispatchEvent( common.constants.EVENT.END_SESSION );
//     };
//     /**
//      * Set cognito full username into the cognitoUser object
//      *
//      * @param {string} userName user name requested to cognito or the identity service provider
//      */
//     app.Cognito.setCognitoFullUserName = function( userName ) {
//         var _self = this;
//         if ( !_self.cognitoUser ) {
//             _self.cognitoUser = {};
//         }
//         _self.cognitoUser.fullName = userName;
//     };
//     /**
//      * Set cognito user name into the cognitoUser object
//      *
//      * @param {string} name user name requested to cognito or the identity service provider
//      */
//     app.Cognito.setCognitoUserName = function( name ) {
//         var _self = this;
//         if ( !_self.cognitoUser ) {
//             _self.cognitoUser = {};
//         }
//         _self.cognitoUser.name = name;
//     };
//     /**
//      * Set socialUser image into the socialUser object
//      *
//      * @param {string} img url
//      */
//     app.Cognito.setSocialUserImage = function( img ) {
//         var _self = this;
//         if ( !_self.cognitoUser ) {
//             _self.cognitoUser = {};
//         }
//         _self.cognitoUser.imageUrl = img;
//     };
//     /**
//      * Set cognitoUUID needed to store the user prefs in dynamoDB
//      *
//      * @param {string} cognitoUUID cognito's user unique identifier
//      */
//     app.Cognito.setUUID = function( cognitoUUID ) {
//         var _self = this;
//         if ( !_self.cognitoUser ) {
//             _self.cognitoUser = {};
//         }
//         _self.cognitoUser.uuid = cognitoUUID;
//     };
//     /**
//      * Returns cognitoUser full name stored in app.Cognito
//      *
//      * @return {string} user name
//      */
//     app.Cognito.getCognitoFullUserName = function() {
//         var _self = this;
//         return _self.cognitoUser.fullName;
//     };
//     /**
//      * Returns cognitoUser name stored in app.Cognito
//      *
//      * @return {string} user name
//      */
//     app.Cognito.getCognitoUserName = function() {
//         var _self = this;
//         return _self.cognitoUser.name;
//     };
//     /**
//      * Returns socialUser image is the user has logged in via social
//      *
//      * @return {string} returns either a url or null
//      */
//     app.Cognito.getSocialUserImage = function() {
//         var _self = this;
//         return _self.cognitoUser.imageUrl || null;
//     };
//     /**
//      * Returns cognitoUUID
//      *
//      * @return {string} cognito's user unique identifier
//      */
//     app.Cognito.getUUID = function() {
//         var _self = this;
//         return _self.cognitoUser.uuid;
//     };
//     /**
//      * Check if there's a user currently authenticated
//      * @return {boolean} returns wether the user is logged in or not
//      */
//     app.Cognito.isUserLoggedIn = function() {
//         var _self = this;
//         return new Promise( function( resolve, reject ) {
//             _self.cognitoUser = _self.userPool.getCurrentUser();
//             if ( _self.cognitoUser ) {
//                 var isLoggedIn = _self.cognitoUser.getSession( function( err, session ) {
//                     return session.isValid();
//                 } );
//                 if ( isLoggedIn ) {
//                     resolve( common.constants.STATUS.SUCCESS );
//                 } else {
//                     reject( common.constants.STATUS.FAILURE );
//                 }
//             } else {
//                 reject( common.constants.STATUS.FAILURE );
//             }
//         } );
//     };
//     /**
//      * Retrieve current user from local storage
//      *
//      * @param {function} callback
//      * @param {boolean} dispatchEvent true if the event should be dispatched
//      * @return {object} user data
//      */
//     app.Cognito.getUserAttributes = function( callback, dispatchEvent ) {
//         var _self = this;
//         if ( !callback ) {
//             return {
//                 status: common.constants.STATUS.FAILURE,
//                 detail: 'callback method required'
//             };
//         }
//         var cognitoUser = _self.userPool.getCurrentUser();
//         if ( !cognitoUser ) {
//             return callback( {
//                 status: common.constants.STATUS.FAILURE,
//                 detail: 'No cognito user available.'
//             } );
//         }
//         // check if the user is in session, otherwise we won't be able to
//         // retrieve the user attributes
//         cognitoUser.getSession( function( error ) {
//             if ( error ) {
//                 return callback( {
//                     status: common.constants.STATUS.FAILURE,
//                     detail: error
//                 } );
//             }
//             cognitoUser.getUserAttributes( function( err, result ) {
//                 if ( err ) {
//                     return callback( {
//                         status: common.constants.STATUS.FAILURE,
//                         detail: err
//                     } );
//                 }
//                 _self.setCognitoFullUserName( common.Helpers.getUserFullName( result ) );
//                 _self.setCognitoUserName( common.Helpers.getUserName( result ) );
//                 _self.setUUID( common.Helpers.getUUID( result ) );
//                 _self.setSocialUserImage( common.Helpers.getSocialUserImage( result ) );
//                 //alert the dom that the user is logged in
//                 if ( dispatchEvent ) {
//                     app.Cognito.dispatchUserSession();
//                 }
//                 return callback( {
//                     status: common.constants.STATUS.SUCCESS,
//                     detail: result
//                 } );
//             } );
//         } );
//     };
//     /**
//      * Returns true if the specified email exists in the user poolData
//      * @param {string} email user email
//      * @param {function} callback callback
//      */
//     app.Cognito.checkEmail = function( email, callback ) {
//         var _self = this;
//         var url = common.Helpers.getEmailStatusUrl( encodeURI( email.toLowerCase() ), _self.poolData.UserPoolId );
//         var subscriberObject = {
//             url: url,
//             headers: DEFAULT_JSON_HEADERS,
//             method: 'GET',
//             forceCallback: true,
//             callback: function( response ) {
//                 callback( {
//                     emailUsed: response.email_used
//                 } );
//             }
//         };
//         core.data.manager.add( subscriberObject );
//     };
//     /**
//      * API call to check consent for a specific email address
//      *
//      * @param  {string} email       email address
//      * @param  {function} callback  callback function
//      */
//     app.Cognito.checkConsent = function( email, callback ) {
//         var url = common.Helpers.getChildConsentStatusUrl( encodeURI( email.toLowerCase() ) );
//         var subscriberObject = {
//             url: url,
//             headers: DEFAULT_JSON_HEADERS,
//             method: 'GET',
//             forceCallback: true,
//             callback: function( response ) {
//                 return callback( {
//                     status: common.constants.STATUS.SUCCESS,
//                     detail: response
//                 } );
//             }
//         };
//         core.data.manager.add( subscriberObject );
//     };
//     /**
//      * API call to send guardian details
//      *
//      * @param  {string} name            name of guardian
//      * @param  {string} email           email of guardian
//      * @param  {string} childEmail      child email to request consent for
//      * @param  {function} callback      callback function
//      */
//     app.Cognito.sendGuardianDetails = function( name, email, childEmail, callback ) {
//         var _self = this;
//         var url = common.Helpers.getGuardianConsentUrl();
//         var body = {
//             guardianName: name,
//             guardianEmail: email.toLowerCase(),
//             childEmail: childEmail.toLowerCase(),
//         };
//         var requestCallback = function( response ) {
//             return callback( {
//                 status: common.constants.STATUS.SUCCESS,
//                 detail: response
//             } );
//         };
//         core.data.request(
//             url,
//             'POST',
//             requestCallback,
//             _self,
//             null,
//             JSON.stringify( body ),
//             DEFAULT_JSON_HEADERS,
//             'json',
//             true
//         );
//     };
//     /**
//      * API call to authorise consent
//      *
//      * @param  {string} email       email of child to give consent to
//      * @param  {string} uuid        uuid (should be attatched as query param on the current page)
//      * @param  {function} callback  callback function
//      */
//     app.Cognito.guardianAuthorisation = function( email, uuid, callback ) {
//         var _self = this;
//         var url = common.Helpers.getGuardianAuthorisationUrl();
//         var body = {
//             uuid: uuid,
//             childEmail: email.toLowerCase()
//         };
//         var requestCallback = function( response ) {
//             return callback( {
//                 status: common.constants.STATUS.SUCCESS,
//                 detail: response
//             } );
//         };
//         core.data.request(
//             url,
//             'POST',
//             requestCallback,
//             _self,
//             null,
//             JSON.stringify( body ),
//             DEFAULT_JSON_HEADERS,
//             'json',
//             true
//         );
//     };
//     /**
//      * Register User
//      * @param {string} email user email
//      * @param {string} username username
//      * @param {string} pword password
//      * @param {function} callback callback method
//      * @param {object} attributes user attributes
//      */
//     app.Cognito.registerUser = function( email, username, pword, callback, attributes ) {
//         var _self = this;
//         var attributeList = [];
//         attributes.forEach( function( attr ) {
//             attributeList.push( new AmazonCognitoIdentity.CognitoUserAttribute( attr ) );
//         } );
//         var dataEmail = {
//             Name: 'email',
//             Value: email.toLowerCase()
//         };
//         var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute( dataEmail );
//         attributeList.push( attributeEmail );
//         _self.userPool.signUp( username, pword, attributeList, null, function( err, result ) {
//             if ( err ) {
//                 return callback ( {
//                     status: common.constants.STATUS.FAILURE,
//                     detail: err
//                 } );
//             }
//             return callback( {
//                 status: common.constants.STATUS.SUCCESS,
//                 detail: result
//             } );
//         } );
//     };
//     /**
//      * Register with facebook
//      * The facebook authentication (and creation of the user in Cognito) already happens
//      * when using the authenticateWithIdentityProvider function. This is effectively only an update
//      * to the existing user making the user fill out additional required fields to align
//      * the registration with the normal registerUser process.
//      *
//      * @param  {array}      attributes  array of objects for cognito user attributes
//      * @param  {function}   callback    callback function
//      * @return {function}               returns callback function
//      */
//     app.Cognito.registerWithSocial = function( attributes, callback ) {
//         var _self = this;
//         if ( !attributes ) {
//             return;
//         }
//         _self.cognitoUser = _self.userPool.getCurrentUser();
//         if ( _self.cognitoUser ) {
//             var isLoggedIn = _self.cognitoUser.getSession( function( err, session ) {
//                 return session.isValid();
//             } );
//             if ( isLoggedIn ) {
//                 app.Cognito.updateUserAttributes ( attributes, callback );
//             } else {
//                 console.error( 'Register with social: no user available' );
//             }
//         }
//     };
//     /**
//      * User preferences aren't stored in the cognito user pool therefore
//      * we need to make a custom API request here.
//      *
//      * @param {string} method               'POST' to save the data - registration, 'PUT' when updating the attributes - account
//      * @param  {object} userPreferences     Depending on the project this object can have a different structure
//      * @param  {function} callback          callback function
//      * @param  {boolean} updatePrefs         true if it's an update of the prefs, as we need to add the uuid to the url
//      * @return {function}                   returns callback function
//      */
//     app.Cognito.setUserPreferences = function( userPreferences, callback, updatePrefs ) {
//         var _self = this;
//         var url = common.Helpers.getPreferencesUrl();
//         if ( updatePrefs ) {
//             url = common.Helpers.getPreferencesUrlWithUUID( app.Cognito.getUUID() );
//         }
//         var body = JSON.stringify( userPreferences );
//         var requestCallback = function( response ) {
//             // _self.setProfileCompletionPercentage();
//             return callback( {
//                 status: common.constants.STATUS.SUCCESS,
//                 detail: response
//             } );
//         };
//         core.data.request(
//             url,
//             'POST',
//             requestCallback,
//             _self,
//             null,
//             body,
//             DEFAULT_JSON_HEADERS,
//             'json',
//             true
//         );
//     };
//     /**
//      * Get user prefs from dynamoDB
//      *
//      * @param  {function} callback          callback function
//      * @return {function}                   returns callback function
//      */
//     app.Cognito.getUserPreferences = function( callback ) {
//         var url = common.Helpers.getPreferencesUrlWithUUID( app.Cognito.getUUID() );
//         var requestCallback = function( response ) {
//             return callback( {
//                 status: response.status,
//                 detail: response
//             } );
//         };
//         var subscriberObject = {
//             url: url,
//             headers: DEFAULT_JSON_HEADERS,
//             method: 'GET',
//             forceCallback: true,
//             callback: requestCallback
//         };
//         core.data.manager.add( subscriberObject );
//     };
//     /**
//      * Redirects user to amazon cognito using an identity provider.
//      *
//      * @param {string} identityProvider identity provider to authorize with
//      */
//     app.Cognito.authenticateWithIdentityProvider = function( identityProvider ) {
//         if ( !identityProvider ) {
//             // Please provide an identity provider in order to authenticate with one
//             return false;
//         }
//         // not using .href as this can conflict when having hash params
//         var currentUrl = window.location.origin + window.location.pathname;
//         window.location.href = common.Helpers.getSocialRedirectUrl( currentUrl, identityProvider );
//     };
//     /**
//      * FB-SDK Login
//      */
//     app.Cognito.facebookLogin = function() {
//         FB.login( function ( response ) {
//             // Check if the user logged in successfully.
//             if ( response.authResponse ) {
//                 app.Cognito.authenticateWithIdentityProvider( 'Facebook' );
//             } else {
//                 console.warn( 'There was a problem logging you in.' );
//                 //TODO what happens if the login fails
//             }
//         } );
//     };
//     /**
//      * Google Platform Library
//      */
//     app.Cognito.googleLogin = function() {
//         auth2.grantOfflineAccess().then( function( authResult ) {
//             if ( authResult.code ) {
//                 app.Cognito.authenticateWithIdentityProvider( 'Google' );
//             } else {
//                 console.warn( 'There was a problem logging you in.' );
//                 //TODO what happens if the login fails
//             }
//         } );
//     };
//     /**
//      * Authenticating a user and establishing a user session with the Amazon Cognito Identity service
//      * @param {string} username user email
//      * @param {string} pword password
//      * @param {function} callback callback method
//      */
//     app.Cognito.signIn = function( username, pword, callback ) {
//         var _self = this;
//         var authenticationData = {
//             Username: username.toLowerCase(),
//             Password: pword
//         };
//         var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails( authenticationData );
//         var userData = {
//             Username: username.toLowerCase(),
//             Pool: _self.userPool
//         };
//         _self.cognitoUser = new AmazonCognitoIdentity.CognitoUser( userData );
//         _self.cognitoUser.authenticateUser( authenticationDetails, {
//             onSuccess: function() {
//                 _self.getUserAttributes( callback, true );
//             },
//             onFailure: function( err ) {
//                 var type;
//                 if ( err.code === 'NotAuthorizedException' ) {
//                     // wrong password
//                     type = 'auth';
//                 } else if ( err.code === 'UserNotFoundException' ) {
//                     // user does not exist
//                     type = 'notfound';
//                 } else if ( err.code === 'UserNotConfirmedException' || ( err.code === 'UserLambdaValidationException' && err.message.includes( 'EmailNotVerifiedError' ) ) ) {
//                     // user not confirmed or confirmed but email not verified
//                     type = 'validate';
//                 }
//                 callback( {
//                     status: common.constants.STATUS.FAILURE,
//                     type: type,
//                     detail: err
//                 } );
//             }
//         } );
//     };
//     /**
//      * Get a user with access code from url to exchange it by tokens
//      * This function expects an access code as query parameter
//      *
//      * @param  {function} returnCallback callback function
//      * @return {function} returns callback function
//      */
//     app.Cognito.getUserWithAccessCode = function( returnCallback ) {
//         var _self = this;
//         if ( !returnCallback ) {
//             return {
//                 status: common.constants.STATUS.FAILURE,
//                 detail: 'callback method required'
//             };
//         }
//         var code = common.Helpers.getUrlParameter( 'code' );
//         var error = common.Helpers.getUrlParameter( 'error' );
//         var errorDesc = common.Helpers.getUrlParameter( 'error_description' );
//         if ( code ) {
//             var body = {
//                 grant_type: 'authorization_code',
//                 client_id: _self.poolData.ClientId,
//                 redirect_uri: window.location.origin + window.location.pathname,
//                 code: code
//             };
//             var subscriberObject = {
//                 url: app.environment.ssoToken,
//                 headers: EXCHANGE_CODE_HEADERS,
//                 method: 'POST',
//                 data: body,
//                 callback: _self.exchangeAccessCodeByTokens.bind( _self, returnCallback )
//             };
//             core.data.manager.add( subscriberObject );
//         } else if ( error === 'invalid_request' && errorDesc.startsWith( 'PreSignUp failed' ) ) {
//             var signinError = document.querySelector( '.js-submit-error' );
//             if ( signinError ) {
//                 signinError.innerText = 'Please try signing in with the provider you originally signed up with.';
//                 core.style.addClass( signinError, 'is-active' );
//             }
//         }
//     };
//     /**
//      * Exchange access code by id_token, access_token and refresh_token when the user signs in
//      * via social
//      *
//      * @param {Object} response object contaning the tokens
//      */
//     app.Cognito.exchangeAccessCodeByTokens = function( callback, response ) {
//         var _self = this;
//         if ( response.fullXhttpResponse.status === common.constants.STATUS.CODE_400 ) {
//             console.error( 'Exchange code: ', response.fullXhttpResponse.response.error );
//             return;
//         }
//         var params = {
//             AccessToken: response.access_token
//         };
//         _self.serviceProvider.getUser( params, function( error, data ) {
//             if ( error ) {
//                 return console.error( 'Exchange Code: ', error );
//             }
//             var uuid = common.Helpers.getUUID( data.UserAttributes );
//             _self.setUUID( uuid );
//             var tokens = [
//                 {
//                     key: 'CognitoIdentityServiceProvider.' + _self.poolData.ClientId + '.LastAuthUser',
//                     value: uuid
//                 },
//                 {
//                     key: 'CognitoIdentityServiceProvider.' + _self.poolData.ClientId + '.' + uuid + '.accessToken',
//                     value: response.access_token
//                 },
//                 {
//                     key: 'CognitoIdentityServiceProvider.' + _self.poolData.ClientId + '.' + uuid + '.idToken',
//                     value: response.id_token
//                 },
//                 {
//                     key: 'CognitoIdentityServiceProvider.' + _self.poolData.ClientId + '.' + uuid + '.refreshToken',
//                     value: response.refresh_token
//                 }
//             ];
//             tokens.forEach( function( token ) {
//                 localStorage.setItem( token.key, token.value );
//             } );
//             return callback ( {
//                 status: common.constants.STATUS.SUCCESS,
//                 detail: data
//             } );
//         } );
//     };
//     /**
//      * Get user's UUID by email
//      *
//      * @param {string} email user's email
//      * @param {function} callback callback function
//      */
//     app.Cognito.getUUIDByEmail = function( email, callback ) {
//         var url = common.Helpers.getUUIDByEmailUrl( encodeURI( email.toLowerCase() ) );
//         var subscriberObject = {
//             url: url,
//             headers: DEFAULT_JSON_HEADERS,
//             method: 'GET',
//             forceCallback: true,
//             callback: function( response ) {
//                 if ( !response.error ) {
//                     callback( {
//                         status: common.constants.STATUS.SUCCESS,
//                         detail: response
//                     } );
//                 } else {
//                     callback( {
//                         status: common.constants.STATUS.FAILURE,
//                         detail: response.error
//                     } );
//                 }
//             }
//         };
//         core.data.manager.add( subscriberObject );
//     };
//     /**
//      * Start the forgotten password flow where cognito sends an email to
//      * the user with a confirmation code in order to reset the password
//      *
//      * @param {string} uuid user's unique identifier
//      * @param {function} callback callback function
//      */
//     app.Cognito.forgotPassword = function( uuid, callback ) {
//         var _self = this;
//         var userData = {
//             Username: uuid,
//             Pool: _self.userPool
//         };
//         _self.cognitoUserPassword = new AmazonCognitoIdentity.CognitoUser( userData );
//         _self.cognitoUserPassword.forgotPassword( {
//             onSuccess: function ( data ) {
//                 return callback( {
//                     status: common.constants.STATUS.SUCCESS,
//                     detail: data
//                 } );
//             },
//             onFailure: function( err ) {
//                 return callback( {
//                     status: common.constants.STATUS.FAILURE,
//                     detail: err
//                 } );
//             }
//         } );
//     };
//     /**
//      * Confirm new user's password with cognito after re-setting it
//      *
//      * @param {string} code verification code sent
//      * @param {string} newPassword new Password
//      * @param {function} callback callback function
//      */
//     app.Cognito.confirmPassword = function( code, newPassword, callback ) {
//         var _self = this;
//         _self.cognitoUserPassword.confirmPassword( code, newPassword, {
//             onSuccess: function ( data ) {
//                 return callback( {
//                     status: common.constants.STATUS.SUCCESS,
//                     detail: data
//                 } );
//             },
//             onFailure: function( err ) {
//                 return callback( {
//                     status: common.constants.STATUS.FAILURE,
//                     detail: err
//                 } );
//             }
//         } );
//     };
//     /**
//      * Sign out user
//      */
//     app.Cognito.signout = function() {
//         var _self = this;
//         var cognitoUser = _self.userPool.getCurrentUser();
//         if ( cognitoUser ) {
//             cognitoUser.signOut();
//             app.Cognito.endUserSession();
//             app.Cognito.clearStoredFavouriteTeam();
//         }
//     };
//     /**
//      * Update the user attributes
//      *
//      * @param {object} attributes user data to update
//      * @param {function} callback callback method
//      */
//     app.Cognito.updateUserAttributes = function( attributes, callback ) {
//         var _self = this;
//         if ( !attributes ) {
//             return;
//         }
//         var attributeList = [];
//         attributes.forEach( function( attr ) {
//             attributeList.push( new AmazonCognitoIdentity.CognitoUserAttribute( attr ) );
//         } );
//         _self.cognitoUser.updateAttributes( attributeList, function( error, result ) {
//             if ( error ) {
//                 return callback( {
//                     status: common.constants.STATUS.FAILURE,
//                     detail: error
//                 } );
//             }
//             return callback( {
//                 status: common.constants.STATUS.SUCCESS,
//                 detail: result
//             } );
//         } );
//     };
//     /**
//      * Change current password for an authenticated user
//      *
//      * @param {string} oldPwd user's current password
//      * @param {string} newPwd user's new password
//      * @param {function} callback callback
//      * @return {function} callback
//      */
//     app.Cognito.changePassword = function( oldPwd, newPwd, callback ) {
//         var _self = this;
//         var cognitoUser = _self.userPool.getCurrentUser();
//         if ( !cognitoUser ) {
//             return callback( {
//                 status: common.constants.STATUS.FAILURE,
//                 detail: 'No session'
//             } );
//         }
//         cognitoUser.getSession( function( error ) {
//             if ( error ) {
//                 return callback( {
//                     status: common.constants.STATUS.FAILURE,
//                     detail: 'No session'
//                 } );
//             }
//         } );
//         cognitoUser.changePassword( oldPwd, newPwd, function( error, result ) {
//             if ( error ) {
//                 return callback( {
//                     status: common.constants.STATUS.FAILURE,
//                     detail: error
//                 } );
//             }
//             return callback( {
//                 status: common.constants.STATUS.SUCCESS,
//                 detail: result
//             } );
//         } );
//     };
//     /**
//      * Store user's favourite team in a cookie so it's available for all the
//      * personalised widgets
//      *
//      * @param {Object} prefs user preferences object
//      */
//     app.Cognito.storeFavouriteTeam = function( prefs ) {
//         if ( !prefs.favTeam && !prefs.favTeamMens && !prefs.favTeamWomens ) {
//             return;
//         } else if ( prefs.favTeam === 'noteam' ) {
//             return;
//         }
//         var favTeam = {
//             abbr: prefs.favTeam,
//             men: prefs.favTeamMens,
//             women: prefs.favTeamWomens
//         };
//         core.localStorage.setStorage( common.constants.USER_TEAM_COOKIE, JSON.stringify( favTeam ), 90, true );
//     };
//     /**
//      * Clear the cookie that stores the user's fav team
//      */
//     app.Cognito.clearStoredFavouriteTeam = function() {
//         core.localStorage.clearStorage( common.constants.USER_TEAM_COOKIE, true );
//     };
// } ( PULSE.app, PULSE.core, PULSE.app.common ) );
(function(app,common){var AXES_LABEL_COLOUR='#83929F';var CHART_GRID_LINE_COLOUR='#324E67';/**
   * generates a chart using chart.js
   * @constructor
   */common.ChartJS=function(){var _self=this;// init default options and data
_self.initOptions();_self.initData();return _self;};/**
   * Generates default options for the chart
   */common.ChartJS.prototype.initOptions=function(){var _self=this;var min=1;var ticksPadding=16;var borderDash=5;var maxTicksLimit=5;_self.options={animation:{easing:'linear',duration:250},scales:{yAxes:[{gridLines:{borderDash:[borderDash,borderDash],color:CHART_GRID_LINE_COLOUR,drawBorder:false},scaleLabel:{display:true},ticks:{autoSkip:true,reverse:true,min:min,maxTicksLimit:maxTicksLimit,fontColor:AXES_LABEL_COLOUR,callback:function callback(value,index,values){//adds hash and space onto axes labels
return'#'+value+'     ';}}}],xAxes:[{gridLines:{display:false,drawBorder:false},scaleLabel:{display:true},offset:false,ticks:{fontColor:AXES_LABEL_COLOUR,padding:ticksPadding,maxRotation:0,source:'labels',autoSkip:true,autoSkipPadding:75,maxTicksLimit:2}}]},legend:{display:false,labels:{fontColor:AXES_LABEL_COLOUR}},tooltips:{enabled:false,mode:'index',position:'nearest'}};};/**
   * initialise data store
   */common.ChartJS.prototype.initData=function(){var _self=this;_self.data={};};/**
   * initialise chart
   * @param {HTMLElement} canvas element passed to chartjs instance
   * @param {String} type chart type. Default line.
   * @return {constructorInstance} instance of ChartJS
   */common.ChartJS.prototype.initChart=function(canvas){var type=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'line';var _self=this;Chart.defaults.global.responsive=true;Chart.defaults.global.maintainAspectRatio=true;if(!_self.data.datasets){console.warn('Chart requires data, use updateData method to add data sets');}_self.chart=new Chart(canvas,{type:type,data:_self.data,options:_self.options,responsive:false,maintainAspectRatio:false,bezierCurve:true});return _self;};/**
   * updates options object based on the custom options
   * @param {Object} customOptions mapped to structure of options passed to chart instance
   * docs https://www.chartjs.org/docs/latest/
   * @return {constructorInstance} instance of ChartJS
   */common.ChartJS.prototype.updateOptions=function(){var customOptions=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var _self=this;getObjectProps.call(_self,customOptions,'options');return _self;};/**
   * updates options object based on the custom options
   * @param {Object} customData mapped to structure of data passed to chart instance
   * docs https://www.chartjs.org/docs/latest/
   * @return {constructorInstance} instance of ChartJS
   */common.ChartJS.prototype.updateData=function(){var customData=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var _self=this;getObjectProps.call(_self,customData,'data');return _self;};/**
   * updates the chart based on the updated data
   * @param {Object} updatedData mapped to structure of data passed to chart instance
   * docs https://www.chartjs.org/docs/latest/
   * @return {constructorInstance} instance of ChartJS
   */common.ChartJS.prototype.update=function(){var updatedData=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var _self=this;// update instance datasets
_self.updateData(updatedData);// update chart data
_self.chart.data=_self.data;// re-render new chart with updated data
_self.chart.update();return _self;};/**
  * private function that recursively transverses the custom options object and harvests the required details.
  * @param {Object} obj obj and then any nested objects.
  * @param {String} objectToExtend name of object to extend e.g. options
  * @param {String} parentKey key of the parent obj ( if available ). Default null.
  */var getObjectProps=function getObjectProps(obj,objectToExtend){var parentKey=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var keys=Object.keys(obj);var _self=this;keys.forEach(function(key){// we have another object
if(obj[key]&&_typeof(obj[key])==='object'&&!Array.isArray(obj[key])){getObjectProps.call(_self,obj[key],objectToExtend,key);}else{// we have values to add to objectToExtend
addObjectProps.call(_self,obj,key,parentKey,objectToExtend);}});};/**
  * private function that updates properties on the object name passed
  * @param {Object} obj the current object.
  * @param {String} key key of the property to update.
  * @param {String} parentKey if parent, parent key of the object.
  * @param {String} objectToExtend if parent, parent key of the object.
  */var addObjectProps=function addObjectProps(obj,key,parentKey,objectToExtend){// if there is no parent key then add the prop at the highest level
var _self=this;if(!parentKey){_self[objectToExtend][key]=obj[key];}else{// if there is a parent key then add the parent prop and next the child props as key value pairs
if(!_self[objectToExtend][parentKey]){_self[objectToExtend][parentKey]={};}_self[objectToExtend][parentKey][key]=obj[key];}};})(PULSE.app,PULSE.app.common);(function(common){'use strict';/* SSO CONSTANTS */common.constants.CLASS={ERROR:'form-group__element--invalid',GROUP_INVALID:'form-group--invalid',ACTIVE:'is-active',HIDE:'u-hide',DISABLED:'is-disabled',OPEN:'is-open'};/**
   * All global class name constants should be defined inside this
   * object.
   */common.constants.Classes={HIDE:'u-hide',SHOW:'u-show',IS_ACTIVE:'is-active',IS_DISABLED:'is-disabled',IS_INACTIVE:'is-inactive',IS_LOADING:'is-loading',IS_OPEN:'is-open',IS_VISIBLE:'is-visible',IS_HIDDEN:'is-hidden',IS_DOCKED:'is-docked',IS_ANIMATING:'is-animating',IS_LOGGED_IN:'is-logged-in',MODAL_SHOW:'modal-is-shown',MODAL_HIDE:'modal-is-hidden',ANIMATE_IN:'animate-in',ANIMATE_OUT:'animate-out',BODY_NO_SCROLL:'u-body-no-scroll'};common.constants.ATTR={TRIGGERED_BY:'data-triggered-by'};common.constants.STATUS={SUCCESS:'success',FAILURE:'failure',CODE_400:400};common.constants.MESSAGE={PASSWORD_UPDATE_ERROR:'There was a problem updating your password',PASSWORD_UPDATE_SUCCESS:'Password Changed Successfully',INVALID:'Incorrect format',ERROR:'This is a required field',UPDATED:'Account Updated Successfully',UPDATE_ERROR:'Something went wrong'};/*
   * Events that the personalised widgets listen to, to determine if the user
   * is logged in or not
   */common.constants.EVENT={SESSION:'user#session',END_SESSION:'user#signout',DISPLAY_ACCOUNT:'user#displayAccount',TRIGGER_CLICK:'formDropdown#manual'};/*
   * Cookie that stores the user's favourite team
   */common.constants.USER_TEAM_COOKIE='_sso_team';/*
   * The timeout delay set before the widget is animated in
   */common.constants.SECTION_DELAY=1000;/* end of SSO */common.constants.ENTITLEMENT={FREE:'premium-free'};common.constants.KEY_CODES={ENTER:13,ESCAPE:27,ARROW_KEY_LEFT:37,ARROW_KEY_RIGHT:39,SPACE:32};common.constants.PLAYER_ROLES={batting:'bat',bowling:'bowl',all_round:'allround'};/* rankings comparison events */common.constants.RANKINGS_COMPARISON={EVENT:{QUICK_PICK_RENDERED:'quickPickRendered',PLAYER_RENDERED:'playerRendered'}};common.constants.NOTIFICATIONS_PERMISSION={DENIED:'denied',GRANTED:'granted'};common.constants.MATCH_STATES={COMPLETED:'C',LIVE:'L',POSTPONED:'P',UPCOMING:'U'};common.constants.FORMATS={men:['test','odi','t20i'],women:['wt20i','wodi']};common.constants.SSO={ready:'SSO.READY'};})(PULSE.app.common);(function(common){'use strict';/* SSO CONSTANTS - COUNTRY LIST */common.constants.COUNTRY_LIST=[{key:'AFG',value:'Afghanistan'},{key:'ALA',value:'Åland Islands'},{key:'ALB',value:'Albania'},{key:'DZA',value:'Algeria'},{key:'ASM',value:'American Samoa'},{key:'AND',value:'Andorra'},{key:'AGO',value:'Angola'},{key:'AIA',value:'Anguilla'},{key:'ATA',value:'Antarctica'},{key:'ATG',value:'Antigua and Barbuda'},{key:'ARG',value:'Argentina'},{key:'ARM',value:'Armenia'},{key:'ABW',value:'Aruba'},{key:'AUS',value:'Australia'},{key:'AUT',value:'Austria'},{key:'AZE',value:'Azerbaijan'},{key:'BHS',value:'Bahamas'},{key:'BHR',value:'Bahrain'},{key:'BGD',value:'Bangladesh'},{key:'BRB',value:'Barbados'},{key:'BLR',value:'Belarus'},{key:'BEL',value:'Belgium'},{key:'BLZ',value:'Belize'},{key:'BEN',value:'Benin'},{key:'BER',value:'Bermuda'},{key:'BTN',value:'Bhutan'},{key:'BOL',value:'Bolivia, Plurinational State of'},{key:'BES',value:'Bonaire, Sint Eustatius and Saba'},{key:'BIH',value:'Bosnia and Herzegovina'},{key:'BWA',value:'Botswana'},{key:'BVT',value:'Bouvet Island'},{key:'BRA',value:'Brazil'},{key:'IOT',value:'British Indian Ocean Territory'},{key:'BRN',value:'Brunei Darussalam'},{key:'BGR',value:'Bulgaria'},{key:'BFA',value:'Burkina Faso'},{key:'BDI',value:'Burundi'},{key:'KHM',value:'Cambodia'},{key:'CMR',value:'Cameroon'},{key:'CAN',value:'Canada'},{key:'CPV',value:'Cape Verde'},{key:'CYM',value:'Cayman Islands'},{key:'CAF',value:'Central African Republic'},{key:'TCD',value:'Chad'},{key:'CHL',value:'Chile'},{key:'CHN',value:'China'},{key:'CXR',value:'Christmas Island'},{key:'CCK',value:'Cocos (Keeling) Islands'},{key:'COL',value:'Colombia'},{key:'COM',value:'Comoros'},{key:'COG',value:'Congo'},{key:'COD',value:'Congo, the Democratic Republic of the'},{key:'COK',value:'Cook Islands'},{key:'CRI',value:'Costa Rica'},{key:'CIV',value:'Côte d\'Ivoire'},{key:'HRV',value:'Croatia'},{key:'CUB',value:'Cuba'},{key:'CUW',value:'Curaçao'},{key:'CYP',value:'Cyprus'},{key:'CZE',value:'Czech Republic'},{key:'DNK',value:'Denmark'},{key:'DJI',value:'Djibouti'},{key:'DMA',value:'Dominica'},{key:'DOM',value:'Dominican Republic'},{key:'ECU',value:'Ecuador'},{key:'EGY',value:'Egypt'},{key:'SLV',value:'El Salvador'},{key:'GNQ',value:'Equatorial Guinea'},{key:'ERI',value:'Eritrea'},{key:'EST',value:'Estonia'},{key:'ETH',value:'Ethiopia'},{key:'FLK',value:'Falkland Islands (Malvinas)'},{key:'FRO',value:'Faroe Islands'},{key:'FJI',value:'Fiji'},{key:'FIN',value:'Finland'},{key:'FRA',value:'France'},{key:'GUF',value:'French Guiana'},{key:'PYF',value:'French Polynesia'},{key:'ATF',value:'French Southern Territories'},{key:'GAB',value:'Gabon'},{key:'GMB',value:'Gambia'},{key:'GEO',value:'Georgia'},{key:'DEU',value:'Germany'},{key:'GHA',value:'Ghana'},{key:'GIB',value:'Gibraltar'},{key:'GRC',value:'Greece'},{key:'GRL',value:'Greenland'},{key:'GRD',value:'Grenada'},{key:'GLP',value:'Guadeloupe'},{key:'GUM',value:'Guam'},{key:'GTM',value:'Guatemala'},{key:'GGY',value:'Guernsey'},{key:'GIN',value:'Guinea'},{key:'GNB',value:'Guinea-Bissau'},{key:'GUY',value:'Guyana'},{key:'HTI',value:'Haiti'},{key:'HMD',value:'Heard Island and McDonald Islands'},{key:'VAT',value:'Holy See (Vatican City State)'},{key:'HND',value:'Honduras'},{key:'HKG',value:'Hong Kong, China'},{key:'HUN',value:'Hungary'},{key:'ISL',value:'Iceland'},{key:'IND',value:'India'},{key:'IDN',value:'Indonesia'},{key:'IRN',value:'Iran, Islamic Republic of'},{key:'IRQ',value:'Iraq'},{key:'IRL',value:'Ireland'},{key:'IMN',value:'Isle of Man'},{key:'ISR',value:'Israel'},{key:'ITA',value:'Italy'},{key:'JAM',value:'Jamaica'},{key:'JPN',value:'Japan'},{key:'JEY',value:'Jersey'},{key:'JOR',value:'Jordan'},{key:'KAZ',value:'Kazakhstan'},{key:'KEN',value:'Kenya'},{key:'KIR',value:'Kiribati'},{key:'PRK',value:'Korea, Democratic People\'s Republic of'},{key:'KOR',value:'Korea, Republic of'},{key:'KWT',value:'Kuwait'},{key:'KGZ',value:'Kyrgyzstan'},{key:'LAO',value:'Lao People\'s Democratic Republic'},{key:'LVA',value:'Latvia'},{key:'LBN',value:'Lebanon'},{key:'LSO',value:'Lesotho'},{key:'LBR',value:'Liberia'},{key:'LBY',value:'Libya'},{key:'LIE',value:'Liechtenstein'},{key:'LTU',value:'Lithuania'},{key:'LUX',value:'Luxembourg'},{key:'MAC',value:'Macao, China'},{key:'MKD',value:'Macedonia, the former Yugoslav Republic of'},{key:'MDG',value:'Madagascar'},{key:'MWI',value:'Malawi'},{key:'MYS',value:'Malaysia'},{key:'MDV',value:'Maldives'},{key:'MLI',value:'Mali'},{key:'MLT',value:'Malta'},{key:'MHL',value:'Marshall Islands'},{key:'MTQ',value:'Martinique'},{key:'MRT',value:'Mauritania'},{key:'MUS',value:'Mauritius'},{key:'MYT',value:'Mayotte'},{key:'MEX',value:'Mexico'},{key:'FSM',value:'Micronesia, Federated States of'},{key:'MDA',value:'Moldova, Republic of'},{key:'MCO',value:'Monaco'},{key:'MNG',value:'Mongolia'},{key:'MNE',value:'Montenegro'},{key:'MSR',value:'Montserrat'},{key:'MAR',value:'Morocco'},{key:'MOZ',value:'Mozambique'},{key:'MMR',value:'Myanmar'},{key:'NAM',value:'Namibia'},{key:'NRU',value:'Nauru'},{key:'NPL',value:'Nepal'},{key:'NLD',value:'Netherlands'},{key:'NCL',value:'New Caledonia'},{key:'NZL',value:'New Zealand'},{key:'NIC',value:'Nicaragua'},{key:'NER',value:'Niger'},{key:'NGA',value:'Nigeria'},{key:'NIU',value:'Niue'},{key:'NFK',value:'Norfolk Island'},{key:'MNP',value:'Northern Mariana Islands'},{key:'NOR',value:'Norway'},{key:'OMN',value:'Oman'},{key:'PAK',value:'Pakistan'},{key:'PLW',value:'Palau'},{key:'PSE',value:'Palestinian Territory, Occupied'},{key:'PAN',value:'Panama'},{key:'PNG',value:'Papua New Guinea'},{key:'PRY',value:'Paraguay'},{key:'PER',value:'Peru'},{key:'PHL',value:'Philippines'},{key:'PCN',value:'Pitcairn'},{key:'POL',value:'Poland'},{key:'PRT',value:'Portugal'},{key:'PRI',value:'Puerto Rico'},{key:'QAT',value:'Qatar'},{key:'REU',value:'Réunion'},{key:'ROU',value:'Romania'},{key:'RUS',value:'Russian Federation'},{key:'RWA',value:'Rwanda'},{key:'BLM',value:'Saint Barthélemy'},{key:'SHN',value:'Saint Helena, Ascension and Tristan da Cunha'},{key:'KNA',value:'Saint Kitts and Nevis'},{key:'LCA',value:'Saint Lucia'},{key:'MAF',value:'Saint Martin (French part)'},{key:'SPM',value:'Saint Pierre and Miquelon'},{key:'VCT',value:'Saint Vincent and the Grenadines'},{key:'WSM',value:'Samoa'},{key:'SMR',value:'San Marino'},{key:'STP',value:'Sao Tome and Principe'},{key:'SAU',value:'Saudi Arabia'},{key:'SEN',value:'Senegal'},{key:'SRB',value:'Serbia'},{key:'SYC',value:'Seychelles'},{key:'SLE',value:'Sierra Leone'},{key:'SGP',value:'Singapore'},{key:'SXM',value:'Sint Maarten (Dutch part)'},{key:'SVK',value:'Slovakia'},{key:'SVN',value:'Slovenia'},{key:'SLB',value:'Solomon Islands'},{key:'SOM',value:'Somalia'},{key:'ZAF',value:'South Africa'},{key:'SGS',value:'South Georgia and the South Sandwich Islands'},{key:'SSD',value:'South Sudan'},{key:'ESP',value:'Spain'},{key:'LKA',value:'Sri Lanka'},{key:'SDN',value:'Sudan'},{key:'SUR',value:'Suriname'},{key:'SJM',value:'Svalbard and Jan Mayen'},{key:'SWZ',value:'Swaziland'},{key:'SWE',value:'Sweden'},{key:'CHE',value:'Switzerland'},{key:'SYR',value:'Syrian Arab Republic'},{key:'TWN',value:'Taiwan, China'},{key:'TJK',value:'Tajikistan'},{key:'TZA',value:'Tanzania, United Republic of'},{key:'THA',value:'Thailand'},{key:'TLS',value:'Timor-Leste'},{key:'TGO',value:'Togo'},{key:'TKL',value:'Tokelau'},{key:'TON',value:'Tonga'},{key:'TTO',value:'Trinidad and Tobago'},{key:'TUN',value:'Tunisia'},{key:'TUR',value:'Turkey'},{key:'TKM',value:'Turkmenistan'},{key:'TCA',value:'Turks and Caicos Islands'},{key:'TUV',value:'Tuvalu'},{key:'UGA',value:'Uganda'},{key:'UKR',value:'Ukraine'},{key:'ARE',value:'United Arab Emirates'},{key:'GBR',value:'United Kingdom'},{key:'USA',value:'United States'},{key:'UMI',value:'United States Minor Outlying Islands'},{key:'URY',value:'Uruguay'},{key:'UZB',value:'Uzbekistan'},{key:'VUT',value:'Vanuatu'},{key:'VEN',value:'Venezuela, Bolivarian Republic of'},{key:'VNM',value:'Viet Nam'},{key:'VGB',value:'Virgin Islands, British'},{key:'VIR',value:'Virgin Islands, U.S.'},{key:'WLF',value:'Wallis and Futuna'},{key:'ESH',value:'Western Sahara'},{key:'YEM',value:'Yemen'},{key:'ZMB',value:'Zambia'},{key:'ZWE',value:'Zimbabwe'}];})(PULSE.app.common);(function(common){'use strict';/* SSO CONSTANTS - Team Abbreviations */common.constants.SSO_TEAMS_ABBR={AFG:'Afghanistan',AUS:'Australia',BAN:'Bangladesh',ENG:'England',IND:'India',IRE:'Ireland',NZ:'New Zealand',PAK:'Pakistan',SA:'South Africa',SL:'Sri Lanka',WI:'West Indies',ZIM:'Zimbabwe',ARG:'Argentina',AUT:'Austria',BAH:'Bahamas',BRN:'Bahrain',BEL:'Belgium',BIZ:'Belize',BER:'Bermuda',BHU:'Bhutan',BOT:'Botswana',BRA:'Brazil',BUL:'Bulgaria',CMR:'Cameroon',CAN:'Canada',CAY:'Cayman Islands',CHI:'Chile',CHN:'China',COK:'Cook Islands',CRC:'Costa Rica',CRO:'Croatia',CYP:'Cyprus',CZE:'Czech Republic',DEN:'Denmark',EST:'Estonia',FKI:'Falkland Islands',FIJ:'Fiji',FIN:'Finland',FRA:'France',GAM:'Gambia',GER:'Germany',GHA:'Ghana',GIB:'Gibraltar',GRE:'Greece',GSY:'Guernsey',HK:'Hong Kong',HUN:'Hungary',INA:'Indonesia',IRI:'Iran',IOM:'Isle of Man',ISR:'Israel',ITA:'Italy',JPN:'Japan',JSY:'Jersey',KEN:'Kenya',KUW:'Kuwait',LES:'Lesotho',LUX:'Luxembourg',MAW:'Malawi',MAS:'Malaysia',MDV:'Maldives',MLI:'Mali',MLT:'Malta',MEX:'Mexico',MOR:'Morocco',MOZ:'Mozambique',MYA:'Myanmar',NAM:'Namibia',NEP:'Nepal',NED:'Netherlands',NGR:'Nigeria',NOR:'Norway',OMA:'Oman',PAN:'Panama',PNG:'Papua New Guinea',PER:'Peru',PHI:'Philippines',POR:'Portugal',QAT:'Qatar',ROM:'Romania',RUS:'Russia',RWA:'Rwanda',STH:'Saint Helena',SAM:'Samoa',SDA:'Saudi Arabia',SCO:'Scotland',SER:'Serbia',SEY:'Seychelles',SLE:'Sierra Leone',SIN:'Singapore',SLO:'Slovenia',SK:'South Korea',ESP:'Spain',SUR:'Suriname',SWZ:'Swaziland',SWE:'Sweden',TAN:'Tanzania',THA:'Thailand',TUR:'Turkey',TCI:'Turks and Caicos Islands',UAE:'UAE',UGA:'Uganda',VAN:'Vanuatu',ZAM:'Zambia'};})(PULSE.app.common);(function(common){'use strict';/* SSO CONSTANTS - team constants */common.constants.SSO_TEAMS=[{id:'AFG',name:'Afghanistan',abbr:'AFG',teams:{women:0,men:17}},{id:'AUS',name:'Australia',abbr:'AUS',teams:{women:30,men:15}},{id:'BAN',name:'Bangladesh',abbr:'BAN',teams:{women:170,men:22}},{id:'ENG',name:'England',abbr:'ENG',teams:{women:28,men:11}},{id:'IND',name:'India',abbr:'IND',teams:{women:31,men:14}},{id:'IRE',name:'Ireland',abbr:'IRE',teams:{women:162,men:12}},{id:'NZ',name:'New Zealand',abbr:'NZ',teams:{women:26,men:16}},{id:'PAK',name:'Pakistan',abbr:'PAK',teams:{women:29,men:20}},{id:'SA',name:'South Africa',abbr:'SA',teams:{women:25,men:19}},{id:'SL',name:'Sri Lanka',abbr:'SL',teams:{women:24,men:13}},{id:'WI',name:'West Indies',abbr:'WI',teams:{women:27,men:21}},{id:'ZIM',name:'Zimbabwe',abbr:'ZIM',teams:{women:0,men:18}},{id:'ARG',name:'Argentina',abbr:'ARG',teams:{women:0,men:70}},{id:'AUT',name:'Austria',abbr:'AUT',teams:{women:0,men:71}},{id:'BAH',name:'Bahamas',abbr:'BAH',teams:{women:0,men:72}},{id:'BRN',name:'Bahrain',abbr:'BRN',teams:{women:0,men:78}},{id:'BEL',name:'Belgium',abbr:'BEL',teams:{women:0,men:73}},{id:'BIZ',name:'Belize',abbr:'BIZ',teams:{women:0,men:75}},{id:'BER',name:'Bermuda',abbr:'BER',teams:{women:0,men:65}},{id:'BHU',name:'Bhutan',abbr:'BHU',teams:{women:0,men:74}},{id:'BOT',name:'Botswana',abbr:'BOT',teams:{women:0,men:76}},{id:'BRA',name:'Brazil',abbr:'BRA',teams:{women:0,men:77}},{id:'BUL',name:'Bulgaria',abbr:'BUL',teams:{women:0,men:80}},{id:'CMR',name:'Cameroon',abbr:'CMR',teams:{women:0,men:84}},{id:'CAN',name:'Canada',abbr:'CAN',teams:{women:167,men:66}},{id:'CAY',name:'Cayman Islands',abbr:'CAY',teams:{women:0,men:81}},{id:'CHI',name:'Chile',abbr:'CHI',teams:{women:0,men:82}},{id:'CHN',name:'China',abbr:'CHN',teams:{women:431,men:83}},{id:'COK',name:'Cook Islands',abbr:'COK',teams:{women:0,men:85}},{id:'CRC',name:'Costa Rica',abbr:'CRC',teams:{women:0,men:86}},{id:'CRO',name:'Croatia',abbr:'CRO',teams:{women:0,men:87}},{id:'CYP',name:'Cyprus',abbr:'CYP',teams:{women:0,men:89}},{id:'CZE',name:'Czech Republic',abbr:'CZE',teams:{women:0,men:90}},{id:'DEN',name:'Denmark',abbr:'DEN',teams:{women:0,men:91}},{id:'EST',name:'Estonia',abbr:'EST',teams:{women:0,men:92}},{id:'FKI',name:'Falkland Islands',abbr:'FKI',teams:{women:0,men:95}},{id:'FIJ',name:'Fiji',abbr:'FIJ',teams:{women:0,men:93}},{id:'FIN',name:'Finland',abbr:'FIN',teams:{women:0,men:94}},{id:'FRA',name:'France',abbr:'FRA',teams:{women:0,men:96}},{id:'GAM',name:'Gambia',abbr:'GAM',teams:{women:0,men:97}},{id:'GER',name:'Germany',abbr:'GER',teams:{women:0,men:98}},{id:'GHA',name:'Ghana',abbr:'GHA',teams:{women:0,men:99}},{id:'GIB',name:'Gibraltar',abbr:'GIB',teams:{women:0,men:100}},{id:'GRE',name:'Greece',abbr:'GRE',teams:{women:0,men:101}},{id:'GSY',name:'Guernsey',abbr:'GSY',teams:{women:0,men:102}},{id:'HK',name:'Hong Kong',abbr:'HK',teams:{women:450,men:103}},{id:'HUN',name:'Hungary',abbr:'HUN',teams:{women:0,men:104}},{id:'INA',name:'Indonesia',abbr:'INA',teams:{women:0,men:105}},{id:'IRI',name:'Iran',abbr:'IRI',teams:{women:0,men:107}},{id:'IOM',name:'Isle of Man',abbr:'IOM',teams:{women:0,men:106}},{id:'ISR',name:'Israel',abbr:'ISR',teams:{women:0,men:108}},{id:'ITA',name:'Italy',abbr:'ITA',teams:{women:0,men:109}},{id:'JPN',name:'Japan',abbr:'JPN',teams:{women:163,men:110}},{id:'JSY',name:'Jersey',abbr:'JSY',teams:{women:0,men:111}},{id:'KEN',name:'Kenya',abbr:'KEN',teams:{women:613,men:67}},{id:'KUW',name:'Kuwait',abbr:'KUW',teams:{women:0,men:112}},{id:'LES',name:'Lesotho',abbr:'LES',teams:{women:0,men:113}},{id:'LUX',name:'Luxembourg',abbr:'LUX',teams:{women:0,men:114}},{id:'MAW',name:'Malawi',abbr:'MAW',teams:{women:0,men:116}},{id:'MAS',name:'Malaysia',abbr:'MAS',teams:{women:656,men:115}},{id:'MDV',name:'Maldives',abbr:'MDV',teams:{women:0,men:117}},{id:'MLI',name:'Mali',abbr:'MLI',teams:{women:0,men:119}},{id:'MLT',name:'Malta',abbr:'MLT',teams:{women:0,men:120}},{id:'MEX',name:'Mexico',abbr:'MEX',teams:{women:0,men:118}},{id:'MOR',name:'Morocco',abbr:'MOR',teams:{women:0,men:121}},{id:'MOZ',name:'Mozambique',abbr:'MOZ',teams:{women:0,men:122}},{id:'MYA',name:'Myanmar',abbr:'MYA',teams:{women:0,men:123}},{id:'NAM',name:'Namibia',abbr:'NAM',teams:{women:610,men:124}},{id:'NEP',name:'Nepal',abbr:'NEP',teams:{women:451,men:125}},{id:'NED',name:'Netherlands',abbr:'NED',teams:{women:164,men:68}},{id:'NGR',name:'Nigeria',abbr:'NGR',teams:{women:0,men:126}},{id:'NOR',name:'Norway',abbr:'NOR',teams:{women:0,men:127}},{id:'OMA',name:'Oman',abbr:'OMA',teams:{women:0,men:128}},{id:'PAN',name:'Panama',abbr:'PAN',teams:{women:0,men:130}},{id:'PNG',name:'Papua New Guinea',abbr:'PNG',teams:{women:430,men:133}},{id:'PER',name:'Peru',abbr:'PER',teams:{women:0,men:131}},{id:'PHI',name:'Philippines',abbr:'PHI',teams:{women:0,men:132}},{id:'POR',name:'Portugal',abbr:'POR',teams:{women:0,men:134}},{id:'QAT',name:'Qatar',abbr:'QAT',teams:{women:0,men:135}},{id:'ROM',name:'Romania',abbr:'ROM',teams:{women:0,men:535}},{id:'RUS',name:'Russia',abbr:'RUS',teams:{women:0,men:136}},{id:'RWA',name:'Rwanda',abbr:'RWA',teams:{women:0,men:137}},{id:'STH',name:'Saint Helena',abbr:'STH',teams:{women:0,men:147}},{id:'SAM',name:'Samoa',abbr:'SAM',teams:{women:449,men:138}},{id:'SDA',name:'Saudi Arabia',abbr:'SDA',teams:{women:0,men:139}},{id:'SCO',name:'Scotland',abbr:'SCO',teams:{women:432,men:69}},{id:'SER',name:'Serbia',abbr:'SER',teams:{women:0,men:536}},{id:'SEY',name:'Seychelles',abbr:'SEY',teams:{women:0,men:141}},{id:'SLE',name:'Sierra Leone',abbr:'SLE',teams:{women:0,men:144}},{id:'SIN',name:'Singapore',abbr:'SIN',teams:{women:0,men:142}},{id:'SLO',name:'Slovenia',abbr:'SLO',teams:{women:0,men:145}},{id:'SK',name:'South Korea',abbr:'SK',teams:{women:0,men:143}},{id:'ESP',name:'Spain',abbr:'ESP',teams:{women:0,men:146}},{id:'SUR',name:'Suriname',abbr:'SUR',teams:{women:0,men:148}},{id:'SWZ',name:'Swaziland',abbr:'SWZ',teams:{women:0,men:149}},{id:'SWE',name:'Sweden',abbr:'SWE',teams:{women:0,men:140}},{id:'TAN',name:'Tanzania',abbr:'TAN',teams:{women:612,men:150}},{id:'THA',name:'Thailand',abbr:'THA',teams:{women:166,men:153}},{id:'TUR',name:'Turkey',abbr:'TUR',teams:{women:0,men:154}},{id:'TCI',name:'Turks and Caicos Islands',abbr:'TCI',teams:{women:0,men:151}},{id:'UAE',name:'UAE',abbr:'UAE',teams:{women:615,men:155}},{id:'UGA',name:'Uganda',abbr:'UGA',teams:{women:611,men:156}},{id:'VAN',name:'Vanuatu',abbr:'VAN',teams:{women:573,men:158}},{id:'ZAM',name:'Zambia',abbr:'ZAM',teams:{women:0,men:159}}];common.constants.CWC_TEAM_COLOURS={AFG:'#c7000d',AFG_SECONDARY:'#2778db',AUS:'#ffd500',AUS_SECONDARY:'#0b6f20',BAN:'#14c773',BAN_SECONDARY:'#ed282f',ENG:'#ff1e50',ENG_SECONDARY:'#04064d',IND:'#ff5500',IND_SECONDARY:'#25aaf7',NZ:'#141414',//NZ colours switched around for run chase chart MC
NZ_SECONDARY:'#e8ebed',PAK:'#72d016',PAK_SECONDARY:'#008713',SA:'#f5ab00',SA_SECONDARY:'#17572d',SL:'#1b2e96',SL_SECONDARY:'#161bab',WI:'#bf0040',WI_SECONDARY:'#7d1041'};})(PULSE.app.common);(function(app,core,common){'use strict';var EVENT_TARGET_SELECTOR='body';var TEMPLATE='carousel-list';/**
   * Retrieves a list of content based on the references and tag parameters on the widget
   *
   * @constructor
   * @param {HTMLElement} container the container of the widget
   * @param {Object} config the configuration of the wigdet
   */app.ContentListLoader=function(container,config){var _self=this;_self.config=config;_self.container=container;/**
     * Reference to the widget title
     * @type {String}
     */_self.title=_self.container.getAttribute('data-title')||'';/**
     * Reference to the link value on the widget
     * @type {String}
     */_self.linkTo=_self.container.getAttribute('data-link-to')||'';/**
     * Reference to the tag
     * @type {String}
     */_self.tags=_self.container.getAttribute('data-tags')||'';_self.references=_self.container.getAttribute('data-references')||'';/**
     * Reference to the content type
     * @type {String}
     */_self.contentType=_self.container.getAttribute('data-content-type')||'';_self.template=TEMPLATE;/**
     * HTMLElement used for custom events
     * @type {HTMLElement}
     */_self.eventTarget=document.querySelector(EVENT_TARGET_SELECTOR);_self.getContent();};/**
   * Makes a request to retrieve content based on the references and tags provided in the widget
   */app.ContentListLoader.prototype.getContent=function(){var _self=this;/**
     * stores query filters
     */_self.filters={tagNames:_self.tags};var type=(_self.contentType||'').toLowerCase();var url=common.createContentPath(type,_self.filters);var requestConfig={url:url,method:'GET',callback:_self.render,forceCallback:true,target:_self};core.data.manager.add(requestConfig);};/**
   * Callback from the getContent function
   *
   * @param  {Object} data     Response data
   */app.ContentListLoader.prototype.render=function(data){var _self=this;if(data&&data.content&&data.content.length>0){var model={};model.config={widgetTitle:_self.title,linkTo:_self.linkTo,linkToLabel:'View All'};model.items=data.content.map(function(videoItem){return app.common.content.getContentModel(videoItem,{thumbnail:'Thumbnail - Desktop',thumbnailMobile:'Thumbnail - Mobile',thumbnailMobileRetina:'Thumbnail - Mobile (Retina)'});});_self.container.innerHTML=app.templating.render(model,_self.template);app.widgetInitialiser.addMultipleWidgetsByName('content-slider',common.ContentList,_self.container);app.widgetInitialiser.addMultipleWidgetsByName('lazy-load-images',app.LazyLoad,_self.container);// trigger event to append more videos to the modal video player list
var contentList=_self.container.querySelectorAll('[data-ui-modal]');common.event.dispatch(app.common.event.MODAL.LOAD_MORE_VIDEOS,{list:contentList},_self.eventTarget);}};})(PULSE.app,PULSE.core,PULSE.app.common);(function(app,common,core){/**
   * @typedef {Object} SliderConfig configuration for the LFC slider element
   * @property {HTMLElement} container the container of the slider element
   * @property {Integer} itemsPerPage how many li elements should be incremented per slide
   * @property {HTMLElement} scrollContainer the element that will be scrolled in the slider
   * @property {NodeList} sliderElements list of slide elements ( li's )
   * @property {HTMLElement} nextButton the next button
   * @property {HTMLElement} prevButton the previous button
   */ /**
   * Content Slider, creates slider interaction from a list, displays next and
   * previous buttons and a bottom pagination indicator
   * @param {SliderConfig} config the slider configuration
   * @constructor
   */common.ContentSlider=function(config){var _self=this;_self.config=setDefaults(config);_self.initSlider();};/**
   * Initialises the Content Slider
   */common.ContentSlider.prototype.initSlider=function(){var _self=this;_self.element=_self.config.container;_self.slideContainer=_self.config.scrollContainer;_self.slideWidth=_self.slideContainer.clientWidth;_self.slideItems=_self.config.sliderElements;_self.itemsPerPage=parseInt(_self.config.itemsPerPage);_self.slideNum=Math.ceil(_self.slideItems.length/_self.itemsPerPage);_self.slidePos=0;_self.activeSlide=0;_self.nextBtn=_self.config.nextButton;_self.prevBtn=_self.config.prevButton;_self.paginatorContainer=_self.config.paginatorContainer;_self.fullScroll=true;_self.itemsLeft=_self.slideItems.length;if(_self.slideNum>1){_self.slideElementWidth=getSlideElementWidth(_self.slideItems,_self.itemsPerPage);_self.updateControls();}else{_self.hidePagerControls();_self.setAllActiveItems();}_self.resetSlider();_self.setListeners();if(_self.config.scrollToItem){_self.scrollToElement(_self.config.scrollToItem);}};/**
   * Sets the listeners for the Content Slider
   */common.ContentSlider.prototype.setListeners=function(){var _self=this;if(_self.nextBtn){_self.nextBtn.addEventListener('click',function(){_self.scrollNext();});}if(_self.prevBtn){_self.prevBtn.addEventListener('click',function(){_self.scrollPrev();});}core.event.windowResize.add({method:_self.resetSlider.bind(_self)});if(_self.paginatorContainer){_self.renderPaginator();}};/**
   * Render paginator
   */common.ContentSlider.prototype.renderPaginator=function(){var _self=this;if(_self.slideNum>1){// render paginator
core.style.removeClass(_self.paginatorContainer,'u-hide');_self.paginatorContainer.innerHTML=app.common.templating.render({slideNum:_self.slideNum},'paginator');_self.pagerContainers=_self.element.getElementsByClassName('js-pager-container');_self.pagers=_self.element.getElementsByClassName('js-pager');// make pager 1 active on intialisation
core.style.addClass(_self.pagers[0],'is-active');Array.prototype.forEach.call(_self.pagerContainers,function(pagerBtn,index){pagerBtn.addEventListener('click',function(evt){_self.activeSlide=index;_self.slideTo(_self.activeSlide);evt.stopPropagation();});});core.style.removeClass(_self.prevBtn,'u-hide');core.style.removeClass(_self.nextBtn,'u-hide');}else{_self.hidePagerControls();}};/**
   * Hides the pager controls on the carousel
   */common.ContentSlider.prototype.hidePagerControls=function(){var _self=this;if(_self.prevBtn){core.style.addClass(_self.prevBtn,'u-hide');}if(_self.nextBtn){core.style.addClass(_self.nextBtn,'u-hide');}if(_self.paginatorContainer){core.style.addClass(_self.paginatorContainer,'u-hide');}};/**
   * Sets the active class on all carousel slider elements
   */common.ContentSlider.prototype.setAllActiveItems=function(){var _self=this;for(var item=0;item<_self.slideItems.length;item++){core.style.addClass(_self.slideItems[item],'is-active');}};/**
   * Paginates once to the right
   */common.ContentSlider.prototype.scrollNext=function(){var _self=this;_self.activeSlide++;_self.slideTo(_self.activeSlide);_self.updateControls();_self.setActiveItems();};/**
   * If the Content Slider is paginating this will set amount to offset interval
   * @returns {String/Boolean} the value to offset in px or false
   */common.ContentSlider.prototype.isPaginating=function(){var _self=this;return _self.pagerItemsContainer?_self.pagerItemsContainer.offsetParent:false;};/**
   * Paginates once to the left
   */common.ContentSlider.prototype.scrollPrev=function(){var _self=this;_self.activeSlide--;_self.slideTo(_self.activeSlide);_self.updateControls();_self.setActiveItems();};/**
   * When pager is clicked jump the the slide that matches that buttons index
   * @param {Number} slideIndex - the index of the slide to slide to
   */common.ContentSlider.prototype.slideTo=function(slideIndex){var _self=this;_self.getItemsLeft();_self.scrollSlider();_self.activeSlide=slideIndex;_self.updateControls();_self.setActiveItems();};/**
   * Getting the amount of items left
   * so we can set whether a full scroll is needed
   * or if a scroll of the remainder is required
   */common.ContentSlider.prototype.getItemsLeft=function(){var _self=this;_self.itemsLeft=_self.slideItems.length-_self.activeSlide*_self.itemsPerPage;if(_self.itemsLeft<_self.itemsPerPage){_self.fullScroll=false;}else{_self.fullScroll=true;}};/**
   * Uses css left value to scroll above tablet and Element.scrollTo below tablet due to mobile overflow behaviour
   */common.ContentSlider.prototype.applyCorrectScrollType=function(){var _self=this;if(document.body.clientWidth>=app.measurements.tablet){_self.slideContainer.style.transform="translateX(-".concat(_self.slidePos,"px)");}else{_self.slideContainer.scrollTo(_self.slidePos,0);}};/**
   * Checks if a full scroll is needed and then scrolls the slider
   */common.ContentSlider.prototype.scrollSlider=function(){var _self=this;if(_self.config.enableCrossfade!==true){if(_self.fullScroll){_self.slidePos=_self.slideElementWidth*_self.activeSlide;_self.applyCorrectScrollType();}else{_self.slidePos=_self.slideElementWidth*_self.activeSlide-_self.slideItems[_self.slideItems.length-1].clientWidth*(_self.itemsPerPage-_self.itemsLeft);_self.applyCorrectScrollType();}}};/**
   * Update the carousel controls if the slider is at the beginning or the end to deactivate a button
   */common.ContentSlider.prototype.updateControls=function(){var _self=this;//if there are no more slides after this hide next button
if(_self.activeSlide>=_self.slideNum-1&&_self.nextBtn){core.style.addClass(_self.nextBtn,'faded');//otherwise show this button
}else if(_self.nextBtn&&core.style.hasClass(_self.nextBtn,'faded')){core.style.removeClass(_self.nextBtn,'faded');}if(_self.activeSlide===0&&_self.prevBtn){core.style.addClass(_self.prevBtn,'faded');}else if(_self.prevBtn&&core.style.hasClass(_self.prevBtn,'faded')){core.style.removeClass(_self.prevBtn,'faded');}if(_self.paginatorContainer&&_self.pagers){//update the active pager button to match the activeSlide number
for(var i=0;i<_self.pagers.length;i++){if(i===_self.activeSlide){core.style.addClass(_self.pagers[i],'is-active');}else{core.style.removeClass(_self.pagers[i],'is-active');}}}};/**
   * Sets the four items currently active in slider so they're shown with full opacity
   */common.ContentSlider.prototype.setActiveItems=function(){var _self=this;var firstItemIndex;for(var i=0;i<_self.slideItems.length;i++){core.style.removeClass(_self.slideItems[i],'is-active');}if(_self.fullScroll){firstItemIndex=_self.activeSlide*_self.itemsPerPage;}else{firstItemIndex=_self.activeSlide*_self.itemsPerPage-(_self.itemsPerPage-_self.itemsLeft);}for(i=0;i<_self.itemsPerPage;i++){core.style.addClass(_self.slideItems[firstItemIndex],'is-active');firstItemIndex++;}};/**
   * Check if the given element is visible within the scroll view of the carousel slider
   * @param  {HTMLElement} element The element to test if it is visible within the scroll container
   * @param  {HTMLElement} wrapper The scroll container to set the bounding restrictions for which elements are tested against
   * @return {Boolean}         Returns true if the passed in element is visible inside the wrapper
   */common.ContentSlider.prototype.isVisibleInSlideView=function(element,wrapper){var rect=element.getBoundingClientRect();var containerRect=wrapper.getBoundingClientRect();var topInView=rect.top>=containerRect.top;var bottomInView=rect.bottom<=containerRect.bottom;var leftInView=rect.left>=containerRect.left;var rightInView=rect.right<=containerRect.right;return topInView&&bottomInView&&leftInView&&rightInView;};/**
   * Iterates through slide container elements, counts how many are visible then sets the page count based on this
   */common.ContentSlider.prototype.resetSlider=function(){var _self=this;if(window.innerWidth>app.measurements.tablet){var sliderCount=0;Array.prototype.forEach.call(_self.slideContainer.children,function(item){if(_self.isVisibleInSlideView(item,_self.slideContainer)){sliderCount++;}});if(_self.config.enableCrossfade!==true){_self.itemsPerPage=sliderCount;}}_self.slidePos=0;_self.slideElementWidth=getSlideElementWidth(_self.slideItems,_self.itemsPerPage);_self.slideNum=Math.ceil(_self.slideItems.length/_self.itemsPerPage);_self.activeSlide=0;_self.renderPaginator();_self.slideTo(_self.activeSlide);};/**
   * Scrolls to an element via its index
   * @param  {Number} elementIndex   element indes to scroll to
   */common.ContentSlider.prototype.scrollToElement=function(elementIndex){var _self=this;_self.activeSlide=Math.floor(elementIndex/_self.itemsPerPage);_self.slideTo(_self.activeSlide);};/**
   * Gets the Slide container width, which is needed for scrolling
   * @param  {NodeList} slideItems   Nodelist of elements in the carousel
   * @param  {Number} itemsPerPage Number of slide elements to show per slide
   * @return {Number}              Returns the width of itemsPerPage * slide items
   */var getSlideElementWidth=function getSlideElementWidth(slideItems,itemsPerPage){var width=0;if(slideItems.length===0){return width;}for(var slideIndex=0;slideIndex!==itemsPerPage;slideIndex++){width+=slideItems[slideIndex].clientWidth;}return width;};/**
   * Sets the default configuration for the content slider
   * @param  {Object} config values to override the default configuration
   * @return {Object} Returns the confuration ready for the content slider
   */var setDefaults=function setDefaults(config){if(!config.itemsPerPage){config.itemsPerPage=config.container.getAttribute('data-items-per-page');}if(!config.scrollContainer){config.scrollContainer=config.container.querySelector('.js-content-slider-content');}if(!config.sliderElements){config.sliderElements=config.container.querySelectorAll('.js-thumb');}if(!config.nextButton){config.nextButton=config.container.querySelector('.js-slide-next');}if(!config.prevButton){config.prevButton=config.container.querySelector('.js-slide-prev');}if(!config.paginatorContainer){config.paginatorContainer=config.container.querySelector('.js-paginator');}return config;};})(PULSE.app,PULSE.app.common,PULSE.core);(function(app,core){/**
   *
   * @param {Object} element html element that defines the event actions and context
   * @param {String} [contentType] string representing the content type that the action occured on e.g. 'TEXT'
   * @param {String} [contentId] ID of the content object that the action occured on
   * @param {String} [action] string representing the action triggered on the content e.g. 'VIEW'
   * @constructor
   */app.ContentTracker=function(element,contentType,contentId,action){var _self=this;_self.element=element;_self.event={contentType:contentType||_self.element.getAttribute('data-tracker-type'),contentId:contentId||_self.element.getAttribute('data-tracker-id'),action:action||_self.element.getAttribute('data-tracker-action')};_self.dataStatus=_self.checkContentStatus(_self.element,_self.element.getAttribute('data-tracker-status'));_self.error=_self.checkErrors();_self.makeRequest();};/**
   * Checks whether the content being tracked has already been tracked or not
   * @param  {DOMElement} content HTML element container to track
   * @param  {String} status HTML data attribute value that is set either to true or false
   * @return {Boolean} Returns whether or not the data tracker should go ahead or not
   */app.ContentTracker.prototype.checkContentStatus=function(content,status){var _self=this;if(status&&status==='true'){return false;}_self.element.setAttribute('data-tracker-status','true');return true;};/**
   * Checks for errors on the current data-tracking event
   * @return {String} Error string
   */app.ContentTracker.prototype.checkErrors=function(){var _self=this;var error='';if(!_self.event.contentType){error+="The content event must include a contentType or 'data-tracker-type' on the element/n";}if(!_self.event.contentId){error+="The content event must include a contentId or 'data-tracker-id' on the element/n";}if(!_self.event.action){error+="The content event must include an action or 'data-tracker-action' on the element/n";}return error;};/**
   * Makes the request to send tracking data about the element
   * @return {String} Error string
   */app.ContentTracker.prototype.makeRequest=function(){var _self=this;if(_self.error.length>0){_self.element.setAttribute('data-tracker-status','false');return _self.error;}else if(_self.dataStatus){var requestConfig={url:app.environment.trackingApi,headers:[{label:'account',value:app.account}],data:_self.event,method:'POST',callback:_self.eventSent,forceCallback:true,target:this};core.data.manager.add(requestConfig);}};/**
   * Runs after the event tracker is sent
   * @param  {Object} data   Data returned from the request
   * @param  {Object} config Config related data about the request
   */app.ContentTracker.prototype.eventSent=function(data,config){var _self=this;// use data or config from data.manager response
};/**
   * create the event tracker instances
   */var widgets=document.querySelectorAll('[data-tracker-action]');for(var widget=0;widget<widgets.length;widget++){new app.ContentTracker(widgets[widget]);}})(PULSE.app,PULSE.core);/*globals PULSE, PULSE.app, PULSE.ui */(function(app,core,common){/* PRIVATE METHODS */ /**
   * @namespace ContentUpdater
   */ /**
   * Sets default config
   * @param {object} config - config for the request which will overwrite the defaults
   */var setDefaults=function setDefaults(config){config.contentType=config.contentType||'undefined';config.page=config.page||0;config.pageSize=config.pageSize||5;config.references=config.references||[];config.interval=config.interval||30000;// 30sec
config.callbacks=[{callback:config.callback,context:config.context||null}]||[];return config;};/**
   * Initialises a new request via the core.data.manager
   * @param {ContentUpdater} _self - ContentUpdater
   * @param {object} config - config for the request which will overwrite the defaults
   * @param {string} updaterId - name of the updater
   */var initNewUpdater=function initNewUpdater(_self,config,updaterId){config=setDefaults(config||{});var url=common.createContentPath(config.contentType,{page:config.page,pageSize:config.pageSize,references:config.references});var apiOptions={url:url,callback:function callback(data){updateCallback(data,config);},target:_self,interval:config.interval,forceCallback:true};_self.updaters[updaterId]={config:config,request:core.data.manager.add(apiOptions)};};/**
   * Callback function from API request
   * @param {object} data - data coming from API
   * @param {object} config - config of the content updater
   */var updateCallback=function updateCallback(data,config){config.callbacks.forEach(function(cb){if(typeof cb.callback==='function'){cb.callback.bind(cb.context)(data);}});};/**
  * ContentUpdater
   * Common module to refresh content data
  */var ContentUpdater=function ContentUpdater(){var _self=this;_self.updaters={};};/**
   * Form
   * binds form with all event handlers
   * @param {string} updaterId - set an ID for a content updater so multiple scripts can reference to the same updater
   * @param {object} config - config config config config
   */ContentUpdater.prototype.subscribe=function(updaterId,config){var _self=this;if(updaterId&&_self.updaters[updaterId]&&config){_self.updaters[updaterId].config.callbacks.push({callback:config.callback,context:config.context});}else{initNewUpdater(_self,config,updaterId||Date.now());}};common.ContentUpdater=new ContentUpdater();})(PULSE.app,PULSE.core,PULSE.app.common);(function(common){/*
   * define the events that will be fired at various points on the body element
   * other widgets can interact with the player through these events
   * Must be defined here as is acessed by multiple separate widgets
   */common.event=common.event||{};/**
   * Events strictly to do with the brightcove video player
   * @type {VideoEvent}
   */common.event.VIDEO={// event fired when a new video starts playing
START:'video/start',// event fired when a video ends playing
END:'video/end',// event fired when the KDP is ready to do work !
READY:'player/ready',// incoming event to start the current video playing
PLAY:'player/play-video',// incoming event to pause the current video
PAUSE:'player/pause-video',// fired when the full screen close has finished
CLOSE_FULL_SCREEN:'player/full-screen-closed'};/**
   * Events strictly todo with the video playlist
   * @type {PlaylistEvent}
   */common.event.PLAYLIST={// incoming event that the player will listen for and update the currently playing video
SET_MEDIA:'playlist/set-media',// change the breadcrumb (playlist) title
SET_TITLE:'playlist/set-title'};/**
   * Events strictly todo with the video modal
   * @type {ModalEvent}
   */common.event.MODAL={// incoming event that the modal will listen for and update the currently playing video
LOAD_MORE_VIDEOS:'modal/load-videos',OPEN_MOBILE:'modal/open-mobile'};/**
   * Events strictly todo with the filters
   * @type {ModalEvent}
   */common.event.FILTER={// reset the filter options
RESET:'filter/reset'};/**
   * Events strictly todo with the intersection observer
   * @type {ModalEvent}
   */common.event.INTERSECTION={// incoming event that element is activated within viewport window
ACTIVATE:'event/activate'};/**
   * Events strictly todo with the bracket challenge
   * @type {LocalStorageEvent}
   */common.event.BRACKET_CHALLENGE={// incoming event that the standings will listen for and update based on new localStorage items
STANDINGS_UPDATE:'bracket/update',FINAL_FIXTURE_UPDATE:'bracket/final_update',SEMI_FINALS:'bracket/semi-finals',FINALIST:'bracket/finalist'};/**
   * Events strictly todo with the match notifications
   * @type {NotificationsEvent}
   */common.event.NOTIFICATIONS={// incoming event that the match centre will listen for and send the appropriate notification
SEND_PERMISSION:'notifications/permission'};/**
   * Events strictly to do with the forms
   * @type {FormEvent}
   */common.event.FORM={FORM_SUBMITTED:'form/submitted'};})(PULSE.app.common);/*globals PULSE, PULSE.app*/(function(app,common){/**
   * The event sidebar - used to surface content for tournament
   * @param {*} container - the sidebar container
   */common.EventSidebar=function(container){var _self=this;_self.container=container;_self.teamId=_self.container.getAttribute('data-team-id');// First we init the tournament filter dropdown which had children populated server-side
_self.tournamentDropdownElem=_self.container.querySelector('.js-tournament-dropdown');if(_self.tournamentDropdownElem){new app.common.filterDropDown(_self,_self.tournamentDropdownElem);}// Now we init the team filter dropdown list which is populated using the data-filter param on the parent
_self.teamDropdownElem=_self.container.querySelector('.js-team-dropdown');if(_self.teamDropdownElem){_self.filter=common.widget.getArrayAttribute('data-filter',_self.teamDropdownElem);}if(_self.filter&&_self.teamDropdownElem){_self.teamDropdown=new common.filterDropDown(_self,_self.teamDropdownElem);}// If user is on desktop, set the height of the sidebar list
if(window.innerWidth>app.measurements.tablet){_self.setListHeight();}// Update the UI to show the selected team in the team dropdown menu
if(_self.teamDropdown&&_self.teamId){_self.setActiveTeam();}};/**
   * Updates the tournament dropdown list to make sure the sidebar fits the screen height once the header and other sidebar elements' heights have been deducted.
   */common.EventSidebar.prototype.setListHeight=function(){var _self=this;// Grab the elements to calculate heights
var tournamentListEl=_self.container.querySelector('.js-tournament-list');var navContainer=document.querySelector('.js-global-navigation');var titleEl=_self.container.querySelector('.js-tournament-title');var teamDropdownEl=_self.container.querySelector('.js-team-dropdown');// Get the heights of the above elements
var titleHeight=getElementFullHeight(titleEl);var navHeight=getElementFullHeight(navContainer);var teamDropdownHeight=getElementFullHeight(teamDropdownEl);// The height of the viewport
var windowHeight=window.innerHeight;// Calculate what to set the sidebar height to so it fits full height
tournamentListEl.style.maxHeight="".concat(windowHeight-navHeight-titleHeight-teamDropdownHeight,"px");};/**
   * Updates the team dropdown filter box to show the currently selected team
   */common.EventSidebar.prototype.setActiveTeam=function(){var _self=this;var activeTeamEl=_self.teamDropdownElem.querySelector("[data-option=\"".concat(_self.teamId,"\"]"));var activeTeamName=activeTeamEl.textContent.trim();var currActiveEl=_self.teamDropdownElem.querySelector('.js-drop-down-current');currActiveEl.innerText=activeTeamName;};/**
   * Handles the behaviour of the dropdown menus once an option has been selected
   * @param {*} selection - the selected child of the dropdown menu
   */common.EventSidebar.prototype.update=function(selection){var slug;if(selection.type&&selection.type==='CRICKET_TEAM'){var currPath=window.location.pathname;// Remove the current team ID and name (ie /11/england ) if it's in the current path
currPath=currPath.replace(/\/\d+\/[\w\d-]+/,'');// If the user selects 'All teams' we need to send them to the right page
if(selection.key==='ALL'){slug="".concat(currPath);}else{// Grab the team name from the selection event and URLify
var teamName=app.common.urlify(selection.title.trim());slug="".concat(currPath,"/").concat(selection.key,"/").concat(teamName);}}else{slug=selection.key;}window.location="".concat(window.location.protocol,"//").concat(app.environment.domain).concat(slug);};/**
   * Returns the full height (including borders and margin) in PX of a particular element
   * @param {HTML Element} element - the element to be measured
   */var getElementFullHeight=function getElementFullHeight(element){// If the element doesn't exist, return 0 height
if(!element){return 0;}var elementStyles=window.getComputedStyle(element);var elHeight=parseInt(elementStyles.height);return elHeight;};})(PULSE.app,PULSE.app.common);/*globals PULSE, PULSE.app, PULSE.ui */(function(core,common){common.filterOptions=function(filters,references){var _self=this;_self.filters=filters;_self.updateReferences(references);};common.filterOptions.prototype.addRefsToFilters=function(){var _self=this;var refString='';if(typeof _self.references==='string'){refString+=_self.references;}else{for(var key in _self.references){// skip loop if the property is from prototype
if(!_self.references.hasOwnProperty(key)){continue;}if(refString.length>0){refString+=',';}refString+=key+':'+_self.references[key];}}_self.filters.references=refString;};common.filterOptions.prototype.updateFilters=function(newFilters){var _self=this;_self.filters=core.object.extend(_self.filters,newFilters);};common.filterOptions.prototype.updateReferences=function(newReferences){var _self=this;if(newReferences){if(!_self.references||typeof _self.references==='string'){_self.references=newReferences;}else{_self.references=core.object.extend(_self.references,newReferences);}_self.addRefsToFilters();}};common.filterOptions.prototype.removeReference=function(reference){var _self=this;if(_self.references){delete _self.references[reference];}_self.addRefsToFilters();};common.filterOptions.prototype.get=function(){var _self=this;return _self.filters;};})(PULSE.core,PULSE.app.common);/*globals PULSE, PULSE.app, PULSE.ui */(function(app,core,common){/* PRIVATE METHODS */ /**
   * @namespace common.slider.private
   */var setDefaults=function setDefaults(config){if(!config.element){console.warn('You must provide a wrap element for your form');return;}if(!config.callback){console.warn('You must provide a callback function');return;}config.form=config.form||config.element.querySelector('.js-form');config.formRedirect=config.formRedirect||config.form.getAttribute('data-redirect');config.button=config.button||config.form.querySelector('.js-button');config.inputAreas=config.inputAreas||config.form.querySelectorAll('.js-input-area');config.errorMessage=config.errorMessage||"There was an unexpected error. Please try again later.";config.errorSummary=config.errorSummary||config.element.querySelector('.js-error-summary');return config;};/**
  * Form
   * Common module to build a form
   * @param {object} element - widget element
  */common.Form=function(config){var _self=this;_self.config=setDefaults(config);_self.bindEvents();};/**
   * Form
   * binds form with all event handlers
   */common.Form.prototype.bindEvents=function(){var _self=this;_self.config.form.addEventListener('submit',function(e){e.preventDefault();if(_self.validateForm()){core.data.request(_self.config.form.action,'POST',_self.config.callback,_self,null,_self.data,null,null,false);}});};/**
   * Form
   * loops through all required input fields to see if they're valid
   */common.Form.prototype.validateForm=function(){_self=this;var isValid=true;var previousInputArea='';_self.data={};Array.prototype.map.call(_self.config.inputAreas,function(inputArea){var field=inputArea.querySelector('.js-input');var fieldValue=field.value;if(!field.validity.valid||field.name==='confirmNewPassword'&&fieldValue!==previousInputArea.value){core.style.addClass(inputArea,'has-error');isValid=false;}else{core.style.removeClass(inputArea,'error');}if(field.hasAttribute("data-param")){fieldValue=core.url.getParam(field.getAttribute("data-param"));}if(field.hasAttribute("data-user-profile")){fieldValue=new common.UserProfile().user[field.getAttribute("data-user-profile")];}previousInputArea=field;_self.data[field.name]=fieldValue;});return isValid;};/**
   * Form
   * Checks response and what course of action to take
   */common.Form.prototype.response=function(resp){if(resp){if(_self.config.formRedirect!==""){window.location=_self.config.formRedirect;}else{core.style.addClass(_self.config.element,'form--completed');}}else if(!resp){_self.config.errorSummary.style.display="block";}else{_self.config.errorSummary.innerHtml="<p>"+_self.config.errorMessage+"</p>";_self.config.errorSummary.style.display="block";}};})(PULSE.app,PULSE.core,PULSE.app.common);(function(common){common.A11Y_HELPER={};var inputTypes=['click','keypress'];var mouseDown=['mousedown','touchdown'];/**
   * Add listener
   *
   * @param {HTMLElement} element         html element to add listener to
   * @param {function}    callback        the call back function
   * @param {boolean}     acceptSpace     accept space (false on default)
   * @param {boolean}     useMousedown    use mouse down (false on default)
   * @return {function}   returns the callback function
   */common.A11Y_HELPER.addListener=function(element,callback,acceptSpace,useMousedown){// Sometimes when we don't want focus to occur on click we need to bind the mousedown event instead of click.
var typesToUse=useMousedown?inputTypes.filter(function(type){return type!=='click';}).concat(mouseDown):inputTypes;var clickEvtType=useMousedown?mouseDown:'click';var callbackWrapper=function callbackWrapper(evt){if(_hasInteracted(evt,acceptSpace,clickEvtType)){return callback(evt);}return evt;};for(var i=0;i<typesToUse.length;i++){element.addEventListener(typesToUse[i],callbackWrapper);}return callbackWrapper;};/**
   * Remove listener
   *
   * @param {HTMLElement} element         html element to add listener to
   * @param {function}    callback        the call back function
   * @param {boolean}     useMousedown    use mouse down (false on default)
   * @return {function}   returns the callback function
   */common.A11Y_HELPER.removeListener=function(element,callback,useMousedown){// Sometimes when we don't want focus to occur on click we need to bind the mousedown event instead of click.
var typesToUse=useMousedown?inputTypes.filter(function(type){return type!=='click';}).concat(mouseDown):inputTypes;for(var i=0;i<typesToUse.length;i++){element.removeEventListener(typesToUse[i],callback);}};/**
   * Has interacted
   *
   * @param {} evt                        the event
   * @param {function}    acceptSpace     accept space
   * @param {boolean}     clickEvtType    click event type
   * @return {boolean}   returns true or false
   */var _hasInteracted=function _hasInteracted(evt,acceptSpace,clickEvtType){var clickEvtInteracted=Array.isArray(clickEvtType)?clickEvtType.includes(evt.type):evt.type===clickEvtType;if(evt.which===common.constants.KEY_CODES.ENTER||clickEvtInteracted){return true;}if(acceptSpace&&evt.which===common.constants.KEY_CODES.SPACE){return true;}return false;};})(PULSE.app.common);(function(common,core){'use strict';var INPUT_TYPES=['click','keypress'];var MOUSE_DOWN=['mousedown','touchdown'];var NO_KEYBOARD_FOCUS='js-no-keyboard-focus';var KEY_CODES={ENTER:13,ESCAPE:27,ARROW_KEY_LEFT:37,ARROW_KEY_RIGHT:39,SPACE:32};common.addAriaClickListener=function(element,callback){var acceptSpace=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var useMousedown=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;var useCapture=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;// Sometimes when we don't want focus to occur on click we need to bind the mousedown event instead of click.
var typesToUse=useMousedown?INPUT_TYPES.filter(function(type){return type!=='click';}).concat(MOUSE_DOWN):INPUT_TYPES;var clickEvtType=useMousedown?MOUSE_DOWN:'click';var callbackWrapper=function callbackWrapper(evt){if(_hasInteracted(evt,acceptSpace,clickEvtType)){return callback(evt);}return null;};for(var i=0;i<typesToUse.length;i++){element.addEventListener(typesToUse[i],callbackWrapper,useCapture);}return callbackWrapper;};common.addMultiAriaClickListener=function(elements,callback){var acceptSpace=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var useMousedown=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;var elArray=Array.prototype.slice.call(elements);elArray.forEach(function(element){return common.addAriaClickListener(element,callback,acceptSpace,useMousedown);});};common.removeAriaClickListener=function(element,callback){var useMousedown=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;// Sometimes when we don't want focus to occur on click we need to bind the mousedown event instead of click.
var typesToUse=useMousedown?INPUT_TYPES.filter(function(type){return type!=='click';}).concat(MOUSE_DOWN):INPUT_TYPES;for(var i=0;i<typesToUse.length;i++){element.removeEventListener(typesToUse[i],callback);}};common.resetAriaMenuAttributes=function(element){element.setAttribute('aria-expanded','false');element.setAttribute('aria-hidden','true');};/**
   * Toggles any aria attributes for menu for the given element. Determines whether it needs to enable/disable the relevant
   * aria attributes.
   * @param {HTMLElement} element - The element to toggle the ARIA menu attributes on/off
   */common.toggleAriaMenuAttributes=function(element){var ariaExpanded=element.getAttribute('aria-expanded');var ariaHidden=element.getAttribute('aria-hidden');if(typeof ariaExpanded!=='undefined'){var toggledExpandedValue=ariaExpanded==='true'?'false':'true';element.setAttribute('aria-expanded',toggledExpandedValue);}if(typeof ariaHidden!=='undefined'){var toggledHiddenValue=ariaHidden==='true'?'false':'true';element.setAttribute('aria-hidden',toggledHiddenValue);}};/**
   * Toggles any anchor elements tabindex on the given element. This is to prevent anchors taking keyboard focus
   * when the element is not in view.
   * @param {HTMLElement} element - The element to toggle the tabindex on/off on
   * @param {String}      nodeType - Defaults to anchor tag but allows users to set tab index on non-anchor elements
   */common.toggleZIndex=function(element){var nodeType=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'a';var linkElements=[].slice.call(element.querySelectorAll(nodeType));for(var i=0;i<linkElements.length;i++){var hasDisabledZIndex=linkElements[i].getAttribute('tabindex')==='-1';// Should not manipulate z-index on elements that explicitly do not want keyboard focus
if(core.style.hasClass(linkElements[i],NO_KEYBOARD_FOCUS)){continue;}if(hasDisabledZIndex&&_elementHasDefaultTabindex(nodeType)){linkElements[i].removeAttribute('tabindex');}else if(hasDisabledZIndex){linkElements[i].setAttribute('tabindex','0');}else{linkElements[i].setAttribute('tabindex','-1');}}};var _elementHasDefaultTabindex=function _elementHasDefaultTabindex(nodeType){return nodeType==='a';};var _hasInteracted=function _hasInteracted(evt,acceptSpace,clickEvtType){var clickEvtInteracted=Array.isArray(clickEvtType)?clickEvtType.includes(evt.type):evt.type===clickEvtType;if(evt.which===KEY_CODES.ENTER||clickEvtInteracted){return true;}if(acceptSpace&&evt.which===KEY_CODES.SPACE){return true;}return false;};})(PULSE.app.common,PULSE.core);(function(app,common){common.content={};/**
   * Works out whether the content item is tagged with the given tag label
   * @param {ContentResponse} contentItem
   * @param {String} tagLabel
   * @return {Boolean}
   */common.content.hasTag=function(contentItem,tagLabel){if(contentItem.tags.length>0){contentItem.tags.forEach(function(item,key){if(item.label!==undefined&&item.label===tagLabel){return true;}});}return false;};/**
   * Get TagExpression
   *
   * Takes the tags which have been set in the widget configuration and
   * constructs a tag expression to be used with the content API.
   *
   * @param string tags - the tags to be filtered
   */common.content.getTagExpression=function(tags){var splitTags=tags.split(',');if(splitTags.length>0){var tagExpression='';splitTags.forEach(function(tag,index){if(tag!==' '&&tag!==''){if(index>0){tagExpression=tagExpression+' or ';}tagExpression=tagExpression+"\"".concat(tag,"\"");}});return tagExpression;}return'';};/**
   * Pre-processing function before using a content response in an underscore template
   * @param {ContentResponse} contentItem The API content response
   * @param {VariantSpecification} variantSpec Spec on the required variants for the template
   * @param {contentType} restriction Playlist restricted content type, if any
   * @return {ContentResponse} ( extended )
   */common.content.getContentModel=function(contentItem,variantSpec,restriction){if(contentItem.type!=='photo'){contentItem.leadMediaUrls=getLeadMediaUrls(contentItem,variantSpec);contentItem.link=common.generateUrl(contentItem.type,contentItem,restriction);}else{contentItem.variantUrls=common.content.getVariantUrls(contentItem.variants,variantSpec);if(contentItem.playlist){contentItem.link=common.generateUrl(contentItem.playlist.type,contentItem.playlist,'PHOTO');contentItem.link+=common.generateUrl(contentItem.type,contentItem,restriction);}else{contentItem.link='';}var desiredTags=convertSpecToTagList(variantSpec);contentItem.isPortrait=common.image.isPortrait(contentItem,desiredTags);}// special case for featured articles to go to a different URL
// if(  contentItem.type === 'text' && common.content.hasTag(  contentItem, 'Featured'  )  ) {
//     contentItem.link = common.generateUrl(  'text', contentItem, 'featured'  );
//     contentItem.isFeatured = true;
// }
return contentItem;};/**
   * Returns the total duration ( user-friendly string ) for a list of videos
   * @param  {Object[]} videoList array of video API content responses
   * @return {String}             user-friendly total ( e.g., 1:05:23 )
   */common.content.getTotalDuration=function(videoList){var total=videoList.reduce(function(sum,video){return sum+video.duration;},0);return common.durationToTime(total);};/**
   * Returns a string with the first character capitalised
   * @param  {string} string the string to be capitalised
   * @return {String} the capitalised string
   */common.content.capitaliseFirstChar=function(string){return string.charAt(0).toUpperCase()+string.slice(1);};/**
   * @typedef {Object} VariantSpecification
   * @property {TagLabel} tagLabel
   * @property {Number} preferredWidth
   * @property {Number} preferredHeight
   */ /**
   * Given a map of variable names ( as properties ) and variant tags, it will try to retrieve the URLs for the matching variants from the given variants array
   * @param {Array<Variant>} variants
   * @param {VariantSpecification} spec ( please note preferredHeight and preferredWidth are not yet supported by the image helper )
   * @return {Object}
   */common.content.getVariantUrls=function(variants,spec){var urls={},property;var setUrl=function setUrl(tag,name){var variant=getVariantByTag(variants,tag);if(variant){urls[name]=variant.url;}};if(variants.length){// FTL-type variant spec
if(_.isArray(spec)){spec.forEach(function(screenSizeSpec){screenSizeSpec.tags.forEach(function(tag,index){var name=screenSizeSpec.name+(index===0?'':'Retina');setUrl(tag,name);});});}else if(_typeof(spec)==='object'){for(property in spec){setUrl(spec[property],property);}}}return urls;};/**
   * Retrieves the array of photo variants of a content item
   * @param {ContentResponse} contentItem
   * @return {Array<Variant>}
   */common.content.getVariants=function(contentItem){var variants=[];var leadMedia=contentItem.leadMedia||contentItem.coverItem||contentItem.thumbnail;if(leadMedia){if(leadMedia.type==='video'){if(leadMedia.thumbnail!==null){if(leadMedia.thumbnail.variants!==null&&leadMedia.thumbnail.variants.length>0){return leadMedia.thumbnail.variants;}}}else if(leadMedia.variants!==null||leadMedia.variants.length>0){return leadMedia.variants;}}return variants;};/**
   * Will return the appropriate variant from a photo, given a tag
   * @param {Array<Variant>} variants
   * @param {String} tagLabel
   * @return {Variant}
   */var getVariantByTag=function getVariantByTag(variants,tagLabel,preferredWidth,preferredHeight){for(var i=0;i<variants.length;i++){if(variants[i].tag.label===tagLabel){return variants[i];}}return null;};//////////////////////////////
// Private
//////
/**
   * @private
   * Helper for retrieving the correct variants for any item's lead media
   * @param {ContentResponse} contentItem
   * @param {VariantSpecification} variantSpec
   * @return {Object}
   */var getLeadMediaUrls=function getLeadMediaUrls(contentItem,variantSpec){var variants=common.content.getVariants(contentItem);var leadMediaUrls=common.content.getVariantUrls(variants,variantSpec);// special case for media items with no variants; use imageUrl if available
if(variants.length===0||Object.keys(leadMediaUrls).length===0){for(var property in variantSpec){leadMediaUrls[property]=contentItem.imageUrl;}}return leadMediaUrls;};/**
   * Turns a variant specification into an array of tags
   * @param  {Object} spec the variant spec
   * @return {String[]}    the array of tags
   */var convertSpecToTagList=function convertSpecToTagList(variantSpec){var tagList=[];if(_.isArray(variantSpec)){variantSpec.forEach(function(screenSizeSpec){tagList=tagList.concat(screenSizeSpec.tags);});}else if(_typeof(variantSpec)==='object'){for(var name in variantSpec){tagList.push(variantSpec[name]);}}return tagList;};})(PULSE.app,PULSE.app.common);(function(app,common){// eslint-disable-next-line no-magic-numbers
var CWC_TEAM_IDS=[11,19,14,15,16,20,22,13,17,21];var MATCH_ORDER=['TEST','ODI','T20I','FIRST_CLASS','LIST_A','T20','OTHER'];/**
   * Order matches by specific matchType order.
   * @param {Array<Object>} matches array of match objects
   * @param {Array<String>} order (optional) list of match types to use for ordering
   * @return {Array} ordered matches
   */common.orderMatchesByMatchType=function(matches,order){var theOrder=order||MATCH_ORDER;var live=new Array(theOrder.length);var fixtures=new Array(theOrder.length);var results=new Array(theOrder.length);var type,i;// fill arrays with empty arrays
for(var a=0;a<theOrder.length;a++){live[a]=[];fixtures[a]=[];results[a]=[];}// sort matches into the different buckets
matches.forEach(function(match){type=match.matchType;i=theOrder.indexOf(type);if(i>-1){switch(match.matchState){case'L':live[i].push(match);break;case'U':fixtures[i].push(match);break;case'C':results[i].push(match);break;default:}}});// merge back all matches in specifin order
var orderedMatches=_.union(_.flatten(live),_.flatten(fixtures),_.flatten(results));return orderedMatches;};/**
   * Returns 'st', 'nd', 'rd', 'th', based on the given number
   * @param  {Number} number the number to extract the ordinal from
   * @return {String}        the ordinal suffix
   */common.getOrdinal=function(number){// special cases
var FIRST=1;var SECOND=2;var THIRD=3;var ELEVENTH=11;var TWELFTH=12;var THIRTEENTH=13;var DECIMAL_SPLIT=10;var DOUBLE_DIGIT_SPLIT=100;var lastDigit=number%DECIMAL_SPLIT;var lastTwoDigits=number%DOUBLE_DIGIT_SPLIT;if(lastDigit===FIRST&&lastTwoDigits!==ELEVENTH){return'st';}if(lastDigit===SECOND&&lastTwoDigits!==TWELFTH){return'nd';}if(lastDigit===THIRD&&lastTwoDigits!==THIRTEENTH){return'rd';}return'th';};/**
   * Checks if a given team ID is participating in the CWC
   * @param {Integer} teamID team ID to check
   * @return {Boolean} is participating in CWC
   */common.isCWCTeam=function(teamID){return CWC_TEAM_IDS.indexOf(parseInt(teamID))>-1;};var STYLE_MAP={FAST_SEAM:'Fast Seam',MEDIUM_SEAM:'Medium Seam',OFF_SPIN:'Off Spin',LEG_SPIN:'Leg Spin',ORTHODOX:'Orthodox',UNORTHODOX:'Unorthodox'};/**
   * Returns the bowlingStyle from player object
   * @param {Object} player player object
   * @returns {String} bowlingString Returns the bowling style from player object
   */common.getBowlingType=function(player){var bowlingStyle=STYLE_MAP[player.bowlingStyle];var bowlingArm=player.rightArmedBowl?'Right-Arm':'Left-Arm';var bowlingString=bowlingStyle?bowlingArm+' '+bowlingStyle:'-';return bowlingString;};/**
   * Checks to see if the format is women's cricket
   * @param {String} format - the cricket format, e.g. test, odi, t20i, wt20i, wodi
   * @return {Boolean} - true for women, false for men
   */common.isWomensFormat=function(format){var _self=this;return _self.constants.FORMATS.women.indexOf(format)!==-1;};})(PULSE.app,PULSE.app.common);/**
 * Pulse Platform Endpoints
 *
 * Docs are here: http://swagger.pulselive.com/
 */(function(app,common){'use strict';if(typeof common.endpoints==='undefined'){common.endpoints={};}// const prepareParams = common.prepareParams;
var apiEnv=app.environment.api;/**
   * CRM API
   */common.endpoints.crm={// eventgroup: ( lang, id, params ) => `${ app.environment.crmApi }/${ app.account }/eventgroup/${ lang }/${ id }/events${ prepareParams( params ) }`,
contactDetails:function contactDetails(){return"".concat(app.environment.crm,"/contact/details");},contactLists:function contactLists(){return"".concat(app.environment.crm,"/contact/lists");},getMemberships:function getMemberships(){return"".concat(app.environment.crm,"/contact/getMemberships");},subscribeList:function subscribeList(id){return"".concat(app.environment.crm,"/subscribe/list?contactListIds=").concat(id);},unSubscribeList:function unSubscribeList(id){return"".concat(app.environment.crm,"/unsubscribe/list?contactListIds=").concat(id);}};})(PULSE.app,PULSE.app.common);/**
 * Coupled set of date string and moment object
 * @typedef {object} momentCouple
 * @property {moment|Date} date the moment Object
 * @property {string} string the generated string
 * @property {string} std locale independent date string ( DD-MM-YYYY )
 */(function(common,app,core,moment){var oneDay=60*60*24*1000;/**
  * Use momentJS to get a locale-observant string with a specified format
  * will return moment object as well as string
  *
  * @param start
  * @param end
  * @param format
  * @param {boolean} inclusive if true will include start  day in response
  * @returns {momentCouple[]} array of days with moment day and string included in each index position
  */common.momentGetDaysFromRange=function(start,end,format,inclusive){var startAsDate=start instanceof Date?start:new Date(start);var endAsDate=end instanceof Date?end:new Date(end);var startTime=startAsDate.getTime();var endTime=endAsDate.getTime();var days=[];var current=startTime;if(inclusive&&startAsDate.toLocaleDateString()!==endAsDate.toLocaleDateString()){days.push({date:startAsDate,string:moment&&format?moment(startAsDate).locale(app.language).format(format):startAsDate.toLocaleDateString(),std:moment?moment(startAsDate).format('DD-MM-YYYY'):false});}// add a day until the date reaches the end date
do{current=current+oneDay;var asDate=new Date(current);days.push({date:asDate,string:moment&&format?moment(asDate).locale(app.language).format(format):asDate.toLocaleDateString(),std:moment?moment(asDate).format('DD-MM-YYYY'):false});}while(current<endAsDate.getTime());return days;};/**
  * Get the time since a specific date
  *
  * @param {Date} date Date to be calculated from now
  * @param {Object} Optional format for output
  * @returns {String} output Amount of time since date
  */common.getSinceString=function(date,format){if(date){var now=new Date();var diff=Math.floor((now-date)/1000);if(diff<=0){return format?format.justNow:'just now';}else if(diff<60){var output=Math.round(diff);return output+(format?format.seconds:'s');}else if(diff<60*60){var output=Math.round(diff/60);return output+(format?format.minutes:'m');}else if(diff<60*60*24){var output=Math.round(diff/(60*60));return output+(format?format.hours:'h');}var output=Math.round(diff/(60*60*24));return output+(format?format.days:'d');}};/**
  * Get duration in time format mm:ss
  *
  * @param {Int} number of seconds
  * @returns {String} output duration in format mm:ss
  */common.durationToTime=function(duration){var sec_num=parseInt(duration,10);if(sec_num){var hours=Math.floor(sec_num/3600);var minutes=Math.floor((sec_num-hours*3600)/60);var seconds=sec_num-hours*3600-minutes*60;if(hours<10){hours='0'+hours;}if(minutes<10){minutes='0'+minutes;}if(seconds<10){seconds='0'+seconds;}var minSec=minutes+':'+seconds;return hours>0?hours+':'+minSec:minSec;}return'00:00';};/**
  * Set Local Time for the user on a list of matches
  * @param {HTMLElement} element - The container element with the matches inside
  * @param {String} site - the site (used to override functionailty on CWC)
  */common.getLocalTimeUser=function(element){var site=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var userTimeZone=moment.tz.guess();var dateArray=element.querySelectorAll('.js-date');dateArray.forEach(function(fixture){var format=fixture.getAttribute('data-format');var startDateTimestamp=fixture.getAttribute('data-startDate');var endDateTimestamp=fixture.getAttribute('data-endDate');var startDate=moment(startDateTimestamp);var endDate=moment(endDateTimestamp);var startDateTimeZoned=startDate.tz(userTimeZone);var startTime=startDateTimeZoned.format('HH:mm');var userTimeZoneAbbr=startDateTimeZoned.zoneAbbr();// Get the duration of a fixture to avoid issue of endDate pushing into a 6th day in some timezones
var fixtureLength=endDate.diff(startDate,'days');var calculatedEndDate=moment(startDateTimeZoned).add(fixtureLength,'days');var startDateFormat='ddd DD MMMM';var endDateFormat='ddd DD MMMM';// Check to make sure Test match start and end dates are within the same month - if they are we don't need the month on then start date
if((format==='FIRST_CLASS'||format==='TEST')&&startDateTimeZoned.format('M')===calculatedEndDate.format('M')){startDateFormat='ddd DD';}var formattedStartDate=startDateTimeZoned.format(startDateFormat);var formattedEndDate=calculatedEndDate.format(endDateFormat);if(site&&site==='CWC'){fixture.innerHTML="".concat(startTime," (").concat(userTimeZoneAbbr,")");}else if(format==='FIRST_CLASS'||format==='TEST'){fixture.innerHTML="".concat(formattedStartDate," - ").concat(formattedEndDate,", ").concat(startTime," (").concat(userTimeZoneAbbr,")");}else{fixture.innerHTML="".concat(formattedStartDate,", ").concat(startTime," (").concat(userTimeZoneAbbr,")");}});};})(PULSE.app.common,PULSE.app,PULSE.core,moment);(function(common,core){common.event=common.event||{};/**
   * Generate a new custom event and fire it on the given element
   *
   * @param {String}     name    the name of the event
   * @param {Object}     data    the data to pass to the event
   * @param {DOMElement} element the element where we should fire the event
   * @param {Object}     options Event-specific options: blubbles, cancelable etc.
   */common.event.dispatch=function(name,data,element,options){options=core.object.extend({bubbles:true,cancelable:true},options||{});(element||document.body).dispatchEvent(new CustomEvent(name,{detail:data||{},bubbles:options.bubbles,cancelable:options.cancelable}));};/**
   * throttle EventListeners by deferring payload
   * @param {Function} eventPayload - function to execute every x interval
   * @param {Number} updatedDelay - optional delay which determines the execution intervals. Default 200 milliseconds
   * @return {Function} anonymous function which is passed to the event and is called by the event loop
  */common.event.throttle=function(eventPayload,updatedDelay){var timeout;var defaultDelay=200;var wait=false;var delay=updatedDelay||defaultDelay;return function(event){// if wait is false do your thing
if(!wait){// execute event payload
eventPayload(event);// prevent payload from being called until the delay has passed
wait=true;setTimeout(function(){wait=false;},delay);}else{// prepare timeout to execute when the event has ended
if(timeout){clearTimeout(timeout);}timeout=setTimeout(eventPayload,delay,event);}};};})(PULSE.app.common,PULSE.core);(function(app,common,core){var IMAGE_MISSING_CLASS='image-missing';var U_OPAQUE='u-opaque';common.getPhotoByVariant=function(photos,variant){var photo;for(var i=0;i<photos.length;i++){if(photos[i].tag.label===variant){photo=photos[i];break;}}return photo||null;};common.setPlayerImageLoader=function(playerId,imgSize,imageWrapper,imgExtension,matchType){var main,missing='';if(matchType==='greatestXI'){main=common.getGreatestXiImg(playerId,imgExtension);}else if(matchType==='greatestXIWtc'){main=common.getGreatestXiWtcImg(playerId,imgExtension);}else{main=common.getPlayerImg(playerId,imgSize,imgExtension,matchType);missing=common.getDefaultPlayerImg(imgSize);}var profileImg=new Image();profileImg.src=main;profileImg.onload=function(){imageWrapper.setAttribute('src',main);imageWrapper.setAttribute('data-error',false);core.style.removeClass(imageWrapper,IMAGE_MISSING_CLASS);if(matchType==='greatestXI'||matchType==='greatestXIWtc'){core.style.removeClass(imageWrapper,U_OPAQUE);}};profileImg.onerror=function(){if(imageWrapper.getAttribute('data-error')!=='true'){imageWrapper.setAttribute('data-error',true);imageWrapper.setAttribute('src',missing);core.style.addClass(imageWrapper,IMAGE_MISSING_CLASS);if(matchType==='greatestXI'||matchType==='greatestXIWtc'){core.style.removeClass(imageWrapper,U_OPAQUE);}}};};common.getDefaultPlayerImg=function(imgSize){return common.getPlayerImg('Photo-Missing',imgSize);};common.getPlayerImg=function(playerId,size,extension,matchType){var match;switch(matchType){case'TEST':match='test/';break;case'ODI':match='odi/';break;case'T20I':match='t20i/';break;default:match='';}var bucket=common.getPhotoBucket();return app.environment.playerImagePath+(bucket?bucket+'/':'')+match+size+'/'+playerId+('.'+(extension||'png'));};common.getGreatestXiImg=function(playerId,extension){return app.environment.greatestXi+playerId+('.'+(extension||'jpg'));};common.getGreatestXiWtcImg=function(playerId,extension){return app.environment.greatestXiWtc+playerId+('.'+(extension||'jpg'));};})(PULSE.app,PULSE.app.common,PULSE.core);/*globals PULSE, PULSE.app, PULSE.app.common */(function(app,common,cricket){common.getSummaryWithRodl=function(match){if(match.matchSummary){return match.matchSummary;}var summary=match.getInningsSummaryText();if(summary&&match.isLimitedOvers()&&match.innings.length>1&&match.innings[match.innings.length-1].rodl){var rodl=match.innings[match.innings.length-1].rodl;summary+=' (DLS target '+rodl.target+' from '+rodl.overs+' ov)';}if(!summary&&match.tieBreaker&&match.tieBreaker.type==='SUPER_OVER'){return'Super Over';}return summary||'';};})(PULSE.app,PULSE.app.common,PULSE.cricket);(function(app,common){/**
   * A module of utility functions to set/modify a page's metadata content.
   * Used for when meta tags or other metadata content category tags need to be
   * added or changed dynamically for use with social, third party or plugin
   * scripts.
   */common.metadata={};/**
   * Sets title tag and any twitter and opengraph meta title tag
   * to the supplied string
   *
   * @param {String} txt Complete string for the title to be used
   */common.metadata.setTitles=function(txt){if(!txt){return;}var titleTag=document.head.querySelector('title');var twitterTitle=document.head.querySelector('meta[name="twitter:title"]')||null;var ogTitle=document.head.querySelector('meta[property="og:title"]')||null;if(titleTag.textContent!==txt){titleTag.textContent=txt;if(twitterTitle){twitterTitle.setAttribute('content',txt);}if(ogTitle){ogTitle.setAttribute('content',txt);}}};/**
   * Sets meta image twitter and opengraph
   *
   * @param {String} imageUrl url of image to update metatags with
   */common.metadata.setImage=function(imageUrl){if(!imageUrl){return;}var twitterImage=document.head.querySelector('meta[name="twitter:image"]')||null;var ogImage=document.head.querySelector('meta[property="og:image"]')||null;if(twitterImage){twitterImage.setAttribute('content',imageUrl);}if(ogImage){ogImage.setAttribute('content',imageUrl);}};/**
   * Sets meta description tag and any twitter and opengraph
   * meta description tags to the supplied string
   *
   * @param {String} txt Complete string for the description to be used
   */common.metadata.setDescriptions=function(txt){if(!txt){return;}var metaTag=document.head.querySelector('meta[name="description"]')||null;var twitterDesc=document.head.querySelector('meta[name="twitter:description"]')||null;var ogDesc=document.head.querySelector('meta[property="og:description"]')||null;if(metaTag&&metaTag.getAttribute('content')!==txt){metaTag.setAttribute('content',txt);if(twitterDesc){twitterDesc.setAttribute('content',txt);}if(ogDesc){ogDesc.setAttribute('content',txt);}}};})(PULSE.app,PULSE.app.common);(function(common){'use strict';var DEFAULT_DURATION=200;var DEFAULT_EASING='easeInQuad';common.scrollTo=function(destination){var offset=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var duration=arguments.length>2&&arguments[2]!==undefined?arguments[2]:DEFAULT_DURATION;var easing=arguments.length>3&&arguments[3]!==undefined?arguments[3]:DEFAULT_EASING;var callback=arguments.length>4?arguments[4]:undefined;var easings={linear:function linear(time){return time;},easeInQuad:function easeInQuad(time){return time*time;}// example
// easeInQuad( tim ) {
//     return time * time;
// }
};var start=window.pageYOffset;var startTime='now'in window.performance?performance.now():new Date().getTime();var documentHeight=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight);var windowHeight=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName('body')[0].clientHeight;var destinationOffset=typeof destination==='number'?destination:destination.getBoundingClientRect().top+((window.pageYOffset||document.documentElement.scrollTop)-(document.documentElement.clientTop||0))-offset;var destinationOffsetToScroll=Math.round(documentHeight-destinationOffset<windowHeight?documentHeight-windowHeight:destinationOffset);if('requestAnimationFrame'in window===false){window.scroll(0,destinationOffsetToScroll);if(callback){callback();}return;}function scroll(){var now='now'in window.performance?performance.now():new Date().getTime();var time=Math.min(1,(now-startTime)/duration);var timeFunction=easings[easing](time);window.scroll(0,Math.ceil(timeFunction*(destinationOffsetToScroll-start)+start));if(window.pageYOffset===destinationOffsetToScroll){if(callback){callback();}return;}requestAnimationFrame(scroll);}scroll();};})(PULSE.app.common);(function(app,core,common){'use strict';common.SSO={};/**
   * Get the full user object
   * @return {obj} object containing the logged in user's info
   */common.SSO.getUserObj=function(){if(!app.SSO.tokenParsed){return null;}var userToken=app.SSO.tokenParsed;return{firstName:userToken.given_name||null,lastName:userToken.family_name||null,fullName:userToken.name||null,email:userToken.email||null};};})(PULSE.app,PULSE.core,PULSE.app.common);(function(app,common){/* eslint-disable complexity */ /**
   * Gets column title depending on stat
   * @param {String} statName array of match objects
   * @returns {String} column
   */common.getStatsTableColumns=function(statName){switch(statName){case'mostRuns':case'mostRunsOver':case'mostRunsConcededInnings':return{mobileTitle:'R',title:'Runs'};case'mostSixes':case'mostSixesInnings':return{mobileTitle:'6s',title:'6s'};case'mostFours':case'mostFoursInnings':return{mobileTitle:'4s',title:'4s'};case'mostFifties':return{mobileTitle:'50s',title:'50s'};case'mostCenturies':return{mobileTitle:'100s',title:'100s'};case'fastestFifties':case'fastestCenturies':return{mobileTitle:'Deliveries',title:'Deliveries'};case'highestScores':case'highestScoresInnings':return{mobileTitle:'HS',title:'HS'};case'bestBattingStrikeRate':case'bestBattingStrikeRateInnings':case'bestBowlingStrikeRate':case'bestBowlingStrikeRateInnings':return{mobileTitle:'SR',title:'SR'};case'bestBattingAverage':case'bestBowlingInnings':case'bestBowlingAverage':return{mobileTitle:'Avg',title:'Avg'};case'biggestSixes':return{mobileTitle:'Distance',title:'Distance'};case'mostWickets':return{mobileTitle:'W',title:'W'};case'bestBowlingEconomy':case'bestBowlingEconomyInnings':return{mobileTitle:'Econ',title:'Econ'};case'mostDotBalls':case'mostDotBallsInnings':return{mobileTitle:'Dots',title:'Dots'};case'mostMaidens':return{mobileTitle:'Mdns',title:'Mdns'};case'fastestBalls':return{mobileTitle:'Speed (km/h)',title:'Speed (km/h)'};case'mostHatTricks':return{mobileTitle:'HT',title:'Hat Tricks'};case'mostFourWickets':return{mobileTitle:'4w',title:'4w'};case'playerPoints':return{mobileTitle:'pts',title:'Points'};default:return{mobileTitle:'-',title:'-'};}};})(PULSE.app,PULSE.app.common);// globals PULSE, PULSE.app, PULSE.app.common
(function(core,app,common){var MICRO_SITES=['champions-trophy','womens-world-cup','media-zone'];/**
   * Checks if current URL is part of a micro site and returns micro site name
   *
   * @returns {String} microsite Microsite name
   */common.isMicroSite=function(){var split=window.location.pathname.split('/');if(split.length&&split[1]&&MICRO_SITES.indexOf(split[1])>-1){return'/'+split[1];}return null;};/**
   * creates content path based on the type and parameters
   * @param {String} type Type of content
   * @param {Object} params
   * @returns {String} url Content url
   */common.createContentPath=function(type,params,lang,id){var url=app.environment.cms+'/'+type+'/'+(lang?lang:app.defaultLanguage)+'/'+(id?id:'');if(params){url+='?'+core.url.buildQueryString(params);}return url;};/**
   * creates canary path based a strean id
   * @param {int} id Stream id
   * @returns {String} url Canary url
   */common.createCanaryPathFromId=function(id){var url=app.environment.canary+'stream/'+id+'/posts';return url;};common.urlify=function(str){return str.toLowerCase().replace(/[^a-z0-9]+/gi,'-').replace(/-{2,}/g,'-').replace(/^-|-$/g,'');};common.getVideoPagePlaylistUrl=function(media){var searchReferences=media.references;var searchTags=media.tags;var link='/video/'+media.id;var query=[];var tagNames='';var references='';if(searchTags&&searchTags.length){searchTags.forEach(function(tag,index){tagNames+=tag.label;if(searchTags[index+1]){tagNames+=',';}});query.push('tagNames='+tagNames+'');}if(searchReferences&&searchReferences.length){searchReferences.forEach(function(reference,index){references+=reference.type+':'+reference.id;if(searchReferences[index+1]){references+=',';}});query.push('references='+references+'');}if(query&&query.length){link+='?'+query.join('&');}return link;};common.createPollQuestionUrl=function(pollName){var url=app.environment.pollQuestions+'/'+pollName+'/poll.js';return url;};common.createPollAnswerUrl=function(questionId,optionId){var url=app.environment.pollAnswer+'?id='+questionId+'&option='+optionId+'&callback=JSON_CALLBACK';return url;};common.makeNewerThanLiveBlogUrl=function(id,newerThan,maxItems,params){var url=common.makeLiveBlogUrl(id);url+='newerThan/'+newerThan+'/';if(params){params=core.object.extend({},params,{size:maxItems});}else{params={size:maxItems};}return url+core.url.buildQueryString(params,true);};common.makeBelowPositionBlogUrl=function(id,position,maxItems,params){var url=this.makeLiveBlogUrl(id);url+='below/'+position+'/';if(params){params=core.object.extend({},params,{size:maxItems});}else{params={size:maxItems};}return url+core.url.buildQueryString(params,true);};common.makeAbovePositionBlogUrl=function(id,position,maxItems,params){var url=this.makeLiveBlogUrl(id);url+='above/'+position+'/';if(params){params=core.object.extend({},params,{size:maxItems});}else{params={size:maxItems};}return url+core.url.buildQueryString(params,true);};common.makeLiveBlogUrl=function(id,maxItems,params){var url=app.environment.api+'/liveblog/'+app.account+'/'+id+'/'+app.defaultLanguage+'/';if(params){params=core.object.extend({},params,{size:maxItems});}else{params={size:maxItems};}return url+core.url.buildQueryString(params,true);};common.makeLiveBlogsQueryUrl=function(params){var url=app.environment.api+'/liveblog/'+app.account+'/'+app.defaultLanguage+'/';return url+(params?core.url.buildQueryString(params,true):'');};common.makeNewerThanCommentaryUrl=function(id,newerThan,maxItems,params){var url=common.makeCommentaryUrl(id);url+='newerThan/'+newerThan+'/';if(params){params=core.object.extend({},params,{maxResults:maxItems});}else{params={maxResults:maxItems};}return url+core.url.buildQueryString(params,true);};common.makeBelowPositionCommentaryUrl=function(id,position,maxItems,params){var url=this.makeCommentaryUrl(id);url+='below/'+position+'/';if(params){params=core.object.extend({},params,{maxResults:maxItems});}else{params={maxResults:maxItems};}return url+core.url.buildQueryString(params,true);};common.makeAbovePositionCommentaryUrl=function(id,position,maxItems,params){var url=this.makeCommentaryUrl(id);url+='above/'+position+'/';if(params){params=core.object.extend({},params,{maxResults:maxItems});}else{params={maxResults:maxItems};}return url+core.url.buildQueryString(params,true);};common.makeCommentaryUrl=function(id,maxItems,params){var url=app.environment.commentaryApi+'/commentary/'+app.account+'/'+id+'/'+app.defaultLanguage+'/';if(params){params=core.object.extend({},params,{maxResults:maxItems});}else{params={maxResults:maxItems};}return url+core.url.buildQueryString(params,true);};common.makeCommentariesQueryUrl=function(params){var url=app.environment.commentaryApi+'/commentary/'+app.account+'/'+app.defaultLanguage+'/';return url+(params?core.url.buildQueryString(params,true):'');};/**
   * creates API path based on a string and parameters
   * @param {String} path Object path for the API object
   * @param {Object} params Url parameters
   * @returns {String} url API url
   */common.createApiPath=function(path,params){var thisPath=core.object.objectByString(app.apiPath,path);var paramArray=[];for(var key in params){if(thisPath.indexOf('{'+key+'}')>-1){thisPath=thisPath.replace('{'+key+'}',params[key]);}else if(params[key]!==undefined){paramArray.push(key+'='+params[key]);}}var url=thisPath;if(paramArray.length>0){url+='?'+paramArray.join('&');}return url;};/**
   * generate a url for a some content
   * @param {String} type Type of content
   * @param {int} id Id of content
   * @returns {String} url Link to content
   */common.generateUrl=function(type,id,restriction,ignoreMicroSite){var microSite=ignoreMicroSite?null:common.isMicroSite();var base=window.location.protocol+'//'+app.environment.domain+(microSite?microSite:'');type=(type||'').toLowerCase();restriction=restriction?restriction.toLowerCase():'';switch(type){case'text':if(restriction==='featured'){return base+'/news/'+id+'/featured';}if(base==='//'+app.environment.domain+'/media-zone'&&restriction==='media-release'){return base+'/news/media-releases/'+id;}if(restriction==='media-release'){return base+'/media-releases/'+id;}if(restriction==='press-release'){return base+'/news/'+id+'/press-release';}return base+'/news/'+id;case'video':return base+'/video/'+id;case'playlist':if(restriction==='photo'){return base+'/photos/'+id;}else if(restriction==='video'){return base+'/video/categories/'+id;}return'';case'cricket_player':return base+'/players/'+id;case'cricket_match':return base+'/match/'+id;default:return base+'/'+type+'/'+id;}};/**
   * Create individual player rankings page URL which has a different format
   * @param {String} format rankings format to know if it's men's or women's rankigs
   * @param {String} id the player id
   * @returns {String} the player rankings page url
   */common.generatePlayerRankingsUrl=function(format,id){if(!id){// If no id, stay on the same page (could send to 404 instead)
return window.location.href;}if(format&&format.startsWith('w')){return'/rankings/womens/player-rankings/'+id;}return'/rankings/mens/player-rankings/'+id;};/**
   * Create Cricket World Cup player URL which has a different format
   * @param {String} team the player's team
   * @param {String} id the player id
   * @returns {String} the player url
   */common.generateCWCPlayerUrl=function(team,id){if(team&&id){return'/teams/'+common.urlify(team.trim())+'/players/'+id;}return'';};/**
   * Use the browser's built-in functionality to safely escape a string
   * @param {String} str String to escape
   * @returns {String} str Escaped string (no, it didn't run away)
   */common.escapeHtml=function(str){var div=document.createElement('div');div.appendChild(document.createTextNode(str));return div.innerHTML;};/**
   * Gets the value of a url parameter by param name.
   *
   * @param  {string} name the name of the url param
   * @return {string}      returns the value of the url param if it's found
   */common.getUrlParameter=function(name){name.replace(/[[]/,'\\[').replace(/[\]]/,'\\]');var regex=new RegExp('[\\?&]'+name+'=([^&#]*)');var results=regex.exec(location.search);return results===null?'':decodeURIComponent(results[1].replace(/\+/g,' '));};common.getFormUrl=function(formId){return app.environment.submitForm+formId+'/account/icc';};})(PULSE.core,PULSE.app,PULSE.app.common);// eslint-disable-next-line no-unused-vars
/*globals PULSE, PULSE.app, PULSE.app.common */(function(app,common,cricket){common.widget={};/**
   * Map of widget attribute names to content types
   * @type {Object}
   */var WIDGET_ATTRIBUTES={// cricket references
'data-tournament-id':'CRICKET_TOURNAMENT','data-team-id':'CRICKET_TEAM','data-venue-id':'CRICKET_VENUE','data-match-id':'CRICKET_MATCH','data-tournament-group-id':'CRICKET_TOURNAMENTGROUP'};/**
   * Gets a data attribute of a DOM element and converts it to a number
   *
   * @param  {string}     attribute     The attribute name
   * @param  {DOMElement} element       The element
   * @return {Number}                   The number attribute.
   */common.widget.getNumberAttribute=function(attribute,element){var value=parseInt(element.getAttribute(attribute),10);if(isNaN(value)===false){return value;}};/**
   * Gets the data attribute of a DOM element and converts it into an array
   *
   * @param  {string}        attribute  The attribute name
   * @param  {DOMElement}    element    The element
   * @return {Array<String>}            The array attribute.
   */common.widget.getArrayAttribute=function(attribute,element){var value=element.getAttribute(attribute);if(value){return value.split(',').map(function(item){return item.trim();}).filter(function(item){return typeof item!=='undefined'&&item!=='';});}};/**
   * Retrieves hash map of content references from a widget container's attributes
   * @param  {DOMElement} element - The widget container
   * @return {Object}             - Hash of content type to array of reference IDs
   */common.widget.retrieveReferences=function(element){var references={};if(element){for(var attr in WIDGET_ATTRIBUTES){if(WIDGET_ATTRIBUTES.hasOwnProperty(attr)){references[WIDGET_ATTRIBUTES[attr]]=common.widget.getArrayAttribute(attr,element);}}}return references;};/**
   * Given a map of content references, it converts it to a {@link PULSE.cricket.MatchListFilter}
   *
   * @param  {Object} referencesMap          - The references map
   * @return {PULSE.cricket.MatchListFilter} - The filter for the match list
   */common.widget.convertToFilter=function(referencesMap){var filter={};for(var contentType in referencesMap){if(referencesMap.hasOwnProperty(contentType)){switch(contentType){case'CRICKET_TOURNAMENT':filter.tournamentIds=referencesMap[contentType];break;case'CRICKET_TEAM':filter.teamIds=referencesMap[contentType];break;case'CRICKET_VENUE':filter.venueIds=referencesMap[contentType];break;case'CRICKET_TOURNAMENTGROUP':filter.tournamentGroupIds=referencesMap[contentType];break;default:// fail gracefully
break;}}}return filter;};/**
   * Retrieves match information from a widget container's data attributes and retrieves/creates
   * the appropriate cricket.Match instance so it can be used inside a widget
   *
   * @param  {DOMElement} container - the widget container
   * @return {cricket.Match}        - the instance of the match
   */common.widget.getMatchFromContainer=function(container){var matchId=common.widget.getNumberAttribute('data-match-id',container);var tournamentId=common.widget.getNumberAttribute('data-tournament-id',container);var store=cricket.Store.getInstance();return store.getMatch(matchId,tournamentId);};/**
   * Converts a NodeList to an array
   * @param  {NodeList}           nodeList the node list
   * @return {Array<HTMLElement>} the resulting array
   */common.widget.getNodeListAsArray=function(nodeList){var array=[];for(var i=0;i<nodeList.length;i++){array.push(nodeList[i]);}return array;};/**
   * Creates a string to use as a value for a data attribute
   * @param {String} prefix string to prefix value
   * @param {String} value value to add to the attribute
   * @param {String} suffix string to suffix value
   * @return {String} string built using the parameters provided
   */common.widget.createAttributeValue=function(prefix,value,suffix){var pre=prefix?prefix:'';var suf=suffix?suffix:'';return pre+value+suf;};/**
   * Sets a data attribute to a HTMLElement
   * @param {String} key used to access common.constants.ATTR
   * @param {HTMLElement} node HTMLElement to set attribute on
   * @param {String} dataValue value to add to the attribute
   */common.widget.setAttribute=function(key,node,dataValue){var attr=common.constants.ATTR[key];node.setAttribute(attr,dataValue);};})(PULSE.app,PULSE.app.common,PULSE.cricket);(function(app,common,core){'use strict';/**
   * Sets the container to be the widget container when no specific video container is passed to the config
   * @param {Object} config - The config object to be passed
   * @return {Object} config object with default values set if needed
   */var _setDefaults=function _setDefaults(config){if(!config.videoContainer){config.videoContainer=config.container;}return config;};/**
   * Video Hover Autoplay constructor
   * @constructor
   * @param {Object} config - The config object to be passed to the common functionality
   *
   */common.VideoHoverAutoplay=function(config){var _self=this;_self.config=_setDefaults(config);_self.container=_self.config.container;_self.videoContainer=_self.config.videoContainer;_self.videoPlayerId=_self.config.videoPlayerId;_self.setListeners();};/**
   * Sets the listeners to check for hover events on the video player
   */common.VideoHoverAutoplay.prototype.setListeners=function(){var _self=this;_self.videoContainer.addEventListener('mouseover',function(){if(!core.style.hasClass(_self.videoContainer,'is-hovered')){core.style.addClass(_self.container,'is-hovered');_self.playVideo();}});_self.videoContainer.addEventListener('mouseout',function(){core.style.removeClass(_self.container,'is-hovered');_self.stopVideo();});};/**
   * Plays the video
   */common.VideoHoverAutoplay.prototype.playVideo=function(){var _self=this;var player=app.videoPlayerManager.getPlayerWithName(_self.videoPlayerId);player.api.play();};/**
   * Stops the video playing
   */common.VideoHoverAutoplay.prototype.stopVideo=function(){var _self=this;var player=app.videoPlayerManager.getPlayerWithName(_self.videoPlayerId);player.api.pause();};})(PULSE.app,PULSE.app.common,PULSE.core);/*globals PULSE, PULSE.app */(function(common,core,templates){/**
   * create an interface for the use of the scroll loader
   */common.ScrollLoaderDelegate=function(){};/**
   * indicate to the delegate object that the scroller has reached a point
   * where it has been activated and the delegate should populate the
   * container with new data
   */common.ScrollLoaderDelegate.prototype.didRequestLoad=function(){};/**
   * @namespace common.ScrollLoader.private
   */ /**
   * draw the loader from the template, ensuring translation is used
   *
   * @param {common.ScrollLoader} _self contextual reference to the object that is calling the function
   */var drawLoader=function drawLoader(_self){var loader='<div class="loader-container"></div>',loadingIndicator='<div class="'+_self.loadingIconClass+' js-loader"></div>';//append to container and keep a reference
_self.element=core.dom.appendDomString(_self.showMoreContainer||_self.container,loader);_self.loadingIndicator=core.dom.appendDomString(_self.element,loadingIndicator);};var onScroll=function onScroll(event){var _self=this;if(!_self.loading&&_self.element){var top=_self.element.getBoundingClientRect().top;if(window.innerHeight-top>=_self.limit&&(_self.element.offsetHeight!==0||_self.ignoreOffsetHeight)){_self.show();if(_self.delegate){_self.loading=true;_self.delegate.didRequestLoad();}}}};var onShowMoreClick=function onShowMoreClick(){var _self=this;core.style.addClass(_self.showMoreButton,'u-hide');drawLoader(_self);_self.showLoadMoreButton=false;_self.loading=true;_self.delegate.didRequestLoad();};/**
   * set the scroller listener for the loader
   *
   * @param {common.ScrollLoader} _self contextual reference to the object that is calling the function
   */var setScrollListeners=function setScrollListeners(_self){if(_self.delegate.config&&_self.delegate.config.scrollBoundary){var elem=typeof _self.delegate.config.scrollBoundary==='string'?document.querySelector(_self.delegate.config.scrollBoundary):_self.delegate.config.scrollBoundary;elem.addEventListener('scroll',onScroll.bind(_self));}else{document.addEventListener('scroll',onScroll.bind(_self));}_self.scrollListenersSet=true;};var removeListeners=function removeListeners(_self){if(_self.delegate.config&&_self.delegate.config.scrollBoundary){var elem=typeof _self.delegate.config.scrollBoundary==='string'?document.querySelector(_self.delegate.config.scrollBoundary):_self.delegate.config.scrollBoundary;elem.removeEventListener('scroll',onScroll.bind(_self));}else{document.removeEventListener('scroll',onScroll.bind(_self));}_self.scrollListenersSet=false;};/**
   * create a scroll loader, for requesting more content when the page scroll
   * reaches this point the scroller will append itself to the bottom of
   * the list of content provided as container
   *
   * @param {HTMLElement} container
   * @param {common.ScrollLoaderDelegate} delegate
   * @param {boolean} ignoreOffsetHeight Whether to ignore the offset height or not.
   * @param {boolean} showMore Whether a show more button should be shown before initiating the infinity scroll.
   * @param {String} loadingIconClass CSS class to for the loading icon
   */common.ScrollLoader=function(container,delegate,ignoreOffsetHeight,showMore,loadingIconClass){var _self=this;_self.delegate=delegate;_self.container=container;_self.ignoreOffsetHeight=ignoreOffsetHeight;_self.loading=false;_self.element=false;// this property defines how far above the bottom of the screen the
// loading element must rise in order to trigger a load request
_self.limit=0;_self.showMore=showMore;_self.loadingIconClass=loadingIconClass||'loader';_self.scrollListenersSet=false;if(showMore&&delegate.widget){_self.showMoreContainer=delegate.widget.querySelector('.js-show-more');_self.showMoreButton=delegate.widget.querySelector('.js-show-more-button');core.style.addClass(_self.showMoreContainer,'is-active');_self.showLoadMoreButton=true;_self.showMoreButton.addEventListener('click',onShowMoreClick.bind(_self));}else{drawLoader(_self);setScrollListeners(_self);}};common.ScrollLoader.prototype.enable=function(){var _self=this;_self.loading=false;setScrollListeners(_self);};common.ScrollLoader.prototype.disable=function(){var _self=this;_self.loading=true;removeListeners(_self);};/**
   * Reset the loader; will re-add the tracker on the page
   */common.ScrollLoader.prototype.reset=function(){var _self=this;_self.loading=false;_self.removeLoader();removeListeners(_self);if(_self.showMore){core.style.removeClass(_self.showMoreButton,'u-hide');_self.showLoadMoreButton=true;}else{drawLoader(_self);setScrollListeners(_self);}};/**
   * public method that can be used to initialte a re-append
   */common.ScrollLoader.prototype.contentLoaded=function(allContentLoaded){var _self=this;_self.loading=false;_self.hide();if(!_self.scrollListenersSet){setScrollListeners(_self);}if(allContentLoaded){_self.hideShowMore();}};/**
   * remove the loader
   *
   */common.ScrollLoader.prototype.removeLoader=function(){var _self=this;if(_self.element&&_self.element.parentNode){_self.element.parentNode.removeChild(_self.element);}_self.element=false;_self.hideShowMore();};/**
   * make the loader visible
   *
   */common.ScrollLoader.prototype.show=function(){var _self=this;_self.element.style.display='block';_self.loadingIndicator.style.display='block';};/**
   * hide the loader
   *
   */common.ScrollLoader.prototype.hide=function(){var _self=this;if(_self.loadingIndicator){_self.loadingIndicator.style.display='none';}};/**
   * hide the show more button
   *
   */common.ScrollLoader.prototype.hideShowMore=function(){var _self=this;core.style.addClass(_self.showMoreButton,'u-hide');};common.ScrollLoader.prototype.newLoader=function(){var _self=this;if(!_self.element){drawLoader(_self);}};/**
   * delegate will call this on the scroll loader when it has finished
   * loading data and adding this data to the view.
   */common.ScrollLoader.prototype.completedDataLoad=function(){var _self=this;_self.loading=false;_self.removeLoader();};})(PULSE.app.common,PULSE.core,PULSE.app.templates);(function(app,core,common){'use strict';var CLASS={MODAL_OPEN:'is-open',MODAL_CLOSED:'is-closed',SCROLL_DISABLED:'u-body-no-scroll-modal'};/**
   * sets default config values in case they aren't passed in from the modal config object
   * @param {Object} config object containing config key/values
   */var _setDefaults=function _setDefaults(config){if(!config.cookieExpiry){config.cookieExpiry=21;}if(!config.container){document.querySelector('.js-modal');}if(config.useCookies!==undefined&&!config.useCookies){config.useCookies=false;}else{config.useCookies=true;}return config;};/**
   * sets cookie to expire in a certain amount of days
   * @param {Object} cookieInfo object containing cookieName and expiry
   */var _setCookie=function _setCookie(cookieInfo){core.localStorage.setStorage(cookieInfo.name,'true',cookieInfo.expiry,true);};/**
   * checks if there is no cookie i.e. the user has never visited the page and launches the modal if this is the case
   */var _cookieCheck=function _cookieCheck(){var _self=this;var modalSeen=core.localStorage.getStorage(_self.cookieInfo.name,true)||false;if(!modalSeen){_setCookie(_self.cookieInfo);_self.open();}};/**
   * Info modal constructor - common file being used for both charity-modal and greatest-xi
   * @constructor
   * @param {Object} config - The modal config
   */common.InfoModal=function(config){var _self=this;_self.config=_setDefaults(config);_self.container=_self.config.container;_self.modalCloseButtons=_self.config.container.querySelectorAll('.js-close');_self.infoButton=_self.config.infoButton||'';_self.body=document.querySelector('body');_self.modalWrapper=_self.config.container.querySelector('.js-modal-wrapper');_self.setListeners();if(_self.config.useCookies){_self.cookieInfo={expiry:_self.config.cookieExpiry,name:_self.config.cookieName};_cookieCheck.call(_self);}};/**
   * Listens for click events to open and close the modal
   */common.InfoModal.prototype.setListeners=function(){var _self=this;if(_self.modalCloseButtons.length){for(var i=0;i<_self.modalCloseButtons.length;i++){_self.modalCloseButtons[i].addEventListener('click',_self.close.bind(_self));}}if(_self.infoButton){_self.infoButton.addEventListener('click',function(){_self.open();});}_self.modalWrapper.addEventListener('click',function(evt){if(evt.target!==this){return;}_self.close();});};/**
   * Closes the modal enables scroll
   */common.InfoModal.prototype.close=function(){var _self=this;common.Helpers.removeClassIfExists(_self.container,CLASS.MODAL_OPEN);core.style.addClass(_self.container,CLASS.MODAL_CLOSED);common.Helpers.removeClassIfExists(_self.body,CLASS.SCROLL_DISABLED);};/**
   * Opens the modal disables scroll
   */common.InfoModal.prototype.open=function(){var _self=this;common.Helpers.removeClassIfExists(_self.container,CLASS.MODAL_CLOSED);core.style.addClass(_self.container,CLASS.MODAL_OPEN);core.style.addClass(_self.body,CLASS.SCROLL_DISABLED);};})(PULSE.app,PULSE.core,PULSE.app.common);(function(common){var OBSERVER_CONFIG={root:null,// default to browser viewport
rootMargin:'0px',threshold:0.25};/**
   * create a global intersection observer, once widgets have loaded and set up event listeners
   * they can register for events through this observer
   */common.GlobalIntersectionObserver=new IntersectionObserver(function(elementsToActivate){var activationEvent=new Event(common.event.INTERSECTION.ACTIVATE);elementsToActivate.forEach(function(element){if(element.isIntersecting){element.target.dispatchEvent(activationEvent);common.GlobalIntersectionObserver.unobserve(element.target);}});},OBSERVER_CONFIG);})(PULSE.app.common);(function(common,core){var initialisedElements=[];var IMAGE_ATTR='data-image-src';var LOADED_CLASS='loaded';/**
   * Given a picture element lazy load the srcset and the img tag when the element
   * comes into view with a nice animation
   * @param  {HTMLPictureElement} pictureElement the picture element
   * @constructor
   */common.LazyPictureElement=function(pictureElement){if(!pictureElement||initialisedElements.indexOf(pictureElement)>-1){return;}initialisedElements.push(pictureElement);this.pictureElement=pictureElement;this.mainImage=this.pictureElement.querySelector('img');if(!this.mainImage){return;}this.sourceElements=[].slice.call(this.pictureElement.querySelectorAll('source'));common.GlobalIntersectionObserver.observe(this.pictureElement);this.pictureElement.addEventListener(common.event.INTERSECTION.ACTIVATE,_onPictureActivated.bind(this));};/**
   * callback invoked when a picture element comes into view
   */var _onPictureActivated=function _onPictureActivated(){var _self=this;_self.sourceElements.forEach(function(sourceElement){var imageURL=sourceElement.getAttribute(IMAGE_ATTR)||'';sourceElement.setAttribute('srcset',imageURL.trim());});var imageURL=_self.mainImage.getAttribute(IMAGE_ATTR)||'';_self.mainImage.setAttribute('src',imageURL.trim());_self.mainImage.onload=function(){core.style.addClass(_self.pictureElement,LOADED_CLASS);};};// Init pictures already in the page
[].forEach.call(document.querySelectorAll('.js-lazy-picture'),function(picture){new common.LazyPictureElement(picture);});})(PULSE.app.common,PULSE.core);(function(app,common,core){'use strict';var MOBILE_NAV='.js-mobile-nav';var MOBILE_NAV_BUTTON='js-mobile-nav-btn';var DROPDOWN_BUTTON='js-dropdown-btn';var DROPDOWN_BACK_BUTTON='js-back-btn';var DROPDOWN_OPEN_CLASS='dropdown-is-open';var MOBILE_NAV_OPEN_CLASS=common.constants.Classes.BODY_NO_SCROLL;var OPEN_CLASS=common.constants.Classes.IS_OPEN;var ACTIVE_CLASS=common.constants.Classes.IS_ACTIVE;app.MobileNavigation=function(container){var _self=this;_self.container=container;_self.list=container.querySelector(MOBILE_NAV);_self.dropDownButtons=container.querySelectorAll(".".concat(DROPDOWN_BUTTON));_self.button=container.querySelector(".".concat(MOBILE_NAV_BUTTON));common.addAriaClickListener(_self.container,_self.delegateEvent.bind(_self));};app.MobileNavigation.prototype.delegateEvent=function delegateEvent(event){var _self=this;if(event.target.classList.contains(MOBILE_NAV_BUTTON)){_self.toggleMenu();}if(event.target.classList.contains(DROPDOWN_BACK_BUTTON)){_self.toggleDropdown(event.target.parentElement.parentElement);}if(event.target.classList.contains(DROPDOWN_BUTTON)){core.style.toggleClass(event.target,OPEN_CLASS);var openDropdowns=_self.list.querySelectorAll(".".concat(DROPDOWN_BUTTON," + .").concat(OPEN_CLASS));[].slice.call(openDropdowns,_self.toggleDropdown);_self.toggleDropdown(event.target.nextElementSibling);}};app.MobileNavigation.prototype.toggleMenu=function toggleMenu(){var _self=this;core.style.toggleClass(_self.list,OPEN_CLASS);core.style.toggleClass(_self.button,ACTIVE_CLASS);core.style.toggleClass(document.body,MOBILE_NAV_OPEN_CLASS);};app.MobileNavigation.prototype.toggleDropdown=function toggleDropdown(dropdown){var _self=this;core.style.toggleClass(dropdown,OPEN_CLASS);dropdown.getAttribute('aria-expanded')==='true'?dropdown.setAttribute('aria-expanded',false):dropdown.setAttribute('aria-expanded',true);dropdown.getAttribute('aria-hidden')==='true'?dropdown.setAttribute('aria-hidden',false):dropdown.setAttribute('aria-hidden',true);var openDropdowns=_self.list.querySelectorAll(".".concat(DROPDOWN_BUTTON," + .").concat(OPEN_CLASS));if(!openDropdowns.length){core.style.removeClass(_self.list,DROPDOWN_OPEN_CLASS);return;}core.style.addClass(_self.list,DROPDOWN_OPEN_CLASS);};var widget=document.querySelector("[data-widget='mobile-navigation']");if(widget){widget=new app.MobileNavigation(widget);}})(PULSE.app,PULSE.app.common,PULSE.core);(function(app,common,core){'use strict';var SIDEBAR_BUTTON='js-sidebar-btn';var OPEN_CLASS='is-open';var BLURRED_CLASS='u-blurred';var MAIN_BODY_CLASS='js-body-content';var NO_SCROLL_CLASS=common.constants.Classes.BODY_NO_SCROLL;app.SidebarNavigation=function(container){var _self=this;_self.sidebar=container;_self.topNavHamburger=document.querySelector(".".concat(SIDEBAR_BUTTON));_self.mainBodyElement=document.querySelector(".".concat(MAIN_BODY_CLASS));common.addAriaClickListener(_self.sidebar,_self.delegateEvent.bind(_self));common.addAriaClickListener(_self.topNavHamburger,_self.delegateEvent.bind(_self));};app.SidebarNavigation.prototype.delegateEvent=function delegateEvent(event){var _self=this;if(event.target.classList.contains(SIDEBAR_BUTTON)){core.style.toggleClass(event.target,OPEN_CLASS);_self.toggleSidebar();}};app.SidebarNavigation.prototype.toggleSidebar=function toggleSidebar(){var _self=this;//toggle no scroll class on sidebar
core.style.toggleClass(document.body,NO_SCROLL_CLASS);// Toggle open class on the sidebar
core.style.toggleClass(_self.sidebar,OPEN_CLASS);// Toggle blur class on main menu
core.style.toggleClass(_self.sidebar.previousElementSibling,BLURRED_CLASS);// Toggle blur class on top nav (hack warning)
core.style.toggleClass(_self.sidebar.previousElementSibling.previousElementSibling,BLURRED_CLASS);// Toggle blur class on main body
core.style.toggleClass(_self.mainBodyElement,BLURRED_CLASS);_self.sidebar.getAttribute('aria-expanded')==='true'?_self.sidebar.setAttribute('aria-expanded',false):_self.sidebar.setAttribute('aria-expanded',true);_self.sidebar.getAttribute('aria-hidden')==='true'?_self.sidebar.setAttribute('aria-hidden',false):_self.sidebar.setAttribute('aria-hidden',true);};var widget=document.querySelector("[data-widget='sidebar-navigation']");if(widget){widget=new app.SidebarNavigation(widget);}})(PULSE.app,PULSE.app.common,PULSE.core);(function(app,core,common){'use strict';var privacyMessage;var EXPIRY=21;// expire in 21 days
var checkPrivacyPolicy=function checkPrivacyPolicy(widget){var cookie;cookie=core.localStorage.getStorage('icc-banner',true);if(!cookie){//setup new cookie
displayPPMessage(widget);}};var displayPPMessage=function displayPPMessage(widget){if(widget&&window.matchMedia('(min-width: '+app.measurements.tablet+'px)').matches||_isAndroid()){core.style.addClass(widget,'u-show');core.style.addClass(document.body,'mobile-banner-show');var button=widget.querySelector('.js-mobile-banner-close');var articleHeader=document.querySelector('[data-widget="article-header"]');if(articleHeader){core.style.addClass(articleHeader,'article-header--with-cookie-notice');}if(button){button.addEventListener('click',function(e){core.localStorage.setStorage('icc-banner','accepted',EXPIRY,true);core.style.removeClass(widget,'u-show');core.style.removeClass(document.body,'mobile-banner-show');if(articleHeader){core.style.removeClass(articleHeader,'article-header--with-cookie-notice');}});}}};/**
   * _isAndroid
   * @returns {Boolean} returns true if the userAgent indicates the device is running Android.
   */var _isAndroid=function _isAndroid(){var userAgent=navigator.userAgent.toLowerCase();var isAndroid=userAgent.indexOf('android')>-1;return isAndroid?true:false;};common.dropDownPromo=function(widget){checkPrivacyPolicy(widget);};var widgets=document.querySelectorAll("[data-widget='mobile-banner']");Array.prototype.forEach.call(widgets,function(widget){new common.dropDownPromo(widget,{});});})(PULSE.app,PULSE.core,PULSE.app.common);(function(common){common.Notifications=function(){// Taken from: https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API
// Let's check if the browser supports notifications
if(!('Notification'in window)){return;}if(Notification.permission===common.constants.NOTIFICATIONS_PERMISSION.GRANTED){// Let's check whether notification permissions have already been granted
common.event.dispatch(common.event.NOTIFICATIONS.SEND_PERMISSION);}else if(Notification.permission!==common.constants.NOTIFICATIONS_PERMISSION.DENIED){// Otherwise, we need to ask the user for permission
Notification.requestPermission(function(permission){if(permission===common.constants.NOTIFICATIONS_PERMISSION.GRANTED){common.event.dispatch(common.event.NOTIFICATIONS.SEND_PERMISSION);}});}};var widgets=document.querySelectorAll('[data-widget="notifications"]');Array.prototype.forEach.call(widgets,function(widget){new common.Notifications(widget);});})(PULSE.app.common);(function(app,common,core){// Default configuration for Intersection Observer
var OBSERVER_CONFIG={root:null,// default to browser viewport
rootMargin:'0px',threshold:0.1};// Holds the intersecting components URLs once they have been successfully tracked
var trackedUrls=[];/**
   * Class that defines the behaviour of an object that becomes active
   * upon entering the viewport
   *
   * @param {HTMLElement} container the element that should be observed
   * @constructor
   */common.ImpressionTracking=function(container){var _self=this;_self.container=container;_self.listenForTrackingComponents();};/**
   * Calls the intersection observer and tells it to track this component
   * and listens for the activation event from the intersection observer
   */common.ImpressionTracking.prototype.listenForTrackingComponents=function(){var _self=this;_self.observer=new IntersectionObserver(_self.onActivate.bind(_self),OBSERVER_CONFIG);_self.observer.observe(_self.container);};/**
   * Invoked by the Intersection Observer when components becomes visible
   * and sends components to be tracked
   *
   * @param  {Object} entries list of components found by the intersection observer
   */common.ImpressionTracking.prototype.onActivate=function(entries){var _self=this;Array.prototype.forEach.call(entries,function(el){if(el.isIntersecting){_self.createDomElement(el);_self.observer.unobserve(_self.container);}});};/**
   * Collects the tracking URL from the component
   * Checks that a URL exists and creates a DOM element with the tracking URL
   *
   * @param  {DOMElement} el the HTML element of the component that is in view and is to be tracked
   */common.ImpressionTracking.prototype.createDomElement=function(el){var _self=this;var trackingUrl=el.target.getAttribute('data-tracking-url');if(trackingUrl&&trackedUrls.indexOf(trackingUrl)===-1){var trackedDomElement=document.createElement("img");trackedDomElement.src=trackingUrl;_self.appendElementToWidget(trackedDomElement);trackedUrls.push(trackingUrl);}};/**
   * Adds class to newly created DOM element and appends it to parent widget
   *
   * @param  {DOMElement} newElement The dynamically created DOM element
   */common.ImpressionTracking.prototype.appendElementToWidget=function(newElement){var _self=this;core.style.addClass(newElement,'impression-pixel');_self.container.appendChild(newElement);};var widgets=document.querySelectorAll('[data-widget="impression-tracker"]');for(var i=0;i<widgets.length;i++){var widget=new common.ImpressionTracking(widgets[i]);};})(PULSE.app,PULSE.app.common,PULSE.core);(function(app,common,core){'use strict';var STYLE_CLS_MODIFIERS={ACTIVE:'--active'};/**
   * Create bindings for the widget coming into the view
   * @param {NodeList} elements elements to observe
   * @constructor
   */app.ObserveElements=function(elements){var _self=this;_self.elements=elements;_self.setListeners();};/**
   * Add the activated class to the widget once it comes into view
   */app.ObserveElements.prototype.setListeners=function(){var _self=this;for(var i=0;i<_self.elements.length;i++){_self.elements[i].addEventListener(common.event.INTERSECTION.ACTIVATE,function(event){var baseCls=event.target.getAttribute('data-observe');core.style.addClass(event.target,baseCls+STYLE_CLS_MODIFIERS.ACTIVE);if(event.target.hasAttribute('data-parallax')&&window.innerWidth>=app.measurements.tablet){var parentElement=event.target;var parallaxElements=parentElement.querySelectorAll('.js-parallax');Array.prototype.forEach.call(parallaxElements,function(element){new app.Parallax(element,parentElement);});}});common.GlobalIntersectionObserver.observe(_self.elements[i]);}};// init widget
var widgets=document.querySelectorAll('[data-observe]');new app.ObserveElements(widgets);})(PULSE.app,PULSE.app.common,PULSE.core);(function(app,core){'use strict';var CLOCKWISE='clockwise';var ANTI_CLOCKWISE='anti-clockwise';var DEGREES=180;var DIRECTION_RATE=2;var MATRIX={INDEX_A:0,// 0.866025
INDEX_B:1,// 0.5
INDEX_C:2,// -0.5
INDEX_D:3// 0.866025
};/**
   * Parallax function for updating transform values on elements based on scroll position
   * @param {NodeList} element element to observe
   * @param {HTMLElement} parentElement the parent element widget
   * @constructor
   */app.Parallax=function(element,parentElement){var _self=this;_self.element=element;_self.parentElement=parentElement;_self.computedStyle=window.getComputedStyle(_self.element,null);_self.direction=_self.element.getAttribute('data-parallax-direction');_self.options={};// parallax is only suitable for non-retina screens
if(window.devicePixelRatio<=1){// Rotate config
if(_self.element.hasAttribute('data-parallax-rotate')){_self.options.rotate=true;_self.options.rotateInitialValue=_getCurrentRotation(_self.computedStyle);}_self.setListeners();}};/**
   * Listens for scroll events on the Y axis
   */app.Parallax.prototype.setListeners=function(){var _self=this;var lastKnownScrollPosition=0;var ticking=false;window.addEventListener('scroll',function(){lastKnownScrollPosition=window.scrollY;if(!ticking){window.requestAnimationFrame(function(){if(core.dom.isElementInView(_self.parentElement,false)){_setScrollPosition.call(_self,lastKnownScrollPosition);}ticking=false;});ticking=true;}});};/**
   * Based on the user's scroll position set the transform value
   * @param  {Number} scrollPos The user's scroll position
   */var _setScrollPosition=function _setScrollPosition(scrollPos){var _self=this;if(_self.options.rotate){var value=parseInt(_self.options.rotateInitialValue+scrollPos/_getDirection(DIRECTION_RATE,_self.direction));_self.element.style.transform='rotate( '+value+'deg ) translate3d(0, 0, 0)';}};/**
   * Gets the current rotation value (in degrees)
   * @param  {Object} computedStyle The computed styles of the widget element
   * @return {Number}               Returns the rotation value
   */var _getCurrentRotation=function _getCurrentRotation(computedStyle){var transform=computedStyle.getPropertyValue('-webkit-transform')||computedStyle.getPropertyValue('-moz-transform')||computedStyle.getPropertyValue('-ms-transform')||computedStyle.getPropertyValue('-o-transform')||computedStyle.getPropertyValue('transform');if(transform==='none'){return;}var values=transform.split('(')[1],values=values.split(')')[0],values=values.split(',');var matrixA=values[MATRIX.INDEX_A];var matrixB=values[MATRIX.INDEX_B];var radians=Math.atan2(matrixB,matrixA);var angle=Math.round(radians*(DEGREES/Math.PI));return angle;};/**
   * Gets the direction to rotate the element
   * @param  {Number} value     The rate at which to rotate the element
   * @param  {String} direction Is either Clockwise or Anti-clockwise
   * @return {Number}           Returns either a negative or positive version of the degree
   */var _getDirection=function _getDirection(value,direction){if(direction===CLOCKWISE){return value;}else if(direction===ANTI_CLOCKWISE){return-value;}return value;};})(PULSE.app,PULSE.core);/*globals PULSE, PULSE.app*/(function(app,common,core){var createModal=function createModal(_self){var modal=document.getElementById('photo-modal');if(!modal){_self.modalElem=document.createElement('div');_self.modalElem.setAttribute('id','photo-modal');_self.modalElem.setAttribute('class','photo-modal');_self.modalElem.innerHTML='<a href="#" class="close js-photo-close"><svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/resources/'+window.RESOURCE_VERSION+'/i/svg-output/icons.svg#icn-close"></use></svg></a>';document.body.appendChild(_self.modalElem);setControlEventListeners(_self);}};var setControlEventListeners=function setControlEventListeners(_self){// Close modal if escape key is pressed
document.addEventListener('keydown',function(evt){if(evt.which==27){close(_self);}});// Add event for close button
var closeBtn=_self.modalElem.querySelector('.js-photo-close');if(closeBtn){closeBtn.addEventListener('click',function(e){e.preventDefault();close(_self);});}};var setTriggerEventListeners=function setTriggerEventListeners(_self,dependencies){var triggers=dependencies||document.querySelectorAll('[data-photo-modal]');Array.prototype.forEach.call(triggers,function(el){el.addEventListener('click',function(e){e.preventDefault();open(_self,this);});});};var open=function open(_self,elem){var photoSources=elem.getAttribute('data-photo-sources');var photoUrl=elem.getAttribute('data-photo-url');if(!_self.modalImage&&photoUrl){_self.modalImage=document.createElement('img');_self.modalImage.setAttribute('class','js-modal-photo');_self.modalElem.appendChild(_self.modalImage);}if(photoUrl){_self.modalImage.setAttribute('src',photoUrl);}if(photoSources){if(typeof _self.modalImage!=='undefined'){_self.modalImage.remove();}_self.modalImage=app.common.templating.render({picture:JSON.parse(photoSources.replace(/'/g,'"'))},'photo_modal_picture_element',true);_self.modalElem.appendChild(_self.modalImage);}core.style.addClass(_self.modalElem,'is-open');};var close=function close(_self){core.style.removeClass(_self.modalElem,'is-open');};/**
  * constructor for the photo modal
  *
  * @constructor
  */var PhotoModal=function PhotoModal(){var _self=this;var dependencies=document.querySelectorAll('[data-photo-modal]');if(dependencies.length){createModal(_self);setTriggerEventListeners(_self,dependencies);}};/**
   * Adds a button which will trigger the opening of a modal
   *
   * @param {DOMElement} elem Element which will trigger the modal
   */PhotoModal.prototype.addTrigger=function(elem){var _self=this;// create modal if it doesn't exist yet
if(!_self.modalElem){createModal(_self);}if(elem){elem.addEventListener('click',function(e){e.preventDefault();open(_self,this);});}};common.photoModal=new PhotoModal();})(PULSE.app,PULSE.app.common,PULSE.core);// globals PULSE, PULSE.core
(function(app,common){'use strict';/**
  * Returns the correct photo bucket on S3 depending on which microsite you are
  *
  * @returns {String} bucket S3 bucket name
  */common.getPhotoBucket=function(){var bucket='';switch(app.common.isMicroSite()){case'/champions-trophy':bucket='champions-trophy-2017';break;case'/womens-world-cup':bucket='wwc-2017';break;default:bucket='';}if(app.environment.domain.includes('worldtwenty20')){bucket='women-worldt20-2016';}return bucket;};app.playerImage=function(element){var _self=this;_self.element=element;_self.playerId=_self.element.getAttribute('data-player');_self.imageSize=_self.element.getAttribute('data-size')||'480x480';_self.imgExtension=_self.element.getAttribute('data-extension');_self.matchType=_self.element.getAttribute('data-match-type');_self.isSidebar=_self.element.getAttribute('data-sidebar')||'false';common.setPlayerImageLoader(_self.playerId,_self.imageSize,_self.element,_self.imgExtension,_self.matchType,_self.isSidebar);};app.setPlayerImages=function(container){if(container){var widgets=container.querySelectorAll('[data-widget="player-image"]');for(var i=0;i<widgets.length;i++){new app.playerImage(widgets[i],{});}}};app.setPlayerImages(document);})(PULSE.app,PULSE.app.common);(function(common,core,app){var _REACTIONS_PATH;var CLAP_COUNTER='.js-clap-counter';var USER_CLAP_COUNTER='.js-user-clap-counter';var CLAP_BUTTON='.js-hit-for-six-button';var HAS_CLAPPED_CLS='has-clapped';var MAX_CLAPS_MADE_CLS='max-claps-made';var VISIBLE_CLS='hit-for-six--visible';var ENTITY_LIMIT=1;var CLAP_ANIM_PAUSE_TIME=1500;var CLAP_INCREASE_NO=983;var REACTION_CONTENT_TYPE={BLOG_POST:'BLOG_POST',VIDEO:'VIDEO',MATCH_EVENT:'MATCH_EVENT',TEXT:'TEXT',PLAYLIST:'PLAYLIST',PROMO:'PROMO'};var REACTIONS_PATH=(_REACTIONS_PATH={},_defineProperty(_REACTIONS_PATH,REACTION_CONTENT_TYPE.BLOG_POST,function(id,parentId){return"blog/".concat(parentId,"/post/").concat(id);}),_defineProperty(_REACTIONS_PATH,REACTION_CONTENT_TYPE.VIDEO,function(id){return"video/".concat(id);}),_defineProperty(_REACTIONS_PATH,REACTION_CONTENT_TYPE.MATCH_EVENT,function(id,parentId){return"match/".concat(parentId,"/event/").concat(id);}),_defineProperty(_REACTIONS_PATH,REACTION_CONTENT_TYPE.TEXT,function(id){return"text/".concat(id);}),_defineProperty(_REACTIONS_PATH,REACTION_CONTENT_TYPE.PLAYLIST,function(id){return"playlist/".concat(id);}),_defineProperty(_REACTIONS_PATH,REACTION_CONTENT_TYPE.PROMO,function(id){return"promo/".concat(id);}),_REACTIONS_PATH);var _getClapValueFromResponse=function _getClapValueFromResponse(data,displayCount){if(data.content&&data.content.length>0){var count=parseInt(data.content[0].count);return count>=displayCount?count:displayCount;}return displayCount;};var _renderCountNumber=function _renderCountNumber(count,element){element.innerText=count.toLocaleString('en');return count;};var _clapAnimationEndCallback=function _clapAnimationEndCallback(){var _self=this;_self.hasClapped=false;_self.isClapping=false;core.style.removeClass(_self.container,HAS_CLAPPED_CLS);_self.userClapCounter.removeEventListener('animationend',_clapAnimationEndCallback);};var unPauseClapCounter=function unPauseClapCounter(){var _self=this;_self.userClapCounter.style.animationPlayState='running';_self.isClapping=false;};app.HitForSix=function(container){var _self=this;_self.container=container;_self.clapCounter=_self.container.querySelector(CLAP_COUNTER);_self.userClapCounter=_self.container.querySelector(USER_CLAP_COUNTER);_self.clapButton=_self.container.querySelector(CLAP_BUTTON);_self.hasClapped=false;_self.clapCount=0;// Total from the API
_self.currentUserClaps=0;// Total user claps
_self.maxClaps=6;_self.config={type:_self.container.getAttribute('data-reaction-type'),id:_self.container.getAttribute('data-reaction-id'),parentId:_self.container.getAttribute('data-reaction-parent-id')// future-proofing here for if they want to include this in blogs/match events
};_self.params={action:'clap',limit:ENTITY_LIMIT};/**
     * Initial calls.
     */_self.getTotalCount();_self.addListeners();};/**
   * Send a Get request to retrieve the total clap numbers.
   */app.HitForSix.prototype.getTotalCount=function(){var _self=this;var requestConfig={url:"".concat(app.environment.reactionsApi,"/").concat(REACTIONS_PATH[_self.config.type](_self.config.id,_self.config.parentId),"?").concat(core.url.buildQueryString(_self.params)),method:'GET',callback:_self.setCount,target:this};core.data.manager.add(requestConfig);};/**
   * Changes the count response to a number and sets it as clapCount
   * @param {*} data the returned data from getTotalCount.
   */app.HitForSix.prototype.setCount=function(data){var _self=this;_self.clapCount=_getClapValueFromResponse(data,_self.clapCount);_self.clapCount=_self.clapCount+CLAP_INCREASE_NO;_renderCountNumber(_self.clapCount,_self.clapCounter);core.style.addClass(_self.container,VISIBLE_CLS);};/**
   * Adds an click listener to the clap button, calling addClap
   */app.HitForSix.prototype.addListeners=function(){var _self=this;_self.clapButton.addEventListener('click',_self.onClap.bind(_self));};// Handles click event on trigger button - hits a limit at 6 events
app.HitForSix.prototype.onClap=function(){var _self=this;_self.doClap();// If we're at the max number of allowed claps show the complete state
if(_self.currentUserClaps===_self.maxClaps){core.style.addClass(_self.container,MAX_CLAPS_MADE_CLS);//
}};// Handle the clap event - updates the total and shows in UI
app.HitForSix.prototype.doClap=function(){var _self=this;var timer=null;_self.clapCount=_self.clapCount+1;// update the total clap count
_self.clapCounter.innerText=_self.clapCount.toLocaleString('en');_self.currentUserClaps++;// update the number of claps a user has made
_renderCountNumber(_self.currentUserClaps,_self.userClapCounter);// update disc animation
_self.addClap();// log clap event on server
if(!_self.hasClapped){_self.hasClapped=true;core.style.addClass(_self.container,HAS_CLAPPED_CLS);// show disc animation
_self.userClapCounter.addEventListener('animationend',_clapAnimationEndCallback.bind(_self));}if(_self.isClapping){_self.userClapCounter.style.animationPlayState='paused';clearTimeout(timer);timer=setTimeout(unPauseClapCounter.bind(_self),CLAP_ANIM_PAUSE_TIME);}else{_self.isClapping=true;timer=setTimeout(unPauseClapCounter.bind(_self),CLAP_ANIM_PAUSE_TIME);}};app.HitForSix.prototype.updateClapTotal=function(data){var _self=this;var updatedTotal=_getClapValueFromResponse(data,_self.clapCount);_renderCountNumber(updatedTotal,_self.clapCounter);};/**
   * Sends a post request to increase total number of claps
   */app.HitForSix.prototype.addClap=function(){var _self=this;var requestBody={itemId:"".concat(REACTIONS_PATH[_self.config.type](_self.config.id,_self.config.parentId)),reactionType:_self.params.action};fetch(app.environment.reactionsApi,{method:'post',body:JSON.stringify(requestBody)}).then(function(response){return response.json();})["catch"](function(error){console.error('Error:',error);});};var widgets=document.querySelectorAll('[data-widget="hit-for-six"]');for(var i=0;i<widgets.length;i++){new app.HitForSix(widgets[i]);}})(PULSE.app.common,PULSE.core,PULSE.app);/*globals PULSE, PULSE.app*/(function(app,common,core){/* PRIVATE METHODS */ /**
   * @namespace common.slider.private
   */ /**
    * Checks whether a node element has an ancestor with a specific class
    * @param  {HTMLElement} element Node element to find the ancestor for
    * @param  {String} cls     Class to check against
    * @return {HTMLElement}         The ancestor
    */var findAncestor=function findAncestor(element,cls){var target=element;while((target=target.parentNode)&&!core.style.hasClass(target,cls)){// Empty
}return target;};var setDefaults=function setDefaults(config){if(!config.wrap){config.wrap=document.querySelector('.js-gallery-modal');}if(!config.viewport){config.viewport=config.wrap.querySelector('.js-viewport');}if(!config.controls){config.controls={};}if(!config.controls.next){config.controls.next=config.wrap.querySelector('.js-nav-next');}if(!config.controls.previous){config.controls.previous=config.wrap.querySelector('.js-nav-prev');}if(!config.slideList){config.slideList=config.wrap.querySelector('.js-slide-list');}if(!config.slides){config.slides=config.wrap.querySelectorAll('.js-slide');}if(!config.slideRate){config.slideRate=50;// pixels to move per FPS
}if(!config.thumbSlideRate){config.thumbSlideRate=10;// pixels to move per FPS
}if(!config.interval){config.interval=5000;}if(!config.auto){config.auto=false;}if(!config.startIndex){config.startIndex=0;}if(!config.hideClass){config.hideClass='is-hidden';}if(config.thumbsWrap&&!config.thumbsType){config.thumbsType='image';}if(!config.thumbClass){config.thumbClass='thumbnail';}return config;};/**
   * Handles the click event when the fullscreen button is clicked
   * @param  {Event} event Event object
   * @param  {Object scope reference to 'this'
   */var handleExpand=function handleExpand(event,scope){event.preventDefault();scope.config.currentSlide=findAncestor(event.target,'js-image-container');scope.toggleExpand();scope.config.controls.next.focus();};var bindControls=function bindControls(scope){scope.config.controls.previous.addEventListener('click',function(e){e.preventDefault();scope.config.slidePrev=true;scope.slidePrev();});scope.config.controls.next.addEventListener('click',function(e){e.preventDefault();scope.config.slideNext=true;scope.slideNext();});if(scope.config.controls.expand){// used to handle multiple expand elements that also set the current image on expand
if(scope.config.controls.expand.length>1){for(var i=0;i<scope.config.controls.expand.length;i++){scope.config.controls.expand[i].addEventListener('click',function(event){handleExpand(event,scope);});}}else{scope.config.controls.expand.addEventListener('click',function(e){e.preventDefault();scope.toggleExpand();});}}if(scope.config.controls.autoStart&&scope.config.controls.autoStop){scope.config.controls.autoStart.addEventListener('click',function(e){e.preventDefault();scope.startAuto();});scope.config.controls.autoStop.addEventListener('click',function(e){e.preventDefault();scope.stopAuto();});}};var buildViewport=function buildViewport(scope){var newViewport=false;if(!scope.config.viewport){newViewport=true;scope.config.viewport=document.createElement('div');core.style.addClass(scope.config.viewport,'slider-viewport');}scope.config.viewportList=document.createElement('ul');core.style.addClass(scope.config.viewportList,'slider-viewport__list');scope.config.viewport.appendChild(scope.config.viewportList);if(newViewport){scope.config.wrap.appendChild(scope.config.viewport);}bindViewport(scope);};var bindViewport=function bindViewport(scope){var timeout;var checkScroll=function checkScroll(){clearTimeout(timeout);timeout=setTimeout(function(){var scrollDiff=Math.abs(scope.config.viewport.scrollLeft-scope.config.viewport.offsetWidth);if(scrollDiff>30){if(scope.config.viewport.scrollLeft>scope.config.viewport.offsetWidth){scope.slideNext();}else{scope.slidePrev();}}else{scope.updateViewport(scope.config.currentSlide);}scope.config.viewport.removeEventListener('scroll',checkScroll);},50);};scope.config.viewportList.addEventListener('touchstart',function(e){startPos=scope.config.viewport.scrollLeft;scope.config.viewport.addEventListener('scroll',checkScroll);});};var bindResize=function bindResize(scope){var timeout;var checkResize=function checkResize(){clearTimeout(timeout);timeout=setTimeout(function(){scope.updateViewport(scope.config.currentSlide);},200);};window.addEventListener('resize',checkResize);};var buildThumbnails=function buildThumbnails(scope){scope.config.thumbnails=Array.prototype.map.call(scope.config.slides,function(slide,index){slide.indexVal=index;var thumb=document.createElement('li');core.style.addClass(thumb,scope.config.thumbClass);switch(scope.config.thumbsType){case'image':thumb.appendChild(slide.querySelector('picture').cloneNode(true));break;case'index':thumb.innerHTML=index+1;}thumb.addEventListener('click',function(){scope.slideToIndex(index);});scope.config.thumbsWrap.appendChild(thumb);return thumb;});};var bindThumbControls=function bindThumbControls(scope){scope.config.thumbControls.left.addEventListener('click',function(e){e.preventDefault();scope.slideThumbsLeft();});scope.config.thumbControls.right.addEventListener('click',function(e){e.preventDefault();scope.slideThumbsRight();});};var setFullScreenPhoto=function setFullScreenPhoto(slide,data){var picElem=slide.querySelector('.js-picture-element');var picContent='';data.srcset.forEach(function(set){picContent+='<source srcset="'+set.src+'" media="'+(set.media?set.media:'')+'">';});var img=new Image();img.onload=function(){picContent+='<img src='+data.img+' class="thumbnail__image" alt="'+data.altDescription+'"/>';picElem.innerHTML=picContent;};img.src=data.img;};common.slider=function(config){'use strict';var _self=this;_self.config=setDefaults(config);// hide the slide list
// core.style.addClass( _self.config.slideList, _self.config.hideClass );
_self.config.currentSlide=_self.config.slides[_self.config.startIndex];_self.config.firstSlide=_self.config.slides[0];_self.config.lastSlide=_self.config.slides[_self.config.slides.length-1];_self.isViewportFullsize=false;_self.indexValue=_self.config.wrap.querySelector('.js-index');bindControls(_self);buildViewport(_self);bindResize(_self);if(_self.config.thumbsWrap){buildThumbnails(_self);if(_self.config.thumbControls){bindThumbControls(_self);}}_self.updateViewport(_self.config.currentSlide);if(_self.config.auto){_self.startAuto();}};common.slider.prototype.slidePrev=function(){var _self=this;var limit=0;function moveSlide(){var newPos=_self.config.viewport.scrollLeft-_self.config.slideRate;if(newPos<=limit){_self.config.viewport.scrollLeft=limit;cancelAnimationFrame(sliding);_self.updateViewport(_self.config.prevSlide);}else if(_self.config.slidePrev===true){_self.config.viewport.scrollLeft=newPos;requestAnimationFrame(moveSlide);}}var sliding=requestAnimationFrame(moveSlide);};common.slider.prototype.slideNext=function(){var _self=this;var limit=_self.config.viewport.offsetWidth*2-10;function moveSlide(){var newPos=_self.config.viewport.scrollLeft+_self.config.slideRate;if(newPos>=limit){_self.config.viewport.scrollLeft=limit;cancelAnimationFrame(sliding);_self.updateViewport(_self.config.nextSlide);}else if(_self.config.slideNext===true){_self.config.viewport.scrollLeft=newPos;requestAnimationFrame(moveSlide);}}var sliding=requestAnimationFrame(moveSlide);};common.slider.prototype.slideToIndex=function(targetIndex){var _self=this;if(_self.config.currentSlide.indexVal!==targetIndex){if(_self.config.currentSlide.indexVal<targetIndex){var newTarget=_self.config.currentSlide;newTarget.forceNext=_self.config.slides[targetIndex];_self.updateViewport(newTarget,'next');}else{var newTarget=_self.config.currentSlide;newTarget.forcePrev=_self.config.slides[targetIndex];_self.updateViewport(newTarget,'prev');}}};common.slider.prototype.startAuto=function(){var _self=this;if(!_self.autoPlaying){_self.autoPlaying=setInterval(function(){_self.slideNext();},_self.config.interval);core.style.toggleClass(_self.config.controls.autoStart,_self.config.hideClass);core.style.toggleClass(_self.config.controls.autoStop,_self.config.hideClass);}else{return'slider is already auto playing';}};common.slider.prototype.stopAuto=function(){var _self=this;if(_self.autoPlaying){clearInterval(_self.autoPlaying);_self.autoPlaying=false;core.style.toggleClass(_self.config.controls.autoStart,_self.config.hideClass);core.style.toggleClass(_self.config.controls.autoStop,_self.config.hideClass);}else{return'slider is not auto playing';}};common.slider.prototype.arrowKeyNav=function(e){var _self=this;_self.config.slidePrev=false;_self.config.slideNext=false;if(e.keyCode===39){_self.config.slideNext=true;_self.slideNext();_self.stopAuto();}else if(e.keyCode===37){_self.config.slidePrev=true;_self.slidePrev();_self.stopAuto();}else if(e.keyCode===27){_self.toggleExpand();}};common.slider.prototype.toggleExpand=function(){var _self=this;var keyListener=function keyListener(e){if(_self.isViewportFullsize){_self.arrowKeyNav(e);}};var blogEntryElem=_self.config.wrap.closest('.js-entry');if(core.style.hasClass(_self.config.wrap,'expanded')){_self.isViewportFullsize=false;core.style.removeClass(_self.config.wrap,'expanded');core.style.removeClass(document.getElementsByTagName('body')[0],'u-body-no-scroll');if(blogEntryElem){// make container static so gallery modal can be absolute in the blog
blogEntryElem.style.position='relative';}return;}_self.isViewportFullsize=true;core.style.addClass(_self.config.wrap,'expanded');core.style.addClass(document.getElementsByTagName('body')[0],'u-body-no-scroll');var fullscreenData=_self.config.currentSlide.getAttribute('data-fullscreen-data');if(fullscreenData){setFullScreenPhoto(_self.config.currentSlide,JSON.parse(fullscreenData));}if(!_self.keyEventListenerAdded){_self.keyEventListenerAdded=true;document.addEventListener('keyup',keyListener);}if(blogEntryElem){// make container static so gallery modal can be absolute in the blog
blogEntryElem.style.position='static';}_self.updateViewport(_self.config.currentSlide);};common.slider.prototype.updateViewport=function(target,slide){var _self=this;if(target){_self.config.currentSlide=target;}if(target.forcePrev){_self.config.prevSlide=target.forcePrev;target.forcePrev=false;_self.config.slidePrev=true;}else{_self.config.prevSlide=core.dom.getPreviousSiblings(_self.config.currentSlide)[0];if(!_self.config.prevSlide){_self.config.prevSlide=_self.config.lastSlide;}}if(target.forceNext){_self.config.nextSlide=target.forceNext;target.forceNext=false;_self.config.slideNext=true;}else{_self.config.nextSlide=core.dom.getNextSiblings(_self.config.currentSlide)[0];if(!_self.config.nextSlide){_self.config.nextSlide=_self.config.firstSlide;}}_self.config.viewportList.innerHTML='';_self.config.viewportList.appendChild(_self.config.prevSlide.cloneNode(true));_self.config.viewportList.appendChild(_self.config.currentSlide.cloneNode(true));_self.config.viewportList.appendChild(_self.config.nextSlide.cloneNode(true));_self.config.viewport.scrollLeft=_self.config.viewport.offsetWidth;if(slide==='next'){_self.slideNext(true);}else if(slide==='prev'){_self.slidePrev(true);}if(_self.config.thumbnails){_self.setActiveThumb(_self.config.currentSlide.indexVal);}_self.loadHighResImages();};common.slider.prototype.updateIndex=function(){var _self=this;var index=_self.config.currentSlide.getAttribute('data-photo-index');if(!index){return;}_self.indexValue.innerHTML=index;};common.slider.prototype.loadHighResImages=function(){_self=this;var array=[_self.config.prevSlide,_self.config.currentSlide,_self.config.nextSlide];array.forEach(function(element,key){var fullscreenData=element.getAttribute('data-fullscreen-data');if(fullscreenData&&element.dataset.imageLoaded!='true'){element.dataset.imageLoaded=true;setFullScreenPhoto(_self.config.viewportList.children[key],JSON.parse(fullscreenData));setFullScreenPhoto(element,JSON.parse(fullscreenData));}});if(_self.indexValue){_self.updateIndex();}};common.slider.prototype.setActiveThumb=function(activeIndex){var _self=this;Array.prototype.forEach.call(_self.config.thumbnails,function(thumb){core.style.removeClass(thumb,'is-active');});core.style.addClass(_self.config.thumbnails[activeIndex],'is-active');};common.slider.prototype.slideThumbsRight=function(direction){var _self=this;var getThumbWidth=function getThumbWidth(){var width=_self.config.thumbnails[0].offsetWidth;var marginLeft=parseInt(window.getComputedStyle(_self.config.thumbnails[0]).getPropertyValue('margin-left'));var marginRight=parseInt(window.getComputedStyle(_self.config.thumbnails[0]).getPropertyValue('margin-right'));return width+marginRight+marginLeft;};var startPos=_self.config.thumbsWrap.scrollLeft;var distance=getThumbWidth();var limit=_self.config.thumbnails.length*distance-_self.config.thumbsWrap.offsetWidth;function moveThumbs(){var newPos=_self.config.thumbsWrap.scrollLeft+=_self.config.thumbSlideRate;if(newPos>limit){_self.config.thumbsWrap.scrollLeft=limit;cancelAnimationFrame(slidingThumbs);}else if(newPos>=startPos+distance){_self.config.thumbsWrap.scrollLeft=newPos;cancelAnimationFrame(slidingThumbs);}else{_self.config.thumbsWrap.scrollLeft=newPos;requestAnimationFrame(moveThumbs);}}if(_self.config.thumbsWrap.scrollLeft<limit){var slidingThumbs=requestAnimationFrame(moveThumbs);}};common.slider.prototype.slideThumbsLeft=function(direction){var _self=this;var startPos=_self.config.thumbsWrap.scrollLeft;var distance=_self.config.thumbnails[0].offsetWidth;var limit=0;function moveThumbs(){var newPos=_self.config.thumbsWrap.scrollLeft-=_self.config.thumbSlideRate;if(newPos<limit){_self.config.thumbsWrap.scrollLeft=limit;cancelAnimationFrame(slidingThumbs);}else if(newPos<=startPos-distance){_self.config.thumbsWrap.scrollLeft=newPos;cancelAnimationFrame(slidingThumbs);}else{_self.config.thumbsWrap.scrollLeft=newPos;requestAnimationFrame(moveThumbs);}}if(_self.config.thumbsWrap.scrollLeft>limit){var slidingThumbs=requestAnimationFrame(moveThumbs);}};})(PULSE.app,PULSE.app.common,PULSE.core);// ( function( app, common ) {
//     'use strict';
//     /**
//      * _isJson - Helper function to identify if string is json or not.
//      * found at https://stackoverflow.com/a/33369954
//      *
//      * @param  {string} item    string item
//      * @return {boolean}        returns true or false
//      */
//     common.Helpers.isJson = function ( string ) {
//         var item = typeof string !== 'string' ?
//             JSON.stringify( string ) :
//             string;
//         try {
//             item = JSON.parse( string );
//         } catch ( error ) {
//             return false;
//         }
//         if ( typeof item === 'object' && item !== null ) {
//             return true;
//         }
//         return false;
//     };
//     /**
//      * Map user attributes from array to object
//      * This function expects an array of objects with a Name and Value param in them.
//      *
//      * @param  {array} userAttributes   array of objects
//      * @return {object}                 returns object of user attributes
//      */
//     common.Helpers.userAttributesToObject = function( userAttributes ) {
//         if ( !Array.isArray( userAttributes ) ) {
//             return false;
//         }
//         var result = {};
//         userAttributes.forEach( function( item ) {
//             result[ item.Name ] = common.Helpers.isJson( item.Value ) ? JSON.parse( item.Value ) : item.Value;
//         } );
//         return result;
//     };
//     /**
//      * Map user attributes from object to array
//      * This function expects an object and returns an array of objects with a Name and Value param in them.
//      *
//      * @param {object} userAttributes    object of user attributes
//      * @return  {array}   returns array of objects
//      */
//     common.Helpers.userAttributesToArray = function( userAttributes ) {
//         if ( !userAttributes || typeof( userAttributes ) !== 'object' ) {
//             return false;
//         }
//         var result = [];
//         Object.keys( userAttributes ).forEach( function( key ) {
//             result.push( { Name: key, Value: userAttributes[ key ] } );
//         } );
//         return result;
//     };
//     /**
//      * Build form dropdowns
//      *
//      * @param {HTMLElement} element wrapping element which contains the dropdowns
//      */
//     common.Helpers.buildFormDropdowns = function( element ) {
//         if ( !element ) {
//             return;
//         }
//         var dropdowns = element.querySelectorAll( '[data-widget="form-dropdown"]' );
//         for ( var i = 0; i < dropdowns.length; i++ ) {
//             new common.SsoFormDropdown( dropdowns[ i ] );
//         }
//     };
//     /**
//      * Get team full name based on the teamAbbr
//      *
//      * @param {string} abbr team abbreviation
//      * @return {string} abbr team abbreviation
//      */
//     common.Helpers.getSSOTeamFullName = function( abbr ) {
//         return common.constants.SSO_TEAMS_ABBR[ abbr ];
//     };
// } ( PULSE.app, PULSE.app.common ) );
// ( function( app, common, core ) {
//     'use strict';
//     /**
//      * Function that dispatches an event of a given type
//      *
//      * @param {String}     type    The type of the event
//      * @param {DOMElement} target  The target, or document, if the target is not specified
//      */
//     common.Helpers.dispatchEvent = function( type, target ) {
//         var event = new CustomEvent ( type, {
//             bubbles: true,
//             cancelable: false
//         } );
//         var eventTarget = target || document;
//         eventTarget.dispatchEvent( event );
//     };
//     /**
//      * Add listener to absolute positioned messages
//      *
//      * @param {HTMLElement} element widget where it applies
//      * @param {string} messageSelector js message selector
//      * @param {string} cssClass class if different from 'u-hide'
//      */
//     common.Helpers.setDismissMessageListener = function( element, messageSelector, cssClass ) {
//         var dismiss = element.querySelector( '.js-dismiss' );
//         if ( dismiss ) {
//             dismiss.addEventListener( 'click', function() {
//                 core.style.addClass( element.querySelector( messageSelector ), cssClass || common.constants.CLASS.HIDE );
//             } );
//         }
//     };
//     /**
//      * Add listener to the no-team promo to open the User Account
//      *
//      * @param {HTMLElement} container element containing the promo
//      */
//     common.Helpers.setNoTeamListeners = function( container ) {
//         var link = container.querySelector( '.js-user-account-link' );
//         if ( link ) {
//             link.addEventListener( 'click', function() {
//                 common.Helpers.dispatchEvent( common.constants.EVENT.DISPLAY_ACCOUNT );
//             } );
//         }
//     };
// } ( PULSE.app, PULSE.app.common, PULSE.core ) );
(function(app,core,common){'use strict';/**
   * Remove css class from an element, checking if it exists already
   * @param {HTMLElement} element element
   * @param {string} css class to remove from element
   */common.Helpers.removeClassIfExists=function(element,css){if(core.style.hasClass(element,css)){core.style.removeClass(element,css);}};/**
   * Display form error messages
   * @param {HTMLElement} element form element that has the error
   * @param {string} message error message
   */common.Helpers.renderErrorMessage=function(element,message){if(message){if(element.parentElement.querySelector('.js-error')){element.parentElement.querySelector('.js-error').innerText=message;}else if(element.parentElement.parentElement.querySelector('.js-error')){element.parentElement.parentElement.querySelector('.js-error').innerText=message;}}if(element.type==='checkbox'){core.style.addClass(element.parentElement.parentElement,'form-group__element--invalid');}else{core.style.addClass(element,'form-group__element--invalid');}};/**
   * Toggle Password
   * @param {HTMLElement} pwdInput password input
   * @param {HTMLElement} toggle toggle element
   */common.Helpers.togglePassword=function(pwdInput,toggle){if(pwdInput.type==='password'){pwdInput.type='text';toggle.innerHTML='Hide';}else{pwdInput.type='password';toggle.innerHTML='Show';}};/**
   * Set listeners to buttons that allow the user to switch between signIn
   * and create account
   *
   * @param {HTMLElement} elements that swaps between panels
   * @param {string} newState panel name
   */common.Helpers.addPanelsTriggerListeners=function(elements,newPanel){if(!elements||elements.length===0){return;}for(var i=0;i<elements.length;i++){elements[i].addEventListener('click',function(event){event.preventDefault();common.Helpers.navigateToPanel(newPanel);});}};/**
   * Switch between ui panels within a given object
   *
   * @param {object} panels object containing the ui panels
   * @param {string} state panel name
   */common.Helpers.setPanelState=function(panels,state){if(core.style.hasClass(panels[state],'is-active')){return;}for(var key in panels){if(panels.hasOwnProperty(key)){core.style.removeClass(panels[key],'is-active');}}core.style.addClass(panels[state],'is-active');};common.Helpers.hasFormChanged=function(form,callback){Object.keys(form.elements).forEach(function(key){var formElement=form.elements[key];formElement.addEventListener('change',function(){return callback();});});};/**
   * Enable account form buttons
   *
   * @param {Array} buttons array of buttons
   * @param {string} css class to apply to all buttons
   */common.Helpers.enableFormButtons=function(buttons,css){if(!Array.isArray(buttons)){return;}buttons.forEach(function(button){common.Helpers.removeClassIfExists(button,css);button.disabled=false;});};/**
   * Disable account form buttons
   *
   * @param {Array} buttons array of buttons
   * @param {string} css class to apply to all buttons
   */common.Helpers.disableFormButtons=function(buttons,css){if(!Array.isArray(buttons)){return;}buttons.forEach(function(button){core.style.addClass(button,css);button.disabled=true;});};/**
   * If the Hub has already animated in, just add the animate-in class to this section,
   * whereas if Hub doesn't have animate-in then this is the first section that's loaded.
   * Animate the Hub and the section in, the section on a delay
   *
   * @param {HTMLelement} hub hub wrapper
   * @param {HTMLelement} childElement child element inside hub
   */common.Helpers.animateHub=function(hub,childElement){if(core.style.hasClass(hub,'animate-in')){core.style.addClass(childElement,'animate-in');}else{core.style.addClass(hub,'animate-in');setTimeout(function(){core.style.addClass(childElement,'animate-in');},common.constants.SECTION_DELAY);}};/**
   * Open user-account slider
   *
   * @param {HTMLElement} accountWrapper user account widget container
   * @param {HTMLElement} body doc body
   * @param {HTMLElement} overlay overlay
   */common.Helpers.openAccountSlider=function(accountWrapper,body,overlay){if(!accountWrapper||!body||!overlay){return;}core.style.addClass(accountWrapper,'is-open');core.style.addClass(body,'u-body-no-scroll-wide');core.style.addClass(overlay,'is-active');};/**
   * Close user-account slider
   *
   * @param {HTMLElement} accountWrapper user account widget container
   * @param {HTMLElement} body doc body
   * @param {HTMLElement} overlay overlay
   */common.Helpers.closeAccountSlider=function(accountWrapper,body,overlay){if(!accountWrapper||!body||!overlay){return;}common.Helpers.removeClassIfExists(accountWrapper,'is-open');common.Helpers.removeClassIfExists(body,'u-body-no-scroll-wide');common.Helpers.removeClassIfExists(overlay,'is-active');};})(PULSE.app,PULSE.core,PULSE.app.common);(function(app,core,common){'use strict';// /**
//  * Builds api url to check email status
//  *
//  * @param  {string} email  the email to check
//  * @param  {string} poolId cognito user pool
//  * @return {string}        api url
//  */
// common.Helpers.getEmailStatusUrl = function( email, poolId ) {
//     return app.environment.ssoApi + '/user/status/' + email + '/poolId/' + poolId;
// };
// /**
//  * Builds api url for guardian consent
//  *
//  * @return {string}        api url
//  */
// common.Helpers.getGuardianConsentUrl = function() {
//     return app.environment.ssoApi + '/consent';
// };
// /**
//  * Builds api url to check guardian consent
//  *
//  * @param  {string} email  the child email to check if consent is given
//  * @return {string}        api url
//  */
// common.Helpers.getChildConsentStatusUrl = function( email ) {
//     return app.environment.ssoApi + '/consent/child/' + email;
// };
// /**
//  * Builds api url for guardian authorisation
//  *
//  * @return {string}        api url
//  */
// common.Helpers.getGuardianAuthorisationUrl = function() {
//     return app.environment.ssoApi + '/consent/approve';
// };
// /**
//  * Builds social redirect url to get the logged in user token
//  *
//  * @param {string} link current url
//  * @param {string} provider name of the identity provider (eg. Facebook, Google)
//  * @return {string}        api url
//  */
// common.Helpers.getSocialRedirectUrl = function( link, provider ) {
//     return app.environment.ssoSocialRedirect + link + '&response_type=code&client_id=' + app.environment.cognito.clientId + '&identity_provider=' + provider;
// };
// /**
//  * Builds api url to save user preferences
//  *
//  * @return {string}        api url
//  */
// common.Helpers.getPreferencesUrl = function() {
//     return app.environment.ssoApi + '/prefs';
// };
// /**
//  * Builds api url to get or set user prefs when the user is logged in
//  *
//  * @param {string} uuid    user's uuid
//  * @return {string}        api url
//  */
// common.Helpers.getPreferencesUrlWithUUID = function( uuid ) {
//     return app.environment.ssoApi + '/prefs/' + uuid;
// };
// common.Helpers.getUUIDByEmailUrl = function( email ) {
//     return app.environment.ssoApi + '/user/email/' + email;
// };
/**
   * Gets the value of a url parameter by param name.
   *
   * @param  {string} name the name of the url param
   * @return {string}      returns the value of the url param if it's found
   */common.Helpers.getUrlParameter=function(name){name.replace(/[[]/,'\\[').replace(/[\]]/,'\\]');var regex=new RegExp('[\\?&]'+name+'=([^&#]*)');var results=regex.exec(location.search);return results===null?'':decodeURIComponent(results[1].replace(/\+/g,' '));};/**
   * Get url params
   */common.Helpers.getUrlParams=function(params,separator){var aux=separator?'?':'';var keys=Object.keys(params);for(var key in params){if(params.hasOwnProperty(key)){aux+=key+'='+params[key];if(key!==keys[keys.length-1]){aux+='&';}}}return aux;};/**
   * get hash params
   */common.Helpers.getHashParams=function(){var hash=window.location.hash.substr(1);var hashParams=hash.split('&').reduce(function(result,item){var parts=item.split('=');result[parts[0]]=parts[1];return result;},{});return hashParams;};/**
   * remove hash params
   */common.Helpers.removeHashParamsIfToken=function(){var hashParams=common.Helpers.getHashParams();if(hashParams.access_token){return window.location.href.split('#')[0];}return window.location.href;};// /**
//  * Navigates to a panel that is not included in the current widget,
//  * meaning it needs a redirect
//  *
//  * @param {string}
//  */
// common.Helpers.navigateToPanel = function( state ) {
//     var currentUrl = window.location.origin;
//     switch ( state ) {
//         case 'signIn':
//             window.location.href = currentUrl + '/sign-in';
//             break;
//         case 'register':
//             window.location.href = currentUrl + '/register';
//             break;
//         case 'complete':
//             window.location.href = currentUrl + '/user-verified';
//             break;
//         case 'userAccount':
//             window.location.href = currentUrl + '/user-account';
//             break;
//         default:
//             break;
//     }
// };
})(PULSE.app,PULSE.core,PULSE.app.common);(function(app,core,common){'use strict';// /**
//  * Get the user name and lastname from the userData object
//  * @param {object} data user data
//  * @return {string} string containing user name and lastname
//  */
// common.Helpers.getUserFullName = function( data ) {
//     if ( !data ) {
//         return null;
//     }
//     var dataObj = common.Helpers.userAttributesToObject( data );
//     return dataObj.given_name + ' ' + dataObj.family_name;
// };
// /**
//  * Get the user name and lastname from the userData object
//  * @param {object} data user data
//  * @return {string} string containing user name and lastname
//  */
// common.Helpers.getUserName = function( data ) {
//     if ( !data ) {
//         return null;
//     }
//     var dataObj = common.Helpers.userAttributesToObject( data );
//     return dataObj.given_name;
// };
// /**
//  * Get the user image url from the userAttributes object
//  *
//  * @param {object} data user data
//  * @return {string} returns image url
//  */
// common.Helpers.getSocialUserImage = function( data ) {
//     if ( !data ) {
//         return null;
//     }
//     var dataObj = common.Helpers.userAttributesToObject( data );
//     if ( dataObj.picture ) {
//         // Fb returns picture inside an object whereas google returns a string
//         if ( typeof dataObj.picture === 'object' && dataObj.picture.constructor === Object ) {
//             return dataObj.picture.data.url;
//         }
//         return dataObj.picture;
//     }
//     return null;
// };
// /**
//  * Get the user's uuid
//  *
//  * @param {object} data user data
//  * @return {string} returns unique identifier
//  */
// common.Helpers.getUUID = function( data ) {
//     if ( !data ) {
//         return null;
//     }
//     var dataObj = common.Helpers.userAttributesToObject( data );
//     return dataObj.sub;
// };
// /**
//  * Get user's fav team stored in the cookie '_sso_team'
//  *
//  * @return {object} returns either the cookie object or null
//  */
// common.Helpers.getFavouriteTeamCookie = function() {
//     var userTeamCookie = core.localStorage.getStorage( common.constants.USER_TEAM_COOKIE, true );
//     if ( userTeamCookie ) {
//         return JSON.parse( userTeamCookie );
//     }
//     return null;
// };
})(PULSE.app,PULSE.core,PULSE.app.common);// ( function( app, core, common ) {
//     'use strict';
//     var MESSAGE = {
//         INVALID: 'Incorrect format',
//         ERROR: 'This is a required field'
//     };
//     var MIN_LENGTH = 8;
//     var REGEX_UPPER_LOWER_CASE = /(?=.*[a-z])(?=.*[A-Z])/g;
//     var REGEX_NUMBER_SYMBOL = /([-!$%^&*()_+|~=`{}[\]:";'<>?,./0-9])/g;
//     /**
//      * Check if form is valid
//      *
//      * @param  {object} form        DOM object of html form
//      * @param  {string} showErrors  set to true on default, will not render error messages/classes if set to false
//      * @return {boolean}            Returns true if form is valid
//      */
//     common.Helpers.validateForm = function( form, showErrors ) {
//         var valid = true;
//         var renderErrors = showErrors === false ? false : true;
//         Object.keys( form.elements ).forEach( function( key ) {
//             var formElement = form.elements[ key ];
//             // Only validate if element is visible in DOM.
//             if ( formElement.offsetParent !== null ) {
//                 if ( !formElement.checkValidity() ) {
//                     valid = false;
//                     if ( renderErrors ) {
//                         common.Helpers.renderErrorMessage( formElement, MESSAGE.ERROR );
//                     }
//                 }
//                 /*
//                  * Required fields can mainly be checked by checking for length.
//                  * But there can be some exceptions. Please extend if needed.
//                  */
//                 if ( formElement.hasAttribute( 'required' ) ) {
//                     if ( formElement.type === 'checkbox' ) {
//                         if ( !formElement.checked ) {
//                             if ( renderErrors ) {
//                                 common.Helpers.renderErrorMessage( formElement, MESSAGE.ERROR );
//                             }
//                             valid = false;
//                         }
//                     } else if ( formElement.value.trim().length === 0 ) {
//                         // trim value to avoid an input with only spaces and make sure it's empty
//                         formElement.value = '';
//                         if ( renderErrors ) {
//                             common.Helpers.renderErrorMessage( formElement, MESSAGE.ERROR );
//                         }
//                         valid = false;
//                     } else if ( !formElement.checkValidity() ) {
//                         valid = false;
//                         common.Helpers.renderErrorMessage( formElement, MESSAGE.INVALID );
//                     }
//                 } else if ( !formElement.checkValidity() ) {
//                     valid = false;
//                     common.Helpers.renderErrorMessage( formElement, MESSAGE.INVALID );
//                 }
//             }
//         } );
//         return valid;
//     };
//     /**
//      * Verify password policy
//      *
//      * @param {HTMLElement} pwdInput password input
//      * @param {HTMLElement} verifyElements container with the elements to verify
//      */
//     common.Helpers.verifyPasswordPolicy = function( pwdInput, verifyElements ) {
//         var _self = this;
//         var lengthValid = false;
//         var lettersValid = false;
//         var numberValid = false;
//         var verifyLength = verifyElements.querySelector( '.js-verify-length' );
//         var verifyLetters = verifyElements.querySelector( '.js-verify-letters' );
//         var verifyNumber = verifyElements.querySelector( '.js-verify-number' );
//         //validate length
//         if ( pwdInput.value.length >= MIN_LENGTH ) {
//             core.style.addClass( verifyLength, 'valid' );
//             lengthValid = true;
//         } else if ( core.style.hasClass( verifyLength, 'valid' ) ) {
//             core.style.removeClass( verifyLength, 'valid' );
//             lengthValid = false;
//         }
//         //validate uppercase & lowercase
//         if ( pwdInput.value.match( REGEX_UPPER_LOWER_CASE ) ) {
//             core.style.addClass( verifyLetters, 'valid' );
//             lettersValid = true;
//         } else if ( core.style.hasClass( verifyLetters, 'valid' ) ) {
//             core.style.removeClass( verifyLetters, 'valid' );
//             lettersValid = false;
//         }
//         //validate number or symbol
//         if ( pwdInput.value.match( REGEX_NUMBER_SYMBOL ) ) {
//             core.style.addClass( verifyNumber, 'valid' );
//             numberValid = true;
//         } else if ( core.style.hasClass( verifyNumber, 'valid' ) ) {
//             core.style.removeClass( verifyNumber, 'valid' );
//             numberValid = false;
//         }
//         if ( lengthValid && lettersValid && numberValid ) {
//             core.style.addClass( pwdInput, 'valid' );
//             _self.removeClassIfExists( pwdInput, 'warning' );
//             _self.removeClassIfExists( pwdInput, 'invalid' );
//         } else if ( !lengthValid && lettersValid && numberValid ) {
//             core.style.addClass( pwdInput, 'warning' );
//             _self.removeClassIfExists( pwdInput, 'valid' );
//             _self.removeClassIfExists( pwdInput, 'invalid' );
//         } else {
//             core.style.addClass( pwdInput, 'invalid' );
//             _self.removeClassIfExists( pwdInput, 'valid' );
//             _self.removeClassIfExists( pwdInput, 'warning' );
//         }
//     };
//     /**
//      * Checks if a given password is valid according to the policy
//      *
//      * @param {string} pwd password value
//      * @return {boolean} true if password is valid
//      */
//     common.Helpers.isPasswordValid = function( pwd ) {
//         if ( pwd.length >= MIN_LENGTH && pwd.match( REGEX_UPPER_LOWER_CASE ) && pwd.match( REGEX_NUMBER_SYMBOL ) ) {
//             return true;
//         }
//         return false;
//     };
//     /**
//      * Validate birth date
//      *
//      * @param {HTMLElement} form form
//      * @return {boolean} true if date of birth valid
//      */
//     common.Helpers.isBirthDateValid = function( form ) {
//         var valid = true;
//         var dateObj = {
//             day: form.elements.namedItem( 'register-day' ) || form.elements.namedItem( 'day' ),
//             month: form.elements.namedItem( 'register-month' ) || form.elements.namedItem( 'month' ),
//             year: form.elements.namedItem( 'register-year' ) || form.elements.namedItem( 'year' )
//         };
//         var dateError = form.querySelector( '.js-date-error' );
//         var birthDate = moment( dateObj.day.value + '-' + dateObj.month.value + '-' + dateObj.year.value, 'DD MM YYYY' );
//         if ( !birthDate.isValid() ) {
//             //check if birthdate is valid
//             valid = false;
//             common.Helpers.invalidBirthDate( dateObj, dateError );
//         } else if ( birthDate.isAfter( moment() ) ) {
//             //check if birthdate is before today
//             valid = false;
//             common.Helpers.invalidBirthDate( dateObj, dateError );
//         }
//         return valid;
//     };
//     /**
//      * Triggers custom error for date of birth
//      *
//      * @param {object} dateObj object containing the date of birth inputs
//      * @param {HTMLElement} error error to display
//      */
//     common.Helpers.invalidBirthDate = function( dateObj, error ) {
//         core.style.addClass( error, common.constants.CLASS.ACTIVE );
//         for ( var item in dateObj ) {
//             if ( dateObj.hasOwnProperty( item ) ) {
//                 common.Helpers.renderErrorMessage( dateObj[ item ].parentElement );
//             }
//         }
//     };
// } ( PULSE.app, PULSE.core, PULSE.app.common ) );
/*globals PULSE, PULSE.app */(function(core,common){var scrollBoundary=function scrollBoundary(){var _self=this;_self.stickyItems=[];var timer=null;window.addEventListener('scroll',function(e){onScroll(_self,e);if(timer!==null){clearTimeout(timer);}timer=setTimeout(function(){onScroll(_self,e);},300);});};var onScroll=function onScroll(_self,e){var i,item,boundaryRect,scrollTop,windowScroll;for(i=0;i<_self.stickyItems.length;i++){item=_self.stickyItems[i];elemRect=item.elem.getBoundingClientRect();windowScroll=window.scrollY||window.pageYOffset;if(item.boundary==='viewport'){scrollTop=0;boundaryPos=elemRect.top+item.margin;}else{boundaryRect=item.boundary.getBoundingClientRect();scrollTop=boundaryRect.top*-1+item.elem.offsetHeight+elemRect.top+item.margin;boundaryPos=item.boundary.offsetHeight;}if(!core.style.hasClass(item.container[0],item.activeClass)){if(scrollTop>=boundaryPos){// reached the bottom of the boundary elem
if(windowScroll>=item.scrollPos){setClass(item.container,item.activeClass);}item.scrollPos=window.scrollY||window.pageYOffset;}}else if(item.boundary==='viewport'&&windowScroll===0){// scrolled back up to the top
removeClass(item.container,item.activeClass);}else if((item.boundary!=='viewport'||item.lastScrollPos)&&windowScroll<=item.scrollPos){// scrolled back up above the boundary
removeClass(item.container,item.activeClass);}}};var setClass=function setClass(container,activeClass){for(var x=0;x<container.length;x++){core.style.addClass(container[x],activeClass);}};var removeClass=function removeClass(container,activeClass){for(var x=0;x<container.length;x++){core.style.removeClass(container[x],activeClass);}};var addItemFromWidget=function addItemFromWidget(widget){var item,boundarySelector,boundary,margin,activeClass,containers;item=widget.getAttribute('data-item');boundarySelector=widget.getAttribute('data-boundary');margin=parseInt(widget.getAttribute('data-margin'));activeClass=widget.getAttribute('data-active-class');containers=document.querySelectorAll(widget.getAttribute('data-containers'));if(item){item=document.querySelector(item);}if(boundarySelector){boundary=document.querySelector(boundarySelector);}else{boundary='viewport';}common.scrollBoundary.addItem(item||widget,boundary,margin,containers,activeClass);};/**
   * Add an element to be watched on scroll if it reaches the boundary of another element and apply a class
   * @param {object} item element to be watched
   * @param {object} boundary boundary element
   * @param {integer} scrollMargin margin to the boundary element
   * @param {object} itemContainer array of elements which the class should be applied to - optional (if not set, class will be set to item)
   * @param {string} activeClass CSS class to be set on element when active - default: is-static
   * @param {string} lastScrollPos Use last scroll pos when scrolling back up above the boundary - optional
   */scrollBoundary.prototype.addItem=function(item,boundary,scrollMargin,itemContainer,activeClass,lastScrollPos){var _self=this;if(item&&boundary){_self.stickyItems.push({elem:item,boundary:boundary,container:itemContainer&&itemContainer.length>0?itemContainer:[item],margin:scrollMargin||0,activeClass:activeClass||'is-static',lastScrollPos:lastScrollPos||false});}onScroll(_self);return _self.stickyItems.length-1;};scrollBoundary.prototype.removeItem=function(index){var _self=this;_self.stickyItems.splice(index,1);};common.scrollBoundary=new scrollBoundary();var widgets=document.querySelectorAll('[data-widget="scroll-boundary"]');for(var i=0;i<widgets.length;i++){addItemFromWidget(widgets[i]);}})(PULSE.core,PULSE.app.common);(function(app,common,core){/**
   * Checks if month is last month
   * @param {Number} value - the value for a unit of time
   * @returns {Boolean} - true or false value based on checking if it's the last month
   */var _isLastMonth=function _isLastMonth(value){return value===1?true:false;};/**
   * Counts down to a given time
   * @param {DOMElement} element - wrapping HTML element for the countdown
   * @constructor
   */common.CountdownClock=function(element){var _self=this;_self.element=element;_self.time=Number(_self.element.getAttribute('data-start-time'));_self.fullWidth=_self.element.getAttribute('data-fullwidth')==='true'?true:false;if(_self.time&&!Number.isNaN(_self.time)){_self.initCountdown();}};/**
   * Intialise the countdown clock
   */common.CountdownClock.prototype.initCountdown=function(){var _self=this;var REFRESH_INTERVAL=1000;_self.countdown=_self.element.getElementsByClassName('js-countdown-clock');_self.years=_self.element.getElementsByClassName('js-years');_self.months=_self.element.getElementsByClassName('js-months');_self.days=_self.element.getElementsByClassName('js-days');_self.hours=_self.element.getElementsByClassName('js-hours');_self.minutes=_self.element.getElementsByClassName('js-minutes');_self.seconds=_self.element.getElementsByClassName('js-seconds');_self.monthsLabel=_self.element.querySelector('.js-months-label');// Use refreshTime function for initial render
_self.refreshTime();core.style.addClass(_self.element,'animate-in');if(_self.monthsLabel&&_self.diffDuration&&_isLastMonth(_self.diffDuration._data.months)){_self.monthsLabel.innerHTML='Month';}_self.liveRefresh=setInterval(function(){_self.refreshTime();},REFRESH_INTERVAL);};/**
   * Removes the interval for the countdown when not needed anymore
   */common.CountdownClock.prototype.stopCountdown=function(){var _self=this;clearInterval(_self.liveRefresh);};/**
   * Removes the interval for the countdown when not needed anymore
   * @param {Number} value - the value to be displayed for a unit of time
   * @param {String} unit - the unit of time used to define where the value is rendered e.g. hours or minutes
   */common.CountdownClock.prototype.printDigits=function(value,unit){var _self=this;var digits=(''+value).split('').reverse();var totalDigits=_self[unit].length;for(var i=totalDigits-1;i>=0;i--){_self[unit][i].innerHTML=digits[totalDigits-i-1]||0;}};/*
   * Get the individual time values for months, days, hours, minutes and seconds
   */common.CountdownClock.prototype.refreshTime=function(){var _self=this;var currentTime=moment.now();var eventTime=_self.time;var diffTime=eventTime-currentTime;if(diffTime>0){_self.diffDuration=moment.duration(diffTime);// Print each of the separate parts of the countdown clock using their values for each time unit
_self.printDigits(_self.diffDuration._data.months,'months');if(_self.fullWidth){var diffInDays=Math.floor(_self.diffDuration.asDays());_self.printDigits(diffInDays,'days');}else{_self.printDigits(_self.diffDuration._data.days,'days');}_self.printDigits(_self.diffDuration._data.hours,'hours');_self.printDigits(_self.diffDuration._data.minutes,'minutes');_self.printDigits(_self.diffDuration._data.seconds,'seconds');}else{_self.printDigits(0,'hours');_self.printDigits(0,'minutes');_self.printDigits(0,'seconds');_self.stopCountdown();}};/**
   * create the widget instances
   */var widgets=document.querySelectorAll('[data-widget="countdown-clock"]');for(var i=0;i<widgets.length;i++){new common.CountdownClock(widgets[i]);}})(PULSE.app,PULSE.app.common,PULSE.core);(function(app,common,core){var CLIENT_WIDTH=document.body.clientWidth;/**
   * Simple Slider, creates slider interaction from a list, displays next and
   * previous buttons
   * @param {Object} container the pagination container
   * @param {String} region the current stop
   * @param {String} slideNum the total number of slides
   */var setPagination=function setPagination(container,region,slideNum){container.innerHTML=region+' / '+slideNum;};/**
   * @typedef {Object} SliderConfig configuration for the Trophy Tour Slider Element
   * @property {HTMLElement} container the container of the slider element
   * @property {HTMLElement} scrollContainer the element that will be scrolled in the slider
   * @property {NodeList} sliderElements list of slide elements ( li's )
   * @property {HTMLElement} nextButton the next button
   * @property {HTMLElement} prevButton the previous button
   */ /**
   * Simple Slider, creates slider interaction from a list, displays next and
   * previous buttons
   * @param {SliderConfig} config the slider configuration
   * @constructor
   */common.SimpleSlider=function(config){var _self=this;_self.config=config;_self.container=_self.config.container;_self.initSlider();};/**
   * Initialises the Simple Slider
   */common.SimpleSlider.prototype.initSlider=function(){var _self=this;_self.element=_self.config.container;_self.slideContainer=_self.config.scrollContainer;_self.slideWidth=_self.slideContainer.clientWidth;_self.slideItems=_self.config.sliderElements;_self.paginationContainer=_self.config.pagination;_self.slideNum=_self.slideItems.length;_self.slidePos=0;_self.activeSlide=0;_self.slideElementWidth=_self.slideItems[0].clientWidth;_self.nextBtn=_self.config.nextButton;_self.prevBtn=_self.config.prevButton;var marginRight=parseInt(window.getComputedStyle(_self.slideItems[0]).getPropertyValue('margin-right'));_self.slideElementOuterWidth=_self.slideElementWidth+marginRight;_self.inView=Math.floor(_self.slideWidth/_self.slideElementOuterWidth);//centering
_self.slideContainerCenter=_self.slideWidth/2;_self.slideElementCenter=_self.slideElementOuterWidth/2;_self.nextStopIndex=_self.config.nextStopIndex;_self.currentRegion=_self.config.nextStopIndex+1;_self.isCentered=false;_self.centerNextStop();_self.setListeners();_self.updateControls();};/**
   * A function that centers the current-stop on the trophy tour relative to the slider
   */common.SimpleSlider.prototype.centerNextStop=function(){var _self=this;// this is the width from the start of the scroller to the center of the active item
var stopWidth=_self.nextStopIndex*_self.slideElementOuterWidth+_self.slideElementCenter;// if the stopWidth is greater than the center point of the container initialize the active slide centering
if(stopWidth>_self.slideContainerCenter){//the amount by which the slider needs to scroll to center the active item
_self.scrollAmount=stopWidth-_self.slideContainerCenter;_self.isCentered=true;//if width > desktop manipulate the left property otherwise manipulate scroll
if(CLIENT_WIDTH>1040){_self.slideContainer.style.left='-'+_self.scrollAmount+'px';_self.activeSlide=_self.nextStopIndex;}else{_self.slideContainer.scrollLeft=_self.scrollAmount;}}};/**
   * Sets the listeners for the Simple Slider
   */common.SimpleSlider.prototype.setListeners=function(){var _self=this;if(_self.nextBtn){_self.nextBtn.addEventListener('click',function(){_self.scrollNext();});}if(_self.prevBtn){_self.prevBtn.addEventListener('click',function(){_self.scrollPrev();});}if(CLIENT_WIDTH<640){// below phablet we are disabling the pager buttons and introducing scroll
_self.slideContainer.addEventListener('scroll',function(){if(_self.slideContainer.scrollLeft===0){//sets start-point of scroller
_self.currentRegion=1;}else if(_self.slideContainer.scrollLeft>=_self.slideNum*_self.slideElementWidth-_self.slideWidth){//sets end-point of scroller
_self.currentRegion=_self.slideNum;}else if(_self.slideContainer.scrollLeft>0){//sets scroll-intervals for pagination
_self.currentRegion=Math.ceil(_self.slideContainer.scrollLeft/_self.slideElementWidth)+1;}setPagination(_self.paginationContainer,_self.currentRegion,_self.slideNum);});}};/**
   * Scrolls the slider by manipulating the left css property
   * @param {String} dir - the direction the slider is moving in
   */common.SimpleSlider.prototype.scrollSlider=function(dir){var _self=this;if(_self.isCentered){if(dir==='next'){var remainingSlides=_self.slideNum-_self.inView;if(_self.activeSlide>=remainingSlides){_self.slidePos=_self.slideElementOuterWidth*remainingSlides;_self.activeSlide=remainingSlides;}else{_self.slidePos=_self.slideElementOuterWidth*(_self.activeSlide-1);}}else if(dir==='prev'){_self.slidePos=_self.slideElementOuterWidth*(_self.activeSlide-1);_self.activeSlide--;}_self.isCentered=false;}else{_self.slidePos=_self.slideElementOuterWidth*_self.activeSlide;}_self.slideContainer.style.left='-'+_self.slidePos+'px';};/**
   * When next btn is clicked jump the the slide that matches that buttons index
   * @param {Number} slideIndex - the index of the slide to slide to
   * @param {String} dir - the direction the slider is moving in
   */common.SimpleSlider.prototype.slideTo=function(slideIndex,dir){var _self=this;_self.activeSlide=slideIndex;_self.scrollSlider(dir);_self.updateControls();};/**
   * Paginates once to the right
   */common.SimpleSlider.prototype.scrollNext=function(){var _self=this;_self.activeSlide++;_self.slideTo(_self.activeSlide,'next');};/**
   * Paginates once to the left
   */common.SimpleSlider.prototype.scrollPrev=function(){var _self=this;_self.activeSlide--;_self.slideTo(_self.activeSlide,'prev');};/**
   * Update the carousel controls if the slider is at the beginning or the end to deactivate a button
   */common.SimpleSlider.prototype.updateControls=function(){var _self=this;var leftPos=parseInt(_self.slideContainer.style.left.slice(0,-2))*-1;//if there are no more slides after this hide next button
if(leftPos>=_self.slideNum*_self.slideElementOuterWidth-_self.slideWidth){core.style.addClass(_self.nextBtn,'faded');//otherwise show this button
}else if(_self.nextBtn&&core.style.hasClass(_self.nextBtn,'faded')){core.style.removeClass(_self.nextBtn,'faded');}if(_self.activeSlide===0&&_self.prevBtn){core.style.addClass(_self.prevBtn,'faded');}else if(_self.prevBtn&&core.style.hasClass(_self.prevBtn,'faded')){core.style.removeClass(_self.prevBtn,'faded');}};})(PULSE.app,PULSE.app.common,PULSE.core);/*globals PULSE, PULSE.app, PULSE.ui */(function(app,core,common){"use strict";/**
  * User Profile
   * Widgeet to get user logged in details
   * @param {object} element - widget element
  */common.UserProfile=function(){var _self=this;_self.user={email:document.getElementById('upUsername').value,displayName:document.getElementById('upDisplayname').value};};})(PULSE.app,PULSE.core,PULSE.app.common);(function(common,core){common.copyLinkToClipboard=function(event){event.preventDefault();var _self=this;var button=document.querySelector('.js-copy-link');var clipboard=new Clipboard('.js-copy-link',{text:function text(){return document.location.href;}});core.style.addClass(button,'show-confirm');var delay=1200;clipboard.on('success',function(){core.style.addClass(button,'show-confirm');setTimeout(function(){core.style.removeClass(button,'show-confirm');},delay);});};})(PULSE.app.common,PULSE.core);(function(common){/**
   * Add markup around pipes in a string
   *
   * @param  {String} string - the string to format
   * @return {String}        - the output
   */common.formatTitle=function formatTitle(string){var newString=string;// if there are no delimiters, make the 1st word strong
if(newString.indexOf('|')===-1){var newStringArray=newString.split(' ');newStringArray[newStringArray.length-1]='<strong>'+newStringArray[newStringArray.length-1]+'</strong>';return newStringArray.join(' ');}// if there's only one delimiter, add a 2nd
// eslint-disable-next-line no-magic-numbers
if(newString.split('|').length%2===0){newString+='|';}var regexp=/(\|)([^|]+)(\|)/g;var matches=string.match(regexp);if(matches){matches.forEach(function(match){var highlight='<strong>'+match.substring(1,match.length-1)+'</strong>';newString=newString.split(match).join(highlight);});}return newString;};})(PULSE.app.common);(function(common){/**
   * Scroll the window to bring an element into view - uses requestAnimationFrame to animate the scroll event
   * @param  {String} scrollElementSelector selector for the scroll boundary
   * @param  {HTMLElement} element The target element to bring into view
   * @param  {Number} offset The value to offset the window scroll from the top of the element (accepts -)
   * @param  {Number} scrollRate Number of pixels to scroll by within each animation frame (set high to jump straight to target)
   * @param  {Function} callback Function to call once the animation's over
   */common.scrollElementAnimated=function(scrollElementSelector,element,offset,scrollRate,callback){var scrollElement=document.querySelector(scrollElementSelector);var targetScroll=element.offsetTop;if(!isNaN(offset)){targetScroll+=offset;}if(isNaN(scrollRate)){scrollRate=100;}var scrolling;// window.scrollY is undefined in IE <= 11
var scrollUp=targetScroll<scrollElement.scrollTop;function scrollWindowUp(){var scrollY=scrollElement.scrollTop;var newY=scrollY-scrollRate;if(newY<=targetScroll){scrollElement.scrollTop=targetScroll;}else{scrollElement.scrollTop=newY;}if(scrollY<=targetScroll||scrollElement.scrollTop===0){cancelAnimationFrame(scrolling);}else{requestAnimationFrame(scrollWindowUp);}}function scrollWindowDown(){var scrollY=scrollElement.scrollTop;var newY=scrollY+scrollRate;if(newY>=targetScroll){scrollElement.scrollTop=targetScroll;}else{scrollElement.scrollTop=newY;}var isMaxExtent=scrollElement.scrollTop+scrollElement.offsetHeight===scrollElement.scrollHeight;if(scrollY>=targetScroll||isMaxExtent){cancelAnimationFrame(scrolling);if(typeof callback==='function'){callback();}}else{requestAnimationFrame(scrollWindowDown);}}if(scrollUp){scrolling=requestAnimationFrame(scrollWindowUp);}else{scrolling=requestAnimationFrame(scrollWindowDown);}};})(PULSE.app.common);/*globals PULSE, PULSE.app */(function(app,core,common){var matchVenues={};var loadedVenuePhotoCallback=function loadedVenuePhotoCallback(variant,contentData,elem,photoUrl){if(elem&&!elem.style.backgroundImage&&contentData){var photo=app.common.getPhotoByVariant(contentData.variants,variant);if(photo){matchVenues[contentData.references[0].id]=photo.url;elem.style.backgroundImage='url("'+photo.url+'")';}}else if(photoUrl){elem.style.backgroundImage='url("'+photoUrl+'")';}};common.loadVenuePhotos=function(venueElems,variant){var venueID,request,params;Array.prototype.forEach.call(venueElems,function(velem,i){venueID=velem.getAttribute('data-venue-id');if(venueID){params={references:'CRICKET_VENUE:'+venueID,tagNames:'Match Venue'};request={url:app.apiPath.cms.photo+'?'+core.url.buildQueryString(params),callback:function callback(data){if(data&&data.content&&data.content.length){loadedVenuePhotoCallback(variant,data.content[0],venueElems[i]);}},forceCallback:true};if(!matchVenues[venueID]){core.data.manager.add(request);}else{loadedVenuePhotoCallback(variant,null,venueElems[i],matchVenues[venueID]);}}});};})(PULSE.app,PULSE.core,PULSE.app.common);/*globals PULSE, PULSE.app */(function(app,core,common){var STICKY_MENU_HEIGHT=120;var videoStickyItem;//make sure we dont append the same script twice
var createdScripts=[];var fitContentInOverlay=function fitContentInOverlay(playerEl,overlay){var playerHeight=playerEl.clientHeight-55;// 55 height of controls + margins
var childHeight=overlay.firstElementChild.clientHeight;var fits=Math.floor(playerHeight/childHeight);overlay.style.height=(fits>0?fits*childHeight+21:0)+'px';};/**
   * @namespace app.videoPlayerManager.private
   */ /**
   * the player manager will maintain a list of the active players on the page.
   * each time a video player controller instantiates in the page it will pass a
   * reference to itself to the player manager.
   *
   * The manager will also handle creating the single brightcove script in the page.
   * when brightcove creates the players the manager will handle the onload callback and
   * add the api functionality to the controller
   *
   * @constructor
   *
   */var playerManager=function playerManager(){playerNames=[];this.scriptSource="https://players.brightcove.net/{{account}}/{{playerId}}_default/index.min.js";this.createScripts();};//statically define the play arrays
var players={};var playerNames=[];/**
   * return a player we can use to start a video
   * @returns {object} instance that implements the video player superclass
   */playerManager.prototype.getPlayer=function(){if(playerNames[0]){return this.players[playerNames[0]];}};playerManager.prototype.getPlayersMap=function(){return players;};playerManager.prototype.getPlayerNameArray=function(){return playerNames;};/**
   * get a player with a specific name ( BrightcoveID )
   * @param {string} name the name of the player
   * @param {boolean} ensureReturn weather to return a player if the specified player cant be found
   * @returns {object} video player controller implementing the video player superclass ( app.brightCoveVideo )
   */playerManager.prototype.getPlayerWithName=function(name,ensureReturn){var lookup=playerNames.filter(function(player){return player===name;});if(lookup.length>0){return players[lookup[0]];}if(ensureReturn&&players[0]){return players[0];}return false;};/**
   * create the brightcove player and add a representation of it to the global brightcove object
   */playerManager.prototype.createPlayers=function(callback){var _self=this;playerNames.forEach(function(playerName){videojs(playerName).ready(function(){//wrap the video object in brightcove video to add convinience methods
players[this.id_]=new app.brightCoveVideo(this.el_.parentElement,this);if(typeof callback==='function'){callback(this.id_);}// check if the video player has sticky functionality and add the listeners for it
if(this.el_.parentElement.getAttribute('data-sticky')==='enabled'){videojs(this.id_).on('playing',function(){var currentPlayer=this;addScrollBehaviour(currentPlayer.el_);});videojs(this.id_).on('ended',function(){var currentPlayer=this;removeScrollBehaviour(currentPlayer.el_);});var undockVideoButton=getStickyWrapper(this.el_).querySelector('.js-close');undockVideoButton.addEventListener('click',function(e){var stickyWrapper=getStickyWrapper(e.currentTarget);var playerElement=stickyWrapper.querySelector('[data-player]');removeScrollBehaviour(playerElement);videojs(playerElement.id).pause();});videojs(this.id_).on('fullscreenchange',function(){var currentPlayer=this;if(!currentPlayer.isFullscreen()){app.common.scrollBoundary.refresh();}});}videojs(playerName).on('play',function(){_self.onVideoPlay(this,playerName);});if(app.initVideoPlugin){app.initVideoPlugin(this.id_);}});});};/**
   * allow us to register our internal callback functions before loading the brightcove script
   * otherwise load events are called before functions actually exist
   */playerManager.prototype.createScripts=function(forceScriptLoad,callback){var _self=this;//loop over the video elements in the page
var videos=document.querySelectorAll('video');Array.prototype.map.call(videos,function(videoEl,idx,array){var videoDetails={account:videoEl.getAttribute('data-account'),playerId:videoEl.getAttribute('data-player'),elementId:videoEl.getAttribute('id')};if(playerNames.indexOf(videoDetails.elementId)===-1){playerNames.push(videoDetails.elementId);}var src=core.common.formatString(_self.scriptSource,videoDetails);if(createdScripts.indexOf(src)===-1||forceScriptLoad){var scrpt=document.createElement("script");scrpt.setAttribute('data-player',videoDetails.elementId);document.getElementsByTagName('body')[0].appendChild(scrpt);scrpt.onload=function(){_self.createPlayers(callback);};scrpt.src=src;createdScripts.push(src);}});};/**
   * Callback function once video starts playing
   */playerManager.prototype.onVideoPlay=function(player,playerName){var _self=this;if(!_self.loadedRelatedContent){var urlParams={tagNames:player.el_.getAttribute('data-tags')};var url=common.createContentPath('video',urlParams);var subscriberObject={url:url,callback:function callback(data){_self.onRelatedData(data,player,playerName);},method:'GET',target:_self};core.data.manager.add(subscriberObject);_self.loadedRelatedContent=true;}if(_self.videoRelatedOverlay){core.style.addClass(_self.videoRelatedOverlay,'u-hide');}};/**
   * Callback function once a video has ended
   */playerManager.prototype.onVideoEnded=function(player,videos){var _self=this;if(videos.length){_self.videoRelatedOverlay=app.common.templating.render({videos:videos},'related_video_overlay',true);player.el_.appendChild(_self.videoRelatedOverlay);fitContentInOverlay(player.el_,_self.videoRelatedOverlay);core.event.windowResize.add({method:function method(){fitContentInOverlay(player.el_,_self.videoRelatedOverlay);}});core.style.removeClass(_self.videoRelatedOverlay,'u-hide');}};/**
   * Callback function once related videos have been fetched
   */playerManager.prototype.onRelatedData=function(data,player,playerName){var _self=this;if(data&&data.content&&data.content.length){// remove current video from the related content list
for(var i=0;i<data.content.length;i++){if(data.content[i].mediaId===player.mediainfo.id){data.content.splice(i,1);break;}}// max 8 videos
data.content.splice(8,data.content.length);videojs(playerName).on('ended',function(){_self.onVideoEnded(player,data.content);});}};// create the manager immediately so it available for players from the get-go
app.videoPlayerManager=new playerManager();/**
   * static method that brightcove player will use as a callback ( referenced in the HTML )
   * @param {String} brightcoveID the id given to the <object> of the player in HTML
   */app.videoPlayerManager.onTemplateLoaded=function(brightcoveID){var player=brightcove.api.getExperience(brightcoveID);var playerAPI=player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);app.videoPlayerManager.registerPlayerApi(brightcoveID,player,playerAPI);};app.videoPlayerManager.onTemplateReady=function(brightcoveID){};/**
   * Given the video player DOM element, return the sticky wrapper DOM element
   * @param {DOMElement} domElement the video player DOM item
   */var getStickyWrapper=function getStickyWrapper(domElement){return document.querySelector('.js-sticky');};/**
   * Add the scroll behaviour to the video wrapper
   * @param {DOMElement} item the video player DOM item (NOT the sticky element)
   */var addScrollBehaviour=function addScrollBehaviour(item){if(!item.getAttribute('data-scroll-enabled')){var videoItem=getStickyWrapper(item);var boundarySelector=videoItem.getAttribute('data-boundary');// var boundary = boundarySelector ? document.querySelector( boundarySelector ) : 'viewport';
var stickyWrapper=document.querySelector(boundarySelector);var boundary='viewport';var wrapper=stickyWrapper.parentElement;wrapper.style.height=wrapper.getBoundingClientRect().height+'px';// Set scroll boundary for sticky navigation
videoStickyItem=app.common.scrollBoundary.addItem(stickyWrapper,boundary,-STICKY_MENU_HEIGHT,[stickyWrapper,videoItem],'is-fixed',true);item.setAttribute('data-scroll-enabled',true);}};/**
   * Remove the scroll behaviour from the video wrapper
   * @param {DOMElement} item the video player DOM item (NOT the sticky element)
   */var removeScrollBehaviour=function removeScrollBehaviour(item){var stickyWrapper=getStickyWrapper(item);core.style.removeClass(stickyWrapper,'is-fixed');var wrapper=stickyWrapper.parentElement;wrapper.style.height='auto';// Set scroll boundary for sticky navigation
app.common.scrollBoundary.removeItem(videoStickyItem);item.removeAttribute('data-scroll-enabled');};})(PULSE.app,PULSE.core,PULSE.app.common);/*globals PULSE, PULSE.app */(function(app,core,common,ui){'use strict';var VIDEO_PLAYER='featuredVotingVideoPlayer';var CLASSES={PLAYING:'is-playing',HIDE:'u-hide',BODY_NO_SCROLL:'u-body-no-scroll-modal',MODAL_WRAP:'featured-voting-video-modal',MODAL_CONTENT:'featured-voting-video-modal__inner-wrapper',MODAL_OPEN:'open',WINNER:'winner',VOTED:'voted',VOTE:'vote',SELECTED_VOTE:'selected-vote'};var MODAL_TITLES={REWATCH:'Rewatch this matchup',VOTE:'Vote now for this matchup'};var TIMEOUT=500;var MODAL_CONFIG={selector:'[data-ui-modal]',openClass:CLASSES.MODAL_OPEN,modalWrapClass:CLASSES.MODAL_WRAP,modalContentWrapClass:CLASSES.MODAL_CONTENT,openCallback:function openCallback(modal){setModalListeners(modal);open(modal);core.style.addClass(document.body,CLASSES.BODY_NO_SCROLL);},closeCallback:function closeCallback(modal){close(modal);core.style.removeClass(document.body,CLASSES.BODY_NO_SCROLL);}};var votingData=null;/**
   * Initialises the PULSE.ui modal based on config
   */var initModal=function initModal(){if(document.getElementById(VIDEO_PLAYER)){if(typeof app.FeaturedVotingVideoModal==='undefined'){app.FeaturedVotingVideoModal=new ui.modal(MODAL_CONFIG);}}};/**
   * Sets listener on modal's close button
   * @param {Object} modal ui.modal
   */var setModalListeners=function setModalListeners(modal){var closeButton=modal.config.modal.querySelector('.js-modal-close');if(closeButton){closeButton.addEventListener('click',function(event){event.preventDefault();if(app.FeaturedVotingVideoModal){app.FeaturedVotingVideoModal.close();}});}};/**
   * Opens the modal
   * @param  {Object} modal Event data returned from the modal's openCallback
   */var open=function open(modal){core.style.removeClass(modal.config.current.content,CLASSES.HIDE);var videos=modal.config.current.activator.querySelectorAll('.js-results-video');updateDate(modal);var votingPollId=null;var votingPollAccount=null;Array.prototype.forEach.call(videos,function(video,videoIndex){videoIndex++;var videoId=video.getAttribute('data-media-id');votingPollId=Number(video.getAttribute('data-poll-id'));votingPollAccount=video.getAttribute('data-poll-account');updateVideo(modal,video,videoId,videoIndex);loadVideo(videoId,videoIndex);});getCurrentVotingData(modal,videos,votingPollId,votingPollAccount);};/**
   * Gets the poll data of the current vote
   *
   * @param {Object} modal pulse.ui modal
   * @param {NodeList} videos list of videos
   * @param {Number} votingPollId canary question id
   * @param {String} votingPollAccount name of canary poll where the question is stored
   */var getCurrentVotingData=function getCurrentVotingData(modal,videos,votingPollId,votingPollAccount){var currentPoll=null;for(var i=0;i<votingData.length;i++){if(votingData[i].id===votingPollId){currentPoll=votingData[i];break;}}if(currentPoll&&currentPoll.open){displayVoting(modal,videos,currentPoll,votingPollAccount);}else{hideVoting(modal,videos);}};/**
   * Shows voting options
   *
   * @param {Object} modal pulse.ui modal
   * @param {NodeList} videos list of videos
   * @param {Number} currentPoll canary question id
   * @param {String} votingPollAccount name of canary poll where the question is stored
   */var displayVoting=function displayVoting(modal,videos,currentPoll,votingPollAccount){core.style.addClass(modal.config.modal,'vote');common.Helpers.removeClassIfExists(modal.config.modal,'voted');modal.config.modal.setAttribute('data-poll-id',currentPoll.id);modal.config.modal.setAttribute('data-poll-account',votingPollAccount);updateModalTitle(modal,MODAL_TITLES.VOTE);showVideoTitles(modal,videos);toggleVoteButtons(modal,currentPoll,true);new app.FeaturedVoting(modal.config.modal,votingData);};/**
   * Hides voting options
   *
   * @param {Object} modal Pulse ui.modal
   * @param {Node} videos videos that will be pulled into the modal
   */var hideVoting=function hideVoting(modal,videos){updateModalTitle(modal,MODAL_TITLES.REWATCH);showVideoTitles(modal,videos);toggleVoteButtons(modal);};/**
   * Updates the date value of the clicked-on Greatest Moment Result
   * @param  {Object} modal Event data returned from the modal's callback
   */var updateDate=function updateDate(modal){var date=modal.config.current.activator.getAttribute('data-moment-date');modal.config.modal.querySelector('.js-user-time').innerHTML=date;};/**
   * Updates the video player with the video ID and winning class
   * @param  {Object} modal      Event data returned from the modal's callback
   * @param  {HTMLElement} video The video node
   * @param  {Number} videoId    Video ID of the video to load
   * @param  {Number} videoIndex The index of the video player to map the video to
   */var updateVideo=function updateVideo(modal,video,videoId,videoIndex){var videoPlayer=modal.config.modal.querySelector('#modalVideoPlayer'+videoIndex);videoPlayer.setAttribute('data-video-id',videoId);if(video.getAttribute('data-winner-video')==='true'){core.style.addClass(videoPlayer.parentElement,'winner');}};/**
   * Update modal title depending on voting open or closed
   *
   * @param {Object} modal pulse.ui modal
   * @param {String} title modal title
   */var updateModalTitle=function updateModalTitle(modal,title){var modalTitle=modal.config.modal.querySelector('.js-modal-title');modalTitle.innerText=title;};/**
   * Initialises the video player and loads the correct video
   * @param  {Number} videoId    Video ID of the video to load
   * @param  {Number} videoIndex The index of the video player to map the video to
   */var loadVideo=function loadVideo(videoId,videoIndex){var player=app.videoPlayerManager.getPlayerWithName('modalVideoPlayer'+videoIndex);player.loadVideoWithID(videoId);listenVideoEvents(player);};/**
   * Listens for event triggers on the video players inside the modal
   * @param  {Object} player The player instance to listen for events
   */var listenVideoEvents=function listenVideoEvents(player){player.api.on('play',function(){core.style.addClass(player.element,CLASSES.PLAYING);});player.api.on('pause',function(){if(player.api.paused()===true&&player.api.scrubbing()===false&&player.api.seeking()===false){core.style.removeClass(player.element,CLASSES.PLAYING);}});};/**
   * Closes the modal
   *
   * @param {Object} modal pulse.ui modal
   */var close=function close(modal){app.videoPlayerManager.getPlayerWithName('modalVideoPlayer1').stopVideo();app.videoPlayerManager.getPlayerWithName('modalVideoPlayer2').stopVideo();setTimeout(function(){clearModal(modal);},TIMEOUT);};/**
   * Show video titles
   *
   * @param {Object} modal pulse.ui modal
   * @param {NodeList} videos videos that will be pulled into the modal
   */var showVideoTitles=function showVideoTitles(modal,videos){var voteTitles=[].slice.call(modal.config.modal.querySelectorAll('.js-vote-title'));voteTitles.forEach(function(titleElem,index){var videoTitle=videos[index].querySelector('.js-video-title').innerText;titleElem.innerText=videoTitle;common.Helpers.removeClassIfExists(titleElem,CLASSES.HIDE);});};/**
   * Hide/Show vote buttons
   *
   * @param {Object} modal puse.ui modal
   * @param {Number} currentPoll canary question id
   * @param {Boolean} showButtons true if voting buttons available
   */var toggleVoteButtons=function toggleVoteButtons(modal,currentPoll,showButtons){var voteButtons=[].slice.call(modal.config.modal.querySelectorAll('.js-voting-button'));voteButtons.forEach(function(btn,index){if(showButtons){btn.setAttribute('data-video-id',currentPoll.options[index].text);common.Helpers.removeClassIfExists(btn,CLASSES.HIDE);}else{core.style.addClass(btn,CLASSES.HIDE);}});};/**
   * Clear CSS classes from modal when closing the modal to open a fresh one
   * @param {Object} modal pulse ui.modal
   */var clearModal=function clearModal(modal){common.Helpers.removeClassIfExists(modal.config.modal,CLASSES.VOTE);// hide results
var resultsWrapper=modal.config.modal.querySelectorAll('.js-vote-result-container');for(var i=0;i<resultsWrapper.length;i++){core.style.addClass(resultsWrapper[i],'u-opaque');}// remove voted class
var voteItems=modal.config.modal.querySelectorAll('.js-featured-vote-item');for(i=0;i<voteItems.length;i++){common.Helpers.removeClassIfExists(voteItems[i],CLASSES.VOTED);common.Helpers.removeClassIfExists(voteItems[i],CLASSES.SELECTED_VOTE);}// remove winner class
var videoPlayers=document.querySelectorAll('.js-inline-player');for(i=0;i<videoPlayers.length;i++){core.style.removeClass(videoPlayers[i],CLASSES.WINNER);}};/**
   * Greatest Moments Modal constructor
   * @param {Object} pollData - voting data from canary
   */common.FeaturedVotingVideoModal=function(pollData){votingData=pollData;initModal();};})(PULSE.app,PULSE.core,PULSE.app.common,PULSE.ui);(function(app,ui,core,common){'use strict';var EVENT_TARGET_SELECTOR='body';var DEFAULT_PAGE_SIZE=20;var VIDEO_PLAYER_ID='VideoPlaylistModal';var ALLOWED_VIEW_COUNTS={ONE_WEEK:604800,ONE_DAY:86400};var CLASS={PLAYING:'is-playing',HIDE:'u-hide',HAS_VIDEOS:'has-videos',OPEN_MODAL:'open-modal',FILTER_SELECTED:'is-selected',ALL_VIDEOS:'all-videos',MATCH_MODAL:'has-match'};app.VideoPlaylistModal=function(container){var _self=this;_self.container=container;_self.site=_self.container.dataset.site;_self.eventTarget=document.querySelector(EVENT_TARGET_SELECTOR);_self.urlQuery=location.href.split('?')[1];/**
     * Properties to use when requesting video data
     * @type {Object}
     */_self.requestConfig={filter:{},type:'video',id:null};_self.initModal();};/**
   * Initialises the modal
   */app.VideoPlaylistModal.prototype.initModal=function(){var _self=this;var site=_self.container.getAttribute('data-site');_self.videoSidebarTemplate=site==='cwc'?'modal_sidebar':'modal_sidebar_icc';if(document.getElementById(VIDEO_PLAYER_ID)){_self.modalConfig={modal:_self.container};var closeButton=document.querySelector('.js-modal-close');closeButton.addEventListener('click',function(event){event.preventDefault();if(app.playlistModal){app.playlistModal.close();}});var modalConfig={selector:'.js-video-item-modal',openClass:'open',modalWrapId:'modalWrapPlaylist',modalWrapClass:'modal',modalContentWrapClass:'modal__inner-wrapper',activators:document.querySelectorAll('.js-video-item-modal'),openCallback:_self.openModalCallback.bind(_self),closeCallback:function closeCallback(modal){_self.closeModal(modal);core.style.removeClass(document.body,'u-body-no-scroll-modal');common.Helpers.removeClassIfExists(document.body,'u-body-no-scroll');}};if(typeof app.playlistModal==='undefined'){app.playlistModal=new ui.modal(modalConfig);app.playlistModal.match={};_self.modalWrap=document.getElementById('modalWrapPlaylist');}}};/**
   * Callback function that runs whenever a modal activator is clicked
   * @param  {Object} modal Returned Modal object from the PULSE.ui modal
   */app.VideoPlaylistModal.prototype.openModalCallback=function(modal){var _self=this;if(core.style.hasClass(modal.config.current.activator,'js-video-item-modal')){core.style.addClass(_self.modalConfig.modal,CLASS.OPEN_MODAL);core.style.addClass(document.body,'u-body-no-scroll-modal');core.style.addClass(_self.modalWrap,CLASS.OPEN_MODAL);core.style.addClass(document.body,'u-body-no-scroll');_self.updatePlayer(modal);if(app.playlistModal.match.id){core.style.addClass(_self.modalConfig.modal,CLASS.MATCH_MODAL);_self.matchView=true;_self.updateMatchInfo();}else{core.style.addClass(_self.modalConfig.modal,CLASS.ALL_VIDEOS);}}};/**
   * Updates the match summary component inside the modal
   */app.VideoPlaylistModal.prototype.updateMatchInfo=function(){var _self=this;var matchInfoContainer=_self.modalConfig.modal.querySelector('.js-modal-live-match-summary');var model={match:app.playlistModal.match};matchInfoContainer.innerHTML=app.common.templating.render(model,'modal_live_match');var overStreamContainer=matchInfoContainer.querySelector('[data-widget="over-stream"]');new app.OverStream(overStreamContainer);if(app.playlistModal.match.matchState==='L'){var liveUpdate=_self.modalConfig.modal.querySelector('.js-live-update');core.style.removeClass(liveUpdate,CLASS.HIDE);}if(window.innerWidth<app.measurements.desktop){app.common.event.dispatch(app.common.event.MODAL.OPEN_MOBILE,{bodyContent:_self.modalConfig.modal,closeCallback:app.playlistModal.close.bind(app.playlistModal)});}};/**
   * Updates the video description and title for the new video
   * @param  {Object} modal The modal object
   */app.VideoPlaylistModal.prototype.updatePlayer=function(modal){var _self=this;_self.videoId=modal.config.current.uiArgs.mediaId;_self.contentId=modal.config.current.uiArgs.contentId;if(_self.videoId&&_self.contentId){_self.pageUrl=window.location.href;_updateVideoConfig(modal.config.current,_self.site);_updateVideoTracking(modal.config.current);_self.convertParamsToFilter();_self.loadVideo(_self.videoId);_self.loader=modal.config.current.content.querySelector('.js-loader');if(_self.loader){core.style.removeClass(_self.loader,'u-hide');}_self.getPlaylistdata();}};/**
   * Makes a request to fetch videos related to the clicked-on video
   */app.VideoPlaylistModal.prototype.getPlaylistdata=function(){var _self=this;var url=app.common.createContentPath(_self.requestConfig.type,_self.requestConfig.filter,undefined,_self.requestConfig.id);var config={url:url,method:'GET',callback:_self.renderPlaylist,target:_self,forceCallback:true};core.data.manager.add(config);};/**
   * Renders the video playlist inside the video modal
   * @param  {Object} data Returned data of videos
   */app.VideoPlaylistModal.prototype.renderPlaylist=function(data){var _self=this;var videoData={};if(_self.requestConfig.type==='playlist'&&data.items&&data.items.length!==0){videoData.content=data.items.map(function(item){return item.response;});}else if(_self.requestConfig.type==='video'&&data.content&&data.content.length!==0){videoData.content=data.content;}else{videoData.content=[];}var model={videoList:videoData.content};_self.sidebarContainer=_self.container.querySelector('.js-video-sidebar');if(_self.sidebarContainer){_self.sidebarContainer.innerHTML=app.common.templating.render(model,_self.videoSidebarTemplate);}var config={advancePlaylist:_self.matchView?false:true,videos:videoData.content};new app.VideoPlaylist(_self.container,config);if(_self.sidebarContainer){core.style.addClass(_self.sidebarContainer,CLASS.HAS_VIDEOS);}if(_self.loader){core.style.addClass(_self.loader,CLASS.HIDE);}_self.filterOptions=_self.container.querySelectorAll('.js-filter-option');_self.noVideosMessage=_self.container.querySelector('.js-no-video-message');Array.prototype.forEach.call(_self.filterOptions,function(option){option.addEventListener('click',function(){var filterValue=option.getAttribute('data-filter-val');Array.prototype.forEach.call(_self.filterOptions,function(filterBtn){core.style.removeClass(filterBtn,CLASS.FILTER_SELECTED);});core.style.addClass(option,CLASS.FILTER_SELECTED);_self.onFilterSelection(filterValue);});});};/**
   * Updates the filter toggle
   * @param  {String} filterValue The filter option
   */app.VideoPlaylistModal.prototype.onFilterSelection=function(filterValue){var _self=this;var visibleItems=0;var videos=_self.container.querySelectorAll('.js-thumbnail');Array.prototype.forEach.call(videos,function(video){var videoFilterValue=video.getAttribute('data-tags');if(videoFilterValue&&videoFilterValue.indexOf(filterValue)===-1){core.style.addClass(video,CLASS.HIDE);}else{visibleItems++;common.Helpers.removeClassIfExists(video,CLASS.HIDE);}});if(visibleItems===0){core.style.removeClass(_self.sidebarContainer,CLASS.HAS_VIDEOS);common.Helpers.removeClassIfExists(_self.noVideosMessage,CLASS.HIDE);}else{core.style.addClass(_self.sidebarContainer,CLASS.HAS_VIDEOS);core.style.addClass(_self.noVideosMessage,CLASS.HIDE);}};/**
   * Closes the modal and stops the video player
   */app.VideoPlaylistModal.prototype.closeModal=function(){var _self=this;_self.player.api.pause();core.style.removeClass(_self.modalConfig.modal,CLASS.OPEN_MODAL);core.style.removeClass(_self.modalWrap,CLASS.OPEN_MODAL);history.pushState({},{},_self.pageUrl);};/**
   * Converts the URL params of the page into an API filter to be used to query the video API with
   */app.VideoPlaylistModal.prototype.convertParamsToFilter=function(){var _self=this;var playlistId=parseInt(core.url.getParam('playlistId'),10);var showLatest=core.url.getParam('latest')==='yes';if(!isNaN(playlistId)){_self.requestConfig.type='playlist';_self.requestConfig.id=playlistId;_self.requestConfig.filter=Object.assign(_self.requestConfig.filter,{pageSize:core.url.getParam('pageSize')||DEFAULT_PAGE_SIZE,fullObjectResponse:true// dereference videos into actual content responses
});}else{_self.requestConfig.type='video';_self.requestConfig.id=null;_self.requestConfig.filter=Object.assign(_self.requestConfig.filter,{tagNames:core.url.getParam('tagNames')||[],references:core.url.getParam('references')||[],pageSize:core.url.getParam('pageSize')||DEFAULT_PAGE_SIZE,page:core.url.getParam('page')||0});var viewCountWindowSeconds=core.url.getParam('viewCountWindowSeconds');if(viewCountWindowSeconds&&(ALLOWED_VIEW_COUNTS.ONE_WEEK.toString()===viewCountWindowSeconds||ALLOWED_VIEW_COUNTS.ONE_DAY.toString()===viewCountWindowSeconds)){_self.requestConfig.filter.viewCountWindowSeconds=viewCountWindowSeconds;}}if(!showLatest&&_self.videoTags&&_generateRandomPlaylist(_self.requestConfig)){_self.requestConfig.filter.tagNames=[_getRandomItem(_self.videoTags)];_self.requestConfig.filter.tagNames.push('cwc');console.info('Generating random playlist based on: ',_self.requestConfig.filter.tagNames);}};/**
   * Loads the video player inside the modal
   * @param  {Number} videoId The video id of the video to play
   */app.VideoPlaylistModal.prototype.loadVideo=function(videoId){var _self=this;_self.player=app.videoPlayerManager.getPlayerWithName('playlistPlayer');_self.player.loadVideoWithID(videoId);_self.player.playVideoWithID(videoId);_self.player.api.on('play',function(){core.style.addClass(_self.container,CLASS.PLAYING);});_self.player.api.on('pause',function(){if(_self.player.api.paused()===true&&_self.player.api.scrubbing()===false&&_self.player.api.seeking()===false){core.style.removeClass(_self.container,CLASS.PLAYING);}});};/**
   * Updates the video description for the player
   * @param  {Object} modal       Modal config data
   * @param  {string} site       Site that the playlist modal features on
   */var _updateVideoConfig=function _updateVideoConfig(modal,site){var videoTitle=modal.content.querySelector('.js-title');var videoDescription=modal.content.querySelector('.js-description');var videoDate=modal.content.querySelector('.js-date');var videoDateYear=modal.content.querySelector('.js-year');var videoDuration=modal.content.querySelector('.js-duration');var vidoSubtitle=modal.content.querySelector('.js-hashtag');var share=modal.content.querySelector('[data-widget="share"]');if(videoTitle){videoTitle.innerHTML=modal.uiArgs.mediaTitle||'';}if(videoDescription){videoDescription.innerHTML=modal.uiArgs.mediaDescription||'';}if(videoDate&&videoDateYear){videoDate.innerHTML=moment(modal.uiArgs.date,'DD-MMM-YY').format('D MMM')||'';videoDateYear.innerHTML=moment(modal.uiArgs.date,'DD-MMM-YY').format('YY')||'';}if(videoDuration){videoDuration.innerHTML=modal.uiArgs.duration||'';}if(vidoSubtitle){common.Helpers.removeClassIfExists(vidoSubtitle,CLASS.HIDE);var cwcSubtitle=site==='cwc'?'CWC19':'';vidoSubtitle.innerHTML=modal.uiArgs.subtitle||cwcSubtitle;}if(share&&videoTitle){share.setAttribute('data-share-message',videoTitle.innerHTML);}};/**
   * Updates the tracking info for the video player
   * @param  {Object} modal The modal object
   */var _updateVideoTracking=function _updateVideoTracking(modal){var trackingElement=modal.content.querySelector('[data-tracker-action]');trackingElement.setAttribute('data-tracker-id',modal.uiArgs.contentId);trackingElement.setAttribute('data-video-id',modal.uiArgs.mediaId);};/**
   * Get semi-random array item out of a given list of items
   * @param  {String[]} items the different items
   * @return {String}         one of the items
   */var _getRandomItem=function _getRandomItem(items){return items[Math.floor(Math.random()*items.length)];};/**
   * Checks the request config and returns true if there are no rules for generating the video
   * playlist, so we should use the video's tags to generate a random rule
   * @param  {Object} requestConfig the request configuration extracted from the URL of the page
   * @return {Boolean}              whether or not to generate a random playlist
   */var _generateRandomPlaylist=function _generateRandomPlaylist(requestConfig){if(requestConfig.type!=='playlist'){return!(requestConfig.filter.page!==0||requestConfig.filter.tagNames.length!==0||requestConfig.filter.references.length!==0);}return false;};var widget=document.querySelector('[data-widget="video-playlist-modal"]');if(widget){new app.VideoPlaylistModal(widget);}})(PULSE.app,PULSE.ui,PULSE.core,PULSE.app.common);(function(app,ui,common,core){common.VideoModal=function(){var _self=this;_self.initModal();};common.VideoModal.prototype.initModal=function(){var _self=this;// if ( !document.getElementById( 'videoPlayer' ) ) {
//     var player = document.createElement( 'div' );
//     core.style.addClass( player, 'modal__item' );
//     player.setAttribute( 'id', 'videoPlayer' );
//     player.setAttribute( 'data-script', 'ecb_video-player' );
//     document.body.appendChild( player );
//     var modalContent = common.templating.render(  {}, 'video_modal'  );
//     document.getElementById( 'videoPlayer' ).innerHTML = modalContent;
// }
if(document.getElementById('videoPlayer')){var modalCloseButton=document.getElementById('modalClose');modalCloseButton.addEventListener('click',function(event){event.preventDefault();if(app.videoPlayerModal){app.videoPlayerModal.close();}});var modalConfig={selector:'[data-ui-modal]',openClass:'is-open',modalContentId:'videoPlayerContentModal',modalWrapId:'videoPlayerWrapModal',modalWrapClass:'video-modal',modalContentWrapClass:'video-modal__content',openCallback:function openCallback(modal){_self.updatePlayer(modal);core.style.addClass(document.body,'u-body-no-scroll-wide');},closeCallback:function closeCallback(modal){_self.stopPlayer(modal);core.style.removeClass(document.body,'u-body-no-scroll-wide');}};var isYoutube=document.querySelector('.js-youtube-modal-activator');if(isYoutube){return;}if(typeof app.videoPlayerModal==='undefined'){app.videoPlayerModal=new ui.modal(modalConfig);}}};common.VideoModal.prototype.updatePlayer=function(modal){var _self=this;var videoId=modal.config.current.uiArgs.mediaId;var contentId=modal.config.current.uiArgs.contentId;_self.player=app.videoPlayerManager.getPlayerWithName('modalVideoPlayer');if(!videoId){var subscriberObject={url:common.createContentPath('video',{},undefined,contentId),method:'GET',callback:_self.playVideo,target:_self};core.data.manager.add(subscriberObject);}else{_self.playVideo({mediaId:videoId});}updateVideoDescription(modal.config.current);_self.player.setMeta({title:modal.config.current.uiArgs.mediaTitle,description:modal.config.current.uiArgs.mediaDescription,date:modal.config.current.uiArgs.mediaDate,contentId:modal.config.current.uiArgs.contentId});};common.VideoModal.prototype.playVideo=function(data){var _self=this;_self.player.playVideoWithID(data.mediaId);};common.VideoModal.prototype.stopPlayer=function(modal){var playerId=modal.config.modal.querySelector('[data-player]').getAttribute('id');var player=app.videoPlayerManager.getPlayerWithName(playerId);if(player){player.stopVideo();}};var updateVideoDescription=function updateVideoDescription(modal){var videoTitle=modal.content.querySelector('.js-video-title');var videoDescription=modal.content.querySelector('.js-video-description');var videoTime=modal.content.querySelector('.js-video-time');var videoShare=modal.content.querySelector('.js-video-share');if(videoTitle){videoTitle.innerHTML=modal.uiArgs.mediaTitle||'';}if(videoDescription){videoDescription.innerHTML=modal.uiArgs.mediaDescription||'';}if(videoTime){videoTime.innerHTML=common.durationToTime(modal.uiArgs.duration);}// update sharing
if(videoShare){var shareData={canonicalUrl:common.generateUrl('video',modal.uiArgs.contentId),title:modal.uiArgs.mediaTitle};var shareOptions=common.templating.render(shareData,'share');videoShare.innerHTML=shareOptions;// init social share widget
if(app.PageShare){var shares=videoShare.querySelectorAll('.js-social-option');for(var i=0;i<shares.length;i++){new app.PageShare(shares[i]);}}if(common.Share){var share=videoShare.querySelector('[data-widget="share"]');new common.Share(share);}}};common.videoModal=new common.VideoModal();})(PULSE.app,PULSE.ui,PULSE.app.common,PULSE.core);(function(common){//download.js v4.2, by dandavis; 2008-2016. [CCBY2] see http://danml.com/download.html for tests/usage
// v1 landed a FF+Chrome compat way of downloading strings to local un-named files, upgraded to use a hidden frame and optional mime
// v2 added named files via a[download], msSaveBlob, IE (10+) support, and window.URL support for larger+faster saves than dataURLs
// v3 added dataURL and Blob Input, bind-toggle arity, and legacy dataURL fallback was improved with force-download mime and base64 support. 3.1 improved safari handling.
// v4 adds AMD/UMD, commonJS, and plain browser support
// v4.1 adds url download capability via solo URL argument (same domain/CORS only)
// v4.2 adds semantic variable names, long (over 2MB) dataURL support, and hidden by default temp anchors
// https://github.com/rndme/download
common.download=function(data,strFileName,strMimeType){var self=window,// this script is only for browsers anyway...
defaultMime='application/octet-stream',// this default mime also triggers iframe downloads
mimeType=strMimeType||defaultMime,payload=data,url=!strFileName&&!strMimeType&&payload,anchor=document.createElement('a'),toString=function toString(a){return String(a);},myBlob=self.Blob||self.MozBlob||self.WebKitBlob||toString,fileName=strFileName||'download',blob,reader;myBlob=myBlob.call?myBlob.bind(self):Blob;if(String(this)==='true'){//reverse arguments, allowing download.bind(true, "text/xml", "export.xml") to act as a callback
payload=[payload,mimeType];mimeType=payload[0];payload=payload[1];}if(url&&url.length<2048){// if no filename and no mime, assume a url was passed as the only argument
fileName=url.split('/').pop().split('?')[0];anchor.href=url;// assign href prop to temp anchor
if(anchor.href.indexOf(url)!==-1){// if the browser determines that it's a potentially valid url path:
var ajax=new XMLHttpRequest();ajax.open('GET',url,true);ajax.responseType='blob';ajax.onload=function(e){download(e.target.response,fileName,defaultMime);};setTimeout(function(){ajax.send();},0);// allows setting custom ajax headers using the return:
return ajax;}// end if valid url?
}// end if url?
//go ahead and download dataURLs right away
if(/^data\:[\w+\-]+\/[\w+\-]+[,;]/.test(payload)){if(payload.length>1024*1024*1.999&&myBlob!==toString){payload=dataUrlToBlob(payload);mimeType=payload.type||defaultMime;}else{return navigator.msSaveBlob?// IE10 can't do a[download], only Blobs:
navigator.msSaveBlob(dataUrlToBlob(payload),fileName):saver(payload);// everyone else can save dataURLs un-processed
}}//end if dataURL passed?
blob=payload instanceof myBlob?payload:new myBlob([payload],{type:mimeType});function dataUrlToBlob(strUrl){var parts=strUrl.split(/[:;,]/),type=parts[1],decoder=parts[2]=='base64'?atob:decodeURIComponent,binData=decoder(parts.pop()),mx=binData.length,i=0,uiArr=new Uint8Array(mx);for(i;i<mx;++i){uiArr[i]=binData.charCodeAt(i);}return new myBlob([uiArr],{type:type});}function saver(url,winMode){if('download'in anchor){//html5 A[download]
anchor.href=url;anchor.setAttribute('download',fileName);anchor.className='download-js-link';anchor.innerHTML='downloading...';anchor.style.display='none';document.body.appendChild(anchor);setTimeout(function(){anchor.click();document.body.removeChild(anchor);if(winMode===true){setTimeout(function(){self.URL.revokeObjectURL(anchor.href);},250);}},66);return true;}// handle non-a[download] safari as best we can:
if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)){url=url.replace(/^data:([\w\/\-\+]+)/,defaultMime);if(!window.open(url)){// popup blocked, offer direct download:
if(confirm('Displaying New Document\n\nUse Save As... to download, then click back to return to this page.')){location.href=url;}}return true;}//do iframe dataURL download (old ch+FF):
var f=document.createElement('iframe');document.body.appendChild(f);if(!winMode){// force a mime that will download:
url='data:'+url.replace(/^data:([\w\/\-\+]+)/,defaultMime);}f.src=url;setTimeout(function(){document.body.removeChild(f);},333);}//end saver
if(navigator.msSaveBlob){// IE10+ : (has Blob, but not a[download] or URL)
return navigator.msSaveBlob(blob,fileName);}if(self.URL){// simple fast and modern way using Blob and URL:
saver(self.URL.createObjectURL(blob),true);}else{// handle non-Blob()+non-URL browsers:
if(typeof blob==='string'||blob.constructor===toString){try{return saver('data:'+mimeType+';base64,'+self.btoa(blob));}catch(y){return saver('data:'+mimeType+','+encodeURIComponent(blob));}}// Blob but not URL support:
reader=new FileReader();reader.onload=function(e){saver(this.result);};reader.readAsDataURL(blob);}return true;};/* end download() */})(PULSE.app.common);(function(app,common){'use strict';/**
   * common.HoverVideoPlay
   * Handles the video pause and play functionality of all the inline video elements
   *
   * @constructor
   * @param {NodeList} videoItems list of video elements
   * @param {NodeList} isModal if modal functionality exists for this instance of HoverVideoPlay
   */common.HoverVideoPlay=function(videoItems,isModal){var _self=this;_self.videoItems=videoItems;_self.isModal=isModal;if(_self.isModal){var modalConfig={parent:document.body,selector:'[data-ui-modal]',openClass:'open',modalId:'modalWrap',modalWrapClass:'modalWrapper',modalContentWrapClass:'modalContent',closeText:'close',openCallback:_self.videoModalOpen.bind(_self),closeCallback:_self.videoModalClose.bind(_self)};var modal=new PULSE.ui.modal(modalConfig);}if(_self.videoItems){_self.bindEvents();}};/**
   * Listens for mouseover and mouseout events on the video elements
   */common.HoverVideoPlay.prototype.bindEvents=function(){var _self=this;var container=_self.videoItems.children||_self.videoItems;if(document.body.clientWidth>=app.measurements.tablet){Array.prototype.forEach.call(container,function(item){var videoItem=item.querySelector('.js-video-item');if(videoItem){var id=videoItem.id;item.addEventListener('mouseover',function(){_self.hoverPlay(id);});item.addEventListener('mouseout',function(){_self.hoverPause(id);});}});}};/**
   * Plays the inline playing video on mouseover event on the current poll option
   * @param  {Number} id Video ID
   */common.HoverVideoPlay.prototype.hoverPlay=function(id){var player=app.videoPlayerManager.getPlayerWithName(id);player.api.play();};/**
   * Pauses the inline playing video on mouseout event on the current poll option
   * @param  {Number} id Video ID
   */common.HoverVideoPlay.prototype.hoverPause=function(id){var player=app.videoPlayerManager.getPlayerWithName(id);player.api.pause();};/**
   * Opens the video modal for the current poll option
   * @param  {Object} modal Modal object
   */common.HoverVideoPlay.prototype.videoModalOpen=function(modal){var videoId=modal.config.current.uiArgs.mediaId;app.videoPlayerManager.getPlayerWithName('modalPlayer').playVideoWithID(videoId);};/**
   * Closes the video modal
   * @param  {Object} modal Modal object
   */common.HoverVideoPlay.prototype.videoModalClose=function(modal){app.videoPlayerManager.getPlayerWithName('modalPlayer').api.pause();};})(PULSE.app,PULSE.app.common);/*globals PULSE, PULSE.app */ /**
* outlines the format of a meta data object that should be passed into a
* call to a video player's setMeta function. strings may be plain or can
* be HTML strings, as innerHTML will be used to set element content
*
* @typedef {object} videoMeta
* @property {string} title
* @property {string} description
* @property {string} date
*/(function(app,common,core){/**
  * basis set of functionality shared by all video players. extend this class
  * when creating a new type of video player
  *
  * @param {object} element the dom element in which the player resides
  * @param {object} config configuration for the video player
  */app.brightCoveVideo=function(element,apiObject){var _self=this;_self.name=apiObject.id_||'default_player';_self.api=apiObject;_self.catalog=_self.api.catalog;_self.players=document.querySelectorAll('[data-widget="video-player"]');_self.entitlementMessage=document.querySelector('.js-video-entitlement-message');_self.idToPlayOnLoad=false;_self.ready=false;_self.element=element;_self.metaElements=false;_self.attemptToFindMetaDivs();// app.Cognito.isUserLoggedIn().then( function() {
//     _self.userSessionExists = true;
// } ).catch( function() {
//     _self.userSessionExists = false;
//     _self.checkEntitlement();
// } );
// Wait for the SSO ready event before initialising the modal for segmentation purposes
if(app.SSO.ready){_self.initialise();}else{document.addEventListener(common.constants.SSO.ready,function(){_self.initialise();});}};app.brightCoveVideo.prototype.initialise=function initialise(){var _self=this;// Check user is logged in and if they are a paid member checking 'userStatus' on SSO token
var userLoggedIn=app.SSO.authenticated;if(userLoggedIn){_self.userSessionExists=true;}else{_self.userSessionExists=false;_self.checkEntitlement();}};/**
  * look for meta data holding divs in the containing div and add references to them
  * if found. These will be set through the 'setMeta' option.
  */app.brightCoveVideo.prototype.attemptToFindMetaDivs=function(){var _self=this;_self.metaElements={title:_self.element.querySelector('.videoTitle')||false,description:_self.element.querySelector('.videoDescription')||false,date:_self.element.querySelector('.videoDate')||false};};/**
  * given a settings object set the metadata on the video, assuming that the
  * meta divs exist, you should strictly conform to using the same
  * property names as defined in the videoMeta typedef
  *
  * @param {videoMeta} metaDatas
  */app.brightCoveVideo.prototype.setMeta=function(metaDatas){var _self=this;var properties=Object.keys(_self.metaElements);properties.map(function(metaElementname){var el=_self.metaElements[metaElementname];if(el&&metaDatas[metaElementname]){el.innerHTML=metaDatas[metaElementname];}else if(el){//if we dont have data to show, then ensure that we, clear any
// data that may remain
el.innerHTML='';}});if(metaDatas.contentId){// var videoShare = _self.element.parentNode.getElementsByClassName( 'videoSocialShare' )[ 0 ];
// var shareUrl = window.location.hostname + '/tv/' + metaDatas.contentId;
// var pageShare = new common.PageShare( videoShare, shareUrl );
}};/**
  * set api controllers
  */app.brightCoveVideo.prototype.setApiControllers=function(player,api){var _self=this;_self.player=player;_self.api=api;_self.ready=true;if(_self.idToPlayOnLoad){_self.playVideoWithID(_self.idToPlayOnLoad);_self.api.pause(false);}};/**
  * play a video using a brightcove video id
  * @param {int} videoID the brightcove ID of the video to
  */app.brightCoveVideo.prototype.playVideoWithID=function(videoID){var _self=this;Array.prototype.map.call(_self.players,function(player){player.style.display='';});_self.catalog.getVideo(videoID,function(error,video){//deal with error
_self.catalog.load(video);_self.api.play();_self.addCaptions();});_self.playVideo(videoID);};app.brightCoveVideo.prototype.checkEntitlement=function(){var _self=this;// Show entitlement message over video player on page load if video has entitlement tag and no user session exists
if(_self.element.dataset.entitlement&&!_self.userSessionExists){core.style.removeClass(_self.entitlementMessage,app.common.constants.CLASS.HIDE);_self.players.forEach(function(player){var videoPlayer=player.querySelector('video');videoPlayer.pause();});}// Set event listener for subsequent video play events
// ie: when a new video is selected from playlist or if user removes entitlement message from DOM and attempts to play video
document.addEventListener(app.common.event.VIDEO.PLAY,function(evt){core.style.addClass(_self.entitlementMessage,app.common.constants.CLASS.HIDE);var videoId=_self.element.dataset.videoId;var request={url:app.apiPath.cms.video+videoId,callback:function callback(data){if(_self.getEntitlementTag(data.tags)===app.common.constants.ENTITLEMENT.FREE){console.warn('No user session present - stopping video.');videojs(evt.detail.playerId).pause();core.style.removeClass(_self.entitlementMessage,app.common.constants.CLASS.HIDE);}},forceCallback:true};core.data.manager.add(request);});};app.brightCoveVideo.prototype.getEntitlementTag=function(tags){var entitlementTag='';tags.forEach(function(tag){if(tag.label.includes('premium-')){entitlementTag=tag.label;}});return entitlementTag;};/**
  * load a video using a brightcove video id
  * @param {int} videoID the brightcove ID of the video to
  */app.brightCoveVideo.prototype.loadVideoWithID=function(videoID){var _self=this;Array.prototype.map.call(_self.players,function(player){player.style.display='';});_self.catalog.getVideo(videoID,function(error,video){//deal with error
_self.catalog.load(video);_self.addCaptions();});};app.brightCoveVideo.prototype.addCaptions=function(autoplay){var _self=this;if(_self.api.mediainfo.custom_fields&&_self.api.mediainfo.custom_fields.VTT){var vttFile=_self.api.mediainfo.custom_fields.VTT;_self.api.addRemoteTextTrack({kind:'captions',language:'en',label:'English',src:vttFile});if(autoplay){_self.api.on('play',function(){_self.api.textTracks()[1].mode='showing';});}}};/**
  * stop this brightcove instance from playing
  */app.brightCoveVideo.prototype.stopVideo=function(){var _self=this;_self.api.pause();};/**
  * play a video using a brightcove video id
  * @param {string} videoID brightcove video id
  */app.brightCoveVideo.prototype.playVideo=function(videoID){var _self=this;};// initialise on video players
var widgets=document.querySelectorAll('[data-widget="video-player"]');Array.prototype.map.call(widgets,function(widget){var playerName=widget.querySelector('video').getAttribute('id');widget=new app.brightCoveVideo(widget,{name:playerName});});})(PULSE.app,PULSE.app.common,PULSE.core);// globals PULSE, PULSE.app, PULSE.ui
(function(app,core,common){var FORMAT_STARTING_YEAR_MAP={odi:1971,test:1882,t20i:2005};var FORMAT_DISABLED_MONTH_MAP={odi:['01'],// January
t20i:['01','02']//January & February
};var FilterTypes=[{name:'MENS_TEAM',label:'Filter by Team',type:'CRICKET_TEAM',current:'All Teams',value:'',filterClass:'',options:[{key:'ALL',value:'All Teams'}]},{name:'WOMENS_TEAM',label:'Filter by Team',type:'CRICKET_TEAM',current:'All Teams',value:'',filterClass:'',options:[{key:'ALL',value:'All Teams'}]},{name:'YEAR',label:'Filter by Year',type:'YEAR',current:'All Years',value:'',filterClass:'',options:[{key:'ALL',value:'All Years'}]},{name:'YEARS',label:'Filter by Year',type:'YEAR',current:'All Years',value:'',filterClass:'',options:[{key:'ALL',value:'All Years'}]},{name:'RANKINGS_YEAR',label:'Filter by Year',type:'RANKINGS_YEAR',current:'Please select',value:'',filterClass:'',options:[{key:'',value:'Please select'}]},{name:'MONTH',label:'Filter by Month',type:'MONTH',current:'All Months',value:'',filterClass:'disabled',options:[{key:'ALL',value:'All Months'}]},{name:'RANKINGS_MONTH',label:'Filter by Month',type:'RANKINGS_MONTH',current:'Please select',value:'',filterClass:'',options:[{key:'',value:'Please select'}]},{name:'RANKINGS_DAY',label:'Filter by Day',type:'RANKINGS_DAY',current:'Please select',value:'',filterClass:'',options:[{key:'',value:'Please select'}]},{name:'YEAR_FUTURE',label:'Filter by Year',type:'YEAR_FUTURE',current:moment().year(),value:'',filterClass:'',options:[]},{name:'ALL_TEAM',label:'Filter by Team',type:'CRICKET_TEAM',current:'All Teams',value:'',filterClass:'',options:[{key:'ALL',value:'All Teams'}]},{name:'FORMAT',label:'Filter by Format',type:'FORMAT',current:'All Formats',value:'',filterClass:'',options:[{key:'ALL',value:'All Formats'}]},{name:'CHAMPIONS_TROPHY',label:'Filter by Team',type:'CRICKET_TEAM',current:'All Teams',value:'',filterClass:'',options:[{key:'ALL',value:'All Teams'}]},{name:'CHAMPIONS_TROPHY_VENUES',label:'Filter by Venue',type:'CRICKET_VENUE',current:'All Venues',value:'',filterClass:'',options:[{key:'ALL',value:'All Venues'}]},{name:'WWC_TEAMS',label:'Filter by Team',type:'CRICKET_TEAM',current:'All Teams',value:'',filterClass:'',options:[{key:'ALL',value:'All Teams'}]},{name:'WWC_VENUES',label:'Filter by Venue',type:'CRICKET_VENUE',current:'All Venues',value:'',filterClass:'',options:[{key:'ALL',value:'All Venues'}]},{name:'U19WC_TEAMS',label:'Filter by Team',type:'CRICKET_TEAM',current:'All Teams',value:'',filterClass:'',options:[{key:'ALL',value:'All Teams'}]},{name:'WWT20_TEAMS',label:'Filter by Team',type:'CRICKET_TEAM',current:'All Teams',value:'',filterClass:'',options:[{key:'ALL',value:'All Teams'}]},{name:'WWT20_VENUES',label:'Filter by Venue',type:'CRICKET_VENUE',current:'All Venues',value:'',filterClass:'',options:[{key:'ALL',value:'All Venues'}]},{name:'CWC_TEAMS',label:'Select Team',type:'CRICKET_TEAM',current:'All Teams',value:'',filterClass:'',options:[{key:'ALL',value:'All Teams'}]},{name:'WTC_TEAMS',label:'Select Team',type:'CRICKET_TEAM',current:'All Teams',value:'',filterClass:'',options:[{key:'ALL',value:'All Teams'}]},{name:'CWC_VENUES',label:'Select Venue',type:'CRICKET_VENUE',current:'All Venues',value:'',filterClass:'',options:[{key:'ALL',value:'All Venues'}]},{name:'ALL_ROLES',label:'Filter by Roles',type:'CRICKET_ROLES',current:'All Roles',value:'',filterClass:'',options:[{key:'ALL',value:'All Roles'}]}];var replaceAll=function replaceAll(target,search,replacement){return target.replace(new RegExp(search,'g'),replacement);};/**
   * Listeners for dropdown options
   *
   * @param {HTMLElement} element dropdown element
   */var setOptionsListeners=function setOptionsListeners(element){var _self=this;// get option click
var options=element.querySelector('.js-drop-down-options');var current=element.querySelector('.js-drop-down-current');var label=element.querySelector('.js-drop-down-label');var onOptionSelect=function onOptionSelect(optionEl){// save selected option as current option
_self.updateCurrent({type:label.getAttribute('data-type'),title:optionEl.innerHTML,key:optionEl.getAttribute('data-option')});// toggle dropdown
core.style.toggleClass(element,'is-open');current.setAttribute('data-value',_self.currentOption.key);current.innerHTML=_self.currentOption.title;};Array.prototype.forEach.call(options.querySelectorAll('[data-option]'),function(optionEl){common.A11Y_HELPER.addListener(optionEl,function(){onOptionSelect(optionEl);});optionEl.addEventListener(app.common.event.FILTER.RESET,function(event){onOptionSelect(event.target);});});};/**
   * filterDropDown
   * Common module that should be called in content list module for filtering
   * @param {object} targetObject - widget element
   * @param {object} filterTarget - section element which should hold a update function and where data gets loaded in.
   * @param {Array}  filterItems  - items to be used in the dropdown list instead of the default items in appConfig
   * @param {String} template - template
   */common.filterDropDown=function(targetObject,filterTarget,filterItems,template){var _self=this;_self.targetObject=targetObject;_self.container=filterTarget;_self.filterItems=filterItems||{};_self.currentOption={type:'',title:'',key:''};_self.filters={};_self.filterDropDownTemplate=template?template:'filter_dropdown';_self.dataFilters=[];if(typeof _self.targetObject.filter!=='undefined'){if(typeof _self.targetObject.filter==='string'){_self.targetObject.filter=[_self.targetObject.filter];// backward compatibility
}_self.dataFilters=_self.targetObject.filter;}//TODO: check if there are duplicates in dataFilters array and deduplicate it
_self.dataFilters.forEach(function(filter){FilterTypes.forEach(function(type){if(filter===type.name){_self.render(type);}});});_self.buildDropdown();};/**
   * Render TEAMS dropdown
   *
   * @param {Object} model filter model
   * @param {Array} src array of objects that will be rendered on the dropdown
   * @param {Boolean} renderFlag true if a country flag needs to be rendered next to the dropdown-option labels
   * @param {Boolean} renderOptionCount true if the dropdown needs to show total number of filtering options
   */common.filterDropDown.prototype.renderTeams=function(model,src,renderFlag,renderOptionCount){var _self=this;var getTeamAbbr=function getTeamAbbr(teamName){for(var abbr in common.constants.SSO_TEAMS_ABBR){if(common.constants.SSO_TEAMS_ABBR[abbr]===teamName){return abbr;}}return null;};var newOptions=[];for(var i=0;i<src.length;i++){newOptions.push({key:src[i].id,value:src[i].fullName,flag:renderFlag?getTeamAbbr(src[i].fullName):false,type:'CRICKET_TEAM'});}if(renderOptionCount){model.optionCount=newOptions.length;}model.options=model.options.concat(newOptions);_self.container.innerHTML+=app.common.templating.render(model,_self.filterDropDownTemplate);};/**
   * Render FORMATS dropdown
   *
   * @param {Object} model filter model
   * @param {Array} src array of objects that will be rendered on the dropdown
   */common.filterDropDown.prototype.renderFormats=function(model,src){var _self=this;Array.prototype.forEach.call(src,function(item){model.options.push({key:item,value:replaceAll(item,'_',' ')});});_self.container.innerHTML+=app.common.templating.render(model,_self.filterDropDownTemplate);};/**
   * Render VENUES dropdown
   *
   * @param {Object} model filter model
   * @param {Array} src array of objects that will be rendered on the dropdown
   * @param {Boolean} renderOptionCount true if the dropdown needs to show total number of filtering options
   */common.filterDropDown.prototype.renderVenues=function(model,src,renderOptionCount){var _self=this;var newOptions=[];for(var i=0;i<src.length;i++){newOptions.push({key:src[i].id,value:src[i].fullName});}newOptions.sort(function(a,b){if(a.value<b.value){return-1;}if(b.value<a.value){return 1;}return 0;});if(renderOptionCount){model.optionCount=newOptions.length;}model.options=model.options.concat(newOptions);_self.container.innerHTML+=app.common.templating.render(model,_self.filterDropDownTemplate);};/**
   * Render YEARS dropdown
   *
   * @param {Object} model filter model
   * @param {Array} src array of objects that will be rendered on the dropdown
   */common.filterDropDown.prototype.renderYears=function(model,src,valueAsKeys,concat){var _self=this;var newOptions=[];for(var i=0;i<src.length;i++){newOptions.push({key:valueAsKeys?src[i]:i+1,value:src[i]});}model.options=concat?model.options.concat(newOptions):newOptions;var element=core.dom.appendDomString(_self.container,app.common.templating.render(model,_self.filterDropDownTemplate));_self.filters.YEAR=element;};/**
   * Render RANKED YEARS dropdown
   *
   * @param {Object} model filter model
   * @param {Number} startingYear first year to show on the filter options
   */common.filterDropDown.prototype.renderRankedYears=function(model){var _self=this;// Fallback to earliest starting year for ranked data
var defaultStartingYear=1971;var format=_self.targetObject.container.getAttribute('data-format');var startingYear=format?FORMAT_STARTING_YEAR_MAP[format]:defaultStartingYear;var newOptions=[];var currentYear=moment().year();for(var i=currentYear;i>=startingYear;i-=1){newOptions.push({key:i,value:i});}model.options=model.options.concat(newOptions);var element=core.dom.appendDomString(_self.container,app.common.templating.render(model,_self.filterDropDownTemplate));_self.filters[model.name]=element;};/**
   * Render MONTHS dropdown
   *
   * @param {Object} model filter model
   * @param {Array} src array of objects that will be rendered on the dropdown
   */common.filterDropDown.prototype.renderMonths=function(model,src){var _self=this;var newOptions=[];for(var i=0;i<src.length;i++){var key=i+1;newOptions.push({key:(key<10?'0':'')+key,value:src[i]});}model.options=model.options.concat(newOptions);var element=core.dom.appendDomString(_self.container,app.common.templating.render(model,_self.filterDropDownTemplate));_self.filters[model.name]=element;};/**
   * Render DAYS dropdown
   *
   * @param {Object} model filter model
   */common.filterDropDown.prototype.renderDays=function(model){var _self=this;var element=core.dom.appendDomString(_self.container,app.common.templating.render(model,_self.filterDropDownTemplate));_self.filters[model.name]=element;};/**
   * Render FORMATS dropdown
   *
   * @param {Object} model filter model
   * @param {Array} src array of objects that will be rendered on the dropdown
   */common.filterDropDown.prototype.renderRoles=function(model,src){var _self=this;// eslint-disable-next-line no-debugger
// debugger;
var options=Object.keys(src).map(function(key){return{key:key,value:src[key]};});model.options=model.options.concat(options);_self.container.innerHTML+=app.common.templating.render(model,_self.filterDropDownTemplate);};/**
   * Render dropdown widget
   * @param {object} type dropdown
   */ /* eslint-disable complexity */common.filterDropDown.prototype.render=function(type){var _self=this;switch(type.name){case'RANKINGS_DAY':_self.renderDays(type);break;case'RANKINGS_YEAR':_self.renderRankedYears(type);break;case'YEAR':_self.renderYears(type,_self.filterItems.years||app.years);break;case'YEARS':_self.renderYears(type,_self.filterItems.years||app.years,true,true);break;case'RANKINGS_MONTH':case'MONTH':_self.renderMonths(type,app.months);break;case'YEAR_FUTURE':_self.renderYears(type,_self.filterItems.yearsFuture);break;case'MENS_TEAM':_self.renderTeams(type,_self.filterItems.mens||app.teams.mens,false);break;case'WOMENS_TEAM':_self.renderTeams(type,_self.filterItems.womens||app.teams.womens,false);break;case'ALL_TEAM':_self.renderTeams(type,_self.filterItems.allteam||app.teams.mens.concat(app.teams.womens),false);break;case'CHAMPIONS_TROPHY':_self.renderTeams(type,app.teams.championsTrophy,false);break;case'CHAMPIONS_TROPHY_VENUES':_self.renderVenues(type,app.teams.championsTrophyVenues);break;case'CHAMPIONS_TROPHY_GROUPS':_self.renderTeams(type,app.teams.championsTrophy,false);break;case'WWC_TEAMS':_self.renderTeams(type,app.teams.wwcTeams,false);break;case'WWC_VENUES':_self.renderVenues(type,app.teams.wwcVenues);break;case'FORMAT':_self.renderFormats(type,_self.filterItems.format||app.formats);break;case'U19WC_TEAMS':_self.renderTeams(type,app.teams.u19wc,false);break;case'WWT20_VENUES':_self.renderVenues(type,app.teams.wwt20Venues);break;case'WWT20_TEAMS':_self.renderTeams(type,app.teams.wwt20Teams,false);break;case'CWC_VENUES':_self.renderVenues(type,app.teams.cricketWorldCupVenues,true);break;case'CWC_TEAMS':_self.renderTeams(type,app.teams.cricketWorldCup,true,true);break;case'WTC_TEAMS':_self.renderTeams(type,app.teams.worldTestChampionship,true,true);break;case'ALL_ROLES':_self.renderRoles(type,_self.filterItems.allRoles||common.constants.PLAYER_ROLES);break;default:console.info('Unknown filter type');break;}};/* eslint-enable complexity */ /**
   * UpdateCurrent
   * Helper function to update current dropdown option
   * This function also calls the update function of the target object
   *
   * @param {object} data dropdown data
   */common.filterDropDown.prototype.updateCurrent=function(data){var _self=this;_self.currentOption.type=typeof data.type!=='undefined'?data.type:'';_self.currentOption.title=typeof data.title!=='undefined'?data.title:'';_self.currentOption.key=typeof data.key!=='undefined'?data.key:'';// send data to target list
_self.targetObject.update(_self.getCurrent());};/**
   * Get current dropdown option
   *
   * @returns {Object} current option
   */common.filterDropDown.prototype.getCurrent=function(){var _self=this;return _self.currentOption;};/**
   * Dropdown
   * Creates a custom dropdown
   * turns dom element with js-drop-down class into a custom dropdown and keeps track of selected option
   */common.filterDropDown.prototype.buildDropdown=function(){var _self=this;_self.dropDown=_self.container.querySelectorAll('.js-drop-down');Array.prototype.forEach.call(_self.dropDown,function(element){common.A11Y_HELPER.addListener(element.querySelector('.js-dropdown-trigger'),function(event){event.preventDefault();// toggle dropdown
core.style.toggleClass(element,'is-open');});setOptionsListeners.call(_self,element);});};/**
   * Render filter dropdown options
   *
   * @param {String} type filter type
   * @param {Array} options filter options
   */common.filterDropDown.prototype.renderOptions=function(type,options){var _self=this;var element=_self.filters[type];var dropdownOptions=element.querySelector('.js-drop-down-options');dropdownOptions.innerHTML=app.common.templating.render({options:options},'filter_options');setOptionsListeners.call(_self,element);_self.enableFilterByName(type);};/**
   * Gets the default model of a filter based on it's type
   *
   * @param {String} type the filter type
   * @return {Object} default filter model
   */common.filterDropDown.prototype.getDefaultModel=function(type){return FilterTypes.find(function(filterType){return filterType.type===type;});};/**
   * Disables month options on ranked filter if
   * month is not available in starting year
   *
   * @param {String} type the filter type
   * @param {String} year value of the year filter
   * @param {String} format format of the match - odi | t20 | test
   */common.filterDropDown.prototype.disableRankedMonths=function(type,year,format){var _self=this;var defaultOptions=_self.getDefaultModel(type);var dropdown=_self.getFilterElementByName(defaultOptions.name);var options=dropdown.querySelectorAll('[data-option]');// Enable all months to clear out any previously disabled months
Array.prototype.forEach.call(options,function(optionEl){core.style.removeClass(optionEl,'disabled');});// If the dropdown year matches the starting year for this format and there are months to be disabled
// Enter logic to disable months
if(FORMAT_DISABLED_MONTH_MAP[format]&&FORMAT_STARTING_YEAR_MAP[format]===Number(year)){Array.prototype.forEach.call(options,function(optionEl){var monthOption=optionEl.getAttribute('data-option');// If the options month exists in the disabled months Array, disable the option
if(FORMAT_DISABLED_MONTH_MAP[format].some(function(month){return month===monthOption;})){core.style.addClass(optionEl,'disabled');}});}};/**
   * Display default option of a filter element
   *
   * @param {String} type the filter type
   */common.filterDropDown.prototype.displayDefaultOption=function(type){var _self=this;var defaultOptions=_self.getDefaultModel(type);var dropdown=_self.getFilterElementByName(defaultOptions.name);var current=dropdown.querySelector('.js-drop-down-current');current.setAttribute('data-value','');current.innerHTML=defaultOptions.options[0].value;};/**
   * Gets a filter dropdown element by the filter name
   *
   * @param {String} name filter config name
   * @returns {HTMLElement} filter element
   */common.filterDropDown.prototype.getFilterElementByName=function(name){var _self=this;return _self.filters[name];};/**
   * Adds the 'disabled' class from filter based on the filter name
   *
   * @param {String} name filter config name
   */common.filterDropDown.prototype.disableFilterByName=function(name){var _self=this;core.style.addClass(_self.getFilterElementByName(name),'disabled');};/**
   * Removes the 'disabled' class from filter based on the filter name
   *
   * @param {String} name filter config name
   */common.filterDropDown.prototype.enableFilterByName=function(name){var _self=this;core.style.removeClass(_self.getFilterElementByName(name),'disabled');};})(PULSE.app,PULSE.core,PULSE.app.common);(function(app,common){common.getTeamListModel=function(squadsData){if(!squadsData)return{teams:[]};var _self=this,squads=squadsData.squads.ALL,teamsArray=squads.map(function(squad,index){return squad.team;});teamsArray.sort(function(a,b){if(a.fullName<b.fullName){return-1;}if(a.fullName>b.fullName){return 1;}return 0;});return{teams:teamsArray};};})(PULSE.app,PULSE.app.common);(function(app,common){// pass in the 'created_time' string returned from Instagram
// stamp arrives formatted as Fri Apr 29 2016 13:59:11 GMT+0100 (BST)
var parsePostedDate=function parsePostedDate(dateString){// by splitting the date string it'll also work for Safari http://stackoverflow.com/a/6427318/1486020
var a=dateString.split(/[^0-9]/);var date=new Date(a[0],a[1]-1,a[2],a[3],a[4],a[5]);return date;};var getUserAccountUrl=function getUserAccountUrl(id){return'https://www.facebook.com/'+id;};var getPhotoUrl=function getPhotoUrl(attachments){if(!attachments||attachments.data.length===0){return null;}var photoObject=attachments.data[0];if(photoObject.type==='visual_poll'){// post is a poll
return'/resources/'+window.RESOURCE_VERSION+'/i/elements/default-thumbnail.jpg';}if(photoObject.subattachments){// post is an album - return url of first image
return photoObject.subattachments.data[0].media.image.src;}if(photoObject.media){return photoObject.media.image.src;}return null;};var getAvatar=function getAvatar(post){if(post.from&&post.from.picture){return post.from.picture.data.url;}return;};common.getFacebookModel=function(post){var model,userAccountLink=getUserAccountUrl(post.from.id),postDate=parsePostedDate(post.created_time),sinceString=common.getSinceString(postDate),// eslint-disable-next-line no-unused-vars
photo='';if(post.type==='photo'){photo=post.picture;}model={timestamp:sinceString,id:post.id,text:post.message,link:post.permalink_url,photo:getPhotoUrl(post.attachments),feedType:'facebook',user:{id:post.from.id,name:post.from.name,link:userAccountLink,avatarUrl:getAvatar(post)}};return model;};})(PULSE.app,PULSE.app.common);// globals PULSE, PULSE.app, PULSE.app.common
(function(app,common){/**
   * Utility method to scan the given String for what look like HTTP links,
   * Twitter handles and hashtags (called entities), and mark them up with <a> tags.
   *
   * For URLs and media links, use expanded_url as the title and use the
   * display_url provided by Twitter as the text of the anchor tag
   *
   * See: https://dev.twitter.com/docs/tco-url-wrapper/best-practices
   *
   * @param  {String} string   - the original body of the tweet
   * @param  {Object} entities - mapping of types of entities to an array of entity objects
   * @return {String}          - the processed body of the tweet, with anchor tags
   */var markUpLinks=function markUpLinks(string,entities){// to support the old way of doing things, when entities weren't use
// to determine links to pages or media and the URL was directly processed
// from the tweet text body
if(!entities){string=string.replace(/(https{0,1}:\/\/\S+)/g,'<a target="_blank" href="$1">$1</a>').replace(/@(\S+)/g,'<a target="_blank" href="//www.instagram.com/$1">@$1</a>').replace(/#(\S+)/g,'<a target="_blank" href="//www.instagram.com/explore/tags/$1">#$1</a>');return string;}// extrapolate URLs from the identified entities of the tweet
var entitiesArray=[];var i,entity,html,url,iLimit;if(entities.urls){for(i=0,iLimit=entities.urls.length;i<iLimit;i++){entity=entities.urls[i];html='<a href="'+entity.url+'" title="'+entity.expanded_url+'" target="_blank">'+entity.display_url+'</a>';entitiesArray.push({html:html,original:entity.url,start:entity.indices[0],end:entity.indices[1]});}}// extrapolate URLs from the identified entities of the tweet
if(entities.media){for(i=0,iLimit=entities.media.length;i<iLimit;i++){entity=entities.media[i];html='<a href="'+entity.url+'" title="'+entity.expanded_url+'" target="_blank">'+entity.display_url+'</a>';entitiesArray.push({html:html,original:entity.url,start:entity.indices[0],end:entity.indices[1]});}}if(entities.user_mentions){for(i=0,iLimit=entities.user_mentions.length;i<iLimit;i++){entity=entities.user_mentions[i];url=getUserAccountUrl(entity.screen_name);html='<a href="'+url+'" target="_blank">&#64;'+entity.screen_name+'</a>';entitiesArray.push({html:html,original:'@'+entity.screen_name,start:entity.indices[0],end:entity.indices[1]});}}if(entities.hashtags){for(i=0,iLimit=entities.hashtags.length;i<iLimit;i++){entity=entities.hashtags[i];//url = getSearchTagUrl(entity.text);
html='<a href="'+url+'" target="_blank">&#35;'+entity.text+'</a>';entitiesArray.push({html:html,original:'#'+entity.text,start:entity.indices[0],end:entity.indices[1]});}}/**
     * Since the entities are ordered by type, sort the array by their start indice,
     * so they are in the order of appearances
     */entitiesArray.sort(function(a,b){return a.start-b.start;});// re-do start/end indices for entities
// this is a fix accounting for two-byte characters read as ASCII
for(i=0,iLimit=entitiesArray.length;i<iLimit;i++){entity=entitiesArray[i];var lowercaseString=string.toLowerCase();var lowercaseOriginal=entity.original.toLowerCase();entity.start=lowercaseString.search(lowercaseOriginal);entity.end=entity.start+entity.original.length;}/**
     * The new tweet body, with anchor tags rather than just plain text
     * @type {String}
     */var newString='';/**
     * Used to determine where in the original tweet body we're last
     * @type {Number}
     */var previousIdx=0;/**
     * Go through all entities (if any) and replace their plain text version with
     * their anchor-tag equivalents
     * @type {Number}
     */for(i=0,iLimit=entitiesArray.length;i<iLimit;i++){entity=entitiesArray[i];var length=entity.start-previousIdx;newString+=string.substr(previousIdx,length);newString+=entity.html;previousIdx=entity.end;}/**
     * At the end, add what's left of the original string
     */newString+=string.substr(previousIdx);return newString;};// pass in the 'created_time' string returned from Instagram
// stamp arrives formatted as Fri Apr 29 2016 13:59:11 GMT+0100 (BST)
var parsePostedDate=function parsePostedDate(timestamp){var date=new Date(parseInt(timestamp)*1000);return date;};var getUserAccountUrl=function getUserAccountUrl(screenName){return'https://www.instagram.com/'+screenName;};common.getInstagramModel=function(post){var model,userAccountLink=getUserAccountUrl(post.user.username),postDate=parsePostedDate(post.created_time),sinceString=common.getSinceString(postDate),photo='',video={};photo=post.images.standard_resolution.url;if(post.type==='video'){video=post.videos.standard_resolution;}model={timestamp:sinceString,id:post.id,text:markUpLinks(post.caption.text),link:post.link,type:post.type,photo:photo,video:video,likes:post.likes.count,// extended_media: extended_media,
feedType:'instagram',user:{id:post.user.id,name:post.user.full_name,account:post.user.username,link:userAccountLink,avatarUrl:post.user.profile_picture}};return model;};})(PULSE.app,PULSE.app.common);// globals PULSE, PULSE.app, PULSE.app.common
(function(app,common){// pass in the 'created_time' string returned from Instagram
// stamp arrives formatted as Fri Apr 29 2016 13:59:11 GMT+0100 (BST)
var parsePostedDate=function parsePostedDate(dateString){var date=new Date(dateString);return date;};var getUserAccountUrl=function getUserAccountUrl(screenName){return'//twitter.com/'+screenName;};var getSearchTagUrl=function getSearchTagUrl(topic){return'//twitter.com/search?q=%23'+topic;};/**
   * Utility method to scan the given String for what look like HTTP links,
   * Twitter handles and hashtags (called entities), and mark them up with <a> tags.
   *
   * For URLs and media links, use expanded_url as the title and use the
   * display_url provided by Twitter as the text of the anchor tag
   *
   * See: https://dev.twitter.com/docs/tco-url-wrapper/best-practices
   *
   * @param  {String} string   - the original body of the tweet
   * @param  {Object} entities - mapping of types of entities to an array of entity objects
   * @return {String}          - the processed body of the tweet, with anchor tags
   */var markUpLinks=function markUpLinks(string,entities){// to support the old way of doing things, when entities weren't use
// to determine links to pages or media and the URL was directly processed
// from the tweet text body
if(!entities){string=string.replace(/(https{0,1}:\/\/\S+)/g,'<a target="_blank" href="$1">$1</a>').replace(/@(\S+)/g,'<a target="_blank" href="//twitter.com/$1">@$1</a>').replace(/#(\S+)/g,'<a target="_blank" href="//twitter.com/#!/search?q=%23$1">#$1</a>');return string;}// extrapolate URLs from the identified entities of the tweet
var entitiesArray=[];var i,entity,html,url,iLimit;if(entities.urls){for(i=0,iLimit=entities.urls.length;i<iLimit;i++){entity=entities.urls[i];html='<a href="'+entity.url+'" title="'+entity.expanded_url+'" target="_blank">'+entity.display_url+'</a>';entitiesArray.push({html:html,original:entity.url,start:entity.indices[0],end:entity.indices[1]});}}// extrapolate URLs from the identified entities of the tweet
if(entities.media){for(i=0,iLimit=entities.media.length;i<iLimit;i++){entity=entities.media[i];html='<a href="'+entity.url+'" title="'+entity.expanded_url+'" target="_blank">'+entity.display_url+'</a>';entitiesArray.push({html:html,original:entity.url,start:entity.indices[0],end:entity.indices[1]});}}if(entities.user_mentions){for(i=0,iLimit=entities.user_mentions.length;i<iLimit;i++){entity=entities.user_mentions[i];url=getUserAccountUrl(entity.screen_name);html='<a href="'+url+'" target="_blank">&#64;'+entity.screen_name+'</a>';entitiesArray.push({html:html,original:'@'+entity.screen_name,start:entity.indices[0],end:entity.indices[1]});}}if(entities.hashtags){for(i=0,iLimit=entities.hashtags.length;i<iLimit;i++){entity=entities.hashtags[i];url=getSearchTagUrl(entity.text);html='<a href="'+url+'" target="_blank">&#35;'+entity.text+'</a>';entitiesArray.push({html:html,original:'#'+entity.text,start:entity.indices[0],end:entity.indices[1]});}}/**
     * Since the entities are ordered by type, sort the array by their start indice,
     * so they are in the order of appearances
     */entitiesArray.sort(function(a,b){return a.start-b.start;});// re-do start/end indices for entities
// this is a fix accounting for two-byte characters read as ASCII
for(i=0,iLimit=entitiesArray.length;i<iLimit;i++){entity=entitiesArray[i];var lowercaseString=string.toLowerCase();var lowercaseOriginal=entity.original.toLowerCase();entity.start=lowercaseString.search(lowercaseOriginal);entity.end=entity.start+entity.original.length;}/**
     * The new tweet body, with anchor tags rather than just plain text
     * @type {String}
     */var newString='';/**
     * Used to determine where in the original tweet body we're last
     * @type {Number}
     */var previousIdx=0;/**
     * Go through all entities (if any) and replace their plain text version with
     * their anchor-tag equivalents
     * @type {Number}
     */for(i=0,iLimit=entitiesArray.length;i<iLimit;i++){entity=entitiesArray[i];var length=entity.start-previousIdx;newString+=string.substr(previousIdx,length);newString+=entity.html;previousIdx=entity.end;}/**
     * At the end, add what's left of the original string
     */newString+=string.substr(previousIdx);return newString;};common.getTweetModel=function(tweet){var userAccountLink=getUserAccountUrl(tweet.actor.preferredUsername),tweetDate=parsePostedDate(tweet.postedTime),timestamp=common.getSinceString(tweetDate),photo='',extendedMedia=[],model;var i,iLimit;if(tweet.entities&&tweet.entities.media){for(i=0,iLimit=tweet.entities.media.length;i<iLimit;i++){if(tweet.entities.media[i].type==='photo'){photo=tweet.entities.media[i].media_url_https;}}}if(tweet.twitter_entities&&tweet.twitter_entities.media){for(i=0,iLimit=tweet.twitter_entities.media.length;i<iLimit;i++){var media=tweet.twitter_entities.media[i];extendedMedia.push(media.media_url_https);photo=media.media_url_https;}}if(tweet.long_object&&tweet.long_object.twitter_entities&&tweet.long_object.twitter_entities.media){var longObject=tweet.long_object.twitter_entities.media;for(i=0,iLimit=longObject.length;i<iLimit;i++){if(longObject[i].type==='photo'){photo=longObject[i].media_url_https;}}}if(photo!==''){photo=photo+':small';}model={timestamp:timestamp,id:tweet.id,text:markUpLinks(tweet.body),link:tweet.link,photo:photo,extendedMedia:extendedMedia,user:{id:tweet.actor.id,name:tweet.actor.displayName,account:tweet.actor.preferredUsername,link:userAccountLink,description:tweet.actor.summary,avatarUrl:tweet.actor.image},feedType:'twitter',favorites:tweet.favoritesCount,retweets:tweet.retweetCount};return model;};})(PULSE.app,PULSE.app.common);(function(app,core,common){/**
   * constructor for the page share widget. Widget requires following data attributes to be
   * present on target button elements;
   *
   * data-share-url - if this contains a url then it will be used as the page share url
   * data-social-service - the service name ( should correlate to a n entry in the socialLinks
   * object that is defined in SocialHelper Class - ../../js/social-helpers.js)
   *
   * @param {Object} element - element defining the page share widget
   * @param {String} url - the custom sharing URL to pass to this constructor
   * @constructor
   */common.PageShare=function(element,url){var _self=this;_self.element=element;_self.url=url;_self.noShareUrl=element.getAttribute('data-no-url')==='true';_self.setListeners();};/**
   * move up the dom tree to find the element containing the desired data attributes. Do not traverse up past the
   * widget container. return the data set attribute of the element.
   *
   * @param {object} element DOM Element on which to begin the traversal
   * @returns {object} hash - dataset attribute of the element or fale if no element can be found
   */common.PageShare.prototype.getSocialDataset=function(element){var _self=this,inspecting=element;do{if(inspecting.getAttribute('data-social-service')){return inspecting.dataset;}inspecting=inspecting.parentElement;}while(inspecting!==_self.element);return false;};/**
  * start listening for click events on the element
  */common.PageShare.prototype.setListeners=function(){var _self=this;// bind clicks on individual social buttons
core.event.listenForMultiple(_self.element,['click','keypress'],function(event){// handle clicks on individual social clicks
var clicked=_self.getSocialDataset(event.currentTarget);var tags='';var customMessage;if(clicked&&clicked.socialService){customMessage=event.currentTarget.closest('.share').getAttribute('data-share-message');if(clicked.socialService==='twitter'){tags=event.currentTarget.getAttribute('data-tags')||'';}app.socialHelpers[clicked.socialService].sharePage(_self.url,false,tags,customMessage,_self.noShareUrl);}});core.event.listenForMultiple(_self.copyBtn,['click','keypress'],function(){_self.copyUrl();});};/**
   * constructor for the page share widget. Widget requires following data attributes to be
   * present on target button elements;
   *
   * data-share-url - if this contains a url then it will be used as the page share url
   * data-social-service - the service name ( should correlate to a n entry in the socialLinks
   * object that is defined in SocialHelper Class - ../../js/social-helpers.js)
   *
   * @param {Object} element element defining the page share widget
   * @param {String} url - the custom sharing URL to pass to this constructor
   * @constructor
   */app.PageShare=function(element,url){new common.PageShare(element,url);};/**
   * create the widget instances
   */var widgets=document.querySelectorAll('.js-social-option');for(var i=0;i<widgets.length;i++){var widget=widgets[i];new app.PageShare(widget,widget.hasAttribute('data-share-url')?widget.getAttribute('data-share-url'):null);}})(PULSE.app,PULSE.core,PULSE.app.common);(function(app,core,common){'use strict';common.Share=function(element){var _self=this;_self.element=element;_self.toggleBtn=_self.element.querySelector('.js-share-btn');_self.socialOptions=_self.element.querySelectorAll('.js-social-option');_self.copyBtn=_self.element.querySelector('.js-copy-button');_self.copyMessage=_self.element.querySelector('.js-copy-message');if(!_self.toggleBtn){return;}common.A11Y_HELPER.addListener(_self.toggleBtn,function(){core.style.toggleClass(_self.element,'is-active');});_self.socialOptions.forEach(function(socialOption){common.A11Y_HELPER.addListener(socialOption,function(event){// handle clicks on individual social clicks
var socialService=event.target.getAttribute('data-social-service');var shareUrl=event.target.getAttribute('data-share-url');if(socialService&&shareUrl){app.socialHelpers[socialService].sharePage(shareUrl,false);}});});common.A11Y_HELPER.addListener(_self.copyBtn,function(){_self.copyUrl();});core.style.addClass(_self.element,'animate-in');};common.Share.prototype.copyUrl=function(){var _self=this;_self.shareURL=_self.copyBtn.getAttribute('data-share-url');_self.url=_self.shareURL||window.location.href;var clipboard=new Clipboard('.js-copy-button',{text:function text(){return _self.url;}});var COPY_MESSAGE_TIMEOUT=2000;clipboard.on('success',function(){core.style.addClass(_self.copyBtn,'is-active');setTimeout(function(){core.style.removeClass(_self.copyBtn,'is-active');},COPY_MESSAGE_TIMEOUT);});};// common.Share.prototype.copyUrlMessage = function( fail ) {
//
//     var _self = this;
//
//     var COPY_MESSAGE_TIMEOUT = 2000;
//
//     core.style.addClass( _self.copyBtn, 'is-active' );
//
//     if ( fail ) {
//         core.style.addClass( _self.copyMessage, 'share__copy-message--fail' );
//         _self.copyMessage.innerHTML = 'URL could not be copied';
//     }
//
//     setTimeout( function() {
//         core.style.removeClass( _self.copyBtn, 'is-active' );
//     }, COPY_MESSAGE_TIMEOUT );
// };
var widgets=document.querySelectorAll('[data-widget="share"]');for(var i=0;i<widgets.length;i++){new common.Share(widgets[i],{});}})(PULSE.app,PULSE.core,PULSE.app.common);(function(app){// Social constants
var TWITTER='twitter';var FACEBOOK='facebook';var WHATSAPP='whatsapp';var FACEBOOK_MESSENGER='facebookMessenger';/**
   * Get page title
   * @returns {String} the title of the page
   */var getPageTitle=function getPageTitle(){var title=document.querySelector('.js-page-title');if(title){return title.innerHTML;}return;};var getShareAccount=function getShareAccount(shareURL){if(shareURL.indexOf('worldtwenty20')>0){return'WorldT20';}else if(shareURL.indexOf('cricketworldcup')>0){return'cricketworldcup';}return'ICC';};/**
   * Create a set of basic functionality that social widgets will share
   * Individual social helpers can be extended with extra functions in ./social-service
   *
   * @param {string} serviceName name of the social service, should correlate to an entry
   * in socialLinks object
   *
   * @constructor
   */var SocialHelper=function SocialHelper(serviceName){this.name=serviceName;this.socialLinks={twitter:{shareUrl:'http://www.twitter.com/intent/tweet?text='},facebook:{shareUrl:'http://www.facebook.com/sharer/sharer.php?u='},facebookMessenger:{shareUrl:'fb-messenger://share/?link='},whatsapp:{shareUrl:'whatsapp://send?text='}};this.defaultWindowConfiguration={width:'500',height:'500',menubar:0,location:1,resizable:0,scrollbars:0,status:0,titlebar:0,toolbar:0};};/**
   * Share a page url or the current page url ( if no url passed ) to the social
   * media site with which the instance was created
   *
   * @param {string} url 		 the url to share on the social media site
   * @returns {string} page url
   */SocialHelper.prototype.buildShareUrl=function(url,tags,customMessage,noShareUrl){var shareType=this.name;var shareURL=url||window.location.href;var shareMessage=customMessage||'';var shareComponent=shareURL;var pageTitle=getPageTitle();var site=getShareAccount(shareURL);var hashtag=site==='WorldT20'?' #WT20':tags;//Just share the URL if facebook
if(shareType===FACEBOOK){return this.socialLinks[shareType].shareUrl+encodeURIComponent(shareComponent)+'&quote='+shareMessage;}else if(shareType===FACEBOOK_MESSENGER){return this.socialLinks[shareType].shareUrl+encodeURIComponent(shareComponent);}else if(shareType===TWITTER){if(shareMessage){shareComponent=shareMessage+hashtag+' via @'+site+(!noShareUrl?' '+shareURL:'');}else if(pageTitle){shareComponent=pageTitle+hashtag+' via @'+site+(!noShareUrl?' '+shareURL:'');}else{shareComponent=shareURL+hashtag+' via @'+site;}}else if(shareType===WHATSAPP&&shareMessage){return this.socialLinks[shareType].shareUrl+shareMessage+(!noShareUrl?' '+encodeURIComponent(shareComponent):'');}return this.socialLinks[shareType].shareUrl+encodeURIComponent(shareComponent);};/**
   * creates a string representation of the configuration object provided so it can be
   * used in the call to window.open, for example;
   *
   * "menubar=no,location=yes,resizable=yes,scrollbars=yes,status=yes"
   *
   * @param {object} windowConfiguration the configuration object to stringify
   * @returns {string} comma separated list of configuration parameters
   */SocialHelper.prototype.makeWindowConfigurationString=function(windowConfiguration){var config=windowConfiguration||this.defaultWindowConfiguration;var settings=Object.keys(config);var configurationString='';for(var i=0;i<settings.length;i++){configurationString+=settings[i]+'='+config[settings[i]];if(i<settings.length-1){configurationString+=',';}}return configurationString;};/**
   * create a share url for the service with which the instance was created and open a
   * new window using the parameters provided, or the defaults.
   *
   * @param {string} url   optionally provide a specific url to link to, otherwise the current window.location
   * @param {object} windowConfiguration optionally provide a window configuration object
   */SocialHelper.prototype.sharePage=function(url,windowConfiguration,tags,customMessage,noShareUrl){var shareURL=this.buildShareUrl(url,tags,customMessage,noShareUrl);var config=this.makeWindowConfigurationString(windowConfiguration);window.open(shareURL,'_blank',config);};/**
   * keep the social helpers under the app object
   *
   * @type {{twitter: socialHelper, facebook: socialHelper}}
   */app.socialHelpers={twitter:new SocialHelper(TWITTER),facebook:new SocialHelper(FACEBOOK),whatsapp:new SocialHelper(WHATSAPP),facebookMessenger:new SocialHelper(FACEBOOK_MESSENGER)};})(PULSE.app);(function(app,core,common){'use strict';/**
   * Form Dropdown
   * @constructor
   * @param {Object} container HTML element containing the form
   */common.SsoFormDropdown=function(container){var _self=this;_self.container=container;_self.config={wrapper:container.querySelector('.js-dropdown-wrapper'),type:container.getAttribute('data-dropdown-type')};if(!_self.config.wrapper||!_self.config.type){return;}_self.currentOption={title:'',key:'',teamM:'',teamW:''};_self.render(_self.config.type);_self.addListeners();};/**
   * Renders dropdown based on type
   * @param {string} type dropdown type
   */common.SsoFormDropdown.prototype.render=function(type){var _self=this;switch(type){// Favourite team dropdown (native + social users)
case'SSO_TEAM':case'facebook_SSO_TEAM':case'google_SSO_TEAM':_self.config.template='sso_team_dropdown';_self.renderTeam(type,common.constants.SSO_TEAMS);break;// Country of Residence dropdown (native + social users)
case'SSO_COUNTRY':case'facebook_SSO_COUNTRY':case'google_SSO_COUNTRY':_self.config.template='sso_country_dropdown';_self.renderCountry(type,common.constants.COUNTRY_LIST);break;// Default state
default:console.info('Dropdown type does not exist');break;}};/**
   * Render team dropdown
   * @param {string} type dropdown data type
   * @param {object} src data object
   */common.SsoFormDropdown.prototype.renderTeam=function(type,src){var _self=this;var model={};model.options=[];for(var i=0;i<src.length;i++){model.options.push({key:src[i].id,abbr:src[i].abbr,value:src[i].name,teamM:src[i].teams.men,teamW:src[i].teams.women});}_self.config.wrapper.innerHTML=app.common.templating.render(model,_self.config.template);};/**
   * Render country dropdown
   * @param {string} type dropdown data type
   * @param {object} src data object
   */common.SsoFormDropdown.prototype.renderCountry=function(type,src){var _self=this;var model={};model.options=[];for(var i=0;i<src.length;i++){model.options.push({key:src[i].key,value:src[i].value});}_self.config.wrapper.innerHTML=app.common.templating.render(model,_self.config.template);};/**
   * Adds dropdown listeners
   */common.SsoFormDropdown.prototype.addListeners=function(){var _self=this;var trigger=_self.config.wrapper.querySelector('.js-dropdown-trigger');var options=_self.config.wrapper.querySelector('.js-dropdown-options');var current=_self.config.wrapper.querySelector('.js-dropdown-current');trigger.addEventListener('click',function(event){event.preventDefault();if(event.type==='click'){core.style.toggleClass(_self.config.wrapper,'is-open');}});var _onOptionSelect=function _onOptionSelect(optionEl,triggerEvent){_self.updateCurrent({title:optionEl.innerHTML,abbr:optionEl.getAttribute('data-abbr'),key:optionEl.getAttribute('data-option'),teamM:optionEl.getAttribute('data-team-m'),teamW:optionEl.getAttribute('data-team-w')});// send event to the DOM, so we can change button states if the user
// is who triggers the event, not the js
if(triggerEvent){common.Helpers.dispatchEvent('formDropdown#changed');core.style.toggleClass(_self.config.wrapper,'is-open');}current.innerHTML=_self.currentOption.title;current.dataset.option=_self.currentOption.key;if(_self.currentOption.abbr!==''){current.dataset.abbr=_self.currentOption.abbr;core.style.addClass(current.firstChild,_self.currentOption.abbr);}if(_self.currentOption.teamM!==''){current.dataset.teamM=_self.currentOption.teamM;}if(_self.currentOption.teamW!==''){current.dataset.teamW=_self.currentOption.teamW;}common.Helpers.removeClassIfExists(current.firstChild,common.constants.CLASS.HIDE);if(core.style.hasClass(current,'is-default')){core.style.removeClass(current,'is-default');}};Array.prototype.forEach.call(options.querySelectorAll('[data-option]'),function(optionEl){optionEl.addEventListener('click',function(){_onOptionSelect(optionEl,true);});//manual click when updating dropdown from the api's data
optionEl.addEventListener('formDropdown#manual',function(){_onOptionSelect(optionEl,false);});});};/**
   * Update current dropdown option
   * @param {object} data option data
   */common.SsoFormDropdown.prototype.updateCurrent=function(data){var _self=this;_self.currentOption.title=data.title!==null?data.title:'';_self.currentOption.abbr=data.abbr!==null?data.abbr:'';_self.currentOption.key=data.key!==null?data.key:'';_self.currentOption.teamM=data.teamM!==null?data.teamM:'';_self.currentOption.teamW=data.teamW!==null?data.teamW:'';};})(PULSE.app,PULSE.core,PULSE.app.common);/*globals PULSE, PULSE.app, PULSE.ui */(function(app,core,common){/**
  * LinkList
   * Common module that build a dropdown which contains links as items
   * @param {object} element - widget element
  */common.LinkList=function(element){var _self=this;_self.element=element;_self.buildDropdown();};/**
   * LinkList
   * creates a custom dropdown with all event handlers
   */common.LinkList.prototype.buildDropdown=function(){var _self=this;_self.element.querySelector('.js-dropdown-trigger').addEventListener('click',function(e){e.preventDefault();// toggle dropdown
core.style.toggleClass(_self.element,'is-open');});_self.element.querySelector('.js-dropdown-trigger').addEventListener('keypress',function(e){if(e.key==='Enter'){core.style.toggleClass(_self.element,'is-open');}});};var widgets=document.querySelectorAll('[data-widget="linklist-dropdown"]');for(var i=0;i<widgets.length;i++){new common.LinkList(widgets[i]);}})(PULSE.app,PULSE.core,PULSE.app.common);