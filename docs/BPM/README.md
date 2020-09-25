# Lotus Notes/Domino 概述

Lotus Notes/Domino 系统由三部分组成：第一部分是一个**基于 Lotus Notes/Domino 开发的流程管理系统（BPM）**，它包含基于 Lotus Notes/Domino 的后端服务和插件 API，第二部分是为快速开发而设立的**低代码流程开发平台**，它的诞生的初衷是为了支持企业流程快速开发及基于流程驱动的子项目需求，最后一部分是基于流程引擎而开发的 **ISO 文档管理系统**，它作为企业生产数据和管理数据的保密资料库，是企业生产运营指导的中心。

Lotus Notes/Domino 的流程引擎包含完备的流程开发和流程管理工具，每一个由低代码流程开发平台生成的流程图都相应绑定了一个确定的表单和多个可拓展子表单，表单可以根据项目需要进行自定义的 JavaScript 代码拓展，具有非常好的自定义拓展性。每一个流程节点都可以根据不同需求设立读写权限和流程行进路径判断。同时，一旦表单被加载，Domino 将接管这些静态内容的数据，并将其作为一个完整的文档进行存储，其页面字段的展示会根据开发时预设的流程节点权限按需加载。部分有管理需求的数据也会同时进入外部 SQL SERVER 数据库中存储。

Lotus Notes/Domino 也提供基于本平台的子项目开发，运用许多现有的 API 助力企业功能定制化。

## OA 小组是如何工作的？

事实上，OA 小组不仅要运维 Lotus Notes/Domino**全天候的正常运作**，同时还要负责:

- 新员工无纸化办公培训
- 全平台流程管理/维护
- 新项目需求调研
- 流程开发及版本迭代
- 紧急流程错误处理

一个完整的 Lotus Notes/Domino 流程是由**流程图建模(LotusNote)**、**web 表单设计(HTML+JavaScript)**、**数据服务(LotusScript/JavaScript)**、**数据库表设计(SQLServer/MySQL)** 组成。每个环节都拥有独立的**需求调研**、**形成需求文件**、**环节开发**及**环节交付**。当遇到复杂的自动化流程时，甚至需要编写复杂的 JavaScript 渲染逻辑去调试自定义表单，因此需要协调多个部门以及多系统的接口或自研接口进行配合。

## Features

**推出年份较早**

- [解决浏览器兼容问题](/)

**采用文档型数据库**

- [平台数据引入第三方关系型数据库](/)

**流程集成能力弱**

- [在第三方自研平台编写跨域 API](/)

**统计分析难**

- 开设第三方辅助平台 [OAMS](https://www.baidu.com)

**不支持移动办公**

- [利用 jquery 移动版构建简单的移动办公 web 服务](/)

## 技术栈

**前端**

- HTML
- CSS 2
- JQuery 1.4.2
- [jquery.uploadify.js]() 基于 jquery，兼容 IE6+的文件上传控件
- [Json2.js](https://github.com/douglascrockford/JSON-js) 基于 JQuery，兼容 IE6+的 JSON 序列化和反序列化方法
- JavaScript 使用的是 IE 兼容的 ES3 标准
- [Ext.js](https://en.wikipedia.org/wiki/Ext_JS) 2.0.2

**后端**

- IBM Lotus Script
- IBM Lotus Domino 文档型数据库
- SQLServer
- MySQL
