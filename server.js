const express = require('express');
const path = require('path');
const app = express();

const cesiumSource = path.join(__dirname, 'node_modules', 'cesium', 'Build', 'Cesium');
app.use('/Cesium', express.static(cesiumSource));

// 配置静态文件目录
app.use(express.static(path.join(__dirname)));

// 返回 index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 启动服务
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
