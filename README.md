# CarbonSignal 碳信号平台

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/andyhan100044/carbonsignal)

碳信用领域的"CoinMarketCap" - 提供碳市场数据、AI分析和订阅服务的SaaS平台

## 🌟 项目愿景

"每天5分钟，掌握碳市场关键信号"

CarbonSignal致力于成为碳信用领域的领先信息平台，通过数据驱动的洞察和AI分析，帮助用户做出明智的碳市场决策。

## 🚀 功能特性

### 核心功能
- **实时碳市场数据** - 全国碳市场价格、交易量、趋势分析
- **项目监控** - VCS/GS项目跟踪、质量评分系统
- **智能分析** - AI驱动的市场趋势预测和深度分析
- **价格提醒** - 自定义价格警报和通知系统
- **API服务** - 开发者友好的RESTful API

### 分层定价
- **免费层**: 100次/天，7天历史数据
- **专业版**: $49/月，1,000次/天，完整历史
- **商业版**: $299/月，10,000次/天，高级API
- **企业版**: $999/月，100,000次/天，专属SLA

## 🛠️ 技术栈

### 前端
- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: Vercel

### 后端
- **数据库**: Neon PostgreSQL
- **缓存**: Vercel KV (Redis)
- **存储**: Cloudflare R2
- **函数**: Cloudflare Workers

### 开发工具
- **AI**: Claude API + 图片生成API
- **邮件**: Resend
- **支付**: Creem支付
- **监控**: Vercel Analytics

## 📦 项目结构

```
carbonsignal/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── dashboard/         # Dashboard pages
│   ├── projects/          # Project pages
│   ├── pricing/           # Pricing page
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── charts/           # Chart components
│   └── forms/            # Form components
├── lib/                  # Utility libraries
│   ├── db/              # Database client
│   ├── auth/            # Authentication
│   └── utils.ts         # Helper functions
├── types/               # TypeScript type definitions
├── public/             # Static assets
└── docs/              # Documentation
```

## 🚀 快速开始

### 环境要求
- Node.js >= 18.0.0
- npm >= 9.0.0

### 安装依赖
```bash
npm install
```

### 环境变量
创建 `.env.local` 文件并配置以下变量：

```env
# Database
DATABASE_URL=your_neon_db_url

# Redis Cache
KV_URL=your_vercel_kv_url
KV_REST_API_URL=your_kv_rest_url
KV_REST_API_TOKEN=your_kv_token

# API Keys
CLAUDE_API_KEY=your_claude_key
RESEND_API_KEY=your_resend_key

# Payment
CREEM_API_KEY=your_creem_key
```

### 开发模式
```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用

### 构建生产版本
```bash
npm run build
npm run start
```

## 📊 开发路线图

### Month 1: 基础设施
- [x] 域名注册
- [x] GitHub仓库
- [ ] Vercel与Neon配置
- [ ] Supabase与Cloudflare设置
- [ ] 第三方API注册
- [ ] Next.js框架
- [ ] 数据抓取系统

### Month 2: 前端与AI
- [ ] 价格仪表板
- [ ] 项目详情页
- [ ] 订阅与支付系统
- [ ] AI内容引擎
- [ ] 多平台发布

### Month 3: 测试与上线
- [ ] 性能优化
- [ ] 安全测试
- [ ] 正式发布
- [ ] 内容营销

## 📈 业务指标

### 目标用户
- 独立碳市场顾问
- 小型碳资产公司
- 大型机构投资者
- 学术研究人员

### 增长预测
- 6个月: 50免费用户, 20付费用户
- 12个月: 200免费用户, 80付费用户
- 24个月: 500免费用户, 200付费用户

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📄 许可证

MIT License

## 📞 联系我们

- **网站**: [www.carbonsignal.org](https://www.carbonsignal.org)
- **GitHub**: [@andyhan100044/carbonsignal](https://github.com/andyhan100044/carbonsignal)

---

**Built with ❤️ for a sustainable future**
