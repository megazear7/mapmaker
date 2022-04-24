Createshapepath();

function Createshapepath() {
  cTID = function(s) { return app.charIDToTypeID(s); };
  sTID = function(s) { return app.stringIDToTypeID(s); };
  // Use
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("penTool"));
    desc1.putReference(cTID('null'), ref1);
var _hexToBin = 
function (h) {
  function binMap(n) {
    if (n.match(/[0-9]/)) return parseInt(n);
    return parseInt((n.charCodeAt(0) - 'A'.charCodeAt(0)) + 10);
  }

  h = h.toUpperCase().replace(/\s/g, '');
  var bytes = '';

  for (var i = 0; i < h.length/2; i++) {
    var hi = h.charAt(i * 2);
    var lo = h.charAt(i * 2 + 1);
    var b = (binMap(hi) << 4) + binMap(lo);
    bytes += String.fromCharCode(b);
  }
  return bytes;
}
;
    desc1.putData(sTID("toolRecordingData"), _hexToBin(  "00000006020000000100000009385450656E546F6F6C000000113135544E6577" +
  "53756250617468546F6F6C00000009385450656E546F6F6C000000063C4E554C" +
  "4C3E00000002000000000000000020202020000000000000000044B49AFC44A0" +
  "EE44000000000000000000000000000000000000000000000000010000000000" +
  "0000000000000000000000000020202020000000000000000044B49AFC44A0EE" +
  "440000000000000000000000000000000000000000000000000100003EB37628" +
  "00000000"
));
    executeAction(sTID('toolRecording'), desc1, dialogMode);
  };

  // Use
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("penTool"));
    desc1.putReference(cTID('null'), ref1);
var _hexToBin = 
function (h) {
  function binMap(n) {
    if (n.match(/[0-9]/)) return parseInt(n);
    return parseInt((n.charCodeAt(0) - 'A'.charCodeAt(0)) + 10);
  }

  h = h.toUpperCase().replace(/\s/g, '');
  var bytes = '';

  for (var i = 0; i < h.length/2; i++) {
    var hi = h.charAt(i * 2);
    var lo = h.charAt(i * 2 + 1);
    var b = (binMap(hi) << 4) + binMap(lo);
    bytes += String.fromCharCode(b);
  }
  return bytes;
}
;
    desc1.putData(sTID("toolRecordingData"), _hexToBin(  "00000006020000000100000009385450656E546F6F6C00000009385450656E54" +
  "6F6F6C00000009385450656E546F6F6C000000063C4E554C4C3E000000020000" +
  "000000000000202020200000000000000000445724FE45116D17000000000000" +
  "0000000000000000000000000000000000000100000000000000000000000000" +
  "0000000000202020200000000000000000445724FE45116D1700000000000000" +
  "00000000000000000000000000000000000100003E9DDD1000000000" +
  ""
));
    executeAction(sTID('toolRecording'), desc1, dialogMode);
  };

  // Use
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("penTool"));
    desc1.putReference(cTID('null'), ref1);
var _hexToBin = 
function (h) {
  function binMap(n) {
    if (n.match(/[0-9]/)) return parseInt(n);
    return parseInt((n.charCodeAt(0) - 'A'.charCodeAt(0)) + 10);
  }

  h = h.toUpperCase().replace(/\s/g, '');
  var bytes = '';

  for (var i = 0; i < h.length/2; i++) {
    var hi = h.charAt(i * 2);
    var lo = h.charAt(i * 2 + 1);
    var b = (binMap(hi) << 4) + binMap(lo);
    bytes += String.fromCharCode(b);
  }
  return bytes;
}
;
    desc1.putData(sTID("toolRecordingData"), _hexToBin(  "00000006020000000100000009385450656E546F6F6C00000009385450656E54" +
  "6F6F6C00000009385450656E546F6F6C000000063C4E554C4C3E000000020000" +
  "000000000000202020200000000000000000451522804534C11C000000000000" +
  "0000000000000000000000000000000000000100000000000000000000000000" +
  "0000000000202020200000000000000000451522804534C11C00000000000000" +
  "00000000000000000000000000000000000100003EA285A000000000" +
  ""
));
    executeAction(sTID('toolRecording'), desc1, dialogMode);
  };

  // Use
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("penTool"));
    desc1.putReference(cTID('null'), ref1);
var _hexToBin = 
function (h) {
  function binMap(n) {
    if (n.match(/[0-9]/)) return parseInt(n);
    return parseInt((n.charCodeAt(0) - 'A'.charCodeAt(0)) + 10);
  }

  h = h.toUpperCase().replace(/\s/g, '');
  var bytes = '';

  for (var i = 0; i < h.length/2; i++) {
    var hi = h.charAt(i * 2);
    var lo = h.charAt(i * 2 + 1);
    var b = (binMap(hi) << 4) + binMap(lo);
    bytes += String.fromCharCode(b);
  }
  return bytes;
}
;
    desc1.putData(sTID("toolRecordingData"), _hexToBin(  "00000006020000000100000009385450656E546F6F6C00000009385450656E54" +
  "6F6F6C00000009385450656E546F6F6C000000063C4E554C4C3E000000020000" +
  "000000000000202020200000000000000000453CD65944E7580A000000000000" +
  "0000000000000000000000000000000000000100000000000000000000000000" +
  "0000000000202020200000000000000000453CD65944E7580A00000000000000" +
  "00000000000000000000000000000000000100003E9FACF000000000" +
  ""
));
    executeAction(sTID('toolRecording'), desc1, dialogMode);
  };

  // Use
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("penTool"));
    desc1.putReference(cTID('null'), ref1);
