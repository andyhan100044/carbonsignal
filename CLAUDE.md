# CarbonSignal 碳信号平台 - 项目规划文档

## 🎯 项目概述

**愿景**: 成为碳信用领域的"CoinMarketCap"
**价值主张**: "每天5分钟，掌握碳市场关键信号"
**商业模式**: 订阅制SaaS + 数据API服务
**目标规模**: 1人公司，年收入$50k-200k

## 🛠️ 技术架构决策

### 核心技术栈
- **前端**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **部署**: Vercel (自动部署 + 全球CDN)
- **数据库**: Neon PostgreSQL (Serverless友好)
- **缓存**: Vercel KV (Redis兼容)
- **文件存储**: Cloudflare R2
- **数据抓取**: Cloudflare Workers (主) + Supabase Edge Functions (备)
- **支付**: Creem支付 (Merchant of Record模式)
- **邮件**: Resend
- **AI**: Claude API + 图片生成API
- **CI/CD**: GitHub Actions + Docker + Playwright

### 关键技术调整
- ✅ **增加Cloudflare Workers**: 避免Serverless冷启动，提高数据抓取稳定性
- ✅ **Supabase Edge Functions**: 作为备用抓取层，提高可靠性
- ✅ **Playwright**: 更稳定的网页抓取，支持JavaScript渲染

### 自动化优先策略
- 数据抓取完全自动化
- AI内容生成自动化
- 监控告警自动化
- 备份恢复自动化

## 💰 定价策略 (修订版)

### 分层定价
```
免费层: $0
- 限制: 100次/天
- 功能: 7天历史数据，基础项目浏览
- 目标: 用户获取

专业版: $49/月
- 限制: 1,000次/天
- 功能: 完整历史，实时提醒，基础API
- 目标: 独立顾问、小型公司

商业版: $299/月
- 限制: 10,000次/天
- 功能: 高级API，数据导出，白标使用
- 目标: 碳资产公司、咨询公司

企业版: $999/月
- 限制: 100,000次/天 + 专属SLA
- 定制: 可协商无限调用（需审核用途）
- 目标: 大型机构
```

### 支付平台选择: Creem支付

**✅ 选择Creem支付 - 确认优势**:
1. **Merchant of Record模式**: Creem负责全球税务合规(VAT/GST/销售税)
2. **专为SaaS设计**: 原生支持订阅、许可证、按席位计费
3. **简化运营**: 190+国家税务自动处理，大幅降低合规成本
4. **Next.js原生支持**: `@creem_io/nextjs` SDK，完美匹配技术栈
5. **极简集成**: 10分钟内完成支付集成

**技术集成方案**:
```bash
# 1. 安装SDK
npm install @creem_io/nextjs

# 2. 环境变量
CREEM_API_KEY=your_api_key_here

# 3. 创建Checkout API
export const GET = Checkout({
  apiKey: process.env.CREEM_API_KEY!,
  testMode: true,
  defaultSuccessUrl: "/success",
});

# 4. 前端组件
<CreemCheckout productId="prod_YOUR_PRODUCT_ID">
  <button>Subscribe Now</button>
</CreemCheckout>
```

**核心功能支持**:
- ✅ Subscriptions (订阅管理)
- ✅ Webhooks (支付事件通知)
- ✅ Test Mode (测试环境)
- ✅ Better Auth集成

### API成本控制
- 速率限制 + 智能滥用检测
- 分级缓存策略 (命中率目标 >90%)
- 超出部分按需计费
- 实时成本监控

## 🤖 AI内容自动化方案

### 内容生成流程
```
数据收集 → AI分析 → 内容生成 → 图片生成 → 多平台发布
    ↓           ↓          ↓          ↓         ↓
  碳市场数据   Claude API   Twitter    DALL-E 3  Buffer API
  新闻抓取    (文章生成)   LinkedIn   Midjourney LinkedIn API
  趋势分析    (深度分析)   邮件内容   图表生成   Resend
```

### 平台分布
- **Twitter**: 每天1条自动化 + 每周3条人工深度内容
- **LinkedIn**: 每周2条完全自动化
- **邮件**: 每周1期自动化 (AI生成图表)
- **博客**: 每月2篇 (AI辅助 + 人工编辑)

### AI工具预算
- **Claude API**: ~$100-150/月
- **DALL-E 3**: ~$50-100/月
- **总计**: ~$150-250/月

## 📅 3个月开发时间线

