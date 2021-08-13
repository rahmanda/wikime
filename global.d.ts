declare module '*.md' {
  import React from 'react'
  interface Attributes {
    title: string
    date: string
    cats: Array<{
      description: string
      name: string
    }>
  }
  const attributes: Attributes
  const react: React.VFC
  export { attributes, react }
}
