import { queryType, stringArg, makeSchema, objectType } from "@nexus/schema";


const User = objectType({
  name: "Viewer", 
  definition(t) {
    t.id("id")
    t.string("name")
    t.string("status")
  }
})

const Query = queryType({
  definition(t) {
    t.field('viewer', {
      type: "Viewer",
      resolve() {
        return { 
          id: 'b6a2ab5b-ad39-445a-b56f-b0ec9cb20549', 
          name: 'John Smith', 
          status: 'cached',
        }
      }
    })
  },
});

export const schema = makeSchema({
  types: [Query, User],
  shouldGenerateArtifacts: process.env.NODE_ENV === 'development',
  outputs: {
    schema: process.cwd() + "/__generated__/schema.graphql",
    typegen: process.cwd() + "/__generated__/typings.ts",
  },
});
