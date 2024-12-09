import { Brain, Code, MessageSquare, Sparkles } from "lucide-react";
import { ConsultationCard } from './ConsultationCard';

const consultationItems = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI-Powered Analysis",
    description: "Leverage cutting-edge AI to analyze and optimize your app's user experience.",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Technical Excellence",
    description: "Expert development with modern frameworks and best practices.",
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Collaborative Design",
    description: "Work directly with our UI/UX experts to perfect your vision.",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Innovation Focus",
    description: "Stay ahead with emerging technologies and innovative solutions.",
  },
];

export const ConsultationGrid = () => {
  return (
    <div className="flex flex-wrap -m-4">
      {consultationItems.map((item, index) => (
        <ConsultationCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
          delay={index * 0.1 + 0.5}
        />
      ))}
    </div>
  );
};