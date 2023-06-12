//define an array that contains the spinner characters in the desired order
const animatingLines = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
const delayBetweenChars = 200; //set the delay between each character animation
let timeout = 100;
// Iterate over each character
for (const char of animatingLines) {
  setTimeout(() => {
    process.stdout.write('\r' + char + '   ');// writes the character with the appropriate delay
  }, timeout);
  timeout += delayBetweenChars;
}
setTimeout(() => {
  process.stdout.write('\n'); // Output a newline character
}, timeout);