---
layout: post
title: "Angular.js Controllers - Assigning a Default Value to a Model"
published: true
categories:
---
This is the first of a series of posts about [Angular.js](http://angularjs.org/), the Superheroic Javascript MVW Framework. It is extracted from my ebook [Recipes with Angular.js](https://leanpub.com/recipes-with-angular-js). If you like this post please support me and buy it!

### Problem

You want to assign a default value to the scope in the controllers context.

### Solution

Use the `ng-controller` directive in your template:

```html
{% raw %}
<div ng-controller="MyCtrl">
  <p>{{value}}</p>
</div>
{% endraw %}
```

And define the scope variable in your controller function:

```js
var MyCtrl = function($scope) {
  $scope.value = "some value";
};
```

### Discussion

Depending on where you use the ng-controller directive, you define its assigned scope. The scope is hierachical and follows the DOM nodes hierarchy. In our example the value expression is correctly evaluated to `some value`, since value is set in the `MyCtrl` controller.

Note, that this would not work if the value expression is moved outside the controllers scope:

```html
{% raw %}
<p>{{value}}</p>

<div ng-controller="MyCtrl">
</div>
{% endraw %}
```

In this case {% raw %}`{{value}}`{% endraw %} will simply be not rendered at all.

You can find the complete [example](https://github.com/fdietz/recipes-with-angular-js-examples/tree/master/chapter2/recipe1) on Github.
