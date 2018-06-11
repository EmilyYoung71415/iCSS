/**
 * 动画类：http://www.css88.com/book/css/
 *      变换
 *          transform
 *              translate(x,y) //x y轴方向的平移
 *              rotate   旋转
 *                  ===》 需现有transform-origin---缩放中心 默认是center center
 *              scale   //x y轴方向的缩放
 *              skew    // x y轴方向斜切扭曲
 *                  将一个对象以其中心位置围绕着X轴和Y轴按照一定的角度倾斜
 *                  比如  transform:skewX(30deg) |_| ==> \_\ Y轴为标杆 往左角度30
 *                         transform:skewY(10deg)    TT ==> /-/ x轴为标杆 往下10
 *                      
            transform-origin
                旋转中心
            transform-style
            perspective
            perspective-origin
            backface-visibility


            多项属性一起改变： // 空格隔开
                transform:translate(10px,20px) rotate(45deg);
 *      过渡  
 *          transition
 *              所有元素，包含伪对象:after和:before
                取值：
                    transition-property //参与过渡的属性
                    transition-duration // 过渡的持续时间
                    transition-timing-function // 过渡的动画类型 贝塞尔曲线
                        linear ease ease-in ease-out ease-in-out  
                        线性过渡 | 平滑过渡 | 由慢到快 | 由快到慢|    
                        cubic-bezier // 自定义贝塞尔曲线 4个数值需在[0, 1]区间内 
                    transition-delay // 延迟过渡的时间
                例子
                    transition:
                        border-color .5s ease-in .1s,
                        background-color .5s ease-in .1s,
                        color .5s ease-in .1s;
                    transition: all .5s ease-in .1s;   
                    
            多项属性一起改变 逗号隔开
                transition: width 2s, height 2s, transform 2s;
 *      动画
 *          animation: name duration timing-function delay iteration-count direction;
                animation-name // 所应用的动画名称
                animation-duration
                animation-timing-function //动画的过渡类型
                animation-delay
                animation-iteration-count //动画的循环次数
                animation-direction // 动画在循环中是否反向运动
                animation-play-state // 
                animation-fill-mode // 动画结束之后的样式
 *  animation: name duration timing-function 
 *                              easy-in|easy-out|ease-in-out|cubic-bezier(n,n,n,n)
 *             delay    iteration-count        direction;
 *                    次数n|infinite(无限循环)    normal|alternate(反向)     
 *              animation-play-state
 *                  paused|running  可以设置某个时间或某个事件触发动画的暂停与播放
 *              animation-fill-mode          
                    none | forwards | backwards | both
                            动画完成后保持最后一个属性
            例子：
                .a1{
                    animation:mytest 2s ease-out forwards;
                }
                @keyframes mytest{
                    0%{transform:translate(0);opacity:0;}
                    50%{transform:translate(30px);opacity:1;}
                    70%{transform:translate(35px);opacity:1;}
                    100%{transform:translate(60px);opacity:0;}
                }
 * 
 * 
 * 
 * css与js：
 *      css动画执行过程中的事件回调，这个接口便于js控制动画的一些状态
 *      比如监听动画结束之后干嘛，动画进行到xxs干嘛
 * 
 * transform 
 * translate
 * animate
 *      animationstart  动画开始时
 *      animationiteration CSS 动画重复播放(>2次)时触发 默认情况动画只播放一次
 *          回调可以得到：
 *          e.elapsedTime //动画已经运行的秒数
 *          但是不是实时监控回调，即每轮动画完成之后才会打印animationiteration
 *          即监听的时间只是循环了多少次而已
 *          e.elapsedTime / duration  == 当前循环的次数
 *      animationend 动画结束时
 * 
 * @description 思考设定一个动画开始到现在的实时运行时间 事件监听
 *      1. js 设置变量，当动画开始之后就记录当前时间值
 *          js curTime - init得到时间戳，
 *      while(cur-init) // 代替监听
 *      
 */