gdjs.menuCode = {};
gdjs.menuCode.GDlogoObjects1= [];
gdjs.menuCode.GDlogoObjects2= [];
gdjs.menuCode.GDNewObjectObjects1= [];
gdjs.menuCode.GDNewObjectObjects2= [];
gdjs.menuCode.GDhelpObjects1= [];
gdjs.menuCode.GDhelpObjects2= [];

gdjs.menuCode.conditionTrue_0 = {val:false};
gdjs.menuCode.condition0IsTrue_0 = {val:false};
gdjs.menuCode.condition1IsTrue_0 = {val:false};
gdjs.menuCode.condition2IsTrue_0 = {val:false};


gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.menuCode.GDNewObjectObjects1});
gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.menuCode.GDNewObjectObjects1});
gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDhelpObjects1Objects = Hashtable.newFrom({"help": gdjs.menuCode.GDhelpObjects1});
gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDhelpObjects1Objects = Hashtable.newFrom({"help": gdjs.menuCode.GDhelpObjects1});
gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.menuCode.GDNewObjectObjects1});
gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDhelpObjects1Objects = Hashtable.newFrom({"help": gdjs.menuCode.GDhelpObjects1});
gdjs.menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.menuCode.GDNewObjectObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
gdjs.menuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.menuCode.GDNewObjectObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDNewObjectObjects1[i].setAnimationName("start-hover");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.menuCode.GDNewObjectObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDNewObjectObjects1Objects, runtimeScene, false, false);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
gdjs.menuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.menuCode.GDNewObjectObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDNewObjectObjects1[i].setAnimationName("start");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("help"), gdjs.menuCode.GDhelpObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDhelpObjects1Objects, runtimeScene, true, false);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
gdjs.menuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.menuCode.GDhelpObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDhelpObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDhelpObjects1[i].setAnimationName("2");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("help"), gdjs.menuCode.GDhelpObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDhelpObjects1Objects, runtimeScene, false, false);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
gdjs.menuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.menuCode.GDhelpObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDhelpObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDhelpObjects1[i].setAnimationName("1");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "help", false);
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.menuCode.GDNewObjectObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDNewObjectObjects1Objects, runtimeScene, true, true);
}if (gdjs.menuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.menuCode.GDNewObjectObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDNewObjectObjects1[i].setAnimationName("start");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("help"), gdjs.menuCode.GDhelpObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDhelpObjects1Objects, runtimeScene, true, true);
}if (gdjs.menuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.menuCode.GDhelpObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDhelpObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDhelpObjects1[i].setAnimationName("1");
}
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDlogoObjects1.length = 0;
gdjs.menuCode.GDlogoObjects2.length = 0;
gdjs.menuCode.GDNewObjectObjects1.length = 0;
gdjs.menuCode.GDNewObjectObjects2.length = 0;
gdjs.menuCode.GDhelpObjects1.length = 0;
gdjs.menuCode.GDhelpObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);
return;

}

gdjs['menuCode'] = gdjs.menuCode;
