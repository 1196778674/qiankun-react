const {when, whenProd} = require('@craco/craco')
const path = require('path')
const {addBeforeLoader, loaderByName} = require('@craco/craco')

function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}

module.exports = {
  plugins: [
  ],
  webpack: {
    configure: (config, { env }) => {
      const svgLoader = {
        test: /\.svg$/,
        include: [resolve('src/components/BIcon')],
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'icon-[name]'
            }
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                {
                  removeAttrs: {
                    attrs: 'fill'
                  }
                }
              ]
            }
          }
        ],
      }
      
      addBeforeLoader(config, loaderByName('file-loader'), svgLoader);

      if (env === 'production') {
        config.optimization.splitChunks = {
          cacheGroups: {
            deps: {
              test: /[\\/]node_modules[\\/]/,
              name: '__vendors__',
              chunks: 'all',
              priority: 90
            },
            commons: {
              name: '__commons__',
              chunks: 'all',
              minChunks: 2,
              priority: 80
            }
          }
        }
        config.devtool = false
      }
  
      return config
    },
    alias: {
      '@': resolve('src')
    },
    plugins: [
      ...when(
        false, () => [
          
        ], []
      ),
      ...whenProd(
        () => [
          // 打压缩包
          
        ], []
      )
    ],
  }
}

