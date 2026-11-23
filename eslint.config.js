import { config } from '@kolhe/eslint-config'

export default config(
  [
    { ignores: ['ios/**', 'tools/**', 'docs/research/**'] },
    {
      files: ['src/**/*.ts'],
      rules: {
        'import/no-default-export': 'off'
      }
    }
  ],
  {
    prettier: true,
    markdown: true
  }
)
