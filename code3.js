gdjs.game4Code = {};
gdjs.game4Code.GDbuttonObjects1= [];
gdjs.game4Code.GDbuttonObjects2= [];
gdjs.game4Code.GDdaduObjects1= [];
gdjs.game4Code.GDdaduObjects2= [];
gdjs.game4Code.GDdice1Objects1= [];
gdjs.game4Code.GDdice1Objects2= [];
gdjs.game4Code.GDdice2Objects1= [];
gdjs.game4Code.GDdice2Objects2= [];
gdjs.game4Code.GDdice3Objects1= [];
gdjs.game4Code.GDdice3Objects2= [];
gdjs.game4Code.GDdice4Objects1= [];
gdjs.game4Code.GDdice4Objects2= [];
gdjs.game4Code.GDbackObjects1= [];
gdjs.game4Code.GDbackObjects2= [];
gdjs.game4Code.GDNewObjectObjects1= [];
gdjs.game4Code.GDNewObjectObjects2= [];

gdjs.game4Code.conditionTrue_0 = {val:false};
gdjs.game4Code.condition0IsTrue_0 = {val:false};
gdjs.game4Code.condition1IsTrue_0 = {val:false};
gdjs.game4Code.condition2IsTrue_0 = {val:false};


gdjs.game4Code.mapOfGDgdjs_46game4Code_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.game4Code.GDbuttonObjects1});
gdjs.game4Code.mapOfGDgdjs_46game4Code_46GDdice1Objects1Objects = Hashtable.newFrom({"dice1": gdjs.game4Code.GDdice1Objects1});
gdjs.game4Code.mapOfGDgdjs_46game4Code_46GDdice2Objects1Objects = Hashtable.newFrom({"dice2": gdjs.game4Code.GDdice2Objects1});
gdjs.game4Code.mapOfGDgdjs_46game4Code_46GDdice3Objects1Objects = Hashtable.newFrom({"dice3": gdjs.game4Code.GDdice3Objects1});
gdjs.game4Code.mapOfGDgdjs_46game4Code_46GDdice4Objects1Objects = Hashtable.newFrom({"dice4": gdjs.game4Code.GDdice4Objects1});
gdjs.game4Code.mapOfGDgdjs_46game4Code_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.game4Code.GDbackObjects1});
gdjs.game4Code.mapOfGDgdjs_46game4Code_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.game4Code.GDbackObjects1});
gdjs.game4Code.mapOfGDgdjs_46game4Code_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.game4Code.GDbackObjects1});
gdjs.game4Code.mapOfGDgdjs_46game4Code_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.game4Code.GDbuttonObjects1});
gdjs.game4Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.game4Code.GDbuttonObjects1);

gdjs.game4Code.condition0IsTrue_0.val = false;
gdjs.game4Code.condition1IsTrue_0.val = false;
{
gdjs.game4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.game4Code.condition0IsTrue_0.val ) {
{
gdjs.game4Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game4Code.mapOfGDgdjs_46game4Code_46GDbuttonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.game4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.game4Code.GDbuttonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("dadu"), gdjs.game4Code.GDdaduObjects1);
{for(var i = 0, len = gdjs.game4Code.GDdaduObjects1.length ;i < len;++i) {
    gdjs.game4Code.GDdaduObjects1[i].setAnimation(gdjs.random(5));
}
}{for(var i = 0, len = gdjs.game4Code.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.game4Code.GDbuttonObjects1[i].setAnimationName("roll-hover");
}
}}

}


