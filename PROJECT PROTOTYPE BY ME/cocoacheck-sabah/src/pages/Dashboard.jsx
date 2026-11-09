// // import React, { useState } from 'react';
// // import { LayoutDashboard, ClipboardList, Users, Sliders, Activity, LogOut, Bell, Info, FileText, CheckCircle, PenTool, ClipboardCheck, ArrowUpRight } from 'lucide-react';

// // export default function Dashboard({ onLogout }) {
// //   const [activeTab, setActiveTab] = useState('dashboard');

// //   return (
// //     <div style={{ display: 'flex', minHeight: '100vh', background: '#FAF6F0', fontFamily: 'sans-serif' }}>
// //       {/* Sidebar Navigation */}
// //       <aside style={{
// //         width: '260px', background: '#2B1D16', color: '#fff', padding: '24px',
// //         display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: '1px solid #423025'
// //       }}>
// //         <div>
// //           {/* Logo & Info */}
// //           <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '40px', paddingBottom: '16px', borderBottom: '1px solid #423025' }}>
// //             <div style={{ padding: '8px', background: '#4F3323', borderRadius: '10px' }}>
// //               <Info color="#B88A58" size={32} />
// //             </div>
// //             <div>
// //               <h2 style={{ margin: 0, fontSize: '18px', color: '#fff', fontWeight: 'bold' }}>CocoaCheck</h2>
// //               <p style={{ margin: 0, fontSize: '12px', color: '#b5aca4' }}>Sabah Admin Panel</p>
// //             </div>
// //           </div>

// //           {/* Menu Items (IKON DIBESARKAN) */}
// //           <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
// //             {[
// //               { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
// //               { id: 'assessments', label: 'Assessments', icon: ClipboardList },
// //               { id: 'staff', label: 'Staff', icon: Users },
// //               { id: 'rules', label: 'Assessment Rules', icon: Sliders },
// //               { id: 'activity', label: 'Activity Logs', icon: Activity }
// //             ].map((item) => (
// //               <button
// //                 key={item.id}
// //                 onClick={() => setActiveTab(item.id)}
// //                 style={{
// //                   display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 16px',
// //                   borderRadius: '10px', border: 'none', background: activeTab === item.id ? '#5A3825' : 'transparent',
// //                   color: activeTab === item.id ? '#fff' : '#b5aca4', cursor: 'pointer', textAlign: 'left', fontSize: '14px', width: '100%',
// //                   fontWeight: activeTab === item.id ? '600' : 'normal'
// //                 }}
// //               >
// //                 {/* SAiz ikon dinaikkan dari ~16 ke 24 */}
// //                 <item.icon size={24} /> 
// //                 {item.label}
// //               </button>
// //             ))}
// //           </nav>
// //         </div>

// //         {/* Sidebar Footer: BUTANG LOGOUT */}
// //         <div style={{ borderTop: '1px solid #423025', paddingTop: '16px', marginTop: '16px' }}>
// //           <button
// //             onClick={onLogout}
// //             style={{
// //               display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 16px',
// //               borderRadius: '10px', border: 'none', background: 'transparent',
// //               color: '#b5aca4', cursor: 'pointer', textAlign: 'left', fontSize: '14px', width: '100%'
// //             }}
// //           >
// //             {/* Saiz ikon dinaikkan dari ~16 ke 24 */}
// //             <LogOut size={24} /> Logout
// //           </button>
// //         </div>
// //       </aside>

