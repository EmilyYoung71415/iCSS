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

    position威力 > float
    附带作用：
        一旦positioned之后,元素display：block/table
        普通元素变为相对元素，层级提高

    初始包含快：html，尺寸等于浏览器可视化窗口大小
    relative/static：包含块最近的块容器祖先计算
    fixed:包含块即初始包含块
    absolute:非static元素

    absolute是非常独立的 CSS 属性值，可无依赖。
    并不是，出现了absolute就要给父级加上relative,并修改自身left等
    比如实现，按钮右上角有字，position:absolute,再通过margin定位 即可，不会影响父级
    推崇：无依赖绝对定位
    
    利用 text-align 控制 absolute 元素的定位：
        背后原理:内敛元素的空白幽灵节点
            +   absolute的无依赖绝对定位

    absolute与clip(王道裁剪)
    absolute的流体性质
    ==> 触发其流体条件：对立方向同时发生定位的时
    .box {   position: absolute;   left: 0; right: 0; top: 0; bottom: 0; }
    本来由于包裹性元素宽度为0，但left 与right对冲，表现为格式化宽度，
    宽度大小自适应于.box 【包含块】的 padding box
    假如其包含块为根元素，box则完全覆盖浏览器可视窗口

    ==》 让绝对定位元素宽高自适应于包含块：推荐使用流体特性
    .element {   width: 300px; height: 200px;   position: absolute;    left: 0; right: 0; top: 0; bottom: 0;   margin: auto; } 
    利用：绝对定位元素的流体特性与margin:auto自动分配实现居中 👍



    relative
        relative对absolute的限制，
            以前的absolute是自由奔跑的孙悟空，
            一旦被父级relative了一下就受制于五指山的小范围了
        relative的定位有两大特性：一是相对自身；二是无侵入。 
            相对于自身进行偏移定位的，所以是相对定位
            但是百分比的计算值是相对包含块
            无侵入：
                当relative进行定位偏移的时候，一般情况下不会影响周围元素的布局

            出现对冲时的表现
                绝对定位表现是：流体性，即对冲拉伸。
                相对定位是：优先级 取1作用。
                        left>right; top > bottom (与文档流顺序有关)
            什么时候使用relative:
                1> 尽量不使用relative，
                    如果想定位某些元素，看看能否使用“无依赖的绝对定位   
                2> 当必须使用relative时
                   该relative务必最小化影响。
                由于层级增高的附带作用，所以
                <div style="position:relative;">   
                    <img src="icon.png" style="position:absolute;top:0;right:0;">   
                    <p>内容1</p>
                    ...
                </div> 

                推荐为：
                 <div style="position:relative;">   
                    // 最小化影响
                    <div style="position:relative;"> 
                        <img src="icon.png" style="position:absolute;top:0;right:0;">   
                    </div>
                    <p>内容1</p>
                    ...
                </div> 
    fixed
        扩展：
            当元素既有不跟随滚动的固定定位效果，又能被定位元素限制和精准定位
        ===》  position:absolute 进行模拟
                页面的滚动由内部的容器page height100%产生，
                page下方的元素使用position:absolute
                即窗体滚动改为内部滚动。

            比如，蒙层的背景固定
        ===> 同样：，让页面滚动条由内部的普通元素产生
            可用透明的border填充消失的滚动条

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