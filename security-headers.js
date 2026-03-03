// Content Security Policy 配置
const securityConfig = {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com", "https://code.jquery.com"],
    styleSrc: ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com", "https://fonts.googleapis.com"],
    fontSrc: ["'self'", "https://cdnjs.cloudflare.com", "https://fonts.gstatic.com"],
    imgSrc: ["'self'", "data:", "https:"],
    connectSrc: ["'self'"],
    frameAncestors: ["'self'"],
    objectSrc: ["'none'"],
    baseUri: ["'self'"],
    formAction: ["'self'"]
};

// 安全头注入
function injectSecurityHeaders() {
    // 添加安全属性到表单
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.setAttribute('autocomplete', 'off');
        form.setAttribute('novalidate', 'false');
    });
    
    // 添加CSRF令牌到表单
    const csrfToken = generateCSRFToken();
    const csrfInput = document.createElement('input');
    csrfInput.type = 'hidden';
    csrfInput.name = 'csrf_token';
    csrfInput.value = csrfToken;
    
    forms.forEach(form => {
        form.appendChild(csrfInput.cloneNode(true));
    });
    
    // 输入验证强化
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            // 基础XSS防护
            this.value = this.value.replace(/[<>\"'&]/g, '');
        });
    });
}

function generateCSRFToken() {
    return Math.random().toString(36).substr(2, 16) + Date.now().toString(36);
}

// 页面加载时注入
document.addEventListener('DOMContentLoaded', injectSecurityHeaders);
