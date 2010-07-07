!SLIDE section
# Present #

!SLIDE
# Ruby 1.8 #
* Currently 1.8.7
* Stable, works fine
* But slow

!SLIDE
# YARV #
* A new implementation of Ruby
* by Koichi Sasada (aka ko1n)
* 2005 and 2006 : unofficial project
* 1st January 2007 : the new official Ruby 1.9

!SLIDE
# The versions #
* 25th December 2007 : 1.9.0
  * A milestone
  * Not ready for main usage
* 30th January 2009 : 1.9.1
  * Claimed as stable
  * But lot of bugs (segfaults)
  * Many libs not ported to Ruby 1.9
* Last week : 1.9.2-rc
* In one month : 1.9.2
  * Should be the _good_ one

!SLIDE section
# So, what's new? #

!SLIDE
# Performance #
* Ruby 1.9 is 3x to 5x faster than Ruby 1.8
* It depends of the benchmarks

!SLIDE
# Encoding #

    @@@ ruby
    # encoding: utf-8
    "hellö".encoding  # => "UTF-8"
    "hellö".encode("ISO-8859-1")

!SLIDE
# Fibers #

    @@@ ruby
    fib = Fiber.new do
      f1 = f2 = 1
      loop do
        Fiber.yield f1
        f1, f2 = f2, f1 + f2
      end
    end
    10.times { puts fib.resume }
    # => 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

!SLIDE
# Hash Improved #
## Hash are now ordered ##

    @@@ ruby
    {:alpha => 1, :beta => 2, :gamma => 3}.keys
    # => [:alpha, :beta, :gamma]

## New syntax for hash ##

    @@@ ruby
    {id: 123, class: "user"}

!SLIDE
# And more #
* Integration of some popular libs: Rubygems, JSON
* Many new methods on the basic classes

