/**
 * 
 * 等高布局
 *  https://xiaohuochai.site/CSS/layout/layoutMode/equalHeight.html
 * 
 * 底部固定
 *      https://xiaohuochai.cc/posts/5af1fd50bc10ea0dac97302e
 * 
 * @func 等高布局
 *  子元素在父元素中高度相等的布局方式
 *  有伪等高-看上去等高；真等高-实实在在的等高
 * 
 *  伪等高
 *      @example 边框模拟
 *          左右两边高度，由内容撑开，内容不一样时高度不一致，
 *                      其次，左右高度一致也不一定和中间一致
 *          实现：
 *          当中间高度是最高时，可以以中间马首是瞻
 *          具体模拟：中间的border足够宽，宽到与左右等宽元素一样
 *          看上去就像左右两边的背景，实际是中间的border在起作用
 *          至于间距
 *              中间元素pading, 背景裁剪至content即可
 *      @example 负margin
 *           正padding 与 负margin 对冲
 *           隐患：
 *              如果页面中使用<a>锚点跳转时，将会隐藏部分文字信息
 *              如果页面中的背景图片定位到底部，将会看不到背景图片
 * 
 *  真等高 
 *      @example table
 *          table-cell默认即等高
 *          .parent{ display: table;}
 *          .left,.centerWrap,.right{ display: table-cell;}
 *      @example absolute
 *          对冲实现等高 以父元素为基准
 *          .parent{ position: relative; height: 40px;}
 *          然后子absolute + 对冲
 *      @example flex
 *           flex: 1;
 */