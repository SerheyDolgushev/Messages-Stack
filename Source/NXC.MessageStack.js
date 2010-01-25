var NXC = NXC || {};
NXC.MessageStack = new Class( {

	Implements: [Options, Events],

	options:{
		'stackBlockClass' : 'nxc-message-stack'
	},

	stackBlock : false,

	initialize: function( options ) {
		this.setOptions( options );

		this.images = $$( this.options.imagesSelector );
		this.createStackBlock();
	},

	createStackBlock: function() {
		this.stackBlock = new Element( 'div', { 'class': this.options.stackBlockClass } ).inject( document.body );
	},

	showMessage: function( text, type, options ) {
		var messageInstance = new NXC.NotifyMessage( text, type, options )
		messageInstance.getMessageElement().inject( this.stackBlock );
	}
} );