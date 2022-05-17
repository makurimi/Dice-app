gdjs.gameCode = {};
gdjs.gameCode.GDbuttonObjects1= [];
gdjs.gameCode.GDbuttonObjects2= [];
gdjs.gameCode.GDdaduObjects1= [];
gdjs.gameCode.GDdaduObjects2= [];
gdjs.gameCode.GDdice1Objects1= [];
gdjs.gameCode.GDdice1Objects2= [];
gdjs.gameCode.GDdice2Objects1= [];
gdjs.gameCode.GDdice2Objects2= [];
gdjs.gameCode.GDdice3Objects1= [];
gdjs.gameCode.GDdice3Objects2= [];
gdjs.gameCode.GDdice4Objects1= [];
gdjs.gameCode.GDdice4Objects2= [];
gdjs.gameCode.GDbackObjects1= [];
gdjs.gameCode.GDbackObjects2= [];
gdjs.gameCode.GDNewObjectObjects1= [];
gdjs.gameCode.GDNewObjectObjects2= [];

gdjs.gameCode.conditionTrue_0 = {val:false};
gdjs.gameCode.condition0IsTrue_0 = {val:false};
gdjs.gameCode.condition1IsTrue_0 = {val:false};
gdjs.gameCode.condition2IsTrue_0 = {val:false};


gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.gameCode.GDbuttonObjects1});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDdice1Objects1Objects = Hashtable.newFrom({"dice1": gdjs.gameCode.GDdice1Objects1});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDdice2Objects1Objects = Hashtable.newFrom({"dice2": gdjs.gameCode.GDdice2Objects1});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDdice3Objects1Objects = Hashtable.newFrom({"dice3": gdjs.gameCode.GDdice3Objects1});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDdice4Objects1Objects = Hashtable.newFrom({"dice4": gdjs.gameCode.GDdice4Objects1});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.gameCode.GDbackObjects1});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.gameCode.GDbackObjects1});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.gameCode.GDbuttonObjects1});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.gameCode.GDbackObjects1});
gdjs.gameCode.eventsList0 = function(runtimeScene) {

{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.gameCode.GDbuttonObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDbuttonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDbuttonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("dadu"), gdjs.gameCode.GDdaduObjects1);
{for(var i = 0, len = gdjs.gameCode.GDdaduObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDdaduObjects1[i].setAnimation(gdjs.random(5));
}
}{for(var i = 0, len = gdjs.gameCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDbuttonObjects1[i].setAnimationName("roll-hover");
}
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.gameCode.GDbuttonObjects1);
{for(var i = 0, len = gdjs.gameCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDbuttonObjects1[i].setAnimationName("roll");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("dice1"), gdjs.gameCode.GDdice1Objects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDdice1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("dice2"), gdjs.gameCode.GDdice2Objects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDdice2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("dice3"), gdjs.gameCode.GDdice3Objects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDdice3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("dice4"), gdjs.gameCode.GDdice4Objects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDdice4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game4", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.gameCode.GDbackObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDbackObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDbackObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDbackObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDbackObjects1[i].setAnimationName("2");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.gameCode.GDbackObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDbackObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.gameCode.GDbuttonObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDbuttonObjects1Objects, runtimeScene, true, true);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDbuttonObjects1[i].setAnimationName("roll");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.gameCode.GDbackObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDbackObjects1Objects, runtimeScene, true, true);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDbackObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDbackObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDbackObjects1[i].setAnimationName("1");
}
}}

}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDbuttonObjects1.length = 0;
gdjs.gameCode.GDbuttonObjects2.length = 0;
gdjs.gameCode.GDdaduObjects1.length = 0;
gdjs.gameCode.GDdaduObjects2.length = 0;
gdjs.gameCode.GDdice1Objects1.length = 0;
gdjs.gameCode.GDdice1Objects2.length = 0;
gdjs.gameCode.GDdice2Objects1.length = 0;
gdjs.gameCode.GDdice2Objects2.length = 0;
gdjs.gameCode.GDdice3Objects1.length = 0;
gdjs.gameCode.GDdice3Objects2.length = 0;
gdjs.gameCode.GDdice4Objects1.length = 0;
gdjs.gameCode.GDdice4Objects2.length = 0;
gdjs.gameCode.GDbackObjects1.length = 0;
gdjs.gameCode.GDbackObjects2.length = 0;
gdjs.gameCode.GDNewObjectObjects1.length = 0;
gdjs.gameCode.GDNewObjectObjects2.length = 0;

gdjs.gameCode.eventsList0(runtimeScene);
return;

}

gdjs['gameCode'] = gdjs.gameCode;
