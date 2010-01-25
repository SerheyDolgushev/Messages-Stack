/*
---
description: notify message.

license: MIT-style

authors:
- Dolgushev Serhey (dolgushev.serhey@gmail.com)

requires: core:1.2.4: '*'

provides: [NXC.NotifyMessage]
...
*/

var NXC = NXC || {};
NXC.NotifyMessage = new Class( {

	Implements : [Options, Events],

	options:{
		'tag'              : 'div',
		'hideTimeout'      : 5000,
		'hideTweenOptions' : {
			'property': 'opacity',
			'duration': 500
		},
		'closButtonClass'  : 'nxc-message-close-button',
		'typesClasses'     : {
			'notice'  : 'nxc-message-notice',
			'warning' : 'nxc-message-warning',
			'error'   : 'nxc-message-error'
		}
	},

	message : false,
	
	initialize: function( text, type, options ) {
		this.setOptions( options );
		
		this.message = new Element( this.options.tag, {
			'class' : $defined( this.options.typesClasses[ type ] ) ? this.options.typesClasses[ type ] : type,
			'html'  : text
		} );
		
		if( this.options.hideTimeout.toInt() > 0 ) {
			this.message.store(
				'hideFunctionTimeout',
				this.hide.delay( this.options.hideTimeout, this, [] )
			);
		}

		var closeButton = new Element( 'a', {
			'class'  : this.options.closButtonClass,
			'html'   : '&nbsp',
			'href'   : '#',
			'events' : {
				'click' : function( event ) {
					event.stop();
					this.hide();
				}.bind( this )
			}
		} ).inject( this.message, 'top' );
	},

	hide: function() {
		var hideFunctionTimeout = this.message.retrieve( 'hideFunctionTimeout', false );
		if( hideFunctionTimeout !== false ) {
			$clear( hideFunctionTimeout );
		}

		this.message.get( 'tween', this.options.hideTweenOptions ).start( 0 ).chain(
			function() { this.message.setStyle( 'display', 'none' ); }.bind( this )
		);
	},

	getMessageElement: function() {
		return this.message;
	}
} );