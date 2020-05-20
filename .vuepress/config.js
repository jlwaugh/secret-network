module.exports = {
    title: 'Secret Network',
    description: 'Building for Private Computation',
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }]
    ],
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Docs', link: '/docs/' },
          { text: 'Chat', link: 'https://chat.secret.foundation' }
        ],
        sidebar: {
            '/docs/': [
                '',
                'Quickstart',
                'Roadmap',
                'Developers',
                'Validators',
                'Architecture',
                'Components',
                'Transactions',
                'Registration',
                'SGX',
                'Protocol',
                'Cryptography'
            ]
        }
    }
}