### Month 1: 基础设施 + 数据抓取
#### Week 1-2: 基础设施搭建
- [x] **Day 1**: 域名注册 + GitHub仓库
- [x] **Day 2**: Vercel与Neon配置
- [ ] **Day 3**: Supabase与Cloudflare设置
- [ ] **Day 4-5**: 第三方API注册 (Resend, Creem, Claude API)
- [x] **Week 2**: Next.js框架 + CI/CD + 开发环境

#### Week 3-4: 核心数据抓取
- CEA价格抓取 (Cloudflare Workers)
- VCS/GS项目抓取系统
- 数据验证与存储
- 自动化测试

### Month 2: 前端 + AI引擎
#### Week 5-6: 前端完整开发
- 价格仪表板
- 项目详情页
- 订阅与支付系统
- 用户管理

#### Week 7-8: AI内容引擎
- Claude API集成
- 图片生成服务
- 多平台发布自动化
- 邮件系统

### Month 3: 测试 + 上线
#### Week 9-10: 测试优化
- 性能优化
- 数据验证
- 用户体验测试
- 安全测试

#### Week 11-12: 完整上线
- 正式发布
- 内容营销启动
- 监控告警
- 用户反馈收集

## 📊 业务预测

### 用户增长预测
| 时间 | 免费用户 | 付费用户 | 月收入 |
|------|----------|----------|--------|
| 6个月 | 50 | 20 | $1,470 |
| 12个月 | 200 | 80 | $5,880 |
| 24个月 | 500 | 200 | $14,700 |

### 成本结构 (月成本 ~$200-300)
- Vercel Pro: $20
- Neon数据库: $25
- Resend邮件: $20
- Creem支付手续费: ~$50 (预估，基于交易量)
- AI API费用: $150-250
- 域名/其他: $20

**毛利率**: >85%

*注: Creem作为Merchant of Record，可能有额外费用但节省大量税务合规成本*

## 📱 产品功能规划

### MVP功能 (第1个月)
- 全国碳市场数据看板
- 每日价格快讯邮件
- 基础用户订阅

### 完整功能 (第2-3个月)
- VCS/GS项目监控
- 质量评分系统
- API服务
- 价格提醒
- 多平台内容自动化

### 高级功能 (后续)
- 市场分析报告
- 预测算法
- 企业定制
- 移动应用

## 🎯 市场策略

### 优先获客渠道
1. **Twitter/X**: 主要平台，价格快讯 + 深度分析
2. **Reddit**: r/carboncredits 社区参与
3. **LinkedIn**: B端用户，深度内容
4. **内容营销**: 博客文章，SEO优化

### 内容策略
- 每日价格快讯 (自动化)
- 每周市场分析 (AI生成 + 人工审核)
- 每月深度报告 (专业内容)
- 案例研究与教程

### 合作伙伴
- 小型咨询公司
- 学术机构
- 行业会议

## ⚠️ 风险与应对

### 主要风险
1. **数据源变更**: 建立多源备份 + 官方合作
2. **内容质量**: 人工审核机制
3. **API滥用**: 智能限流 + 成本监控
4. **技术债务**: 定期代码审查

### 应对策略
- 多数据源策略
- 人工 + AI混合模式
- 实时监控告警
- 模块化架构设计

## 🚀 立即行动清单

### Day 1 任务
- [x] 注册域名 (www.carbonsignal.org)
- [x] 创建GitHub仓库
- [x] 设置基础项目结构

### Day 2 任务
- [x] Vercel与Neon数据库配置
- [ ] Supabase与Cloudflare设置
- [ ] 第三方API注册 (Resend, Creem, Claude)

### Week 1 目标
- [x] 所有核心服务注册完成
- [x] 开发环境搭建完成
- [x] 基础框架部署到Vercel

### Month 1 目标
- 基础设施完全就绪
- 数据抓取系统运行
- 基础前端功能完成

## 📞 关键决策确认

✅ **技术栈**: Next.js + Vercel + Neon + Cloudflare Workers
✅ **支付**: Creem支付 (Merchant of Record模式)
✅ **定价策略**: $49/$299/$999 分层定价
✅ **AI内容**: 第三方API自动化方案
✅ **时间线**: 3个月完整开发
✅ **API成本**: 智能控制 + 企业审核
✅ **域名**: www.carbonsignal.org

---

**最后更新**: 2026-01-09
**状态**: 基础设施搭建进行中
