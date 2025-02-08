use rand::Rng;
use std::fs::File;
use std::io::Write;
use std::time::Instant;
use std::env;

fn generate_matrix(n: usize) -> Vec<Vec<u32>> {
    let mut rng = rand::thread_rng();
    (0..n).map(|_| (0..n).map(|_| rng.gen_range(0..10)).collect()).collect()
}

fn multiply_matrices(A: &Vec<Vec<u32>>, B: &Vec<Vec<u32>>) -> Vec<Vec<u32>> {
    let n = A.len();
    let mut C = vec![vec![0; n]; n];
    
    for i in 0..n {
        for j in 0..n {
            for k in 0..n {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    C
}

fn benchmark(n: usize) {
    let A = generate_matrix(n);
    let B = generate_matrix(n);
    
    let start = Instant::now();
    let _C = multiply_matrices(&A, &B);
    let elapsed = start.elapsed().as_millis();
    
    let output = format!("Rust: {} ms\n", elapsed);
    
    let mut file = File::create("outputs/rust_output.txt").expect("Failed to create file");
    file.write_all(output.as_bytes()).expect("Failed to write to file");
    
    println!("{}", output);
}

fn main() {
    let args: Vec<String> = env::args().collect();
    let n = if args.len() > 1 {
        args[1].parse::<usize>().unwrap_or(300)
    } else {
        300
    };
    benchmark(n);
}
