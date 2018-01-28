# 订阅阅读器项目

本项目展示了一个基于 web 的用来读取 rss 源的应用。针对各功能点，项目中添加了若干检测，在结尾显示了各项检测的结果。

## 项目运行方式

将代码下载至本地后，附加到可运行的WEB服务器上，访问其中的index.html即可。若暂时无可用服务器，也可直接双击文件夹中的index访问项目的内容。
打开index.html后可看到，提供了一个默认隐藏的RSS源列表（通过左上角的按钮显示或者隐藏），通过单击列表中的项，可在页面上显示相应的文章列表，点击文档列表即可访问相关的内容。

## 测试说明

你会学到怎么使用 Jasmine 来给已经写好的应用编写一定数量的测用例。这些测试用例既要测试深层次的商业逻辑，也要测试时间处理和 DOM 操作。
本项目采用jasmine测试套件对各功能进行测试，测试点如下：
1. RSS源已定义，且每个源都有name和url属性，分别用户展示和获取明细数据。
2. 通过点击左上角的菜单控制RSS源列表的显示与隐藏
3. 加载列表的异步方法loadFeed被正确执行，且结果能正常显示在文章列表中。

_**为保证当前项目能正常运行，请确保网络能正常连通googleapis.com、cdn.jsdelivr.net、google.com等服务器。_
