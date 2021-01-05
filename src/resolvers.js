import { Cat } from './models/Cat'

export const resolvers = {
    Query: {
        hello: () => 'hello',
        cats: () => Cat.find(),
    },
    Mutation: {
        createCat: async (_, {name}) => {
            const fluffy = new Kitten({name});
            await fluffy.save();

            return fluffy
        }
    }
}