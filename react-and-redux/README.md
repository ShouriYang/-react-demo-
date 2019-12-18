#### 目录解读

该目录是通过执行命令：create-react-app (react-cli) 创建的目录

1. **public**：存放bootstrap等公共文件

2. **src**

   1）src：react-redux实现动态添加删除评论

   2）src-comment-react：纯react实现动态添加删除评论

   3）src-react：纯react实现redux官网中对select框的+ -计算等操作

   4）src-redux：redux实现redux官网中对select框的+ -计算等操作

   5）src-react-redux：使用react-redux插件实现redux官网中对select框的+ -计算等操作(降低代码耦合度)

   6）src-redux-thunk：使用thunk和中间件函数实现redux可以进行异步操作(redux默认不支持异步操作)

3. 可以通过执行以下命令运行文件

   ```javascript
   npm install
   npm start
   ```

4. 可以将**src-开头**的文件夹改名为**src**然后运行项目