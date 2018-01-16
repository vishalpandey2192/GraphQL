import {GraphQLObjectType, GraphQLString,GraphQLList, GraphQLInt, GraphQLInputObjectType,GraphQLNonNull} from "graphql";
import { Author} from "./Author";
import { Comment } from "./Comment";
import {fakeDatabase} from "../../fakeDatabase"
export const Post = new GraphQLObjectType({
    name:"Post",
    description:"Post Details",
    fields: () => ({
        id:{type: GraphQLInt},
        title:{type: GraphQLString},
        content:{type: GraphQLString},

        author: {
         type: Author,
         resolve: (post) => {
             return fakeDatabase.getAuthor(post.author)
        }
        },

        comments: {
            type: new GraphQLList(Comment),
            resolve: (post) => {
                return fakeDatabase.getCommentsForPost(post.id);
    }
        }
    })

});

export const PostInputType = new GraphQLInputObjectType({
    name:"PostInput",
    fields:{
        title: {type: new GraphQLNonNull(GraphQLString)},
        content: {type: new GraphQLNonNull(GraphQLString)},
        author: {type: new GraphQLNonNull(GraphQLString)}
    }
});