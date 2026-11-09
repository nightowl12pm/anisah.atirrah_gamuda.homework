// import React from 'react';
// import { LayoutDashboard, FileText, Users, Sliders, Activity, LogOut } from 'lucide-react';
// import './Sidebar.css';

// export default function Sidebar({ activeTab, setActiveTab, onLoGout }) {
//   const menuItems = [
//     { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
//     { id: 'assessments', label: 'Assessments', icon: FileText },
//     { id: 'staff', label: 'Staff', icon: Users },
//     { id: 'rules', label: 'Assessment Rules', icon: Sliders },
//     { id: 'logs', label: 'Activity Logs', icon: Activity },
//   ];

//   return (
//     <aside className="sidebar">
//       <div className="sidebar-brand">
//         <div className="brand-icon">🍫</div>
//         <div>
//           <h2>CocoaCheck<br />Sabah</h2>
//           <span className="badge-admin">Admin</span>
//         </div>
//       </div>

//       <nav className="sidebar-nav">
//         {menuItems.map((item) => {
//           const Icon = item.icon;
//           const isActive = activeTab === item.id;
//           return (
//             <button
//               key={item.id}
//               onClick={() => setActiveTab(item.id)}
//               className={`nav-item ${isActive ? 'active' : ''}`}
//               style={{ background: 'none', border: 'none', width: '100%', cursor: 'pointer', textAlign: 'left' }}
//             >
//               <Icon size={18} /> {item.label}
//             </button>
//           );
//         })}
//       </nav>

//       <div className="sidebar-footer">
//         <button className="logout-btn">
//           <LogOut size={16} /> Logout
//         </button>
//       </div>
//     </aside>
//   );
// }

import React from 'react';
import { LayoutDashboard, FileText, Users, Sliders, Activity, LogOut } from 'lucide-react';
import './Sidebar.css';

export default function Sidebar({ activeTab, setActiveTab, onLogout }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'assessments', label: 'Assessments', icon: FileText },
    { id: 'staff', label: 'Staff', icon: Users },
    { id: 'rules', label: 'Assessment Rules', icon: Sliders },
    { id: 'logs', label: 'Activity Logs', icon: Activity },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-icon">🍫</div>
        <div>
          <h2>CocoaCheck<br />Sabah</h2>
          <span className="badge-admin">Admin</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`nav-item ${isActive ? 'active' : ''}`}
              style={{ background: 'none', border: 'none', width: '100%', cursor: 'pointer', textAlign: 'left' }}
            >
              <Icon size={18} /> {item.label}
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn" onClick={onLogout}>
          <LogOut size={16} /> Logout
        </button>
      </div>
    </aside>
  );
}