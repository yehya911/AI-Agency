import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center rounded-full px-6 py-2 border border-transparent bg-indigo-100 dark:bg-indigo-900/50 mb-8">
            <Sparkles className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-2" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              Transforming businesses with AI
            </span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            <span className="block">Elevate Your Business with</span>
            <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Intelligent AI Solutions
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We craft custom AI solutions that drive innovation, automate processes,
            and unlock valuable insights for forward-thinking businesses.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#contact"
              className="rounded-full bg-indigo-600 dark:bg-indigo-500 px-8 py-3 text-white shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#services"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Explore Services →
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 top-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6,#6366f1)] dark:bg-[linear-gradient(to_right,#4f46e5,#4338ca)] opacity-[0.05] [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" />
      </div>
    </div>
  );
}