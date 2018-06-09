/**
 * 
 * 圣杯和双飞翼
 *      https://xiaohuochai.site/CSS/layout/layoutMode/sepcialThreeColumns.html
 * 全屏布局
 *      https://xiaohuochai.site/CSS/layout/layoutMode/fullScreen.html
 * 
 * @func 圣杯和双飞翼
 * 布局效果一样，只是实现思想不一样
 * 页面效果：
 *      左右宽度固定 中间自动剩余撑开宽度
 * 
 * 圣杯：
 *     页面优先渲染 中间main 然后left\right 均左浮动
 *     然后利用margin负 让他们在一行      
 *     最后解决：中间栏div内容不被遮挡的问题 --- 圣杯与双飞翼的实现区别关键所在
 *  
 * 圣杯解决：中间不被遮挡：
 *      middle：padding 0 120px 让中间区域到两边留出120px宽
 *      然后左右元素relative相对自身，left\right负值冲出中间区域。由此实现不遮挡中间
 *      缺点：
 *          没有实现等高布局；
 *          使用了相对布局，扩展性不好
 * 
 * 双飞翼：
 *      双飞翼在圣杯基础上改进，给中间元素增加结构，    
 *      中间元素内部裹着真正的内容元素，子div用margin 0 120px为两栏流出位置
 *      思路相对更直接简单一点
 * 
 *      缺点
 *          没有实现等高布局；
 *          增加了html结构
 * 
 * P.S. Flex下实现
 *      box 布局方向是列向  保证中间撑开内容则flex:1,这样header 和footer都在两端
 *      content区域 从左到右是  左中右 三栏布局
 *              content:justify-content: space-between;      
 *              两端固定：
 *                  flex 0 0 70px;
 *              中间自动撑满：
 *                  flex:1
 * @func 全屏布局
 *  全局布局就是常见的后台管理页面
 *     header + footer + 中间：固定宽度+右边自动撑满
 * @example flex
 *      大体布局和三栏布局中类似，只是中间的三列编程了两列
 *          左边 flex：0 0 70px
 *          右边：flex:1
 *      注意中间的自动撑满是由 flex:1 形成的
 * @example float
 *  
 *  way1:   calc实现中间高度撑满
 *      要实现中间content内容高度自动撑满：calc(100%-100px)
 *      剩下的就是解决 两列布局：左定宽，右边自动撑满的问题了 float + BFC即可
 *  way2:   通过增加结构提高兼容
 *      .middleWrap元素设置100%的高度，.top和.bottom设置absolute覆盖在.middle上
 *      middle内容元素负责内容，左右间距
 * 
 * @example absolute
 *     利用绝对定位元素对冲下的流体性质
 *     top.bottom.middle 左右全屏： left 0 right0
 *     顺势而下：
 *          top0
 *          bottom0
 *          middle: top:50px bottom50px 实现与calc(100%-100px)等效的效果
 *     middle:
 *         左边固定右边自适应
 *          同样absolute left:50px;bfc
 */