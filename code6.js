gdjs.helpCode = {};
gdjs.helpCode.GDwarnObjects1= [];
gdjs.helpCode.GDwarnObjects2= [];
gdjs.helpCode.GDtutorObjects1= [];
gdjs.helpCode.GDtutorObjects2= [];
gdjs.helpCode.GDcreditObjects1= [];
gdjs.helpCode.GDcreditObjects2= [];
gdjs.helpCode.GDbackObjects1= [];
gdjs.helpCode.GDbackObjects2= [];

gdjs.helpCode.conditionTrue_0 = {val:false};
gdjs.helpCode.condition0IsTrue_0 = {val:false};
gdjs.helpCode.condition1IsTrue_0 = {val:false};
gdjs.helpCode.condition2IsTrue_0 = {val:false};


gdjs.helpCode.mapOfGDgdjs_46helpCode_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.helpCode.GDbackObjects1});
gdjs.helpCode.mapOfGDgdjs_46helpCode_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.helpCode.GDbackObjects1});
gdjs.helpCode.mapOfGDgdjs_46helpCode_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.helpCode.GDbackObjects1});
gdjs.helpCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.helpCode.GDbackObjects1);

gdjs.helpCode.condition0IsTrue_0.val = false;
gdjs.helpCode.condition1IsTrue_0.val = false;
{
gdjs.helpCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.helpCode.condition0IsTrue_0.val ) {
{
gdjs.helpCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.helpCode.mapOfGDgdjs_46helpCode_46GDbackObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.helpCode.condition1IsTrue_0.val) {
/* Reuse gdjs.helpCode.GDbackObjects1 */
{for(var i = 0, len = gdjs.helpCode.GDbackObjects1.length ;i < len;++i) {
    gdjs.helpCode.GDbackObjects1[i].setAnimationName("2");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.helpCode.GDbackObjects1);

gdjs.helpCode.condition0IsTrue_0.val = false;
gdjs.helpCode.condition1IsTrue_0.val = false;
{
gdjs.helpCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.helpCode.mapOfGDgdjs_46helpCode_46GDbackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.helpCode.condition0IsTrue_0.val ) {
{
gdjs.helpCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.helpCode.condition1IsTrue_0.val) {
/* Reuse gdjs.helpCode.GDbackObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}{for(var i = 0, len = gdjs.helpCode.GDbackObjects1.length ;i < len;++i) {
    gdjs.helpCode.GDbackObjects1[i].setAnimationName("1");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.helpCode.GDbackObjects1);

gdjs.helpCode.condition0IsTrue_0.val = false;
{
gdjs.helpCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.helpCode.mapOfGDgdjs_46helpCode_46GDbackObjects1Objects, runtimeScene, true, true);
}if (gdjs.helpCode.condition0IsTrue_0.val) {
/* Reuse gdjs.helpCode.GDbackObjects1 */
{for(var i = 0, len = gdjs.helpCode.GDbackObjects1.length ;i < len;++i) {
    gdjs.helpCode.GDbackObjects1[i].setAnimationName("1");
}
}}

}


};

gdjs.helpCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.helpCode.GDwarnObjects1.length = 0;
gdjs.helpCode.GDwarnObjects2.length = 0;
gdjs.helpCode.GDtutorObjects1.length = 0;
gdjs.helpCode.GDtutorObjects2.length = 0;
gdjs.helpCode.GDcreditObjects1.length = 0;
gdjs.helpCode.GDcreditObjects2.length = 0;
gdjs.helpCode.GDbackObjects1.length = 0;
gdjs.helpCode.GDbackObjects2.length = 0;

gdjs.helpCode.eventsList0(runtimeScene);
return;

}

gdjs['helpCode'] = gdjs.helpCode;
