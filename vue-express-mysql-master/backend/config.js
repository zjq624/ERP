﻿var path = require('path');

var config = {
  // debug 为 true 时，用于本地调试
  debug: true,

  name: 'tsy', // 名字
  description: '654321', // 描述
  keywords: 'nodejs, node, express, connect',

  static: '../frontend/dist', // 静态文件存储域名
  // 社区的域名
  host: 'localhost',

  // mongodb 配置
  db: {
    host: 'localhost',
    dialect: 'mysql',
<<<<<<< HEAD
    user: 'wdyiwdwd',
    password: '',
=======
    user: 'tsy',
    password: '654321',
>>>>>>> d40693b2c791e8633d951e87c7d5281aff70f62e
    database: 'development',
    pool: {
      max: 5,    //最大连接数
      min: 0,    //最小
      idle: 10000  //空闲数
    }
  },

  //session配置
  session_secret: 'nk_development_secret',
  session_time: 1000 * 60 * 60* 24, // 设置 session 的有效时间，单位毫秒

   // redis 配置，默认是本地
  redis_host: '127.0.0.1',
  redis_port: 6379,
  redis_db: 0,
  redis_password: '',

  // 程序运行的端口
  port: 8070,

  // 话题列表显示的话题数量
  list_topic_count: 20,

  // 文件上传配置
  // 注：如果填写 qn_access，则会上传到 7牛，以下配置无效
  upload: {
    path: path.join(__dirname, '/upload/'),
    url: '/upload/'
  },

  file_limit: '1MB',


  // create_post_per_day: 1000, // 每个用户一天可以发的主题数
  // create_reply_per_day: 1000, // 每个用户一天可以发的评论数
  // create_user_per_ip: 1000,
  // visit_per_day: 1000, // 每个 ip 每天能访问的次数
};

module.exports = config;