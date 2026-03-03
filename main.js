// 性能监控
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            const connectTime = perfData.responseEnd - perfData.requestStart;
            
            console.log('🚀 页面加载时间:', pageLoadTime + 'ms');
            console.log('⚡ 服务器响应时间:', connectTime + 'ms');
            
            // 发送到监控系统
            if (pageLoadTime > 3000) {
                console.warn('⚠️  页面加载较慢，建议优化');
            }
        }, 0);
    });
}
