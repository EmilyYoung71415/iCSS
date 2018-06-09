/**
 * 两侧定宽中间自适应
 * 三列自适应 左内容填满 + 中内容填满 + 右撑满剩余
 * 参考：小火柴前端册子 + web高效
 * 
 * 
 * @func 两侧定宽中间自适应
 * 
 * @example float
 *  way1:
 *      三列float,中间宽度calc(100%-xxpx) 左右间距
 *  way2:
 *      基于way1的兼容写法：用增加结构替换calc
 *      外部margin负值矫正
 *      .left,.right{position: relative;float: left;width: 100px;}
        .centerWrap{float: left; width:100%; margin: 0 -100px;}
        .center{margin: 0 120px;}
 *  way3:
 *      不增加结构的兼容实现
 *      左float:left
 *      右float:right
 *      中间：利用围绕性质，自动填满,margin间距
 *      所以html顺序需要改变：先渲染左右，再渲染中间
 *  way4:
 *      圣杯布局/双飞翼布局思想 left + margin负
 *      均float
 *      优先渲染中间center,width:100%
 *      left:margin-left:-100%
 *      right: margin-left:-200px;
 * @func 三列自适应
 * @example float
 *  左中float,右BFC 与两列类似
 *  flex：左中间距，右flex:1
 * 
 * 
 * 
 * 
 */