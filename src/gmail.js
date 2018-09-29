var element = document.createElement('style');
document.head.appendChild(element);

var sheet = element.sheet;

sheet.insertRule('.zA:hover { box-shadow: inset 0 -1px 0 0 rgba(100,121,143,0.122) !important}', 0);
sheet.insertRule('*, *:before, *:after {animation: none !important}', 0);
sheet.insertRule('*, *:before, *:after {transform: none !important}', 0);
//sheet.insertRule('*, *:before, *:after {transition-property: none !important}', 0);
