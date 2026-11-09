import React, { useState } from 'react';
import { Search, Calendar, Download, Plus } from 'lucide-react';
import Report from './Report';

const fullAssessmentsData = [
  { id: 'CC-2024-0891', batch: 'SBH-TAW-042', supplier: 'Tawau Cocoa Cooperative', staff: 'Ahmad Zulkifli', date: '24 Oct 2024', grade: 'A', result: 'No Major Concerns', status: 'Completed', type: 'success' },
  { id: 'CC-2024-0890', batch: 'SBH-LD-118', supplier: 'Lahad Datu Smallholders', staff: 'Nur Aisyah Rahman', date: '24 Oct 2024', grade: 'B', result: 'Further Inspection', status: 'Completed', type: 'warning' },
  { id: 'CC-2024-0889', batch: 'SBH-KM-054', supplier: 'Kota Marudu Agro Growers', staff: 'Jason Lo', date: '24 Oct 2024', grade: '--', result: 'Pending Review', status: 'Draft', type: 'neutral' },
  { id: 'CC-2024-0888', batch: 'SBH-KLU-019', supplier: 'Kiulu Valley Cocoa Estate', staff: 'Ahmad Zulkifli', date: '23 Oct 2024', grade: 'A', result: 'No Major Concerns', status: 'Completed', type: 'success' },
  { id: 'CC-2024-0887', batch: 'SBH-KNG-204', supplier: 'Keningau Valley Agro', staff: 'Nur Aisyah Rahman', date: '23 Oct 2024', grade: 'C', result: 'Significant Concerns', status: 'Completed', type: 'danger' },
  { id: 'CC-2024-0886', batch: 'SBH-TAW-039', supplier: 'Tenom Organics Plantation', staff: 'Ahmad Zulkifli', date: '23 Oct 2024', grade: 'B', result: 'Further Inspection', status: 'Completed', type: 'warning' },
  { id: 'CC-2024-0885', batch: 'SBH-KM-052', supplier: 'Kota Marudu Agro Growers', staff: 'Jason Lo', date: '22 Oct 2024', grade: 'A', result: 'No Major Concerns', status: 'Completed', type: 'success' },
  { id: 'CC-2024-0884', batch: 'SBH-KLU-018', supplier: 'Kiulu River Producers', staff: 'Nur Aisyah Rahman', date: '22 Oct 2024', grade: '--', result: 'Pending Review', status: 'Draft', type: 'neutral' },
  { id: 'CC-2024-0883', batch: 'SBH-KNG-201', supplier: 'Keningau Highland Beans', staff: 'Ahmad Zulkifli', date: '21 Oct 2024', grade: 'A', result: 'No Major Concerns', status: 'Completed', type: 'success' },
  { id: 'CC-2024-0882', batch: 'SBH-TAW-035', supplier: 'Tawau Cocoa Cooperative', staff: 'Jason Lo', date: '21 Oct 2024', grade: 'B', result: 'Further Inspection', status: 'Completed', type: 'warning' },
];

