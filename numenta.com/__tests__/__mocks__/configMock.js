import {parse} from 'toml'
import {readFileSync} from 'fs'

const file = readFileSync(`${process.cwd()}/config.toml`)
const config = parse(file)


/**
 * Jest test Config mock. Return contents of ../config.toml file.
 * @requires jest webpack
 */

export default config
