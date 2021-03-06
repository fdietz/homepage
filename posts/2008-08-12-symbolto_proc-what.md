---
layout: post
title: Symbol#to_proc - what?
published: true
meta:
  _edit_last: "1573847"
  _edit_lock: "1219327472"
tags:
- Rails
- Ruby
type: post
status: publish
---
While reading [Advanced Rails](http://www.amazon.com/Advanced-Rails-Brad-Ediger/dp/0596510322/ref=pd_bxgy_b_img_a) by Brad Ediger, I've stumbled upon this little helper in ActiveSupport.

The to_proc method is an extension to Symbol. Let me shamelessly copy Brad's example here:

```ruby
(1..5).map { |i| i.to_s } # => ["1", "2", "3", "4", "5"]
```

This is already pretty nice, but now look what happens when using Symbol#to_proc:

```ruby
(1..5).map(&:to_s) # => ["1", "2", "3", "4", "5"]
```

This is even shorter and does produce exactly the same output. So what happened here? The "&" character tells Ruby that you want to call map with "to_s" as a block argument. It will force Ruby to call the Symbol's to_proc method. The method will create a Proc and send the symbol to the object calling the to_proc method. And this leads to iterating over the numbers specified by the range and then calling the block, passing in the numbers and converting them to strings. Okay...

This is a typical example of me not being able to figure out what some code actually means and then by accident finding the explanation somewhere else. How the heck am I supposed to know where to find the documentation to such a cool extensions? I will let you know when I'm finally able to solve this mystery...
