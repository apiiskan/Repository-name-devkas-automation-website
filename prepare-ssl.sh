#!/bin/bash
# SSL证书准备脚本 - 备案后使用

echo "🔐 SSL证书准备..."

# 使用Let's Encrypt (需要域名验证)
# certbot --nginx -d jiyaodongli.com -d www.jiyaodongli.com

# 或使用Cloudflare SSL (推荐)
echo "📋 Cloudflare SSL设置步骤:"
echo "1. 注册Cloudflare账户"
echo "2. 添加域名 jiyaodongli.com"
echo "3. 选择SSL/TLS加密模式: Full"
echo "4. 获取Cloudflare Origin证书"
echo "5. 在服务器上安装证书"
echo "6. 配置Nginx使用HTTPS"

echo "✅ SSL准备指南已生成"
