
const blogPosts = [
  {
    title: 'The Future of AI in Business',
    excerpt: 'Exploring how artificial intelligence is reshaping modern business operations...',
    author: 'Dr. Sarah Chen',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    category: 'Technology'
  },
  {
    title: 'Understanding Machine Learning Models',
    excerpt: 'A comprehensive guide to different types of machine learning models...',
    author: 'James Wilson',
    date: 'March 12, 2024',
    image: 'https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?auto=format&fit=crop&q=80&w=800',
    category: 'Education'
  },
  {
    title: 'AI Ethics in Practice',
    excerpt: 'Navigating the ethical considerations in AI development...',
    author: 'Dr. Maria Rodriguez',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    category: 'Ethics'
  }
];

export default function Blog() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">AI Insights Blog</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Latest thoughts, insights, and updates from our team of AI experts
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-indigo-600 dark:text-indigo-400">{post.category}</div>
                <h2 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {post.title}
                </h2>
                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {post.author}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {post.date}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}