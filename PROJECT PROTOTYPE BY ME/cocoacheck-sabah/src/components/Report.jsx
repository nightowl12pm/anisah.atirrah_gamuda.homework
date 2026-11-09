import React from 'react';
import { ArrowLeft, Download, AlertTriangle, CheckCircle2, FileText } from 'lucide-react';

export default function Report({ onBack }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Top Breadcrumb & Actions */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontSize: '13px', color: '#736b65', marginBottom: '6px' }}>
            Assessments &gt; <span style={{ color: '#2B1D16', fontWeight: 600 }}>A-0046</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <h1 style={{ margin: 0, color: '#2B1D16', fontSize: '26px', fontWeight: 'bold' }}>A-0046</h1>
            <span style={{ fontSize: '11px', background: '#e6dfd5', color: '#595048', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' }}>
              READ-ONLY
            </span>
          </div>
          <p style={{ margin: '4px 0 0 0', color: '#736b65', fontSize: '13px' }}>
            Assessed by <strong>Ahmad Zulkifli</strong> • Completed on 01/10/2026, 10:42
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={onBack}
            style={{
              background: '#fff', border: '1px solid #e6dfd5', padding: '8px 16px',
              borderRadius: '6px', fontWeight: 600, cursor: 'pointer', fontSize: '13px',
              display: 'flex', alignItems: 'center', gap: '6px', color: '#2B1D16'
            }}
          >
            <ArrowLeft size={16} /> Back to Assessments
          </button>
          <button style={{
            background: '#5A3825', color: '#fff', border: 'none', padding: '8px 16px',
            borderRadius: '6px', fontWeight: 600, cursor: 'pointer', fontSize: '13px',
            display: 'flex', alignItems: 'center', gap: '6px'
          }}>
            <Download size={16} /> Download PDF
          </button>
        </div>
      </div>

      {/* Indicative Grade Card */}
      <div style={{
        background: '#fff', borderRadius: '8px', border: '1px solid #e6dfd5', padding: '24px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{
            width: '64px', height: '64px', background: '#5A3825', color: '#fff',
            borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '32px', fontWeight: 'bold'
          }}>
            B
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#946900', fontWeight: 'bold', fontSize: '16px' }}>
              <AlertTriangle size={20} /> Further Inspection Recommended
            </div>
            <div style={{ fontSize: '13px', color: '#2B1D16', marginTop: '4px' }}>
              Next action: Proceed with formal quality assessment before accepting this batch.
            </div>
            <div style={{ fontSize: '12px', color: '#736b65', marginTop: '2px' }}>
              Based on bean count, moisture and AI visual screening. Not an official grade.
            </div>
          </div>
        </div>
        <div>
          <button style={{
            background: '#FDF6E2', color: '#946900', border: '1px solid #fae3b0',
            padding: '8px 16px', borderRadius: '6px', fontWeight: 'bold', fontSize: '12px',
            display: 'flex', alignItems: 'center', gap: '6px'
          }}>
            ! INSPECTION REQUIRED
          </button>
        </div>
      </div>

      {/* Batch Information Section */}
      <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid #e6dfd5', padding: '20px 24px' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '12px', color: '#736b65', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Batch</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          <div>
            <div style={{ fontSize: '12px', color: '#736b65' }}>Batch ID</div>
            <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#2B1D16', marginTop: '4px' }}>CB-046</div>
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#736b65' }}>Supplier</div>
            <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#2B1D16', marginTop: '4px' }}>Koperasi Pekebun Koko Tawau</div>
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#736b65' }}>Assessment date</div>
            <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#2B1D16', marginTop: '4px' }}>01/10/2026</div>
          </div>
        </div>
      </div>

      {/* Quality Findings & Measurements Section */}
      <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid #e6dfd5', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ margin: 0, fontSize: '12px', color: '#736b65', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Quality Findings & Measurements</h3>
          <span style={{ fontSize: '12px', color: '#736b65' }}>Inspection standard: SBC-Q-2024</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'flex-start' }}>
          {/* AI Scan Image Box */}
          <div style={{ border: '1px solid #e6dfd5', borderRadius: '8px', padding: '12px', background: '#faf6f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', fontSize: '13px', fontWeight: 600, color: '#2B1D16' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>📷 Sample Tray Image (AI Scan)</span>
              <label style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked /> Show detections
              </label>
            </div>
            
            {/* Mock Image container with AI bounding boxes */}
            <div style={{
              width: '100%', height: '220px', background: '#d5c7b8', borderRadius: '6px',
              position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden', border: '1px solid #c7bbb3'
            }}>
              {/* Simulated AI bounding box markers */}
              <div style={{ position: 'absolute', top: '30px', left: '40px', border: '2px solid #4ade80', background: 'rgba(74, 222, 128, 0.2)', padding: '2px 6px', fontSize: '10px', color: '#fff', fontWeight: 'bold' }}>normal</div>
              <div style={{ position: 'absolute', top: '70px', left: '150px', border: '2px solid #4ade80', background: 'rgba(74, 222, 128, 0.2)', padding: '2px 6px', fontSize: '10px', color: '#fff', fontWeight: 'bold' }}>normal</div>
              <div style={{ position: 'absolute', top: '40px', right: '50px', border: '2px solid #f97316', background: 'rgba(249, 115, 22, 0.2)', padding: '2px 6px', fontSize: '10px', color: '#fff', fontWeight: 'bold' }}>potential defect</div>
              <div style={{ position: 'absolute', bottom: '40px', left: '60px', border: '2px solid #f97316', background: 'rgba(249, 115, 22, 0.2)', padding: '2px 6px', fontSize: '10px', color: '#fff', fontWeight: 'bold' }}>potential defect</div>
              <span style={{ color: '#595048', fontSize: '12px', fontWeight: 500, zIndex: 2, background: 'rgba(250,246,240,0.8)', padding: '4px 8px', borderRadius: '4px' }}>Cocoa Bean Tray Scan Result</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', fontSize: '12px', color: '#736b65' }}>
              <span>AI visual screening · 105 beans · 3 flagged · 87% confidence</span>
              <span style={{ background: '#e6dfd5', padding: '2px 6px', borderRadius: '4px', fontSize: '11px', color: '#2B1D16', fontWeight: 600 }}>AI-generated</span>
            </div>
          </div>

          {/* Table Data */}
          <div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ color: '#736b65', borderBottom: '1px solid #e6dfd5', fontSize: '11px', textTransform: 'uppercase' }}>
                  <th style={{ padding: '8px 10px', textAlign: 'left' }}>Check</th>
                  <th style={{ padding: '8px 10px', textAlign: 'right' }}>Value</th>
                  <th style={{ padding: '8px 10px', textAlign: 'right' }}>Limit</th>
                  <th style={{ padding: '8px 10px', textAlign: 'right' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #f2ede4' }}>
                  <td style={{ padding: '12px 10px', fontWeight: 500 }}>Moisture content</td>
                  <td style={{ padding: '12px 10px', textAlign: 'right' }}>7.2 %</td>
                  <td style={{ padding: '12px 10px', textAlign: 'right', color: '#736b65' }}>&lt; 7.5 %</td>
                  <td style={{ padding: '12px 10px', textAlign: 'right' }}>
                    <span style={{ color: '#276735', fontSize: '12px', fontWeight: 500 }}>✔ Within limit</span>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f2ede4' }}>
                  <td style={{ padding: '12px 10px', fontWeight: 500 }}>Bean count per 100 g</td>
                  <td style={{ padding: '12px 10px', textAlign: 'right' }}>105</td>
                  <td style={{ padding: '12px 10px', textAlign: 'right', color: '#736b65' }}>95 - 110</td>
                  <td style={{ padding: '12px 10px', textAlign: 'right' }}>
                    <span style={{ color: '#276735', fontSize: '12px', fontWeight: 500 }}>✔ Within limit</span>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f2ede4' }}>
                  <td style={{ padding: '12px 10px', fontWeight: 500 }}>Foreign matter</td>
                  <td style={{ padding: '12px 10px', textAlign: 'right' }}>0.5 %</td>
                  <td style={{ padding: '12px 10px', textAlign: 'right', color: '#736b65' }}>&lt; 1.0 %</td>
                  <td style={{ padding: '12px 10px', textAlign: 'right' }}>
                    <span style={{ color: '#276735', fontSize: '12px', fontWeight: 500 }}>✔ Within limit</span>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f2ede4' }}>
                  <td style={{ padding: '12px 10px', fontWeight: 500 }}>Visible defects (AI)</td>
                  <td style={{ padding: '12px 10px', textAlign: 'right', color: '#946900', fontWeight: 'bold' }}>3 beans</td>
                  <td style={{ padding: '12px 10px', textAlign: 'right', color: '#736b65' }}>0 beans</td>
                  <td style={{ padding: '12px 10px', textAlign: 'right' }}>
                    <span style={{ color: '#946900', fontSize: '12px', fontWeight: 'bold' }}>⚠ Flagged</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '14px', fontSize: '11px', color: '#736b65' }}>
              <span>Standard moisture testing protocol: ISO 2291:1980</span>
              <span>Tolerance: ±0.1%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Field & Assessment Notes */}
      <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid #e6dfd5', padding: '20px 24px' }}>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '12px', color: '#736b65', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Field & Assessment Notes</h3>
        <p style={{ margin: 0, fontSize: '14px', color: '#2B1D16' }}>Sample from weekly delivery, beans appear evenly dried.</p>
      </div>

      {/* Audit Information */}
      <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid #e6dfd5', padding: '20px 24px' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '12px', color: '#736b65', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Audit Information</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', fontSize: '13px' }}>
          <div>
            <div style={{ color: '#736b65' }}>Created</div>
            <div style={{ fontWeight: 600, marginTop: '2px' }}>01/10/2026 10:21</div>
          </div>
          <div>
            <div style={{ color: '#736b65' }}>Confirmed</div>
            <div style={{ fontWeight: 600, marginTop: '2px' }}>01/10/2026 10:42</div>
          </div>
          <div>
            <div style={{ color: '#736b65' }}>Rule version</div>
            <div style={{ fontWeight: 600, marginTop: '2px' }}>v1.2</div>
          </div>
          <div>
            <div style={{ color: '#736b65' }}>AI model version</div>
            <div style={{ fontWeight: 600, marginTop: '2px' }}>cocoa-yolo-v1</div>
          </div>
        </div>
      </div>

      {/* Footer copyright */}
      <div style={{ textAlign: 'center', fontSize: '12px', color: '#736b65', paddingBottom: '10px' }}>
        CocoaCheck Sabah · Sabah Cocoa Board (Lembaga Koko Malaysia) Quality Assurance Operations · Read-only system archive
      </div>
    </div>
  );
}