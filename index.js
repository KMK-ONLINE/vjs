var videojs = require('video.js');
window.videojs = videojs;
require('videojs-flash');
require('videojs-contrib-dash');
require('videojs-contrib-hls');
window.videojs.registerPlugin('ads', require('videojs-contrib-ads'));
require('videojs-ima');
