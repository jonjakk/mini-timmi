/**
 * @package 	WordPress
 * @subpackage 	Bambini
 * @version		1.0.2
 * 
 * Theme Content Composer Schortcodes Extend
 * Created by CMSMasters
 * 
 */



/**
 * Posts Slider Extend
 */

var cmsmasters_posts_slider_new_fields = {};

for (var id in cmsmastersShortcodes.cmsmasters_posts_slider.fields) {
	if (id === 'amount') {
		delete cmsmastersShortcodes.cmsmasters_posts_slider.fields[id];
	} else if (id === 'columns') {
		delete cmsmastersShortcodes.cmsmasters_posts_slider.fields[id]['depend'];

		cmsmasters_posts_slider_new_fields[id] = cmsmastersShortcodes.cmsmasters_posts_slider.fields[id];
	} else if (id === 'portfolio_metadata') {
		cmsmasters_posts_slider_new_fields[id] = cmsmastersShortcodes.cmsmasters_posts_slider.fields[id];
		cmsmasters_posts_slider_new_fields[id].choises.more = cmsmasters_theme_shortcodes.read_more_button;

	} else {
		cmsmasters_posts_slider_new_fields[id] = cmsmastersShortcodes.cmsmasters_posts_slider.fields[id];
	}
}


cmsmastersShortcodes.cmsmasters_posts_slider.fields = cmsmasters_posts_slider_new_fields;


var cmsmasters_profile_new_fields = {};

for (var id in cmsmastersShortcodes.cmsmasters_profiles.fields) {
	cmsmasters_profile_new_fields[id] = cmsmastersShortcodes.cmsmasters_profiles.fields[id];
	if(id === "layout"){
		cmsmasters_profile_new_fields["select_pattern"] = { 
			type : 		'checkbox', 
			title : 	cmsmasters_theme_shortcodes.show_pattern_image, 
			descr : 	cmsmasters_theme_shortcodes.pattern_if, 
			def : 		'true', 
			required : 	false, 
			width : 	'half', 
			choises : { 
						'true' : "Show"
			} 
		};

		cmsmasters_profile_new_fields["pattern"] = {
			type : 			'upload', 
			title : 		cmsmasters_theme_shortcodes.pattern_picture, 
			descr : 		'', 
			def : 			"|" + cmsmasters_shortcodes.theme_url + '/theme-vars/theme-style/img/profile_horizontal_pattern.png',
			required : 		false, 
			width : 		'half', 
			frame : 		'post', 
			library : 		'image', 
			multiple : 		false, 
			description : 	false, 
			caption : 		false, 
			align : 		true, 
			link : 			true, 
			size : 			true, 
			depend : 		'select_pattern:true' 
		};
	}
}

cmsmastersShortcodes.cmsmasters_profiles.fields = cmsmasters_profile_new_fields;



/**
 * Blog Extend
 */

var cmsmasters_blog_new_fields = {};


for (var id in cmsmastersShortcodes.cmsmasters_blog.fields) {
	if (id === 'layout') {
		delete cmsmastersShortcodes.cmsmasters_blog.fields[id]['choises']['timeline'];
		
		
		cmsmasters_blog_new_fields[id] = cmsmastersShortcodes.cmsmasters_blog.fields[id];
	} else {
		cmsmasters_blog_new_fields[id] = cmsmastersShortcodes.cmsmasters_blog.fields[id];
	}
}


cmsmastersShortcodes.cmsmasters_blog.fields = cmsmasters_blog_new_fields;




