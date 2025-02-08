#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void generate_matrix(int n, int matrix[n][n]) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            matrix[i][j] = rand() % 10;
        }
    }
}

void multiply_matrices(int n, int A[n][n], int B[n][n], int C[n][n]) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            C[i][j] = 0;
            for (int k = 0; k < n; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
}

void benchmark(int n) {
    int A[n][n], B[n][n], C[n][n];
    srand(time(NULL));
    generate_matrix(n, A);
    generate_matrix(n, B);

    clock_t start = clock();
    multiply_matrices(n, A, B, C);
    clock_t end = clock();

    double elapsed_ms = (double)(end - start) / CLOCKS_PER_SEC * 1000;

    FILE *file = fopen("/outputs/c_output.txt", "w");
    if (file == NULL) {
        perror("Error al abrir el archivo de salida");
        exit(1);
    }
    fprintf(file, "C: %.3f ms\n", elapsed_ms);
    fclose(file);

    printf("C: %.3f ms\n", elapsed_ms);
}

int main(int argc, char *argv[]) {
    int n = (argc > 1) ? atoi(argv[1]) : 300;
    benchmark(n);
    return 0;
}

