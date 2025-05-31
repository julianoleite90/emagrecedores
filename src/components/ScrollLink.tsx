'use client';

interface ScrollLinkProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
}

const ScrollLink = ({ targetId, children, className }: ScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
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