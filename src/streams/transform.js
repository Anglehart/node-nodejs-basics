import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
export const transform = async () => {
    console.log('Write your text:');
    rl.on('line', message => {
        output.write(message.split('').reverse().join('') + '\n');
    });
};

transform();
