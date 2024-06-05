import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {},
    images: {
        /* Permite otimização de imagens obtidas do twitter, 
        como as imagens são minhas e tenho permissão para usar as minhas próprias imagens, 
        isso NÃO configura a prática de Hot-Linking */

        // Por exemplo: https://pbs.twimg.com/media/GNAaccgW0AEmdac?format=jpg&name=4096x4096
        
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pbs.twimg.com',
                port: '',
                pathname: '/media/**',
            }
        ]
    }
};



export default withNextIntl(nextConfig);