//var argon2
import nacl from "tweetnacl/nacl-fast.js"
import util from  "tweetnacl-util"
nacl.util = util
import pbkdf2 from 'pbkdf2'

//import argon2 from "argon2-browser/dist/argon2-bundled.min.js"

/***
import { toast } from "$lib/toast.js"
* {username, password} => { publicKey, secretKey, publicKeyBase64, secretKeyBase64}
***/
const createSigningKeyPair =

  async (clientSideUser) => {
    /*
    if (typeof window === "object") argon2 = (await import("argon2-browser/dist/argon2-bundled.min.js")).default
    if (typeof window === "undefined") argon2 = (await import("argon2")).default
    */
    const salt = "Global Salt + Username:" + clientSideUser.username
    const key = pbkdf2.pbkdf2Sync(clientSideUser.password, salt, 1, 32, 'sha512')
    const keyPair = nacl.sign.keyPair.fromSeed(key)
    /*
    const hash = (nacl.hash(nacl.util.decodeUTF8(hashInput)))
    console.log(hash)
    toast("starting hasher")
    const argon2Settings = {}
    if(typeof window === "object") {
      argon2Settings.pass = clientSideUser.password
      argon2Settings.salt = clientSideUser.username + "Some constant global hash. "
      argon2Settings.hashLen = 32
      hash = await argon2.hash(argon2Settings)
      keyPair = nacl.sign.keyPair.fromSeed((hash.hash))
      console.log("argon2-browser")
    } else {
      argon2Settings.hashLength = 32
      argon2Settings.raw = true
      argon2Settings.salt = Buffer.from(clientSideUser.username + "Some constant global hash.")
      hash = await argon2.hash(clientSideUser.password,argon2Settings)
      keyPair = nacl.sign.keyPair.fromSeed(hash)
      console.log("argon2-node")
    }
    */
    keyPair.publicKeyBase64 = (nacl.util.encodeBase64(keyPair.publicKey))
    keyPair.secretKeyBase64 = (nacl.util.encodeBase64(keyPair.secretKey))
    keyPair.username = clientSideUser.username
    return keyPair
  }

export default createSigningKeyPair
//createSigningKeyPair({username: "u", password: "oue"}).then(console.log)