{


gdjs.game4Code.condition0IsTrue_0.val = false;
{
gdjs.game4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.game4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.game4Code.GDbuttonObjects1);
{for(var i = 0, len = gdjs.game4Code.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.game4Code.GDbuttonObjects1[i].setAnimationName("roll");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("dice1"), gdjs.game4Code.GDdice1Objects1);

gdjs.game4Code.condition0IsTrue_0.val = false;
gdjs.game4Code.condition1IsTrue_0.val = false;
{
gdjs.game4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game4Code.mapOfGDgdjs_46game4Code_46GDdice1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.game4Code.condition0IsTrue_0.val ) {
{
gdjs.game4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.game4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("dice2"), gdjs.game4Code.GDdice2Objects1);

gdjs.game4Code.condition0IsTrue_0.val = false;
gdjs.game4Code.condition1IsTrue_0.val = false;
{
gdjs.game4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game4Code.mapOfGDgdjs_46game4Code_46GDdice2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.game4Code.condition0IsTrue_0.val ) {
{
gdjs.game4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.game4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("dice3"), gdjs.game4Code.GDdice3Objects1);

gdjs.game4Code.condition0IsTrue_0.val = false;
gdjs.game4Code.condition1IsTrue_0.val = false;
{
gdjs.game4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game4Code.mapOfGDgdjs_46game4Code_46GDdice3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.game4Code.condition0IsTrue_0.val ) {
{
gdjs.game4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.game4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("dice4"), gdjs.game4Code.GDdice4Objects1);

gdjs.game4Code.condition0IsTrue_0.val = false;
gdjs.game4Code.condition1IsTrue_0.val = false;
{
gdjs.game4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game4Code.mapOfGDgdjs_46game4Code_46GDdice4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.game4Code.condition0IsTrue_0.val ) {
{
gdjs.game4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.game4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game4", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.game4Code.GDbackObjects1);

gdjs.game4Code.condition0IsTrue_0.val = false;
gdjs.game4Code.condition1IsTrue_0.val = false;
{
gdjs.game4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.game4Code.condition0IsTrue_0.val ) {
{
gdjs.game4Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game4Code.mapOfGDgdjs_46game4Code_46GDbackObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.game4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.game4Code.GDbackObjects1 */
{for(var i = 0, len = gdjs.game4Code.GDbackObjects1.length ;i < len;++i) {
    gdjs.game4Code.GDbackObjects1[i].setAnimationName("2");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.game4Code.GDbackObjects1);

gdjs.game4Code.condition0IsTrue_0.val = false;
gdjs.game4Code.condition1IsTrue_0.val = false;
{
gdjs.game4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.game4Code.condition0IsTrue_0.val ) {
{
gdjs.game4Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game4Code.mapOfGDgdjs_46game4Code_46GDbackObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.game4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.game4Code.GDbackObjects1);

gdjs.game4Code.condition0IsTrue_0.val = false;
{
gdjs.game4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game4Code.mapOfGDgdjs_46game4Code_46GDbackObjects1Objects, runtimeScene, true, true);
}if (gdjs.game4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.game4Code.GDbackObjects1 */
{for(var i = 0, len = gdjs.game4Code.GDbackObjects1.length ;i < len;++i) {
    gdjs.game4Code.GDbackObjects1[i].setAnimationName("1");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.game4Code.GDbuttonObjects1);

gdjs.game4Code.condition0IsTrue_0.val = false;
{
gdjs.game4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game4Code.mapOfGDgdjs_46game4Code_46GDbuttonObjects1Objects, runtimeScene, true, true);
}if (gdjs.game4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.game4Code.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.game4Code.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.game4Code.GDbuttonObjects1[i].setAnimationName("roll");
}
}}

}


};

gdjs.game4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game4Code.GDbuttonObjects1.length = 0;
gdjs.game4Code.GDbuttonObjects2.length = 0;
gdjs.game4Code.GDdaduObjects1.length = 0;
gdjs.game4Code.GDdaduObjects2.length = 0;
gdjs.game4Code.GDdice1Objects1.length = 0;
gdjs.game4Code.GDdice1Objects2.length = 0;
gdjs.game4Code.GDdice2Objects1.length = 0;
gdjs.game4Code.GDdice2Objects2.length = 0;
gdjs.game4Code.GDdice3Objects1.length = 0;
gdjs.game4Code.GDdice3Objects2.length = 0;
gdjs.game4Code.GDdice4Objects1.length = 0;
gdjs.game4Code.GDdice4Objects2.length = 0;
gdjs.game4Code.GDbackObjects1.length = 0;
gdjs.game4Code.GDbackObjects2.length = 0;
gdjs.game4Code.GDNewObjectObjects1.length = 0;
gdjs.game4Code.GDNewObjectObjects2.length = 0;

gdjs.game4Code.eventsList0(runtimeScene);
return;

}

gdjs['game4Code'] = gdjs.game4Code;
