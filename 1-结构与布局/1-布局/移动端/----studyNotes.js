/**
 * @function 移动端优先的响应式布局
 *  响应式设计，有渐进增加和优雅降级两个设计原则
 *      渐进增强
 *          基本需求得到满足、实现，再根据不同浏览器及不同分辨率设备的特点，
 *          利用高级浏览器下的新特性提供更好的体验。比如，圆角、阴影、动画等
 *      优雅降级
 *          现有功能已经开发完备，但需要向下兼容版本和不支持该功能的浏览器。
 *          虽然兼容性方案的体验不如常规方案，但保证了功能可用性
 * 
 *      移动优先的响应式布局采用的是渐进增强原则
 *          特征是使用min-width匹配页面宽度。从上到下书写样式时，首先考虑的是移动设备的使用场景， 
 *          默认查询的是最窄的情况，再依次考虑设备屏幕逐渐变宽的情况
 * 
 * 
 *  三要素
 *      弹性布局、媒体查询和弹性图片
 *      弹性图片：图片随父容器宽度变化而变化
 *      有可能会根据设备大小加载不同的图片
 *          采用picture元素
 *          采用img元素的srcset和sizes属性
 *          采用js，根据window的resize事件，修改图片的路径
 *          后端配置，前端传递给后端当前设备的一些特征，后端通过这些特征决定做怎样的响应
 * 
 *  设计-响应模式
 *       列下沉
 *       基本流体式
 *       变换式
 *       抽屉式
 * 
 * @function 媒体查询
 * 
 *      媒体属性        
 * 
*              width | min-width | max-width
            height | min-height | max-height
            device-width | min-device-width | max-device-width
            device-height | min-device-height | max-device-height
            aspect-ratio | min-aspect-ratio | max-aspect-ratio
            device-aspect-ratio | min-device-aspect-ratio | max-device-aspect-ratio
            color | min-color | max-color
            color-index | min-color-index | max-color-index
            monochrome | min-monochrome | max-monochrome
            resolution | min-resolution | max-resolution
            scan | grid
        宽高比
            @media (min-aspect-ratio: 1/1)
        设备宽高比
            @media (device-aspect-ratio:16/9)
        方向（orientation）
            设备处于横屏（宽度大于宽度）模式还是竖屏（高度大于宽度）模式
        分辨率（resolution）
        逻辑操作符
            and not all 
        相对单位
            rem是相对于HTML的字体大小的
            媒体查询时相对于浏览器的，而浏览器的默认字体大小是16px

            由于媒体查询是相对于浏览器的，推荐使用em

    @function toucch事件
        鼠标         触摸          
        mousedown   touchstart 
        mousemove   touchmove   
        mouseup     touchend  
    300ms
        300ms问题是指在某个元素执行它的功能和执行touch事件之间有一个300毫秒的间隔。
        鼠标事件、焦点事件、浏览器默认行为等相较于touch事件，都存在着300ms的延迟

    ==》 点透问题的由来
        https://xiaohuochai.cc/posts/5af698cec5c7a22150ec2ced
 *      移动端知识   
 *      http://hcysun.me/page/2/
 *          
 */
