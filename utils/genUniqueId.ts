function genUniqueId(): string {
  const dateStr = Date.now().toString(36)
  const randomStr = Math.random().toString(36).substring(2, 8)
  return `${dateStr}-${randomStr}`
}

export default genUniqueId