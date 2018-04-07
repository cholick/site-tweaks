var element = document.createElement('style');
document.head.appendChild(element);

var sheet = element.sheet;

sheet.insertRule('* {transition-duration: 0s !important}', 0);
