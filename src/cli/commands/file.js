'use strict'

module.exports = {
  command: 'file <command>',

  description: 'Interact with IPFS objects representing Unix filesystems.',

  builder (yargs) {
    return yargs
      .commandDir('file')
  }
}
