import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { projectsAPI, contactAPI } from '../services/api';
import toast from 'react-hot-toast';
import {
  FaHome,
  FaProjectDiagram,
  FaEnvelope,
  FaSignOutAlt,
  FaPlus,
  FaTrash,
  FaEdit,
  FaTimes,
  FaCheck,
  FaChartBar,
  FaEye,
} from 'react-icons/fa';

function StatCard({ icon: Icon, label, value, color }) {
  const { isDark } = useTheme();
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="card p-5"
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center`}
          style={{ backgroundColor: `${color}15`, color }}
        >
          <Icon size={20} />
        </div>
        <div>
          <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-dark-800'}`}>
            {value}
          </p>
          <p className={`text-xs font-medium ${isDark ? 'text-dark-400' : 'text-dark-500'}`}>
            {label}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AdminDashboard() {
  const { isDark } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState({ totalProjects: 0, totalMessages: 0, unreadMessages: 0 });
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [projectForm, setProjectForm] = useState({
    title: '', description: '', longDescription: '', techStack: '',
    liveUrl: '', githubUrl: '', category: 'Full Stack', featured: false,
  });

  // Fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [statsRes, projectsRes, messagesRes] = await Promise.all([
        contactAPI.getStats(),
        projectsAPI.getAll(),
        contactAPI.getAll(),
      ]);
      setStats(statsRes.data.data);
      setProjects(projectsRes.data.data);
      setMessages(messagesRes.data.data);
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
    toast.success('Logged out successfully');
  };

  // Project CRUD
  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.entries(projectForm).forEach(([key, value]) => {
        if (key === 'techStack') {
          formData.append(key, JSON.stringify(value.split(',').map(s => s.trim()).filter(Boolean)));
        } else {
          formData.append(key, value);
        }
      });

      if (editingProject) {
        await projectsAPI.update(editingProject._id, formData);
        toast.success('Project updated!');
      } else {
        await projectsAPI.create(formData);
        toast.success('Project created!');
      }
      resetProjectForm();
      fetchData();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to save project');
    }
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setProjectForm({
      title: project.title,
      description: project.description,
      longDescription: project.longDescription || '',
      techStack: project.techStack.join(', '),
      liveUrl: project.liveUrl || '',
      githubUrl: project.githubUrl || '',
      category: project.category,
      featured: project.featured,
    });
    setShowProjectForm(true);
  };

  const handleDeleteProject = async (id) => {
    if (!confirm('Delete this project?')) return;
    try {
      await projectsAPI.delete(id);
      toast.success('Project deleted');
      fetchData();
    } catch (error) {
      toast.error('Failed to delete');
    }
  };

  const resetProjectForm = () => {
    setShowProjectForm(false);
    setEditingProject(null);
    setProjectForm({
      title: '', description: '', longDescription: '', techStack: '',
      liveUrl: '', githubUrl: '', category: 'Full Stack', featured: false,
    });
  };

  // Messages
  const handleMarkRead = async (id) => {
    try {
      await contactAPI.markAsRead(id);
      fetchData();
    } catch (error) {
      toast.error('Failed to update');
    }
  };

  const handleDeleteMessage = async (id) => {
    if (!confirm('Delete this message?')) return;
    try {
      await contactAPI.delete(id);
      toast.success('Message deleted');
      fetchData();
    } catch (error) {
      toast.error('Failed to delete');
    }
  };

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: FaChartBar },
    { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
    { id: 'messages', label: 'Messages', icon: FaEnvelope },
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-dark-950' : 'bg-dark-50'}`}>
      {/* Top Bar */}
      <div className={`glass sticky top-0 z-30 border-b ${isDark ? 'border-dark-800' : 'border-dark-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <h1 className="text-lg font-bold gradient-text font-[var(--font-display)]">
            Admin Dashboard
          </h1>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className={`p-2 rounded-lg text-sm ${
                isDark ? 'text-dark-400 hover:text-white' : 'text-dark-500 hover:text-dark-800'
              }`}
            >
              <FaHome size={16} />
            </Link>
            <span className={`text-sm font-medium ${isDark ? 'text-dark-300' : 'text-dark-600'}`}>
              {user?.name}
            </span>
            <button onClick={handleLogout} className="btn-outline text-xs py-2 px-3">
              <FaSignOutAlt size={12} />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : isDark
                  ? 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                  : 'bg-white text-dark-600 hover:bg-dark-100'
              }`}
            >
              <tab.icon size={14} />
              {tab.label}
              {tab.id === 'messages' && stats.unreadMessages > 0 && (
                <span className="bg-error text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {stats.unreadMessages}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <StatCard icon={FaProjectDiagram} label="Total Projects" value={stats.totalProjects} color="#6366f1" />
              <StatCard icon={FaEnvelope} label="Total Messages" value={stats.totalMessages} color="#10b981" />
              <StatCard icon={FaEye} label="Unread Messages" value={stats.unreadMessages} color="#f59e0b" />
            </div>
            <div className="card p-6">
              <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-dark-800'}`}>
                Welcome back, {user?.name}! 👋
              </h3>
              <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-dark-500'}`}>
                Manage your portfolio projects and view messages from the dashboard.
              </p>
            </div>
          </motion.div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-dark-800'}`}>
                Projects ({projects.length})
              </h2>
              <button
                onClick={() => { resetProjectForm(); setShowProjectForm(true); }}
                className="btn-primary text-sm"
              >
                <FaPlus size={12} /> Add Project
              </button>
            </div>

            {/* Project Form */}
            <AnimatePresence>
              {showProjectForm && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="card p-6 mb-6 overflow-hidden"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className={`font-bold ${isDark ? 'text-white' : 'text-dark-800'}`}>
                      {editingProject ? 'Edit Project' : 'New Project'}
                    </h3>
                    <button onClick={resetProjectForm} className={`${isDark ? 'text-dark-400' : 'text-dark-500'}`}>
                      <FaTimes />
                    </button>
                  </div>
                  <form onSubmit={handleProjectSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        value={projectForm.title}
                        onChange={(e) => setProjectForm(p => ({ ...p, title: e.target.value }))}
                        placeholder="Project Title"
                        className="input"
                        required
                      />
                      <select
                        value={projectForm.category}
                        onChange={(e) => setProjectForm(p => ({ ...p, category: e.target.value }))}
                        className="input"
                      >
                        {['Frontend', 'Backend', 'Full Stack', 'Mobile', 'AI/ML', 'Other'].map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <input
                      value={projectForm.description}
                      onChange={(e) => setProjectForm(p => ({ ...p, description: e.target.value }))}
                      placeholder="Short Description"
                      className="input"
                      required
                    />
                    <textarea
                      value={projectForm.longDescription}
                      onChange={(e) => setProjectForm(p => ({ ...p, longDescription: e.target.value }))}
                      placeholder="Detailed Description"
                      className="input resize-none"
                      rows={3}
                    />
                    <input
                      value={projectForm.techStack}
                      onChange={(e) => setProjectForm(p => ({ ...p, techStack: e.target.value }))}
                      placeholder="Tech Stack (comma-separated: React, Node.js, MongoDB)"
                      className="input"
                      required
                    />
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        value={projectForm.liveUrl}
                        onChange={(e) => setProjectForm(p => ({ ...p, liveUrl: e.target.value }))}
                        placeholder="Live Demo URL"
                        className="input"
                      />
                      <input
                        value={projectForm.githubUrl}
                        onChange={(e) => setProjectForm(p => ({ ...p, githubUrl: e.target.value }))}
                        placeholder="GitHub URL"
                        className="input"
                      />
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={projectForm.featured}
                        onChange={(e) => setProjectForm(p => ({ ...p, featured: e.target.checked }))}
                        className="w-4 h-4 rounded"
                      />
                      <span className={`text-sm font-medium ${isDark ? 'text-dark-300' : 'text-dark-600'}`}>
                        Featured Project
                      </span>
                    </label>
                    <div className="flex gap-3">
                      <button type="submit" className="btn-primary text-sm">
                        <FaCheck size={12} />
                        {editingProject ? 'Update' : 'Create'}
                      </button>
                      <button type="button" onClick={resetProjectForm} className="btn-outline text-sm">
                        Cancel
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Projects List */}
            <div className="space-y-3">
              {projects.map((project) => (
                <motion.div key={project._id} layout className="card p-4 flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-dark-800'}`}>
                        {project.title}
                      </h4>
                      <span className="badge badge-primary text-[10px]">{project.category}</span>
                      {project.featured && (
                        <span className="badge bg-amber-500/10 text-amber-500 text-[10px]">⭐ Featured</span>
                      )}
                    </div>
                    <p className={`text-xs mt-1 truncate ${isDark ? 'text-dark-400' : 'text-dark-500'}`}>
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={() => handleEditProject(project)}
                      className={`p-2 rounded-lg transition-colors ${
                        isDark ? 'hover:bg-dark-700 text-dark-400' : 'hover:bg-dark-100 text-dark-500'
                      }`}
                    >
                      <FaEdit size={14} />
                    </button>
                    <button
                      onClick={() => handleDeleteProject(project._id)}
                      className="p-2 rounded-lg text-error hover:bg-error/10 transition-colors"
                    >
                      <FaTrash size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
              {projects.length === 0 && (
                <div className={`text-center py-12 text-sm ${isDark ? 'text-dark-500' : 'text-dark-400'}`}>
                  No projects yet. Click "Add Project" to get started.
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-dark-800'}`}>
              Messages ({messages.length})
            </h2>
            <div className="space-y-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg._id}
                  layout
                  className={`card p-5 ${!msg.read ? (isDark ? 'border-primary-500/30' : 'border-primary-300') : ''}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-dark-800'}`}>
                          {msg.name}
                        </h4>
                        {!msg.read && (
                          <span className="w-2 h-2 rounded-full bg-primary-500" />
                        )}
                      </div>
                      <p className={`text-xs mb-1 ${isDark ? 'text-primary-400' : 'text-primary-600'}`}>
                        {msg.email}
                      </p>
                      {msg.subject && (
                        <p className={`text-xs font-medium mb-2 ${isDark ? 'text-dark-300' : 'text-dark-600'}`}>
                          {msg.subject}
                        </p>
                      )}
                      <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-dark-500'}`}>
                        {msg.message}
                      </p>
                      <p className={`text-[10px] mt-2 ${isDark ? 'text-dark-600' : 'text-dark-400'}`}>
                        {new Date(msg.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
                        })}
                      </p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      {!msg.read && (
                        <button
                          onClick={() => handleMarkRead(msg._id)}
                          className={`p-2 rounded-lg transition-colors ${
                            isDark ? 'hover:bg-dark-700 text-dark-400' : 'hover:bg-dark-100 text-dark-500'
                          }`}
                          title="Mark as read"
                        >
                          <FaCheck size={12} />
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteMessage(msg._id)}
                        className="p-2 rounded-lg text-error hover:bg-error/10 transition-colors"
                      >
                        <FaTrash size={12} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
              {messages.length === 0 && (
                <div className={`text-center py-12 text-sm ${isDark ? 'text-dark-500' : 'text-dark-400'}`}>
                  No messages yet.
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
