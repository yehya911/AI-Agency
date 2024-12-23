import React from 'react';
import { Bot, Cpu, BarChart, MessageSquare, Brain } from 'lucide-react';

interface ServiceLink {
  name: string;
  href: string;
  icon: React.ElementType;
  description: string;
}

const serviceLinks: ServiceLink[] = [
  {
    name: 'AI Chatbots',
    href: '/services/chatbots',
    icon: Bot,
    description: 'Intelligent conversational agents for customer engagement'
  },
  {
    name: 'Process Automation',
    href: '/services/automation',
    icon: Cpu,
    description: 'Smart automation solutions for business efficiency'
  },
  {
    name: 'Data Analytics',
    href: '/services/analytics',
    icon: BarChart,
    description: 'Advanced analytics powered by machine learning'
  },
  {
    name: 'NLP Solutions',
    href: '/services/nlp',
    icon: MessageSquare,
    description: 'Natural language processing tools'
  },
  {
    name: 'ML Development',
    href: '/services/ml-development',
    icon: Brain,
    description: 'Custom machine learning model development'
  }
];

export default function ServicesDropdown() {
  return (
    <div className="absolute top-full left-0 w-80 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
      <div className="p-2">
        {serviceLinks.map((service) => (
          <a
            key={service.name}
            href={service.href}
            className="flex items-start p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <service.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mt-1" />
            <div className="ml-3">
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                {service.name}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {service.description}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}