import jsonChangeValueQuote from './jsonChangeValueQuote'

function extractSchemaOrg(schemaOrgSnippets) {
  let schemaOrgSnippet = ''
  if (
    schemaOrgSnippets
    && schemaOrgSnippets.length
    && schemaOrgSnippets[0].single_snippet.length
    && schemaOrgSnippets[0].single_snippet[0].text
  ) {
    schemaOrgSnippet = schemaOrgSnippets[0].single_snippet[0].text
    // extracting only JSON object from a snippet without extra characters
    schemaOrgSnippet = schemaOrgSnippet.substring(schemaOrgSnippet.indexOf('{'), schemaOrgSnippet.lastIndexOf('}') + 1)
    return jsonChangeValueQuote(schemaOrgSnippet)
  }
  // eslint-disable-next-line
  console.warn('Schema.org is not defined');
  return schemaOrgSnippet
}

export default extractSchemaOrg
