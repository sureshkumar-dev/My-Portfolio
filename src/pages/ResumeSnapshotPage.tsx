import React from 'react';
import { FileCheck2, User, Briefcase, Award } from 'lucide-react';
import { useAppStore } from '../store/AppContext';
import { technicalSkills } from '../data/technicalSkills';

interface ResumeSnapshotPageProps {
  onNavigate: (section: string, targetId?: string) => void;
}

export const ResumeSnapshotPage: React.FC<ResumeSnapshotPageProps> = ({ onNavigate }) => {
  const { state, calculateSkillProgress } = useAppStore();
  const profile = state.userProfile;

  const matchedSkills = profile.resumeSkills.map(rs => {
    const matched = technicalSkills.find(s => s.id === rs.skillId);
    if (!matched) {
      return {
        ...rs,
        percentage: 0,
        passedPhases: 0,
        phaseCount: 1,
        status: 'NEEDS REVISION'
      };
    }
    const { percentage, passedPhases } = calculateSkillProgress(matched);
    let status = 'NEEDS REVISION';
    if (percentage >= 80 && passedPhases >= matched.phaseCount) {
      status = 'INTERVIEW READY ✓';
    } else if (percentage >= 40) {
      status = 'IN PROGRESS';
    }
    return {
      ...rs,
      priority: matched.priority,
      phaseCount: matched.phaseCount,
      percentage,
      passedPhases,
      status
    };
  });

  const readyCount = matchedSkills.filter(s => s.status === 'INTERVIEW READY ✓').length;

  return (
    <div className="p-6 sm:p-8 lg:p-10 space-y-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center space-x-2">
          <span className="bg-indigo-50 text-indigo-700 border border-indigo-200 text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
            Resume Audit
          </span>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">
            Resume Snapshot & Interview Readiness Gap Analyzer
          </h1>
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Exposes dangerous gaps between what is claimed on <strong className="text-slate-800">SURESHKUMAR P</strong>&apos;s resume and actual verified task mastery.
        </p>
      </div>

      {/* RESUME CORE INFORMATION PROFILE CARD */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="flex items-center space-x-3.5">
            <div className="p-3.5 bg-indigo-50 rounded-2xl border border-indigo-200">
              <User className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900">{profile.name}</h2>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {profile.targetRole.map((role, i) => (
                  <span key={i} className="text-[10px] bg-slate-100 text-indigo-700 px-2.5 py-0.5 rounded-lg border border-slate-200 font-bold">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Verified Resume Skills</span>
            <p className="text-xl font-black text-indigo-600 font-mono">{readyCount} / {matchedSkills.length}</p>
          </div>
        </div>

        {/* Experience & Projects Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-2 text-[11px]">
              <Briefcase className="w-4 h-4 text-indigo-600" />
              <span>Resume Work Experience</span>
            </h3>
            <ul className="space-y-1.5 text-slate-700 font-medium">
              {profile.experience.map((exp, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>{exp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-2 text-[11px]">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Resume Flagship Projects</span>
            </h3>
            <ul className="space-y-1.5 text-slate-700 font-medium">
              {profile.projects.map((proj, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>{proj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* RESUME SKILL READINESS GAP AUDIT TABLE */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
        <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center space-x-2 border-b border-slate-200 pb-3">
          <FileCheck2 className="w-4 h-4 text-indigo-600" />
          <span>Resume Claim vs Interview Readiness Diagnostic</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider font-bold text-[10px]">
                <th className="pb-3 pl-2">Skill Name</th>
                <th className="pb-3">Resume Claim</th>
                <th className="pb-3">Confidence Score</th>
                <th className="pb-3">Phase Progress</th>
                <th className="pb-3">Interview Readiness</th>
                <th className="pb-3 text-right pr-2">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {matchedSkills.map(skill => (
                <tr key={skill.skillId} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 pl-2 font-bold text-slate-900">{skill.name}</td>
                  <td className="py-3.5">
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded">
                      CLAIMED
                    </span>
                  </td>
                  <td className="py-3.5 font-mono font-bold text-indigo-600">{skill.percentage}%</td>
                  <td className="py-3.5 text-slate-600 font-medium">
                    Phases: {skill.passedPhases} / {skill.phaseCount}
                  </td>
                  <td className="py-3.5">
                    <span
                      className={`text-[10px] font-extrabold px-2.5 py-1 rounded border ${
                        skill.status === 'INTERVIEW READY ✓'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : skill.status === 'IN PROGRESS'
                          ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                          : 'bg-amber-50 text-amber-800 border-amber-200'
                      }`}
                    >
                      {skill.status}
                    </span>
                  </td>
                  <td className="py-3.5 text-right pr-2">
                    <button
                      onClick={() => onNavigate('technical', skill.skillId)}
                      className="px-3 py-1 bg-slate-100 hover:bg-indigo-50 text-indigo-700 border border-slate-200 hover:border-indigo-300 rounded-lg text-[11px] font-bold transition-all"
                    >
                      Revise Skill
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
