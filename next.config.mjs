/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['images.ctfassets.net']
    },
    async redirects(){
        return[
            {
                source:'/',
                destination:'/home',
                permanent:true
            }
        ]
    }
};

export default nextConfig;
