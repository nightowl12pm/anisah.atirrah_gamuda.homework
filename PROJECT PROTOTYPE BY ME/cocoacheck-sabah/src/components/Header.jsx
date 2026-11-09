import React from 'react';
import { Bell, HelpCircle } from 'lucide-react';

export default function Header() {
  return (
    <header style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '16px 32px', borderBottom: '1px solid #e6dfd5', backgroundColor: '#FAF6F0'
    }}>
      <div style={{ fontSize: '14px', color: '#736b65' }}>
        CocoaCheck &gt; <span style={{ color: '#2B1D16', fontWeight: 600 }}>Dashboard Overview</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Bell size={20} color="#736b65" style={{ cursor: 'pointer' }} />
        <HelpCircle size={20} color="#736b65" style={{ cursor: 'pointer' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Faridah Hamid</div>
            <div style={{ fontSize: '12px', color: '#736b65' }}>Admin • Sabah Region</div>
          </div>
          <div style={{
            width: '36px', height: '36px', borderRadius: '4px', backgroundColor: '#5A3825',
            color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'
          }}>
            FH
          </div>
        </div>
      </div>
    </header>
  );
}