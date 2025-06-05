const express = require('express');
const fetch = require('node-fetch');
const app = express();

const API_URL = process.env.API_URL || 'http://localhost:5000/api';

app.get('/', async (req, res) => {
  try {
    const response = await fetch(`${API_URL}/about`);
    const data = await response.json();

    const html = `
      <html>
        <head><title>Giới thiệu</title></head>
        <body>
          <h1>Giới thiệu bản thân</h1>
          <p><strong>Họ tên:</strong> ${data.name}</p>
          <p><strong>Công việc:</strong> ${data.job}</p>
          <p><strong>Giới thiệu:</strong> ${data.bio}</p>
        </body>
      </html>
    `;
    res.send(html);
  } catch (error) {
    res.send("Lỗi kết nối đến Flask API: " + error.message);
  }
});

app.listen(3000, () => {
  console.log('Node.js frontend chạy tại http://localhost:3000');
});
