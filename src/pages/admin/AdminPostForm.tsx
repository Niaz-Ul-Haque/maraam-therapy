import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ArrowLeft, Save, Upload, X, AlertCircle, Eye } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { supabase, BlogPost, createSlug, uploadBlogImage, deleteBlogImage } from '../../lib/supabase';
import SEO from '../../components/SEO';
import AdminLayout from '../../components/AdminLayout';

interface PostFormData {
  title: string;
  content: string;
  image?: FileList;
}

const AdminPostForm: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(!!postId);
  const [error, setError] = useState<string | null>(null);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const isEditing = !!postId;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm<PostFormData>();

  const watchedTitle = watch('title', '');
  const watchedContent = watch('content', '');

  useEffect(() => {
    if (isEditing && postId) {
      fetchPost(postId);
    } else {
      setLoading(false);
    }
  }, [isEditing, postId]);

  const fetchPost = async (id: string) => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching post:', error);
        setError('Post not found');
        return;
      }

      setPost(data);
      setValue('title', data.title);
      setValue('content', data.content);
      
      if (data.image_url) {
        setImagePreview(data.image_url);
      }
    } catch (error) {
      console.error('Error in fetchPost:', error);
      setError('Failed to load post');
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    // Reset the file input
    const fileInput = document.getElementById('image') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const onSubmit = async (data: PostFormData) => {
    if (!user) {
      setError('You must be logged in to save posts');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const slug = createSlug(data.title);
      let imageUrl = post?.image_url || null;
      let oldImageUrl = post?.image_url || null;

      // Handle image upload
      if (data.image && data.image.length > 0) {
        const tempId = isEditing ? postId! : crypto.randomUUID();
        const uploadedUrl = await uploadBlogImage(data.image[0], tempId);
        if (uploadedUrl) {
          imageUrl = uploadedUrl;
        }
      }

      const postData = {
        title: data.title,
        slug,
        content: data.content,
        image_url: imageUrl,
        user_id: user.id
      };

      if (isEditing && postId) {
        // Update existing post
        const { error } = await supabase
          .from('posts')
          .update(postData)
          .eq('id', postId);

        if (error) {
          console.error('Error updating post:', error);
          setError('Failed to update post');
          return;
        }

        // If we uploaded a new image and there was an old one, delete the old image
        if (imageUrl && oldImageUrl && imageUrl !== oldImageUrl) {
          const oldImageDeleted = await deleteBlogImage(oldImageUrl);
          if (!oldImageDeleted) {
            console.warn('Failed to delete old image, but post was updated successfully');
          }
        }
      } else {
        // Create new post
        const { error } = await supabase
          .from('posts')
          .insert([postData]);

        if (error) {
          console.error('Error creating post:', error);
          setError('Failed to create post');
          return;
        }
      }

      // Navigate to dashboard on success
      navigate('/me/admin/dashboard');
    } catch (error) {
      console.error('Error in onSubmit:', error);
      setError('An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate('/me/admin/dashboard');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sage-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading post...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={isEditing ? 'Edit Post' : 'Create New Post'}
        description={isEditing ? 'Edit blog post' : 'Create a new blog post'}
      />
      
      <AdminLayout>
        {/* Header Bar */}
        <div className="bg-white border-b border-stone-200 px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link
                to="/me/admin/dashboard"
                className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium transition-colors duration-200"
              >
                <ArrowLeft size={20} aria-hidden="true" />
                <span className="hidden sm:inline">Back to Dashboard</span>
                <span className="sm:hidden">Back</span>
              </Link>
              
              <div className="border-l border-gray-300 pl-4">
                <h1 className="text-xl lg:text-2xl font-serif font-bold text-gray-900">
                  {isEditing ? 'Edit Post' : 'Create New Post'}
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setShowPreview(!showPreview)}
                className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                <Eye size={16} aria-hidden="true" />
                {showPreview ? 'Hide Preview' : 'Show Preview'}
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div className="max-w-7xl mx-auto">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-700 font-medium">Error</p>
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              </div>
            )}

            <div className={`grid gap-6 lg:gap-8 ${showPreview ? 'grid-cols-1 xl:grid-cols-2' : 'grid-cols-1'}`}>
              {/* Form */}
              <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-4 lg:p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Title */}
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Post Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-colors duration-200 ${
                      errors.title ? 'border-red-300' : 'border-gray-300'
                    }`}
                    {...register('title', {
                      required: 'Title is required',
                      minLength: {
                        value: 3,
                        message: 'Title must be at least 3 characters'
                      }
                    })}
                    aria-invalid={errors.title ? 'true' : 'false'}
                  />
                  {errors.title && (
                    <p className="mt-1 text-sm text-red-600" role="alert">
                      {errors.title.message}
                    </p>
                  )}
                  {watchedTitle && (
                    <p className="mt-1 text-sm text-gray-500">
                      Slug: {createSlug(watchedTitle)}
                    </p>
                  )}
                </div>

                {/* Featured Image */}
                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                    Featured Image (Optional)
                  </label>
                  
                  {imagePreview && (
                    <div className="mb-4 relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-200"
                        aria-label="Remove image"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )}
                  
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
                    {...register('image')}
                    onChange={handleImageChange}
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Recommended: 1200x600px or larger, JPEG/PNG format
                  </p>
                </div>

                {/* Content */}
                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                    Content
                  </label>
                  <textarea
                    id="content"
                    rows={20}
                    className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-colors duration-200 resize-y ${
                      errors.content ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Write your post content here. Use double line breaks to separate paragraphs."
                    {...register('content', {
                      required: 'Content is required',
                      minLength: {
                        value: 50,
                        message: 'Content must be at least 50 characters'
                      }
                    })}
                    aria-invalid={errors.content ? 'true' : 'false'}
                  />
                  {errors.content && (
                    <p className="mt-1 text-sm text-red-600" role="alert">
                      {errors.content.message}
                    </p>
                  )}
                  <p className="mt-1 text-sm text-gray-500">
                    {watchedContent.length} characters
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <Save size={20} aria-hidden="true" />
                    )}
                    {isSubmitting ? 'Saving...' : (isEditing ? 'Update Post' : 'Create Post')}
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="btn-secondary"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>

            {/* Preview */}
            {showPreview && (
              <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6">
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4">
                  Preview
                </h3>
                
                <article className="prose prose-stone max-w-none">
                  {watchedTitle && (
                    <h1 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                      {watchedTitle}
                    </h1>
                  )}
                  
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Featured"
                      className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                  )}
                  
                  {watchedContent && (
                    <div className="text-gray-700 leading-relaxed">
                      {watchedContent.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">
                          {paragraph.trim()}
                        </p>
                      ))}
                    </div>
                  )}
                  
                  {!watchedTitle && !watchedContent && (
                    <p className="text-gray-500 italic">
                      Start writing to see a preview of your post...
                    </p>
                  )}
                </article>
              </div>
            )}
          </div>
        </div>
      </div>
      </AdminLayout>
    </>
  );
};

export default AdminPostForm;