'use client';

interface ScrollLinkProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ScrollLink = ({ targetId, children, className, onClick }: ScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Execute custom onClick if provided
    if (onClick) {
      onClick();
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default ScrollLink; 