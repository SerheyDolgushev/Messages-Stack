MessagesStack
=========

MessagesStack provides lighweight notify messages.

![Screenshot](http://img403.imageshack.us/img403/9876/screenshotql.png)


How to Use
----------

Simple usage:

JavaScript:

	#JS
	window.addEvent( 'load', function() {
		var messageStack = new NXC.MessageStack();
		messageStack.showMessage(
			'Test message content',
			'error',
			{ 'hideTimeout': 3000 }
		);
	} );