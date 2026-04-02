const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const pasta = path.join(__dirname, 'storage');
const arquivo = path.join(pasta, 'aula05.txt');

const conteudo = `Aula 05 - Manipulação de arquivos com Node.js.

Arquivo criado com sucesso durante a atividade final.`;

async function executar() {
  try {
    console.log(chalk.blue('🔄 Iniciando atividade...'));

    // Criar pasta se não existir
    if (!fs.existsSync(pasta)) {
      fs.mkdirSync(pasta);
      console.log(chalk.yellow('📁 Pasta "storage" criada com sucesso!'));
    } else {
      console.log(chalk.gray('📁 Pasta já existe.'));
    }

    // Criar arquivo e escrever conteúdo
    await fs.promises.writeFile(arquivo, conteudo);
    console.log(chalk.green('📄 Arquivo criado com sucesso!'));

    // Ler o arquivo
    const dados = await fs.promises.readFile(arquivo, 'utf-8');

    console.log(chalk.cyan('\n📖 Conteúdo do arquivo:\n'));
    console.log(chalk.white(dados));

    console.log(chalk.green('\n✅ Atividade finalizada com sucesso!'));

  } catch (erro) {
    console.log(chalk.red('❌ Erro ao executar:', erro));
  }
}

executar();