// //       {/* Main Content Area */}
// //       <main style={{ flex: 1 }}>
// //         {/* Top Header Bar */}
// //         <header style={{
// //           padding: '16px 32px', borderBottom: '1px solid #e6dfd5', background: '#fff',
// //           display: 'flex', alignItems: 'center', justifyContent: 'space-between'
// //         }}>
// //           <div>
// //             <span style={{ fontSize: '12px', color: '#736b65' }}>CocoaCheck Sabah</span> / <span style={{ fontSize: '14px', color: '#2B1D16', fontWeight: 600 }}>Dashboard Overview</span>
// //           </div>
// //           <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
// //             <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}><Bell size={20} color="#736b65" /></button>
// //             <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}><Info size={20} color="#736b65" /></button>
// //             <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
// //               <div style={{ textAlign: 'right' }}>
// //                 <p style={{ margin: 0, fontSize: '14px', color: '#2B1D16', fontWeight: 600 }}>Faridah Hamid</p>
// //                 <p style={{ margin: 0, fontSize: '12px', color: '#736b65' }}>Admin • Sabah Region</p>
// //               </div>
// //               <div style={{
// //                 width: '40px', height: '40px', background: '#2B1D16', color: '#fff',
// //                 borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'
// //               }}>
// //                 FH
// //               </div>
// //             </div>
// //           </div>
// //         </header>

// //         {/* Dashboard Content */}
// //         <div style={{ padding: '32px' }}>
// //           {/* Section Header */}
// //           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
// //             <div>
// //               <h1 style={{ margin: '0 0 8px 0', fontSize: '24px', color: '#2B1D16', fontWeight: 'bold' }}>Dashboard Overview</h1>
// //               <p style={{ margin: 0, fontSize: '14px', color: '#736b65' }}>Overview of cocoa assessments and batch compliance monitoring across regional depots.</p>
// //             </div>
// //             <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
// //               <button style={{
// //                 background: '#fff', color: '#2B1D16', border: '1px solid #e6dfd5',
// //                 padding: '10px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, display: 'flex', gap: '8px', alignItems: 'center'
// //               }}>
// //                 Download Report <ArrowUpRight size={16} />
// //               </button>
// //               <button style={{
// //                 background: '#5A3825', color: '#fff', border: 'none',
// //                 padding: '10px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: 600
// //               }}>
// //                 + New Assessment
// //               </button>
// //             </div>
// //           </div>

// //           {/* Status Cards (IKON DALAM KAD DIBESARKAN) */}
// //           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '32px' }}>
// //             {[
// //               { label: 'Total Assessments', value: '128', sub: '+12% vs last month', icon: FileText, color: '#F1A93D' },
// //               { label: 'Completed', value: '116', sub: '90.6% rate', icon: ClipboardCheck, color: '#31C48D' },
// //               { label: 'Drafts', value: '12', sub: '2 pending lab results', icon: PenTool, color: '#B54242' },
// //               { label: 'Active Staff', value: '3', sub: 'All current inspectors online', icon: Users, color: '#526A8C' }
// //             ].map((card, index) => (
// //               <div key={index} style={{
// //                 background: '#fff', border: '1px solid #e6dfd5', padding: '24px',
// //                 borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '12px'
// //               }}>
// //                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
// //                   <span style={{ fontSize: '13px', color: '#736b65' }}>{card.label}</span>
// //                   {/* Saiz ikon dalam kad dinaikkan dari ~16 ke 24 */}
// //                   <div style={{ color: card.color, padding: '4px', background: `${card.color}15`, borderRadius: '6px' }}>
// //                     <card.icon size={24} />
// //                   </div>
// //                 </div>
// //                 <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#2B1D16' }}>{card.value}</div>
// //                 <div style={{ fontSize: '12px', color: '#736b65' }}>{card.sub}</div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Monthly Analysis Section (Contoh tambahan) */}
// //           <div style={{ background: '#fff', border: '1px solid #e6dfd5', borderRadius: '12px', padding: '24px' }}>
// //             <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#2B1D16', fontWeight: 600 }}>Results this month</h3>
// //             {/* Kandungan analisis lain boleh ditambah di sini */}
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }

// import React, { useState } from 'react';
// import { 
//   LayoutDashboard, 
//   ClipboardList, 
//   Users, 
//   Sliders, 
//   Activity, 
//   LogOut, 
//   Bell, 
//   Info, 
//   FileText, 
//   PenTool, 
//   ClipboardCheck, 
//   ArrowUpRight 
// } from 'lucide-react';
// import StaffPage from '../components/StaffPage';
// import RulesPage from '../components/RulesPage';

