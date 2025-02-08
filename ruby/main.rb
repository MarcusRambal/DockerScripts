def generate_matrix(n)
  Array.new(n) { Array.new(n) { rand(10) } }
end

def multiply_matrices(a, b)
  n = a.size
  c = Array.new(n) { Array.new(n, 0) }

  (0...n).each do |i|
    (0...n).each do |j|
      (0...n).each do |k|
        c[i][j] += a[i][k] * b[k][j]
      end
    end
  end
  c
end

def benchmark(n = 300)
  a = generate_matrix(n)
  b = generate_matrix(n)

  start = Time.now
  c = multiply_matrices(a, b)
  elapsed_ms = (Time.now - start) * 1000

  puts "Ruby: %.3f ms" % elapsed_ms
end

benchmark
