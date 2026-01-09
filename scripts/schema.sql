-- CarbonSignal Database Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  password_hash VARCHAR(255),
  subscription_plan VARCHAR(50) DEFAULT 'free',
  subscription_status VARCHAR(50) DEFAULT 'inactive',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  plan VARCHAR(50) NOT NULL,
  status VARCHAR(50) NOT NULL,
  stripe_subscription_id VARCHAR(255),
  stripe_customer_id VARCHAR(255),
  current_period_start TIMESTAMP,
  current_period_end TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Carbon prices table
CREATE TABLE IF NOT EXISTS carbon_prices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  date DATE NOT NULL,
  opening_price DECIMAL(10,2),
  closing_price DECIMAL(10,2),
  highest_price DECIMAL(10,2),
  lowest_price DECIMAL(10,2),
  volume BIGINT DEFAULT 0,
  market VARCHAR(100) NOT NULL,
  market_type VARCHAR(50), -- 'CEA', 'VCS', 'GS', etc.
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Projects table (VCS, GS, etc.)
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id VARCHAR(255) UNIQUE,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(100) NOT NULL, -- 'VCS', 'GS', 'CDM', etc.
  country VARCHAR(100),
  region VARCHAR(100),
  vintage INTEGER,
  credits_issued BIGINT DEFAULT 0,
  credits_retired BIGINT DEFAULT 0,
  credits_available BIGINT DEFAULT 0,
  price DECIMAL(10,2),
  status VARCHAR(50) DEFAULT 'active',
  registry_url TEXT,
  methodology TEXT,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Price alerts table
CREATE TABLE IF NOT EXISTS price_alerts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  market VARCHAR(100) NOT NULL,
  target_price DECIMAL(10,2) NOT NULL,
  condition VARCHAR(20) NOT NULL, -- 'above' or 'below'
  is_triggered BOOLEAN DEFAULT FALSE,
  triggered_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- API usage tracking table
CREATE TABLE IF NOT EXISTS api_usage (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  endpoint VARCHAR(255) NOT NULL,
  method VARCHAR(10) NOT NULL,
  status_code INTEGER,
  response_time INTEGER, -- in milliseconds
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_subscriptions_user ON subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_carbon_prices_date ON carbon_prices(date);
CREATE INDEX IF NOT EXISTS idx_carbon_prices_market ON carbon_prices(market);
CREATE INDEX IF NOT EXISTS idx_projects_type ON projects(type);
CREATE INDEX IF NOT EXISTS idx_projects_country ON projects(country);
CREATE INDEX IF NOT EXISTS idx_price_alerts_user ON price_alerts(user_id);
CREATE INDEX IF NOT EXISTS idx_api_usage_user ON api_usage(user_id);
CREATE INDEX IF NOT EXISTS idx_api_usage_created_at ON api_usage(created_at);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_subscriptions_updated_at BEFORE UPDATE ON subscriptions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_carbon_prices_updated_at BEFORE UPDATE ON carbon_prices
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_price_alerts_updated_at BEFORE UPDATE ON price_alerts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data for testing
INSERT INTO carbon_prices (date, opening_price, closing_price, highest_price, lowest_price, volume, market, market_type)
VALUES 
  (CURRENT_DATE, 85.50, 87.20, 88.00, 85.00, 150000, 'CEA', 'Compliance')
ON CONFLICT DO NOTHING;

INSERT INTO projects (project_id, name, type, country, vintage, credits_issued, credits_available, status)
VALUES 
  ('VCS-1234', 'Amazon Rainforest Conservation', 'VCS', 'Brazil', 2020, 1000000, 500000, 'active'),
  ('GS-5678', 'Wind Farm Development', 'GS', 'India', 2021, 500000, 250000, 'active')
ON CONFLICT DO NOTHING;

-- Grant permissions (Neon will handle this automatically)
-- You may need to adjust these based on your Neon setup
