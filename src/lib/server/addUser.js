//const { createClient } = await import("@astrajs/rest")
import astraRest from "@astrajs/rest"
import getUser from "./getUser.js"

const astraConfig =
  { astraDatabaseId: process.env.ASTRA_DB_ID
  , astraDatabaseRegion: process.env.ASTRA_DB_REGION
  , applicationToken: process.env.ASTRA_API_APPLICATION_TOKEN
  }

console.log(astraConfig)

const basePath = `/api/rest/v2/namespaces/${process.env.ASTRA_DB_KEYSPACE}/collections/user`
console.log(basePath)

const createAstraClient =
  async (config) => await astraRest.createClient(config)

const userExists =
  async (user) => Object.keys((await getUser(user)).data).length > 0

const addUser =
  async (user) => 
    (await userExists(user))
    ? { error: "User already Exists", status: 409 }
    : { ...user, ...(await (await createAstraClient(astraConfig)).post(basePath, user)) }

export default addUser



/*
addUser({username: "oaeue6592", key: "u"}).then(console.log)
const { data, status } = await astraClient.post(basePath, {
  username: "cliff",
  publicKeyBase64: "aeou"
});


console.log(data)
console.log(status)
*/
