import React, { useState } from 'react';
import {
  Download,
  Upload,
  ShieldAlert,
  CheckCircle,
  Lock,
  Unlock,
  AlertTriangle
} from 'lucide-react';
import { useAppStore } from '../store/AppContext';
import { technicalSkills } from '../data/technicalSkills';
import { highValueSkills } from '../data/highValueSkills';

export const SettingsPage: React.FC = () => {
  const {
    state,
    updateSettings,
    exportProgress,
    importProgress,
    resetAllProgress,
    resetSkillProgress
  } = useAppStore();

  const [importJsonText, setImportJsonText] = useState('');
  const [importSuccess, setImportSuccess] = useState<boolean | null>(null);
  const [showFullResetModal, setShowFullResetModal] = useState(false);
  const [selectedResetSkillId, setSelectedResetSkillId] = useState<string>('');

  const allSkills = [...technicalSkills, ...highValueSkills];

  const handleImport = () => {
    if (!importJsonText.trim()) return;
    const success = importProgress(importJsonText);
    setImportSuccess(success);
    if (success) {
      setImportJsonText('');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = event => {
        const text = event.target?.result as string;
        if (text) {
          const success = importProgress(text);
          setImportSuccess(success);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="p-6 sm:p-8 lg:p-10 space-y-10 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center space-x-3">
          <span className="bg-indigo-50 text-indigo-700 border border-indigo-200 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            Configuration & Sync
          </span>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Dashboard Settings & Data Backup Engine
          </h1>
        </div>
        <p className="text-sm text-slate-600 mt-2">
          Manage local storage persistence, toggle phase progression locking, export JSON backups, and import previously saved progress.
        </p>
      </div>

      {/* ROADMAP PROGRESSION LOCKING SETTING */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-base font-extrabold text-slate-900 flex items-center space-x-2">
              {state.settings.strictPhaseLocking ? (
                <Lock className="w-5 h-5 text-amber-600" />
              ) : (
                <Unlock className="w-5 h-5 text-emerald-600" />
              )}
              <span>Intelligent Phase Progression Locking</span>
            </h3>
            <p className="text-xs text-slate-600">
              When enabled, Phase N tasks unlock only after Phase N-1 task is marked <strong className="text-emerald-700 font-bold">PASSED</strong>. Turn off to manually explore all phases.
            </p>
          </div>

          <button
            onClick={() => updateSettings({ strictPhaseLocking: !state.settings.strictPhaseLocking })}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm ${
              state.settings.strictPhaseLocking
                ? 'bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100'
                : 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
            }`}
          >
            {state.settings.strictPhaseLocking ? 'Locking ENABLED (Default)' : 'Locking DISABLED'}
          </button>
        </div>
      </div>

      {/* BACKUP & RESTORE SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* EXPORT PROGRESS */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-5">
          <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
            <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600">
              <Download className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
              Export Progress Backup (JSON)
            </h3>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Download your entire progress state (topic checklists, task pass states, notes, mock scores, and metrics) as a JSON file to prevent data loss.
          </p>
          <button
            onClick={exportProgress}
            className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-2 shadow-md shadow-indigo-600/10 transition-all"
          >
            <Download className="w-4 h-4 text-white" />
            <span>DOWNLOAD COMPLETE BACKUP JSON</span>
          </button>
        </div>

        {/* IMPORT PROGRESS */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-5">
          <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
            <div className="p-2 bg-cyan-50 rounded-xl text-cyan-600">
              <Upload className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
              Import Progress Backup
            </h3>
          </div>

          <div className="space-y-4">
            <label className="block text-xs font-bold text-slate-700">Upload JSON File:</label>
            <input
              type="file"
              accept=".json"
              onChange={handleFileUpload}
              className="text-xs text-slate-600 file:mr-3 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-slate-100 file:text-indigo-600 hover:file:bg-slate-200 cursor-pointer"
            />

            <div className="pt-2">
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Or Paste JSON Data:</label>
              <textarea
                value={importJsonText}
                onChange={e => setImportJsonText(e.target.value)}
                placeholder="Paste JSON string here..."
                rows={3}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 font-mono placeholder-slate-400 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <button
              onClick={handleImport}
              className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs border border-slate-200 transition-colors"
            >
              Restore Progress from Text
            </button>

            {importSuccess === true && (
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Progress successfully restored from backup!</span>
              </div>
            )}
            {importSuccess === false && (
              <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Invalid JSON backup file. Restore failed.</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SINGLE SKILL RESET & FULL DATA RESET DANGER ZONE */}
      <div className="bg-white border border-amber-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center space-x-3 border-b border-slate-100 pb-4 text-amber-600">
          <ShieldAlert className="w-5 h-5" />
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
            Reset & Safeguard Options
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Single Skill Reset */}
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
            <h4 className="text-xs font-bold text-slate-900">Reset Specific Skill Progress</h4>
            <p className="text-[11px] text-slate-500">Select a specific skill to wipe topic checkboxes and tasks without affecting other skills.</p>
            <div className="flex items-center space-x-2">
              <select
                value={selectedResetSkillId}
                onChange={e => setSelectedResetSkillId(e.target.value)}
                className="flex-1 bg-white border border-slate-200 text-xs text-slate-800 rounded-xl p-2.5 focus:outline-none focus:border-indigo-500"
              >
                <option value="">-- Select Skill --</option>
                {allSkills.map(s => (
                  <option key={s.id} value={s.id}>{s.name} ({s.priority})</option>
                ))}
              </select>
              <button
                disabled={!selectedResetSkillId}
                onClick={() => {
                  if (selectedResetSkillId) {
                    resetSkillProgress(selectedResetSkillId);
                    setSelectedResetSkillId('');
                  }
                }}
                className="px-4 py-2.5 bg-amber-100 hover:bg-amber-200 text-amber-800 border border-amber-200 rounded-xl text-xs font-bold disabled:opacity-50 transition-colors"
              >
                Reset Skill
              </button>
            </div>
          </div>

          {/* Full Dashboard Reset */}
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
            <h4 className="text-xs font-bold text-rose-600">Reset Complete Dashboard</h4>
            <p className="text-[11px] text-slate-500">Completely wipe all stored progress from local storage and return to fresh initial state.</p>
            <button
              onClick={() => setShowFullResetModal(true)}
              className="w-full py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-xl text-xs font-bold transition-colors"
            >
              RESET ALL DASHBOARD PROGRESS...
            </button>
          </div>
        </div>
      </div>

      {/* Full Reset Confirmation Modal */}
      {showFullResetModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 max-w-md w-full space-y-4">
            <h3 className="text-base font-bold text-rose-600 flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5" />
              <span>Confirm Full Reset?</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Are you sure you want to reset ALL dashboard progress? This will permanently delete topic checkboxes, task statuses, notes, and mock interview scores.
            </p>
            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                onClick={() => setShowFullResetModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  resetAllProgress();
                  setShowFullResetModal(false);
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-sm"
              >
                Yes, Reset Everything
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
