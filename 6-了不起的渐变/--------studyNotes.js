/**
 *  @desc linear-gradient
 *  参考博文
 *  http://www.zhangxinxu.com/wordpress/2013/09/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3css3-gradient%E6%96%9C%E5%90%91%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98/
 *  
 *  background-image:linear-gradient(left, red 100px, yellow 200px);
 *      (100px, 100px)到(200px, 200px)由红到黄的斜向线性渐变  left 从左开始到右
 *  background-image:linear-gradient(left top, red 100px, yellow 200px);
 *      从左上开始 到右下
 *  
 *  从语法开始
 *      background-image:
 *          linear-gradient(  [ <angle> | <side-or-corner> ,]? <color-stop> [, <color-stop>]+ );
 *              + 渐变终止颜色，+表示必须的意思，除去开始颜色，结束颜色必须有一个或以上，否则是白板
 *              | 或 side-or-corner与angle是或的关系，即要么语义化表达要么使用角度
 *              ? 表示可选可不选，即代表角度参数的side-or-corner / angle可选可不选，若不选默认从上到下
 *          angle:角度，45deg 
 *              linear-gradient(45deg,red, yellow);
 *              按习惯思维是从上到下的红色变为黄色，并顺时针旋转45度，即右上是红，左下是黄。
 *              然而实际上是右上为黄，左下为红！！====》 css3与photoshop类比
 *              角度实际上是旋转针决定渐变轴，而渐变方向是默认的，即从中心指向圆边，发射状。
 *                  即 左下为红，右上为黄
 *          side-or-corner 边或角 [left | right] || [top | bottom] 定义起点，
 *              终点即它的反义词，两个点构成一条线
 *              写法及组合：
 *                  left 代表从左往右，
 *                  right bottom ,代表 从右下往左上
 * 
 *          color-stop: <color> [ <percentage> | <length> ] 即 red 100px或20%
 *              
 *          区域问题：
 *              渐变的起点和终点（默认）在过中心的渐变线的垂直线上
 */ 
