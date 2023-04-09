import astraRest from "@astrajs/rest"

const astraConfig =
  { astraDatabaseId: process.env.ASTRA_DB_ID
  , astraDatabaseRegion: process.env.ASTRA_DB_REGION
  , applicationToken: process.env.ASTRA_API_APPLICATION_TOKEN
  }
const createAstraClient =
  async (config) => await astraRest.createClient(config)

const basePath = `/api/rest/v2/namespaces/${process.env.ASTRA_DB_KEYSPACE}/collections/user`;

const getUser =
  async (user) => 
    await (await createAstraClient(astraConfig)).get(basePath, 
      {
        params: {
          where: {
            username: { $eq: user.username }
          }
        }
      }
    )

export default getUser

//console.log(await (await astraClient(astraConfig)).get(basePath, {params: {where: {username: {$eq: 'a'}}}}))
//console.log(await getUser({username:"a"}))
//
//
/*
const { data, status } = await (await createAstraClient(astraConfig)).get(
  `${basePath}`,
  {
    username: "cliff",
  }
);
console.log(data)
console.log(status)
*/
