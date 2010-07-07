!SLIDE section
# Past #

!SLIDE
# The origin #
* Yukihiro Matsumoto (aka Matz)
* First version in 1995
* Inspired by LISP, Perl, Smalltalk, Eiffel...
* Object-oriented
* Dynamic typing

!SLIDE
# The specificity #
* Emphasize human, rather than computer, needs
* Principle Of Least Astonishment (POLA)
* Programmer productivity & fun

!SLIDE
# Script / Imperative #
    @@@ ruby
    puts "What's your favorite number?"
    number = gets.chomp
    output_number = number.to_i + 1
    puts output_number.to_s + ' is better!'

!SLIDE
# Object #
    @@@ ruby
    class Person
      attr_reader :name, :age
      def initialize(name, age)
        @name, @age = name, age
      end
      def to_s
        "#@name (#@age)"
      end
    end

    puts Person.new("Bruno", 27)
    # => "Bruno (27)"

!SLIDE
# Functional #
    @@@ ruby
    File.readlines('dict.txt').
        map { |line| line.chomp }.
        grep(/foo|bar/).
        sort.
        each { |word| puts word }

