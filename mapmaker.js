// https://theiviaxx.github.io/photoshop-docs/Photoshop/Application.html

/***********************************************/
/*********** Configuration and Setup ***********/
/***********************************************/
var tmpFolder = 'mapmakertmp';
var lines = activeDocument.layerSets["Lines"];
var spaces = activeDocument.layerSets["Spaces"];
var toggles = {
    width: 16, // {inches} the width of the game board
    height: 16, // {inches} the height of the game board
    region: 2, // {inches} the average side length of a region
    offsetx: 1, // {inches} the horiozontal offset of the game board from the edge of the photoshop file
    offsety: 1, // {inches} the vertical offset of the game board from the edge of the photoshop file
}

Object.keys = objKeysPolyfill();
/***********************************************/
/****************** Script *********************/
/***********************************************/

createNewLayerSet({ name: tmpFolder });

drawShape({
    points: [
        { x: 300, y: 300},
        { x: 350, y: 360},
        { x: 380, y: 340},
        { x: 360, y: 400},
        { x: 310, y: 390},
    ],
    xOffset: 200,
    yOffset: 200
});

mergeGroup({ path: [ tmpFolder ] });
var nextMapNumber = findNextMapNumber();
rename({ path: [ tmpFolder ], name: 'map' + nextMapNumber });

// TODO Update the Createshapepath.jsx file and make it reusable with parameters
// TODO Implement the logic to create the map
//      Create hexagonal grid
//      Randomly move pixels a random direction by a bell curve distance
//      Radnomly join random pixels

/***********************************************/
/***************** Functions *******************/
/***********************************************/

/**
 * @returns The number of the next available map
 */
function findNextMapNumber() {
    var i = 1;
    var layer = getLayer({ path: [ 'map' + i ], quiet: true });
    var max = 50;
    
    for (i = 1; i < max && layer; i++) {
        layer = getLayer({ path: [ 'map' + i ], quiet: true });
        if (!layer) {
            break;
        }
    }

    if (max === 1000) {
        alert('All map numbers from 1 to ' + max + ' are taken up so using "1"');
        return 1;
    }

    return i;
}

/**
 * path: An array of layer sets to traverse to find the one you want to merge
 * name: 
 */
function rename(args) {
    var path = getArg(args, 'path');
    var name = getArg(args, 'name');

    if (!path) {
        throw 'A path must be provided to the rename method';
    }

    if (!path) {
        throw 'A name must be provided to the rename method';
    }

    var layer = getLayer({ path: path });
    layer.name = name;
    return layer;
}

/**
 * path: An array of layer sets to traverse to find the one you want to get
 */
function getLayer(args) {
    var path = getArg(args, 'path');
    var quiet = getArg(args, 'quiet', false);

    if (!path) {
        throw 'A path must be provided to the getLayer method';
    }

    var layerSet = app.activeDocument;
    for (var i = 0; i < path.length; i++) {
        try {
            try {
                layerSet = layerSet.layerSets[path[i]];
            } catch (err) {
                layerSet = layerSet.artLayers[path[i]];
            }
        } catch (err) {
            if (err.message.indexOf('No such element') >= 0) {
                if (!quiet) {
                    alert('getLayer could not find element: ' + path[i] + ' in path: ' + path);
                }
                return undefined;
            } else {
                alert('Error in getLayer: ' + err.message);
                throw err;
            }
        }
    }

    return layerSet;
}

/**
 * path: An array of layer sets to traverse to find the one you want to merge
 */
function mergeGroup(args) {
    var path = getArg(args, 'path');

    if (!path) {
        throw 'A path must be provided to the mergeGroup method';
    }

    var layerSet = getLayer({ path: path });

    layerSet.merge();
}

/**
 * Creates a new layer set
 * 
 * args.parent : The parent layer set : default is app.activeDocument
 * args.name   : The name of the new layer : default is 'New Layer Set'
 */
 function createNewLayerSet(args) {
    var parent = getArg(args, 'parent', app.activeDocument);
    var name = getArg(args, 'name', 'New Layer Set');
    var layerSets = parent.layerSets;
    var newLayerSet = layerSets.add();
    
    if (name) {
        newLayerSet.name = name;
    }

    return newLayerSet;
}

