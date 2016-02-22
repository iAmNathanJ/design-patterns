require "test/unit"
require_relative "./<%= _.snakeCase(pattern) %>"

class Test<%= _.upperFirst(_.camelCase(pattern)) %> < Test::Unit::TestCase

  def setup
  end

  def teardown
  end

end
