def number_of_steps(num)
    steps = 0
    while num > 0
        steps += 1
        num = num.even? ? num / 2 : num - 1
    end
    steps
end

p number_of_steps(14) # 14
p number_of_steps(8) # 8
p number_of_steps(123) # 123