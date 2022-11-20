def single_number(nums)
  xor = nums.inject(:^)
  mask = xor & ~(xor - 1)
  nums.partition { |num| num & mask == 0 }.map { |group| group.inject(:^) }
end
puts single_number([2, 1, 1, 3, 2, 5]);
puts single_number([-1, 0]);
puts single_number([0, 1]);
