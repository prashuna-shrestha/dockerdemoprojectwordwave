'use client';
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Bold, Italic, Underline, Sparkles, Type, CheckCircle } from 'lucide-react'
import { useAuth } from '../../context/AuthContext' // Adjusted path
import Footer from '../../components/Footer'         // Adjusted path
import ProtectedRoute from '@/components/ProtectedRoute';


export default function WritePage() {
  const { user } = useAuth()
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [htmlContent, setHtmlContent] = useState('')
  const [isPublishing, setIsPublishing] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const [showPlaceholder, setShowPlaceholder] = useState(true)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const editorRef = useRef<HTMLDivElement>(null)

  // Initialize editor content
  useEffect(() => {
    if (editorRef.current && !editorRef.current.innerHTML) {
      editorRef.current.innerHTML = htmlContent || ''
    }
  }, [htmlContent])

  const handleContentChange = (html: string, text: string) => {
    setHtmlContent(html)
    setContent(text)
    setWordCount(text.trim() === '' ? 0 : text.trim().split(/\s+/).length)
  }

  const handleInput = () => {
    if (!editorRef.current) return
    const html = editorRef.current.innerHTML
    const text = editorRef.current.innerText
    handleContentChange(html, text)
    setShowPlaceholder(text.trim() === '')
  }

  const formatText = (command: string, value: string | null = null) => {
    if (!editorRef.current) return
    editorRef.current.focus()
    const selection = window.getSelection()
    if (!selection || selection.rangeCount === 0) return
    document.execCommand(command, false, value || '')
    handleInput()
  }

  const handlePublish = async () => {
    if (!content.trim() || !title.trim() || !user) return

    setIsPublishing(true)
    const token = localStorage.getItem('token')

    try {
      const response = await fetch('http://localhost:8000/api/posts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          content,
          author: user.id,
        }),
      })

      if (response.status === 401) {
        localStorage.removeItem('token')
        localStorage.removeItem('userData')
        router.push('/login')
        return
      }

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to publish post')
      }

      const result = await response.json()
      setShowSuccessDialog(true)
      // Clear the form after successful submission
      setTitle('')
      setContent('')
      setHtmlContent('')
      if (editorRef.current) {
        editorRef.current.innerHTML = ''
      }
    } catch (error) {
      console.error('Publishing error:', error)
      alert(
        `Publishing failed: ${error instanceof Error ? error.message : 'Unknown error'}`
      )
    } finally {
      setIsPublishing(false)
    }
  }

  const handleSuccessDialogClose = () => {
    setShowSuccessDialog(false)
    // Optionally refresh the page to start fresh
    window.location.reload()
  }

  const formattingButtons = [
    { icon: <Bold size={18} />, command: 'bold', tooltip: 'Bold' },
    { icon: <Italic size={18} />, command: 'italic', tooltip: 'Italic' },
    { icon: <Underline size={18} />, command: 'underline', tooltip: 'Underline' },
  ]

  const getInitials = (name: string) => {
    return name
      ? name
          .split(' ')
          .map((n) => n[0])
          .join('')
      : 'U'
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-pink-50">
        {/* Success Dialog */}
        {showSuccessDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl p-6 max-w-sm w-full"
            >
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mt-3 text-lg font-medium text-gray-900">Success!</h3>
                <div className="mt-2 text-sm text-gray-500">
                  Your blog post has been published successfully.
                </div>
                <div className="mt-5">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    onClick={handleSuccessDialogClose}
                  >
                    OK
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h1 className="text-lg font-semibold text-gray-700">New Story</h1>
              {user && user.name && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold">
                    {getInitials(user.name)}
                  </div>
                  <span className="text-sm font-medium text-gray-600 hidden sm:inline">
                    {user.name}
                  </span>
                </div>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handlePublish}
              disabled={isPublishing || !title.trim() || !content.trim()}
              className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 transition-all duration-200 ${
                isPublishing || !title.trim() || !content.trim()
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-600 to-pink-500 text-white shadow hover:shadow-md'
              }`}
            >
              {isPublishing ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Publishing...
                </>
              ) : (
                <>
                  <Sparkles size={16} />
                  Publish
                </>
              )}
            </motion.button>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Your post title..."
              className="w-full text-4xl md:text-5xl font-bold text-gray-900 placeholder-gray-400 outline-none bg-transparent"
            />
            <div className="h-1 bg-gradient-to-r from-indigo-500 to-pink-500 w-24 mt-2 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-4 p-2 bg-white rounded-lg border border-gray-100 shadow-sm sticky top-2 z-10"
          >
            {formattingButtons.map((button, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.1, backgroundColor: '#f3f4f6' }}
                whileTap={{ scale: 0.95 }}
                title={button.tooltip}
                onClick={() => formatText(button.command)}
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {button.icon}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div
              ref={editorRef}
              contentEditable
              onInput={handleInput}
              onFocus={() => showPlaceholder && setShowPlaceholder(false)}
              onBlur={() => {
                if (!editorRef.current?.innerText.trim()) {
                  setShowPlaceholder(true)
                }
              }}
              className={`min-h-[60vh] p-6 bg-white rounded-lg border border-gray-100 shadow-sm prose prose-lg max-w-none focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-transparent ${
                showPlaceholder
                  ? 'text-gray-400 before:content-[attr(data-placeholder)]'
                  : 'text-gray-900'
              }`}
              data-placeholder="Tell your story..."
              suppressContentEditableWarning={true}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-5 right-4 bg-white px-3 py-1 rounded-full shadow-md border border-gray-100 flex items-center gap-1"
            >
              <Type size={14} className="text-gray-500" />
              <span className="text-sm font-medium text-gray-700">
                {wordCount} words
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 bg-indigo-50/50 border border-indigo-100 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mt-1">
                <Sparkles size={18} className="text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Writing Tips
                </h3>
                <ul className="text-gray-700 space-y-2 list-disc list-inside">
                  <li>Start with a compelling hook to grab attention</li>
                  <li>Use short paragraphs for better readability</li>
                  <li>Break up long sections with subheadings</li>
                  <li>Read aloud to check flow and rhythm</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </ProtectedRoute>
  )
}