/**
 * Edit Screen.
 */

const { __ }        = wp.i18n;
const { Component } = wp.element;

import classnames from 'classnames';
import BulletList from './components/bullet-list';
import PostList from './components/post-list';

class SaveScreen extends Component {

	render() {
		const { attributes: { posts, layout } } = this.props;

		return (
			<div className={ classnames( 'news-block', 'is-style-' + layout, this.props.className ) }>
				{
					'bullet-list' === layout ? <ul>
						{
							posts ? posts.map( ( post ) => {
								return [
									<BulletList
										post={ post }
										isEdit={ false }
										props={ this.props }
									>
									</BulletList>
								];
							} ) : __( 'No Post Selected!' )
						}
					</ul> : posts ? posts.map( ( post ) => {
						return [
							<PostList
								post={ post }
								isEdit={ false }
								props={ this.props }
							>
							</PostList>
						];
					} ) : __( 'No Post Selected!' )
				}
			</div>
		);
	}
}

export default SaveScreen;
