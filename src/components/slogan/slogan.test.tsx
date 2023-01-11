import { render, screen } from '@testing-library/react';
import Slogan from '.';

describe.skip('Test Slogan render', () => {

    const props = {
        src: '/waivr-demo/assets/payment_gateway.png',
        heightImage: '404px',
        y: '10%',
        scale: 0.6,
    };
    it('show the container slogan', () => {

        render(
            <Slogan
                src={props.src}
                heightImage={props.heightImage}
                scale={props.scale}
                y=""
            />
        );

        const containerSlogan = screen.getByTestId('container-slogan');
        expect(containerSlogan).toBeInTheDocument();

        const logo = screen.getByTestId('logo');
        expect(logo).toBeInTheDocument();

        const infoContainer = screen.getByTestId('info-container');
        expect(infoContainer).toBeInTheDocument();

        const image = screen.getByTestId('image');
        expect(image).toBeInTheDocument();

    });

});
