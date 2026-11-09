import React from 'react';

const assessmentData = [
  { id: 'CC-2024-0891', batch: 'SBH-TAW-042', supplier: 'Tawau Cocoa Cooperative', staff: 'Ahmad Zulkifli', date: '24 Oct 2024', grade: 'Grade A', result: 'No Major Concerns', status: 'Completed', type: 'success' },
  { id: 'CC-2024-0890', batch: 'SBH-LD-118', supplier: 'Lahad Datu Smallholders', staff: 'Nur Aisyah Rahman', date: '24 Oct 2024', grade: 'Grade B', result: 'Further Inspection', status: 'Completed', type: 'warning' },
  { id: 'CC-2024-0889', batch: 'SBH-RN-095', supplier: 'Ranau Highland Beans', staff: 'Jason Lo', date: '23 Oct 2024', grade: 'Grade A', result: 'No Major Concerns', status: 'Completed', type: 'success' },
  { id: 'CC-2024-0888', batch: 'SBH-KM-264', supplier: 'Keningau Valley Agro', staff: 'Ahmad Zulkifli', date: '23 Oct 2024', grade: 'Grade C', result: 'Significant Concerns', status: 'Completed', type: 'danger' },
  { id: 'CC-2024-0887', batch: 'SBH-TAW-039', supplier: 'Tenom Organics Plantation', staff: 'Nur Aisyah Rahman', date: '22 Oct 2024', grade: 'Grade B', result: 'Further Inspection', status: 'Completed', type: 'warning' },
  { id: 'CC-2024-0886', batch: 'SBH-SD-071', supplier: 'Sandakan River Estate', staff: 'Jason Lo', date: '22 Oct 2024', grade: 'Grade A', result: 'No Major Concerns', status: 'Completed', type: 'success' },
];

export default function RecentAssessments() {
  return (
    <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid #e6dfd5', padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Recent assessments</h3>
        <a href="#all" style={{ fontSize: '13px', color: '#5A3825', textDecoration: 'none', fontWeight: 600 }}>View all →</a>
      </div>

      {/* Wrapper untuk membolehkan skrol ke kanan */}
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px', minWidth: '800px' }}>
          <thead>
            <tr style={{ color: '#736b65', borderBottom: '1px solid #e6dfd5', fontSize: '11px', textTransform: 'uppercase' }}>
              <th style={{ padding: '10px' }}>Assessment ID</th>
              <th style={{ padding: '10px' }}>Batch ID</th>
              <th style={{ padding: '10px' }}>Supplier</th>
              <th style={{ padding: '10px' }}>Assessed By</th>
              <th style={{ padding: '10px' }}>Date</th>
              <th style={{ padding: '10px' }}>Grade</th>
              <th style={{ padding: '10px' }}>Result</th>
              <th style={{ padding: '10px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {assessmentData.map((item, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #f2ede4' }}>
                <td style={{ padding: '14px 10px', fontWeight: 500 }}>{item.id}</td>
                <td style={{ padding: '14px 10px', color: '#736b65' }}>{item.batch}</td>
                <td style={{ padding: '14px 10px' }}>{item.supplier}</td>
                <td style={{ padding: '14px 10px' }}>{item.staff}</td>
                <td style={{ padding: '14px 10px', color: '#736b65' }}>{item.date}</td>
                <td style={{ padding: '14px 10px', fontWeight: 600 }}>{item.grade}</td>
                <td style={{ padding: '14px 10px' }}>
                  <span style={{
                    padding: '4px 10px', borderRadius: '4px', fontSize: '12px', display: 'inline-block',
                    backgroundColor: item.type === 'success' ? '#EAF3EC' : item.type === 'warning' ? '#FDF6E2' : '#FDF2F2',
                    color: item.type === 'success' ? '#276735' : item.type === 'warning' ? '#946900' : '#9B1C1C',
                    border: `1px solid ${item.type === 'success' ? '#c6ebd0' : item.type === 'warning' ? '#fae3b0' : '#f5c6c6'}`
                  }}>
                    {item.result}
                  </span>
                </td>
                <td style={{ padding: '14px 10px' }}>
                  <span style={{ color: '#276735', fontSize: '12px' }}>● {item.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bahagian Bawah / Pagination */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #e6dfd5', fontSize: '13px', color: '#736b65' }}>
        <div>Showing <strong>1-6</strong> of <strong>116</strong> completed records</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button style={{ background: '#fff', border: '1px solid #e6dfd5', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', color: '#736b65' }}>Previous</button>
          <span>Page 1 of 20</span>
          <button style={{ background: '#fff', border: '1px solid #e6dfd5', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', color: '#2B1D16', fontWeight: 600 }}>Next</button>
        </div>
      </div>
    </div>
  );
}