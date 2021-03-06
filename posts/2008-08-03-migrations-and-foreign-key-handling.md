---
layout: post
title: Migrations and Foreign Key Handling
published: true
meta:
  _edit_last: "1573847"
  _edit_lock: "1217762103"
tags:
- Rails
- Ruby
type: post
status: publish
---
A question which came up real quick was how to add a foreign key to your migrations. In my example rails app I'm using a project with a has_many association to tasks, like this:

```ruby
class Project < ActiveRecord::Base  
  has_many :tasks
end

class Task < ActiveRecord::Base  
  belongs_to :project
end
```

Now I want my task database to look like the following:

<pre>
mysql&gt; describe tasks;

+------------+--------------+------+-----+---------+
| Field      | Type         | Null | Key | Default |
+------------+--------------+------+-----+---------+
| id         | int(11)      | NO   | PRI | NULL    |
| title      | varchar(255) | YES  |     | NULL    |
| body       | text         | YES  |     | NULL    |
| status     | tinyint(1)   | YES  |     | NULL    |
| created_at | datetime     | YES  |     | NULL    |
| updated_at | datetime     | YES  |     | NULL    |
| project_id | int(11)      | NO   | MUL | NULL    |
+------------+--------------+------+-----+---------+

7 rows in set (0.00 sec)
</pre>

Note, that I've removed the last "extra" column which is usually shown by the MySQL describe command. It only shows the auto_increment for the primary key but it would have overlapped my fixed-width wordpress theme.

First we have to create a new migration for adding a new column using:

<pre>
script/generate migration add_project_column
</pre>

This will generate an initial ruby file where I only added the two lines to add and delete a column.

```ruby
class AddProjectColumn < ActiveRecord::Migration
  def self.up
    add_column :tasks, :project_id, :integer, :null => false
  end

  def self.down
    delete_column :tasks, :project_id
  end
end
```

Next step is the foreign key which we can put directly in the migration, like this:

```ruby
class AddProjectColumn < ActiveRecord::Migration
  def self.up
    add_column :tasks, :project_id, :integer, :null => false

    execute 'ALTER TABLE tasks ADD CONSTRAINT fk_tasks_projects FOREIGN KEY ( project_id ) references projects( id )'
  end

  def self.down
    delete_column :tasks, :project_id
    execute 'ALTER TABLE tasks DROP FOREIGN KEY fk_tasks_projects'
  end
end
```

Note, that I'm actually executing a MySQL command to add a foreign key. So, this code most probably won't work when used with different databases.

For now this is good enough, but I should probably look into refactoring these two lines by extracting them into a migration helper class. This way it will be easier to modify in a single central place in case the database will be changed.

I'm still searching for database independent foreign key management handled in migrations. So, please let me know if you find a better way to do this!

Until then some more [readings](http://wiki.rubyonrails.org/rails/pages/UsingMigrations)...
