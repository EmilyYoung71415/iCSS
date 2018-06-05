/**
 * 布局
 * 
 * margin吸附
 *  如果两个相邻元素都在其上设置外边距，
 *  并且两个外边距接触，则两个外边距中的较大者保留，较小的一个消失
 * 
 * 定位
 *  position:
 *      static 默认值
 *          任意 position: static; 的元素不会被特殊的定位
 *      relative 
 *          relative 表现的和 static 一样，除非你添加了一些额外的属性
 *          在一个相对定位（position属性的值为relative）的元素上设置
 *               top 、 right 、 bottom 和 left 属性会使其偏离其正常位置
 *      absolute:相对于最近的“positioned”祖先元素 父-> body
 *          positioned指 position 值不是 static 的元素
 *          绝对定位的元素不再存在于正常文档布局流中,独立于自己的世界
 *          可以做的事：
 *              弹出信息框和控制菜单，
 *              翻转面板，
 *              可以在页面上的任何地方拖放的UI功能
 *      fixed 相对于视窗
 *  定位上下文
 *  z-index
 * 实战：
 *      1-tab
 * Flexbox
 * 布局模型
 *          1、流动模型（Flow） 默认的
 *              块： 飞流直下三千尺
 *              行内：一江春水向东流
            2、浮动模型 (Float)
            3、层模型（Layer）
                1、相对定位(position: relative) 
                2、绝对定位(position: absolute)
                3、固定定位(position: fixed)
            补充：z-index
                只对定位元素有效
                父子关系
                    如果父元素z-index有效，那么子元素无论是否设置z-index都和父元素一致，会在父元素上方
                    如果父元素z-index失效（未定位或者使用默认值），那么定位子元素的z-index设置生效
                相同z-index谁上谁下
                相同zindex比较看：
                    定位
                    文档流顺序
 *  float
 *  网页布局方式
 *      块挨着块，块嵌套块，块叠着块。
 *      三种关系：相邻，嵌套，重叠。
 *      
 *      一列： margin 0 auto
 *      两列： float + 清除浮动、
 *      三列： 
 *          两侧定宽中间自适应    
 *             首先设置父级元素的宽度 左右浮动 margin调整间距 left left(手动margin) right
 *              或left right right 元素2在文档流中颠倒顺序   
 *              
 *              同样注意清除浮动
 *      混合布局
 *          top
 *      lef      right
 *          bottom
 *      等分布局
 *      对齐方式
 *      左侧固定右侧自适应的两栏布局
 *      圣杯布局
 *      双飞翼布局
 * 
 *  
 *      css深入理解流体特性和BFC特性下的多栏自适应
 *          流体特性和BFC特性下的两栏自适应，传统布局
 *          流体特性：
 *              块状：在默认情况下（非浮动、绝对定位等），水平方向会自动填满外部的容器
 * 
 * 
 * 
 *      三栏自适应布局
 * 
 * 
 * 
 * 
 */