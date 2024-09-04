import '../index.css';


export interface Button1Props {

  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';

  label: string;

  onClick?: () => void;
}

export const Button1 = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: Button1Props) => {

  const baseStyles = 'py-2 px-8 rounded-full font-bold text-white';

  const sizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };


  const finalStyles = `${baseStyles} ${sizeClasses[size]} `;

  return (
    <button
      type="button"
      className={finalStyles}
      style={{ backgroundColor }}

      {...props}
    >
      {label}
    </button>
  );
};
