const isASTNode = (node: any): boolean => {
  return node && typeof node === 'object' && !Array.isArray(node) && typeof node.type === 'number' && (node.loc !== undefined || node.static !== undefined || node.body !== undefined || node.source !== undefined)
}

export const resolveI18nList = (node: any, rt: (input: any) => string): any => {
  if (node === null || node === undefined) return node
  if (typeof node === 'string' || typeof node === 'number' || typeof node === 'boolean') return node
  if (isASTNode(node)) {
    try {
      return rt(node)
    } catch {
      return node.static || node
    }
  }
  if (Array.isArray(node)) {
    return node.map(item => resolveI18nList(item, rt))
  }
  if (typeof node === 'object') {
    const res: Record<string, any> = {}
    for (const key of Object.keys(node)) {
      res[key] = resolveI18nList(node[key], rt)
    }
    return res
  }
  return node
}
