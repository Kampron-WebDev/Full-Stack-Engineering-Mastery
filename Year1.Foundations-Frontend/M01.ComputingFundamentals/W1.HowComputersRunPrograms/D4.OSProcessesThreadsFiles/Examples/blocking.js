// JavaScript runs your code on ONE main thread. A busy loop blocks everything.
// Run me:  node blocking.js

const start = Date.now();
const tick = setInterval(() => {
  console.log(`⏰ tick at ${Date.now() - start} ms`);
}, 200); // we ASK for a tick every 200 ms…

setTimeout(() => {
  console.log('\n🔥 starting 2 seconds of heavy calculation on the main thread…');
  const until = Date.now() + 2000;
  let x = 0;
  while (Date.now() < until) x++; // busy: the thread can't do anything else
  console.log(`🔥 done (${x.toLocaleString()} loops). Notice the missing ticks above!\n`);
}, 700);

setTimeout(() => clearInterval(tick), 4000);

// Lesson: in a web server, one slow calculation freezes EVERY user's request.
// Month 14 shows the fixes: worker threads, child processes, or doing less work.
