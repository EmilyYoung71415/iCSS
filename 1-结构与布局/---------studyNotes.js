/***
 * @func 1-盒模型与浮动(清浮动)
 *          http://ife.baidu.com/course/detail/id/40
 *  
 * 盒模型:
 *      width height maigin padding border
 * tips:
 *      1. 盒子高度百分比问题:
 *          除非父元素含有绝对高度，子元素的百分比高度可以work
 *          除此以外，盒子高度总是由内容撑开     
 *      2. 边界border会忽略 宽度百分比设置  
 *      3. 外边距margin 的特殊性：
 *              外边距塌陷：两个盒子挨在一起时，两盒子之间的距离为两者之间外边距较大的值，
 *                          而不是两个margin之和
 * 
 * overflow
 *         auto: 超出部分隐藏且显示滚动条
 *         hidden: 超出部分隐藏
 *         visible: 违规停车，超出范围照样原封不动的暴露出来(默认行为)    
 * background-clip
 * outline:
 * 
 * 盒模型的高级属性
 *      max-width\max-height\min-width\min-height
 *      box-sizing: 
 *          调整盒模型——以前内容的width+height为wid、height。
 *          若box-sizing:border-box/
 *                  将border算在内的
 *      display属性
 *              block\ inline-block \ inline
 * 
 *              block:
 *              inline
 *                     width height 无效
 *                     在行内盒上的所有内边距、外边距和边界设置会改变周围文本的位置，
 *                          但是不会影响周围块盒的位置
 * 
 *              inline-block
 *                      像行内盒一样，跟随周围的文本流堆放，不会在其前后创建换行
 *                      又可以设置width、height
 *              
 *              不常见的属性：
 *              table\flex\grid
 *              table:
 *                      像处理table布局那样处理非table元素
 *              flex:
 *                      优势解决传统布局的难点：
 *                          弹性等宽容器或者垂直居中
 *              grid：
 *                      网格系统
 * 
 * 
 * @func 2-浮动
 *      比如float:left 
 *      
 *      <body>
 *             <img/>
 *             <p>众多文字........</p>
 *      </body>
 * 
 *      body {
            width: 90%;
            max-width: 900px;
            margin: 0 auto;
        }
        img{
            float:left
        }
 *      浮动元素会脱离正常的文档布局流，并吸附到其父容器的左边 (这个例子中的<body>元素)。
 *      在正常布局中位于该浮动元素之下的内容(img标签以下的)，
 *              此时会围绕着浮动元素，填满其右侧的空间
 * 
 *      浮动内容仍然遵循盒子模型诸如外边距和边界
 *          可设置图片右侧的外边距
 * 
 *      例子：
 *          首字下沉
 *          多列浮动布局
 *              两列布局：
 *                  1-宽度使用百分比，创建流式布局
 *                      而当宽度变得十分小的时候，双列切换为单列--媒体查询功能
 *                  2-宽度设置为一个固定的单位如rem或像素
 *                      固定宽度布局
 * 
 *          三列布局
 *  
 * 
 * 
 * @func  3-清除浮动
 *          
 *      所有在浮动下面的自身不浮动的内容都将围绕浮动元素进行包装，如果没有处理这些元素，就会变得很糟糕 
 * 
 * 
 * 
 * @func 4-浮动存在的问题
 *      整个宽度难以计算
 *      浮动项目的背景高度
 *      清除浮动复杂化                
 */ 