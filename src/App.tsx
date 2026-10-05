import React, { useState } from 'react';
import { AppProvider } from './store/AppContext';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { TaskEvaluationModal } from './components/TaskEvaluationModal';

import { DashboardHome } from './pages/DashboardHome';
import { TechnicalSkillsPage } from './pages/TechnicalSkillsPage';
import { HighValueSkillsPage } from './pages/HighValueSkillsPage';
import { EnglishFluencyPage } from './pages/EnglishFluencyPage';
import { ProjectsResumePage } from './pages/ProjectsResumePage';
import { CodingPracticePage } from './pages/CodingPracticePage';
import { InterviewModePage } from './pages/InterviewModePage';
import { MockInterviewsPage } from './pages/MockInterviewsPage';
import { ResumeSnapshotPage } from './pages/ResumeSnapshotPage';
import { ProgressAnalyticsPage } from './pages/ProgressAnalyticsPage';
import { SettingsPage } from './pages/SettingsPage';

import type { PhaseTask } from './types';
import { technicalSkills } from './data/technicalSkills';
import { highValueSkills } from './data/highValueSkills';

const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Target ID for section deep linking
  const [targetId, setTargetId] = useState<string | undefined>(undefined);

  // Task Evaluation Modal State
  const [taskModalData, setTaskModalData] = useState<{
    task: PhaseTask;
    skillName: string;
    phaseNumber: number;
  } | null>(null);

  const handleNavigate = (section: string, target?: string) => {
    setActiveTab(section);
    setTargetId(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenTaskModal = (task: PhaseTask, skillName: string, phaseNumber: number) => {
    setTaskModalData({ task, skillName, phaseNumber });
  };

  const handleOpenTaskModalFromId = (skillId: string, phaseNum: number) => {
    const allSkills = [...technicalSkills, ...highValueSkills];
    const skill = allSkills.find(s => s.id === skillId);
    if (skill) {
      const phase = skill.phases.find(p => p.phaseNumber === phaseNum);
      if (phase) {
        setTaskModalData({ task: phase.task, skillName: skill.name, phaseNumber: phaseNum });
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Sidebar Shell */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Top Navbar Header */}
      <Navbar
        activeTab={activeTab}
        setMobileOpen={setMobileOpen}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Active Page Content View */}
      <main className="lg:pl-72 pb-16">
        {activeTab === 'dashboard' && (
          <DashboardHome
            onNavigate={handleNavigate}
            onOpenTaskModal={handleOpenTaskModalFromId}
          />
        )}
        {activeTab === 'technical' && (
          <TechnicalSkillsPage
            onOpenTaskModal={handleOpenTaskModal}
            targetSkillId={targetId}
          />
        )}
        {activeTab === 'high-value' && (
          <HighValueSkillsPage
            onOpenTaskModal={handleOpenTaskModal}
            targetSkillId={targetId}
          />
        )}
        {activeTab === 'english' && (
          <EnglishFluencyPage onOpenTaskModal={handleOpenTaskModal} />
        )}
        {activeTab === 'projects' && (
          <ProjectsResumePage
            onOpenTaskModal={handleOpenTaskModal}
            targetProjectId={targetId}
          />
        )}
        {activeTab === 'coding' && <CodingPracticePage />}
        {activeTab === 'interview' && <InterviewModePage />}
        {activeTab === 'mock-interviews' && <MockInterviewsPage />}
        {activeTab === 'resume-snapshot' && (
          <ResumeSnapshotPage onNavigate={handleNavigate} />
        )}
        {activeTab === 'analytics' && <ProgressAnalyticsPage />}
        {activeTab === 'settings' && <SettingsPage />}
      </main>

      {/* Modals */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      <TaskEvaluationModal
        isOpen={!!taskModalData}
        task={taskModalData?.task || null}
        skillName={taskModalData?.skillName || ''}
        phaseNumber={taskModalData?.phaseNumber || 1}
        onClose={() => setTaskModalData(null)}
      />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
