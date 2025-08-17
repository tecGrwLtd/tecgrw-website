import { Calendar, Clock } from 'lucide-react';

const ArticleMeta = ({ date, readTime, size = 'base' }) => {
  const sizeClasses = {
    sm: 'text-xs',
    base: 'text-sm'
  };

  const iconSize = size === 'sm' ? 'w-3 h-3' : 'w-4 h-4';
  
  return (
    <div className={`flex items-center space-x-4 ${sizeClasses[size]} text-gray-500`}>
      <div className="flex items-center">
        <Calendar className={`${iconSize} mr-2`} />
        <span>{date}</span>
      </div>
      <div className="flex items-center">
        <Clock className={`${iconSize} mr-2`} />
        <span>{readTime}</span>
      </div>
    </div>
  );
}

export default ArticleMeta;
