//var {OAuth2Client} = require('google-auth-library');
/**/
var {google} = require('googleapis');
var SCOPES = [
	'https://www.googleapis.com/auth/gmail.send',
    'https://www.googleapis.com/auth/gmail.readonly',
    'https://www.googleapis.com/auth/spreadsheets.readonly',
	"https://www.googleapis.com/auth/drive"
];
exports.getTest = function () {
    return 'this is test';
}

exports.getOAuthUrl = function (oauth2ClientCreds) {
    //var oauth2Client = OAuth2Client(oauth2ClientCreds.client_id, oauth2ClientCreds.client_secret, oauth2ClientCreds.redirect_uris)
    var oauth2Client = new google.auth.OAuth2(oauth2ClientCreds.client_id, oauth2ClientCreds.client_secret, oauth2ClientCreds.redirect_uris)
    return oauth2Client.generateAuthUrl({
        access_type: 'offline',
        approval_prompt: 'force', //if new refresh token ,app must send a request with `approval_prompt:force` this will cause the user to see a dialog to approve the app again
        scope: SCOPES
    });
}

exports.getTokens = function (code,oauth2ClientCreds) {
    return new Promise(function(resolve,reject){
        var oauth2Client = new google.auth.OAuth2(oauth2ClientCreds.client_id, oauth2ClientCreds.client_secret, oauth2ClientCreds.redirect_uris)
        oauth2Client.getToken(code)
            .then(function(response){
                return resolve(response.tokens)//oauth2Client.setCredentials(tokens);
            })
            .catch(function(error){
                return reject(error)
            })
    })
}

exports.refreshToken = function(refreshToken,oauth2ClientCreds){
    return new Promise(function(resolve,reject){
        var oauth2Client = new google.auth.OAuth2(oauth2ClientCreds.client_id, oauth2ClientCreds.client_secret, oauth2ClientCreds.redirect_uris)
        oauth2Client.refreshToken(refreshToken)
            .then(function(response){
                return resolve(response.tokens)
            })
            .catch(function(error){
                return reject(error)
            })
    })
}
