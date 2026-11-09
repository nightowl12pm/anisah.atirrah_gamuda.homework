import React, { useState } from 'react';
import { Search, UserPlus, MoreVertical, Shield, AlertCircle, X, Eye } from 'lucide-react';

const initialStaffData = [
  { id: 'SBH-INSP-041', name: 'Ahmad Zulkifli', email: 'ahmad@cococheck.my', assessments: 52, lastActive: '24 Oct 2024', status: 'Active', initials: 'AZ' },
  { id: 'SBH-INSP-049', name: 'Nur Aisyah Rahman', email: 'aisyah@cococheck.my', assessments: 47, lastActive: '24 Oct 2024', status: 'Active', initials: 'NR' },
  { id: 'SBH-INSP-055', name: 'Jason Lo', email: 'jason@cococheck.my', assessments: 29, lastActive: '22 Oct 2024', status: 'Active', initials: 'JL' },
  { id: 'SBH-INSP-038', name: 'Mohd Hafiz', email: 'hafiz@cococheck.my', assessments: 0, lastActive: '12 Sep 2024', status: 'Inactive', initials: 'MH' },
];

export default function StaffPage() {
  const [staffList, setStaffList] = useState(initialStaffData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTab, setFilterTab] = useState('All');
  const [activeMenu, setActiveMenu] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form states untuk Add Staff
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('Sbhk0ko#2026');

  const handleGeneratePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#@!';
    let newPass = '';
    for (let i = 0; i < 10; i++) {
      newPass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPass);
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    if (!fullName || !email) return;

    const initials = fullName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    const newStaff = {
      id: `SBH-INSP-0${staffList.length + 10}`,
      name: fullName,
      email: email,
      assessments: 0,
      lastActive: 'Just now',
      status: 'Active',
      initials: initials || 'ST'
    };

    setStaffList([newStaff, ...staffList]);
    setFullName('');
    setEmail('');
    setIsModalOpen(false);
  };

  const filteredStaff = staffList.filter(staff => {
    const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase()) || staff.email.toLowerCase().includes(searchTerm.toLowerCase());
    if (filterTab === 'Active') return matchesSearch && staff.status === 'Active';
    if (filterTab === 'Inactive') return matchesSearch && staff.status === 'Inactive';
    return matchesSearch;
  });

  const activeCount = staffList.filter(s => s.status === 'Active').length;
  const inactiveCount = staffList.filter(s => s.status === 'Inactive').length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative' }}>
      {/* Header Title & Actions */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 style={{ margin: '0 0 6px 0', color: '#2B1D16', fontSize: '24px', fontWeight: 'bold' }}>Staff</h1>
          <p style={{ margin: 0, color: '#736b65', fontSize: '14px' }}>Manage staff accounts that can perform assessments</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          style={{
            background: '#5A3825', color: '#fff', border: 'none', padding: '8px 16px',
            borderRadius: '6px', fontWeight: 600, cursor: 'pointer', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px'
          }}
        >
          <UserPlus size={16} /> + Add Staff
        </button>
      </div>

      {/* Top Metric Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        <div style={{ background: '#fff', padding: '16px 20px', borderRadius: '8px', border: '1px solid #e6dfd5' }}>
          <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#736b65', fontWeight: 600, letterSpacing: '0.5px' }}>Total Authorized Staff</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '8px' }}>
            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#2B1D16' }}>{staffList.length}</span>
            <span style={{ fontSize: '12px', color: '#276735', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Shield size={13} /> Sabah Board
            </span>
          </div>
        </div>

        <div style={{ background: '#fff', padding: '16px 20px', borderRadius: '8px', border: '1px solid #e6dfd5' }}>
          <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#736b65', fontWeight: 600, letterSpacing: '0.5px' }}>Active Field Assessors</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '8px' }}>
            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#2B1D16' }}>{activeCount}</span>
            <span style={{ fontSize: '12px', color: '#736b65' }}>75% Capacity</span>
          </div>
        </div>

        <div style={{ background: '#fff', padding: '16px 20px', borderRadius: '8px', border: '1px solid #e6dfd5' }}>
          <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#736b65', fontWeight: 600, letterSpacing: '0.5px' }}>Total Assessments MTD</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '8px' }}>
            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#2B1D16' }}>128</span>
            <span style={{ fontSize: '12px', color: '#276735' }}>+14% vs Sep</span>
          </div>
        </div>

        <div style={{ background: '#fff', padding: '16px 20px', borderRadius: '8px', border: '1px solid #e6dfd5' }}>
          <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#736b65', fontWeight: 600, letterSpacing: '0.5px' }}>Pending Re-Licensing</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '8px' }}>
            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#2B1D16' }}>1</span>
            <span style={{ fontSize: '12px', color: '#946900' }}>Mohd Hafiz</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Section */}
      <div style={{ background: '#fff', padding: '16px', borderRadius: '8px', border: '1px solid #e6dfd5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ position: 'relative', width: '320px' }}>
          <Search size={16} color="#736b65" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%', padding: '10px 10px 10px 38px', borderRadius: '6px', border: '1px solid #e6dfd5',
              fontSize: '13px', outline: 'none', background: '#FAF6F0', boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ display: 'flex', border: '1px solid #e6dfd5', borderRadius: '6px', overflow: 'hidden', fontSize: '12px' }}>
          <button
            onClick={() => setFilterTab('All')}
            style={{ padding: '8px 14px', background: filterTab === 'All' ? '#5A3825' : '#fff', color: filterTab === 'All' ? '#fff' : '#736b65', border: 'none', cursor: 'pointer', fontWeight: 600 }}
          >
            All {staffList.length}
          </button>
          <button
            onClick={() => setFilterTab('Active')}
            style={{ padding: '8px 14px', background: filterTab === 'Active' ? '#5A3825' : '#fff', color: filterTab === 'Active' ? '#fff' : '#736b65', border: 'none', cursor: 'pointer', borderLeft: '1px solid #e6dfd5', fontWeight: 600 }}
          >
            Active {activeCount}
          </button>
          <button
            onClick={() => setFilterTab('Inactive')}
            style={{ padding: '8px 14px', background: filterTab === 'Inactive' ? '#5A3825' : '#fff', color: filterTab === 'Inactive' ? '#fff' : '#736b65', border: 'none', cursor: 'pointer', borderLeft: '1px solid #e6dfd5', fontWeight: 600 }}
          >
            Inactive {inactiveCount}
          </button>
        </div>
      </div>

      {/* Staff Table */}
      <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid #e6dfd5', padding: '20px' }}>
        <div style={{ width: '100%', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px', minWidth: '850px' }}>
            <thead>
              <tr style={{ color: '#736b65', borderBottom: '1px solid #e6dfd5', fontSize: '11px', textTransform: 'uppercase' }}>
                <th style={{ padding: '12px 10px' }}>Name</th>
                <th style={{ padding: '12px 10px' }}>Email</th>
                <th style={{ padding: '12px 10px' }}>Assessments</th>
                <th style={{ padding: '12px 10px' }}>Last Active</th>
                <th style={{ padding: '12px 10px' }}>Status</th>
                <th style={{ padding: '12px 10px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStaff.map((staff, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #f2ede4', position: 'relative' }}>
                  <td style={{ padding: '14px 10px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '6px', background: '#5A3825', color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '13px'
                    }}>
                      {staff.initials}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: '#2B1D16' }}>{staff.name}</div>
                      <div style={{ fontSize: '11px', color: '#736b65' }}>ID: {staff.id}</div>
                    </div>
                  </td>
                  <td style={{ padding: '14px 10px', color: '#736b65' }}>{staff.email}</td>
                  <td style={{ padding: '14px 10px', fontWeight: 600 }}>{staff.assessments}</td>
                  <td style={{ padding: '14px 10px', color: '#736b65' }}>{staff.lastActive}</td>
                  <td style={{ padding: '14px 10px' }}>
                    <span style={{
                      padding: '3px 10px', borderRadius: '12px', fontSize: '12px', display: 'inline-block',
                      background: staff.status === 'Active' ? '#EAF3EC' : '#FDF2F2',
                      color: staff.status === 'Active' ? '#276735' : '#9B1C1C'
                    }}>
                      ● {staff.status}
                    </span>
                  </td>
                  <td style={{ padding: '14px 10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <button style={{ background: 'none', border: 'none', color: '#5A3825', cursor: 'pointer', fontWeight: 600, fontSize: '13px' }}>Edit</button>
                      <div style={{ position: 'relative' }}>
                        <button
                          onClick={() => setActiveMenu(activeMenu === index ? null : index)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#736b65', padding: '4px' }}
                        >
                          <MoreVertical size={16} />
                        </button>
                        
                        {activeMenu === index && (
                          <div style={{
                            position: 'absolute', right: 0, top: '100%', background: '#fff', border: '1px solid #e6dfd5',
                            borderRadius: '6px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', width: '150px', zIndex: 10, padding: '4px 0'
                          }}>
                            <div style={{ fontSize: '10px', color: '#736b65', padding: '4px 10px', borderBottom: '1px solid #f2ede4' }}>ACTIONS · {staff.id}</div>
                            <button style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '8px 12px', fontSize: '12px', color: '#2B1D16', cursor: 'pointer' }}>
                              🔄 Reset password
                            </button>
                            <button style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '8px 12px', fontSize: '12px', color: '#9B1C1C', cursor: 'pointer' }}>
                              👤 Deactivate
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer info & Pagination */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #e6dfd5', fontSize: '13px', color: '#736b65' }}>
          <div>Showing <strong>1 to {filteredStaff.length}</strong> of <strong>{staffList.length}</strong> staff records</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button style={{ background: '#fff', border: '1px solid #e6dfd5', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', color: '#b5aca4' }} disabled>Previous</button>
            <button style={{ background: '#5A3825', color: '#fff', border: '1px solid #5A3825', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontWeight: 600 }}>1</button>
            <button style={{ background: '#fff', border: '1px solid #e6dfd5', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', color: '#b5aca4' }} disabled>Next</button>
          </div>
        </div>
      </div>

      {/* Bottom Info Note */}
      <div style={{ fontSize: '12px', color: '#736b65', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <AlertCircle size={14} /> Deactivated staff cannot sign in. Their past assessments remain on record.
      </div>

      {/* ADD STAFF MODAL POPUP */}
      {isModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0, 0, 0, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }}>
          <div style={{
            background: '#fff', width: '480px', borderRadius: '12px', border: '1px solid #e6dfd5',
            boxShadow: '0 10px 25px rgba(0,0,0,0.15)', overflow: 'hidden', display: 'flex', flexDirection: 'column'
          }}>
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', borderBottom: '1px solid #e6dfd5' }}>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#2B1D16' }}>Add staff</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#736b65' }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body / Form */}
            <form onSubmit={handleCreateAccount} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#2B1D16', marginBottom: '6px' }}>Full name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Siti Sarah binti Razak"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  style={{
                    width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #e6dfd5',
                    fontSize: '13px', outline: 'none', boxSizing: 'border-box', background: '#FAF6F0'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#2B1D16', marginBottom: '6px' }}>Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. sarah@cococheck.my"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #e6dfd5',
                    fontSize: '13px', outline: 'none', boxSizing: 'border-box', background: '#FAF6F0'
                  }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#2B1D16' }}>Temporary password</label>
                  <button
                    type="button"
                    onClick={handleGeneratePassword}
                    style={{ background: 'none', border: 'none', color: '#5A3825', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}
                  >
                    Generate
                  </button>
                </div>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      width: '100%', padding: '10px 36px 10px 12px', borderRadius: '6px', border: '1px solid #e6dfd5',
                      fontSize: '13px', outline: 'none', boxSizing: 'border-box', fontFamily: 'monospace', background: '#FAF6F0'
                    }}
                  />
                  <Eye size={16} color="#736b65" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }} />
                </div>
                <div style={{ fontSize: '11px', color: '#736b65', marginTop: '6px' }}>
                  Share this password with the staff member. They can sign in immediately.
                </div>
              </div>

              {/* Modal Footer Buttons */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '8px', borderTop: '1px solid #e6dfd5', paddingTop: '16px' }}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    background: '#fff', border: '1px solid #e6dfd5', padding: '8px 16px',
                    borderRadius: '6px', fontWeight: 600, cursor: 'pointer', fontSize: '13px', color: '#2B1D16'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    background: '#5A3825', color: '#fff', border: 'none', padding: '8px 16px',
                    borderRadius: '6px', fontWeight: 600, cursor: 'pointer', fontSize: '13px'
                  }}
                >
                  Create account
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}