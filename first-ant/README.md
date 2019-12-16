1. Create-react-app first-ant

2. ```javascript
   npm install antd --save
   ```

3. ```javascript
   npm install babel-plugin-import --save 
   .babelrc
   {
       "plugins": [
         ["import", {
           "libraryName": "antd",
           "libraryDirectory": "es",
           "style": "css" // `style: true` 会加载 less 文件
         }]
       ]
     }
   ```

4. 按需引入antd

5. 纯前端页面

   ![](https://tva1.sinaimg.cn/large/006tNbRwgy1g9yoxqpf9tj31ye0rkwgm.jpg)

#### 