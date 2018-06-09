/**
 * 参考 
 *      小火柴前端册子
 *  两端对齐
 *  定宽+自适应
 *  两列自适应
 * 
 * @function 两端对齐-导航
 *  两端对齐即是flex的space-between效果
 * 
 *  flex
 *      justify-content: space-between;
 *      
 * 
 *  text-align
 *      text-algin:justify // 但是必须沾满一行才能实现 没沾满则是按方向排列
 *      text-align-last:justify; // 规定如何对齐文本的最后一行  兼容性x
 *      
 *      最佳👍：
 *          .list{text-align:justify;}
 *          .list:after{ // 相当于伪元素:after被挤到第二行 // 从而使原来的元素占满了第一行
 *              content:"";width:100%;display:inline-block; 
 *          }
 * 
 * 
 */