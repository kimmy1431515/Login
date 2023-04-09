import addUser from "../../src/lib/server/addUser.js"
import { redirect } from '@sveltejs/kit'
//import addUser from "$lib/server/addUser.js"

const register =
  async (req , res) =>
    (addUser(
      { username: req.body.username
      , publicKeyBase64: req.body.publicKeyBase64
      }))
    .then( addUserResponse =>
      res
      ?  res.status(addUserResponse.status).json(addUserResponse)
      :  addUserResponse
    )

export default register
/*
register(
  {body:
  { username:"euaoeuuu oae664:u blocueoatnu heoau eoau"
  , publicKeyBase64: "eouoaeueoauafygfryou"
  }}
).then(console.log)
*/
