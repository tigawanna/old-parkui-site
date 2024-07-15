import { getPatternStyles, patternFns } from '../helpers.mjs';
import { css } from '../css/index.mjs';

const containerConfig = {
transform(props28) {
  return {
    position: "relative",
    width: "100%",
    mx: "auto",
    px: { base: "4", md: "6" },
    ...props28
  };
}}

export const getContainerStyle = (styles = {}) => {
  const _styles = getPatternStyles(containerConfig, styles)
  return containerConfig.transform(_styles, patternFns)
}

export const container = (styles) => css(getContainerStyle(styles))
container.raw = getContainerStyle