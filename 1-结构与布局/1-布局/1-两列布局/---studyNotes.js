/**
 * 参考 
 *      小火柴前端册子
 *  定宽+自适应
 *  两列自适应
 * 
 * table x;grid x; 
 * 
 * @function 左定宽+右自动撑满剩余宽度
 * @example: float
 *  way1:
 *      两个均浮动，左边定宽，右边100%-宽度
 *  way2:
 *      左float.右触发BFC,阻止浮动造成的文字环绕效果
 * 
 *  不推荐:
 *      左浮动定宽，右间距。
 *      即出现非浮动元素与浮动元素产生间距情景，应规避。
 *      可能出现:右侧清除浮动之后，右侧被挤到下一行
 *      此时这种情况解决：
 *      1.右侧触发BFC
 *      2.右侧增加结构包裹 同时也浮动，间距交给内部实现
 * 
 * @example: flex
 *       
 *    left:定宽
 *    right:flex:1 //伸缩即可
 * 
 * @example: absolute
 *    父：relative
 *    左边：绝对定位，left:0
 *    右边实现自适应：利用对冲下的流体性
 *          .right{position: absolute;left:120px;right:0;}
 * 
 * @function 两列自适应：左内容撑开，右自动撑满剩余宽度
 * @example: float
 *      float + bfc(只是不定宽了而已)
 *      
 * @example: flex
 *     同理只是left不定宽了而已
 */