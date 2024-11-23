declare module 'react-scroll' {
  export interface LinkProps {
    to: string;
    smooth?: boolean;
    duration?: number;
    spy?: boolean;
    exact?: boolean;
    offset?: number;
    activeClass?: string;
    onClick?: () => void;
  }

  export class Link extends React.Component<LinkProps & React.HTMLProps<HTMLAnchorElement>> {}
}