// export default function Dashboard({ onLogout }) {
//   const [activeTab, setActiveTab] = useState('dashboard');

//   return (
//     <div style={{ display: 'flex', minHeight: '100vh', background: '#FAF6F0', fontFamily: 'sans-serif' }}>
//       {/* Sidebar Navigation */}
//       <aside style={{
//         width: '260px', 
//         background: '#2B1D16', 
//         color: '#fff', 
//         padding: '24px',
//         display: 'flex', 
//         flexDirection: 'column', 
//         justifyContent: 'space-between', 
//         borderRight: '1px solid #423025'
//       }}>
//         <div>
//           {/* Logo & Brand Info */}
//           <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '40px', paddingBottom: '16px', borderBottom: '1px solid #423025' }}>
//             <div style={{ padding: '8px', background: '#4F3323', borderRadius: '10px' }}>
//               <Info color="#B88A58" size={32} />
//             </div>
//             <div>
//               <h2 style={{ margin: 0, fontSize: '18px', color: '#fff', fontWeight: 'bold' }}>CocoaCheck</h2>
//               <p style={{ margin: 0, fontSize: '12px', color: '#b5aca4' }}>Sabah Admin Panel</p>
//             </div>
//           </div>

//           {/* Menu Navigasi Sidebar */}
//           <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//             {[
//               { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
//               { id: 'assessments', label: 'Assessments', icon: ClipboardList },
//               { id: 'staff', label: 'Staff', icon: Users },
//               { id: 'rules', label: 'Assessment Rules', icon: Sliders },
//               { id: 'activity', label: 'Activity Logs', icon: Activity }
//             ].map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => setActiveTab(item.id)}
//                 style={{
//                   display: 'flex', 
//                   alignItems: 'center', 
//                   gap: '16px', 
//                   padding: '12px 16px',
//                   borderRadius: '10px', 
//                   border: 'none', 
//                   background: activeTab === item.id ? '#5A3825' : 'transparent',
//                   color: activeTab === item.id ? '#fff' : '#b5aca4', 
//                   cursor: 'pointer', 
//                   textAlign: 'left', 
//                   fontSize: '14px', 
//                   width: '100%',
//                   fontWeight: activeTab === item.id ? '600' : 'normal'
//                 }}
//               >
//                 <item.icon size={24} />
//                 {item.label}
//               </button>
//             ))}
//           </nav>
//         </div>

//         {/* Sidebar Footer: Butang Logout */}
//         <div style={{ borderTop: '1px solid #423025', paddingTop: '16px', marginTop: '16px' }}>
//           <button
//             onClick={onLogout}
//             style={{
//               display: 'flex', 
//               alignItems: 'center', 
//               gap: '16px', 
//               padding: '12px 16px',
//               borderRadius: '10px', 
//               border: 'none', 
//               background: 'transparent',
//               color: '#b5aca4', 
//               cursor: 'pointer', 
//               textAlign: 'left', 
//               fontSize: '14px', 
//               width: '100%'
//             }}
//           >
//             <LogOut size={24} /> Logout
//           </button>
//         </div>
//       </aside>

//       {/* Main Content Area */}
//       <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
//         {/* Top Header Bar */}
//         <header style={{
//           padding: '16px 32px', 
//           borderBottom: '1px solid #e6dfd5', 
//           background: '#fff',
//           display: 'flex', 
//           alignItems: 'center', 
//           justifyContent: 'space-between'
//         }}>
//           <div style={{ fontSize: '13px', color: '#736b65' }}>
//             CocoaCheck Sabah <span style={{ margin: '0 6px', color: '#ccc' }}>/</span> 
//             <strong style={{ color: '#2B1D16', fontWeight: 600 }}>
//               {activeTab === 'dashboard' && 'Dashboard Overview'}
//               {activeTab === 'assessments' && 'Assessments Management'}
//               {activeTab === 'staff' && 'Staff Management'}
//               {activeTab === 'rules' && 'Assessment Rules'}
//               {activeTab === 'activity' && 'Activity Logs'}
//             </strong>
//           </div>

