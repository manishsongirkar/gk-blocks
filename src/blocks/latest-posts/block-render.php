<?php
/**
 * Latest posts block render
 *
 * @since   0.1.0
 * @package Gk_Blocks
 */

/**
 * Register block type
 */
function gk_latest_posts_block() {
	register_block_type(
		'gk-blocks/latest-posts',
		[
			'attributes'      => array(
				'postsToShow' => array(
					'type'    => 'number',
					'default' => 5,
				),
			),
			'editor_script'   => 'gk-blocks',
			'render_callback' => 'gk_blocks_latest_posts_callback',
		]
	);
}

add_action( 'init', 'gk_latest_posts_block' );

/**
 * Latest posts callback.
 *
 * @param $attributes
 *
 * @return string|void
 */
function gk_blocks_latest_posts_callback( $attributes ) {
	if ( is_admin() ) {
		return;
	}

	$recent_posts = wp_get_recent_posts(
		[
			'numberposts' => $attributes['postsToShow'],
			'post_status' => 'publish',
		]
	);

	if ( 0 === count( $recent_posts ) ) {
		return __( 'No Posts Found!!!' );
	}

	?>
	<div class="gk-latest-posts">
		<?php
		foreach ( $recent_posts as $post ) {
			$post_id = $post['ID'];
			?>
			<div class="row">
				<div class="small-12 medium-4 column">
					<a href="<?php echo esc_url( get_permalink( $post_id ) ); ?>">
						<?php echo get_the_post_thumbnail( $post_id, 'full' ); ?>
					</a>
				</div>
				<div class="small-12 medium-8 column">
					<h2>
						<?php
						printf(
							'<a href="%1$s">%2$s</a>',
							esc_url( get_permalink( $post_id ) ),
							esc_html( get_the_title( $post_id ) )
						);
						?>
					</h2>
					<div class="meta">
						<?php
						printf(
							'%1$s <a class="url fn n" href="%2$s">%3$s</a> %4$s %5$s',
							esc_html__( 'By' ),
							esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
							esc_html( get_the_author() ),
							esc_html__( 'on' ),
							esc_html( get_the_date( '', $post_id ) )
						);
						?>
					</div>
				</div>
			</div>
			<?php
		}
		?>
	</div>
	<?php
}
