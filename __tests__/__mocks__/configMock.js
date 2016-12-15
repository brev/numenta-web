import {parse} from 'toml'
import {readFileSync} from 'fs'

// const cwd = process.cwd()

const fileCom = readFileSync('packages/numenta.com/config.toml')
const configCom = parse(fileCom)

const fileOrg = readFileSync('packages/numenta.org/config.toml')
const configOrg = parse(fileOrg)


/**
 * Jest test Config mock. Return contents of ../config.toml file.
 * @requires jest webpack
 */

const config = Object.assign({}, configCom, configOrg)

export default config
