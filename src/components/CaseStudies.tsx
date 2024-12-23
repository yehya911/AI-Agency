
const caseStudies = [
  {
    title: 'E-commerce Revolution',
    client: 'Global Retail Corp',
    description: 'Implementing AI-powered product recommendations leading to 40% increase in sales',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    category: 'Retail',
  },
  {
    title: 'Customer Service Enhancement',
    client: 'TechServe Solutions',
    description: 'AI chatbot implementation resulting in 65% reduction in response time',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    category: 'Technology',
  },
  {
    title: 'Healthcare Innovation',
    client: 'MedLife Institute',
    description: 'ML-powered diagnostic assistance improving accuracy by 45%',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    category: 'Healthcare',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Case Studies
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Real results from real clients. Discover how our AI solutions drive success.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300">
                    {study.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {study.title}
                </h3>
                <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-400">
                  {study.client}
                </p>
                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  {study.description}
                </p>
                <a
                  href={`#${study.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                >
                  Read full case study →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}