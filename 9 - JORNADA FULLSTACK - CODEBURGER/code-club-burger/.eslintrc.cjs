module.exports = {
    env: {
      node: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:node/recommended',
      'plugin:prettier/recommended', // Isso irá ativar a configuração do Prettier
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      'prettier/prettier': 'error', // Faz com que qualquer violação do Prettier seja tratada como erro
      'no-console': 'warn', // Exemplo de outra regra customizada (aviso ao invés de erro)
      'node/no-missing-require': 'error', // Regra para verificar require inválidos em arquivos Node.js
      'import/no-unresolved': 'error', // Garante que os imports estejam corretos
    },
  };
  