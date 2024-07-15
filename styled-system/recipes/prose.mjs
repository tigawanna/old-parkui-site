import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const proseFn = /* @__PURE__ */ createRecipe('prose', {
  "size": "base"
}, [])

const proseVariantMap = {
  "size": [
    "base"
  ]
}

const proseVariantKeys = Object.keys(proseVariantMap)

export const prose = /* @__PURE__ */ Object.assign(memo(proseFn.recipeFn), {
  __recipe__: true,
  __name__: 'prose',
  __getCompoundVariantCss__: proseFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: proseVariantKeys,
  variantMap: proseVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, proseVariantKeys)
  },
  getVariantProps: proseFn.getVariantProps,
})