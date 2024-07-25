import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import TomSelect from 'tom-select';
// You can specify which plugins you need
//import { Tooltip, Toast, Popover } from 'bootstrap';

 // loads the jquery package from node_modules
 //import $ from 'jquery';
 $(document).ready(function() {
    console.log('jQuery is ready to use!');
    //$('body').css('background-color', 'lightblue');
});

