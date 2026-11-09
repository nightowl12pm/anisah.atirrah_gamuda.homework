import React, { useState } from 'react';
import { Search, Download, Calendar } from 'lucide-react';

const logsData = [
  { id: 1, time: '24 Oct 2024, 10:42', user: 'Ahmad Zulkifli', action: 'Assessment', details: 'Completed assessment CC-2024-0891 (Batch SBH-TAW-042)', type: 'success' },
  { id: 2, time: '24 Oct 2024, 09:58', user: 'Nur Aisyah Rahman', action: 'Assessment', details: 'Completed assessment CC-2024-0890 (Batch SBH-LD-118)', type: 'success' },
  { id: 3, time: '24 Oct 2024, 09:15', user: 'Faridah Hamid', action: 'Staff', details: 'Created staff account for Jason Lo', type: 'info' },
  { id: 4, time: '23 Oct 2024, 16:30', user: 'Faridah Hamid', action: 'Rules', details: 'Updated moisture content limit to 7.5 % (v1.2)', type: 'warning' },
  { id: 5, time: '23 Oct 2024, 14:05', user: 'Jason Lo', action: 'Assessment', details: 'Saved draft assessment CC-2024-0889', type: 'info' },
  { id: 6, time: '23 Oct 2024, 11:20', user: 'Faridah Hamid', action: 'Staff', details: 'Deactivated staff account for Mohd Hafiz', type: 'danger' },
  { id: 7, time: '22 Oct 2024, 17:45', user: 'Ahmad Zulkifli', action: 'Login', details: 'Signed in from Tawau depot', type: 'info' },
  { id: 8, time: '22 Oct 2024, 08:02', user: 'Nur Aisyah Rahman', action: 'Login', details: 'Signed in from Lahad Datu depot', type: 'info' },
];

const badgeStyles = {
  success: { bg: '#EAF3EC', color: '#276735', border: '#c6ebd0' },
  info: { bg: '#faf6f0', color: '#595048', border: '#e6dfd5' },
  warning: { bg: '#FDF6E2', color: '#946900', border: '#fae3b0' },
  danger: { bg: '#FDF2F2', color: '#9B1C1C', border: '#f5c6c6' },
};

export default function ActivityLogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [actionFilter, setActionFilter] = useState('All');

  const filteredLogs = logsData.filter((log) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      log.user.toLowerCase().includes(term) || log.details.toLowerCase().includes(term);
    const matchesAction = actionFilter === 'All' || log.action === actionFilter;
    return matchesSearch && matchesAction;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header Title & Actions */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 style={{ margin: '0 0 6px 0', color: '#2B1D16', fontSize: '24px', fontWeight: 'bold' }}>Activity Logs</h1>
          <p style={{ margin: 0, color: '#736b65', fontSize: '14px' }}>System audit trail and user action history.</p>
        </div>
        <button style={{
          background: '#fff', border: '1px solid #e6dfd5', padding: '8px 16px', color: '#2B1D16',
          borderRadius: '6px', fontWeight: 600, cursor: 'pointer', fontSize: '13px',
          display: 'flex', alignItems: 'center', gap: '6px'
        }}>
          <Download size={15} /> Export CSV
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div style={{
        background: '#fff', padding: '16px', borderRadius: '8px', border: '1px solid #e6dfd5',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px'
      }}>
        <div style={{ position: 'relative', width: '320px' }}>
          <Search size={16} color="#736b65" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search user or details..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%', padding: '10px 10px 10px 38px', borderRadius: '6px', border: '1px solid #e6dfd5',
              fontSize: '13px', outline: 'none', background: '#FAF6F0', color: '#2B1D16', boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <select
            value={actionFilter}
            onChange={(e) => setActionFilter(e.target.value)}
            style={{
              padding: '10px 14px', borderRadius: '6px', border: '1px solid #e6dfd5', fontSize: '13px',
              background: '#FAF6F0', color: '#2B1D16', outline: 'none'
            }}
          >
            <option value="All">Action: All</option>
            <option value="Assessment">Assessment</option>
            <option value="Staff">Staff</option>
            <option value="Rules">Rules</option>
            <option value="Login">Login</option>
          </select>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid #e6dfd5',
            padding: '8px 12px', borderRadius: '6px', fontSize: '12px', color: '#736b65'
          }}>
            <Calendar size={14} />
            <span>01 Oct 2024 - 31 Oct 2024</span>
          </div>
        </div>
      </div>

      {/* Logs Table */}
      <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid #e6dfd5', padding: '20px' }}>
        <div style={{ width: '100%', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px', minWidth: '720px' }}>
            <thead>
              <tr style={{ color: '#736b65', borderBottom: '1px solid #e6dfd5', fontSize: '11px', textTransform: 'uppercase' }}>
                <th style={{ padding: '12px 10px' }}>Timestamp</th>
                <th style={{ padding: '12px 10px' }}>User</th>
                <th style={{ padding: '12px 10px' }}>Action</th>
                <th style={{ padding: '12px 10px' }}>Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((log) => {
                const badge = badgeStyles[log.type];
                return (
                  <tr key={log.id} style={{ borderBottom: '1px solid #f2ede4' }}>
                    <td style={{ padding: '14px 10px', color: '#736b65', whiteSpace: 'nowrap' }}>{log.time}</td>
                    <td style={{ padding: '14px 10px', fontWeight: 600, color: '#2B1D16' }}>{log.user}</td>
                    <td style={{ padding: '14px 10px' }}>
                      <span style={{
                        padding: '3px 10px', borderRadius: '4px', fontSize: '12px', display: 'inline-block',
                        background: badge.bg, color: badge.color, border: `1px solid ${badge.border}`
                      }}>
                        {log.action}
                      </span>
                    </td>
                    <td style={{ padding: '14px 10px', color: '#2B1D16' }}>{log.details}</td>
                  </tr>
                );
              })}
              {filteredLogs.length === 0 && (
                <tr>
                  <td colSpan={4} style={{ padding: '24px', textAlign: 'center', color: '#736b65' }}>
                    No activity found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px',
          paddingTop: '16px', borderTop: '1px solid #f2ede4', fontSize: '12px', color: '#736b65'
        }}>
          <div>Showing <strong>1-{filteredLogs.length}</strong> of <strong>{logsData.length}</strong> events</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button style={{ background: '#fff', border: '1px solid #e6dfd5', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', color: '#736b65' }}>Previous</button>
            <span>Page 1 of 1</span>
            <button style={{ background: '#fff', border: '1px solid #e6dfd5', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', color: '#736b65' }}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}