export default function AssessmentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAssessment, setSelectedAssessment] = useState(null);

  // Jika pengguna klik butang View, paparkan halaman Report (A-0046)
  if (selectedAssessment) {
    return <Report onBack={() => setSelectedAssessment(null)} />;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header Title & Actions */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 style={{ margin: '0 0 6px 0', color: '#2B1D16', fontSize: '24px', fontWeight: 'bold' }}>Assessments</h1>
          <p style={{ margin: 0, color: '#736b65', fontSize: '14px' }}>All assessments performed by staff</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{
            background: '#fff', border: '1px solid #e6dfd5', padding: '8px 16px',
            borderRadius: '6px', fontWeight: 600, cursor: 'pointer', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px'
          }}>
            <Download size={15} /> Export CSV
          </button>
          <button style={{
            background: '#5A3825', color: '#fff', border: 'none', padding: '8px 16px',
            borderRadius: '6px', fontWeight: 600, cursor: 'pointer', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px'
          }}>
            <Plus size={16} /> New Assessment
          </button>
        </div>
      </div>

      {/* Filter & Search Bar Card */}
      <div style={{ background: '#fff', padding: '16px', borderRadius: '8px', border: '1px solid #e6dfd5', display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '12px', flex: 1, minWidth: '280px' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search size={16} color="#736b65" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search Batch ID or supplier..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%', padding: '10px 10px 10px 38px', borderRadius: '6px', border: '1px solid #e6dfd5',
                fontSize: '13px', outline: 'none', background: '#faf6f030', boxSizing: 'border-box'
              }}
            />
          </div>
          <select style={{ padding: '10px 14px', borderRadius: '6px', border: '1px solid #e6dfd5', fontSize: '13px', background: '#fff', color: '#2B1D16', cursor: 'pointer' }}>
            <option>Assessed by: All staff</option>
            <option>Ahmad Zulkifli</option>
            <option>Nur Aisyah Rahman</option>
            <option>Jason Lo</option>
          </select>
          <select style={{ padding: '10px 14px', borderRadius: '6px', border: '1px solid #e6dfd5', fontSize: '13px', background: '#fff', color: '#2B1D16', cursor: 'pointer' }}>
            <option>Result: All</option>
            <option>No Major Concerns</option>
            <option>Further Inspection</option>
            <option>Significant Concerns</option>
          </select>
        </div>

        {/* Quick Stats Badges & Date Filter */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <div style={{ display: 'flex', border: '1px solid #e6dfd5', borderRadius: '6px', overflow: 'hidden', fontSize: '12px' }}>
            <div style={{ padding: '8px 12px', background: '#5A3825', color: '#fff', fontWeight: 600, textAlign: 'center' }}>All<br/><span style={{ fontSize: '10px' }}>(128)</span></div>
            <div style={{ padding: '8px 12px', background: '#fff', color: '#736b65', textAlign: 'center', borderLeft: '1px solid #e6dfd5' }}>Draft<br/><span style={{ fontSize: '10px' }}>(12)</span></div>
            <div style={{ padding: '8px 12px', background: '#fff', color: '#736b65', textAlign: 'center', borderLeft: '1px solid #e6dfd5' }}>Completed<br/><span style={{ fontSize: '10px' }}>(116)</span></div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid #e6dfd5', padding: '6px 10px', borderRadius: '6px', fontSize: '12px', color: '#736b65', background: '#fff' }}>
            <Calendar size={14} />
            <span>01 Oct 2024 - 31 Oct 2024</span>
          </div>
        </div>
      </div>

      {/* Main Assessments Table */}
      <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid #e6dfd5', padding: '20px' }}>
        <div style={{ width: '100%', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px', minWidth: '950px' }}>
            <thead>
              <tr style={{ color: '#736b65', borderBottom: '1px solid #e6dfd5', fontSize: '11px', textTransform: 'uppercase' }}>
                <th style={{ padding: '12px 10px' }}>Assessment ID</th>
                <th style={{ padding: '12px 10px' }}>Batch ID</th>
                <th style={{ padding: '12px 10px' }}>Supplier</th>
                <th style={{ padding: '12px 10px' }}>Assessed By</th>
                <th style={{ padding: '12px 10px' }}>Date</th>
                <th style={{ padding: '12px 10px' }}>Grade</th>
                <th style={{ padding: '12px 10px' }}>Result</th>
                <th style={{ padding: '12px 10px' }}>Status</th>
                <th style={{ padding: '12px 10px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {fullAssessmentsData.map((item, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #f2ede4' }}>
                  <td style={{ padding: '14px 10px', fontWeight: 500 }}>{item.id}</td>
                  <td style={{ padding: '14px 10px', color: '#736b65' }}>{item.batch}</td>
                  <td style={{ padding: '14px 10px', fontWeight: 500 }}>{item.supplier}</td>
                  <td style={{ padding: '14px 10px' }}>{item.staff}</td>
                  <td style={{ padding: '14px 10px', color: '#736b65' }}>{item.date}</td>
                  <td style={{ padding: '14px 10px' }}>
                    <span style={{ padding: '2px 8px', background: '#faf6f0', border: '1px solid #e6dfd5', borderRadius: '4px', fontWeight: 600 }}>
                      {item.grade}
                    </span>
                  </td>
                  <td style={{ padding: '14px 10px' }}>
                    <span style={{
                      padding: '4px 10px', borderRadius: '4px', fontSize: '12px', display: 'inline-block',
                      backgroundColor: item.type === 'success' ? '#EAF3EC' : item.type === 'warning' ? '#FDF6E2' : item.type === 'danger' ? '#FDF2F2' : '#F4F0EA',
                      color: item.type === 'success' ? '#276735' : item.type === 'warning' ? '#946900' : item.type === 'danger' ? '#9B1C1C' : '#595048',
                      border: `1px solid ${item.type === 'success' ? '#c6ebd0' : item.type === 'warning' ? '#fae3b0' : item.type === 'danger' ? '#f5c6c6' : '#e0d8cc'}`
                    }}>
                      {item.result}
                    </span>
                  </td>
                  <td style={{ padding: '14px 10px' }}>
                    <span style={{
                      padding: '3px 10px', borderRadius: '12px', fontSize: '12px', display: 'inline-block',
                      background: item.status === 'Completed' ? '#EAF3EC' : '#FDF6E2',
                      color: item.status === 'Completed' ? '#276735' : '#946900'
                    }}>
                      ● {item.status}
                    </span>
                  </td>
                  <td style={{ padding: '14px 10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <button
                        onClick={() => setSelectedAssessment(item)}
                        style={{ background: 'none', border: 'none', color: '#5A3825', cursor: 'pointer', fontWeight: 600, fontSize: '13px' }}
                      >
                        View
                      </button>
                      <span style={{ color: '#736b65', cursor: 'pointer' }}>📄</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #e6dfd5', fontSize: '13px', color: '#736b65' }}>
          <div>Showing <strong>1-10</strong> of <strong>128</strong></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button style={{ background: '#fff', border: '1px solid #e6dfd5', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', color: '#b5aca4' }} disabled>Previous</button>
            <span>Page 1 of 13</span>
            <button style={{ background: '#fff', border: '1px solid #e6dfd5', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', color: '#2B1D16', fontWeight: 600 }}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

