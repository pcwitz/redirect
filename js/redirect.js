'use strict';

exports.getParameterByName = function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

exports.makeHREF = function(anchorId, url) {
  var redirectLink = document.getElementById(anchorId);
  redirectLink.setAttribute('href', url);
  redirectLink.innerHTML = url;
};

exports.startRedirect = function(url, seconds) {
  var miliseconds = seconds * 1000;
  setTimeout(function() {
    window.location.href = url;
  }, miliseconds);
};