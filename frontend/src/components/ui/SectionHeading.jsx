import { useTheme } from '../../context/ThemeContext';

export default function SectionHeading({ title, subtitle, align = 'center' }) {
  const { isDark } = useTheme();

  return (
    <div className={`mb-14 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="section-title gradient-text">{title}</h2>
      {subtitle && (
        <p
          className={`section-subtitle ${
            align === 'center' ? 'mx-auto' : ''
          } ${isDark ? 'text-dark-400' : 'text-dark-500'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
