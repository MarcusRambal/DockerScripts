FROM rust:latest
WORKDIR /app
COPY . .
RUN cargo build --release
CMD ["sh", "-c", "./target/release/matrix_multiplication > /outputs/rust_output.txt"]

