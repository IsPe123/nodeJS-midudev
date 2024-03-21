import { arch, cpus, freemem, platform, release, totalmem } from 'node:os';
import { uptime } from 'node:process';

console.log(platform());
console.log(release());
console.log(arch());
console.log(cpus());
console.log(freemem()/1024/1024);
console.log(totalmem()/1024/1024);
console.log(uptime()/60/60);