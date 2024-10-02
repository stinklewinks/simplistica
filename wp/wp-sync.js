import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

class WPSync {
    static wp_posts;
    static wp_terms;
    static wp_pages;
    static wp_media;
    static wp_users;
    static wp_comments;
    static wp_options;
    static wp_categories;
    static wp_tags;
    static wp_custom;
    static wp_custom_taxonomies;
    static wp_custom_post_types;
    static wp_custom_post_statuses;
    static wp_custom_post_formats;
    static wp_custom_post_revisions;
    static wp_url;
    // Get plugins
    static plugins;
    static plugins_active;
    static plugins_inactive;
    // Add plugins
    static install_plugins;
    static activate_plugins;
    static deactivate_plugins;
    static uninstall_plugins;
    static update_plugins;
    static delete_plugins;

    constructor(){
        this.wp_url = process.env.WP_URL;
    }

    // Create a function that gets the status of a plugin to see if it needs to update. Maybe cache the response every 3 days?
    static get_plugin_status(plugin){
        // Get plugin status
    }

    static install_plugins(plugins){
        // Install plugins
    }

    static deactivate_plugins(plugins){
        //
        plugins.forEach(plugin => {
            // Deactivate API Call
        });
    }

    // Post Methods
    static get_posts(){
        // Get posts
    }

    static get_post(post_id){
        // Get post
        return post;
    }

    // Page Methods
    static get_pages(){
        // Get pages
    }

    // User Methods
    static get_users(){
        // Get users
    }

    // Product Methods (WooCommerce)
    static get_products(){
        // Get products
    }

}