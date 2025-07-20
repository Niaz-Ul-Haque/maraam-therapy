import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit, Trash2, Calendar, ExternalLink, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { supabase, type BlogPost } from '../../lib/supabase';
import SEO from '../../components/SEO';

const AdminDashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching posts:', error);
        setError('Failed to load posts');
      } else {
        setPosts(data || []);
      }
    } catch (error) {
      console.error('Error in fetchPosts:', error);
      setError('Failed to load posts');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (postId: string) => {
    if (deleteConfirm !== postId) {
      setDeleteConfirm(postId);
      return;
    }

    try {
      const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', postId);

      if (error) {
        console.error('Error deleting post:', error);
        setError('Failed to delete post');
      } else {
        setPosts(posts.filter(post => post.id !== postId));
        setDeleteConfirm(null);
      }
    } catch (error) {
      console.error('Error in handleDelete:', error);
      setError('Failed to delete post');
    }
  };

  const handleSignOut = async () => {
    await signOut();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-CA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <>
      <SEO
        title="Admin Dashboard"
        description="Admin dashboard for managing blog posts"
      />
      
      <div className="min-h-screen bg-stone-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-4">
                <Link
                  to="/"
                  className="text-xl font-serif font-semibold text-sage-700 hover:text-sage-800 transition-colors duration-200"
                >
                  Maraam Haque
                </Link>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">Admin Dashboard</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  Welcome, {user?.email}
                </span>
                <button
                  onClick={handleSignOut}
                  className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-serif font-bold text-gray-900">
                  Blog Posts
                </h1>
                <p className="text-gray-600 mt-1">
                  Manage your insights and educational content
                </p>
              </div>
              
              <Link
                to="/me/admin/create"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Plus size={20} aria-hidden="true" />
                Create New Post
              </Link>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-red-700 font-medium">Error</p>
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            </div>
          )}

          {/* Posts List */}
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm border border-stone-200 p-6 animate-pulse">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="h-6 bg-stone-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-stone-200 rounded w-1/2"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-8 w-16 bg-stone-200 rounded"></div>
                      <div className="h-8 w-16 bg-stone-200 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <div className="card max-w-md mx-auto">
                <div className="text-gray-400 mb-4">
                  <Calendar size={48} className="mx-auto" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">
                  No Posts Yet
                </h3>
                <p className="text-gray-600 mb-6">
                  Start sharing your insights by creating your first blog post.
                </p>
                <Link
                  to="/me/admin/create"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Plus size={20} aria-hidden="true" />
                  Create Your First Post
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow-sm border border-stone-200 p-6 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2 truncate">
                            {post.title}
                          </h3>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar size={16} aria-hidden="true" />
                              <span>{formatDate(post.created_at)}</span>
                            </div>
                            
                            <span className="text-gray-400">•</span>
                            
                            <a
                              href={`/blog/${post.slug}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-sage-600 hover:text-sage-700 transition-colors duration-200"
                            >
                              <ExternalLink size={16} aria-hidden="true" />
                              <span>View Live</span>
                            </a>
                          </div>
                          
                          <p className="text-gray-700 text-sm line-clamp-2">
                            {post.content.substring(0, 150)}...
                          </p>
                        </div>

                        {post.image_url && (
                          <img
                            src={post.image_url}
                            alt=""
                            className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                          />
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 ml-4">
                      <Link
                        to={`/me/admin/edit/${post.id}`}
                        className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-sage-600 hover:text-sage-700 hover:bg-sage-50 rounded-md transition-colors duration-200"
                        aria-label={`Edit ${post.title}`}
                      >
                        <Edit size={16} aria-hidden="true" />
                        <span className="hidden sm:inline">Edit</span>
                      </Link>
                      
                      <button
                        onClick={() => handleDelete(post.id)}
                        className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                          deleteConfirm === post.id
                            ? 'text-white bg-red-600 hover:bg-red-700'
                            : 'text-red-600 hover:text-red-700 hover:bg-red-50'
                        }`}
                        aria-label={deleteConfirm === post.id ? `Confirm delete ${post.title}` : `Delete ${post.title}`}
                      >
                        <Trash2 size={16} aria-hidden="true" />
                        <span className="hidden sm:inline">
                          {deleteConfirm === post.id ? 'Confirm' : 'Delete'}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Quick Links */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/blog"
              className="card hover:shadow-lg transition-shadow duration-300 text-center group"
            >
              <div className="text-sage-600 mb-3">
                <ExternalLink size={32} className="mx-auto" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-gray-900 group-hover:text-sage-700 transition-colors">
                View Public Blog
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                See how your posts appear to visitors
              </p>
            </Link>

            <Link
              to="/"
              className="card hover:shadow-lg transition-shadow duration-300 text-center group"
            >
              <div className="text-teal-600 mb-3">
                <ExternalLink size={32} className="mx-auto" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">
                View Main Site
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Go to the public homepage
              </p>
            </Link>

            <a
              href="https://healingpaththerapy.janeapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card hover:shadow-lg transition-shadow duration-300 text-center group"
            >
              <div className="text-terracotta-600 mb-3">
                <Calendar size={32} className="mx-auto" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-gray-900 group-hover:text-terracotta-700 transition-colors">
                Booking Platform
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Manage appointments on JaneApp
              </p>
            </a>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;