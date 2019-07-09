/**
 * Edit Screen.
 */

const { __ }               = wp.i18n;
const { PostSelectButton } = hm.components;
const { Component }        = wp.element;

import classnames from 'classnames';
import Inspector from './components/inspector-controls';
import BulletList from './components/bullet-list';
import PostList from './components/post-list';

class EditScreen extends Component {

	render() {
		const { attributes: { postType, postIds, posts, layout }, setAttributes } = this.props;

		return [
			<Inspector key="inspector" { ...{ setAttributes, ...this.props } } />,
			<div key="edit" className={ classnames( 'news-block', 'is-style-' + layout, this.props.className ) }>
				<PostSelectButton
					value    = { postIds }
					onSelect = { posts => {
						setAttributes( { posts } );
						setAttributes( { postIds: posts.map( p => p.id ) } )
					} }
					postType = { postType }
					btnProps = { { isLarge: true } }
				>
					{ __( 'Select posts' ) }
				</PostSelectButton>

				{
					'bullet-list' === layout ?
						<ul>
							{
								posts ? posts.map( ( post ) => {
									return [
										<BulletList
											post={ post }
											isEdit={ true }
											props={ this.props }
										>
										</BulletList>
									];
								} ) : __( 'No Post Selected!' )
							}
						</ul>
						:
						posts ? posts.map( ( post ) => {
							return [
								<PostList
									post={ post }
									isEdit={ true }
									props={ this.props }
								>
								</PostList>
							];
						} ) : __( 'No Post Selected!' )
				}
			</div>
		];
	}
}

export default EditScreen;