//           <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//             <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#736b65' }}>
//               <Bell size={20} />
//             </button>
//             <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#736b65' }}>
//               <Info size={20} />
//             </button>

//             <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderLeft: '1px solid #e6dfd5', paddingLeft: '16px' }}>
//               <div style={{ textAlign: 'right' }}>
//                 <p style={{ margin: 0, fontSize: '14px', color: '#2B1D16', fontWeight: 600 }}>Faridah Hamid</p>
//                 <p style={{ margin: 0, fontSize: '11px', color: '#736b65' }}>Admin • Sabah Region</p>
//               </div>
//               <div style={{
//                 width: '38px', 
//                 height: '38px', 
//                 background: '#2B1D16', 
//                 color: '#fff',
//                 borderRadius: '50%', 
//                 display: 'flex', 
//                 alignItems: 'center', 
//                 justifyContent: 'center', 
//                 fontWeight: 'bold', 
//                 fontSize: '14px'
//               }}>
//                 FH
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Dashboard Content Container */}
//         <div style={{ padding: '32px', flex: 1 }}>
//           {activeTab === 'dashboard' && (
//             <div>
//               {/* Section Header */}
//               <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
//                 <div>
//                   <h1 style={{ margin: '0 0 6px 0', fontSize: '24px', color: '#2B1D16', fontWeight: 'bold' }}>
//                     Dashboard Overview
//                   </h1>
//                   <p style={{ margin: 0, fontSize: '13px', color: '#736b65' }}>
//                     Overview of cocoa assessments and batch compliance monitoring across regional depots.
//                   </p>
//                 </div>

//                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//                   <button style={{
//                     background: '#fff', 
//                     color: '#2B1D16', 
//                     border: '1px solid #e6dfd5',
//                     padding: '10px 16px', 
//                     borderRadius: '8px', 
//                     fontSize: '13px', 
//                     fontWeight: 600, 
//                     display: 'flex', 
//                     gap: '8px', 
//                     alignItems: 'center', 
//                     cursor: 'pointer'
//                   }}>
//                     Download Report <ArrowUpRight size={16} />
//                   </button>
//                   <button style={{
//                     background: '#5A3825', 
//                     color: '#fff', 
//                     border: 'none',
//                     padding: '10px 18px', 
//                     borderRadius: '8px', 
//                     fontSize: '13px', 
//                     fontWeight: 600, 
//                     cursor: 'pointer', 
//                     display: 'flex', 
//                     alignItems: 'center', 
//                     gap: '6px'
//                   }}>
//                     + New Assessment
//                   </button>
//                 </div>
//               </div>

//               {/* Status Cards Ringkasan */}
//               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '32px' }}>
//                 {[
//                   { label: 'Total Assessments', value: '128', sub: '+12% vs last month', icon: FileText, color: '#F1A93D' },
//                   { label: 'Completed', value: '116', sub: '90.6% rate', icon: ClipboardCheck, color: '#31C48D' },
//                   { label: 'Drafts', value: '12', sub: '2 pending lab results', icon: PenTool, color: '#B54242' },
//                   { label: 'Active Staff', value: '3', sub: 'All current inspectors online', icon: Users, color: '#526A8C' }
//                 ].map((card, index) => (
//                   <div key={index} style={{
//                     background: '#fff', 
//                     border: '1px solid #e6dfd5', 
//                     padding: '24px',
//                     borderRadius: '12px', 
//                     display: 'flex', 
//                     flexDirection: 'column', 
//                     gap: '12px'
//                   }}>
//                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                       <span style={{ fontSize: '13px', color: '#736b65' }}>{card.label}</span>
//                       <div style={{ color: card.color, padding: '6px', background: `${card.color}15`, borderRadius: '8px' }}>
//                         <card.icon size={24} />
//                       </div>
//                     </div>
//                     <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#2B1D16' }}>{card.value}</div>
//                     <div style={{ fontSize: '12px', color: '#736b65' }}>{card.sub}</div>
//                   </div>
//                 ))}
//               </div>

