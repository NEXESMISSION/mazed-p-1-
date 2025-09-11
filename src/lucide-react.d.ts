declare module 'lucide-react' {
  import { ComponentType, SVGAttributes } from 'react';

  interface LucideProps extends SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
  }

  type Icon = ComponentType<LucideProps>;

  export const Play: Icon;
  export const MapPin: Icon;
  export const Shield: Icon;
  export const Award: Icon;
  export const Star: Icon;
  export const ChevronLeft: Icon;
  export const ChevronRight: Icon;
  export const Flag: Icon;
  export const RotateCcw: Icon;
}
