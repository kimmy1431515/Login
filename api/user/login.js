import getUser from "../../src/lib/server/getUser.js"
/*
import addUser from "../../src/lib/server/addUser.js"
import getUser from "$lib/server/getUser.js"
import addUser from "$lib/server/addUser.js"
import nacl from "tweetnacl"
nacl.util = (await import("tweetnacl-util")).default
import faunadb from "faunadb"
import query from "faunadb"
const q = query

var client = new faunadb.Client({
  secret: process.env.FAUNA_CAKE_SERVER_KEY,
  endpoint: 'https://db.fauna.com/',
})
const loginToServer  =
  async (loginMessage,publicKeyBase64) => {
    console.log(publicKeyBase64)
    const messageUInt8 = nacl.sign.open(loginMessage,nacl.util.decodeBase64(publicKeyBase64)) //Proves the signer owns the message
    const message = JSON.parse(nacl.util.encodeUTF8(messageUInt8))
    if ( !message || !message.username ) return "Unable to open signed message. Wrong format or public key does not match login request signature."
    const savedUser = await getUser(message.username)
    if ( !savedUser ) return "Public key matches login request signature but username of login request does not match any registered users."
    if ( !(savedUser.publicKeyBase64 === publicKeyBase64)) return "Public key matches login request signature and username exists but login request signature does match that usernames signature(Password is wrong)."//"Don't know why this would happen. Public key stored on server is different from the public key that opens."
    return { user: savedUser, authorizationGranted: message}
  }

*/
const login =
  async ( req, res ) => {
    const user =
      { username: req.body.username
      , publicKeyBase64: req.body.publicKeyBase64
      }
    const userInDatabase = await getUser(user)
    console.log("userInDatabase")
    console.log(userInDatabase)
  }


    /*
    try{

      console.log("auth called")
      console.log(req)

      
      const result = await(
        client.query(q.Login
          ( q.Match(q.Index("by_username"),req.body.username), { password: req.body.password })
        )
      )

      return res.status(200).json({username: req.body.username, message: "succesfully authenticated", status: 200})

    } catch (err){
      const result = { username: req.body.username, message: err.message, status: 400 }
      return res.status(400).json(result)
    }
    */


export default login
