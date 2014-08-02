# Computed Properties plugin for Angular Classy

This is plugin that makes it possible to do computed set & get properties with Angular Classy (as seen before in frameworks like ember). Tests coming soon.

## Install

Install with `bower`:

```shell
bower install classy-computed
```

Add to your `index.html`:

```html
<script src="/bower_components/angular/angular.js"></script>
<script src="/bower_components/angular-classy/angular-classy.js"></script>
<script src="/bower_components/classy-computed/classy-computed.js"></script>
```

Add `classy` and `classy-computed` to your application module.

```javascript
var app = angular.module('app', ['classy', 'classy-computed']);
```

## Usage Examples

View [working examples here](http://davej.github.io/classy-computed/examples/).

### Simple computed property

```javascript
app.classy.controller({
	
	// ...

	computed: {
		fullName: function() {
			return this.$.firstName + ' ' + this.$.secondName;
		}
	}
});
```

### Computed property with watch field for better performance

Adding a watch field will give you better performance because it will only execute the computed expression when one of the watched properties has changed. In our trivial example below it will give you very little performance benefit, but for more complicated expressions it can give a significant speedup.

```javascript
app.classy.controller({
	
	// ...

	computed: {
		fullName: {
			watch: ['firstName', 'secondName'],
			get: function() {
					return this.$.firstName + ' ' + this.$.secondName;
			}
		}
	}
});
```

### Computed setters

You can also do computed setters and even combine with computed getters.

```javascript
app.classy.controller({
	
	// ...

	computed: {
		fullName: {
			get: function() {
					return this.$.firstName + ' ' + this.$.secondName;
			},
			set: function(fullName) {
				if (fullName && fullName.split(' ')) {
					var names = fullName.split(' ');
					this.$.firstName = names[0] || '';
					if (names.length > 1) {
						this.$.secondName = names[names.length - 1] || '';
					}
				}
			}
		}
	}
});
```


## License

The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