//               {/* Section Analysis Bulanan */}
//               <div style={{ background: '#fff', border: '1px solid #e6dfd5', borderRadius: '12px', padding: '24px' }}>
//                 <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#2B1D16', fontWeight: 600 }}>Results this month</h3>
//                 <p style={{ margin: 0, fontSize: '13px', color: '#736b65' }}>116 completed assessments analyzed across Tawau, Sandakan, and Kota Kinabalu depots.</p>
//               </div>
//             </div>
//           )}

//           {activeTab === 'staff' && <StaffPage />}
//           {activeTab === 'rules' && <RulesPage />}
//           {activeTab === 'assessments' && (
//             <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e6dfd5' }}>
//               <h2 style={{ color: '#2B1D16', margin: '0 0 8px 0' }}>Assessments Management</h2>
//               <p style={{ color: '#736b65', margin: 0 }}>Senarai pemeriksaan dan status batch koko wilayah Sabah.</p>
//             </div>
//           )}
//           {activeTab === 'activity' && (
//             <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e6dfd5' }}>
//               <h2 style={{ color: '#2B1D16', margin: '0 0 8px 0' }}>Activity Logs</h2>
//               <p style={{ color: '#736b65', margin: 0 }}>Rekod aktiviti sistem audit dan pegawai bertugas.</p>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ClipboardList, 
  Users, 
  Sliders, 
  Activity, 
  LogOut, 
  Bell, 
  HelpCircle, 
  FileText, 
  CheckSquare, 
  Edit3, 
  UserCheck,
  ChevronRight
} from 'lucide-react';
import StaffPage from '../components/StaffPage';
import RulesPage from '../components/RulesPage';

