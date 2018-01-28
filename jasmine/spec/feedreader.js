/* feedreader.js
 *
 * 1. 这是 Jasmine 会读取的spec文件，它包含所有的要在你应用上面运行的测试。
 * 2. 由于部分测试需要 DOM 元素，所以在DOM准备好后再开始测试。
 */

$(function() {
    /* 测试用例RSS Feeds，用于检查RSS源是否定义 */
    describe('RSS Feeds', function() {
       /* 检测allFeeds是否已经定义且有内容 */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* 遍历 allFeeds 对象里面的所有的源来保证有链接字段而且链接不是空的 */
        it('each feed has url', function(){
            for (let i = allFeeds.length - 1; i >= 0; i--) {
                var feedUrl = allFeeds[i].url;
                expect(feedUrl).toBeDefined();
                expect(feedUrl).not.toBe(null);
                expect(feedUrl.length).not.toBe(0);
            }
        });

        /* 遍历 allFeeds 对象里面的所有的源来保证有名字字段而且不是空的 */
        it('each feed has name', function(){
            for (let i = allFeeds.length - 1; i >= 0; i--) {
                var feedName = allFeeds[i].name;
                expect(feedName).toBeDefined();
                expect(feedName).not.toBe(null);
                expect(feedName.length).not.toBe(0);
            }
        });
    });


    /* 测试用例The menu */
    describe('The menu', function(){
        var b;

        beforeAll(function(){
            b = $('body');      
        });

        /* 
         * 检测菜单元素默认是否是隐藏的。
         * (通过判断body是否有menu-hidden这个样式判断)
         */
        it('hidden by default', function(){
            expect(b.hasClass('menu-hidden')).toBeTruthy();
        })

         /* 
          * 检测菜单图标被点击的时候菜单会切换可见状态。
          * 包含两个 expectation ：点击图标的时候菜单是否显示，再次点击的时候是否隐藏。
          */
        it('show/hidden by click icon', function(){
            var menuIcon = $('.menu-icon-link');
            menuIcon.trigger('click');
            expect(b.hasClass('menu-hidden')).toBeFalsy();
            menuIcon.trigger('click');
            expect(b.hasClass('menu-hidden')).toBeTruthy();            
        })
        
    });

    /* 测试用例Initial Entries */
    describe('Initial Entries', function(){
        /* 
         * 使用 Jasmine 的 beforeEach 和异步的 done() 函数检测 loadFeed 这个异步函数
         * 被调用而且工作正常，即在 .feed 容器元素里面至少有一个 .entry 的元素。
         */
        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('load feed success', function(done){
            var entries = $('a.entry-link');
            expect(entries.length).toBeGreaterThan(0);
            done();   
        })       
    }); 

    /* 测试用例： New Feed Selection */
    describe('New Feed Selection', function(){
        var lastFirstTitle;
        /* 
         * 检测当用 loadFeed 函数加载一个新源的时候内容会真的改变。
         */
        beforeEach(function(done){
            loadFeed(0, function(){
                lastFirstTitle = $('a.entry-link:first h2').html();
                loadFeed(3, done);
            });
        });

        it('feed changes by reload', function(done){
            var newFirtTitle = $('a.entry-link:first h2').html();
            expect(newFirtTitle).not.toEqual(lastFirstTitle);
            done();
        });  
    }); 
}());
