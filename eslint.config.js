import { kolhe } from '@kolhe/eslint-config'

export default kolhe(
  [
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
