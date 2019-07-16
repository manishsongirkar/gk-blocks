/**
 * Custom WebPack config.
 *
 * @type {{mode, output, entry, resolve, stats, plugins, module}}
 * @package News_Blocks
 */

const defaultConfig          = require( './node_modules/@wordpress/scripts/config/webpack.config' );
const path                   = require( 'path' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const cssnano                = require( 'cssnano' );
const MiniCssExtractPlugin   = require( 'mini-css-extract-plugin' );
const IMG_DIR                = path.resolve( __dirname, 'img' );
const FONTS_DIR              = path.resolve( __dirname, 'fonts' );

module.exports = {
	...defaultConfig,

	entry: {
		...defaultConfig.entry,
		editor: path.resolve( process.cwd(), 'src', 'editor.js' ),
		style: path.resolve( process.cwd(), 'src', 'style.js' )
	},

	plugins: [
		new CleanWebpackPlugin(),

		...defaultConfig.plugins,

		new MiniCssExtractPlugin(
			{
				filename: '[name].css'
			}
		)
	],

	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
		},
			{
				test: /\.(png|jpg|svg|jpeg|gif|ico)$/,
				exclude: [ FONTS_DIR, /node_modules/ ],
				use: {
					loader: 'file-loader',
					options: {
						name: '[path][name].[ext]',
						publicPath: '../'
					}
				}
		},
			{
				test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				exclude: [ IMG_DIR, /node_modules/ ],
				use: {
					loader: 'file-loader',
					options: {
						name: '[path][name].[ext]',
						publicPath: '../'
					}
				}
			}
		]
	}
};
