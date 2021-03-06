# 应用开发

## 目录结构

Lotus Notes/Domino 拥有自己独立完整的开发工具，遵循“**多个项目统一约定**”的原则，且每个功能模块都作为独立的应用程序存在。例如[ISO 文档管理系统](/)就作为一个独立的应用程序开发，其规定的目录结构如下：

![目录结构](/Lotus/directory.png)

::: tip
请留意，这是 Lotus Notes/Domino 已经规定的目录结构，表单作为 web 目录访问内容，其它都是 web 目录之外。
由于 Lotus Notes/Domino 的架构设计对模块的目录结构未保留很多的灵活性，尤其是对于用于存储的目录具有高度的定制化，因此上述的目录结构不建议随意更改。
:::

- `表单`：存放包含 HTML 和 Script 代码的前端展示文件，类似于 PHP 的模板代码。
- `视图`：存放 Domino 数据库预定义的项目字段，用于存储表单或文档数据。
- `文件夹`：文件夹。
- `Xpage`：存放 Xpage 代码文件。
- `页面`：类似于低代码的前端编辑页，可以可视化地自定义想要展示的页面，其本质的 HTML 代码文件。
- `共享元素`：其下包含的所有模块可以被主模块的页面和 Script 调用。
- `代码`：主要是存放 Lotus Script 代码的模块，基本所有的 Lotus Script 代码集合都包含在此模块下。
- `数据`：用于存放和配置其他第三方数据连接池的基本信息。
- `资源`：静态资源存放路径。
- `组合应用程序`：与其他独立的应用程序的交互配置。
- `应用程序配置`：本应用程序的相关配置。

::: warning
部分未列出功能解释的目录结构暂时在大多数项目中未投入使用。
:::

## 默认的文件路由

对于上述的目录结构，默认页面路由地址如下：

| 文件的相对路径 |     页面路由地址     |
| -------------- | :------------------: |
| 表单           | `http://localhost/*` |
| 资源           | `<link href="*.js">` |

## 相对路径

所有需要引用的 静态 文件都会被 IBM Domino Designer 中的应用程序工程文件包裹，因此可以，并且应该更倾向于使用相对路径（Relative URLs）来引用所有的静态资源,在应用程序中的表单中可以直接进行以下应用：

```html
<link href="*.js" />
```

同样地，即时是外部路径在 应用程序工程文件的中一样可以工作，图片将会当作静态 URL 处理，在运行读取静态文件时，文件要求被放置到正确的可访问路径。
