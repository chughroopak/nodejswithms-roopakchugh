const { arch, hostname, cpus } = require('os');
const { log } = console;

// log(os.arch())
// log(os.hostname())
// log(os.cpus())

log(arch());
log(hostname());
log(cpus());
