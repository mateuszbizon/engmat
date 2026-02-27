import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { blockContentType } from './blockContentType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, postType, blockContentType],
}
