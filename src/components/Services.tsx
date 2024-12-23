import { Bot, Brain, BarChart, MessageSquare, Cpu } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'Custom AI Chatbots',
    description: 'Intelligent conversational agents that enhance customer engagement and support.',
  },
  {
    icon: Cpu,
    title: 'Process Automation',
    description: 'Smart automation solutions that streamline operations and boost efficiency.',
  },
  {
    icon: BarChart,
    title: 'Data Analytics',
    description: 'Advanced analytics and insights powered by machine learning algorithms.',
  },
  {
    icon: MessageSquare,
    title: 'NLP Solutions',
    description: 'Natural language processing tools for text analysis and understanding.',
  },
  {
    icon: Brain,
    title: 'ML Development',
    description: 'Custom machine learning models tailored to your specific needs.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations
            and drive innovation.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
              <div className="relative p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                  <service.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
                <a
                  href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}