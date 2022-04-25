// https://theiviaxx.github.io/photoshop-docs/Photoshop/Application.html

/***********************************************/
/*********** Configuration and Setup ***********/
/***********************************************/
var tmpFolder = 'mapmakertmp';
var lines = activeDocument.layerSets["Lines"];
var spaces = activeDocument.layerSets["Spaces"];
var toggles = {
    sideLength: 4,
    width: 16, // {inches} the width of the game board
    height: 16, // {inches} the height of the game board
    regionSideLength: 50, // {inches} the average side length of a region
    offsetx: 1, // {inches} the horiozontal offset of the game board from the edge of the photoshop file
    offsety: 1, // {inches} the vertical offset of the game board from the edge of the photoshop file
}

Object.keys = objKeysPolyfill();
/***********************************************/
/****************** Script *********************/
/***********************************************/

createNewLayerSet({ name: tmpFolder });


//drawSingleHexagon();
drawHexagonalGrid();

//mergeGroup({ path: [ tmpFolder ] });
//var nextMapNumber = findNextMapNumber();
//rename({ path: [ tmpFolder ], name: 'map' + nextMapNumber });

// TODO Update the Createshapepath.jsx file and make it reusable with parameters
// TODO Implement the logic to create the map
//      Create hexagonal grid
//      Randomly move pixels a random direction by a bell curve distance
//      Radnomly join random pixels

/***********************************************/
/***************** Functions *******************/
/***********************************************/

function hexPosA(point, s) {
    return {
        x: point.x,
        y: point.y
    }
}

function hexPosB(point, s) {
    return {
        x: hexShiftX(point.x, s, 1),
        y: hexShiftShortY(point.y, s, 1)
    }
}

function hexPosC(point, s) {
    return {
        x: hexShiftX(point.x, s, 2),
        y: point.y
    }
}

function hexPosD(point, s) {
    return {
        x: hexShiftX(point.x, s, 2),
        y: point.y + s
    }
}

function hexPosE(point, s) {
    return {
        x: hexShiftX(point.x, s, 1),
        y: hexShiftShortY(point.y + s, s, -1)
    }
}

function hexPosF(point, s) {
    return {
        x: point.x,
        y: point.y + s
    }
}

function drawHexagonalGrid() {
    var points = {};
    var l = toggles.sideLength;
    var s = toggles.regionSideLength;

    var xstart = -(l-1);
    var xend = l-1;
    for (var x = xstart; x <= xend; x++) {
        var ystart;
        if (x >= 0) {
            ystart = x;
            yend = (2 * l) - 2;
        } else {
            ystart = 0;
            yend = (2 * l) + x - 2;
        }
        for (var y = ystart; y <= yend; y++) {
            var xpos = Math.sqrt(3) * s * y
            if (x % 2 !== 0) {
                xpos = xpos - (s * (Math.sqrt(3)/2));
            }
            var point = {
                x: xpos,
                y: (3/2) * s * x
            };

            // points[(x      ).toFixed(1) + '_' + (y      ).toFixed(1)] = hexPosA(point, s);
            // points[(x + 0.5).toFixed(1) + '_' + (y + 0.5).toFixed(1)] = hexPosB(point, s);
            // points[(x      ).toFixed(1) + '_' + (y +   1).toFixed(1)] = hexPosC(point, s);
            // points[(x - 0.5).toFixed(1) + '_' + (y + 0.5).toFixed(1)] = hexPosD(point, s);
            // points[(x -   1).toFixed(1) + '_' + (y      ).toFixed(1)] = hexPosE(point, s);
            // points[(x - 0.5).toFixed(1) + '_' + (y - 0.5).toFixed(1)] = hexPosF(point, s);
            points[x + '_' + y + '_a'] = hexPosA(point, s);
            points[x + '_' + y + '_b'] = hexPosB(point, s);
            points[x + '_' + y + '_c'] = hexPosC(point, s);
            points[x + '_' + y + '_d'] = hexPosD(point, s);
            points[x + '_' + y + '_e'] = hexPosE(point, s);
            points[x + '_' + y + '_f'] = hexPosF(point, s);
        }
    }

    // TODO manipulate the points

    for (var i = 0; i < Object.keys(points).length; i++) {
        var key = Object.keys(points)[i];
        var point = points[key];
        // For now, until we get the createshapepath.js file working
        // we can just put squares by the intersection
        var squareSize = 6;
        drawShape({
            points: [
                { x: point.x, y: point.y },
                { x: point.x, y: point.y + squareSize },
                { x: point.x + squareSize, y: point.y + squareSize },
                { x: point.x + squareSize, y: point.y }
            ],
            xOffset: 300,
            yOffset: 300
        });
    }
}

/**
 * Given a starting point, this will return a new point that is shifted
 * one column in a hexagonal grid. The grid has flat faces on the sides
 * and pointed corners on the top and bottom. One space would be half
 * the diameter (side to side) of a hexagon in the grid.
 * @param {*} x          : An object with an x and y coordinate.
 * @param {*} sideLength : The length of a side in the hex grid.
 * @param {*} direction  : 1 or -1
 * @return The new coordinates.
 */
function hexShiftX(x, sideLength, direction) {
    spaces = spaces || 1;
    return x + ((Math.sqrt(3) / 2) * sideLength * direction);
}

/**
 * Given a starting point, this will return a new point that is shifted
 * one row in a hexagonal grid. The grid has flat faces on the sides
 * and pointed corners on the top and bottom. This shifts the "short" distance
 * from one hexagonal corner  to the next one nearby (not a full sideLength)
 * @param {*} y               : y coordinate
 * @param {*} sideLength      : The length of a side in the hex grid.
 * @param {boolean} direction : -1 or 1
 * @return The new coordinates.
 */
 function hexShiftShortY(y, sideLength, direction) {
    return y + (0.5 * sideLength * direction * -1);
}


function drawSingleHexagon() {
    var s = toggles.regionSideLength;
    var testPoint = { x: 300, y: 300 };
    var testPoints = [
        hexPosA(testPoint, s),
        hexPosB(testPoint, s),
        hexPosC(testPoint, s),
        hexPosD(testPoint, s),
        hexPosE(testPoint, s),
        hexPosF(testPoint, s)
    ];
    for (var i = 0; i < testPoints.length; i++) {
        var point = testPoints[i];
        var squareSize = 6;
        drawShape({
            points: [
                { x: point.x, y: point.y },
                { x: point.x, y: point.y + squareSize },
                { x: point.x + squareSize, y: point.y + squareSize },
                { x: point.x + squareSize, y: point.y }
            ],
            xOffset: 300,
            yOffset: 300
        });
    }
}

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
