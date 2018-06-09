/**
 * 等分：
 *  子元素平均分配父元素宽度，原理都是 父元素宽度/份额
 * 
 *  1- float
 *      思路 float一列排列,通过padding\margin增加间距
 *      
 *  float:left
 *  border-box:border;
 *  margin-right:20px;
 *  width:25%
 *  
 *  其余的可以比如：
 *      width:calc(25%-20px)
 *      padding + background-clip  背景被裁剪到内容框
 *      child内包裹一层，由内层实现边距效果，通过增加结构来实现兼容
 * 
 * 
 *  2- table  x不考虑
 *  3- Inline x不考虑
 * 
 *  4-flex
 *      flex：1自动撑开
 *      .child + .child{
            margin-left: 20px;
        }
    补充：实现一列多个间距，边界间距的问题：

    如果一次性给每块设置margin-right:20px会出现最后一格和边缘有间距，但不应该有

    way1:
        子：margin-right:20px
        父：margin-right:-20px;//移回来

    way2:
        让除了最后一个元素的都margin-right
        .child:not(:last-child) {
            margin-right:20px;
        }
    way3:相邻兄弟选择器  //即child下的非第一个child都会被选中
        .child + .child{
            margin-left: 20px;
        }
 */