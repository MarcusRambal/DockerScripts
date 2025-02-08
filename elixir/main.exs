defmodule Matrix do
  def generate(n) do
    for _ <- 1..n, do: for(_ <- 1..n, do: :rand.uniform(10) - 1)
  end

  def multiply(A, B) do
    n = length(A)
    
    for i <- 0..(n - 1) do
      for j <- 0..(n - 1) do
        Enum.reduce(0..(n - 1), 0, fn k, acc -> acc + Enum.at(Enum.at(A, i), k) * Enum.at(Enum.at(B, k), j) end)
      end
    end
  end

  def benchmark(n \\ 300) do
    A = generate(n)
    B = generate(n)

    {time, C} = :timer.tc(fn -> multiply(A, B) end)
    
    output = "Elixir: #{Float.round(time / 1_000, 3)} ms\n"
    File.write!("./outputs/elixir_output.txt", output)

    IO.puts(output)
  end
end

args = System.argv()
n = if length(args) > 0, do: String.to_integer(hd(args)), else: 300
Matrix.benchmark(n)
