import WaivrLogo from './logo.svg';

type Props = {
  url: string;
};

export const Logo = ({ url }: Props) => (
  <a href={url}>
    <img src={WaivrLogo} alt="Waivr" />
  </a>
);