/**
 * Creates a new layer
 * 
 * args.parent : The parent layer set : default is app.activeDocument
 * args.name   : The name of the new layer : default is 'New Layer'
 */
function createNewLayer(args) {
    var parent = getArg(args, 'parent', app.activeDocument);
    var name = getArg(args, 'name', 'New Layer');
    var layers = parent.artLayers;
    var newLayer = layers.add();
    
    if (name) {
        newLayer.name = name;
    }

    return newLayer;
}

/**
 * args : An object to get null safe values from
 * name : The name of the property you want
 * defaultVal : The default value of the property in case it is undefined
 */
function getArg(args, name, defaultVal) {
    return (args && args[name]) || defaultVal;
}

/**
 * arfs.points  : An array of objects each with an x and y coordinate.
 *                Provide these coordinate in counter clockwise order.
 *                Defaults to a size 100 square.
 * args.xOffset : The x value to add to each point : default of 0
 * args.yOffset : The y value to add to each point : default of 0
 */
function drawShape(args) {
    var points = getArg(args, 'points', [
        { x: 100, y: 100},
        { x: 100, y: 200},
        { x: 200, y: 200},
        { x: 200, y: 100},
    ]);
    var xOffset = getArg(args, 'xOffset', 0);
    var yOffset = getArg(args, 'yOffset', 0);
    
    var doc = app.activeDocument;    
    var lineArray = [];
    for (var i = 0; i < points.length; i++) {
        lineArray[i] = new PathPointInfo;
        lineArray[i].kind = PointKind.CORNERPOINT;
        lineArray[i].anchor = [points[i].x + xOffset, points[i].y + yOffset];
        lineArray[i].leftDirection = lineArray[i].anchor;
        lineArray[i].rightDirection = lineArray[i].anchor;
    }

    var lineSubPathArray = new SubPathInfo();
    lineSubPathArray.closed = true;
    lineSubPathArray.operation = ShapeOperation.SHAPEADD;
    lineSubPathArray.entireSubPath = lineArray;
    var myPathItem = doc.pathItems.add("myPath", [lineSubPathArray]);

    var desc88 = new ActionDescriptor();
    var ref60 = new ActionReference();
    ref60.putClass(stringIDToTypeID("contentLayer"));
    desc88.putReference(charIDToTypeID("null"), ref60);
    var desc89 = new ActionDescriptor();
    var desc90 = new ActionDescriptor();
    var desc91 = new ActionDescriptor();
    desc91.putDouble(charIDToTypeID("Rd  "), 0); // R
    desc91.putDouble(charIDToTypeID("Grn "), 0); // G
    desc91.putDouble(charIDToTypeID("Bl  "), 0); // B
    var id481 = charIDToTypeID("RGBC");
    desc90.putObject(charIDToTypeID("Clr "), id481, desc91);
    desc89.putObject(charIDToTypeID("Type"), stringIDToTypeID("solidColorLayer"), desc90);
    desc88.putObject(charIDToTypeID("Usng"), stringIDToTypeID("contentLayer"), desc89);
    executeAction(charIDToTypeID("Mk  "), desc88, DialogModes.NO);

    myPathItem.remove();
}

// "Polyfill" Object.keys
function objKeysPolyfill() {
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({
            toString: null
        }).propertyIsEnumerable('toString'),

        dontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
        ],
        dontEnumsLength = dontEnums.length;
    return function(obj) {
        if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
            throw new TypeError('Object.keys called on non-object');
        }
        var result = [],
            prop, i;
        for (prop in obj) {
            if (hasOwnProperty.call(obj, prop)) {
                result.push(prop);
            }
        }
        if (hasDontEnumBug) {
            for (i = 0; i < dontEnumsLength; i++) {
                if (hasOwnProperty.call(obj, dontEnums)) {
                    result.push(dontEnums);
                }
            }
        }
        return result;
    };
}
