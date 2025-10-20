# kleines Beispiel: Berechnungen und einfache Funktionalität
def nth_fibonacci(n: int) -> int:
    """Return the nth Fibonacci number (0-based).
    """
    if n < 0:
        raise ValueError("n must be >= 0")
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a

if __name__ == "__main__":
    print("Fibonacci(10) =", nth_fibonacci(10))