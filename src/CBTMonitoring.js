import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CBTMonitoring.css';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function CBTMonitoring() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [chartData, setChartData] = useState({
    dailyTraffic: null,
    waitingTrend: null,
    leadTimeComparison: null
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby-2SiyhgAlOSnp70_dBnAqU_GuAvs23L8WuAehyYv1WiNnyv4aOQgGBFo6kGDqTfS4PA/exec';
        
        const response = await fetch(APPS_SCRIPT_URL);
        const result = await response.json();
        
        console.log('Fetched data:', result); // 전체 데이터 확인

        if (result.status === 'success') {
          // 최신 ���터 (가장 최근 행)
          const latestData = result.data[2];
          console.log('Latest data:', latestData); // 최신 데이터 확인

          // 기존 데이터 설정
          setData({
            pingxiangLangson: {
              waitingNormalCC: parseInt(latestData[2]) || 0,  // c열
              waitingBondedCC: parseInt(latestData[4]) || 0,  // e열
              passedBorder: parseInt(latestData[6]) || 0,     // g열
              leadTimeNormal: latestData[7],                  // h열
              leadTimeBonded: latestData[8]                   // i열
            },
            phuzaiTanThanh: {
              waitingTruck: parseInt(latestData[10]) || 0,    // k열
              passedBorder: parseInt(latestData[11]) || 0,    // l열
              leadTimeNormal: "0 - 1 day"
            },
            dongxingMongCai: {
              waitingTruck: parseInt(latestData[13]) || 0,    // n열
              passedBorder: parseInt(latestData[14]) || 0,    // o열
              leadTimeNormal: "0 - 1 day"
            }
          });

          // Daily Traffic 차트 데이터
          const dailyTrafficData = {
            labels: result.data.slice(2, 33).reverse().map(row => {
              const date = new Date(row[1]);
              return date.toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
              }).replace(/\. /g, '.').slice(0, -1);
            }),
            datasets: [
              {
                label: 'Passed border PX/LS',
                data: result.data.slice(2, 33).reverse().map(row => parseInt(row[6]) || 0),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                tension: 0,
                borderWidth: 2
              },
              {
                label: 'Passed border PZ/TT',
                data: result.data.slice(2, 33).reverse().map(row => parseInt(row[11]) || 0),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                tension: 0,
                borderWidth: 2
              },
              {
                label: 'Passed border DX/MC',
                data: result.data.slice(2, 33).reverse().map(row => parseInt(row[14]) || 0),
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                tension: 0,
                borderWidth: 2
              }
            ]
          };

          // Waiting Trend 차트 데이터
          const waitingTrendData = {
            labels: result.data.slice(2, 33).reverse().map(row => {
              const date = new Date(row[1]);
              return date.toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
              }).replace(/\. /g, '.').slice(0, -1);
            }),
            datasets: [
              {
                label: 'Waiting Normal CC',
                data: result.data.slice(2, 33).reverse().map(row => parseInt(row[2]) || 0),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                tension: 0,
                borderWidth: 2
              },
              {
                label: 'Waiting Bonded CC',
                data: result.data.slice(2, 33).reverse().map(row => parseInt(row[4]) || 0),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                tension: 0,
                borderWidth: 2
              }
            ]
          };

          // Lead Time Comparison 차트 데이터
          const leadTimeComparisonData = {
            labels: result.data.slice(2, 33).reverse().map(row => {
              const date = new Date(row[1]);
              return date.toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
              }).replace(/\. /g, '.').slice(0, -1);
            }),
            datasets: [
              {
                label: 'Lead time for Normal(day) px',
                data: result.data.slice(2, 33).reverse().map(row => {
                  const value = row[7];
                  return parseInt(value?.toString().split('-')[0]) || 0;
                }),
                backgroundColor: 'rgb(53, 162, 235)',
                borderColor: 'rgb(53, 162, 235)',
                borderWidth: 1
              },
              {
                label: 'Lead time for GDL way(day) px',
                data: result.data.slice(2, 33).reverse().map(row => {
                  const value = row[8];
                  return parseInt(value?.toString().split('-')[0]) || 0;
                }),
                backgroundColor: 'rgb(255, 159, 64)',
                borderColor: 'rgb(255, 159, 64)',
                borderWidth: 1
              }
            ]
          };

          setChartData({
            dailyTraffic: dailyTrafficData,
            waitingTrend: waitingTrendData,
            leadTimeComparison: leadTimeComparisonData
          });
        }
      } catch (error) {
        console.error('Error details:', error);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 300000);
    return () => clearInterval(interval);
  }, []);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
          padding: 10
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          padding: 10
        }
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          boxWidth: 40,
          font: {
            size: 12
          }
        }
      }
    },
    layout: {
      padding: {
        top: 10,
        right: 20,
        bottom: 30,
        left: 10
      }
    }
  };

  return (
    <div className="cbt-monitoring-page">
      <header className="cbt-header">
        <div className="logo-container" onClick={() => navigate('/')}>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo1.png`}
            alt="Goldilocks"
            className="logo"
          />
        </div>
      </header>
      
      <main className="cbt-content">
        <div className="border-sections">
          <div className="border-section">
            <h2>Pingxiang - Langson</h2>
            <div className="status-box normal">
              <h3>Normal CC</h3>
              <p>6 - 7 days</p>
            </div>
            <div className="status-box bonded">
              <h3>Bonded CC(with GDL way)</h3>
              <p>2 - 3 days</p>
            </div>
            <div className="stats-grid">
              <div className="stat-item">
                <label>Waiting Normal CC</label>
                <span>{data?.pingxiangLangson?.waitingNormalCC || '0'}</span>
              </div>
              <div className="stat-item">
                <label>Waiting Bonded CC</label>
                <span>{data?.pingxiangLangson?.waitingBondedCC || '0'}</span>
              </div>
              <div className="stat-item">
                <label>Passed Border</label>
                <span>{data?.pingxiangLangson?.passedBorder || '0'}</span>
              </div>
            </div>
          </div>

          <div className="border-section">
            <h2>Phuzai - Tan Thanh</h2>
            <div className="status-box normal">
              <h3>Normal CC</h3>
              <p>0 - 1 day</p>
            </div>
            <div className="status-box no-service">
              <h3>Bonded CC</h3>
              <p>No Service</p>
            </div>
            <div className="stats-grid">
              <div className="stat-item">
                <label>Waiting Truck</label>
                <span>{data?.phuzaiTanThanh?.waitingTruck}</span>
              </div>
              <div className="stat-item">
                <label>Passed Border</label>
                <span>{data?.phuzaiTanThanh?.passedBorder}</span>
              </div>
            </div>
          </div>

          <div className="border-section">
            <h2>Dongxing - Mong cai</h2>
            <div className="status-box normal">
              <h3>Normal CC</h3>
              <p>0 - 1 day</p>
            </div>
            <div className="status-box no-service">
              <h3>Bonded CC</h3>
              <p>No Service</p>
            </div>
            <div className="stats-grid">
              <div className="stat-item">
                <label>Waiting Truck</label>
                <span>{data?.dongxingMongCai?.waitingTruck}</span>
              </div>
              <div className="stat-item">
                <label>Passed Border</label>
                <span>{data?.dongxingMongCai?.passedBorder}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="charts-container">
          <div className="chart-section">
            <h2>[Cross Border] DAILY TRAFFIC(Passing) TREND</h2>
            {chartData.dailyTraffic && <Line data={chartData.dailyTraffic} options={chartOptions} />}
          </div>

          <div className="chart-row">
            <div className="chart-section">
              <h2>[PINGXIANG-LANGSON] DAILY TRAFFIC(Waiting) TREND</h2>
              {chartData.waitingTrend && <Line data={chartData.waitingTrend} options={chartOptions} />}
            </div>

            <div className="chart-section">
              <h2>[PINGXIANG-LANGSON] Lead Time Comparison: Normal CC vs. Bonded CC with GDL Way</h2>
              {chartData.leadTimeComparison && (
                <Line 
                  data={chartData.leadTimeComparison} 
                  options={{
                    ...chartOptions,
                    scales: {
                      ...chartOptions.scales,
                      y: {
                        ...chartOptions.scales.y,
                        max: 8
                      }
                    }
                  }} 
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CBTMonitoring; 