// Compiled: translate first, run later.
//   g++ hello.cpp -o hello.exe
//   ./hello.exe
#include <iostream>

int main() {
    long long total = 0;
    for (long long i = 0; i < 100'000'000; ++i) total += i % 7;
    std::cout << "C++ says hello. total = " << total << '\n';
}
