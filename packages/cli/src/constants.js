const { resolve } = require('path')

const SEEDER_DAEMON = 'seeder-daemon'

const CONFIG_FILENAME = 'permanent-seeder.toml'

const ENDPOINT_HOOK_FILENAME = 'permanent-seeder-endpoint-hook.js'

const TEMPLATE_CONFIG_FILE_PATH = resolve(__dirname, 'templates', 'permanent-seeder.template.toml')
const TEMPLATE_ENDPOINT_HOOK = resolve(__dirname, 'templates', 'endpoint-hook.template.js')

const MESSAGE_KEY_ADD = 'keys:add'
const MESSAGE_KEY_REMOVE = 'keys:remove'

module.exports.SEEDER_DAEMON = SEEDER_DAEMON
module.exports.CONFIG_FILENAME = CONFIG_FILENAME
module.exports.ENDPOINT_HOOK_FILENAME = ENDPOINT_HOOK_FILENAME
module.exports.TEMPLATE_CONFIG_FILE_PATH = TEMPLATE_CONFIG_FILE_PATH
module.exports.TEMPLATE_ENDPOINT_HOOK = TEMPLATE_ENDPOINT_HOOK
module.exports.MESSAGE_KEY_ADD = MESSAGE_KEY_ADD
module.exports.MESSAGE_KEY_REMOVE = MESSAGE_KEY_REMOVE