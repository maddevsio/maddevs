import extractSchemaOrg from '@/helpers/extractSchemaOrg'

describe('Helper extractSchemaOrg', () => {
  it('if schemaOrgSnippets is valid > will return { name: "schemaOrg" }', () => {
    const arg = [
      {
        single_snippet: [
          {
            text: '{ name: "schemaOrg" }',
          },
        ],
      },
    ]
    const schemaOrg = extractSchemaOrg(arg)
    expect(schemaOrg).toBe('{ name: "schemaOrg" }')
  })

  it('if schemaOrgSnippets property text is empty string > will return empty string', () => {
    const arg = [
      {
        single_snippet: [
          {
            text: '',
          },
        ],
      },
    ]
    const schemaOrg = extractSchemaOrg(arg)
    expect(schemaOrg).toBe('')
  })

  it('if schemaOrgSnippets is not valid > will return empty string', () => {
    expect(extractSchemaOrg(null)).toBe('')
    expect(extractSchemaOrg(undefined)).toBe('')
    expect(extractSchemaOrg('')).toBe('')
    expect(extractSchemaOrg(0)).toBe('')
    expect(extractSchemaOrg(true)).toBe('')
    expect(extractSchemaOrg([])).toBe('')
    expect(extractSchemaOrg({})).toBe('')
  })
})
