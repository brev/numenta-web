import {parse} from 'toml'
import {readFileSync} from 'fs'

const cwd = process.cwd()
const file = readFileSync(`${cwd}/packages/numenta.com/config.toml`)
const config = parse(file)


/**
 * Jest test Config mock. Return contents of ../config.toml file.
 * @requires jest webpack
 */

export default config
