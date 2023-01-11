import { ClassAttributes, ImgHTMLAttributes } from 'react';

const Logo = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLImageElement> & ImgHTMLAttributes<HTMLImageElement>) => (
    <div
        alt="Logo"
        {...props}
        style={{
            // eslint-disable-next-line react/destructuring-assignment
            width: props.width || '200px',
            height: '40px',
            // eslint-disable-next-line react/destructuring-assignment
            backgroundImage: `url('${props.src}')` || 'url("/waivr-demo/assets/logo/logo_dashboard(white).png")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
    />
);

export default Logo;
