import { SectionContent } from './styles';
import ImageComponent from './ImageComponent';
import LogoComponent from './LogoComponent';

const image = '/waivr-demo/assets/logo.svg';

export interface SloganProps {
  src: string,
  heightImage: string,
  y: string,
  scale: number,
  width?: number | null,
}

const Slogan = (props: SloganProps): JSX.Element => {

  const {
    src, heightImage, width, y, scale
  } = props;


    return (
        <SectionContent data-testid="container-slogan">
            <LogoComponent data-testid="logo">
                <img src={image} alt="logo" width="40%" />
            </LogoComponent>

            <div className="logo-container" data-testid="info-container">
              <ImageComponent src={src} heightImage={heightImage} y={y} width={width} />
            </div>
        </SectionContent>

    );

};

export default Slogan;
