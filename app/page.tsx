import Link from 'next/link';
import { ArrowRight, TrendingUp, BarChart3, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-carbon-50 to-white">
      {/* Header */}
      <header className="border-b border-carbon-200">
        <nav className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-primary-600 flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-carbon-900">CarbonSignal</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="text-carbon-600 hover:text-carbon-900">
              仪表板
            </Link>
            <Link href="/projects" className="text-carbon-600 hover:text-carbon-900">
              项目
            </Link>
            <Link href="/pricing" className="text-carbon-600 hover:text-carbon-900">
              定价
            </Link>
            <Link href="/login" className="btn btn-secondary">
              登录
            </Link>
            <Link href="/signup" className="btn btn-primary">
              开始使用
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-carbon-900 sm:text-6xl">
            碳信用领域的
            <span className="text-primary-600">CoinMarketCap</span>
          </h1>
          <p className="mt-6 text-xl text-carbon-600">
            每天5分钟，掌握碳市场关键信号
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href="/dashboard" className="btn btn-primary px-8 py-3 text-base">
              开始免费试用
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/pricing" className="btn btn-secondary px-8 py-3 text-base">
              查看定价
            </Link>
          </div>
          <p className="mt-4 text-sm text-carbon-500">
            免费试用，无需信用卡
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-carbon-900 sm:text-4xl">
            为什么选择 CarbonSignal？
          </h2>
          <p className="mt-4 text-carbon-600">
            我们提供最全面的碳市场数据和智能分析
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-primary-100">
              <TrendingUp className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-carbon-900">实时市场数据</h3>
            <p className="mt-2 text-carbon-600">
              全国碳市场价格、交易量、趋势分析，一目了然
            </p>
          </div>

          <div className="card">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-primary-100">
              <BarChart3 className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-carbon-900">项目监控</h3>
            <p className="mt-2 text-carbon-600">
              VCS/GS项目跟踪、质量评分系统，助您找到优质项目
            </p>
          </div>

          <div className="card">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-primary-100">
              <Zap className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-carbon-900">AI智能分析</h3>
            <p className="mt-2 text-carbon-600">
              AI驱动的市场趋势预测和深度分析，让数据更有价值
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-carbon-900 py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            准备好开始了吗？
          </h2>
          <p className="mt-4 text-carbon-300">
            加入数百名专业人士，在碳市场中做出明智决策
          </p>
          <div className="mt-10">
            <Link href="/signup" className="btn btn-primary px-8 py-3 text-base">
              立即开始
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-carbon-200 py-12">
        <div className="container">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-primary-600 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-carbon-900">CarbonSignal</span>
            </div>
            <p className="mt-4 text-sm text-carbon-500 sm:mt-0">
              © 2026 CarbonSignal. 保留所有权利。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