var _hexToBin = 
function (h) {
  function binMap(n) {
    if (n.match(/[0-9]/)) return parseInt(n);
    return parseInt((n.charCodeAt(0) - 'A'.charCodeAt(0)) + 10);
  }

  h = h.toUpperCase().replace(/\s/g, '');
  var bytes = '';

  for (var i = 0; i < h.length/2; i++) {
    var hi = h.charAt(i * 2);
    var lo = h.charAt(i * 2 + 1);
    var b = (binMap(hi) << 4) + binMap(lo);
    bytes += String.fromCharCode(b);
  }
  return bytes;
}
;
    desc1.putData(sTID("toolRecordingData"), _hexToBin(  "00000006020000000100000009385450656E546F6F6C00000009385450656E54" +
  "6F6F6C00000009385450656E546F6F6C000000063C4E554C4C3E000000020000" +
  "00000000000020202020000000000000000045164A4A44499028000000000000" +
  "0000000000000000000000000000000000000100000000000000000000000000" +
  "000000000020202020000000000000000045164A4A4449902800000000000000" +
  "00000000000000000000000000000000000100003E9F8A8000000000" +
  ""
));
    executeAction(sTID('toolRecording'), desc1, dialogMode);
  };

  // Use
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("penTool"));
    desc1.putReference(cTID('null'), ref1);
var _hexToBin = 
function (h) {
  function binMap(n) {
    if (n.match(/[0-9]/)) return parseInt(n);
    return parseInt((n.charCodeAt(0) - 'A'.charCodeAt(0)) + 10);
  }

  h = h.toUpperCase().replace(/\s/g, '');
  var bytes = '';

  for (var i = 0; i < h.length/2; i++) {
    var hi = h.charAt(i * 2);
    var lo = h.charAt(i * 2 + 1);
    var b = (binMap(hi) << 4) + binMap(lo);
    bytes += String.fromCharCode(b);
  }
  return bytes;
}
;
    desc1.putData(sTID("toolRecordingData"), _hexToBin(  "00000006020000000100000009385450656E546F6F6C00000013313754436C6F" +
  "736553756250617468546F6F6C00000009385450656E546F6F6C000000063C4E" +
  "554C4C3E00000001000000000000000020202020000000000000000044B35DEC" +
  "44A1486800000000000000000000000000000000000000000000000001000000" +
  "00000000000000"
));
    executeAction(sTID('toolRecording'), desc1, dialogMode);
  };

  // Make
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("contentLayer"));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Rd  '), 0);
    desc4.putDouble(cTID('Grn '), 0);
    desc4.putDouble(cTID('Bl  '), 0);
    desc3.putObject(cTID('Clr '), sTID("RGBColor"), desc4);
    desc2.putObject(cTID('Type'), sTID("solidColorLayer"), desc3);
    desc1.putObject(cTID('Usng'), sTID("contentLayer"), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Set
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(sTID("contentLayer"), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    desc3.putInteger(sTID("strokeStyleVersion"), 2);
    desc3.putBoolean(sTID("fillEnabled"), false);
    desc2.putObject(sTID("strokeStyle"), sTID("strokeStyle"), desc3);
    desc1.putObject(cTID('T   '), sTID("shapeStyle"), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Clr '), cTID('FrgC'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putDouble(cTID('Rd  '), 0);
    desc2.putDouble(cTID('Grn '), 0);
    desc2.putDouble(cTID('Bl  '), 0);
    desc1.putObject(cTID('T   '), sTID("RGBColor"), desc2);
    desc1.putString(cTID('Srce'), "swatchesReplace");
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(sTID("contentLayer"), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    var desc4 = new ActionDescriptor();
    var desc5 = new ActionDescriptor();
    desc5.putDouble(cTID('Rd  '), 0);
    desc5.putDouble(cTID('Grn '), 0);
    desc5.putDouble(cTID('Bl  '), 0);
    desc4.putObject(cTID('Clr '), sTID("RGBColor"), desc5);
    desc3.putObject(sTID("strokeStyleContent"), sTID("solidColorLayer"), desc4);
    desc3.putInteger(sTID("strokeStyleVersion"), 2);
    desc3.putBoolean(sTID("strokeEnabled"), true);
    desc2.putObject(sTID("strokeStyle"), sTID("strokeStyle"), desc3);
    desc1.putObject(cTID('T   '), sTID("shapeStyle"), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  step1();      // Use
  step2();      // Use
  step3();      // Use
  step4();      // Use
  step5();      // Use
  step6();      // Use
  step7();      // Make
  step8();      // Set
  step9();      // Set
  step10();      // Set
};
