/****
 * @func 容器box属性
 *      flex-direction 主轴方向
 *                  row | row-reverse | column | column-reverse;
 *                  左到右   右到左         上到下     下到上
 *      flex-wrap    溢出处理方式
 *                  nowrap | wrap | wrap-reverse;
 *                  不换行     换行      换行，满的在下方
 *      flex-flow   
 *          flex-direction && flex-wrap 两者的简写模式
 *          项目的初始： 流的方向和流溢出的处理方式
 *              
 *      justify-content 决定元素在主轴上的对齐方式
 *          flex-start | flex-end | center | space-between | space-around;
 *          左对齐         右对齐     居中      两端对齐，       两侧对齐
 *      align-items     交叉轴上如何对齐
 *          flex-start | flex-end | center | baseline | stretch;
 *              baseline:项目的第一行文字的基线对齐
 *              stretch:如果项目未设置高度或设为auto，将占满整个容器的高度
 *      align-content   多根轴线的对齐方式 若项目只有一根轴线，该属性不起作用
 *          flex-start | flex-end | center | space-between | space-around | stretch;   
 * 
 * 总结：
 *      flex : 流方向| 溢出处理
 *      justify-content: 对齐方式
 *                      flex-start | flex-end  | center | space-between
 *      align-items:
 *              flex-start  baseline center strentch
 *      
 *      元素； 
 *          flex：放大比例 | 缩小比例 | 固定占据空间
 *          align-self : 修正自己的非主轴对齐方式
 * 
 * @func 元素item属性
 *      order
 *              order属性定义项目的排列顺序 数值越小，排列越靠前
        flex-grow
                项目的放大比例 默认为0，即如果存在剩余空间，也不放大
                如果items都设为1 ，则均分剩余空间
        flex-shrink
                定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
                如果items都为1，等比例缩小
        flex-basis  分配多余空间之前，项目占据的主轴空间
                 <length> | auto;
                 可设300px 占据固定空间
        flex
                flex-grow, flex-shrink  flex-basis缩写
        align-self
            允许单个项目有与其他项目不一样的对齐方式
            覆盖 父容器的align-items
            默认值为auto，表示继承父元素的align-items属性
 * 
 * 
 * 
 */