import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, ReferenceLine
} from 'recharts';
import {
  revenueData, profitabilityData, leverageData,
  liquidityData, efficiencyData, keyInsights
} from '../data/portfolioData';
import './Project.css';

type TabKey = 'revenue' | 'profitability' | 'leverage' | 'efficiency';

const tabs: { key: TabKey; label: string }[] = [
  { key: 'revenue', label: 'Revenue & Profit' },
  { key: 'profitability', label: 'Profitability Ratios' },
  { key: 'leverage', label: 'Leverage & Coverage' },
  { key: 'efficiency', label: 'Efficiency Ratios' },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <p className="chart-tooltip__label">{label}</p>
        {payload.map((entry: any) => (
          <p key={entry.name} className="chart-tooltip__item" style={{ color: entry.color }}>
            {entry.name}: <strong>{typeof entry.value === 'number' && entry.value > 1000
              ? `₹${entry.value.toLocaleString('en-IN')} Cr`
              : `${entry.value}${entry.name.includes('%') || entry.name.includes('Margin') || entry.name.includes('ROA') || entry.name.includes('ROE') ? '%' : 'x'}`
            }</strong>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const NAVY = '#1B3A6B';
const SLATE = '#4A6FA5';
const SLATE_LIGHT = '#7B9BC5';
const MUTED = '#B8CCE4';

const Project: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('revenue');
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  const renderChart = () => {
    switch (activeTab) {
      case 'revenue':
        return (
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={revenueData} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis yAxisId="left" tick={{ fontSize: 11 }} axisLine={false} tickLine={false}
                tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}K`} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} axisLine={false} tickLine={false}
                tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}K`} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '12px' }} />
              <Bar yAxisId="left" dataKey="revenue" name="Total Revenue (₹ Cr)" fill={NAVY} radius={[3, 3, 0, 0]} />
              <Bar yAxisId="right" dataKey="netProfit" name="Net Profit (₹ Cr)" fill={SLATE_LIGHT} radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'profitability':
        return (
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={profitabilityData} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '12px' }} />
              <Line type="monotone" dataKey="npm" name="Net Profit Margin (%)" stroke={NAVY} strokeWidth={2.5} dot={{ r: 4, fill: NAVY }} />
              <Line type="monotone" dataKey="roe" name="ROE (%)" stroke={SLATE} strokeWidth={2.5} dot={{ r: 4, fill: SLATE }} />
              <Line type="monotone" dataKey="roa" name="ROA (%)" stroke={SLATE_LIGHT} strokeWidth={2} strokeDasharray="5 4" dot={{ r: 3, fill: SLATE_LIGHT }} />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'leverage':
        return (
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={leverageData} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <ReferenceLine y={0} stroke="#E2E8F0" strokeWidth={1.5} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '12px' }} />
              <Line type="monotone" dataKey="debtToEquity" name="Debt-to-Equity (x)" stroke={NAVY} strokeWidth={2.5} dot={{ r: 4, fill: NAVY }} />
              <Line type="monotone" dataKey="interestCoverage" name="Interest Coverage (x)" stroke={SLATE} strokeWidth={2.5} dot={{ r: 4, fill: SLATE }} />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'efficiency':
        return (
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={efficiencyData} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '12px' }} />
              <Line type="monotone" dataKey="inventoryTurnover" name="Inventory Turnover (x)" stroke={NAVY} strokeWidth={2.5} dot={{ r: 4, fill: NAVY }} />
              <Line type="monotone" dataKey="fixedAssetsTurnover" name="Fixed Assets Turnover (x)" stroke={SLATE} strokeWidth={2.5} dot={{ r: 4, fill: SLATE }} />
              <Line type="monotone" dataKey="debtorsTurnover" name="Debtors Turnover (x)" stroke={MUTED} strokeWidth={2} strokeDasharray="5 4" dot={{ r: 3, fill: MUTED }} />
            </LineChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <section id="project" className="project section" ref={ref}>
      <div className="container">

        {/* Header */}
        <div className={`project__header fade-in ${inView ? 'visible' : ''}`}>
          <p className="section-label">Featured Research</p>
          <h2 className="project__heading display-heading">
            Tata Power — Independent<br /><em>Equity Analysis</em>
          </h2>
          <p className="project__sub">
            A comprehensive 5-year financial analysis of Tata Power Company Ltd., examining capital structure 
            evolution, profitability trends, and operational efficiency across FY2021–FY2025.
          </p>
        </div>

        {/* Methodology Row */}
        <div className={`project__methodology fade-in fade-in-delay-1 ${inView ? 'visible' : ''}`}>
          {['Data Collection & Structuring', 'Financial Statement Modeling', 'Ratio Calculation (15+ Metrics)', 'Forecast vs Actual Analysis', 'Dashboard & Visualization'].map((step, i) => (
            <div key={step} className="project__method-step">
              <span className="project__method-num">0{i + 1}</span>
              <span className="project__method-label">{step}</span>
            </div>
          ))}
        </div>

        {/* Key Insights */}
        <div className={`project__insights fade-in fade-in-delay-2 ${inView ? 'visible' : ''}`}>
          {keyInsights.map((insight) => (
            <div key={insight.metric} className="project__insight-card">
              <p className="project__insight-metric">{insight.metric}</p>
              <div className="project__insight-values">
                <span className="project__insight-from">{insight.from}</span>
                <span className="project__insight-arrow">→</span>
                <span className="project__insight-to">{insight.to}</span>
              </div>
              <p className="project__insight-period">{insight.label}</p>
              <p className="project__insight-text">{insight.insight}</p>
            </div>
          ))}
        </div>

        {/* Interactive Charts */}
        <div className={`project__charts fade-in fade-in-delay-3 ${inView ? 'visible' : ''}`}>
          <div className="project__charts-header">
            <p className="section-label">Interactive Analysis</p>
            <div className="project__tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  className={`project__tab ${activeTab === tab.key ? 'project__tab--active' : ''}`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="project__chart-area">
            {renderChart()}
          </div>

          <p className="project__chart-note">
            Source: Tata Power Company Ltd. Annual Reports FY2021–FY2025. Analysis and modeling by Shweta Sharma.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Project;
