// Exit codes: how a process tells the world "I succeeded" or "I failed".
// Run me (PowerShell):  node exit-codes.js; echo "exit code was $LASTEXITCODE"
// Then try:             node exit-codes.js ok; echo "exit code was $LASTEXITCODE"

const ok = process.argv[2] === 'ok';

if (ok) {
  console.log('✅ All good');
  process.exit(0); // 0 = success
} else {
  console.error('❌ Something failed (this went to stderr, not stdout)');
  process.exit(1); // non-zero = failure. CI pipelines turn red on this!
}