export default function Dashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Sample Data mengikut gambar Recent Assessments anda
  const recentAssessments = [
    { id: 'CC-2024-0891', batch: 'SBH-TAW-042', supplier: 'Tawau Cocoa Cooperative', assessor: 'Ahmad Zulkifli', date: '24 Oct 2024', grade: 'Grade A', result: 'No Major Concerns', status: 'Completed' },
    { id: 'CC-2024-0890', batch: 'SBH-LD-118', supplier: 'Lahad Datu Smallholders', assessor: 'Nur Aisyah Rahman', date: '24 Oct 2024', grade: 'Grade B', result: 'Further Inspection', status: 'Completed' },
    { id: 'CC-2024-0889', batch: 'SBH-RN-095', supplier: 'Ranau Highland Beans', assessor: 'Jason Lo', date: '23 Oct 2024', grade: 'Grade A', result: 'No Major Concerns', status: 'Completed' },
    { id: 'CC-2024-0888', batch: 'SBH-KM-264', supplier: 'Keningau Valley Agro', assessor: 'Ahmad Zulkifli', date: '23 Oct 2024', grade: 'Grade C', result: 'Significant Concerns', status: 'Completed' },
    { id: 'CC-2024-0887', batch: 'SBH-TAW-039', supplier: 'Tenom Organics Plantation', assessor: 'Nur Aisyah Rahman', date: '22 Oct 2024', grade: 'Grade B', result: 'Further Inspection', status: 'Completed' },
    { id: 'CC-2024-0886', batch: 'SBH-SD-071', supplier: 'Sandakan River Estate', assessor: 'Jason Lo', date: '22 Oct 2024', grade: 'Grade A', result: 'No Major Concerns', status: 'Completed' },
  ];

  const getResultBadgeStyle = (result) => {
    switch (result) {
      case 'No Major Concerns':
        return { background: '#E8F5E9', color: '#2E7D32', border: '1px solid #C8E6C9' };
      case 'Further Inspection':
        return { background: '#FFF8E1', color: '#F57F17', border: '1px solid #FFE082' };
      case 'Significant Concerns':
        return { background: '#FFEBEE', color: '#C62828', border: '1px solid #FFCDD2' };
      default:
        return { background: '#F5F5F5', color: '#616161', border: '1px solid #E0E0E0' };
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#FAF6F0', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* SIDEBAR NAVIGATION */}
      <aside style={{
        width: '240px', 
        background: '#2B1D16', 
        color: '#fff', 
        padding: '24px 16px',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between'
      }}>
        <div>
          {/* Logo Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px', paddingLeft: '8px' }}>
            <div style={{
              width: '60px', height: '60px', background: '#5A3825', borderRadius: '6px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'
            }}>
              🍫
            </div>
            <div>
              <h2 style={{ margin: 0, fontSize: '16px', color: '#fff', fontWeight: 700 }}>CocoaCheck</h2>
              <span style={{ fontSize: '11px', color: '#B5ACA4' }}>Sabah Admin Panel</span>
            </div>
          </div>

          {/* Menu Items */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'assessments', label: 'Assessments', icon: ClipboardList },
              { id: 'staff', label: 'Staff', icon: Users },
              { id: 'rules', label: 'Assessment Rules', icon: Sliders },
              { id: 'activity', label: 'Activity Logs', icon: Activity },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px',
                  borderRadius: '8px', border: 'none',
                  background: activeTab === item.id ? '#5A3825' : 'transparent',
                  color: activeTab === item.id ? '#fff' : '#B5ACA4',
                  cursor: 'pointer', textAlign: 'left', fontSize: '14px', fontWeight: activeTab === item.id ? '600' : '400',
                  width: '100%'
                }}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Logout Button */}
        <div>
          <button
            onClick={onLogout}
            style={{
              display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px',
              borderRadius: '8px', border: '1px solid #423025', background: 'transparent',
              color: '#B5ACA4', cursor: 'pointer', fontSize: '13px', width: '100%'
            }}
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* TOP HEADER */}
        <header style={{
          padding: '16px 32px', background: '#FAF6F0',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: '1px solid #EFEAE1'
        }}>
          <div style={{ fontSize: '13px', color: '#736B65' }}>
            CocoaCheck &gt; <span style={{ color: '#2B1D16', fontWeight: 600 }}>Dashboard Overview</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#736B65' }}><Bell size={18} /></button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#736B65' }}><HelpCircle size={18} /></button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ textAlign: 'right' }}>
                <p style={{ margin: 0, fontSize: '13px', fontWeight: 600, color: '#2B1D16' }}>Faridah Hamid</p>
                <p style={{ margin: 0, fontSize: '11px', color: '#736B65' }}>Admin • Sabah Region</p>
              </div>
              <div style={{
                width: '36px', height: '36px', background: '#3D2517', color: '#fff',
                borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 'bold', fontSize: '13px'
              }}>
                FH
              </div>
            </div>
          </div>
        </header>

        {/* DASHBOARD CONTENT */}
        <div style={{ padding: '24px 32px', flex: 1 }}>
          {activeTab === 'dashboard' && (
            <div>
              {/* Title & Actions */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div>
                  <h1 style={{ margin: '0 0 4px 0', fontSize: '22px', color: '#2B1D16', fontWeight: 700 }}>Dashboard</h1>
                  <p style={{ margin: 0, fontSize: '13px', color: '#736B65' }}>
                    Overview of cocoa assessments and batch compliance monitoring across regional depots.
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    background: '#fff', border: '1px solid #E6DFD5', padding: '8px 16px',
                    borderRadius: '6px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px'
                  }}>
                    📊 Filter / Report
                  </div>
                  <button style={{
                    background: '#5A3825', color: '#fff', border: 'none',
                    padding: '10px 18px', borderRadius: '6px', fontSize: '13px', fontWeight: 600,
                    cursor: 'pointer'
                  }}>
                    + New Assessment
                  </button>
                </div>
              </div>

              {/* STATS CARDS (Top Row) */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
                {/* Total Assessments */}
                <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid #E6DFD5', padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#736B65' }}>
                    <span>Total Assessments</span>
                    <span>📋</span>
                  </div>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: '#2B1D16', margin: '8px 0 4px 0', textAlign: 'center' }}>128</div>
                  <div style={{ fontSize: '11px', color: '#2E7D32', textAlign: 'center' }}>↑ +12% mo</div>
                </div>

                {/* Completed */}
                <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid #E6DFD5', padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#736B65' }}>
                    <span>Completed</span>
                    <span style={{ color: '#2E7D32' }}>✅</span>
                  </div>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: '#2B1D16', margin: '8px 0 4px 0', textAlign: 'center' }}>116</div>
                  <div style={{ fontSize: '11px', color: '#736B65', textAlign: 'center' }}>90.6% rate</div>
                </div>

                {/* Drafts */}
                <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid #E6DFD5', padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#736B65' }}>
                    <span>Drafts</span>
                    <span>📝</span>
                  </div>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: '#2B1D16', margin: '8px 0 4px 0', textAlign: 'center' }}>12</div>
                  <div style={{ fontSize: '11px', color: '#B78103', textAlign: 'center' }}>Pending lab test</div>
                </div>

                {/* Active Staff */}
                <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid #E6DFD5', padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#736B65' }}>
                    <span>Active Staff</span>
                    <span style={{ color: '#3D2517' }}>👤</span>
                  </div>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: '#2B1D16', margin: '8px 0 4px 0', textAlign: 'center' }}>3</div>
                  <div style={{ fontSize: '11px', color: '#2E7D32', textAlign: 'center' }}>• All on duty</div>
                </div>
              </div>

              {/* RESULTS THIS MONTH CARD */}
              <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid #E6DFD5', padding: '24px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h3 style={{ margin: 0, fontSize: '16px', color: '#2B1D16', fontWeight: 700 }}>Results this month</h3>
                  <div style={{ fontSize: '12px', color: '#736B65', border: '1px solid #E6DFD5', padding: '4px 12px', borderRadius: '4px' }}>
                    Period: 01 Oct - 31 Oct 2024
                  </div>
                </div>
                <p style={{ margin: '0 0 16px 0', fontSize: '12px', color: '#736B65' }}>116 completed assessments analyzed</p>

                {/* Multi-color Split Bar */}
                <div style={{ display: 'flex', height: '12px', borderRadius: '6px', overflow: 'hidden', marginBottom: '20px' }}>
                  <div style={{ width: '55.2%', background: '#2E6B40' }}></div>
                  <div style={{ width: '32.8%', background: '#E0A138' }}></div>
                  <div style={{ width: '12.0%', background: '#A81C1C' }}></div>
                </div>

                {/* 3 Summary Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                  <div style={{ border: '1px solid #E6DFD5', borderRadius: '6px', padding: '16px', textAlign: 'center' }}>
                    <span style={{ fontSize: '12px', color: '#736B65' }}>No Major Concerns</span>
                    <div style={{ fontSize: '20px', fontWeight: 700, color: '#2E6B40', marginTop: '4px' }}>
                      64 <span style={{ fontSize: '12px', fontWeight: 'normal', color: '#736B65' }}>55.2% of total</span>
                    </div>
                  </div>

                  <div style={{ border: '1px solid #E6DFD5', borderRadius: '6px', padding: '16px', textAlign: 'center' }}>
                    <span style={{ fontSize: '12px', color: '#736B65' }}>Further Inspection</span>
                    <div style={{ fontSize: '20px', fontWeight: 700, color: '#E0A138', marginTop: '4px' }}>
                      38 <span style={{ fontSize: '12px', fontWeight: 'normal', color: '#736B65' }}>32.8% of total</span>
                    </div>
                  </div>

                  <div style={{ border: '1px solid #E6DFD5', borderRadius: '6px', padding: '16px', textAlign: 'center' }}>
                    <span style={{ fontSize: '12px', color: '#736B65' }}>Significant Concerns</span>
                    <div style={{ fontSize: '20px', fontWeight: 700, color: '#A81C1C', marginTop: '4px' }}>
                      14 <span style={{ fontSize: '12px', fontWeight: 'normal', color: '#736B65' }}>12.0% of total</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RECENT ASSESSMENTS TABLE */}
              <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid #E6DFD5', padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ margin: 0, fontSize: '16px', color: '#2B1D16', fontWeight: 700 }}>Recent assessments</h3>
                  <button style={{ background: 'none', border: 'none', color: '#2B1D16', fontSize: '13px', cursor: 'pointer', fontWeight: 600 }}>
                    View all →
                  </button>
                </div>

                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ color: '#736B65', borderBottom: '1px solid #E6DFD5' }}>
                      <th style={{ padding: '12px 8px', fontWeight: 600 }}>ASSESSMENT ID</th>
                      <th style={{ padding: '12px 8px', fontWeight: 600 }}>BATCH ID</th>
                      <th style={{ padding: '12px 8px', fontWeight: 600 }}>SUPPLIER</th>
                      <th style={{ padding: '12px 8px', fontWeight: 600 }}>ASSESSED BY</th>
                      <th style={{ padding: '12px 8px', fontWeight: 600 }}>DATE</th>
                      <th style={{ padding: '12px 8px', fontWeight: 600 }}>GRADE</th>
                      <th style={{ padding: '12px 8px', fontWeight: 600 }}>RESULT</th>
                      <th style={{ padding: '12px 8px', fontWeight: 600 }}>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentAssessments.map((item, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid #F5F1EA' }}>
                        <td style={{ padding: '12px 8px', fontWeight: 700, color: '#2B1D16' }}>{item.id}</td>
                        <td style={{ padding: '12px 8px', color: '#736B65' }}>{item.batch}</td>
                        <td style={{ padding: '12px 8px', color: '#2B1D16' }}>{item.supplier}</td>
                        <td style={{ padding: '12px 8px', color: '#2B1D16' }}>{item.assessor}</td>
                        <td style={{ padding: '12px 8px', color: '#736B65' }}>{item.date}</td>
                        <td style={{ padding: '12px 8px', fontWeight: 700, color: '#2B1D16' }}>{item.grade}</td>
                        <td style={{ padding: '12px 8px' }}>
                          <span style={{
                            padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 500,
                            ...getResultBadgeStyle(item.result)
                          }}>
                            {item.result}
                          </span>
                        </td>
                        <td style={{ padding: '12px 8px', color: '#2E7D32', fontWeight: 500 }}>
                          • {item.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Table Pagination */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #E6DFD5', fontSize: '12px', color: '#736B65' }}>
                  <div>Showing <strong>1-6</strong> of <strong>116</strong> completed records</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button style={{ padding: '6px 12px', background: '#fff', border: '1px solid #E6DFD5', borderRadius: '4px', cursor: 'pointer', color: '#736B65' }}>Previous</button>
                    <span>Page 1 of 20</span>
                    <button style={{ padding: '6px 12px', background: '#fff', border: '1px solid #2B1D16', borderRadius: '4px', cursor: 'pointer', color: '#2B1D16', fontWeight: 600 }}>Next</button>
                  </div>
                </div>
              </div>

            </div>
          )}

          {activeTab === 'staff' && <StaffPage />}
          {activeTab === 'rules' && <RulesPage />}
          {activeTab === 'assessments' && (
            <div style={{ background: '#fff', padding: '24px', borderRadius: '8px', border: '1px solid #E6DFD5' }}>
              <h2 style={{ color: '#2B1D16' }}>Assessments Management</h2>
            </div>
          )}
          {activeTab === 'activity' && (
            <div style={{ background: '#fff', padding: '24px', borderRadius: '8px', border: '1px solid #E6DFD5' }}>
              <h2 style={{ color: '#2B1D16' }}>Activity Logs</h2>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}
