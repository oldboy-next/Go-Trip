const os = require("os");
const interfaces = os.networkInterfaces();
let ipAddress;

for (const name of Object.keys(interfaces))
{
    for (const iface of interfaces[name])
    {
        if (iface.family === 'IPv4' && !iface.internal)
        {
            ipAddress = iface.address;
            break;
        }
    }
    if (ipAddress)
    {
        break;
    }
}

module.exports = ipAddress;