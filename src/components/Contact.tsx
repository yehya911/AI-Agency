import { Mail, Phone, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Let's discuss your AI journey
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Ready to transform your business with AI? Get in touch with our experts
              for a free consultation.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <span className="ml-4 text-gray-600 dark:text-gray-300">contact@nexusmindscape.ai</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <span className="ml-4 text-gray-600 dark:text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <span className="ml-4 text-gray-600 dark:text-gray-300">Live chat available 24/7</span>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 dark:bg-indigo-500 px-4 py-3 text-white shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}