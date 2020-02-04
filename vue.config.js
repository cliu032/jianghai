module.exports = {
    publicPath: './',
    pluginOptions: {
        s3Deploy: {
            registry: undefined,
            awsProfile: 'default',
            region: 'ap-southeast-2',
            bucket: 'jianghai.com.au',
            createBucket: false,
            staticHosting: true,
            staticIndexPage: 'index.html',
            staticErrorPage: 'index.html',
            assetPath: 'dist',
            assetMatch: '**',
            deployPath: '/',
            acl: 'public-read',
            pwa: false,
            enableCloudfront: false,
            uploadConcurrency: 5,
            pluginVersion: '3.0.0'
        }
    }
};
