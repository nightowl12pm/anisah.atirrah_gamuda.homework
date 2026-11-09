import React from 'react';

export default function StatsGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e6dfd5' }}>
        <div style={{ fontSize: '13px', color: '#736b65', display: 'flex', justifyContent: 'space-between' }}>
          Total Assessments <span>📋</span>
        </div>
        <div style={{ fontSize: '28px', fontWeight: 'bold', margin: '8px 0' }}>128</div>
        <div style={{ fontSize: '12px', color: '#276735' }}>↑ +12% mo</div>
      </div>
      
      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e6dfd5' }}>
        <div style={{ fontSize: '13px', color: '#736b65', display: 'flex', justifyContent: 'space-between' }}>
          Completed <span>✅</span>
        </div>
        <div style={{ fontSize: '28px', fontWeight: 'bold', margin: '8px 0' }}>116</div>
        <div style={{ fontSize: '12px', color: '#736b65' }}>90.6% rate</div>
      </div>

      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e6dfd5' }}>
        <div style={{ fontSize: '13px', color: '#736b65', display: 'flex', justifyContent: 'space-between' }}>
          Drafts <span>📝</span>
        </div>
        <div style={{ fontSize: '28px', fontWeight: 'bold', margin: '8px 0' }}>12</div>
        <div style={{ fontSize: '12px', color: '#b7791f' }}>Pending lab test</div>
      </div>

      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e6dfd5' }}>
        <div style={{ fontSize: '13px', color: '#736b65', display: 'flex', justifyContent: 'space-between' }}>
          Active Staff <span>👤</span>
        </div>
        <div style={{ fontSize: '28px', fontWeight: 'bold', margin: '8px 0' }}>3</div>
        <div style={{ fontSize: '12px', color: '#276735' }}>● All on duty</div>
      </div>
    </div>
  );
}