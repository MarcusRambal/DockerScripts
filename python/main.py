package main

import (
	"fmt"
	"math/rand"
	"os"
	"strconv"
	"time"
)

func generateMatrix(n int) [][]int {
	matrix := make([][]int, n)
	for i := range matrix {
		matrix[i] = make([]int, n)
		for j := range matrix[i] {
			matrix[i][j] = rand.Intn(10)
		}
	}
	return matrix
}

func multiplyMatrices(A, B [][]int) [][]int {
	n := len(A)
	C := make([][]int, n)
	for i := range C {
		C[i] = make([]int, n)
	}
	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			for k := 0; k < n; k++ {
				C[i][j] += A[i][k] * B[k][j]
			}
		}
	}
	return C
}

func benchmark(n int) {
	A := generateMatrix(n)
	B := generateMatrix(n)

	start := time.Now()
	_ = multiplyMatrices(A, B)
	elapsed := time.Since(start).Milliseconds()

	output := fmt.Sprintf("Go: %d ms\n", elapsed)

	file, err := os.Create("/outputs/go_output.txt")
	if err != nil {
		fmt.Println("Error creating file:", err)
		return
	}
	defer file.Close()
	file.WriteString(output)

	fmt.Print(output)
}

func main() {
	n := 300
	if len(os.Args) > 1 {
		if parsed, err := strconv.Atoi(os.Args[1]); err == nil {
			n = parsed
		}
	}
	benchmark(n)
}
