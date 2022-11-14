# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'Creating Questions'
questions = Question.create([
  {
    title: 'How to check if a key is present in Hash?',
    tag: 'Ruby'
  },
  {
    title: 'What is the difference between string and symbol?',
    tag: 'Ruby'
  },
  {
    title: 'What happened if you add two same keys in Hash?',
    tag: 'Ruby'
  },
  {
    title: 'How to delete a given key from hash?',
    tag: 'Ruby'
  },
  {
    title: 'How to check if two hash are identical?',
    tag: 'Ruby'
  },
  {
    title: 'How to combine two hash are identical?',
    tag: 'Ruby'
  },
  {
    title: 'How to get unique keys from two hashes in Ruby?',
    tag: 'Ruby'
  },
  {
    title: 'What does the has_key?, key?, member? and include? methods in a hash?',
    tag: 'Ruby'
  },
  {
    title: 'What are blocks in Ruby?',
    tag: 'Ruby'
  },
  {
    title: 'Does the order of keys matters to compare two hashes?',
    tag: 'Ruby'
  },
  {
    title: 'What is the difference between save and save! methods?',
    tag: 'Rails'
  }, 
  {
    title: 'What is the difference between render and redirect?',
    tag: 'Rails'
  }, 
  {
    title: 'What is the difference between delete and destroy?',
    tag: 'Rails'
  },
  {
    title: 'What is the difference between class and functional components in React?',
    tag: 'React'
  },
  {
    title: 'What is the key property in React?',
    tag: 'React'
  },
  {
    title: 'What is render method in react class component?',
    tag: 'React'
  },
  {
    title: 'What are hooks in React?',
    tag: 'React'
  },
  {
    title: 'What is useState in React?',
    tag: 'React'
  },
  {
    title: 'What is createRoot method in React?',
    tag: 'React'
  }, 
  {
    title: 'What is the difference between has_many :through and has_and_belongs_to_many? Also state which one is better?',
    tag: 'Rails'
  }, 
  {
    title: "What are validations in rails? At what moments of an object's lifecycle validations are checked?",
    tag: 'Rails'
  },
  {
    title: 'What do you mean by polymorphic association in rails? When can one use this association?',
    tag: 'Rails'
  },
  {
    title: 'What are scopes in Rails?',
    tag: 'Rails'
  },
  {
    title: 'What is the difference between class methods and scopes? Are they similar?',
    tag: 'Rails'
  },
  {
    title: 'What do you mean by ActiveRecord callbacks? Explain some ActiveRecord callbacks.',
    tag: 'Rails'
  },
  {
    title: 'What do you mean by ActiveRecord callbacks? Explain some ActiveRecord callbacks.',
    tag: 'Rails'
  },
  {
    title: 'How can you define custom validations in rails?',
    tag: 'Rails'
  },
  {
    title: 'What do you mean by STI(single table inheritance)? What are its advantages and disadvantages?',
    tag: 'Rails'
  },
  {
    title: 'What do you mean by migrations in Rails? What is the usage of rails migrations?',
    tag: 'Rails'
  },
  {
    title: 'What do you mean by N+1 query? How can you resolve N+1 query? Explain by an example.',
    tag: 'Rails'
  },
  {
    title: 'What is the difference between includes and joins?',
    tag: 'Rails'
  },
  {
    title: 'What do you mean by self_join association in Rails?',
    tag: 'Rails'
  },
  {
    title: 'Which of the methods is faster between delete and destroy? Explain why?',
    tag: 'Rails'
  },
  {
    title: 'What is the difference between ActiveModel and ActiveRecord?',
    tag: 'Rails'
  },
  
  {
    title: 'In Ruby, what is the difference between Strings and Symbols? Explain.',
    tag: 'Rails'
  },
  {
    title: 'What do you mean by schema versioning in Rails? When does it change?',
    tag: 'Rails'
  },
  {
    title: 'What do you mean by reversible migrations?',
    tag: 'Rails'
  },
  {
    title: 'How can you run/rollback any specific migration in Rails?',
    tag: 'Rails'
  },
  {
    title: 'When should you use an up and down method instead of a change method inside your migration? Explain by an example.',
    tag: 'Rails'
  },
  {
    title: 'What is shallow nesting of routes and when is preferable to use this?',
    tag: 'Rails'
  },
  {
    title: 'What do you mean by meta Programming in Ruby? Explain how you can implement this in your program?',
    tag: 'Rails'
  },
])
puts 'Questions Created'