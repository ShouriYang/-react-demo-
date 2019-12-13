src下的源文件为通过github提供的开发者search接口，获取到用户输入的input框关键字匹配的用户的用户名以及头像
	src-comment下的源文件为可以动态添加删除用户评论，通过input框获取用户名和评论内容
#### 1.用react-cli实现一个可以动态添加删除评论的小组件

![](https://tva1.sinaimg.cn/large/006tNbRwgy1g9utbb70f6j31by0j443e.jpg)

##### 	1）目录结构

<img src="https://tva1.sinaimg.cn/large/006tNbRwgy1g9utd6wtocj30ce0h475m.jpg" style="zoom: 50%;" />

##### 	2）注意的问题

1.  jsx中class要统一写成className;

2. style="display:none"要写成

   ```
   style={{display: 'none'}}
   ```

3. ```
   <input /> <img /> <isindex /> <area /> <base /> <basefont />
   <bgsound /> <col /> <embed /> <frame /> <keygen /> <link />
   <meta /> <nextid /> <param /> <plaintext /> <spacer /> <wbr />
   这些标签区别于html的语法，如果只写<input>（在html内合法） 会出现
   “JSX 元素“div”没有相应的结束标记”的错误
   ```

4. 可以在组件内直接简化state、propTypes的写法

   ```
   state = {}
   
   static propTypes = {
   	a: PropTypes.type.isRequired
   } 
   ```

5. 可以使用箭头函数改变自定义函数的this指向而不是在constructor中使用bind

   ```javascript
   function = ()=>{
     
   }
   ```

##### 	3）下载prop-types插件

```javascript
npm install --save prop-types

comment-list.jsx

import PropTypes from 'prop-types'
    //给组件类指定属性
    static propTypes = {
        comments: PropTypes.array.isRequired 
    }
```

##### 	4）进行页面编写

#### 3. 基于react-cli和axios实现一个用户搜索获得github用户图像列表的demo

##### 	1）安装eslint

```javascript
npm --save-dev install eslint
npm install --save-dev eslint-plugin-react
npm --save-dev install babel-eslint //项目中需要使用到 ES2015 的语言规范
npm install --save-dev eslint-config-airbnb //配置一些 eslint rules 的规范
											 eslint-plugin-import //在使用 import 的时候，一些 rules 规范
                       eslint-plugin-react //一些 react 的 eslint 的 rules 规范
											 eslint-plugin-jsx-a11y //一些 jsx 的 rules 规范
```

##### 	2）配置eslintrc文件

```javascript
{
    // 环境，这里可以设置环来做区别判断
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    // 使用的扩展库
    "extends": ["airbnb"],
    // 解析器用于解析代码
    "parser": "babel-eslint",
    // 解析器配置
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    // 可以全局使用变量
    "globals": {
        "Babel": true,
        
        "React": true
    },
    // 第三方插件
    "plugins": [
        "react"
    ],
    // 规则配置
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        // 禁止缩进错误
        "indent": 0,
        // 关闭不允许使用 no-tabs
        "no-tabs": "off",
        "no-console": 1,
        // 设置不冲突 underscore 库
        "no-underscore-dangle":0,
        // 箭头函数直接返回的时候不需要 大括号 {}
        "arrow-body-style": [2, "as-needed"],
        "no-alert":"error",
 
        // 设置是否可以重新改变参数的值
        "no-param-reassign": 0,
        // 允许使用 for in
        "no-restricted-syntax": 0,
        "guard-for-in": 0,
        // 不需要每次都有返回
        "consistent-return":0,
        // 允许使用 arguments
        "prefer-rest-params":0,
        // 允许返回 await
        "no-return-await":0,
        // 不必在使用前定义 函数
        "no-use-before-define": 0,
        // 允许代码后面空白
        "no-trailing-spaces": 0,
 
 
        // 有一些 event 的时候，不需要 role 属性，不需要其他解释
        "jsx-a11y/no-static-element-interactions":0,
        "jsx-a11y/click-events-have-key-events":0,
        // 类成员之间空行问题
        "lines-between-class-members":0,

        // 不区分是否在 despendencies
        "import/no-extraneous-dependencies": 0,
        // 引用时候根据根目录基础
        "import/no-unresolved": 0,
 
        // 允许在 .js 和 .jsx 文件中使用  jsx
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        // jsx > 紧跟着属性
        "react/jsx-closing-bracket-location": [1, "after-props"],
        // 不区分是否是 无状态组件
        "react/prefer-stateless-function": 0
 
    }
}
```

##### 	3）编写相应的页面

##### 	4）componentWillReceived（当组件接收到新的属性时执行回调）

```javascript
componentWillReceiveProps(newProps) {//指定了新的searchName然后发请求
        const {searchName} = newProps
        //更新为状态请求中loading状态
        this.setState({
            initView:false,
            loading: true
        })
        //发送ajax请求
        const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
        .then(res=>{
            //得到响应数据之后更新为成功状态
            const result = res.data
            const users = result.items.map(item=>{
                return{
                    name: item.login,
                    url: item.html_url,
                    avatarUrl: item.avatar_url
                }
            })
            this.setState({
                loading:false,
                users
            })
        })
        .catch(err=>{
            //更新为失败状态
            this.setState({
                loading:false,
                errorMsg:err.message
            })
        })
    }
```



##### 	5）demo效果图：

![](https://tva1.sinaimg.cn/large/006tNbRwgy1g9vai7vq7dj31n20lijt1.jpg)

从github上面获取到名字中有aaa的前30位用户的用户名和头像，接口调用成果

![](https://tva1.sinaimg.cn/large/006tNbRwgy1g9vasjgh4uj31820mkahg.jpg)
